// Syntax
// while(kondisi) {
//     aksi
// }

// Infinite Loop
// while(true) {
//     console.log('hello world!');
// }

// Cara mengatasi looping (user)
// var ulang = true;
// while(ulang) {
//     console.log('hello world!');
//     ulang = confirm('lagi?');
// }

// Cara mengatasi looping (program)
// Syntax
// nilai awal
// while{kondisi terminasi} {

//     aksi

//     increament / decrement
// }

var jmlAngkot = 10;
var noAngkot = 1;

while(noAngkot <= jmlAngkot) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
noAngkot++;
}