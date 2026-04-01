import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-[#0D3B66]/10 bg-white shadow-sm',
        onClick && 'cursor-pointer hover:shadow-md hover:border-[#0D3B66]/20 transition-all duration-200',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
