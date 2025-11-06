export default function TeamCard({ person }) {
  return (
    <div className="p-4 border rounded-lg text-center">
      <img src={person.picture} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-3 object-cover" />
      <div className="font-semibold">{person.name}</div>
      <div className="text-sm text-slate-600 mb-2">{person.role}</div>
      <div className="text-sm text-slate-500">{person.bio}</div>
    </div>
  )
}
