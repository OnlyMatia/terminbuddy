"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation'

const locations = ["Mostar", "Sarajevo", "Split", "Zagreb"]
const sports = [
  { name: "Football", image: "/nogomet.jpg" },
  { name: "Futsal", image: "/futsal.jpg" },
  { name: "Volleyball", image: "/odbojka.jpg" },
  { name: "Basketball", image: "/kosarka.png" },
  { name: "Padel", image: "/padel.jpg" },
  { name: "Tennis", image: "/tenis.jpg" },
  { name: "Table Tennis", image: "/stolni-tenis.jpg" }
]

// Ovo je već predefinirano polje s autorima
const authors = ["Matija", "Luka", "Antonio", "Frano", "Marko", "Sara", "Jana", "Ivan", "Petra", "David"]

const dummyData = [
  {
    image: "/nogomet.jpg",
    sport: "Football",
    peopleMissing: 4,
    description: "We're playing 5-a-side, looking for 4 more players!",
    time: "17:30h",
    date: "24.04.2025",
    location: "Mostar",
    author: "Matija" // Direktno dodan autor za svaki objekt
  },
  {
    image: "/futsal.jpg",
    sport: "Futsal",
    peopleMissing: 2,
    description: "Quick match in the hall. Join us!",
    time: "20:00h",
    date: "26.04.2025",
    location: "Sarajevo",
    author: "Luka"
  },
  {
    image: "/odbojka.jpg",
    sport: "Volleyball",
    peopleMissing: 3,
    description: "Beach volleyball at the shore.",
    time: "15:00h",
    date: "25.04.2025",
    location: "Split",
    author: "Antonio"
  },
  {
    image: "/kosarka.png",
    sport: "Basketball",
    peopleMissing: 1,
    description: "We need one more for a 3v3 game.",
    time: "19:00h",
    date: "24.04.2025",
    location: "Zagreb",
    author: "Frano"
  },
  {
    image: "/padel.jpg",
    sport: "Padel",
    peopleMissing: 1,
    description: "Looking for a partner to play doubles.",
    time: "21:00h",
    date: "26.04.2025",
    location: "Split",
    author: "Marko"
  },
  {
    image: "/tenis.jpg",
    sport: "Tennis",
    peopleMissing: 1,
    description: "Friendly match, one spot available.",
    time: "16:30h",
    date: "23.04.2025",
    location: "Mostar",
    author: "Sara"
  },
  {
    image: "/stolni-tenis.jpg",
    sport: "Table Tennis",
    peopleMissing: 1,
    description: "Looking for an opponent to play.",
    time: "14:00h",
    date: "27.04.2025",
    location: "Zagreb",
    author: "Jana"
  },
  {
    image: "/nogomet.jpg",
    sport: "Football",
    peopleMissing: 5,
    description: "Full-size pitch, we need 5 more players!",
    time: "18:00h",
    date: "28.04.2025",
    location: "Sarajevo",
    author: "Ivan"
  },
  {
    image: "/futsal.jpg",
    sport: "Futsal",
    peopleMissing: 2,
    description: "Need two more and we’re good to go!",
    time: "20:30h",
    date: "29.04.2025",
    location: "Mostar",
    author: "Petra"
  },
  {
    image: "/kosarka.png",
    sport: "Basketball",
    peopleMissing: 3,
    description: "Three more needed for a 5v5 game.",
    time: "19:30h",
    date: "30.04.2025",
    location: "Split",
    author: "David"
  },
  {
    image: "/stolni-tenis.jpg",
    sport: "Table Tennis",
    peopleMissing: 1,
    description: "Looking for an opponent to play.",
    time: "14:00h",
    date: "27.04.2025",
    location: "Mostar",
    author: "Matija"
  }
]

export default function ActiveSports({ selectedSport, setSelectedSport }) {
  const [selectedLocation, setSelectedLocation] = useState("")

  const filteredData = dummyData.filter((card) => {
    const matchesLocation = selectedLocation === "" || card.location === selectedLocation
    const matchesSport = selectedSport === "" || card.sport === selectedSport
    return matchesLocation && matchesSport
  })

  return (
    <section className="min-h-screen bg-[#101828] w-full text-white ">
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row gap-5 justify-center mb-10">
          <select
            className="bg-gray-800 text-white p-3 rounded-xl w-full md:w-1/3 outline-none border border-gray-700 focus:ring-2 focus:ring-blue-500"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Odaberi lokaciju (svi) </option>
            {locations.map((loc) => (
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
            <option value="">Odaberi sport (svi) </option>
            {sports.map((sport) => (
              <option key={sport.name} value={sport.name}>
                {sport.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((card, index) => (
              <SportCard key={index} {...card} />
            ))
          ) : (
            <div className="col-span-full text-center text-green-500 ">
              Currently there is no active sport with these filters.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function SportCard({ image, sport, peopleMissing, description, time, date, location, author }) {
    const router = useRouter()

    const handleClick = () => {
        const query = new URLSearchParams({
        sport,
        image,
        description,
        time,
        date,
        location,
        peopleMissing,
        author
        }).toString()

        router.push(`/${sport.toLowerCase()}?${query}`)
    }

    return (
        <div onClick={handleClick} className="cursor-pointer bg-gray-900 rounded-2xl overflow-hidden shadow-xl border-2 border-[#000] transform transition-transform hover:scale-[1.02]">
        <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        />
        <div className="p-5 space-y-2">
            <h2 className="text-2xl font-bold">{sport}</h2>
            <p className="text-sm text-gray-300">Location: {location}</p>
            <p className="text-sm text-gray-300">Need people: {peopleMissing}</p>
            <p className="text-gray-400 text-sm">{description}</p>
            <p className="text-sm text-gray-500">Time: {time} | Date: {date}</p>
            <p className="text-sm text-gray-500">Posted by: <span className= " text-[#b7b7b7] hover:text-white ">{author}</span></p> 
            <div className="flex gap-3 pt-2 ">
                <button  className=" bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-all">
                    More info
                </button>
                
            </div>
        </div>
        </div>
    )
}
