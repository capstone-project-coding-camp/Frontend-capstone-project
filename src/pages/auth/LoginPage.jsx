import { useEffect } from 'react'
import { checkAuth } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm'
import Navbar from '../layouts/Navbar';

export default function LoginPage() {
  const navigate = useNavigate()

  useEffect(() => {
    if (checkAuth()) {
      navigate('/')
    }
  }, [navigate])

  return (
    <>
      <Navbar hideAuthButton={true} />
      <section className="login-container">
        <article className="login-form-container">
          <LoginForm />
        </article>
      </section>
    </>
  )
}