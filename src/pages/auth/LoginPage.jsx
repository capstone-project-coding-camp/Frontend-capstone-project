import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkAuth } from '../../services/auth'
import LoginForm from '../../components/auth/LoginForm'

export default function LoginPage() {
  const navigate = useNavigate()

  useEffect(() => {
    if (checkAuth()) {
      navigate('/')
    }
  }, [navigate])

  return (
    <section className="login-container">
      <article className="login-form-container">
        <LoginForm />
      </article>
    </section>
  )
}