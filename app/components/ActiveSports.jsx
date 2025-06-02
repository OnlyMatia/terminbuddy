"use client"
import { useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function ActiveSports({ selectedSport, setSelectedSport }) {
  const [selectedLocation, setSelectedLocation] = useState("")
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      
      let query = supabase.from('posts').select('*')
      
      if (selectedLocation) {
        query = query.eq('location', selectedLocation)
      }

      if (selectedSport) {
        query = query.eq('sport', selectedSport)
      }

      const { data, error } = await query

      if (error) {
        console.error("Greška prilikom dohvaćanja postova:", error.message)
      } else {
        setPosts(data)
      }
      setLoading(false)
    }

    fetchPosts()
  }, [selectedSport, selectedLocation])

  const handleCardClick = (card) => {
    const query = new URLSearchParams({
      sport: card.sport,
      image: card.image || "/default-image.jpg",
      description: card.description,
      time: card.time,
      date: card.date,
      location: card.location,
      peopleMissing: card.peoplemissing,
      author: card.author,
    }).toString()

    router.push(`/sport?${query}`)
  }

  return (
    <section id="main" className="min-h-screen bg-[#101828] w-full text-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center py-10 text-4xl sm:text-5xl font-semibold uppercase">Trenutno aktivni:</h2>
        <div className="flex flex-row gap-5 justify-center mb-10">
          <select
            className="bg-gray-800 text-white p-3 rounded-xl w-full md:w-1/3 outline-none border border-gray-700 focus:ring-2 focus:ring-blue-500"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Izaberi lokaciju (sve)</option>
            {["Mostar", "Sarajevo", "Split", "Zagreb"].map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            className="bg-gray-800 text-white p-3 rounded-xl w-full md:w-1/3 outline-none border border-gray-700 focus:ring-2 focus:ring-green-500"
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
          >
            <option value="">Izaberi sport (sve)</option>
            {[
              "Football", "Futsal", "Volleyball", "Basketball", "Padel", "Tennis", "Table Tennis"
            ].map((sport) => (
              <option key={sport} value={sport}>
                {sport}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {loading ? (
            <div className="col-span-full text-center text-gray-400">Učitavanje...</div>
          ) : posts.length > 0 ? (
            posts.map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(card)}
                className="cursor-pointer bg-gray-900 rounded-2xl overflow-hidden shadow-xl border-2 border-[#000] transform transition-transform hover:scale-[1.02]"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image || "/default-image.jpg"})` }}
                />
                <div className="p-5 space-y-2">
                  <h2 className="text-2xl font-bold">{card.sport}</h2>
                  <p className="text-sm text-gray-300">Lokacija: {card.location}</p>
                  <p className="text-sm text-gray-300">Potrebno igrača: {card.peoplemissing}</p>
                  <p className="text-gray-400 text-sm">
                    {card.description?.length > 30 ? `${card.description.slice(0, 20)}...` : card.description}
                  </p>
                  <p className="text-sm text-gray-500">Vrijeme: {card.time} | Datum: {card.date}</p>
                  <p className="text-sm text-gray-500">Objavio: <span className="text-[#b7b7b7] hover:text-white">{card.author}</span></p>
                  <div className="flex gap-3 pt-2">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-all">
                      Pogledaj više
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-green-500">
              Nema aktivnih objava
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
