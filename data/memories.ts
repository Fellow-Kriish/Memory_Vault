export type Memory = {
  id: string
  title: string
  date: string // ISO date or friendly string
  youtubeId: string
  description: string
}

export const memories: Memory[] = [
  {
    id: 'lecture-oops',
    title: 'lets drive',
    date: '2024-01-15',
    youtubeId: '8DWHNBxltrE',
    description: 'Just another lec of Pooja maam',
  },
  {
    id: 'shaadi-part-1',
    title: 'Harsha-weds-krati-part-1',
    date: 'yaad-nahi-hai',
    youtubeId: 'hofBD38rMk8',
    description: 'Part 1 of Harsha and Krati wedding ceremony.',
  },
  {
    id: 'shaadi-part-2',
    title: 'Harsha-weds-krati-part-2',
    date: 'yaad-nahi-hai',
    youtubeId: 'i29G-C6aHCY',
    description: 'Part 2 of Harsha and Krati wedding ceremony.',
  },
]
