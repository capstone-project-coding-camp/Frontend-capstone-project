import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import { checkAuth } from '../services/auth';
import { createBaby, createMeasurement } from '../services/api';
import '../styles/BalitaForm.css';
import Footer from './layouts/Footer';

export default function BalitaForm() {
  const isAuthenticated = checkAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    weight: '',
    height: '',
    gestational_age: '',
    immunization_status: '',
    // economic_status: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.weight || !formData.height || 
        !formData.gestational_age || !formData.immunization_status) {
      setError('Semua field wajib diisi');
      return false;
    }
    if (formData.weight <= 0 || formData.height <= 0) {
      setError('Berat dan tinggi harus lebih dari 0');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Simpan data bayi ke tabel babies
      const babyData = {
        name: formData.name,
        weight: parseFloat(formData.weight),
        height: parseFloat(formData.height),
        gestational_age: parseInt(formData.gestational_age),
      };

      const babyResponse = await createBaby(babyData);
      const babyId = babyResponse.data.id;

      // 2. Simpan pengukuran ke tabel measurements
      const measurementData = {
        baby_id: babyId,
        weight: parseFloat(formData.weight),
        height: parseFloat(formData.height),
        immunization_status: formData.immunization_status,
        measurement_date: new Date().toISOString().split('T')[0] 
      };

      await createMeasurement(measurementData);

      // Redirect ke halaman hasil prediksi (nanti bisa diupdate setelah implementasi ML)
      navigate(`/PredictionResult/${babyId}`, { state: { babyData: formData } });
    } catch (err) {
      setError(err.response?.data?.message || 'Terjadi kesalahan saat menyimpan data');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="balitaform-container">
      <Navbar hideAuthButton={true} />
      
      <div className="header-card">
        <div className="header-content">
          <h1>Halaman Inputan Prediksi Gizi</h1>
          <p className="description">
            Masukkan data balita untuk melakukan prediksi status gizi
          </p>
        </div>
      </div>
      
      <div className="form-card">
        {error && <div className="error-message">{error}</div>}
        
        <form className="prediction-form" onSubmit={handleSubmit}>
          <div className="form-columns">
            <div className="form-left">
              <div className="form-group">
                <label>Nama Balita</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama balita" 
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Berat Badan (kg)</label>
                <input 
                  type="number" 
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="Masukkan berat badan balita. Contoh: 10.2" 
                  step="0.1"
                  min="0"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Tinggi Badan (cm)</label>
                <input 
                  type="number" 
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="Masukkan tinggi badan balita. Contoh: 75" 
                  min="30"
                  className="form-input"
                  required
                />
              </div>
            </div>
            
            <div className="form-right">
              <div className="form-group">
                <label>Usia Kehamilan Saat Lahir (minggu)</label>
                <input 
                  type="number" 
                  name="gestational_age"
                  value={formData.gestational_age}
                  onChange={handleChange}
                  placeholder="Contoh: 39 minggu" 
                  min="20"
                  max="45"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Status Imunisasi</label>
                <select 
                  className="form-select"
                  name="immunization_status"
                  value={formData.immunization_status}
                  onChange={handleChange}
                  required
                >
                  <option value="">Pilih salah satu</option>
                  <option value="complete">Lengkap</option>
                  <option value="incomplete">Tidak Lengkap</option>
                  <option value="not_started">Belum Imunisasi</option>
                </select>
              </div>
              
              {/* <div className="form-group">
                <label>Status Ekonomi Keluarga</label>
                <select 
                  className="form-select"
                  name="economic_status"
                  value={formData.economic_status}
                  onChange={handleChange}
                  required
                >
                  <option value="">Pilih berdasarkan kondisi saat ini</option>
                  <option value="capable">Mampu</option>
                  <option value="less_capable">Kurang Mampu</option>
                  <option value="incapable">Tidak Mampu</option>
                </select>
              </div> */}
            </div>
          </div>
          
          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Memproses...' : 'Cek Sekarang'}
            </button>
          </div>
        </form>
      </div>
      
      <Footer/>
    </div>
  );
}
