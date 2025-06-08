import React from 'react';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar hideAuthButton={true} />
      
      <div className="contact-container">
        {/* Header Card */}
        <div className="contact-header-card">
          <h1>Kontak Kami</h1>
          <p className="contact-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-content">
          {/* Contact Items Container Card - Left Side */}
          <div className="contact-items-card">
            <div className="contact-items-grid">
              <div className="contact-item-card blue">
                <div className="color-strip"></div>
                <div className="contact-item-content">
                  <div className="contact-icon-container">
                    <FaPhone className="contact-icon" />
                  </div>
                  <h3>No Handphone</h3>
                  <p>+6281-2345-6789</p>
                </div>
              </div>

              <div className="contact-item-card green">
                <div className="color-strip"></div>
                <div className="contact-item-content">
                  <div className="contact-icon-container">
                    <FaWhatsapp className="contact-icon" />
                  </div>
                  <h3>Whatsapp</h3>
                  <p>082-111-234</p>
                </div>
              </div>

              <div className="contact-item-card orange">
                <div className="color-strip"></div>
                <div className="contact-item-content">
                  <div className="contact-icon-container">
                    <FaEnvelope className="contact-icon" />
                  </div>
                  <h3>Email</h3>
                  <p>peduligita@gmail.com</p>
                </div>
              </div>

              <div className="contact-item-card purple">
                <div className="color-strip"></div>
                <div className="contact-item-content">
                  <div className="contact-icon-container">
                    <FaMapMarkerAlt className="contact-icon" />
                  </div>
                  <h3>Lokasi</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card - Right Side */}
          <div className="contact-form-card-wrapper">
            <div className="contact-form-card">
              <h2>Menghubungi</h2>
              <p className="form-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
              </p>

              <form className="contact-form">
                <div className="form-group">
                  <label>Nama</label>
                  <input type="text" className="form-input" placeholder="Masukkan nama Anda" />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-input" placeholder="Masukkan email Anda" />
                </div>

                <div className="form-group">
                  <label>Subjek</label>
                  <input type="text" className="form-input" placeholder="Masukkan subjek pesan" />
                </div>

                <div className="form-group">
                  <label>Pesan</label>
                  <textarea className="form-textarea" placeholder="Tulis pesan Anda"></textarea>
                </div>

                <button type="submit" className="submit-btn">Kirim Sekarang</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;