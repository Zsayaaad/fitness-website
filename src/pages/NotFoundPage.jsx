import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container.jsx'
import { Button } from '../components/ui/Button.jsx'
import { PATHS } from '../routes/paths.js'

export default function NotFoundPage() {
  return (
    <Container as="section" className="flex flex-col items-center py-32 text-center">
      <h1 className="font-display text-7xl font-semibold text-heading">404</h1>
      <p className="mt-4 text-lg">The page you are looking for does not exist.</p>
      <Button to={PATHS.home} variant="primary" className="mt-8">
        Back to Home
      </Button>
    </Container>
  )
}
