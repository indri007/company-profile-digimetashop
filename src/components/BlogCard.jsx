import Link from 'next/link'

export default function BlogCard({ post }) {
  return (
    <article className="p-4 border rounded-lg bg-white">
      <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
      <p className="text-sm text-slate-600 mb-3">{post.excerpt}</p>
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>{post.author || 'Admin'}</span>
        <Link href={`/blog/${post.slug || ''}`} className="text-primary">Read more</Link>
      </div>
    </article>
  )
}
