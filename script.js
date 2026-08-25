let personCounter = 0;

window.onload = () => tambahOrang();

function tambahOrang() {
    personCounter++;
    const personHTML = `
        <div class="person-card anim-pop" id="person-${personCounter}">
            <input type="text" class="person-name" placeholder="Nama Temen (Misal: Budi)" style="font-weight: bold;">
            
            <div class="items-list" id="items-${personCounter}">
                <div class="flex-row item-row" style="margin-bottom: 10px;">
                    <input type="text" class="input-nama item-name" placeholder="Nama Menu">
                    <input type="number" class="input-harga item-price" placeholder="Harga (Rp)">
                </div>
            </div>
            
            <button class="btn-tambah" onclick="tambahMenu(${personCounter})">+ Tambah Menu Lain</button>
        </div>
    `;
    document.getElementById('people-list').insertAdjacentHTML('beforeend', personHTML);
}

function tambahMenu(idOrang) {
    const menuHTML = `
        <div class="flex-row item-row anim-pop" style="margin-bottom: 10px;">
            <input type="text" class="input-nama item-name" placeholder="Nama Menu">
            <input type="number" class="input-harga item-price" placeholder="Harga (Rp)">
        </div>
    `;
    document.getElementById(`items-${idOrang}`).insertAdjacentHTML('beforeend', menuHTML);
}

function kalkulasiBill() {
    const globalOngkir = Number(document.getElementById('global-ongkir').value) || 0;
    const personCards = document.querySelectorAll('.person-card');
    
    let dataOrang = [];
    let grandTotalMakanan = 0;

    // 1. Kumpulkan Data
    personCards.forEach(card => {
        let nama = card.querySelector('.person-name').value || 'Tanpa Nama';
        let totalMakanOrang = 0;
        let menuList = [];

        const itemRows = card.querySelectorAll('.item-row');
        itemRows.forEach(row => {
            let namaMenu = row.querySelector('.item-name').value || 'Menu';
            let hargaMenu = Number(row.querySelector('.item-price').value) || 0;
            
            if (hargaMenu > 0) {
                totalMakanOrang += hargaMenu;
                menuList.push({ nama: namaMenu, harga: hargaMenu });
            }
        });

        if (totalMakanOrang > 0) {
            grandTotalMakanan += totalMakanOrang;
            dataOrang.push({ nama, totalMakan: totalMakanOrang, menuList });
        }
    });

    if (grandTotalMakanan === 0) {
        alert("Eh, harga makannya diisi dulu dong! 🍔");
        return;
    }

    // 2. ANIMASI KUMPUL KARTU (CARD GATHERING)
    const allBoxes = document.querySelectorAll('.header-card, .person-card, .btn-tambah, .btn-hitung');
    const windowCenterY = window.innerHeight / 2;
    const windowCenterX = window.innerWidth / 2;

    allBoxes.forEach((box, index) => {
        // Cari koordinat asli tiap-tiap kotak
        const rect = box.getBoundingClientRect();
        const boxCenterY = rect.top + rect.height / 2;
        const boxCenterX = rect.left + rect.width / 2;
        
        // Hitung jarak yang harus ditempuh kotak menuju tengah layar
        const moveY = windowCenterY - boxCenterY;
        const moveX = windowCenterX - boxCenterX;
        
        // Bikin putaran menumpuk (kayak kipas kartu), tiap kotak beda 30 derajat
        const rotasi = 360 + (index * 30); 

        // Kirim angka jarak dan rotasi ke CSS lewat properti variabel
        box.style.setProperty('--move-y', `${moveY}px`);
        box.style.setProperty('--move-x', `${moveX}px`);
        box.style.setProperty('--spin-rot', `${rotasi}deg`);
        
        // Picu animasinya
        box.classList.add('anim-card-gather');
    });

    // 3. Susun Struk Pembayaran
    let strukHTML = `<div class="bill-title">SPLIT BILL CALCULATOR<br><span style="font-size: 0.6em; font-weight: normal;">Dicetak Otomatis</span></div>`;
    let grandTotalSemua = 0;

    dataOrang.forEach(orang => {
        let porsiPajak = (orang.totalMakan / grandTotalMakanan) * globalOngkir;
        let totalBayarOrang = Math.ceil(orang.totalMakan + porsiPajak);
        grandTotalSemua += totalBayarOrang;

        strukHTML += `<div class="bill-person">
            <div class="bill-person-name">👤 ${orang.nama}</div>`;
        
        orang.menuList.forEach(m => {
            strukHTML += `<div class="bill-item"><span>${m.nama}</span><span>${m.harga.toLocaleString('id-ID')}</span></div>`;
        });

        if (globalOngkir > 0) {
            strukHTML += `<div class="bill-item bill-ongkir"><span>+ Jatah Pajak/Ongkir</span><span>${Math.ceil(porsiPajak).toLocaleString('id-ID')}</span></div>`;
        }

        strukHTML += `<div class="bill-total-person"><span>TOTAL:</span><span>Rp ${totalBayarOrang.toLocaleString('id-ID')}</span></div>
        </div>`;
    });

    strukHTML += `<div class="bill-grand-total"><span>GRAND TOTAL:</span><span>Rp ${grandTotalSemua.toLocaleString('id-ID')}</span></div>`;

    // 4. Setelah animasi selesai, sembunyikan kotak awal & munculkan struk
    setTimeout(() => {
        document.getElementById('app-container').style.display = 'none';
        
        const receiptContainer = document.getElementById('receipt-container');
        document.getElementById('kertas-isi').innerHTML = strukHTML;
        
        receiptContainer.style.display = 'block';
        receiptContainer.classList.add('anim-pop'); 
    }, 1000); // 1000ms sama dengan durasi animasi di CSS
}
