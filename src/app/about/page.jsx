import Link from 'next/link'
import Head from "next/head";


export const metadata = {
  title: 'Digimetashop - Tentang Kami',
  description: 'Digimetashop — Toko buku online, request buku, koleksi eksklusif >5000 judul'
}

export default function About() {
  return (
    <>
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4">Tentang Digimetashop</h1>
        <p className="text-slate-700 mb-4">
          Digimetashop adalah toko buku online yang menyediakan semua kategori buku baik pdf,kindle atau MOBI dan melayani request buku sesuai kebutuhan. 
          Dengan koleksi lebih dari 5.000 judul eksklusif, kami berkomitmen menghadirkan pengalaman belanja buku yang mudah dan menyenangkan.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Sejarah Singkat</h2>
        <p className="text-slate-600">Didirikan untuk membantu pembaca menemukan judul langka dan koleksi eksklusif, digimetashop tumbuh menjadi toko yang dipercaya oleh pencinta buku.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Nilai & Budaya</h2>
        <ul className="list-disc pl-6 text-slate-600">
          <li>Customer-first</li>
          <li>Responsif & ramah</li>
          <li>Kualitas & keaslian</li>
        </ul>
      <section className="mt-10 text-center">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
  <p className="text-gray-600 mb-4">
    Butuh bantuan atau mau request buku tertentu?  
    Kamu bisa langsung chat kami lewat WhatsApp.
  </p>
  <Link
    href="https://wa.me/6282141733187"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
  >
    💬 Chat via WhatsApp
  </Link>
</section>
      </div>
    </section>
    </>
    
  )
}