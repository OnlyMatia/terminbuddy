"use client"
import { useState } from "react"
import ActiveSports from "./components/ActiveSports"
import Categories from "./components/Categories"

export default function Home() {
  const [selectedSport, setSelectedSport] = useState("")

  return (
    <main className="flex justify-center items-center flex-col">
      <Categories onSelectSport={(sport) => setSelectedSport(sport)} />
      <ActiveSports selectedSport={selectedSport} setSelectedSport={setSelectedSport} />
    </main>
  )
}
