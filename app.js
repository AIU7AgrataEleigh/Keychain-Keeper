
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Menghubungkan route koleksi gantungan kunci
const keychainRoutes = require('./routes/keychainRoutes');

// Pengaturan EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Menggunakan route koleksi
app.use('/', keychainRoutes);

// Menjalankan server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Keychain Keeper berjalan di http://localhost:${PORT}`);
});
