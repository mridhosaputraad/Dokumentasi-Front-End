/* Arrow Function

-> Bentuk lain yang lebih ringkas dari function expression. -MDN

*/

// Arrow Function(Pengantar)
// > Function Declaration
// function tampilPesan (nama) {
//     alert(`halo ` + nama);
// }
// tampilPesan(`Muhammad`);

// > Function Expression
// let tampilPesan = function (nama) {
//     alert(`Halo ` + nama);
// }
// tampilPesan(`Muhammad`);


// > Arrow Function
/* Meringkas Function Expression */
// let tampilPesan = (nama) => {
//     alert(`Halo ` + nama);
// }
// tampilPesan(`Muhammad`);


/* jika Parameternya lebih dari 1 */
// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama(`Muhammad`, `Pagi`));

/* jika parameternya satu tidak harus menggunakan ()
   lalu,jika function hanya mereturn saja tidak perlu menuliskan return dan {}. Hal ini disebut dengan implisit return.
*/
let tampilPesan = nama => (`Halo ` + nama);
console.log(`Muhammad`);

/* Jika tanpa parameter */
const tampilNama = () => `Hello World!`;
console.log(tampilNama());

// Contoh: membuat function map untuk memetakan sebuah function ke dalam array
/* Langkah1: membuat array */
let mahasiswa = [`Muhammad`, `Ridho`, `Arif`];
/* Langkah2: Menghitung jumlah huruf dari nama-nama mahasiswa */
let jumlahHuruf = mahasiswa.map(function (nama) {
    return nama.length;
});
console.log(jumlahHuruf);

/* Jika dituliskan ke bentuk arrow function */
let mahasiswa1 = [`Muhammad`, `Ridho`, `Arif`];
let jumlahHuruf1 = mahasiswa1.map(nama => nama.length);
console.log(jumlahHuruf1);

/* Jika ingin mengembalikan ke dalam bentuk object */
let mahasiswa2 = [`Muhammad`, `Ridho`, `Arif`];
let jumlahHuruf2 = mahasiswa2.map(nama => ({ nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf2);