//import express
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        Nama: "Richard Muhammad",
        TanggalLahir: "14 Januari 1990",
        JenisKelamin: "Laki-laki",
        Hobi: "Membaca Buku"

    });
});

router.post('/', (req, res) => {
    res.send('req create masuk');

});

router.put('/', (req, res) => {
    res.send('req  update masuk');

});

router.delete('/', (req, res) => {
    res.send('req delete masuk');

});

module.exports = router;