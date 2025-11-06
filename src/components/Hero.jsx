import Image from 'next/image'
import heroImage from '../../public/gambar-ebook.png'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Digimetashop — Toko Buku Online
          </h1>
          <p className="text-lg text-slate-700 mb-6">
            Menyediakan semua kategori buku dan melayani request sesuai kebutuhan — koleksi eksklusif lebih dari 5.000 judul.
          </p>
          <div className="flex gap-3">
            <a href="#services" className="px-5 py-3 bg-primary text-white rounded-md font-medium">Lihat Produk</a>
            <a href="/contact" className="px-5 py-3 border border-primary text-primary rounded-md font-medium">Hubungi Kami</a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-64 bg-white rounded-lg shadow-md flex items-center justify-center">
            <Image src={heroImage} alt="Hero Image" width={1200} height={1300} className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
