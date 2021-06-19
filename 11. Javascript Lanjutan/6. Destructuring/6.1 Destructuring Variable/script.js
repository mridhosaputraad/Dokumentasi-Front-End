/* Destructuring Assignment

-> Definisi
    > Expression pada javascript yang membuat kita dapat 'membongkar' nilai dari array atau properti dari object kedalam variabel yang terpisah. -MDN
*/
// Contoh
/* > Array */
const coba = ['satu', 'dua', 'tiga'];
// const aduh = coba[1];
// console.log(aduh);
/* > Destructuring Assignment */
const [a, b, c] = coba;
console.log(a); // "satu"
console.log(b); // "dua"
console.log(c); // "tiga"

/* --> Skipping Items */
const perkenalan = ['Halo', 'nama', 'saya', 'Muhammad Ridho'];
/* --> Destructuring Assignment */
const [salam, , , nama1] = perkenalan;
console.log(nama1);

/* --> Swap Items */
let x = 1;
let y = 2;
/* --> Destructuring Assignment */
console.log(x);
console.log(y);
[x, y] = [y, x];
console.log(x);
console.log(y);

/* --> Return value pada function */
function test() {
    return [1, 2];
}
// const z = test();
// console.log(z[1]);
/*--> Destructuring Assignment */
const [r, t] = test();
console.log(r);

/* --> Rest parameter */
// Misalkan ingin membongkar banyak nilai array tapi tidak tau akan ada berapa banyak elementnya
const [k, ...values] = [1, 2, 3, 4, 5];
console.log(k);
console.log(values);


/* > Object */
// const mhs = {
//     nama: 'Muhammad Ridho',
//     umur: 20,
//     email: 'muhammadridho0773@gmail.com'
// }
// // const nama = mhs.nama;
// // console.log(nama);
// /* > Destructuring Assignment */
// const {nama, umur, email} = mhs;
// console.log(nama); // "Muhmmad Ridho"
// console.log(umur); // "20"
// console.log(email); // "muhammadridho0773@gmail.com"

/* --> Assignment tanpa deklarasi object */
({nama, umur, email} = {
    nama: 'Muhammad Ridho',
    umur: 20,
    email: 'muhammadridho0773@gmail.com'
});
console.log(nama); 
console.log(umur); 
console.log(email); 

/* --> Assign ke variabel baru */
// Misalkan memberi nama baru tapi ingin berbeda dengan nama propertinya
const mhs = {
    nama: 'Muhammad Ridho',
    umur: 20,
    email: 'muhammadridho0773@gmail.com'
}
const {nama: n, umur: m, email: o} = mhs;
console.log(n); 
console.log(m); 
console.log(o); 

/* --> Memberikan Default Value */
const mhs2 = {
    nama2: 'Muhammad Ridho',
    umur2: 20,
    // email2: 'muhammadridho0773@gmail.com'
}
const {nama2, umur2, email2 = 'email@default.com'} = mhs2;
console.log(email2); 

/* --> Memberi nilai default + assign ke variabel baru */
const mhs3 = {
    nama3: 'Muhammad Ridho',
    umur3: 20,
    // email3: 'muhammadridho0773@gmail.com'
}
const {nama3: q, umur3: w, email3: e = 'email@default.com'} = mhs3;
console.log(e); 

/* --> Rest Parameter */
const mhs4 = {
    nama4: 'Muhammad Ridho',
    umur4: 20,
    email4: 'muhammadridho0773@gmail.com'
}
const {nama4, ...value} = mhs4;
console.log(value); 

/* --> Mengambil field pada object, setelah dikirim sebagai parameter untuk function */
const mhs5 = {
    id: 123,
    nama5: 'Muhammad Ridho',
    umur5: 20,
    email5: 'muhammadridho0773@gmail.com'
}
// function getIdMhs(mhs5) {
//     return mhs5.id;
// }
// console.log(getIdMhs(mhs5));
/* --> Destructuring Assignment */
function getIdMhs({id, nama5}) {
    return nama5;
}
console.log(getIdMhs(mhs5));