//  Latihan Js Dasar Pengulangan FOR dan IF ELSE Statement dari Bapak Sandhika Galih, Dosen Universitas Pasundan (https://www.youtube.com/webprogrammingunpas)

var beroperasi = 7;
var jAngkot = 10;
var noAngkot = 1;

//  Kondisi Angkot Berdasarkan Nomor

function cekKondisi(){
    var penampung = document.getElementById('angkotKita').value; 

    var pesan = '';
    if(penampung === ''|| penampung <= 0) {
            alert('Silahkan masukan terebih dulu nomor angkot yang ingin anda cek!');
        } else if(penampung <= beroperasi) {
            pesan ='Angkot No. ' + penampung + ' &nbsp;beroperasi dengan baik.';
        } else if(penampung > jAngkot) {
            alert('Maaf, nomor angkot yang anda masukkan tidak ada');
            pesan ='Kami hanya punya 10 angkot';
        } else {
            pesan ='Angkot No.' + penampung + ' &nbsp;sedang rusak';
        }

    document.getElementById ('hasil').innerHTML=pesan;
}

//  Keterangan Kondisi Semua Angkot

function allAngkot () {
    var str = "<table border='1' cellspacing='0' cellpading='6' align='center'>";
        str = str + "<thead>";
        str = str + "<tr><td>Nomor Angkot</td><td>Keterangan</td></tr>";
        str = str + "</thead>";
        str = str + "<tbody>";

        for(noAngkot; noAngkot <= jAngkot; noAngkot++) {
            var ket='';
                if(noAngkot > beroperasi) {
                    ket='Angkot sedang rusak';
                }else {
                    ket = 'Angkot beroperasi dengan baik.';
                }
                
            var str=str+"<tr><td>Angkot Nomor &nbsp" + noAngkot + " </td><td>" + ket + "</td></tr>";
        }
    str = str + "</body>";
    str = str + "</table>";

    document.getElementById('semuaAngkot').innerHTML = str;
    document.getElementById('container').style.height='auto';
    document.getElementById('tutup').style.height.zindex='2';
}

function tutupKet(){
    document.getElementById ('tutup').style.zIndex='0';
    document.getElementById ('semuaAngkot').innerHTML='';
    document.getElementById ('container').style.height='240px'; 
}