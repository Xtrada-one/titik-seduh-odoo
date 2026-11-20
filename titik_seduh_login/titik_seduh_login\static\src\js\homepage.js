console.log("🔥 File homepage.js BERHASIL dimuat oleh Odoo!");

// Menggunakan 'mousedown' karena Odoo sering memblokir event 'click' biasa
document.addEventListener("mousedown", function (event) {
    const wrapElement = document.getElementById("wrap");
    const introScreen = document.getElementById("intro-screen");
    const homeScreen = document.getElementById("home-screen");

    // Pastikan area yang diklik berada di dalam layar website
    if (wrapElement && wrapElement.contains(event.target)) {

        // Cek apakah animasi belum berjalan
        if (introScreen && !introScreen.classList.contains("slide-up-exit")) {
            console.log("🚀 Klik terdeteksi! Animasi Dijalankan!");

            // Jalankan animasi exit
            introScreen.classList.add("slide-up-exit");
            // Tampilkan home
            homeScreen.classList.add("show");
            // Matikan kursor pointer
            wrapElement.style.cursor = "default";
        }
    }
});