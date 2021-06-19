/* 
Konsep this

-> untuk menggunakan arrow function tidak bisa begitu saja mengubah semua function menjadi arrow kecuali pada method itu aman.
-> pada saat menggunakan arrow function sebetulnya tidak menyimpan konsep this

FYI
-> toggle() --- akan menambahkan class baru jika belum ada. akan menghilangkan class jika ada
*/

// Konsep this pada arrow function
// > constructor function
// const Mahasiswa = function() {
//     this.nama = `Muhammad`;
//     this.umur = 20;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const muhammad = new Mahasiswa();
/* Contoh kasus */
// const Mahasiswa = function() {
//     this.nama = `Muhammad`;
//     this.umur = 20;
//     this.sayHello = function/*Function expression tidak akan kena hoisting*/() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
//     // /* membuat function yang otomatis langsung dijalankan */
//     // setInterval(function/*function deklaration akan kena hoisting*/() {
//     /* menggunakan arrow function */
//     setInterval(() => {
//         /* setiap setengah detik umur nambah 1 */
//         console.log(this.umur++);
//     }, 500);
// }
    
// const muhammad = new Mahasiswa();

// > arrow function
// const Mahasiswa = function() {
//     this.nama = `Muhammad`;
//     this.umur = 20;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const muhammad = new Mahasiswa();

// > object literal
// const mhs1 = {
//     nama: `Muhammad`,
//     umur: 20,
//     sayHello: () => { /* jika di ubah ke arrow function */
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// Contoh kasus penggunaan arrow function sesuai kenyataan
/* Langkah1: Mengambil elemen kotak dengan DOM Selection */
const box = document.querySelector(`.box`);
/* Langkah2: Buat aksi untuk menjalankan animasi*/
box.addEventListener(`click`, function () {
    /* Langkah3: akhir animasi caption dulu baru size */ 
    let satu = `size`;
    let dua = `caption`;

    if (this.classList.contains(satu)) {
        /* Langkah4: Membuat variabel sementara */
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    /* Gunakan arrow function */
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});