import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  value: string | null
  onChange: (value: string | null) => void
  options: SelectOption[]
  placeholder: string
  className?: string
  id?: string
}

export function Select({
  value,
  onChange,
  options,
  placeholder,
  className,
  id,
}: SelectProps) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const v = e.target.value
    onChange(v === '' ? null : v)
  }

  return (
    <div className={cn('relative', className)}>
      <select
        id={id}
        value={value ?? ''}
        onChange={handleChange}
        className={cn(
          'w-full appearance-none rounded-lg border border-[#0D3B66]/15 bg-white',
          'pl-3 pr-8 py-2 text-sm text-[#0D3B66] leading-tight',
          'focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C]/60',
          'transition-all duration-150 cursor-pointer',
          !value && 'text-[#0D3B66]/50',
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#0D3B66]/40" />
    </div>
  )
}
