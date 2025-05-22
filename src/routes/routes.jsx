import { lazy } from 'react'
import { checkAuth } from '../services/auth'

const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))
const HomePage = lazy(() => import('../pages/HomePage'))
// const NewPage = lazy(() => import('../pages/NewPage'))

const AuthWrapper = ({ children }) => {
  if (checkAuth()) {
    window.location.href = '/'
    return null
  }
  return children
}

const ProtectedRoute = ({ children }) => {
  if (!checkAuth()) {
    window.location.href = '/login'
    return null
  }
  return children
}

export const routes = {
  '/login': () => <AuthWrapper><LoginPage /></AuthWrapper>,
  '/register': () => <AuthWrapper><RegisterPage /></AuthWrapper>,
  '/': () => <ProtectedRoute><HomePage /></ProtectedRoute>,
}