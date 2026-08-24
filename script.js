/* ================= DATABASE MATERI TERKURASI ================= 
   - Matematika : Alternatifa Project
   - Fisika     : Edcent.id
   - Coding     : Kelas Terbuka
================================================================ */

const DATABASE_MATERI = [
  // ---------------- MATEMATIKA (ALTERNATIFA PROJECT) ----------------
  {
    keyword: "aljabar",
    subject: "Matematika",
    channel: "Alternatifa Project",
    title: "Roadmap Aljabar: Memahami Logika Variabel",
    steps: [
      {
        title: "Konsep Dasar Aljabar & Mengapa Ada Huruf x, y",
        why: "Alternatifa menjelaskan kenapa huruf dipakai menggantikan angka sebelum masuk rumus.",
        videoId: "gQ80cSWD5U6N1dBP" // Masukkan ID Video Alternatifa: Pengantar Aljabar
      },
      {
        title: "Operasi Bentuk Aljabar & Suku Sejenis",
        why: "Memahami aturan pengelompokan suku aljabar secara visual.",
        videoId: "q3_7c9rW4kE" // Masukkan ID Video Alternatifa: Operasi Aljabar
      },
      {
        title: "Persamaan Linear Satu Variabel (PLSV)",
        why: "Logika kedua ruas timbangan agar tidak sekadar 'pindah ruas' tanpa paham.",
        videoId: "N0mX0g9LzPk" // Masukkan ID Video Alternatifa: PLSV
      }
    ]
  },
  {
    keyword: "bangun ruang",
    subject: "Matematika",
    channel: "Alternatifa Project",
    title: "Roadmap Geometri 3D & Bangun Ruang",
    steps: [
      {
        title: "Intuisi Dimensi Tiga & Jaring-jaring Ruang",
        why: "Melatih visualisasi bentuk 3D dari lembaran 2D datar.",
        videoId: "kILm0r3sQO4" // Masukkan ID Video Alternatifa: Geometri 3D
      },
      {
        title: "Volume: Mengapa Rumus Prisma Luas Alas x Tinggi?",
        why: "Membongkar asal mula rumus volume tumpukan luas alas.",
        videoId: "f84-v_b6_n0" 
      },
      {
        title: "Luas Permukaan & Diagonal Ruang",
        why: "Menghitung selimut ruang dan jarak antar titik kubus/balok.",
        videoId: "sK3hP_1y2aQ"
      }
    ]
  },
  {
    keyword: "polinomial",
    subject: "Matematika",
    channel: "Alternatifa Project",
    title: "Roadmap Polinomial (Suku Banyak)",
    steps: [
      {
        title: "Fondasi Suku Banyak & Derajat Pangkat",
        why: "Mengenal bentuk umum polinomial dan perilakunya pada grafik fungsi.",
        videoId: "q2W5mN8vX1s" // Masukkan ID Video Alternatifa: Polinomial Dasar
      },
      {
        title: "Metode Pembagian Horner & Bersusun",
        why: "Cara ringkas membagi suku banyak tanpa proses pembagian aljabar yang panjang.",
        videoId: "m9L2vP5xK8w"
      },
      {
        title: "Teorema Sisa dan Teorema Faktor",
        why: "Mencari akar-akar persamaan suku banyak untuk soal ujian.",
        videoId: "k4R8mQ2vL9a"
      }
    ]
  },

  // ---------------- FISIKA (EDCENT) ----------------
  {
    keyword: "glbb",
    subject: "Fisika",
    channel: "Edcent.id",
    title: "Roadmap Kinematika: GLB & GLBB",
    steps: [
      {
        title: "Perbedaan Jarak vs Perpindahan & Kecepatan",
        why: "Edcent membedah konsep acuan arah gerak agar tanda positif/negatif tidak salah.",
        videoId: "a1B2c3D4e5F" // Masukkan ID Video Edcent: GLB Dasar
      },
      {
        title: "Makna Fisis Percepatan (a) & Grafik Kecepatan",
        why: "Membaca grafik v-t untuk mencari jarak dari luas bidang di bawah kurva.",
        videoId: "g6H7i8J9k0L" // Masukkan ID Video Edcent: Konsep GLBB
      },
      {
        title: "Analisis 3 Persamaan Utama GLBB",
        why: "Menentukan persamaan mana yang harus dipakai berdasarkan variabel yang diketahui.",
        videoId: "m1N2o3P4q5R"
      }
    ]
  },
  {
    keyword: "vektor",
    subject: "Fisika",
    channel: "Edcent.id",
    title: "Roadmap Analisis Vektor & Resultan",
    steps: [
      {
        title: "Besaran Skalar vs Vektor & Penggambaran Panah",
        why: "Memahami bahwa penjumlahan besaran vektor bergantung pada sudut arah.",
        videoId: "s6T7u8V9w0X" // Masukkan ID Video Edcent: Pengantar Vektor
      },
      {
        title: "Penguraian Vektor pada Sumbu X dan Y (Sin/Cos)",
        why: "Kunci trigonometri dasar untuk memproyeksikan gaya miring.",
        videoId: "y1Z2a3B4c5D"
      },
      {
        title: "Menghitung Resultan Vektor Metode Analitis",
        why: "Menjumlahkan total resultan gaya sumbu X dan Y hingga nilai akhir.",
        videoId: "e6F7g8H9i0J"
      }
    ]
  },

  // ---------------- CODING (KELAS TERBUKA) ----------------
  {
    keyword: "dasar pemrograman",
    subject: "Coding",
    channel: "Kelas Terbuka",
    title: "Roadmap Dasar Pemrograman & Logika Komputer",
    steps: [
      {
        title: "Bagaimana Program Bekerja (Input, Process, Output)",
        why: "Pak Faqihza menjelaskan cara mesin mengeksekusi baris instruksi secara sekuensial.",
        videoId: "k1L2m3N4o5P" // Masukkan ID Video Kelas Terbuka: Pengenalan Logika
      },
      {
        title: "Percabangan Logika (IF, ELIF, ELSE)",
        why: "Mengajari komputer mengambil keputusan berdasarkan kondisi data.",
        videoId: "q6R7s8T9u0V" // Masukkan ID Video Kelas Terbuka: IF Statement
      },
      {
        title: "Struktur Perulangan (For & While Loops)",
        why: "Mengulang instruksi komputasi ribuan kali tanpa membuat baris kode berulang.",
        videoId: "w1X2y3Z4a5B" // Masukkan ID Video Kelas Terbuka: Looping
      }
    ]
  },
  {
    keyword: "tipe data",
    subject: "Coding",
    channel: "Kelas Terbuka",
    title: "Roadmap Variabel & Tipe Data",
    steps: [
      {
        title: "Mengenal Variabel (Alokasi Memori)",
        why: "Variabel sebagai tempat penampung nilai di RAM sebelum dihitung.",
        videoId: "c6D7e8F9g0H" // Masukkan ID Video Kelas Terbuka: Variabel
      },
      {
        title: "Tipe Data Angka (Integer/Float) & Teks (String)",
        why: "Membedakan angka murni untuk operasi matematika dan teks berkarakter.",
        videoId: "i1J2k3L4m5N"
      },
      {
        title: "Tipe Data Logika (Boolean) & Casting Tipe Data",
        why: "Konsep True/False dan mengubah tipe data teks menjadi angka siap olah.",
        videoId: "o6P7q8R9s0T"
      }
    ]
  }
];
