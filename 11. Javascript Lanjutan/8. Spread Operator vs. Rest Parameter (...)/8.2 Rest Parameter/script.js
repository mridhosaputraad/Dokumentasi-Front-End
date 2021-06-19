/* Rest Parameter (. . .)

-> Definsi
    > Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array. -MDN 

FYI
-> secara default, didalam function memiliki arguments
*/
// Contoh
function myFunc(a, b, ...myArgs) {
    return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
}

console.log(myFunc(1, 2, 3, 4, 5));

// /* > Jika ingin pakai arguments */
// function myFunc() {
//     // return Array.from(arguments);
//     /* --> Dengan Spread Operator */
//     return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));


// Contoh kasus mmenjumlahkan seluruh parameter yang dikirimkan
function jumlahkan(...angka) {
    // let total = 0;
    // for(a of angka) {
    //     total += a;
    // }
    // return total;
    /* > Dengan Higher Order Functionn */
    return angka.reduce((a, b) => a + b);
}
console.log(jumlahkan(1, 2, 3, 4, 5));


// Contoh Kasus array destructuring
const kelompok1 = ['Muhammad', 'Ridho', 'Arif', 'Darmawan', 'Dendi'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);


// Contoh Kasus object destructuring
const team = {
    pm: 'Muhammad',
    frontEnd1: 'Ridho',
    frontEnd2: 'Arif',
    backEnd: 'Darmawan',
    ux: 'Dendi',
    devOps: 'Krisna' 
}

const { pm, ...myTeam} = team;
console.log(myTeam);


// Contoh kasus filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}
console.log(filterBy('boolean', 1, 2, 'Muhammad', false, 10, true, 'Ridho'));