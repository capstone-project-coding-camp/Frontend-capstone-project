import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkAuth } from '../../services/auth'
import RegisterForm from '../../components/auth/RegisterForm'

export default function RegisterPage() {
  const navigate = useNavigate()

  useEffect(() => {
    if (checkAuth()) {
      navigate('/')
    }
  }, [navigate])

  return (
    <section className="register-container">
      <div className="register-form-container">
        <h1 className="register__title">Daftar akun</h1>
        <RegisterForm />
      </div>
    </section>
  )
}