/* Higher Order Function

-> Pengertian
    > function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai value return. -https://eloquentjavascript.net
    > karena di dalam javascript, sebuah function disebut dengan First Class Function artinya inti dari javascript adalah function. Dimana javascript memperlakukan function sebagai object. -sitepoint.com
    > function kerjakanTugas bisa kita sebut dengan Higher Order Function.
    > dan jika memiliki function sebagai argument (..., selesai) disebut dengan callback.

-> Alasan kenapa menggunakan Higher Order Function
    1. untuk abstraksi agar kode yang dibuat menjadi sederhana. Karena semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan programmernya.
    2. dengan terbiasa membuat segala sesuatu dengan function itu kita masuk ke sebuah pendekatan yang namanya functional programmming. Dengan melakukan pendekatan ini karena sebetulnya javascript bukan bahasa pemograman functional murni tapi bisa kita buat seperti bahasa pemograman functional dan ketika kita menggunakan paradigma ini dengan benar makan akan membuat program kita lebih efektif, aman serta efisien

-> Contoh Higher Order Function
    > Array.prototype.map()
    > Array.prototype.filter()
    > Array.prototype.reduce()

FYI
-> object itu merupakan value sama seperti integer/string. Maka function juga bisa disimpan sebagai argument maupun return value dari sebuah function yang lain.
-> ada dua cara untuk merancang sebuah software
   1. untuk membuat programnya se-sederhana mungkin sehingga jelas-jelas tidak ada kekurangannya
   2. untuk membuat programnya se-kompleks mungkin sehingga tidak ada kekurangan yang jelas

*/

// Contoh: ketika menggunakan function, bisa menyimpan function lagi sebagai argument
function kerjakanTugas(matakuliah, selesai) {
    /* Langkah1: parameter matakuliah disimpan berupa string */
    console.log(`Mulai mengerjakan tugas ${matakuliah} ... `);
    /* Langkah2: panggil function selesai */
    selesai();
}
/* Langkah3: Menggunakan function sebagai argument */
function selesai() {
    alert(`Selesai mengerjakan tugas!`);
}
/* Langkah4: Panggil */
kerjakanTugas(`Pemograman Web`, selesai);


// Contoh lain
setTimeout(function()/* Parameter1(callback) */ {
    console.log(`Hello World`);
}, 1000/* Parameter2 Integer(Higher Order Function) */)


// Contoh lain ketika membuat tombol apabila diklik melakukan aksi
const tombol = document.querySelector(`.submit`);

tombol.addEventListener('click', function/* callback */() {
    console.log(`tombol ditekan!`)
});


// Contoh lain ketika memiliki function yang return valuenya function lagi
function ucapkanSalam(waktu)/* Higher Order Function karena*/ {
    return/* didalamnya terdapat return value */ function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatMalam = ucapkanSalam(`Malam`);

console.dir(selamatMalam(`Muhammad`));


// Contoh program untuk menghitung sebuah angka
let total = 0, count = 1;
/* Looping */
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);
/* Dibandingkan dengan penulisan */
console.log(sum(range(1,10)));


// Contoh lain misalnya
for (let i = 0; i < 10; i++) {
    console.log(i);
}
/* Kasusnya jika loppingnya 100x dst */
function repeatLog(n) {
    /* Looping */
    for (let i = 0;  i < n; i++) {
        console.log(i);
    }
}
/* Panggil */
repeatLog(10); /* jika mau 100 tinggal ubah isi dalam kurung tanpa menguba lagi loopingnya */

/* Ada cara lebih efektif lagi misal aksinya tampil dalam bentuk alert dengan higher order function*/
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
// repeat(10, console.log);
repeat(3, alert);