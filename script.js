document.querySelectorAll('menu a').forEach(link => {
    link.addEventListener('click', function() {
        // Hapus kelas 'active' dari semua tautan
        document.querySelectorAll('menu a').forEach(nav => nav.classList.remove('active'));

        // Tambahkan kelas 'active' ke tautan yang diklik
        this.classList.add('active');
    });
});
