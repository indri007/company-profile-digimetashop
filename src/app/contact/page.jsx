export const metadata = {
  title: 'Digimetashop - Hubungi Kami',
  description: 'Digimetashop — Toko buku online, request buku, koleksi eksklusif >5000 judul'
}


export default function Contact() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-2xl font-bold mb-4">Contact</h1>
        <p className="mb-4">Butuh buku tertentu atau ingin bekerja sama? Isi formulir di bawah atau hubungi kami via email.</p>
        <form className="space-y-3">
          <input placeholder="Nama" className="w-full p-3 border rounded" />
          <input placeholder="Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Pesan / Request Buku" className="w-full p-3 border rounded h-36" />
          <button className="px-4 py-2 bg-primary text-white rounded">Kirim Pesan</button>
        </form>
      </div>
    </section>
  )
}
