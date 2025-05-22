import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './layouts/Navbar';
import { checkAuth } from '../services/auth'

export default function HomePage() {
  const isAuthenticated = checkAuth();

  return (
    <div>
    <Navbar hideAuthButton={true} />
      {isAuthenticated ? (
        <p>Welcome back!</p>
      ) : (
        <p>Welcome guest! <a href="/login">Login</a></p>
      )}
    </div>
  )
}