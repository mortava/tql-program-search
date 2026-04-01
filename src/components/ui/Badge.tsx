import { cn } from '@/lib/utils'

type BadgeVariant = 'category' | 'doc' | 'property' | 'occupancy' | 'feature'

const variantStyles: Record<BadgeVariant, string> = {
  category: 'bg-[#0D3B66] text-white font-semibold',
  doc: 'bg-[#C9A84C]/15 text-[#8B6914] border border-[#C9A84C]/30',
  property: 'bg-[#0D3B66]/8 text-[#0D3B66] border border-[#0D3B66]/15',
  occupancy: 'bg-slate-100 text-slate-600 border border-slate-200',
  feature: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
}

interface BadgeProps {
  label: string
  variant?: BadgeVariant
  className?: string
}

export function Badge({ label, variant = 'doc', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium leading-tight',
        variantStyles[variant],
        className,
      )}
    >
      {label}
    </span>
  )
}
