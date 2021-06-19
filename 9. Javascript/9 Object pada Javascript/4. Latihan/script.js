// 1. Membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
// 3. Mengelola Ketika Penumpang Naik
    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
// 4. Mengelola Penumpang Turun
    this.penumpangTurun = function(namaPenumpang, bayar) {
        // 5. Jika Kondisi Angkot Kosong
        if( this.penumpang.length === 0 ) {
            // Beritahu bahwa angkot kosong
            alert('angkot masih kosong');
            // Keluarkan dari method
            return false;
        }
        // 6. Jika Kondisi angkot terisi
        for( var i = 0; i < this.penumpang.length; i++ ) {
            if( this.penumpang[i] == namaPenumpang ) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}
// 2. Instansiasi Object Baru
var angkot1 = new Angkot('Robert', ['Tabung', 'Bukit'], [], 0);
var angkot2 = new Angkot('Tom Cruise', ['Pasar', 'Pakjo'], [], 0);