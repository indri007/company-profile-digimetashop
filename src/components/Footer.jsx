import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="mb-2">© {new Date().getFullYear()} digimetashop. Semua hak dilindungi.</p>
        <p className="text-sm">Toko buku online — request buku, ribuan koleksi eksklusif.</p>
        <div className="mt-4">
  <Link
    href="https://wa.me/6282141733187"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-500 hover:text-green-600 font-medium"
  >
    Chat via WhatsApp
  </Link>
      </div>
      </div>
    </footer>
  )
}
