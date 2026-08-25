let personCounter = 0;

// Saat web dibuka, otomatis tambah 2 orang pertama
window.onload = () => {
    tambahOrang();
    tambahOrang();
};

function tambahOrang() {
    personCounter++;
    const personHTML = `
        <div class="person-card anim-pop" id="person-${personCounter}">
            <input type="text" class="person-name" placeholder="Orang ke-${personCounter} (Misal: Budi)" style="font-weight: bold;">
            
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

    // 2. Susun Struk Pembayaran
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

    // 3. Transisi Langsung (Tanpa Animasi Putar)
    document.getElementById('app-container').style.display = 'none';
    
    const receiptContainer = document.getElementById('receipt-container');
    document.getElementById('kertas-isi').innerHTML = strukHTML;
    
    receiptContainer.style.display = 'block';
    receiptContainer.classList.add('anim-pop'); 
}
