import { useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const PRESETS = [
  { label: '$150K', value: 150_000 },
  { label: '$500K', value: 500_000 },
  { label: '$750K', value: 750_000 },
  { label: '$1M', value: 1_000_000 },
  { label: '$2M', value: 2_000_000 },
  { label: '$3M', value: 3_000_000 },
  { label: '$5M', value: 5_000_000 },
]

function formatDisplay(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  if (!digits) return ''
  const num = parseInt(digits, 10)
  if (isNaN(num)) return ''
  return num.toLocaleString('en-US')
}

function parseValue(display: string): number | null {
  const digits = display.replace(/\D/g, '')
  if (!digits) return null
  const num = parseInt(digits, 10)
  return isNaN(num) ? null : num
}

interface LoanAmountInputProps {
  value: number | null
  onChange: (value: number | null) => void
  className?: string
}

export function LoanAmountInput({
  value,
  onChange,
  className,
}: LoanAmountInputProps) {
  const [inputDisplay, setInputDisplay] = useState<string>(
    value ? value.toLocaleString('en-US') : '',
  )

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value
    const formatted = formatDisplay(raw)
    setInputDisplay(formatted)
    onChange(parseValue(formatted))
  }

  function handlePreset(presetValue: number) {
    setInputDisplay(presetValue.toLocaleString('en-US'))
    onChange(presetValue)
  }

  function handleClear() {
    setInputDisplay('')
    onChange(null)
  }

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-[#0D3B66]/50 pointer-events-none select-none">
          $
        </span>
        <input
          type="text"
          inputMode="numeric"
          value={inputDisplay}
          onChange={handleInputChange}
          placeholder="Any amount"
          className={cn(
            'w-full rounded-lg border border-[#0D3B66]/15 bg-white',
            'pl-7 pr-8 py-2 text-sm text-[#0D3B66]',
            'placeholder:text-[#0D3B66]/40',
            'focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C]/60',
            'transition-all duration-150',
          )}
        />
        {value !== null && (
          <button
            onClick={handleClear}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-[#0D3B66]/40 hover:text-[#0D3B66] transition-colors"
            aria-label="Clear loan amount"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {PRESETS.map((preset) => (
          <button
            key={preset.value}
            onClick={() => handlePreset(preset.value)}
            className={cn(
              'px-2.5 py-1 rounded-md text-xs font-medium border transition-all duration-150',
              value === preset.value
                ? 'bg-[#0D3B66] text-white border-[#0D3B66]'
                : 'bg-white text-[#0D3B66]/70 border-[#0D3B66]/15 hover:border-[#0D3B66]/30 hover:text-[#0D3B66]',
            )}
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  )
}
