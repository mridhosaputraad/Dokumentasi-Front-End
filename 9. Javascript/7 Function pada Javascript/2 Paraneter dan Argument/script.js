// Contoh

// function tambah(a, b) //--> Ini parameter  {
//     return a + b;
// }

// var coba = tambah(5, 10) //--> ini argument;

// function tambah(a, b) {
//     return a + b;
// }

// var a = parseInt(prompt('Masukan nilai 1 :')); //10;
// var b = parseInt(prompt('Masukan nilai 2 :'));//20;
// var hasil = tambah(a*2, b*2);
// console.log(hasil);


// function tambah(a, b) {
//     return a + b;
// }

// function kali(a, b) {
//     return a * b;
// }

// var hasil = kali(tambah(1, 2), tambah(3, 4));
// console.log(hasil);


// Jika argument lebih sedikit dari argument, maka argument kelebihannya akan diabaikan
// function tambah(a,  b) {
//     return a + b;
// }

// var coba = tambah(5, 10, 20); //Nilai 20 akan diabaikan tapi jsnya tidak error

//Jika parameter lebih banyak dari argument, maka parameter kelebihannya akan diisi dengan nilai undefined
// function tambah(a, b, c) {
//     return a + b;
// }

// var coba = tambah(5, 10);


// variabel arguments yang berbentuk array
// function tambah() {
//     return arguments;
// }
// var coba = tambah(5, 10, 20, "hi", false);
// console.log(coba);

function tambah() {
    var hasil = 0;
    for( var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1, 2, 3, 4, 5);
console.log(coba);
