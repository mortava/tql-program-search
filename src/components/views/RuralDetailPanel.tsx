import { CheckCircle2, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatCurrency } from '@/lib/utils'
import type { RuralPropertyRules } from '@/data/types'

interface RuralDetailPanelProps {
  rules: RuralPropertyRules
}

interface AllowedItemProps {
  label: string
  allowed: boolean
}

function AllowedItem({ label, allowed }: AllowedItemProps) {
  return (
    <div className="flex items-center gap-2">
      {allowed ? (
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
      ) : (
        <XCircle className="h-3.5 w-3.5 text-red-400 shrink-0" />
      )}
      <span className={cn('text-xs', allowed ? 'text-[#0D3B66]/80' : 'text-[#0D3B66]/40 line-through')}>
        {label}
      </span>
    </div>
  )
}

const isAllowed = (rules: RuralPropertyRules) =>
  rules.allowedOnDSCR ||
  rules.allowedOnDSCR_STR ||
  rules.allowedOnFullDoc ||
  rules.allowedOnAltDoc

export function RuralDetailPanel({ rules }: RuralDetailPanelProps) {
  if (!isAllowed(rules)) {
    return (
      <div className="flex items-center gap-2 py-2">
        <XCircle className="h-4 w-4 text-red-400 shrink-0" />
        <span className="text-sm text-[#0D3B66]/60">Rural properties are not allowed for this investor.</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Allowed programs */}
      <div className="flex flex-col gap-1.5">
        <h5 className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
          Allowed Programs
        </h5>
        <div className="flex flex-col gap-1">
          <AllowedItem label="DSCR" allowed={rules.allowedOnDSCR} />
          <AllowedItem label="DSCR STR" allowed={rules.allowedOnDSCR_STR} />
          <AllowedItem label="Full Doc" allowed={rules.allowedOnFullDoc} />
          <AllowedItem label="Alt-Doc" allowed={rules.allowedOnAltDoc} />
        </div>
      </div>

      {/* Limits */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {rules.minFico !== undefined && (
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">
              Min FICO
            </span>
            <span className="text-sm font-semibold text-[#0D3B66]">{rules.minFico}</span>
          </div>
        )}
        {rules.maxLtv !== undefined && (
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">
              Max LTV
            </span>
            <span className="text-sm font-semibold text-[#0D3B66]">{rules.maxLtv}%</span>
          </div>
        )}
        {rules.maxLoanAmount !== undefined && (
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">
              Max Loan
            </span>
            <span className="text-sm font-semibold text-[#0D3B66]">
              {formatCurrency(rules.maxLoanAmount)}
            </span>
          </div>
        )}
        {rules.acreageLimit && (
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">
              Acreage Limit
            </span>
            <span className="text-sm font-semibold text-[#0D3B66]">{rules.acreageLimit}</span>
          </div>
        )}
      </div>

      {/* Restrictions */}
      {rules.additionalRestrictions.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <h5 className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
            Restrictions
          </h5>
          <ul className="flex flex-col gap-1">
            {rules.additionalRestrictions.map((r, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-[#C9A84C] shrink-0" />
                <span className="text-xs text-[#0D3B66]/70">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {rules.notes && (
        <p className="text-xs text-[#0D3B66]/50 italic border-t border-[#0D3B66]/8 pt-3">
          {rules.notes}
        </p>
      )}
    </div>
  )
}
