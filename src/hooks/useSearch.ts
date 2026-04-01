import { useState, useMemo } from 'react'
import Fuse from 'fuse.js'
import type { IFuseOptions } from 'fuse.js'
import type { Investor, SearchFilters, SearchResult, ProgramDetail, LtvMatrixEntry } from '@/data/types'

const DEFAULT_FILTERS: SearchFilters = {
  query: '',
  investor: null,
  category: null,
  minFico: null,
  maxLtv: null,
  loanAmount: null,
  propertyType: null,
  occupancy: null,
  citizenship: null,
  docType: null,
  loanPurpose: null,
  strOnly: false,
  ruralOnly: false,
}

interface FuseTarget {
  investor: Investor
  searchText: string
}

const fuseOptions: IFuseOptions<FuseTarget> = {
  keys: [{ name: 'searchText', weight: 1 }],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
}

function ltvEntryMatchesFilters(
  entry: LtvMatrixEntry,
  filters: SearchFilters,
): boolean {
  if (filters.minFico !== null && entry.maxFico < filters.minFico) return false
  if (filters.loanAmount !== null) {
    if (
      filters.loanAmount < entry.minLoanAmount ||
      filters.loanAmount > entry.maxLoanAmount
    )
      return false
  }
  if (
    filters.propertyType !== null &&
    !entry.propertyTypes.includes(filters.propertyType)
  )
    return false
  if (
    filters.occupancy !== null &&
    !entry.occupancy.includes(filters.occupancy)
  )
    return false
  if (
    filters.citizenship !== null &&
    !entry.citizenship.includes(filters.citizenship)
  )
    return false
  if (filters.docType !== null && !entry.docTypes.includes(filters.docType))
    return false
  if (
    filters.loanPurpose !== null &&
    !entry.loanPurpose.includes(filters.loanPurpose)
  )
    return false
  return true
}

function programMatchesFilters(
  program: ProgramDetail,
  filters: SearchFilters,
): LtvMatrixEntry[] {
  if (!program.available) return []
  if (filters.category !== null && program.category !== filters.category)
    return []

  const matchingEntries = program.ltvMatrix.filter((entry) =>
    ltvEntryMatchesFilters(entry, filters),
  )

  if (
    filters.minFico !== null ||
    filters.loanAmount !== null ||
    filters.propertyType !== null ||
    filters.occupancy !== null ||
    filters.citizenship !== null ||
    filters.docType !== null ||
    filters.loanPurpose !== null
  ) {
    return matchingEntries
  }

  return program.ltvMatrix
}

function buildSearchResult(
  investor: Investor,
  filters: SearchFilters,
): SearchResult | null {
  if (filters.strOnly && !investor.strRequirements.allowed) return null
  if (
    filters.ruralOnly &&
    !investor.ruralPropertyRules.allowedOnDSCR &&
    !investor.ruralPropertyRules.allowedOnFullDoc &&
    !investor.ruralPropertyRules.allowedOnAltDoc
  )
    return null
  if (
    filters.investor !== null &&
    investor.id !== filters.investor
  )
    return null

  const matchingLtvEntries: SearchResult['matchingLtvEntries'] = []
  const matchingPrograms: ProgramDetail[] = []

  for (const program of investor.programs) {
    const entries = programMatchesFilters(program, filters)
    const hasEntryFilters =
      filters.minFico !== null ||
      filters.loanAmount !== null ||
      filters.propertyType !== null ||
      filters.occupancy !== null ||
      filters.citizenship !== null ||
      filters.docType !== null ||
      filters.loanPurpose !== null

    if (hasEntryFilters && entries.length === 0) continue
    if (!hasEntryFilters && !program.available) continue
    if (filters.category !== null && program.category !== filters.category)
      continue

    matchingPrograms.push(program)
    if (entries.length > 0) {
      matchingLtvEntries.push({ program, entries })
    }
  }

  if (filters.category !== null && matchingPrograms.length === 0) return null

  const hasEntryFilters =
    filters.minFico !== null ||
    filters.loanAmount !== null ||
    filters.propertyType !== null ||
    filters.occupancy !== null ||
    filters.citizenship !== null ||
    filters.docType !== null ||
    filters.loanPurpose !== null

  if (hasEntryFilters && matchingLtvEntries.length === 0) return null

  const allEntries = matchingLtvEntries.flatMap((m) => m.entries)
  const bestMaxLtv =
    allEntries.length > 0
      ? Math.max(...allEntries.map((e) => e.maxLtv))
      : Math.max(
          ...investor.programs
            .filter((p) => p.available)
            .flatMap((p) => p.ltvMatrix.map((e) => e.maxLtv)),
          0,
        )

  const bestMinFico =
    allEntries.length > 0
      ? Math.min(...allEntries.map((e) => e.minFico))
      : investor.generalGuidelines.minFico

  const bestMaxLoanAmount =
    allEntries.length > 0
      ? Math.max(...allEntries.map((e) => e.maxLoanAmount))
      : investor.generalGuidelines.maxLoanAmount

  return {
    investor,
    matchingPrograms,
    matchingLtvEntries,
    bestMaxLtv,
    bestMinFico,
    bestMaxLoanAmount,
  }
}

export interface UseSearchReturn {
  filters: SearchFilters
  setQuery: (q: string) => void
  setInvestor: (v: string | null) => void
  setCategory: (v: SearchFilters['category']) => void
  setMinFico: (v: number | null) => void
  setMaxLtv: (v: number | null) => void
  setLoanAmount: (v: number | null) => void
  setPropertyType: (v: SearchFilters['propertyType']) => void
  setOccupancy: (v: SearchFilters['occupancy']) => void
  setCitizenship: (v: SearchFilters['citizenship']) => void
  setDocType: (v: SearchFilters['docType']) => void
  setLoanPurpose: (v: SearchFilters['loanPurpose']) => void
  setStrOnly: (v: boolean) => void
  setRuralOnly: (v: boolean) => void
  clearFilters: () => void
  results: SearchResult[]
  totalCount: number
  activeFilterCount: number
}

export function useSearch(investors: Investor[]): UseSearchReturn {
  const [filters, setFilters] = useState<SearchFilters>(DEFAULT_FILTERS)

  const fuseTargets = useMemo<FuseTarget[]>(
    () =>
      investors.map((inv) => ({
        investor: inv,
        searchText: [
          inv.name,
          inv.shortName,
          inv.description,
          ...inv.programs.map((p) => p.category),
          ...inv.programs.map((p) => p.notes ?? ''),
        ].join(' '),
      })),
    [investors],
  )

  const fuse = useMemo(() => new Fuse(fuseTargets, fuseOptions), [fuseTargets])

  const results = useMemo<SearchResult[]>(() => {
    let candidateInvestors: Investor[]

    if (filters.query.trim().length >= 2) {
      candidateInvestors = fuse
        .search(filters.query.trim())
        .map((r) => r.item.investor)
    } else {
      candidateInvestors = [...investors]
    }

    return candidateInvestors
      .map((inv) => buildSearchResult(inv, filters))
      .filter((r): r is SearchResult => r !== null)
  }, [filters, fuse, investors])

  const activeFilterCount = useMemo(() => {
    let count = 0
    if (filters.query.trim()) count++
    if (filters.investor) count++
    if (filters.category) count++
    if (filters.minFico !== null) count++
    if (filters.maxLtv !== null) count++
    if (filters.loanAmount !== null) count++
    if (filters.propertyType) count++
    if (filters.occupancy) count++
    if (filters.citizenship) count++
    if (filters.docType) count++
    if (filters.loanPurpose) count++
    if (filters.strOnly) count++
    if (filters.ruralOnly) count++
    return count
  }, [filters])

  function update<K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return {
    filters,
    setQuery: (v) => update('query', v),
    setInvestor: (v) => update('investor', v),
    setCategory: (v) => update('category', v),
    setMinFico: (v) => update('minFico', v),
    setMaxLtv: (v) => update('maxLtv', v),
    setLoanAmount: (v) => update('loanAmount', v),
    setPropertyType: (v) => update('propertyType', v),
    setOccupancy: (v) => update('occupancy', v),
    setCitizenship: (v) => update('citizenship', v),
    setDocType: (v) => update('docType', v),
    setLoanPurpose: (v) => update('loanPurpose', v),
    setStrOnly: (v) => update('strOnly', v),
    setRuralOnly: (v) => update('ruralOnly', v),
    clearFilters: () => setFilters(DEFAULT_FILTERS),
    results,
    totalCount: investors.length,
    activeFilterCount,
  }
}
