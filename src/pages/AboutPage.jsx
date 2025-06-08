import React from 'react';
import Navbar from './layouts/Navbar'
import Footer from './Layouts/Footer'
import { FaChalkboardTeacher, FaBookOpen, FaUserGraduate, FaUserTie, FaCode, FaMobileAlt, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import '../styles/About.css';
import appScreenshot from '../assets/images/about-image.webp';
import team1 from '../assets/images/kadafi.jpg';
import team2 from '../assets/images/tim2.jpg';
import team3 from '../assets/images/zeta.jpg';

const AboutUs = () => {
  return (
    <div>
    <Navbar hideAuthButton={true} />
      <div className="about-us-page">
        {/* Hero Section with Title */}
        <div className="about-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>About Us</h1>
            <h2>Kami Memiliki Solusi Terbaik untuk Prediksi Gizi Buruk</h2>
            <p>
              Aplikasi kami membantu deteksi dini masalah gizi buruk pada balita dengan teknologi terkini 
              untuk hasil yang akurat dan dapat diandalkan.
            </p>
          </div>
        </div>

        {/* App Description Section */}
        <div className="app-description-section">
          <div className="app-image">
            <img src={appScreenshot} alt="Aplikasi Prediksi Gizi Buruk" />
          </div>
          
          <div className="app-content">
            <h2>Tentang Aplikasi Kami</h2>
            <h3>Solusi Digital untuk Deteksi Dini Gizi Buruk</h3>
            <p>
              Aplikasi ini dikembangkan dengan teknologi mutakhir untuk membantu orang tua dan tenaga kesehatan 
              dalam mengidentifikasi risiko gizi buruk pada balita secara dini.
            </p>
            
            <div className="app-features">
              <div className="feature-item">
                <FaCode className="feature-icon" />
                <div>
                  <h4>Teknologi AI</h4>
                  <p>Algoritma prediktif berbasis machine learning</p>
                </div>
              </div>
              
              <div className="feature-item">
                <FaMobileAlt className="feature-icon" />
                <div>
                  <h4>Akses Mudah</h4>
                  <p>Tersedia di berbagai perangkat mobile</p>
                </div>
              </div>
              
              <div className="feature-item">
                <FaChartLine className="feature-icon" />
                <div>
                  <h4>Analisis Data</h4>
                  <p>Visualisasi perkembangan status gizi</p>
                </div>
              </div>
              
              <div className="feature-item">
                <FaShieldAlt className="feature-icon" />
                <div>
                  <h4>Keamanan</h4>
                  <p>Proteksi data pengguna terjamin</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-stats-container">
          <div className="features-section">
            <div className="feature-card">
              <div className="feature-icon">
                <FaChalkboardTeacher />
              </div>
              <h3>Prediksi Akurat</h3>
              <p>Algoritma canggih untuk analisis risiko gizi buruk</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaBookOpen />
              </div>
              <h3>Edukasi Gizi</h3>
              <p>Materi lengkap untuk pencegahan gizi buruk</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaUserGraduate />
              </div>
              <h3>Monitoring</h3>
              <p>Pemantauan perkembangan gizi secara berkala</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaUserTie />
              </div>
              <h3>Dukungan Ahli</h3>
              <p>Konsultasi dengan ahli gizi berpengalaman</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="stat-item">
              <h4>1,250+</h4>
              <p>Balita Terprediksi</p>
            </div>
            
            <div className="stat-item">
              <h4>60+</h4>
              <p>Puskesmas Bermitra</p>
            </div>
            
            <div className="stat-item">
              <h4>3,210+</h4>
              <p>Kasus Terdeteksi</p>
            </div>
            
            <div className="stat-item">
              <h4>30+</h4>
              <p>Ahli Gizi</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2>Tim Pengembang</h2>
          <h3>Bertemu Dengan Developer Kami</h3>
          <p>
            Tim profesional yang berdedikasi untuk menciptakan solusi teknologi kesehatan anak.
          </p>
          
          <div className="team-members">
            <div className="team-card">
              <img src={team1} alt="Lead Developer" />
              <h4>Adam Riley</h4>
              <p>Lead Developer</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            
            <div className="team-card">
              <img src={team2} alt="Frontend Developer" />
              <h4>Roy Cardona</h4>
              <p>Frontend Developer</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            
            <div className="team-card">
              <img src={team3} alt="Backend Developer" />
              <h4>Robert Fox</h4>
              <p>Backend Developer</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;