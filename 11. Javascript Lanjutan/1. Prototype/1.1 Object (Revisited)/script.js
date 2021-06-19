/*
Prototype
   
-> Membuat Object Dengan Javascript
    > Object Literal
    > Function Declaration
        - Keuntungannya tidak perlu membuat duplikat dari objectnya. Cukup membuat templatenya satu jika khendak membuat object lebih dari satu. ketika return, Cukup instansiasinya yang berulang kali
    > Constructor Function
        - menggunakan keyword new
    > object.create()
    Catatan:
    Object itu isinya ada property dan method
    Method adalah function yang di dalam object
    Property isinya adalah nilai. Sedangkan method isinya adalah function
    Perbedaan Function declaration dengan constructor function;
        1. bila menggunakan constructor function, tidak perlu menuliskan deklarasi variabel dan return karena sudah dilakukan secara otomatis oleh javascript
*/
// // 1, Object Literal
// let mahasiswa1 = {
//     // Membuat Object
//     nama: 'Muhammad', 
//     energi: 10,
//     // Jika mahasiswa makan akan Menambah Energy 
//     makan: function(porsi) {
//         this.energi =this.energi + porsi;
//         // Return
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }
// // Jika ingin membuat instansi object berikutnya/mahasiswa yang kedua tapi namanya tidak boleh sama
// let mahasiswa2 = { // -> Didalam Object
//     nama: 'Ridho', 
//     energi: 20,
//     // Jika mahasiswa makan akan Menambah Energy
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         // Return
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// // 2. Function Declaration
// function Mahasiswa(nama, energi) {
//     // Membuat template (deklarasikan dulu bila akan membuat sebuah object)
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     // Method1 (makan menambah energi)
//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
//     // Method2 (main mengurangi energi)
//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     }
//     // Return
//     return mahasiswa;
// }
// // Lakukan Pemanggilan/Instansiasi
// let muhammad = Mahasiswa(`Muhammad`, 10);
// let ridho = Mahasiswa(`Ridho`, 20);

// 3. Constructor function
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
    // Method1 (makan menambah energi)
    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
    // Method2 (main mengurangi energi)
    this.main = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`)
    }
}
// Cara Instansiasi
let muhammad = new Mahasiswa(`Muhammad`, 10);