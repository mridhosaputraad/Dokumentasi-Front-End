// syntax
// if(kondisi) {
//     aksi 1 //lakukan aksi jika kondisi bernilai true
// } else {
//     aksi 2
// }
//... //keluar dari blok jika kondisi bernilai false

// var angka = prompt('masukan angka:')
// if(angka % 2 == 0) {
//     alert(angka + ' adalah bilangan GENAP');
// } else {
//     alert(angka + ' adalah bilangan GANJIL')
// }

var jmlAngkot = 10;
var angkotBeroperasi = 6;


for(var noAngkot = 1; noAngkot<= jmlAngkot; noAngkot++) {

    if( noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}