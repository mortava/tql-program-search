import { Search } from 'lucide-react'
import type { Investor } from '@/data/types'
import { PROGRAM_CATEGORIES } from '@/data/types'
import { useSearch } from '@/hooks/useSearch'
import { SearchInput } from '@/components/ui/Input'
import { FilterBar } from '@/components/ui/FilterBar'
import { InvestorResultCard } from '@/components/views/InvestorResultCard'
import { cn } from '@/lib/utils'

interface SearchViewProps {
  investors: Investor[]
}

export function SearchView({ investors }: SearchViewProps) {
  const search = useSearch(investors)
  const {
    filters,
    setQuery,
    setInvestor,
    setCategory,
    setMinFico,
    setLoanAmount,
    setPropertyType,
    setOccupancy,
    setCitizenship,
    setDocType,
    setLoanPurpose,
    setStrOnly,
    setRuralOnly,
    clearFilters,
    results,
    totalCount,
    activeFilterCount,
  } = search

  const hasFilters = activeFilterCount > 0
  const showEmptyState = hasFilters && results.length === 0

  function handleCategoryTab(cat: typeof PROGRAM_CATEGORIES[number] | null) {
    setCategory(cat === filters.category ? null : cat)
  }

  return (
    <div className="min-h-screen bg-[#F4F5EE]">
      {/* Hero / Header */}
      <header className="bg-[#0D3B66]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-8">
          {/* Wordmark */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-[#C9A84C]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-white"
                aria-hidden="true"
              >
                <path
                  d="M12 3L3 8.5V15.5L12 21L21 15.5V8.5L12 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V16M8 10.5L12 8L16 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-tight leading-none block">
                TQL
              </span>
              <span className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase leading-none block">
                Total Quality Lending
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 leading-tight">
            Non-QM Program Search
          </h1>
          <p className="text-[#F4F5EE]/60 text-sm mb-6">
            {totalCount} investor{totalCount !== 1 ? 's' : ''} available &mdash; find the right fit for
            your borrower
          </p>

          {/* Search input */}
          <SearchInput
            value={filters.query}
            onChange={setQuery}
            placeholder="Search by investor, program, doc type, property type..."
          />
        </div>

        {/* Category tab strip */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-0">
          <div className="flex items-center gap-2 overflow-x-auto pb-0 scrollbar-hide">
            <button
              onClick={() => setCategory(null)}
              className={cn(
                'shrink-0 px-3.5 py-2 rounded-t-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap border-b-2',
                filters.category === null
                  ? 'bg-[#F4F5EE] text-[#0D3B66] border-[#F4F5EE]'
                  : 'text-white/70 hover:text-white border-transparent hover:bg-white/10',
              )}
            >
              All
            </button>
            {PROGRAM_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryTab(cat)}
                className={cn(
                  'shrink-0 px-3.5 py-2 rounded-t-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap border-b-2',
                  filters.category === cat
                    ? 'bg-[#F4F5EE] text-[#0D3B66] border-[#F4F5EE]'
                    : 'text-white/70 hover:text-white border-transparent hover:bg-white/10',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">
        {/* Filter bar */}
        <FilterBar
          filters={filters}
          investors={investors}
          setInvestor={setInvestor}
          setCategory={setCategory}
          setMinFico={setMinFico}
          setPropertyType={setPropertyType}
          setOccupancy={setOccupancy}
          setCitizenship={setCitizenship}
          setDocType={setDocType}
          setLoanPurpose={setLoanPurpose}
          setLoanAmount={setLoanAmount}
          setStrOnly={setStrOnly}
          setRuralOnly={setRuralOnly}
          clearFilters={clearFilters}
          activeFilterCount={activeFilterCount}
        />

        {/* Results count */}
        {!showEmptyState && (
          <p className="text-xs text-[#0D3B66]/50 font-medium">
            {hasFilters
              ? `Showing ${results.length} of ${totalCount} investor${totalCount !== 1 ? 's' : ''}`
              : `Showing all ${totalCount} investor${totalCount !== 1 ? 's' : ''}`}
            {filters.category && ` in ${filters.category}`}
            {filters.query.trim() && ` matching "${filters.query.trim()}"`}
          </p>
        )}

        {/* Empty state */}
        {showEmptyState && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-[#0D3B66]/8 mb-4">
              <Search className="h-6 w-6 text-[#0D3B66]/30" />
            </div>
            <h2 className="text-base font-semibold text-[#0D3B66] mb-1">No investors found</h2>
            <p className="text-sm text-[#0D3B66]/50 max-w-xs">
              Try adjusting your search or clearing the filters to see more results.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 rounded-lg bg-[#0D3B66] text-white text-sm font-medium hover:bg-[#0D3B66]/90 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Results list */}
        {!showEmptyState && results.length > 0 && (
          <div className="flex flex-col gap-4">
            {results.map((result) => (
              <InvestorResultCard key={result.investor.id} result={result} />
            ))}
          </div>
        )}

        {/* Zero investors loaded state */}
        {!hasFilters && totalCount === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-[#0D3B66]/8 mb-4">
              <Search className="h-6 w-6 text-[#0D3B66]/30" />
            </div>
            <h2 className="text-base font-semibold text-[#0D3B66] mb-1">No investors loaded</h2>
            <p className="text-sm text-[#0D3B66]/50 max-w-xs">
              Investor data is being populated. Check back shortly.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-8 mt-4 border-t border-[#0D3B66]/10">
        <p className="text-xs text-[#0D3B66]/40 text-center">
          &copy; {new Date().getFullYear()} Total Quality Lending &mdash; For licensed mortgage
          professionals only. Program guidelines subject to change without notice.
        </p>
      </footer>
    </div>
  )
}
