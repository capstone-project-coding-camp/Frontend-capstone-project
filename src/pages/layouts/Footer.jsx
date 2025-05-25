import React from 'react';
import '../../styles/Footer.css';
import Logo from '../../assets/images/peduli-gizi-logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-header">
        <div className="footer-brand">
          <img src={Logo} alt="Peduli Gizi Logo" className="footer-logo" />
        </div>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><FaFacebook className="social-icon" /></a>
          <a href="#" aria-label="Twitter"><FaTwitter className="social-icon" /></a>
          <a href="#" aria-label="Instagram"><FaInstagram className="social-icon" /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin className="social-icon" /></a>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">Links</h3>
          <ul className="footer-links">
            <li>Tentang</li>
            <li>Edukasi</li>
            <li>Kontak</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">FAQ</h3>
          <ul className="footer-links">
            <li>Terms of Use</li>
            <li>Cookies Use</li>
            <li>Privacy Policy Help</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-links">
            <li>6391 Elgin St. Celina, Delaware New York, USA</li>
            <li>(0333) 75456</li>
            <li>user@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Newsletter</h3>
          <div className="footer-newsletter">
            <button className="footer-button">Daftar Sekarang</button>
            <button className="footer-button secondary">Mulai Prediksi</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;