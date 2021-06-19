/* Tagged Template Literals

-> Definisi
    > bentuk yang lebih kompleks dari Template Literals, di mana memungkinkan kita untuk membaca template literals melalui sebuah functions. Setalah selesai membuat template literals, sting tsb bisa kita masukkan ke dalam function untuk mengubah bentuk dari string tadi. =MDN

-> Secara default, tagged templates ini bisa menerima parameter/arguments

-> Penggunaan Tagged Template
    > Escaping HTML Tags
        - disebut juga sanitasi html tag
        - untuk menghindari ketika ada script/karakter yang tidak di inginkan pada halaman web
    > Translation & Internationalization
        - istilahnya ahli bahasa dari website kaiian
        - untuk mengubah bahasa dari website kalian
    > Styled Components
        - sering digunakan untuk front end framework

FYI
> Di Javascript modern punya sebuah argument yang namanya Rest Parameter jadi dia bisa menampung seluruh expression yang ada di template literalsnya.
> Penulisannya
    - (string, ...values)
    - (string, ...args)
    yang nantinya values/args akan menjadi sebuah array yang isinya semua expressionnya yang ada di dalam template literalsnya.
*/

// Tagged Templates
// const nama = 'Muhammad Ridho';
// const umur = 20;
// // /* Template Literals Biasa */
// // const str = `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// // console.log(str);

// /* Dengan Tagged Template Literals */
// function coba(strings, ...values) { /* strings buat mengambil string biasa, values untuk mengambil expression */
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`; /* str selalu > satu dari values */
//     // });
//     // return result;

//     /* Cara efektif dengan Higher Order Functions */
//     return strings.reduce((result, str, i/*opsional*/) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// Contoh Kasus: Highlight
const nama = 'Muhammad Ridho';
const umur = 20;
const email = 'muhammadridho0773@gmail.com'

function highlight(strings, ...values) { 
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email ${email}.`;
document.body.innerHTML = str;


// Penggunaan Tagged Template
// /* > Escaping/Sanitize HTML Tags */
// function sanitize(strings, ...values) {
//     return DOMPurify.sanitize(aboutMe);
// }

// const name = 'anonymous';
// const aboutMe = `I love to do evil <img src="http:unsplash.it/100/100?random"onload="alert('I hacked you. Haha');" k`;

// const html = sanitize`
//     <h3>${name}</h3>
//     <p>${aboutme}</P>
// `;

// /* > Translation & Internationalization */
// const html = i18n`Hello ${name}, you have ${amount}:c in your bank account.`;
//     /* hasilnya */
//     // Hallo Dev, sie haben US$ 1,250.33 auf Ihrem Bankkonto.

// /* > Styled Components */
// const Tittle = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: palavioletred;
// `;