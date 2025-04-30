'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabaseClient'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    setLoading(false)

    if (error) {
      setError("Neispravni podaci za prijavu.")
    } else {
      router.push('/account')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E2939] text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="email"  
          className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          autoComplete="new-password"  
          className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-600 hover:bg-green-500 p-3 rounded font-semibold transition-all duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Prijava...' : 'Login'}
        </button>

        <p className="text-center text-sm mt-4 text-gray-400">
          Don't have an account?{' '}
          <span
            className="text-white cursor-pointer hover:text-green-600 transition-all duration-300"
            onClick={() => router.push('/register')}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  )
}
