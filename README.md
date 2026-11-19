# ♡ Keychain Keeper

**Small things, lovely memories.**

Hai! Selamat datang di Keychain Keeper! 🎀

Ini adalah proyek aplikasi web sederhana yang aku buat untuk mengelola koleksi gantungan kunci. Awalnya mungkin gantungan kunci terlihat seperti benda kecil biasa, tetapi setiap karakter dan bentuknya punya daya tarik tersendiri. Daripada koleksinya cuma disimpan dan lama-lama lupa punya apa saja, lebih baik dicatat di sini, kan? ♡

Keychain Keeper dibuat dengan tampilan bernuansa pastel pink yang manis, sederhana, dan nyaman dilihat. Jadi, mengelola koleksi pun terasa sedikit lebih menyenangkan!

## ✨ Apa saja yang bisa dilakukan?

Di aplikasi ini, ada beberapa fitur utama yang bisa digunakan:

1. **Add Collection** – Menambahkan gantungan kunci baru ke dalam daftar koleksi.
2. **View Collection** – Melihat seluruh koleksi yang sudah tersimpan.
3. **Edit Collection** – Memperbarui informasi koleksi jika ada data yang ingin diubah.
4. **Delete Collection** – Menghapus koleksi yang sudah tidak ingin disimpan, lengkap dengan popup konfirmasi supaya tidak salah hapus.

Informasi yang bisa dicatat meliputi:
- Nama gantungan kunci
- Karakter
- Bahan
- Warna
- Tanggal diperoleh
- Kondisi barang

## 🧁 Teknologi yang digunakan

Beberapa teknologi yang digunakan untuk membuat Keychain Keeper:

| Teknologi | Kegunaan |
|---|---|
| HTML | Membuat struktur halaman web |
| CSS | Mengatur tampilan dan desain aplikasi |
| JavaScript | Mendukung interaksi aplikasi |
| Node.js | Menjalankan JavaScript pada sisi server |
| Express.js | Mengatur server dan routing |
| EJS | Menampilkan data secara dinamis |
| MySQL | Menyimpan data koleksi |
| mysql2 | Menghubungkan aplikasi dengan MySQL |
| dotenv | Mengelola konfigurasi aplikasi |

## 🌷 Tampilan dan konsep desain

Keychain Keeper menggunakan konsep pastel pink dengan tampilan yang dibuat sederhana dan tidak terlalu ramai. Aku ingin aplikasi ini bukan hanya bisa digunakan untuk mengelola data, tetapi juga punya tampilan yang menyenangkan saat dibuka.

## 🚀 Cara menjalankan proyek

Kalau ingin mencoba aplikasi ini di komputer sendiri, ikuti langkah berikut.

**1. Clone repository**

```bash
git clone LINK_REPOSITORY_KAMU
```

**2. Masuk ke folder proyek**

```bash
cd Keychain-Keeper
```

**3. Install dependencies**

```bash
npm install
```

**4. Buat database MySQL**

Buat database dengan nama:

```sql
CREATE DATABASE keychain_keeper_db;
```

Kemudian buat tabel koleksi:

```sql
CREATE TABLE keychains (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    karakter VARCHAR(100) NOT NULL,
    bahan VARCHAR(50) NOT NULL,
    warna VARCHAR(50) NOT NULL,
    tanggal_diperoleh DATE NOT NULL,
    kondisi VARCHAR(30) NOT NULL
);
```

**5. Atur konfigurasi database**

Buat file `.env` di folder utama proyek, kemudian isi sesuai konfigurasi MySQL di komputer masing-masing.

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password_mysql_kamu
DB_NAME=keychain_keeper_db
DB_PORT=3306
PORT=3000
```

**6. Jalankan aplikasi**

```bash
npm start
```

Jika ingin menjalankan aplikasi dalam mode development:

```bash
npm run dev
```

**7. Buka aplikasi di browser**

```text
http://localhost:3000
```

And that's it! Sekarang kamu sudah bisa mulai mencatat koleksi gantungan kunci. ♡

## 🎀 Sedikit tentang proyek ini

Proyek ini dibuat sebagai bagian dari tugas mata kuliah Pemrograman Web. Melalui Keychain Keeper, aku belajar menerapkan konsep CRUD, menghubungkan aplikasi dengan database MySQL, serta memahami bagaimana bagian frontend dan backend bekerja bersama dalam sebuah aplikasi web.

Meskipun masih sederhana, semoga aplikasi kecil ini bisa menjadi tempat yang menyenangkan untuk menyimpan cerita dari setiap gantungan kunci yang dimiliki.

**Made with ♡ and a little bit of pink!**

