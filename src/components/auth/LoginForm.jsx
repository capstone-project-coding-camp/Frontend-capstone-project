import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa'
import { getLogin } from '../../services/api'
import { putAccessToken } from '../../services/auth'
import '../../styles/auth.css'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
  
    try {
      const response = await getLogin({ email, password });
      
      // Debug log - check the actual response structure
      console.log('Login response:', response);
  
      if (!response.success) {
        throw new Error(response.message || 'Login failed');
      }
  
      // Get token from the correct location
      const token = response.token;
      
      if (!token) {
        throw new Error('No access token received');
      }
  
      putAccessToken(token);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login process failed');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Please enter your credentials to login</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <a href="#/forgot-password" style={{ 
              display: 'block', 
              textAlign: 'right', 
              marginTop: '0.5rem', 
              fontSize: '0.875rem',
              color: '#667eea'
            }}>
              Forgot password?
            </a>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="loader"></span> Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
        
        <div className="social-auth">
          <div className="social-divider">Or continue with</div>
          <div className="social-buttons">
            <button type="button" className="social-button">
              <FaGoogle className="social-icon" style={{ color: '#DB4437' }} />
            </button>
          </div>
        </div>
        
        <div className="auth-footer">
          Don't have an account? <a href="/register" className="auth-link">Sign up</a>
        </div>
      </div>
    </div>
  )
}