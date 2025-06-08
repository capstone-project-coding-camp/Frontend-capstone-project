import React from 'react';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import '../styles/PredictionResult.css';

const PredictionResult = () => {
  // Data contoh hasil prediksi
  const babyData = {
    name: 'Rani',
    weight: '10.2 kg',
    height: '75 cm',
    gestationalAge: '39 minggu',
    immunizationStatus: 'Imunisasi lengkap',
    economicStatus: 'Menengah'
  };

  return (
    <div className="prediction-page">
      <Navbar hideAuthButton={true} />
      
      <div className="prediction-container">
        {/* Header sesuai gambar */}
        <div className="prediction-header">
          <h1>Hasil Prediksi Risiko Gizi Buruk Balita</h1>
          <div className="header-description">
            <p>
              Prediksi ini didasarkan pada data balita yang Anda masukkan sebelumnya. Hasil ini dapat membantu
              Anda memahami kondisi gizi anak dan langkah tindak lanjut yang disarankan.
            </p>
          </div>
          <div className="header-divider"></div>
        </div>
        
        {/* Data Balita dalam format tabel seperti gambar */}
        <div className="data-section">
          <h2 className="section-title">| Data Balita</h2>
          
          <div className="baby-data-table">
            <div className="data-column">
              <div className="data-header">Nama Balita</div>
              <div className="data-header">Berat Badan</div>
              <div className="data-header">Tinggi Badan</div>
              <div className="data-header">Usia Kehamilan Saat Lahir</div>
              <div className="data-header">Status Imunisasi</div>
              <div className="data-header">Status Ekonomi Keluarga</div>
            </div>
            
            <div className="data-column">
              <div className="data-value">{babyData.name}</div>
              <div className="data-value">{babyData.weight}</div>
              <div className="data-value">{babyData.height}</div>
              <div className="data-value">{babyData.gestationalAge}</div>
              <div className="data-value">{babyData.immunizationStatus}</div>
              <div className="data-value">{babyData.economicStatus}</div>
            </div>
          </div>
        </div>
        
        {/* Tambahkan bagian status gizi dan rekomendasi di sini */}
        {/* ... */}
      </div>
      
      <Footer />
    </div>
  );
};

export default PredictionResult;