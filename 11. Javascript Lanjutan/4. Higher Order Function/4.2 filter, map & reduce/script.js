/*
Filter, Map, & Reduce

-> Array.prototype.map()
    > artinya kita akan petakan setiap element arraynya kedalam sebuah function sendiri
-> Array.prototype.filter()
-> Array.prototype.reduce()
    > reduce juga menghasilkan array yang baru
    > reduce untuk melakukan sesuatu terhadap seluruh element pada arraynya
    > reduce memiliki dua arguments.
        1. accumulator / adalah hasil dari prosesnya
        2. currenValue / atau element array yang sedang di lopping

-> Ilustrasinya penggunaan dari function-function diatas misalnya ada beberapa bahan makanan nantinya akan dimasukkan ke dalam sebuah array. Dan ketika array ini nantinya akan dimasukkan kedalam Higher Order Function filter. Selanjutnya melakukan proses filter mana diantara bahan makanan ini yang berupa sayur. Maka, nanti function ini akan menghasilkan sebuah array baru hasil dari filter. Jadi bahan makanan yang selain sayur tidak akan terpilih.

-> Ilustrasi lainnya setiap element yang ada pada bahan makanan akan dilakukan proses potong. Jadi dengan memberikan callback function di mapnya nanti adalah potong. Maka, semua elementnya ketika masuk ke dalam Higher Order Function ini akan menghasilkan array baru berupa bahan makanan yang telah terpotong.

-> Ilustrasi selanjutnya kita beri setiap element pada arraynya function yang sama semua dipotong. Hasil dari function map ini, bisa kita beri Higher Order Function berikutnya yaitu reduce. Kalau reduce kita bisa lakukan misalnya menggabungkan ke semua bahan makan tadi untuk menjadi satu sandwich.

-> ketiga higher order function ini kita bisa gabungkan menggunakan method chaining dalam satu kali eksekusi sehingga tidak perlu disimpan ke dalam variabel terlebih dahulu

FYI
-> map dan foreach itu mirip. Bedanya, kalau foreach tidak menghasilkan array baru. Tapi, kalau map itu menghasilkan array baru yang mana bahan makanan yang sebelumnya itu sebenarnya masih ada. 
-> Jika memilki array kosong/object kalau menggunakan const tetep bisa di isi. Yang tidak bisa jika diganti nilainya dari array menjadi angka.
-> Jika memiliki dua argument maka penulisan kurungnya seperti
    > (), menjadi
    > ((accumulator, currentValue)), didalamnya terdapat dua parameter
*/

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 0];
// Contoh Kasus mencari angka >= 3
// /* Coba pakai looping for */
// /* 3. Membuat variabel */
// const newAngka = [];
// /* Looping */
// for (let i = 0; i < angka.length; i++) {
//     /* 1. Menelusuri */
//     if( angka[i] >= 3) {
//         /* 2. Mengambil isi angka dan masukkan ke array baru */
//         newAngka.push(angka[i]);
//     }
// }
// /* 4. Cek */
// console.log(newAngka);

// /* Coba pakai filter */
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });
// console.log(newAngka);

// /* Jika Menerapkan arrow function */
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// Contoh Kasus kalikan semua angka dengan 2
/* Coba pakai map */
// const newAngka = angka.map(a => a * 2);
// console.log(angka); /* Dan ini tidak mengubah isi dari array angkanya */
// console.log(newAngka);

// Contoh Kasus jumlahkan seluruh element pada array
/* coba pakai reduce */
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// // accumulator + currentValue, /* secara default ini sebetulnya ada satu nilai disini dengan menggunakan "," ini adalah nilai awal. Jika tidak dituliskan, maka nilai awalnya adalah 0 */);
// console.log(newAngka);

// Contoh kasus cari angka > 5, kalikan 3, jumlahkan
/* Method Chain */
const hasil = angka.filter(a => a > 5) // 8,9
    .map(a => a * 3) // 24, 27
    // .map(a => a / 2) /* bisa diulang-ulang */
    .reduce((acc, cur) => acc + cur); // 51
console.log(hasil);