import { useState } from 'react'
import { SlidersHorizontal, X, ChevronDown, ChevronUp } from 'lucide-react'
import { Select } from '@/components/ui/Select'
import { LoanAmountInput } from '@/components/ui/LoanAmountInput'
import { cn } from '@/lib/utils'
import {
  PROGRAM_CATEGORIES,
  PROPERTY_TYPES,
  OCCUPANCY_TYPES,
  CITIZENSHIP_TYPES,
  DOC_TYPES,
  LOAN_PURPOSE_TYPES,
} from '@/data/types'
import type { SearchFilters, Investor } from '@/data/types'

const FICO_OPTIONS = [500, 550, 580, 600, 620, 640, 660, 680, 700, 720, 740, 760, 780]

interface FilterBarProps {
  filters: SearchFilters
  investors: Investor[]
  setInvestor: (v: string | null) => void
  setCategory: (v: SearchFilters['category']) => void
  setMinFico: (v: number | null) => void
  setPropertyType: (v: SearchFilters['propertyType']) => void
  setOccupancy: (v: SearchFilters['occupancy']) => void
  setCitizenship: (v: SearchFilters['citizenship']) => void
  setDocType: (v: SearchFilters['docType']) => void
  setLoanPurpose: (v: SearchFilters['loanPurpose']) => void
  setLoanAmount: (v: number | null) => void
  setStrOnly: (v: boolean) => void
  setRuralOnly: (v: boolean) => void
  clearFilters: () => void
  activeFilterCount: number
}

export function FilterBar({
  filters,
  investors,
  setInvestor,
  setCategory,
  setMinFico,
  setPropertyType,
  setOccupancy,
  setCitizenship,
  setDocType,
  setLoanPurpose,
  setLoanAmount,
  setStrOnly,
  setRuralOnly,
  clearFilters,
  activeFilterCount,
}: FilterBarProps) {
  const [expanded, setExpanded] = useState(false)

  const investorOptions = investors.map((inv) => ({
    value: inv.id,
    label: inv.shortName,
  }))

  const ficoOptions = FICO_OPTIONS.map((f) => ({
    value: String(f),
    label: `${f}+`,
  }))

  const filterCountExcludingQuery = (() => {
    let count = 0
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
  })()

  return (
    <div className="bg-white border border-[#0D3B66]/10 rounded-xl shadow-sm overflow-hidden">
      {/* Filter toggle bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-2 text-sm font-semibold text-[#0D3B66] hover:text-[#0D3B66]/80 transition-colors"
          aria-expanded={expanded}
          aria-controls="filter-panel"
        >
          <SlidersHorizontal className="h-4 w-4 text-[#C9A84C]" />
          <span>Filters</span>
          {filterCountExcludingQuery > 0 && (
            <span className="flex items-center justify-center h-5 min-w-5 px-1.5 rounded-full bg-[#C9A84C] text-white text-[10px] font-bold">
              {filterCountExcludingQuery}
            </span>
          )}
          {expanded ? (
            <ChevronUp className="h-3.5 w-3.5 text-[#0D3B66]/40 ml-1" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5 text-[#0D3B66]/40 ml-1" />
          )}
        </button>

        {activeFilterCount > 0 && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 text-xs font-medium text-[#0D3B66]/50 hover:text-[#0D3B66] transition-colors rounded-md px-2 py-1 hover:bg-[#0D3B66]/5"
          >
            <X className="h-3 w-3" />
            Clear all
          </button>
        )}
      </div>

      {/* Expanded filter panel */}
      <div
        id="filter-panel"
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="px-4 pb-4 border-t border-[#0D3B66]/8 pt-4 flex flex-col gap-4">
          {/* Row 1: Investor, Category, Min FICO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
                Investor
              </label>
              <Select
                value={filters.investor}
                onChange={setInvestor}
                options={investorOptions}
                placeholder="All investors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
                Program Category
              </label>
              <Select
                value={filters.category}
                onChange={(v) => setCategory(v as SearchFilters['category'])}
                options={PROGRAM_CATEGORIES.map((c) => ({ value: c, label: c }))}
                placeholder="All categories"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
                Min FICO
              </label>
              <Select
                value={filters.minFico !== null ? String(filters.minFico) : null}
                onChange={(v) => setMinFico(v !== null ? parseInt(v, 10) : null)}
                options={ficoOptions}
                placeholder="Any FICO"
              />
            </div>
          </div>

          {/* Row 2: Property, Occupancy, Citizenship */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
                Property Type
              </label>
              <Select
                value={filters.propertyType}
                onChange={(v) => setPropertyType(v as SearchFilters['propertyType'])}
                options={PROPERTY_TYPES.map((p) => ({ value: p, label: p }))}
                placeholder="All property types"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
                Occupancy
              </label>
              <Select
                value={filters.occupancy}
                onChange={(v) => setOccupancy(v as SearchFilters['occupancy'])}
                options={OCCUPANCY_TYPES.map((o) => ({ value: o, label: o }))}
                placeholder="All occupancy"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
                Citizenship
              </label>
              <Select
                value={filters.citizenship}
                onChange={(v) => setCitizenship(v as SearchFilters['citizenship'])}
                options={CITIZENSHIP_TYPES.map((c) => ({ value: c, label: c }))}
                placeholder="All citizenship"
              />
            </div>
          </div>

          {/* Row 3: Doc Type, Loan Purpose */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
                Doc Type
              </label>
              <Select
                value={filters.docType}
                onChange={(v) => setDocType(v as SearchFilters['docType'])}
                options={DOC_TYPES.map((d) => ({ value: d, label: d }))}
                placeholder="All doc types"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
                Loan Purpose
              </label>
              <Select
                value={filters.loanPurpose}
                onChange={(v) => setLoanPurpose(v as SearchFilters['loanPurpose'])}
                options={LOAN_PURPOSE_TYPES.map((l) => ({ value: l, label: l }))}
                placeholder="All purposes"
              />
            </div>
          </div>

          {/* Row 4: Loan Amount */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
              Loan Amount
            </label>
            <LoanAmountInput value={filters.loanAmount} onChange={setLoanAmount} />
          </div>

          {/* Row 5: Toggles */}
          <div className="flex items-center gap-6 pt-1">
            <ToggleSwitch
              id="str-toggle"
              label="STR Only"
              checked={filters.strOnly}
              onChange={setStrOnly}
            />
            <ToggleSwitch
              id="rural-toggle"
              label="Rural Only"
              checked={filters.ruralOnly}
              onChange={setRuralOnly}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface ToggleSwitchProps {
  id: string
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}

function ToggleSwitch({ id, label, checked, onChange }: ToggleSwitchProps) {
  return (
    <label htmlFor={id} className="flex items-center gap-2 cursor-pointer select-none">
      <div className="relative">
        <input
          id={id}
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div
          className={cn(
            'w-9 h-5 rounded-full transition-colors duration-200',
            checked ? 'bg-[#0D3B66]' : 'bg-[#0D3B66]/15',
          )}
        />
        <div
          className={cn(
            'absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200',
            checked ? 'translate-x-4' : 'translate-x-0',
          )}
        />
      </div>
      <span className="text-sm font-medium text-[#0D3B66]">{label}</span>
    </label>
  )
}
