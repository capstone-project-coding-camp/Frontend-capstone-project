import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkAuth } from '../../services/auth'
import RegisterForm from '../../components/auth/RegisterForm'
import Navbar from '../layouts/Navbar';

export default function RegisterPage() {
  const navigate = useNavigate()

  useEffect(() => {
    if (checkAuth()) {
      navigate('/')
    }
  }, [navigate])

  return (
    <>
      <Navbar hideAuthButton={true} />
      <section className="register-container">
        <div className="register-form-container">
          <RegisterForm />
        </div>
      </section>
    </>
  )
}