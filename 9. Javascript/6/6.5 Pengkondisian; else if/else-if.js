// Syntax
// if(kondisi 1) {
//     aksi 1
// } else if(kondisi 2) {
//     aksi 2
// } else {
//     aksi 3
// }

// var angka = prompt('Masukan angka:');
// if(angka % 2 == 0) {
//     alert(angka + ' adalah bilangan GENAP');
// } else if (angka % 2 == 1) {
//     alert(angka + ' adalah bilangan GANJIL');
// } else {
//     alert('yang anda masukkan bukan angka!');
// }

var jmlAngkot = 10;
var angkotBeroperasi = 6;


for(var noAngkot = 1; noAngkot<= jmlAngkot; noAngkot++) {

    if( noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else if ( noAngkot === 8) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    } else { console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');

    }
}