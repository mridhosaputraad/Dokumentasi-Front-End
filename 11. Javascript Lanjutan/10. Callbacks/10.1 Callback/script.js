/* Callback

-> Definisi
    > function yang dikirimkan sebagai parameter pada function yang lain. -MDN
    > function yang dieksekusi setelah fungsi lain selesai dijalankan. -codeburst

FYI
> Higher Order Function juga merupakan callback function

*/
// Contoh: Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }
function tampilkanPesan(Callback) {
    const nama = prompt('Masukan Nama : ');
    Callback(nama);
}
// tampilkanPesan(halo);
tampilkanPesan(nama => alert(`Halo, ${nama}`));


// Contoh Kasus
const mhs = [
    {
        "nama": "Muhammad",
        "nim": "06031281823023",
        "email": "muhammadridho0773@gmail.com",
        "jurusan": "Pendidikan Ekonomi",
        "idDosenWali": 1
    },
    {
        "nama": "Ridho",
        "nim": "12345678900001",
        "email": "ridho@default.id",
        "jurusan": "Pendidikan Ekonomi",
        "idDosenWali": 2
    },
    {
        "nama": "Arif",
        "nim": "12345678900002",
        "email": "arif@default.id",
        "jurusan": "Pendidikan Ekonomi",
        "idDosenWali": 3
    }
];
// /* > Cara biasa */
// mhs.forEach(m => console.log(m.nama));

/* > Simulasi Synchronous seolah-olah mengambil datanya lama */
console.log('mulai');
mhs.forEach(m => {
    for(let i = 0; i < 10000000; i++) {
        let date = new Date();
    }
    console.log(m.nama)
});
console.log('selesai');


// Contoh Kasus: Asynchronous Callback dengan ajax menggunakan vanila javascript
function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                error();
            }
        }
    }
    xhr.open('get', url);
    xhr.send();
}

// /* > Kondisi success */
// function success() {

// }

// /* > Kondisi error */
// function error() {

// }

// /* > Jalankan function */
// getDataMahasiswa('data/mahasiswa.json', success, error);

// /* atau buat anonymous function */
// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
// });
// console.log('selesai');

/* > jQuey */
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');