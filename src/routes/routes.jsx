import { lazy } from 'react'
import { checkAuth } from '../services/auth'

const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))
const HomePage = lazy(() => import('../pages/HomePage'))
const BalitaForm = lazy(() => import('../pages/BalitaForm'))
const Riwayat = lazy(() => import('../pages/Riwayat'))
const Profile = lazy(() => import('../pages/Profile'))
const About = lazy(() => import('../pages/AboutPage'))
const Contact = lazy(() => import('../pages/Contact')) 
const PredictResult = lazy(() => import('../pages/PredictionResult')) 
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
  '/': () => <HomePage />,
  '/riwayat': () => <Riwayat />,
  '/about': () => <About />,
  '/contact': () => <Contact />,
  // '/PredictResult': () => <PredictResult />,
  '/prediksi': () => <ProtectedRoute><BalitaForm /></ProtectedRoute>,
  '/profile': () => <ProtectedRoute><Profile /></ProtectedRoute>,
  '/PredictResult/:babyId': (params) => (
    <ProtectedRoute>
      <PredictResult babyId={params?.babyId} />
    </ProtectedRoute>
  ),
}