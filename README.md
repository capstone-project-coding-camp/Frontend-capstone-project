# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Peduli Gizi - Aplikasi Prediksi Risiko Gizi Buruk pada Balita
Peduli Gizi adalah aplikasi web yang dikembangkan sebagai bagian dari proyek capstone untuk mendeteksi risiko gizi buruk pada balita secara dini dan akurat menggunakan teknologi machine learning. Aplikasi ini ditujukan untuk membantu orang tua dan tenaga kesehatan, terutama di wilayah dengan keterbatasan akses layanan kesehatan, agar dapat mengambil tindakan cepat dan tepat.

## Fitur Utama
- Prediksi Risiko Gizi Buruk  
  Menggunakan model machine learning untuk menilai kemungkinan gizi buruk berdasarkan data anak.
- Pencatatan dan Monitoring Riwayat Pertumbuhan  
  Memungkinkan pengguna mencatat data anak secara berkala dan melacak perkembangannya.
- Grafik Interaktif  
  Menyajikan visualisasi perkembangan anak yang mudah dipahami.
- Sistem Akun Pengguna  
  Menyimpan data secara personal dan aman bagi tiap pengguna.
- Fitur Edukasi dan Rekomendasi  
  Menyediakan informasi dan saran berdasarkan hasil prediksi.
- Desain UI/UX Modern dan Responsif  
  Tampilan ramah pengguna, dapat diakses dengan mudah dari berbagai perangkat.

## Teknologi yang Digunakan
- Frontend: React + Vite
- Routing: Hash Routing
- Pola Arsitektur: Model-View-Presenter (MVP)
- Transisi Halus: View Transition API
- Peta Digital: Marker interaktif untuk penandaan lokasi
- Standar Aksesibilitas: Mengikuti prinsip aksesibilitas untuk pengguna awam 

##Kontribusi
- Fork repositori ini
- Buat branch baru (git checkout -b fitur-anda)
- Commit perubahan Anda (git commit -m 'Tambah fitur XYZ')
- Push ke branch (git push origin fitur-anda)
- Ajukan Pull Request

## Cara Menjalankan Aplikasi Secara Lokal
Ikuti langkah-langkah berikut untuk menjalankan:
### 1. Clone Repository
``bash
git clone https://github.com/capstone-project-coding-camp/Frontend-capstone-project.git
cd Frontend-capstone-project

##Install Dependencies
npm install

## Jalankan aplikasi
npm run dev

##Skrip NPM
npm run dev — Menjalankan server development
npm run build — Build aplikasi untuk produksi
npm run preview — Meninjau hasil build secara local

##Struktur Proyek
- index.html - Entry point aplikasi
- src/ - Berisi komponen React, logic presenter, dan model
- public/ - Aset statis
- vite.config.js - Konfigurasi Vite
- package.json - Informasi proyek dan dependensi
