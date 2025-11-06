export default function ServiceCard({ title, desc }) {
  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-xl mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  )
}
