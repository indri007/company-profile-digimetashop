import ServiceCard from '../../components/ServiceCard'

export const metadata = {
  title: 'Digimetashop - Services',
  description: 'Digimetashop — Toko buku online, request buku, koleksi eksklusif >5000 judul'
}

export default function Services() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Layanan</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard title="Penjualan Buku" desc="Katalog lengkap dari fiksi hingga ilmu pengetahuan." />
          <ServiceCard title="Request Buku Khusus" desc="Melayani pencarian dan pemesanan buku langka." />
          <ServiceCard title="Layanan Paket Koleksi" desc="Paket kurasi buku untuk hadiah atau kolektor." />
        </div>
      </div>
    </section>
  )
}
