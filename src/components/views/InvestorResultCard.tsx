import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  FileText,
  Clock,
  Home,
} from 'lucide-react'
import type { SearchResult } from '@/data/types'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { LtvMatrixTable } from '@/components/views/LtvMatrixTable'
import { STRDetailPanel } from '@/components/views/STRDetailPanel'
import { RuralDetailPanel } from '@/components/views/RuralDetailPanel'
import { cn, formatCurrency } from '@/lib/utils'

interface InvestorResultCardProps {
  result: SearchResult
}

interface StatItemProps {
  label: string
  value: string
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">
        {label}
      </span>
      <span className="text-sm font-bold text-[#0D3B66]">{value}</span>
    </div>
  )
}

type DetailTab = 'ltv' | 'str' | 'rural' | 'credit' | 'general'

const TABS: { id: DetailTab; label: string }[] = [
  { id: 'ltv', label: 'LTV Matrix' },
  { id: 'str', label: 'STR' },
  { id: 'rural', label: 'Rural' },
  { id: 'credit', label: 'Credit Events' },
  { id: 'general', label: 'General' },
]

export function InvestorResultCard({ result }: InvestorResultCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState<DetailTab>('ltv')

  const { investor, matchingPrograms, matchingLtvEntries, bestMaxLtv, bestMinFico, bestMaxLoanAmount } = result

  const strAllowed = investor.strRequirements.allowed
  const ruralAllowed =
    investor.ruralPropertyRules.allowedOnDSCR ||
    investor.ruralPropertyRules.allowedOnDSCR_STR ||
    investor.ruralPropertyRules.allowedOnFullDoc ||
    investor.ruralPropertyRules.allowedOnAltDoc

  const displayCategories = matchingPrograms.length > 0
    ? matchingPrograms.map((p) => p.category)
    : investor.programs.filter((p) => p.available).map((p) => p.category)

  const ltvGroups =
    matchingLtvEntries.length > 0
      ? matchingLtvEntries
      : investor.programs
          .filter((p) => p.available)
          .map((p) => ({ program: p, entries: p.ltvMatrix }))

  return (
    <Card className="overflow-hidden">
      {/* Card header — always visible */}
      <button
        className="w-full text-left p-5 flex flex-col gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/60 focus-visible:ring-offset-1 rounded-xl"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1.5 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge label={investor.shortName} variant="category" />
              {strAllowed && <Badge label="STR" variant="feature" />}
              {ruralAllowed && <Badge label="Rural" variant="doc" />}
            </div>
            <h3 className="text-base font-bold text-[#0D3B66] leading-snug">{investor.name}</h3>
            <p className="text-xs text-[#0D3B66]/50 line-clamp-1">{investor.description}</p>
          </div>
          <div className="shrink-0 mt-1 rounded-lg p-1.5 text-[#0D3B66]/40 hover:text-[#0D3B66] hover:bg-[#0D3B66]/5 transition-colors">
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-3 p-3 bg-[#F4F5EE] rounded-lg">
          <StatItem label="Best Max LTV" value={`${bestMaxLtv}%`} />
          <StatItem label="Min FICO" value={String(bestMinFico)} />
          <StatItem label="Max Loan" value={formatCurrency(bestMaxLoanAmount)} />
        </div>

        {/* STR / Rural indicators */}
        <div className="flex items-center gap-4">
          <StatusIndicator
            label="Short-Term Rental"
            allowed={strAllowed}
          />
          <StatusIndicator
            label="Rural Property"
            allowed={ruralAllowed}
          />
        </div>

        {/* Matching program categories */}
        {displayCategories.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {displayCategories.slice(0, 6).map((cat) => (
              <span
                key={cat}
                className="inline-block rounded-md px-2 py-0.5 text-[10px] font-medium bg-[#0D3B66]/6 text-[#0D3B66]/70"
              >
                {cat}
              </span>
            ))}
            {displayCategories.length > 6 && (
              <span className="inline-block rounded-md px-2 py-0.5 text-[10px] font-medium bg-[#0D3B66]/6 text-[#0D3B66]/50">
                +{displayCategories.length - 6} more
              </span>
            )}
          </div>
        )}
      </button>

      {/* Expanded detail section */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="border-t border-[#0D3B66]/8">
          {/* Tab bar */}
          <div className="flex overflow-x-auto scrollbar-hide bg-[#F4F5EE]/50 border-b border-[#0D3B66]/8">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveTab(tab.id)
                }}
                className={cn(
                  'shrink-0 px-4 py-2.5 text-xs font-semibold whitespace-nowrap border-b-2 transition-all duration-150',
                  activeTab === tab.id
                    ? 'text-[#0D3B66] border-[#C9A84C] bg-white'
                    : 'text-[#0D3B66]/50 border-transparent hover:text-[#0D3B66] hover:bg-white/50',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div
            className="p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {activeTab === 'ltv' && <LtvMatrixTable grouped={ltvGroups} />}

            {activeTab === 'str' && (
              <STRDetailPanel requirements={investor.strRequirements} />
            )}

            {activeTab === 'rural' && (
              <RuralDetailPanel rules={investor.ruralPropertyRules} />
            )}

            {activeTab === 'credit' && (
              <CreditEventSection seasoning={investor.creditEventSeasoning} />
            )}

            {activeTab === 'general' && (
              <GeneralSection investor={investor} />
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

interface StatusIndicatorProps {
  label: string
  allowed: boolean
}

function StatusIndicator({ label, allowed }: StatusIndicatorProps) {
  return (
    <div className="flex items-center gap-1.5">
      {allowed ? (
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
      ) : (
        <XCircle className="h-3.5 w-3.5 text-[#0D3B66]/25 shrink-0" />
      )}
      <span className={cn('text-xs', allowed ? 'text-[#0D3B66]/70' : 'text-[#0D3B66]/30')}>
        {label}
      </span>
    </div>
  )
}

interface CreditEventSectionProps {
  seasoning: InvestorResultCard_CreditSeasoning | undefined
}

type InvestorResultCard_CreditSeasoning = NonNullable<SearchResult['investor']['creditEventSeasoning']>

function CreditEventSection({ seasoning }: CreditEventSectionProps) {
  if (!seasoning) {
    return (
      <p className="text-xs text-[#0D3B66]/50 italic py-2">
        No credit event seasoning information available.
      </p>
    )
  }

  const events: { label: string; value: string | undefined }[] = [
    { label: 'Bankruptcy', value: seasoning.bankruptcy },
    { label: 'Foreclosure', value: seasoning.foreclosure },
    { label: 'Short Sale', value: seasoning.shortSale },
    { label: 'Deed in Lieu', value: seasoning.deedInLieu },
    { label: 'Loan Modification', value: seasoning.loanModification },
    { label: 'Forbearance', value: seasoning.forbearance },
    { label: 'Mortgage Lates', value: seasoning.mortgageLates },
  ]

  const defined = events.filter((e) => e.value !== undefined)

  if (defined.length === 0) {
    return (
      <p className="text-xs text-[#0D3B66]/50 italic py-2">
        No credit event seasoning information available.
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1.5 mb-1">
        <Clock className="h-3.5 w-3.5 text-[#C9A84C]" />
        <h5 className="text-xs font-semibold text-[#0D3B66]">Credit Event Seasoning Requirements</h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {defined.map((event) => (
          <div
            key={event.label}
            className="flex flex-col gap-0.5 p-2.5 rounded-lg bg-[#F4F5EE] border border-[#0D3B66]/8"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">
              {event.label}
            </span>
            <span className="text-xs font-medium text-[#0D3B66]">{event.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

interface GeneralSectionProps {
  investor: SearchResult['investor']
}

function GeneralSection({ investor }: GeneralSectionProps) {
  const g = investor.generalGuidelines

  return (
    <div className="flex flex-col gap-4">
      {/* Key guidelines */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="flex flex-col gap-0.5 p-2.5 rounded-lg bg-[#F4F5EE]">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">Min FICO</span>
          <span className="text-sm font-bold text-[#0D3B66]">{g.minFico}</span>
        </div>
        <div className="flex flex-col gap-0.5 p-2.5 rounded-lg bg-[#F4F5EE]">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">Max Loan</span>
          <span className="text-sm font-bold text-[#0D3B66]">{formatCurrency(g.maxLoanAmount)}</span>
        </div>
        <div className="flex flex-col gap-0.5 p-2.5 rounded-lg bg-[#F4F5EE]">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">Min Loan</span>
          <span className="text-sm font-bold text-[#0D3B66]">{formatCurrency(g.minLoanAmount)}</span>
        </div>
        {g.maxDti && (
          <div className="flex flex-col gap-0.5 p-2.5 rounded-lg bg-[#F4F5EE]">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">Max DTI</span>
            <span className="text-sm font-bold text-[#0D3B66]">{g.maxDti}%</span>
          </div>
        )}
        {g.maxProperties !== undefined && (
          <div className="flex flex-col gap-0.5 p-2.5 rounded-lg bg-[#F4F5EE]">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">Max Props</span>
            <span className="text-sm font-bold text-[#0D3B66]">{g.maxProperties}</span>
          </div>
        )}
      </div>

      {/* Features row */}
      <div className="flex flex-wrap gap-2">
        {g.interestOnly && (
          <span className="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="h-3 w-3" />
            Interest Only Available
          </span>
        )}
        {g.entityVesting && (
          <span className="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium bg-[#0D3B66]/6 text-[#0D3B66]">
            <Home className="h-3 w-3" />
            Entity Vesting
          </span>
        )}
        {g.trustVesting && (
          <span className="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium bg-[#0D3B66]/6 text-[#0D3B66]">
            <Home className="h-3 w-3" />
            Trust Vesting
          </span>
        )}
      </div>

      {/* Citizenship */}
      {g.citizenshipAllowed.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <h5 className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
            Citizenship Allowed
          </h5>
          <div className="flex flex-wrap gap-1.5">
            {g.citizenshipAllowed.map((c) => (
              <span
                key={c}
                className="inline-block rounded-md px-2 py-0.5 text-xs font-medium bg-[#0D3B66]/6 text-[#0D3B66]/70"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Reserves */}
      {g.reserveRequirements && (
        <div className="flex flex-col gap-1">
          <h5 className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
            Reserve Requirements
          </h5>
          <p className="text-xs text-[#0D3B66]/70">{g.reserveRequirements}</p>
        </div>
      )}

      {/* Prepayment */}
      {g.prepaymentPenaltyOptions.length > 0 && (
        <div className="flex flex-col gap-1">
          <h5 className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
            Prepayment Penalty Options
          </h5>
          <div className="flex flex-wrap gap-1.5">
            {g.prepaymentPenaltyOptions.map((p) => (
              <span
                key={p}
                className="inline-block rounded-md px-2 py-0.5 text-xs font-medium bg-[#C9A84C]/10 text-[#8B6914]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Source docs */}
      {investor.sourceDocuments.length > 0 && (
        <div className="flex flex-col gap-1.5 border-t border-[#0D3B66]/8 pt-3">
          <div className="flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5 text-[#0D3B66]/40" />
            <h5 className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
              Source Documents
            </h5>
          </div>
          <ul className="flex flex-col gap-1">
            {investor.sourceDocuments.map((doc, i) => (
              <li key={i} className="text-xs text-[#0D3B66]/60">{doc}</li>
            ))}
          </ul>
          <p className="text-[10px] text-[#0D3B66]/30 mt-1">
            Last updated: {investor.lastUpdated}
          </p>
        </div>
      )}
    </div>
  )
}
