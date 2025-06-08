import { useNavigate } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Footer from './Layouts/Footer'
import { checkAuth } from '../services/auth'
import homepageImage from '../assets/images/homepage-illustration.jpg' 
import aboutImage from '../assets/images/about-image.webp'
import stepImage from '../assets/images/step-image.webp'
import FirstImage from '../assets/images/predictive-chart.png'
import SecondImage from '../assets/images/nutrition-plan.png'
import ThirdImage from '../assets/images/padlock.png'
import FourthImage from '../assets/images/learning.png'
import '../styles/HomePage.css'

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
                {!isAuthenticated && (
                  <button 
                    className="cta-button primary mt-3"
                    onClick={() => navigate('/register')}
                  >
                    Daftar Sekarang
                  </button>

                )}
                  <button 
                  className="cta-button secondary mt-3"
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

      <section className="about-section mt-5">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title mt-5">Peduli Gizi</h2>
            <p className="about-description">
              Platform digital yang bertujuan untuk membantu mendeteksi dini risiko gizi buruk pada balita di Indonesia. Kami percaya bahwa setiap anak berhak tumbuh sehat dan berkembang optimal dan semuanya dimulai dari gizi yang baik.  
              Dengan memanfaatkan teknologi kecerdasan buatan (AI) dan data kesehatan nasional, kami menciptakan sistem prediksi yang mudah digunakan oleh orang tua, kader posyandu, serta tenaga media.
            </p>
            
            <div className="why-us">
              <h3 className="why-us-title">Mengapa Kami Hadir?</h3>
              <ul className="why-us-list">
                <li>Setiap tahun, jutaan balita di Indonesia mengalami gizi buruk yang berdampak pada tumbuh kembang mereka.</li>
                <li>Deteksi dini sering terlambat karena kurangnya akses informasi atau alat yang sederhana.</li>
                <li>Kami percaya bahwa teknologi dapat membantu mencegah risiko gizi buruk secara lebih efisien.</li>
              </ul>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src={aboutImage} 
              alt="Tentang Peduli Gizi" 
              className="about-img"
            />
          </div>
        </div>
      </section>
      <section className="steps-section">
        <div className="steps-container">
          <div className="steps-header">
            <h2 className="steps-main-title">Langkah Penggunaan Deteksi</h2>
            <h3 className="steps-subtitle">Gizi Buruk</h3>
            <p className="steps-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>

          <div className="steps-content">
            <div className="steps-image">
              <img src={stepImage} alt="Langkah-langkah penggunaan" className="step-img" />
            </div>

            <div className="steps-list">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-text">
                  <h4 className="step-title">Step 1: Masukkan Data Balita</h4>
                  <p className="step-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
              </div>

              <div className="step-divider"></div>

              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-text">
                  <h4 className="step-title">Step 2: Sistem Analisis Data</h4>
                  <p className="step-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
              </div>

              <div className="step-divider"></div>

              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-text">
                  <h4 className="step-title">Step 3: Dapatkan Hasil & Rekomendasi</h4>
                  <p className="step-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="features-container">
          <div className="features-content">
            <div className="features-text">
              <h2 className="features-main-title">Bagaimana Kami Membantu Anda Dalam Memprediksi Gizi Pada Balita Anda ? </h2>
              <p className="features-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>

            <div className="features-cards">
              <div className="feature-card">
                <div className="feature-icon">
                  <img src={FirstImage} alt="gambar prediksi" className="step-img"/>
                </div>
                <h3 className="feature-title">Kalkulator Prediksi Gizi Buruk</h3>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src={SecondImage} alt="gambar nutrisi" className="step-img"/>
                </div>
                <h3 className="feature-title">Rekomendasi Nutrisi</h3>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src={ThirdImage} alt="gambar nutrisi" className="step-img"/>
                </div>
                <h3 className="feature-title">Aman & Mudah Digunakan</h3>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src={FourthImage} alt="gambar nutrisi" className="step-img"/>
                </div>
                <h3 className="feature-title">Artikel Edukasi</h3>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}