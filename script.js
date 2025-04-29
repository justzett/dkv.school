document.getElementById('guestbookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const guestItem = document.createElement('li');
    guestItem.innerHTML = `
        <strong>${name}</strong> (${email})<br>
        <p>${message}</p>
    `;

    document.getElementById('guestList').appendChild(guestItem);
    document.getElementById('guestbookForm').reset();
});

function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

function toggleDropdown(event) {
    event.preventDefault();
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
        const parent = event.target.closest('.dropdown-parent');
        const dropdown = parent.querySelector('.dropdown');
        dropdown.classList.toggle('show');
    }
}

function showDetails(judul) {
    const details = {
        'Kondisi Dan Fasilitas Kelas': `
            Kelas terdiri atas dua rombongan belajar, yaitu MM1 dan MM2, masing-masing berjumlah 32 siswa.<br>
            Fasilitas jurusan meliputi 1 ruang Lab Grafis, 1 ruang Lab Software, 2 ruang Lab Hardware, 1 ruang Lab Basic Computer, 1 ruang Lab Editing, serta 1 ruang guru.<br>
            Setiap laboratorium dilengkapi komputer untuk kegiatan perakitan, instalasi sistem operasi, praktik jaringan komputer, pemrograman dasar, editing grafis dan video, serta pembuatan animasi.<br>
            Fasilitas pendukung lainnya mencakup kamera video, kamera foto (DSLR, prosumer, pocket), peralatan animasi (light box, meja gambar, pen tablet), serta perlengkapan videografi dan fotografi (tata cahaya, tripod, mikrofon, dan lain-lain).
        `,
        'Kelas Desain Grafis': `
            <table border="1" cellpadding="5" cellspacing="0" style="width:100%; border-collapse: collapse;">
                <thead style="background-color: #f2f2f2;">
                    <tr>
                        <th>Nama</th>
                        <th>Tugas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Arif Eka Prasetya, M.Pd</td>
                        <td>K3, Sistem Komputer, Jaringan Dasar, Teknik Animasi 3D</td>
                    </tr>
                    <tr>
                        <td>Sapto Angkasa, S.Si</td>
                        <td>Kabeng</td>
                    </tr>
                    <tr>
                        <td>Endhy Pitoyo, S.ST</td>
                        <td>Pengolahan Citra Digital, Desain Multimedia Interaktif</td>
                    </tr>
                    <tr>
                        <td>Margaretha Erna Mayasari, S.Si</td>
                        <td>Jaringan Dasar, Pemrograman Web, Komposisi Foto Digital, Teknik Pengolahan Video, Kerja Proyek</td>
                    </tr>
                    <tr>
                        <td>Dwi Ishartono, S.Kom</td>
                        <td>Perakitan Komputer, Simulasi Digital, Teknik Animasi 2D, Pengolahan Citra Digital, Sistem Komputer, Teknik Pengolahan Audio</td>
                    </tr>
                    <tr>
                        <td>Sunardi, S.Pd</td>
                        <td>Desain Multimedia</td>
                    </tr>
                </tbody>
            </table>
        `,
        'Kelulusan': `
            Kelulusan tiap tahun pada Paket Keahlian Multimedia adalah <strong>100%</strong>.<br><br>

            <strong>Prospek Alumni Multimedia:</strong>
            <ul>
                <li>Desainer Grafis dan Ilustrasi</li>
                <li>Web Design and Development</li>
                <li>Fotografi dan Pengolahan Grafis</li>
                <li>Animator 2D dan 3D</li>
                <li>Character Game Designer</li>
                <li>Pengambilan Gambar dan Editing Film/Video</li>
                <li>Pengolahan Efek Video</li>
                <li>Pengolahan Audio</li>
                <li>Desain Multimedia Interaktif</li>
            </ul>

            <strong>Dasar Bidang Keahlian:</strong>
            <ul>
                <li>Pemrograman Dasar</li>
                <li>Sistem Komputer</li>
            </ul>

            <strong>Dasar Program Keahlian:</strong>
            <ul>
                <li>Perakitan Komputer</li>
                <li>Simulasi Digital</li>
                <li>Sistem Operasi</li>
                <li>Jaringan Dasar</li>
                <li>Pemrograman Web</li>
            </ul>

            <strong>Paket Keahlian:</strong>
            <ul>
                <li>Desain Multimedia</li>
                <li>Pengolahan Citra Digital</li>
                <li>Teknik Animasi 2 Dimensi</li>
                <li>Teknik Animasi 3 Dimensi</li>
                <li>Komposisi Foto Digital</li>
                <li>Teknik Pengambilan Gambar Bergerak</li>
                <li>Teknik Pengolahan Audio</li>
                <li>Teknik Pengolahan Video</li>
                <li>Desain Multimedia Interaktif</li>
                <li>Kerja Proyek</li>
            </ul>
        `
    };

    // Cek jika kunci tersedia di objek `details`
    if (details[judul]) {
        document.getElementById("details-text").innerHTML = details[judul];
    } else {
        document.getElementById("details-text").innerHTML = 'Detail tidak ditemukan.';
    }

    // Menampilkan bagian detail kelas
    document.getElementById("class-details").classList.remove("hidden");
}

function hideDetails() {
    document.getElementById("class-details").classList.add("hidden");
}