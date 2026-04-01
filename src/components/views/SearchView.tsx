import { Search } from 'lucide-react'
import { useSearch } from '@/hooks/useSearch'
import { SearchInput } from '@/components/ui/Input'
import { ProgramCard } from '@/components/views/ProgramCard'
import { CATEGORIES } from '@/data/programs'
import { cn } from '@/lib/utils'

export function SearchView() {
  const { query, setQuery, activeCategory, setActiveCategory, results, totalCount } = useSearch()

  const hasFilters = query.trim().length > 0 || activeCategory !== null
  const showEmptyState = hasFilters && results.length === 0

  function handleCategoryClick(cat: string) {
    setActiveCategory(activeCategory === cat ? null : cat)
  }

  return (
    <div className="min-h-screen bg-[#F4F5EE]">
      {/* Hero / Header */}
      <header className="bg-[#0D3B66]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-8">
          {/* Wordmark */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-[#C9A84C]">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden="true">
                <path
                  d="M12 3L3 8.5V15.5L12 21L21 15.5V8.5L12 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path d="M12 8V16M8 10.5L12 8L16 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-tight leading-none block">TQL</span>
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
            {totalCount} programs available &mdash; find the right fit for your borrower
          </p>

          {/* Search input */}
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search by program, doc type, FICO, property type..."
          />
        </div>

        {/* Category filter strip */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-0">
          <div className="flex items-center gap-2 overflow-x-auto pb-0 scrollbar-hide">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                'shrink-0 px-3.5 py-2 rounded-t-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap border-b-2',
                activeCategory === null
                  ? 'bg-[#F4F5EE] text-[#0D3B66] border-[#F4F5EE]'
                  : 'text-white/70 hover:text-white border-transparent hover:bg-white/10',
              )}
            >
              All Programs
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={cn(
                  'shrink-0 px-3.5 py-2 rounded-t-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap border-b-2',
                  activeCategory === cat
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
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        {/* Results count */}
        {hasFilters && !showEmptyState && (
          <p className="text-xs text-[#0D3B66]/50 mb-4 font-medium">
            Showing {results.length} of {totalCount} programs
            {activeCategory && ` in ${activeCategory}`}
            {query.trim() && ` matching "${query.trim()}"`}
          </p>
        )}

        {!hasFilters && (
          <p className="text-xs text-[#0D3B66]/50 mb-4 font-medium">
            Showing all {totalCount} programs
          </p>
        )}

        {/* Empty state */}
        {showEmptyState && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-[#0D3B66]/8 mb-4">
              <Search className="h-6 w-6 text-[#0D3B66]/30" />
            </div>
            <h2 className="text-base font-semibold text-[#0D3B66] mb-1">No programs found</h2>
            <p className="text-sm text-[#0D3B66]/50 max-w-xs">
              Try adjusting your search or clearing the category filter to see more results.
            </p>
            <button
              onClick={() => {
                setQuery('')
                setActiveCategory(null)
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#0D3B66] text-white text-sm font-medium hover:bg-[#0D3B66]/90 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Results grid */}
        {!showEmptyState && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {results.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-8 mt-4 border-t border-[#0D3B66]/10">
        <p className="text-xs text-[#0D3B66]/40 text-center">
          &copy; {new Date().getFullYear()} Total Quality Lending &mdash; For licensed mortgage professionals only.
          Program guidelines subject to change without notice.
        </p>
      </footer>
    </div>
  )
}
