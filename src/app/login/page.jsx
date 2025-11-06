'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const metadata = {
  title: 'Digimetashop - Login',
  description: 'Digimetashop — Toko buku online, request buku, koleksi eksklusif >5000 judul'
}

export default function Login() {
  const router = useRouter()
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')

  function handle(e) {
    e.preventDefault()
    // simple demo auth
    if (user === 'admin' && pass === '12345') {
      localStorage.setItem('dm_token', 'authenticated')
      router.push('/blog/create')
    } else {
      setErr('Username / password salah. Coba: admin / 12345')
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-md mx-auto px-6">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handle} className="space-y-3">
          <input value={user} onChange={e=>setUser(e.target.value)} placeholder="Username" className="w-full p-3 border rounded" />
          <input value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password" type="password" className="w-full p-3 border rounded" />
          <button className="px-4 py-2 bg-primary text-white rounded">Login</button>
          {err && <p className="text-sm text-red-600 mt-2">{err}</p>}
        </form>
      </div>
    </section>
  )
}
