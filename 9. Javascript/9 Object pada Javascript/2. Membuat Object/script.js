// /Membuat Object
// Object Literal
var mhs1 = {
    nama : 'Muhammad Ridho',
    nrp : '06031281823023',
    email : 'muhammadridho0773@gmail.com',
    jurusan : 'Pendidikan Ekonomi'
}

var mhs2 = {
    nama : 'Dendi Febri',
    nrp : '06031281823021',
    email : 'dendifebvre0773@gmail.com',
    jurusan : 'Pendidikan Ekonomi'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Ridho', '06031281823023', 'muhammadridho0773@gmail.com', 'Pendidikan Ekonomi')

// var mhs4 = buatObjectMahasiswa()

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    // var this = {};
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('Shiro', '030201034', 'shiro@roketmail.co', 'Teknik Mesin');