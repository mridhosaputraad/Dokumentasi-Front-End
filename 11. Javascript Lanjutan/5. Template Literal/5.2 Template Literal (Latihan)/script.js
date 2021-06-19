/* Template Literal: HTMl Fragments */
// 1. HTML Fragment
// const mhs = {
//     nama: 'Muhammad Ridho',
//     umur: 20,
//     nim: '06031281823023',
//     email: 'muhammadridho0773@gmail.com'
// };

// let el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;

// document.body.innerHTML = el;


// 2. Looping
// const mhs = [
//     {
//         nama: 'Muhammad Ridho',
//         email: 'muhammadridho0773@gmail.com'
//     },
//     {
//         nama: 'Dendi',
//         email: 'dendi@gmail.com'
//     },
//     {
//         nama: 'Bambango',
//         email: 'bambang3@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;

// document.body.innerHTML = el;


// 3. Conditional
/* > Ternary */
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;

// document.body.innerHTML = el;


// 4. Nested
/* HTML Fragments bersarang */
// Langkah 1
const mhs = {
    nama: 'Muhammad Ridho',
    semester: 6,
    mataKuliah: [
        'Akuntansi Dasar',
        'Akuntansi Menengah',
        'Akuntansi Lanjutan',
        'Analisis Laporan Keuangan'
    ]
};
// Langkah 2
function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>    
    `;
}
// Langkah 3
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;