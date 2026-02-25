const btn = document.getElementById("menuBtn");
const mSide = document.getElementById("menuSidebar");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    if (mSide.classList.contains("w-0")){
        mSide.classList.remove("w-0");
        mSide.classList.add("w-full");
        mSide.classList.add("md:w-[251px]");

    } else {
        mSide.classList.add("w-0");
        mSide.classList.remove("w-full");
        mSide.classList.remove("md:w-[251px]");
    }
});

const dToggle = document.getElementById("dropToggle");
const dMenu = document.getElementById("dropMenu");
const dIcon = document.getElementById("dropIcon");

dToggle.addEventListener("click", () =>{
    dIcon.classList.toggle("rotate-90");
    if (dMenu.style.maxHeight) {
        dMenu.style.maxHeight = null;
    } else {
        dMenu.style.maxHeight = dMenu.scrollHeight + "px";
    }
});

function updateDateTime() {
    const now = new Date();

    const hari = [
        "Minggu", "Senin", "Selasa", "Rabu",
        "Kamis", "Jumat", "Sabtu"
    ];

    const bulan = [
        "Januari", "Februari", "Maret", "April",
        "Mei", "Juni", "Juli", "Agustus",
        "September", "Oktober", "November", "Desember"
    ];

    const namaHari = hari[now.getDay()];
    const tanggal = now.getDate();
    const namaBulan = bulan[now.getMonth()];
    const tahun = now.getFullYear();

    let jam = now.getHours().toString().padStart(2, "0");
    let menit = now.getMinutes().toString().padStart(2, "0");
    let detik = now.getSeconds().toString().padStart(2, "0");

    const hasil = `${namaHari}, ${tanggal} ${namaBulan} ${tahun} - ${jam}:${menit}:${detik}`;

    document.getElementById("dateTime").textContent = hasil;
}

// Jalankan pertama kali
updateDateTime();

// Update tiap 1 detik
setInterval(updateDateTime, 1000);