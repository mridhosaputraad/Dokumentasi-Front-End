// this
// var a = 10;
// console.log(this.a);

// Cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this mengembalikan object global

// // Cara 2 - object literal
// var obj = { a : 10, nama : 'Muhmmad'};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan

// Cara 3 - constructor
function Halo() {
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat


// Membuat Object

// Cara 1 - function declaration
// function halo() {
//     console.log('halo');
// }
// halo();

// // Cara 2 - object literal
// var obj = {};
// obj.halo = function() {
//     console.log('halo');
// }
// obj.halo();

// // Cara 3 - constructor
// function Halo() {
//     console.log('halo');
// }
// new Halo();