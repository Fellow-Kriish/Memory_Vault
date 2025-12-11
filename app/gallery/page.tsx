'use client'

import Link from 'next/link'
import { memories } from '../../data/memories'
import { useState } from 'react'

function ThumbnailImage({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`)

  return (
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-48 object-cover bg-black"
      onError={() => {
        setImgSrc(`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`)
      }}
    />
  )
}

export default function GalleryPage() {
  return (
    <section>
      <header className="mb-6">
        <h2 className="text-3xl font-bold">Your Memories</h2>
        <p className="text-gray-400 mt-1">A private collection of unlisted videos</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {memories.map((m) => (
          <Link key={m.id} href={`/gallery/${m.id}`}>
            <article className="thumbnail rounded overflow-hidden cursor-pointer">
              <ThumbnailImage youtubeId={m.youtubeId} title={m.title} />
              <div className="p-3">
                <h3 className="font-semibold">{m.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{m.date}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
