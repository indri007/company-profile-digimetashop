import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'

export default function Home() {
  return (
    <>
      <Hero />
      <section id="services" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Layanan Kami</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard title="Jual Buku" desc="Ribuan judul dari berbagai kategori, dikirim cepat." />
            <ServiceCard title="Request Buku" desc="Tidak menemukan buku? Kami menerima request khusus untuk judul langka." />
            <ServiceCard title="Konsultasi Koleksi" desc="Bantuan memilih buku sesuai kebutuhan (akademis / hobi / koleksi)." />
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-4">Testimonial</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">"Pelayanan cepat dan koleksinya lengkap!" — Rina</div>
            <div className="p-4 border rounded">"Bisa request buku langka, sangat membantu." — Budi</div>
            <div className="p-4 border rounded">"Pengiriman rapi dan packaging aman." — Siti</div>
          </div>
        </div>
      </section>
    </>
  )
}
