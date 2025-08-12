// 1. Import library yang dibutuhkan
const express = require("express");
const cors = require("cors");

// 2. Inisialisasi aplikasi express
const app = express();
const PORT = 3000; // Server akan berjalan di port 3000

// 3. Gunakan middleware
app.use(cors()); // Agar frontend bisa mengakses backend
app.use(express.json()); // Agar server bisa membaca data JSON dari frontend

// 4. Membuat endpoint (URL) utama untuk memproses data
app.post("/get-winner", (req, res) => {
  // Mengambil data yang dikirim dari frontend
  const postUrl = req.body.postUrl;
  const criteria = req.body.criteria;

  console.log("Menerima permintaan untuk URL:", postUrl);
  console.log("Dengan kriteria:", criteria);

  // --- LOGIKA PEMROSESAN (MASIH SIMULASI) ---
  // Di sini nanti kita akan meletakkan kode untuk koneksi ke Instagram API.
  // Untuk sekarang, kita kirim kembali data palsu sebagai jawaban.

  const MOCK_WINNER = {
    username: "pemenang_dari_server",
    comment: "Ini komentar pemenangnya, semoga menang!",
  };

  // Mengirimkan respon kembali ke frontend
  res.status(200).json({
    success: true,
    winner: MOCK_WINNER,
  });
});

// 5. Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
