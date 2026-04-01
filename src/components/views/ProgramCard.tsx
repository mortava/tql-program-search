import { useState } from 'react'
import { ChevronDown, ChevronUp, Building2, TrendingUp, FileText, Users, CheckCircle2 } from 'lucide-react'
import type { LoanProgram } from '@/data/programs'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { cn, formatCurrency } from '@/lib/utils'

interface ProgramCardProps {
  program: LoanProgram
}

interface StatItemProps {
  label: string
  value: string
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">{label}</span>
      <span className="text-sm font-semibold text-[#0D3B66]">{value}</span>
    </div>
  )
}

export function ProgramCard({ program }: ProgramCardProps) {
  const [expanded, setExpanded] = useState(false)

  const ficoDisplay = program.minFico === 0 ? 'No US Credit' : `${program.minFico}+`
  const loanRange = `${formatCurrency(program.minLoanAmount)} – ${formatCurrency(program.maxLoanAmount)}`
  const ltvDisplay = `${program.maxLtv}% Max`

  return (
    <Card className="overflow-hidden">
      {/* Card Header — always visible */}
      <button
        className="w-full text-left p-5 flex flex-col gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/60 focus-visible:ring-offset-1 rounded-xl"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {/* Top row: name + category badge + chevron */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1.5 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge label={program.category} variant="category" />
              {program.interestOnly && (
                <Badge label="I/O Available" variant="doc" />
              )}
            </div>
            <h3 className="text-base font-bold text-[#0D3B66] leading-snug">{program.name}</h3>
          </div>
          <div className="shrink-0 mt-1 rounded-lg p-1.5 text-[#0D3B66]/40 hover:text-[#0D3B66] hover:bg-[#0D3B66]/5 transition-colors">
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>
        </div>

        {/* Key stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-[#F4F5EE] rounded-lg">
          <StatItem label="Min FICO" value={ficoDisplay} />
          <StatItem label="Max LTV" value={ltvDisplay} />
          <StatItem label="Loan Range" value={loanRange} />
          {program.maxDti ? (
            <StatItem label="Max DTI" value={`${program.maxDti}%`} />
          ) : (
            <StatItem label="Pre-Pay" value={program.prepaymentPenalty ?? 'Varies'} />
          )}
        </div>

        {/* Doc types + property types */}
        <div className="flex flex-wrap gap-1.5">
          {program.docTypes.map((doc) => (
            <Badge key={doc} label={doc} variant="doc" />
          ))}
        </div>
      </button>

      {/* Expanded details */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="px-5 pb-5 flex flex-col gap-5 border-t border-[#0D3B66]/8 pt-4">
          {/* Description */}
          <p className="text-sm text-[#0D3B66]/70 leading-relaxed">{program.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Property Types */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0D3B66]/50">
                <Building2 className="h-3.5 w-3.5" />
                <span>Property Types</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {program.propertyTypes.map((pt) => (
                  <Badge key={pt} label={pt} variant="property" />
                ))}
              </div>
            </div>

            {/* Occupancy */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0D3B66]/50">
                <Users className="h-3.5 w-3.5" />
                <span>Occupancy</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {program.occupancy.map((occ) => (
                  <Badge key={occ} label={occ} variant="occupancy" />
                ))}
              </div>
            </div>

            {/* Additional details */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0D3B66]/50">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>Details</span>
              </div>
              <div className="flex flex-col gap-1 text-xs text-[#0D3B66]/70">
                {program.maxDti && (
                  <span>Max DTI: <strong className="text-[#0D3B66]">{program.maxDti}%</strong></span>
                )}
                {program.interestOnly && (
                  <span>Interest Only: <strong className="text-[#0D3B66]">Available</strong></span>
                )}
                {program.prepaymentPenalty && (
                  <span>Pre-Pay: <strong className="text-[#0D3B66]">{program.prepaymentPenalty}</strong></span>
                )}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0D3B66]/50">
              <FileText className="h-3.5 w-3.5" />
              <span>Key Features</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {program.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-xs text-[#0D3B66]/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#C9A84C] mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  )
}
