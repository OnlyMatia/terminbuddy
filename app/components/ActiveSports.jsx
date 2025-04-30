'use client'
import { useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function ActiveSports({ selectedSport, setSelectedSport }) {
  const [selectedLocation, setSelectedLocation] = useState("")
  const [allPosts, setAllPosts] = useState([]) // Spremamo sve postove
  const [filteredPosts, setFilteredPosts] = useState([]) // Spremamo filtrirane postove
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)

      // Dohvati sve postove
      const { data, error } = await supabase.from('posts').select('*')

      if (error) {
        console.error("Greška prilikom dohvaćanja postova:", error.message)
      } else {
        setAllPosts(data) // Spremi sve postove
        setFilteredPosts(data) // Početno postavi filtrirane postove na sve postove
      }

      setLoading(false)
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    // Filtriraj postove svaki put kad se odabere novi sport ili lokacija
    const filtered = allPosts.filter((post) => {
      const matchesSport = selectedSport ? post.sport === selectedSport : true
      const matchesLocation = selectedLocation ? post.location === selectedLocation : true
      return matchesSport && matchesLocation
    })
    setFilteredPosts(filtered)
  }, [selectedSport, selectedLocation, allPosts])

  const handleCardClick = (card) => {
    sessionStorage.setItem("selectedCard", JSON.stringify(card))

    // Preusmjeri korisnika na detalje o događaju bez provjere prijave
    router.push(`/termin?id=${card.id}`)
  }

  return (
    <section id="main" className="min-h-screen bg-[#101828] w-full text-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center py-10 text-4xl sm:text-5xl font-semibold">Currently Active:</h2>
        <div className="flex flex-row gap-5 justify-center mb-10">
          <select
            className="bg-gray-800 text-white p-3 rounded-xl w-full md:w-1/3 outline-none border border-gray-700 focus:ring-2 focus:ring-blue-500"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Odaberi lokaciju (svi)</option>
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
            <option value="">Odaberi sport (svi)</option>
            {[
              "Football", "Futsal", "Volleyball", "Basketball", "Padel", "Tennis", "TableTennis"
            ].map((sport) => (
              <option key={sport} value={sport}>
                {sport}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {loading ? (
            <div className="col-span-full text-center text-gray-400">Loading posts...</div>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((card, index) => (
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
                  <p className="text-sm text-gray-300">Location: {card.location}</p>
                  <p className="text-sm text-gray-300">Need people: {card.peoplemissing}</p>
                  <p className="text-gray-400 text-sm">
                    {card.description?.length > 30 ? `${card.description.slice(0, 20)}...` : card.description}
                  </p>
                  <p className="text-sm text-gray-500">Time: {card.time} | Date: {card.date}</p>
                  <p className="text-sm text-gray-500">Posted by: <span className="text-[#b7b7b7] hover:text-white">{card.author}</span></p>
                  <div className="flex gap-3 pt-2">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-all">
                      More info
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-green-500">
              No active posts available.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
