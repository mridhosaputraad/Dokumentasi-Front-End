/* Template Literal / Template String

-> Definsi
    > string literal yang memungkinkan adanya expression di dalamnya. string literal yang biasa dibuat seperti di simpan ke dalam sebuah variabel atau dicetak misalnya dengan console.log. -MDN
    > dengan membuat string literal dengan ` ` atau disebut back tick ini, memungkinkan kita untuk membuat template literal. 
    > Template literal hanya bisa dibuat dengan menggunakan `` back tick.

-> Dengan menggunakan `` back tick, dapat membuat:
    > Multi-line String
    > Embedded Expression
    > HTML Fragments  --- biasanya di framework
    > Expression Interpolation --- sama seperti " " di php
    > Tagged Template

FYI
> Kutip " " lebih sakti karena bisa melakukan interpolasi

*/

// String Literal
// > kutip 
let nama = 'Muhammad';
let nim = "06031281823023";
let email = `muhammadridho0773@gmail.com`;


// Contoh Penggunaan Template Literal
// String Biasa
// `string text`


// multi-line string 
`string text baris 1
 string text baris 2
 string text baris 3`
/* kutip biasa */
console.log('string 1\nstring2'); // untuk menambahkan baris baru membutuhkan escape character
/* back tick */
console.log(`string 1 
string 2`); // dengan back tick cukup gunakan enter

/* multi-line string (HTML Fragments) (1) */
const mhs = {
    nama: 'Muhammad Ridho',
    umur: 20,
    nim: '06031281823023',
    email: 'muhammadridho0773@gmail.com'
};
// /* > concade */
// let el = '';
// el += '<div class="mhs">';
// el += '<h2>' + mhs.nama + '</h2>';
// el += '<span class="nim">' + mhs.nim + '</span>';
// el += '</div>'

// console.log(el);

/* multi-line string (HTML Fragments) (2) */
/* > Template Literal*/
let el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`;

console.log(el);


// Embedded Expression
// `string text ${expression} string text`
/* Contoh */
const nama1 = 'Muhammad Ridho';
let umur1 = 20;
console.log(`Halo, perkenalkan nama saya ${nama1}, saya ${umur1} tahun`);
console.log(`${1 + 1}`);
console.log(`${alert('halo!')}`);
/* > Ternary Operator */
const x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

/* Expression Interpolation (1) */
let a = 10;
let b = 15;
// console.log('Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ' + (a + b) + ', bukan ' + (2 * a + b));

/* Expression Interpolation (2) */
/* > Template Literal */
console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a + b}, bukan ${2 * a + b}`);


// Tagged template
// tag `string text ${expression} string text`