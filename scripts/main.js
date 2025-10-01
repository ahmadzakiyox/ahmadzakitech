document.addEventListener('DOMContentLoaded', function() {
    // === Inisialisasi Typed.js & AOS (jika masih dipakai) ===
    const typedElement = document.querySelector('#typed-text');
    if (typedElement) {
        new Typed('#typed-text', {
            strings: ['Web Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Fresh Graduate'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 2000,
        });
    }
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
    });

    // === FUNGSI BUKA-TUTUP SIDEBAR BARU ===
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.main-header');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    // Cek apakah elemen ada
    if (menuToggle && sidebar && overlay) {
        // Fungsi untuk toggle sidebar
        const toggleSidebar = () => {
            menuToggle.classList.toggle('active');
            sidebar.classList.toggle('sidebar-open');
            body.classList.toggle('sidebar-open'); // Untuk kontrol overlay
        };

        // Event listener untuk tombol hamburger
        menuToggle.addEventListener('click', toggleSidebar);

        // Event listener untuk overlay (menutup sidebar saat diklik)
        overlay.addEventListener('click', toggleSidebar);
    }

    // === (Opsional) Buat Header Mobile terpisah ===
    // Karena header utama kita sekarang menjadi sidebar, kita perlu membuat
    // header tiruan untuk mobile yang berisi logo dan tombol hamburger.
    // Kita buat ini dengan JavaScript agar tidak mengubah HTML asli.
    const createMobileHeader = () => {
        const mobileHeader = document.createElement('div');
        mobileHeader.classList.add('mobile-header');
        
        // Salin logo dari sidebar
        const logo = document.querySelector('.main-header .logo');
        if (logo) {
            const newLogo = logo.cloneNode(true);
            mobileHeader.appendChild(newLogo);
        }

        // Pindahkan tombol hamburger ke dalam header mobile
        if(menuToggle) {
            mobileHeader.appendChild(menuToggle);
        }
        
        // Sisipkan header mobile ke bagian atas body
        document.body.insertBefore(mobileHeader, document.body.firstChild);
    };

    // Panggil fungsi hanya jika kita berada di tampilan mobile/tablet
    if (window.innerWidth <= 992) {
        createMobileHeader();
    }
});