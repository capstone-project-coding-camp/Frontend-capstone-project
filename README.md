# Peduli Gizi - Aplikasi Prediksi Risiko Gizi Buruk pada Balita
Peduli Gizi adalah aplikasi web yang dikembangkan sebagai bagian dari proyek capstone untuk mendeteksi risiko gizi buruk pada balita secara dini dan akurat menggunakan teknologi machine learning. Aplikasi ini ditujukan untuk membantu orang tua dan tenaga kesehatan, terutama di wilayah dengan keterbatasan akses layanan kesehatan, agar dapat mengambil tindakan cepat dan tepat.

## Fitur Utama
- Prediksi Risiko Gizi Buruk  
- Pencatatan dan Monitoring Riwayat Pertumbuhan  
- Grafik Interaktif  
- Sistem Akun Pengguna
- Fitur Edukasi dan Rekomendasi
- Desain UI/UX Modern dan Responsif  

## Teknologi yang Digunakan
- Frontend: React + Vite
- Routing: Hash Routing
- Pola Arsitektur: Model-View-Presenter (MVP)
- Transisi Halus: View Transition API
- Peta Digital: Marker interaktif untuk penandaan lokasi
- Standar Aksesibilitas: Mengikuti prinsip aksesibilitas untuk pengguna awam

## Kontribusi
- Fork repositori ini
- Buat branch baru (git checkout -b fitur-anda)
- Commit perubahan Anda (git commit -m 'Tambah fitur XYZ')
- Push ke branch (git push origin fitur-anda)
- Ajukan Pull Request

## Struktur Proyek
```
Frontend-capstone-project/
├── public/              # Aset statis
├── src/                 # Komponen React, model, dan presenter
│   ├── components/      # Komponen UI
│   ├── views/           # Tampilan halaman
│   ├── presenters/      # Logika presentasi
│   └── model/           # Struktur dan logika data
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Cara Menjalankan Aplikasi Secara Lokal

### Clone Repository
```bash
git clone https://github.com/capstone-project-coding-camp/Frontend-capstone-project.git
cd Frontend-capstone-project
```

### Install Dependencies
```npm install```

### Jalankan aplikasi
```npm run dev```

### Akses di browser
http://localhost:5173

### Skrip NPM
npm run dev — Menjalankan server development
npm run build — Build aplikasi untuk produksi
npm run preview — Meninjau hasil build secara local
