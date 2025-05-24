import { useNavigate } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import { checkAuth } from '../services/auth'
import homepageImage from '../assets/images/homepage-illustration.jpg' 
import '../styles/homePage.css'

export default function HomePage() {
  const isAuthenticated = checkAuth()
  const navigate = useNavigate()

  return (
    <div className="homepage-container">
      <Navbar hideAuthButton={true} />
    </div>
  )
}