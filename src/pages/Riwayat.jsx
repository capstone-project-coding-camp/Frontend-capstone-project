import { useNavigate } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./Layouts/Footer";
import "../styles/riwayat.css";

const RiwayatEdukasi = () => {
  const historyData = [
    { date: "24 Januari 2025", weight: "9.8 kg", height: "68.6 cm" },
    { date: "24 Januari 2025", weight: "9.8 kg", height: "68.6 cm" },
    { date: "24 Januari 2025", weight: "9.8 kg", height: "68.6 cm" },
  ];

  return (
    <div className="page-container">
      <Navbar hideAuthButton={true} />

      <div className="content-wrapper">
        <div className="header-card">
          <h1 className="section-title">Riwayat</h1>
        </div>

        <div className="riwayat-container">
          <table className="riwayat-table">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Berat Badan</th>
                <th>Tinggi Badan</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.weight}</td>
                  <td>{item.height}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bagian Mentoring*/}
        <div className="mentoring-form-container">
          <h2 className="mentoring-title">Mentoring Berkala</h2>
          <form className="mentoring-form">
            <div className="form-group">
              <label htmlFor="weight">Berat Badan (kg)</label>
              <input
                type="number"
                id="weight"
                className="form-input"
                placeholder="Masukkan berat badan"
                step="0.1"
              />
            </div>

            <div className="form-group">
              <label htmlFor="height">Tinggi Badan (cm)</label>
              <input
                type="number"
                id="height"
                className="form-input"
                placeholder="Masukkan tinggi badan"
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
