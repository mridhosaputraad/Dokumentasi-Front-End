/* Looping Baru

-> for..of
    > Creates a loop literating over iterable object. -MDN
    > secara default tidak memiliki indeks
    > sebuah looping yang bisa mengulang atau menelusuri object-object yang iterable.
    > Iterable object
        - String
        - Srray
        - Arguments/NodeList
            => Arguments adalah array untuk menampung argumen-argumen pada function
            => NodeList adalah ketika melakukan query pada DOM
        - TypedArray
        - Map
        - Set
        - User-defined Iterables

-> for..in
    > creates a loop only iterating over enumerable. ->
    > enumerable maksudnya adalah properti pada object
    > didalam iterables salah satuny tidak ada object. karena object bisa di looping isinya/propertinya menggunakan for in

FYI
-> foreach tidak bisa digunakan untuk lopping string (foreach khusus untuk array).
-> didalam iterables salah satuny tidak ada object. karena object bisa di looping isinya/propertinya menggunakan for in
-> kalo mau loopingnya properti dari object, gunakan for..in
-> kalo mau mengulang isi array dan iterables object yang lain, gunakan for..of 

*/

// for..of
// Contoh kasus Array
const mhs = ['Muhammad', 'Ridho', 'Arif'];
// /* > for biasa */
// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// /* > forEach */
// mhs.forEach( m => console.log(m));
// /* --> Misal ingin menampilkan beserta indeksnya */
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// /* > for..of */
// for (const m of mhs) {
//     console.log(m);
// }
/* --> Misal ingin menampilkan beserta indeksnya */
// gunakan method entries
for (const [i, m] of mhs.entries()) {
    console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}


// Contoh kasus String
const nama = 'Muhammad';
/* > for..of */
for (const n of nama) {
    console.log(n);
}


// Contoh Kasus NodeList
const liNama = document.querySelectorAll('.nama');
// /* > forEach */
// liNama.forEach(n => console.log(n.innerHTML));
// liNama.forEach(n => console.log(n.textContent))

/* for..of */;
for (n of liNama) {
    console.log(n.innerHTML);
}


// Contoh Kasus Arguments
// /* > kalo di array */
// function jumlahkanAngka() {
//     return [1, 2, 3, 4, 5].reduce((a, i) => a + i);
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// /* > forEach */
// function jumlahkanAngka() {
//     let jumlah = 0;
//     [1,2,3,4,5].forEach(a => jumlah += a);
//     return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

/* > for..of */
function jumlahkanAngka() {
    let jumlah = 0;
    for(a of arguments) {
        jumlah += a;
    }
    return jumlah;
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5));



// for..in
const mhs1 = {
    nama: 'Muhammad Ridho',
    umur: 20,
    email: 'muhammadridho0773@gmail.com'
}
for (m in mhs1) {
    console.log(mhs1[m]);
}