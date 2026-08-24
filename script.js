/* ================= DATABASE 7 TOPIK MVP ================= */
const DATABASE_MATERI = [
  {
    keyword: "aljabar",
    subject: "Matematika",
    title: "Roadmap Memahami Aljabar Dasar",
    steps: [
      {
        title: "Mengenal Variabel, Koefisien, & Konstanta",
        why: "Pahami dulu arti huruf pengganti angka (x dan y) agar tidak bingung melihat rumus.",
        videoId: "kILm0r3sQO4"
      },
      {
        title: "Operasi Penjumlahan & Pengurangan Suku Sejenis",
        why: "Hanya suku dengan huruf yang sama yang boleh dijumlahkan (misal 2x + 3x).",
        videoId: "f84-v_b6_n0"
      },
      {
        title: "Persamaan Linear Satu Variabel (PLSV)",
        why: "Latihan mencari nilai x dengan konsep ekuivalen kedua ruas yang benar.",
        videoId: "sK3hP_1y2aQ"
      }
    ]
  },
  {
    keyword: "bangun ruang",
    subject: "Matematika",
    title: "Roadmap Bangun Ruang (Geometri 3D)",
    steps: [
      {
        title: "Konsep Luas Permukaan vs Volume",
        why: "Bedakan antara selimut luar dan isi ruang agar tidak salah pilih rumus.",
        videoId: "y4Fm7k8bW3c"
      },
      {
        title: "Kubus & Balok (Jaring-jaring & Diagonal)",
        why: "Melatih daya imajinasi visual ruang tiga dimensi dari bentuk paling sederhana.",
        videoId: "v5hN8_rQ2a4"
      },
      {
        title: "Prisma & Limas (Pola Luas Alas x Tinggi)",
        why: "Pahami bahwa semua bangun ruang tegak memiliki pola formula yang seragam.",
        videoId: "z1X9mK8L2s0"
      }
    ]
  },
  {
    keyword: "polinomial",
    subject: "Matematika",
    title: "Roadmap Polinomial (Suku Banyak)",
    steps: [
      {
        title: "Prasyarat: Operasi Pangkat & Aljabar Dasar",
        why: "Polinomial adalah perluasan aljabar yang memiliki pangkat lebih dari dua.",
        videoId: "q2W5mN8vX1s"
      },
      {
        title: "Pembagian Suku Banyak (Metode Bersusun & Horner)",
        why: "Menyelesaikan pembagian suku banyak dengan cara cepat dan runtut.",
        videoId: "m9L2vP5xK8w"
      },
      {
        title: "Teorema Sisa & Teorema Faktor",
        why: "Kunci mencari akar persamaan polinomial dalam soal-soal ujian.",
        videoId: "k4R8mQ2vL9a"
      }
    ]
  },
  {
    keyword: "glbb",
    subject: "Fisika",
    title: "Roadmap Fisika: GLB & GLBB",
    steps: [
      {
        title: "Beda Posisi, Jarak, & Perpindahan",
        why: "Fondasi paling awal mekanika gerak agar tidak salah memasukkan nilai negatif/positif.",
        videoId: "a1B2c3D4e5F"
      },
      {
        title: "Konsep Percepatan (a) & Grafik Gerak",
        why: "Memahami makna pertambahan laju tiap detik lewat pembacaan grafik v-t.",
        videoId: "g6H7i8J9k0L"
      },
      {
        title: "3 Persamaan Utama GLBB",
        why: "Menerapkan formula vt = v0 + at secara logis tanpa menghafal buta.",
        videoId: "m1N2o3P4q5R"
      }
    ]
  },
  {
    keyword: "vektor",
    subject: "Fisika",
    title: "Roadmap Fisika: Analisis Vektor",
    steps: [
      {
        title: "Besaran Skalar vs Besaran Vektor",
        why: "Vektor memiliki arah nilai; bergerak ke kiri berbeda dengan bergerak ke kanan.",
        videoId: "s6T7u8V9w0X"
      },
      {
        title: "Penguraian Vektor pada Sumbu X dan Y",
        why: "Kunci dasar trigonometri (sin/cos) untuk membedah gaya yang posisinya miring.",
        videoId: "y1Z2a3B4c5D"
      },
      {
        title: "Resultan Vektor dengan Metode Analitis",
        why: "Menghitung total seluruh gaya akhir yang bekerja pada sebuah objek.",
        videoId: "e6F7g8H9i0J"
      }
    ]
  },
  {
    keyword: "dasar pemrograman",
    subject: "Coding",
    title: "Roadmap Dasar-Dasar Pemrograman",
    steps: [
      {
        title: "Logika Algoritma (Input -> Proses -> Output)",
        why: "Coding adalah cara menyusun instruksi teratur yang bisa dimengerti komputer.",
        videoId: "k1L2m3N4o5P"
      },
      {
        title: "Struktur Percabangan (IF - ELSE)",
        why: "Membuat program mampu mengambil keputusan otomatis berdasarkan kondisi data.",
        videoId: "q6R7s8T9u0V"
      },
      {
        title: "Struktur Perulangan (Looping)",
        why: "Menjalankan ribuan tugas otomatis tanpa menulis baris kode berulang.",
        videoId: "w1X2y3Z4a5B"
      }
    ]
  },
  {
    keyword: "tipe data",
    subject: "Coding",
    title: "Roadmap Tipe Data & Variabel",
    steps: [
      {
        title: "Analogi Variabel sebagai Kotak Memori",
        why: "Menyimpan nilai sementara agar dapat diolah dan diubah oleh komputer.",
        videoId: "c6D7e8F9g0H"
      },
      {
        title: "Tipe Data Angka, Teks, & Boolean",
        why: "Membedakan teks ('10') dan angka murni (10) agar operasi logika tidak error.",
        videoId: "i1J2k3L4m5N"
      },
      {
        title: "Konversi Tipe Data (Type Casting)",
        why: "Mengubah format teks dari form pengguna menjadi angka siap hitung.",
        videoId: "o6P7q8R9s0T"
      }
    ]
  }
];

let currentRoadmapSteps = [];
let completedSteps = new Set();

/* ================= NAVIGASI & PENCARIAN ================= */
function quickSelect(topicName) {
  document.getElementById('userInput').value = topicName;
  cariRoadmap();
}

function handleEnter(e) {
  if (e.key === 'Enter') cariRoadmap();
}

function cariRoadmap() {
  const input = document.getElementById('userInput').value.toLowerCase().trim();
  const container = document.getElementById('roadmapContainer');
  const progressSection = document.getElementById('progressSection');
  
  if (!input) return;

  const match = DATABASE_MATERI.find(item => 
    input.includes(item.keyword) || item.title.toLowerCase().includes(input)
  );

  container.innerHTML = "";
  completedSteps.clear();

  if (match) {
    currentRoadmapSteps = match.steps;
    progressSection.style.display = "block";
    document.getElementById('topicTitleDisplay').innerText = `${match.subject}: ${match.title}`;
    updateProgressUI();

    match.steps.forEach((step, index) => {
      const card = document.createElement('div');
      card.className = "step-card";
      card.id = `card-step-${index}`;
      card.innerHTML = `
        <div class="step-header">
          <div>
            <div class="step-tag">Langkah ${index + 1} dari ${match.steps.length}</div>
            <div class="step-title">${step.title}</div>
          </div>
        </div>
        <div class="step-why">💡 <b>Kenapa ini dulu?</b> ${step.why}</div>
        <div class="video-wrapper">
          <iframe src="https://www.youtube.com/embed/${step.videoId}" allowfullscreen></iframe>
        </div>
        <button class="btn-complete" id="btn-step-${index}" onclick="toggleSelesai(${index})">
          <span>⚪</span> Tandai Sudah Paham
        </button>
      `;
      container.appendChild(card);
    });
  } else {
    progressSection.style.display = "none";
    container.innerHTML = `
      <div class="empty-state">
        <p>🔍 Materi "<b>${input}</b>" belum terdaftar di versi MVP.</p>
        <p style="margin-top: 8px; font-size: 0.9rem;">Coba pilih tombol rekomendasi di atas: <b>Aljabar, Vektor, GLBB, atau Tipe Data</b>.</p>
      </div>
    `;
  }
}

/* ================= SELEBRASI DIRAYAKAN ================= */
const ucapanDirayakan = [
  "Keren banget! Satu konsep berhasil kamu kuasai! 🔥",
  "Langkah mantap! Fondasi belajarmu makin kokoh! 🧠",
  "Paham satu hal baru hari ini! Pertahankan ritmenya! 🚀",
  "Hebat! Kamu selangkah lebih dekat menguasai materi ini! ⭐"
];

function toggleSelesai(index) {
  const card = document.getElementById(`card-step-${index}`);
  const btn = document.getElementById(`btn-step-${index}`);

  if (completedSteps.has(index)) {
    completedSteps.delete(index);
    card.classList.remove('completed');
    btn.classList.remove('active');
    btn.innerHTML = `<span>⚪</span> Tandai Sudah Paham`;
  } else {
    completedSteps.add(index);
    card.classList.add('completed');
    btn.classList.add('active');
    btn.innerHTML = `<span>✔</span> Sudah Paham!`;
    
    // Pemicu Selebrasi (Konfeti + Ucapan)
    fireConfetti();
    showCelebrationToast();
  }

  updateProgressUI();
}

function updateProgressUI() {
  const total = currentRoadmapSteps.length;
  if (total === 0) return;
  
  const count = completedSteps.size;
  const percentage = Math.round((count / total) * 100);
  
  document.getElementById('progressBar').style.width = `${percentage}%`;
  document.getElementById('progressText').innerText = `${percentage}% Selesai`;

  if (percentage === 100) {
    showCelebrationToast("🎉 LUAR BIASA! Seluruh tahapan roadmap ini sudah tuntas!");
  }
}

function showCelebrationToast(customText) {
  const toast = document.getElementById('toastMessage');
  const textElem = document.getElementById('toastText');
  
  const randomText = ucapanDirayakan[Math.floor(Math.random() * ucapanDirayakan.length)];
  textElem.innerText = customText || randomText;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ================= CONFETTI CANVAS ENGINE ================= */
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function fireConfetti() {
  const colors = ['#38bdf8', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
  for (let i = 0; i < 70; i++) {
    particles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight * 0.7,
      w: Math.random() * 8 + 4,
      h: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.8) * 18,
      gravity: 0.35,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += p.gravity;
    p.rotation += p.rotationSpeed;
    p.opacity -= 0.012;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = Math.max(p.opacity, 0);
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();

    if (p.opacity <= 0 || p.y > canvas.height) {
      particles.splice(i, 1);
    }
  }
  requestAnimationFrame(updateConfetti);
}
updateConfetti();
