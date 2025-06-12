import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { getMeasurements } from "../services/api";
import { getAccessToken } from "../services/auth";
import "../styles/riwayat.css";

const RiwayatEdukasi = () => {
  const [measurements, setMeasurements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // State untuk form mentoring
  const [formData, setFormData] = useState({
    weight: "",
    height: ""
  });

  useEffect(() => {
    const fetchMeasurements = async () => {
      try {
        const token = getAccessToken();
        if (!token) {
          navigate('/login');
          return;
        }
        
        const response = await getMeasurements();
        setMeasurements(response.data);
      } catch (err) {
        setError(err.message || 'Gagal memuat riwayat');
      } finally {
        setLoading(false);
      }
    };

    fetchMeasurements();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implementasi submit form ke backend
      // await saveMeasurement(formData);
      // Setelah submit, refresh data
      const response = await getMeasurements();
      setMeasurements(response.data);
      setFormData({ weight: "", height: "" });
    } catch (err) {
      setError(err.message || 'Gagal menyimpan data');
    }
  };

  const handleViewDetail = (measurement) => {
    navigate(`/PredictResult/${measurement.baby_id}`, {
      state: {
        // Kirim data yang dibutuhkan untuk halaman hasil prediksi
        babyData: {
          name: measurement.baby_name,
          weight: measurement.weight,
          height: measurement.height,
          gestational_age: measurement.gestational_age,
          immunization_status: measurement.immunization_status
        }
      }
    });
  };

  if (loading) {
    return (
      <div className="page-container">
        <Navbar hideAuthButton={true} />
        <div className="loading">Memuat data...</div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <Navbar hideAuthButton={true} />
        <div className="error-message">{error}</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-container">
      <Navbar hideAuthButton={true} />

      <div className="content-wrapper">
        <div className="header-card">
          <h1 className="section-title">Riwayat Pengukuran</h1>
        </div>

        <div className="riwayat-container">
          {measurements.length > 0 ? (
            <table className="riwayat-table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Berat Badan (kg)</th>
                  <th>Tinggi Badan (cm)</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {measurements.map((item, index) => (
                  <tr key={index}>
                    <td>{new Date(item.measurement_date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}</td>
                    <td>{item.weight}</td>
                    <td>{item.height}</td>
                    <td>
                      <button 
                        className="detail-button"
                        onClick={() => handleViewDetail(item)}
                      >
                        Lihat Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-data">Belum ada data pengukuran</p>
          )}
        </div>

        {/* Rest of your component remains the same */}
        {/* Bagian Mentoring*/}
        <div className="mentoring-form-container">
          <h2 className="mentoring-title">Tambah Pengukuran Baru</h2>
          <form className="mentoring-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="weight">Berat Badan (kg)</label>
              <input
                type="number"
                id="weight"
                name="weight"
                className="form-input"
                placeholder="Masukkan berat badan"
                step="0.1"
                value={formData.weight}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="height">Tinggi Badan (cm)</label>
              <input
                type="number"
                id="height"
                name="height"
                className="form-input"
                placeholder="Masukkan tinggi badan"
                value={formData.height}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Simpan Data
            </button>
          </form>
        </div>

        {/* Bagian Edukasi Gizi */}
        <div className="edukasi-gizi-container">
          <h1 className="edukasi-header">Edukasi Gizi</h1>

          <div className="edukasi-grid">
            <div className="edukasi-card">
              <h2 className="section-title">Tips Pemenuhan Gizi Seimbang</h2>
              <ul className="edukasi-list">
                <li>
                  Sajikan makanan dengan kombinasi karbohidrat, protein, lemak
                  sehat, serta buah dan sayur setiap hari.
                </li>
                <li>
                  Pastikan anak mendapatkan ASI eksklusif selama 6 bulan
                  pertama, dilanjutkan dengan MPASI bergizi.
                </li>
              </ul>
            </div>

            <div className="edukasi-card">
              <h2 className="section-title">Pola Makan Sehat Anak</h2>
              <ul className="edukasi-list">
                <li>Jadwalkan makan 3 kali sehari + 2 kali camilan sehat.</li>
                <li>
                  Hindari makanan instan, tinggi gula, dan garam berlebih.
                </li>
                <li>
                  Berikan makanan bervariasi agar anak tidak bosan dan tercukupi
                  nutrisinya.
                </li>
              </ul>
            </div>

            <div className="edukasi-card">
              <h2 className="section-title">
                Imunisasi dan Pencegahan Stunting
              </h2>
              <ul className="edukasi-list">
                <li>
                  Lengkapi imunisasi dasar sesuai usia anak untuk mencegah
                  penyakit infeksi yang mengganggu pertumbuhan.
                </li>
                <li>
                  Rutin pantau tinggi dan berat badan anak setiap bulan di
                  posyandu/puskesmas.
                </li>
              </ul>
            </div>

            <div className="edukasi-card">
              <h2 className="section-title">
                Stimulasi dan Perhatian Orang Tua
              </h2>
              <ul className="edukasi-list">
                <li>
                  Ajak anak bermain, berbicara, dan membaca buku untuk
                  merangsang tumbuh kembang otaknya.
                </li>
                <li>
                  Berikan kasih sayang dan lingkungan yang aman bagi pertumbuhan
                  emosional.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RiwayatEdukasi;