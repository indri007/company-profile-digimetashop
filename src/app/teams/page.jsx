import TeamCard from '../../components/TeamCard'

export const metadata = {
  title: 'Digimetashop - Our Teams',
  description: 'Digimetashop — Toko buku online, request buku, koleksi eksklusif >5000 judul'
}

async function fetchPeople() {
  try {
    const res = await fetch('https://randomuser.me/api/?results=6', { next: { revalidate: 60 } })
    const data = await res.json()
    return data.results.map((u, i) => ({
      id: i,
      name: u.name.first + ' ' + u.name.last,
      picture: u.picture.large,
      role: ['Founder', 'Manager', 'Curator', 'Marketing', 'Support', 'Logistics'][i] || 'Team',
      bio: 'Bergairah dengan buku dan layanan pelanggan yang baik.'
    }))
  } catch (e) {
    return []
  }
}

export default async function Teams() {
  const people = await fetchPeople()
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Tim Kami</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {people.map(p => <TeamCard key={p.id} person={p} />)}
        </div>
      </div>
    </section>
  )
}
