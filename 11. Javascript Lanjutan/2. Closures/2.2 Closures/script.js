/* Closures

-> merupakan kombinasi antara function dan lingkungan leksikal (lexikal scope) di dalam function tsb. -MDN
-> sebuah function ketika memiliki akses ke parent scopenya, meskipun parent scopenya sudah selesai dieksekusi. Jadi sebuah function itu bisa memiliki function didalamnya. Tapi, kasus tsb bukan merupakan sebuah closure. Namun, akan menjadi closure ketika function didalamnya memiliki akses ke parent scopenya. -W3school
-> sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan. Ini balik lagi ke lexikal scopenya. Jadi kita bisa membuat function yang mereturn function. Intinya bukan function didalam function tapi function mereturn function. -Code Fellow
-> sebuah function yang sebelumnya sudah memiki data, hasil dari function yang lain. -Techsith

-> Kenapa menggunakan Closure
    > untuk membuat function factories. -MDN
    > untuk membuat private method. -MDN

-> FYI
    > inner function bisa memiliki akses ke parent variabelnya.

*/
// lexical scope
// function init() {
//     let nama = `Muhammad`; // local variabel
//     function tampilNama() { // inner function (closure)
//         console.log(nama); // akses ke parent variabel
//     }
//     tampilNama();
// }
// init();

// Contoh kasus1
// function init() {
//     let nama = `Muhammad`;
//     let umur = 20;
//     function tampilNama() { 
//         console.log(nama); 
//         console.log(umur);
//         }
//     console.dir(tampilNama);
// }
// init();

// Contoh kasus2
// function init() {
//     // let nama = `Muhammad`;
//     // function tampilNama(nama) { 
//     return function tampilNama(nama) {
//         console.log(nama); 
//     }
//     // return tampilNama; bisa diringkas
// }
// let panggilNama = init();
// panggilNama(`Muhammad`);
// panggilNama(`Ridho`);

// > untuk membuat function factories
function ucapkanSalam(waktu) {
    // mengembalikan function lagi
    return function(nama) {
        // Menjalankan
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}
// Membuat pesannya tampil sesuai waktu
// let selamatPagi = /* Jalankan dulu function authornya */ucapkanSalam(`Pagi`);
// let selamatSiang = ucapkanSalam(`Siang`);
// let selamatMalam = ucapkanSalam(`Malam`);
// // Jalankan
// selamatPagi(`Muhammad`);
// selamatMalam(`Ridho`);

// > untuk membuat private method
// membuat sebuah program sederhana untuk menghitung misalkan sudah berapa kali sebuah tombol itu diklik
// let counter = 0;
// // function expression
// let add = function () {
//     return ++counter
// }
// console.log(add());
// console.log(add());
// console.log(add());

// Contoh kasus ketika programnya banyak agar counterny tidak terganggu
// // let counter = 0;
// // Masukkan counternya ke  dalam
// let add = function () {
//     let counter = 0;
//     // Gunakan Closure
//     // inner function
//     return function() {
//        return ++counter; 
//     } 
// }
// // Simpan ke dalam sebuah variabel
// let /* jalankan function */ a = /* jalankan semuanya */ add();

// console.log(a());
// console.log(a());
// console.log(a());

// Cara Otomatis
let add = (function () {
    let counter = 0;
    return function() {
       return ++counter; 
    } 
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());