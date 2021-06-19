/* Destructuring Function

 */

//  Contoh Kasus
/* Cara 1 */
function penjumlahanPerkalian(a, b) {
    return [a + b, a * b];
}
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[[1]];
// console.log(kali);
/* > Destructuring */
const [jumlah, kali1] = penjumlahanPerkalian(2, 3);
console.log(jumlah);
console.log(kali1);

/* > Destructuring Function Value */
function kalkulasi(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}

const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
console.log(bagi);

/* Destructuring Function arguments */
const mhs1 = {
    nama: 'Muhammad Ridho',
    umur: 20,
    email: 'muhammadridho0773@gmail.com',
    nilai: {
        tugas: 80,
        uts: 90,
        uas: 85
    }
}
/* --> Cara1 */
// function cetakMhs(nama, umur) {
//     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));
/* --> Cara2 */
// function cetakMhs(mhs1) {
//     return `Halo, nama saya ${mhs1.nama}, saya berumur ${mhs1.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));
/* --> Cara3 Destructuring */
function cetakMhs({nama, umur, nilai: { tugas, uts, uas}}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));