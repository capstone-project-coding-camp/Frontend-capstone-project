import { useNavigate } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import { checkAuth } from '../services/auth';
import '../styles/HomePage.css';
import '../styles/BalitaForm.css';

export default function BalitaForm() {
  const isAuthenticated = checkAuth();
  const navigate = useNavigate();

  return (
    <div className="balitaform-container">
      <Navbar hideAuthButton={true} />
      
      <div className="form-header">
        <h1>Halaman Inputan Prediksi</h1>
        <h2>Gizi</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
      
      <div className="divider"></div> 
      
      <form className="prediction-form">
        <div className="form-columns">
          <div className="form-left">
            <div className="form-section">
              <h3>Nama Balita</h3>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Masukkan nama balita" 
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-section">
              <h3>Berat Badan</h3>
              <div className="form-group">
                <input 
                  type="number" 
                  placeholder="Masukkan berat badan balita. Contoh: 10.2" 
                  step="0.1"
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-section">
              <h3>Tinggi Badan (cm)</h3>
              <div className="form-group">
                <input 
                  type="number" 
                  placeholder="Masukkan tinggi badan balita. Contoh: 75" 
                  className="form-input"
                />
              </div>
            </div>
          </div>
          
          <div className="form-right">
            <div className="form-section">
              <h3>Usia Kehamilan Saat Lahir (minggu)</h3>
              <div className="form-group">
                <input 
                  type="number" 
                  placeholder="Contoh: 38 minggu" 
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-section">
              <h3>Status Imunisasi</h3>
              <div className="form-group">
                <select className="form-select">
                  <option value="">Pilih salah satu</option>
                  <option value="lengkap">Lengkap</option>
                  <option value="tidak-lengkap">Tidak Lengkap</option>
                  <option value="belum">Belum Imunisasi</option>
                </select>
              </div>
            </div>
            
            <div className="form-section">
              <h3>Status Ekonomi Keluarga</h3>
              <div className="form-group">
                <select className="form-select">
                  <option value="">Pilih berdasarkan kondisi saat ini</option>
                  <option value="mampu">Mampu</option>
                  <option value="kurang-mampu">Kurang Mampu</option>
                  <option value="tidak-mampu">Tidak Mampu</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="submit-btn-container">
          <button type="submit" className="submit-btn">Cek Sekarang</button>
          <button type="submit" className="submit-btn">Mulai Prediksi</button>
        </div>
      </form>
    </div>
  );
};