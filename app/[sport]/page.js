"use client"

import { useSearchParams } from 'next/navigation'

export default function SportDetails() {
  const searchParams = useSearchParams()

  const sport = searchParams.get("sport")
  const image = searchParams.get("image")
  const description = searchParams.get("description")
  const time = searchParams.get("time")
  const date = searchParams.get("date")
  const location = searchParams.get("location")
  const peopleMissing = searchParams.get("peopleMissing")
  const author = searchParams.get("author")

  return (
    <div className="min-h-screen bg-[#101828] text-white flex justify-center items-start py-12 px-4 pt-19">
      <div className="w-full max-w-7xl flex flex-col items-center gap-10">
        <div className="w-full max-w-2xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-black">
          <div
            className="w-full h-64 sm:h-80 md:h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">{sport}</h1>
            <p className="mt-4 text-gray-300 text-base leading-relaxed">{description}</p>

            <div className="mt-6 space-y-2 text-lg text-gray-400">
              <p><span className="font-semibold text-white">📍 Lokacija:</span> {location}</p>
              <p><span className="font-semibold text-white">📅 Datum:</span> {date}</p>
              <p><span className="font-semibold text-white">⏰ Vrijeme:</span> {time}</p>
              <p><span className="font-semibold text-white">👥 Nedostaje igrača:</span> {peopleMissing}</p>
              <p><span className="font-semibold text-white">✍️ Autor:</span> {author}</p>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                className="cursor-pointer bg-green-600 hover:bg-green-500 transition-colors duration-300 text-white px-6 py-2 rounded-lg font-semibold"
                onClick={() => alert("Kontaktiraj organizatora!")}
              >
                Kontaktiraj
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
