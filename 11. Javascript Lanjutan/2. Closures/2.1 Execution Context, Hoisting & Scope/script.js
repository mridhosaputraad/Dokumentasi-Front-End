/*
Closures

-> Execution Context
    > ada dua fase yang harus di ingat:
      1. Creation, fase ini terjadi di context global. Yang terjadi pada fase ini javascriptnya akan mengecek apakah ada variabel/function didalam kodingannya. Jika ada dia akan membuat nama variabel di isi dengan undefined. Jika ada function, maka akan di isi function itu sendiri
      2. Execution

-> Hoisting
    > Analoginya seperti mengerek bendera yang dinaikan ke atas. meskipun ditulis di bawah variabel dan function maka otomatis dinaikan ke atas. 
    > contoh konsepnya;
      nama var = undefined
      nama function = fn()
-> Scope

-> FYI
    > Javascript mendefinisikan window sebagai global object
    > Javascript mendefinisikan this sebagai window
    > Local Execution context, selain dapat mengakses window. Kita juga punya akses ke arguments 
    > local tadi setiap function dipanggil maka akan membuat execution  context baru 
*/

// console.log(nama);
// var nama= `muhammad`;

// Creation phase pada global context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window


// Execution phase
// console.log(sayHello());

// var nama = `Muhammad`;
// var umur = 20;

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }


// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting
// var nama = `Muhammad Ridho`;
// var username = `@ridho.47`;

// function cetakURL(username) {
//     var instagramURL = `http://instagram.com/`;
//     return instagramURL + username;
// }

// console.log(cetakURL(username));


// Contoh kasus
// function a() {
//     console.log(`ini a`);

//     function b() {
//         console.log(`ini b`);

//         function c() {
//             console.log(`ini c`);
//         }

//         c();
//     }

//     b();
// }

// a();


// Scope
// var nama = `Muhammad Ridho`;
// var username = `@ridho.47`;

// function cetakURL() {
//     console.log(arguments);
//     var instagramURL = `http://instagram.com/`;
//     return instagramURL + username;
// }

// console.log(cetakURL(`@dendi`, `@arif`));


// Latihan
function satu() {
    var nama = `Muhammad`;
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = `Ridho`;
satu();
dua(`Arif`);
console.log(nama);