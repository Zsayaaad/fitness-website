import { Link, NavLink } from 'react-router-dom'
import { MAIN_NAV } from '../../constants/navigation.js'
import { PATHS } from '../../routes/paths.js'
import { useDisclosure } from '../../hooks/useDisclosure.js'
import { cn } from '../../utils/cn.js'
import { Container } from './Container.jsx'
import { Button } from '../ui/Button.jsx'
import logoDark from '../../assets/images/logo-dark.svg'

function NavLinkItem({ link, onClick }) {
  return (
    <NavLink
      to={link.path}
      onClick={onClick}
      end={link.path === PATHS.home}
      className={({ isActive }) =>
        cn(
          'relative text-lg font-medium text-primary transition-colors after:absolute after:-bottom-[7px] after:left-0 after:h-[3px] after:w-full after:origin-left after:rounded-full after:bg-accent after:transition-transform after:duration-300 after:ease-out',
          isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
        )
      }
    >
      {link.label}
    </NavLink>
  )
}

export function Navbar() {
  const { isOpen, onClose, onToggle } = useDisclosure()

  return (
    <header className="relative z-50">
      <div className="relative z-50 bg-white py-[15px] lg:py-5 xl:py-[30px]">
        <Container className="relative flex items-center justify-between">
          <Link to={PATHS.home} onClick={onClose} className="shrink-0" aria-label="FitCoach — Home">
            <img src={logoDark} alt="FitCoach" className="h-[35px] w-auto xl:h-11" />
          </Link>

          <nav
            aria-label="Main navigation"
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-[30px] xl:flex"
          >
            {MAIN_NAV.map((link) => (
              <NavLinkItem key={link.label} link={link} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              to={PATHS.contact}
              variant="outline"
              size="md"
              arrow
              className="hidden lg:inline-flex"
            >
              Get started
            </Button>

            <button
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="flex size-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full bg-primary lg:size-10 xl:hidden"
            >
              <span
                className={cn(
                  'h-0.5 w-4 rounded-full bg-[#eef1e8] transition-transform duration-300 lg:w-5',
                  isOpen && 'translate-y-[4px] rotate-45',
                )}
              />
              <span
                className={cn(
                  'h-0.5 w-4 rounded-full bg-[#eef1e8] transition-transform duration-300 lg:w-5',
                  isOpen && '-translate-y-[4px] -rotate-45',
                )}
              />
            </button>
          </div>
        </Container>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-primary/60 xl:hidden"
              onClick={onClose}
              aria-hidden="true"
            />
            <nav
              id="mobile-menu"
              aria-label="Mobile navigation"
              className="absolute inset-x-0 top-full z-40 bg-white px-6 pb-7 pt-4 shadow-xl shadow-primary/10 xl:hidden"
            >
              <ul className="flex flex-col items-start gap-3">
                {MAIN_NAV.map((link) => (
                  <li key={link.label}>
                    <NavLinkItem link={link} onClick={onClose} />
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}
