"use client"
import { useEffect, useState } from "react"
import ActiveSports from "./components/ActiveSports"
import Categories from "./components/Categories"
import { deleteExpiredPosts } from "../app/utils/deleteExpiredPosts"

export default function Home() {
  const [selectedSport, setSelectedSport] = useState("")

  useEffect(() => {
    deleteExpiredPosts();
    const interval = setInterval(() => {
      deleteExpiredPosts();
    }, 3600000);  
  
    return () => clearInterval(interval); 
  }, []);

  return (
    <main className="flex justify-center items-center flex-col pt-18">
      <Categories onSelectSport={(sport) => setSelectedSport(sport)} />
      <ActiveSports selectedSport={selectedSport} setSelectedSport={setSelectedSport} />
    </main>
  )
}
