'use client'
import { useState, useEffect } from 'react'
import BlogCard from '../../components/BlogCard'
import Link from 'next/link'

export default function BlogList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('dm_posts')
    if (saved) setPosts(JSON.parse(saved))
    else {
      // sample posts
      setPosts([
        { title: 'Belanja Buku Online: Tips Aman', excerpt: 'Panduan singkat belanja buku online...', author: 'Admin', slug: 'tips-aman' },
        { title: 'Cara Request Buku Langka', excerpt: 'Layanan request kami siap membantu...', author: 'Admin', slug: 'request-buku' }
      ])
    }
  }, [])

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Blog</h1>
          <Link href="/blog/create" className="px-4 py-2 bg-primary text-white rounded">Buat Artikel</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p, i) => <BlogCard key={i} post={p} />)}
        </div>
      </div>
    </section>
  )
}
