import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa'
import { getRegistered } from '../../services/api'
import '../../styles/auth.css'

export default function RegisterForm() {
  const [full_name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const response = await getRegistered({ full_name, email, password })
      
      if (!response.ok) {
        throw new Error(response.message || 'Registration failed')
      }

      navigate('/login')
    } catch (err) {
      setError(err.message || 'Registration process failed')
      console.error('Registration error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Get started with your free account</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="full_name" className="form-label">Full Name</label>
            <input
              id="full_name"
              type="text"
              className="form-input"
              placeholder="Enter your full name"
              value={full_name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="6"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div style={{ 
              fontSize: '0.75rem', 
              color: '#718096', 
              marginTop: '0.5rem' 
            }}>
              Password must be at least 6 characters
            </div>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="loader"></span> Creating account...
              </>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
        
        <div className="social-auth">
          <div className="social-divider">Or sign up with</div>
          <div className="social-buttons">
            <button type="button" className="social-button">
              <FaGoogle className="social-icon" style={{ color: '#DB4437' }} />
            </button>
          </div>
        </div>
        
        <div className="auth-footer">
          Already have an account? <a href="/login" className="auth-link">Sign in</a>
        </div>
      </div>
    </div>
  )
}
