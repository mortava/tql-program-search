import { useState } from 'react'
import { ArrowUpDown } from 'lucide-react'
import { cn, formatCurrency } from '@/lib/utils'
import type { LtvMatrixEntry, ProgramDetail } from '@/data/types'

interface GroupedEntry {
  program: ProgramDetail
  entries: LtvMatrixEntry[]
}

interface LtvMatrixTableProps {
  grouped: GroupedEntry[]
}

type SortKey = 'fico' | 'ltv' | 'loan'
type SortDir = 'asc' | 'desc'

function sortEntries(
  entries: LtvMatrixEntry[],
  key: SortKey,
  dir: SortDir,
): LtvMatrixEntry[] {
  return [...entries].sort((a, b) => {
    let diff = 0
    if (key === 'fico') diff = a.minFico - b.minFico
    else if (key === 'ltv') diff = (a.maxLtv ?? 0) - (b.maxLtv ?? 0)
    else if (key === 'loan') diff = a.maxLoanAmount - b.maxLoanAmount
    return dir === 'asc' ? diff : -diff
  })
}

interface SortHeaderProps {
  label: string
  sortKey: SortKey
  currentKey: SortKey
  dir: SortDir
  onSort: (key: SortKey) => void
  className?: string
}

function SortHeader({ label, sortKey, currentKey, dir, onSort, className }: SortHeaderProps) {
  const active = sortKey === currentKey
  return (
    <th
      className={cn(
        'px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider cursor-pointer select-none',
        'text-[#0D3B66]/60 hover:text-[#0D3B66] transition-colors',
        active && 'text-[#0D3B66]',
        className,
      )}
      onClick={() => onSort(sortKey)}
    >
      <div className="flex items-center gap-1">
        {label}
        <ArrowUpDown
          className={cn(
            'h-3 w-3 transition-opacity',
            active ? 'opacity-100 text-[#C9A84C]' : 'opacity-30',
          )}
        />
        {active && (
          <span className="text-[9px] text-[#C9A84C]">{dir === 'asc' ? '↑' : '↓'}</span>
        )}
      </div>
    </th>
  )
}

export function LtvMatrixTable({ grouped }: LtvMatrixTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('fico')
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  if (grouped.length === 0) {
    return (
      <p className="text-xs text-[#0D3B66]/50 italic py-2">No LTV matrix data available.</p>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {grouped.map(({ program, entries }) => {
        const sorted = sortEntries(entries, sortKey, sortDir)
        return (
          <div key={program.category} className="flex flex-col gap-1.5">
            <h4 className="text-xs font-semibold text-[#0D3B66] bg-[#0D3B66]/6 rounded-md px-3 py-1.5">
              {program.category}
            </h4>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto rounded-lg border border-[#0D3B66]/10">
              <table className="w-full text-xs">
                <thead className="bg-[#F4F5EE]">
                  <tr>
                    <SortHeader
                      label="FICO Range"
                      sortKey="fico"
                      currentKey={sortKey}
                      dir={sortDir}
                      onSort={handleSort}
                    />
                    <SortHeader
                      label="Max LTV"
                      sortKey="ltv"
                      currentKey={sortKey}
                      dir={sortDir}
                      onSort={handleSort}
                    />
                    <SortHeader
                      label="Loan Range"
                      sortKey="loan"
                      currentKey={sortKey}
                      dir={sortDir}
                      onSort={handleSort}
                    />
                    <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/60">
                      Property
                    </th>
                    <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/60">
                      Occupancy
                    </th>
                    <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/60">
                      Doc Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((entry, i) => (
                    <tr
                      key={i}
                      className={cn(
                        'border-t border-[#0D3B66]/6 transition-colors',
                        i % 2 === 0 ? 'bg-white' : 'bg-[#F4F5EE]/50',
                      )}
                    >
                      <td className="px-3 py-2 font-medium text-[#0D3B66]">
                        {entry.minFico}–{entry.maxFico === 999 ? '850' : entry.maxFico}
                      </td>
                      <td className="px-3 py-2">
                        <span className="font-semibold text-[#0D3B66]">{entry.maxLtv}%</span>
                        {entry.maxCltv && (
                          <span className="text-[#0D3B66]/40 ml-1">/ {entry.maxCltv}% CLTV</span>
                        )}
                      </td>
                      <td className="px-3 py-2 text-[#0D3B66]/70">
                        {formatCurrency(entry.minLoanAmount)} – {formatCurrency(entry.maxLoanAmount)}
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex flex-wrap gap-1">
                          {entry.propertyTypes.map((pt) => (
                            <span
                              key={pt}
                              className="inline-block rounded px-1.5 py-0.5 text-[9px] font-medium bg-[#0D3B66]/6 text-[#0D3B66]"
                            >
                              {pt}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex flex-wrap gap-1">
                          {entry.occupancy.map((occ) => (
                            <span
                              key={occ}
                              className="inline-block rounded px-1.5 py-0.5 text-[9px] font-medium bg-slate-100 text-slate-600"
                            >
                              {occ}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex flex-wrap gap-1">
                          {entry.docTypes.map((dt) => (
                            <span
                              key={dt}
                              className="inline-block rounded px-1.5 py-0.5 text-[9px] font-medium bg-[#C9A84C]/12 text-[#8B6914]"
                            >
                              {dt}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden flex flex-col gap-2">
              {sorted.map((entry, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[#0D3B66]/10 bg-white p-3 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#0D3B66]">
                      FICO {entry.minFico}–{entry.maxFico === 999 ? '850' : entry.maxFico}
                    </span>
                    <span className="text-sm font-bold text-[#C9A84C]">{entry.maxLtv}% LTV</span>
                  </div>
                  <div className="text-xs text-[#0D3B66]/60">
                    {formatCurrency(entry.minLoanAmount)} – {formatCurrency(entry.maxLoanAmount)}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {entry.propertyTypes.map((pt) => (
                      <span
                        key={pt}
                        className="inline-block rounded px-1.5 py-0.5 text-[9px] font-medium bg-[#0D3B66]/6 text-[#0D3B66]"
                      >
                        {pt}
                      </span>
                    ))}
                    {entry.docTypes.map((dt) => (
                      <span
                        key={dt}
                        className="inline-block rounded px-1.5 py-0.5 text-[9px] font-medium bg-[#C9A84C]/12 text-[#8B6914]"
                      >
                        {dt}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
