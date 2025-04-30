'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Account() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (error || !data.user) {
        router.push('/login')
      } else {
        setUser(data.user)
      }
    }
    getUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return user ? (
    <div className="min-h-screen bg-[#1E2939] text-white p-10">
      <div className="bg-gray-800 p-10 rounded-lg max-w-xl">
        <h2 className="text-3xl font-bold mb-6">Moj Profil</h2>
        <div className="space-y-4 text-left">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.user_metadata?.username || '—'}</p>
          <p><strong>Full Name:</strong> {user.user_metadata?.fullname || '—'}</p>
          <p><strong>Age:</strong> {user.user_metadata?.age || '—'}</p>
          <p><strong>Location:</strong> {user.user_metadata?.location || '—'}</p>
        </div>
        <button
          onClick={handleLogout}
          className="mt-10 bg-red-600 hover:bg-red-500 px-6 py-2 rounded font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  ) : null
}
