// alert('hello world!');

// alert('Halo');
// alert('nama');
// alert('saya');
// alert('Muhammad Ridho');

// var nama = prompt('masukan nama:');
// alert(nama);

// var tes = confirm('kamu yakin??');
// if( tes === true ) {
//     alert('user menekan OK!');
// } else {
//     alert('user menekan CANCEL!');
// }

alert('selamat datang..');
var lagi = true;

while( lagi === true ) {
    var nama = prompt('masukan nama:');
    alert('halo ' + nama);

    lagi = confirm('coba lagi?');
}

alert('terima kasih..');