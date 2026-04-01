import { useState, useMemo } from 'react'
import Fuse from 'fuse.js'
import type { IFuseOptions } from 'fuse.js'
import type { LoanProgram } from '@/data/programs'
import { programs } from '@/data/programs'

const fuseOptions: IFuseOptions<LoanProgram> = {
  keys: [
    { name: 'name', weight: 0.35 },
    { name: 'category', weight: 0.25 },
    { name: 'description', weight: 0.15 },
    { name: 'features', weight: 0.1 },
    { name: 'docTypes', weight: 0.1 },
    { name: 'propertyTypes', weight: 0.05 },
  ],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
}

export interface UseSearchResult {
  query: string
  setQuery: (q: string) => void
  activeCategory: string | null
  setActiveCategory: (cat: string | null) => void
  results: LoanProgram[]
  totalCount: number
}

export function useSearch(): UseSearchResult {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const fuse = useMemo(() => new Fuse(programs, fuseOptions), [])

  const results = useMemo(() => {
    let base: LoanProgram[]

    if (query.trim().length >= 2) {
      base = fuse.search(query.trim()).map((r) => r.item)
    } else {
      base = [...programs]
    }

    if (activeCategory) {
      base = base.filter((p) => p.category === activeCategory)
    }

    return base
  }, [query, activeCategory, fuse])

  return {
    query,
    setQuery,
    activeCategory,
    setActiveCategory,
    results,
    totalCount: programs.length,
  }
}
