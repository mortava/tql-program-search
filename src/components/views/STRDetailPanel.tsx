import { CheckCircle2, XCircle, CheckSquare } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatCurrency } from '@/lib/utils'
import type { STRRequirements } from '@/data/types'

interface STRDetailPanelProps {
  requirements: STRRequirements
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

export function STRDetailPanel({ requirements }: STRDetailPanelProps) {
  if (!requirements.allowed) {
    return (
      <div className="flex items-center gap-2 py-2">
        <XCircle className="h-4 w-4 text-red-400 shrink-0" />
        <span className="text-sm text-[#0D3B66]/60">Short-term rentals are not allowed for this investor.</span>
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
          <AllowedItem label="DSCR" allowed={requirements.allowedOnDSCR} />
          <AllowedItem label="Full Doc" allowed={requirements.allowedOnFullDoc} />
          <AllowedItem label="Alt-Doc" allowed={requirements.allowedOnAltDoc} />
        </div>
      </div>

      {/* Limits */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {requirements.minFico !== undefined && (
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">
              Min FICO
            </span>
            <span className="text-sm font-semibold text-[#0D3B66]">{requirements.minFico}</span>
          </div>
        )}
        {requirements.maxLtv !== undefined && (
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">
              Max LTV
            </span>
            <span className="text-sm font-semibold text-[#0D3B66]">{requirements.maxLtv}%</span>
          </div>
        )}
        {requirements.maxLoanAmount !== undefined && (
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">
              Max Loan
            </span>
            <span className="text-sm font-semibold text-[#0D3B66]">
              {formatCurrency(requirements.maxLoanAmount)}
            </span>
          </div>
        )}
        {requirements.minDscr !== undefined && (
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/40">
              Min DSCR
            </span>
            <span className="text-sm font-semibold text-[#0D3B66]">{requirements.minDscr}x</span>
          </div>
        )}
      </div>

      {/* Rent proof methods */}
      {requirements.rentProofMethods.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <h5 className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
            Rent Proof Methods
          </h5>
          <ul className="flex flex-col gap-1">
            {requirements.rentProofMethods.map((method) => (
              <li key={method} className="flex items-center gap-2">
                <CheckSquare className="h-3.5 w-3.5 text-[#C9A84C] shrink-0" />
                <span className="text-xs text-[#0D3B66]/80">{method}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Property types */}
      {requirements.propertyTypes.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <h5 className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
            Eligible Property Types
          </h5>
          <div className="flex flex-wrap gap-1.5">
            {requirements.propertyTypes.map((pt) => (
              <span
                key={pt}
                className="inline-block rounded-md px-2 py-0.5 text-xs font-medium bg-[#0D3B66]/6 text-[#0D3B66]"
              >
                {pt}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Additional requirements */}
      {requirements.additionalRequirements.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <h5 className="text-[10px] font-semibold uppercase tracking-wider text-[#0D3B66]/50">
            Additional Requirements
          </h5>
          <ul className="flex flex-col gap-1">
            {requirements.additionalRequirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-[#C9A84C] shrink-0" />
                <span className="text-xs text-[#0D3B66]/70">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {requirements.notes && (
        <p className="text-xs text-[#0D3B66]/50 italic border-t border-[#0D3B66]/8 pt-3">
          {requirements.notes}
        </p>
      )}
    </div>
  )
}
