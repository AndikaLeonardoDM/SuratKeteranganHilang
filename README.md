# Pengembangan Aplikasi Surat Keterangan Kehilangan di Polres Payakumbuh

🚀 **Web App Berbasis Next.js & Firebase**

Aplikasi ini dirancang untuk mempermudah proses pembuatan **Surat Keterangan Kehilangan** di **Polres Payakumbuh**. Dengan teknologi **Next.js** sebagai frontend dan **Firebase** sebagai backend, aplikasi ini memungkinkan masyarakat untuk mengajukan permohonan secara online dengan mudah, cepat, dan efisien.

## ✨ Fitur Utama
- ✅ **Pendaftaran & Login** – Autentikasi menggunakan Firebase Authentication
- ✅ **Login dengan Akun Google** – Pengguna dapat login menggunakan akun Google mereka
- ✅ **Pengajuan Online** – Formulir digital untuk pembuatan surat kehilangan
- ✅ **Verifikasi & Persetujuan** – Pihak kepolisian dapat meninjau dan menyetujui pengajuan
- ✅ **Download & Cetak Surat** – Pengguna dapat mengunduh surat yang telah disetujui
- ✅ **Notifikasi Real-Time** – Update status pengajuan melalui Firebase

## 🛠️ Teknologi yang Digunakan
- **Next.js** – Framework React untuk tampilan yang cepat & dinamis
- **Firebase Authentication** – Sistem login yang aman
- **Firebase Authentication with Google** – Login menggunakan akun Google
- **Firestore Database** – Penyimpanan data berbasis cloud
- **Firebase Storage** – Manajemen file untuk dokumen surat
- **Tailwind CSS** – UI modern dan responsif

## 💡 Tujuan Proyek
Proyek ini bertujuan untuk **mendigitalisasi layanan publik**, mempercepat proses administrasi, dan meningkatkan transparansi dalam pengurusan surat kehilangan di **Polres Payakumbuh**.

## 📌 Kontribusi & Masukan
Kontribusi dan masukan sangat diharapkan! Jika Anda memiliki saran atau ingin berkontribusi, jangan ragu untuk membuat **pull request** atau membuka **issue**.

## 🔑 Login Admin
- **Username**: admin@polres.com  
- **Password**: 12345678

## 🔑 Login Pengguna
- **Login dengan Akun Google**: Pengguna dapat masuk menggunakan akun Google mereka untuk mengakses aplikasi.

## 🔗 Live Demo 
[Klik di sini untuk melihat demo](https://polres.vercel.app/login)

---

## 🛠 Cara Instalasi

### 1️⃣ Clone Repositori
Jalankan perintah berikut di terminal:
```bash
git clone https://github.com/username/polres-app.git
cd polres-app
```

### 2️⃣ Install Dependencies
Jalankan salah satu perintah berikut untuk menginstal dependensi yang dibutuhkan:
```bash
npm install
# atau
yarn install
```

### 3️⃣ Tambahkan Konfigurasi Firebase
1. **Buat proyek baru** di [Firebase Console](https://console.firebase.google.com/).
2. **Aktifkan Authentication** dan pilih metode login dengan **Email/Password** dan **Google**.
3. **Buat Firestore Database** dan atur aturan keamanan yang sesuai.
4. **Konfigurasi Firebase Storage** untuk menyimpan dokumen surat.
5. **Unduh file konfigurasi Firebase** (`firebaseConfig.js`), lalu simpan di folder `/config/` dalam proyek.

Contoh isi file `firebaseConfig.js`:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export default firebaseConfig;
```

### 4️⃣ Jalankan Server Pengembangan
Gunakan salah satu perintah berikut untuk menjalankan aplikasi:
```bash
npm run dev
# atau
yarn dev
```

### 5️⃣ Akses Aplikasi
Buka browser dan kunjungi:  
🔗 **http://localhost:3000**  

Sekarang aplikasi siap digunakan! 🚀
