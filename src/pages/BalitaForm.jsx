import { useNavigate } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import { checkAuth } from '../services/auth';
import '../styles/BalitaForm.css';
import Footer from './Layouts/Footer'

export default function BalitaForm() {
  const isAuthenticated = checkAuth();
  const navigate = useNavigate();

  return (
    <div className="balitaform-container">
      <Navbar hideAuthButton={true} />
      
      <div className="header-card">
        <div className="header-content">
          <h1>Halaman Inputan Prediksi</h1>
          <h1>Gizi</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
      </div>
      <div className="form-card">
        <form className="prediction-form">
          <div className="form-columns">
            <div className="form-left">
              <div className="form-group">
                <label>Nama Balita</label>
                <input 
                  type="text" 
                  placeholder="Masukkan nama balita" 
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>Berat Badan (kg)</label>
                <input 
                  type="number" 
                  placeholder="Masukkan berat badan balita. Contoh: 10.2" 
                  step="0.1"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>Tinggi Badan (cm)</label>
                <input 
                  type="number" 
                  placeholder="Masukkan tinggi badan balita. Contoh: 75" 
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-right">
              <div className="form-group">
                <label>Usia Kehamilan Saat Lahir (minggu)</label>
                <input 
                  type="number" 
                  placeholder="Contoh: 39 minggu" 
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>Status Imunisasi</label>
                <select className="form-select">
                  <option value="">Pilih salah satu</option>
                  <option value="lengkap">Lengkap</option>
                  <option value="tidak-lengkap">Tidak Lengkap</option>
                  <option value="belum">Belum Imunisasi</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Status Ekonomi Keluarga</label>
                <select className="form-select">
                  <option value="">Pilih berdasarkan kondisi saat ini</option>
                  <option value="mampu">Mampu</option>
                  <option value="kurang-mampu">Kurang Mampu</option>
                  <option value="tidak-mampu">Tidak Mampu</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="submit-btn">Cek Sekarang</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};