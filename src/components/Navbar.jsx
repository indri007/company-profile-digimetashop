import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo-digimeta.webp'

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
         <Image src={logo} alt="Logo" width={80} height={80} />
          <div>
            <div className="text-lg font-bold text-slate-800">Digimetashop</div>
            <div className="text-xs text-slate-500 -mt-1">Toko Buku Online</div>
          </div>
        </Link>
        <nav className="space-x-4 text-slate-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
