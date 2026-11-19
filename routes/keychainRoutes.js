
const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Memeriksa kelengkapan dan format data koleksi
function validateKeychain(data) {
    const {
        nama,
        karakter,
        bahan,
        warna,
        tanggal_diperoleh,
        kondisi
    } = data;

    // Memastikan seluruh kolom terisi
    if (
        !nama?.trim() ||
        !karakter?.trim() ||
        !bahan?.trim() ||
        !warna?.trim() ||
        !tanggal_diperoleh ||
        !kondisi
    ) {
        return 'Semua kolom wajib diisi.';
    }

    // Memeriksa batas panjang data
    if (
        nama.trim().length > 100 ||
        karakter.trim().length > 100 ||
        bahan.trim().length > 50 ||
        warna.trim().length > 50
    ) {
        return 'Beberapa isian melebihi batas karakter.';
    }

    // Memeriksa format tanggal
    const tanggalValid = /^\d{4}-\d{2}-\d{2}$/.test(tanggal_diperoleh);

    if (!tanggalValid) {
        return 'Format tanggal tidak valid.';
    }

    // Memeriksa apakah tanggal benar-benar valid
    const tanggal = new Date(`${tanggal_diperoleh}T00:00:00Z`);

    if (
        Number.isNaN(tanggal.getTime()) ||
        tanggal.toISOString().slice(0, 10) !== tanggal_diperoleh
    ) {
        return 'Tanggal yang dimasukkan tidak valid.';
    }

    // Memastikan kondisi sesuai pilihan
    const kondisiValid = ['Baik', 'Rusak Ringan', 'Rusak Berat'];

    if (!kondisiValid.includes(kondisi)) {
        return 'Pilihan kondisi tidak valid.';
    }

    return null;
}

// Menampilkan seluruh koleksi gantungan kunci
router.get('/', async (req, res) => {
    try {
        const [keychains] = await db.query(
            'SELECT * FROM keychains ORDER BY id DESC'
        );

        res.render('keychains/index', { keychains });
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal mengambil data koleksi.');
    }
});

// Menampilkan halaman formulir tambah koleksi
router.get('/tambah', (req, res) => {
    res.render('keychains/tambah');
});

// Menyimpan koleksi baru ke database
router.post('/tambah', async (req, res) => {
    try {
        const {
            nama,
            karakter,
            bahan,
            warna,
            tanggal_diperoleh,
            kondisi
        } = req.body;

        // Memeriksa data sebelum disimpan
        const errorValidasi = validateKeychain(req.body);

        if (errorValidasi) {
            return res.status(400).send(errorValidasi);
        }

        await db.query(
            `INSERT INTO keychains
            (nama, karakter, bahan, warna, tanggal_diperoleh, kondisi)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                nama.trim(),
                karakter.trim(),
                bahan.trim(),
                warna.trim(),
                tanggal_diperoleh,
                kondisi
            ]
        );

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal menyimpan koleksi.');
    }
});

// Menampilkan halaman edit berdasarkan ID
router.get('/edit/:id', async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM keychains WHERE id = ?',
            [req.params.id]
        );

        if (rows.length === 0) {
            return res.status(404).send('Koleksi tidak ditemukan.');
        }

        const keychain = rows[0];

        // Mengubah format tanggal agar sesuai dengan input date
        const tanggalDiperoleh = new Date(keychain.tanggal_diperoleh)
            .toISOString()
            .split('T')[0];

        res.render('keychains/edit', {
            keychain,
            tanggalDiperoleh
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal membuka halaman edit.');
    }
});

// Menyimpan perubahan data koleksi
router.post('/edit/:id', async (req, res) => {
    try {
        const {
            nama,
            karakter,
            bahan,
            warna,
            tanggal_diperoleh,
            kondisi
        } = req.body;

        // Memeriksa data sebelum diperbarui
        const errorValidasi = validateKeychain(req.body);

        if (errorValidasi) {
            return res.status(400).send(errorValidasi);
        }

        await db.query(
            `UPDATE keychains
             SET nama = ?, karakter = ?, bahan = ?, warna = ?,
                 tanggal_diperoleh = ?, kondisi = ?
             WHERE id = ?`,
            [
                nama.trim(),
                karakter.trim(),
                bahan.trim(),
                warna.trim(),
                tanggal_diperoleh,
                kondisi,
                req.params.id
            ]
        );

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal memperbarui koleksi.');
    }
});

// Menghapus koleksi berdasarkan ID
router.post('/hapus/:id', async (req, res) => {
    try {
        await db.query(
            'DELETE FROM keychains WHERE id = ?',
            [req.params.id]
        );

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal menghapus koleksi.');
    }
});

module.exports = router;
