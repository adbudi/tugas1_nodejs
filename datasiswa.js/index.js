const express = require('express');
const app = express();
const port = 8000;
const apiRouter = require("./api-routers");

app.get('/', (req, res) => {
    res.send('Selamat Datang Di Data Center Siswa Indonesia.')
});

app.use("/DataSiswa", apiRouter);
app.listen(port, () => {
    console.log(`server berjalan di port ${port}`);
})
