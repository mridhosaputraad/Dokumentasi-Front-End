/* Spread Operator (. . .)

-> Definsi
    > Memecah (expand/unpack) iterables menjadi single element. -MDN

-> Kapan menggunakan spread operator ini:
    > Untuk menggabungkan 2/lebih array
    > untuk meng-copy nilai pada array
*/
// Contoh
const mahasiswa = ['Muhammad', 'Ridho', 'Arif'];
console.log(...mahasiswa[0]);

/* > Menggabungkan 2/lebih array */
const mahasiswa1 = ['Muhammad', 'Ridho', 'Arif'];
const dosen = ['Ade', 'Hendra', 'Wanda'];
// const orang = mahasiswa1.concat(dosen); cara lama jika dengan method concat
const orang = [...mahasiswa1, 'Aji', ...dosen];
console.log(orang);

/* > Meng-copy array */
const mhs = ['Muhammad', 'Ridho', 'Arif'];
// const mhs1 = mhs; Teknik ini menimpa bukan mengcopy
const mhs1 = [...mhs];
mhs1[0] = 'Fajar';
console.log(mhs1);


// Contoh Kasus memasukan li ke variable array
const liMhs = document.querySelectorAll('li');
// /* > Cara manual pakai looping */
// const mhs2 = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs2.push(liMhs[i].textContent);
// }
// console.log(mhs2);

/* > Menggunakan Higher Order Function Map */
const mhs2 = [...liMhs].map(m => m.textContent);
console.log(mhs2);


// Contoh kasus menggunakan spread untuk membuat animasi perhuruf
const nama = document.querySelector('.nama');
/* > LANGKAH1: PECAH MENJADI TIAP-TIAP HURUF */
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
/* > LANGKAH2: huruf KITA TEMPELKAN  SI VARIABEL nama-nya */
nama.innerHTML = huruf;