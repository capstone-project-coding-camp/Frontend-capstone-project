import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkAuth } from '../services/auth'

export default function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!checkAuth()) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div>
      <h1>Welcome to CityCare</h1>
      {/* Add your home page content here */}
    </div>
  )
}