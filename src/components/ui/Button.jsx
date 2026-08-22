import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn.js'

const VARIANTS = {
  primary: 'border-primary bg-primary text-white hover:bg-primary/90',
  outline: 'border-primary bg-transparent text-primary hover:bg-primary/5',
  light: 'border-white/60 bg-transparent text-white hover:bg-white/10',
}

const SIZES = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-[26px] py-3.5 text-base',
  lg: 'px-8 py-4 text-lg',
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 13 13" fill="none" aria-hidden="true" className="h-3 w-3">
      <path
        d="M1.5 6.5h9M6.7 2.2l4.3 4.3-4.3 4.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className,
  children,
  ...props
}) {
  const Comp = to ? Link : href ? 'a' : 'button'
  const compProps = to ? { to } : href ? { href } : { type: 'button' }

  const pill = cn(
    'inline-flex items-center justify-center rounded-full border font-medium leading-none transition-colors duration-300',
    VARIANTS[variant],
    SIZES[size],
  )

  if (arrow) {
    return (
      <Comp {...compProps} {...props} className={cn('group inline-flex items-center gap-2', className)}>
        <span className={pill}>{children}</span>
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-white transition-colors duration-300 group-hover:bg-accent group-hover:text-primary xl:size-12">
          <ArrowIcon />
        </span>
      </Comp>
    )
  }

  return (
    <Comp {...compProps} {...props} className={cn(pill, className)}>
      {children}
    </Comp>
  )
}
