import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function SearchInput({ value, onChange, placeholder, className }: InputProps) {
  return (
    <div className={cn('relative', className)}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#0D3B66]/40 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? 'Search programs...'}
        className={cn(
          'w-full rounded-xl border border-[#0D3B66]/15 bg-white',
          'pl-12 pr-10 py-3.5 text-base text-[#0D3B66]',
          'placeholder:text-[#0D3B66]/40',
          'focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C]/60',
          'shadow-sm transition-all duration-150',
        )}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-[#0D3B66]/40 hover:text-[#0D3B66] hover:bg-[#0D3B66]/5 transition-colors"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
