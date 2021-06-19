// Kenapa Object/
/*var namaMhs = 'Muhammad Ridho';
var umurMhs = 20;
var lulus = true;
var IPSemester = [3.50, 3.50, 3.50, 3.59, 3.50];
function IPKumulatif(IPSemester) {
    var total = 0;
    for( var i = 0; i < IPSemester.length; i++ ) {
        total += IPSemester[i];
    }
    return total/IPSemester.length;
};*/

// Bila menggunakan array
/*var mahasiswa = ['Muhammad Ridho', true, [3.50, 3.50, 3.50, 3.50, 3.50]];
function IPKumulatif(IPSemester) {
    var total = 0;
    for( var i = 0; i < IPSemester.length; i++ ) {
        total += IPSemester[i];
    }
    return total/IPSemester.length;
};
IPKumulatif(mahasiswa[2]);*/

// Diperbaiki dengan object
/*var mahasiswa = {
    nama : 'Muhammad Ridho',
    lulus : true,
    IPSemester : [3.50, 3.50, 3.50, 3.50, 3.50],
    IPKumulatif : function() {
        var total = 0;
        var ips = this.IPSemester;
        for( var i = 0; i < ips.length; i++ ) {
            total += ips[i];
        }
        return total/ips.length;
    }
}
mahasiswa.IPKumulatif();*/

// Anatomi Object
    // properti
    /*var orang = {
        nama : 'Muhammad Ridho',
        umur : 20,
        pekerjaan : 'Mahasiswa',
    // method
        sapa : function() {
            return 'Hi, nama saya ' + this.nama + ' usia saya ' + this.umur + ' tahun, dan saya adalah seorang ' + this.pekerjaan;
        }
    }*/

// Implementasi
var mhs = {
    nama : "Muhammad",
    umr : 20,
    ips : [3.50, 3.50, 3.50, 3.50, 3.50],
    alamat : {
        jalan : "Jl. abc No. 123",
        kota : "Palembang",
        provinsi : "Sumatera Selatan"
    }
};