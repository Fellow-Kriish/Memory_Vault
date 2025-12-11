'use client'

import Link from 'next/link'
import { memories } from '../../../data/memories'

type Props = {
  params: { id: string }
}

export default function MemoryPage({ params }: Props) {
  const memory = memories.find((m) => m.id === params.id)

  if (!memory) {
    return (
      <div>
        <h2 className="text-2xl font-semibold">Memory not found</h2>
        <p className="text-gray-400">We couldn't find that memory.</p>
        <p className="mt-4">
          <Link href="/gallery" className="text-blue-400">Back to gallery</Link>
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold">{memory.title}</h2>
        <p className="text-gray-400">{memory.date}</p>
      </div>

      <div className="w-full max-w-4xl mx-auto rounded overflow-hidden bg-black">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <iframe
            src={`https://www.youtube.com/embed/${memory.youtubeId}?rel=0&showinfo=0`}
            title={memory.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>

        <div className="p-4">
          <p className="text-gray-200">{memory.description}</p>
        </div>
      </div>
    </div>
  )
}
