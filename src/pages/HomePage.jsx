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
      
      <main className="hero-section">
        <div className="hero-content">
          <div className="text-content">
            <h1 className="hero-title">Prediksi Risiko Gizi Buruk Balita</h1>
            <p className="hero-subtitle">
              Karena tumbuh kembang anakmu terlalu berharga untuk ditebak-tebak.
            </p>
            
            <div className="cta-buttons">
                <>
                  <button 
                    className="cta-button primary"
                    onClick={() => navigate('/register')}
                  >
                    Daftar Sekarang
                  </button>
                  <button 
                  className="cta-button secondary"
                  onClick={() => navigate('/prediksi')}
                >
                  Mulai Prediksi
                </button>
                </>

            </div>
          </div>
          
          <div className="image-content">
            <img 
              src={homepageImage} 
              alt="Ilustrasi Gizi Balita" 
              className="hero-image"
            />
          </div>
        </div>
      </main>

      {!isAuthenticated && (
        <section className="auth-prompt">
            <p>Silakan <strong>Masuk</strong> / <strong>Daftar</strong> untuk mulai menggunakan fitur prediksi dan monitoring perkembangan gizi balita Anda.
            Akun Anda akan menyimpan semua riwayat dan grafik pertumbuhan anak secara aman.</p>
        </section>
        
      )}
    </div>
  )
}