'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabaseClient'

export default function Register() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [fullname, setFullname] = useState('')
  const [age, setAge] = useState('')
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')

    // Registracija + spremanje dodatnih podataka u user_metadata
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          fullname,
          age,
          location,
        },
      },
    })

    if (signUpError) {
      setError(signUpError.message)
      return
    }

    alert('Registracija uspješna! Provjerite svoj e-mail za potvrdu računa.')
    router.push('/login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E2939] text-white">
      <form onSubmit={handleRegister} className="bg-gray-800 p-8 rounded-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          className="w-full p-3 bg-transparent border rounded-lg"
        />

        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={e => setFullname(e.target.value)}
          required
          className="w-full p-3 bg-transparent border rounded-lg"
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
          required
          className="w-full p-3 bg-transparent border rounded-lg"
        />

        <select
          value={location}
          onChange={e => setLocation(e.target.value)}
          required
          className="w-full p-3 bg-[#1E2939] border rounded-lg"
        >
          <option value="">Select Location</option>
          <option value="Mostar">Mostar</option>
          <option value="Sarajevo">Sarajevo</option>
          <option value="Split">Split</option>
          <option value="Zagreb">Zagreb</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full p-3 bg-transparent border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          autoComplete="new-password"
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full p-3 bg-transparent border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-500 p-3 rounded font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  )
}
