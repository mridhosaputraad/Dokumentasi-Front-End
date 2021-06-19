/* Promise

-> Definisi
    > sebuah object yang merepresentasikan keberhasilan/kegagalan dari sebuah event yang asynchronous di masa yang akan datang.
    > kondisinya: states (fulfilled / rejected / pending )
    > menjalankannya: callback (resolve / reject / finally)
    > aksi (then / catch) 

-> Didalam promise ada sebuah method yang namanya Promise.all untuk menjalankan ketika memiliki banyak promise mau dijalankan sekaligus

-> Menggunakan promise menyelesaikan masalah callback hell

*/

// Pengantar
// /* > Dengan jquery ajax */
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=5b3a3cc3&s=avengers',
//     success: movies => console.log(movies)
// });

/* > Dengan vanila javascript */
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(JSON.parse(xhr.response));
//         } else {
//             console.log(xhr.responseText);
//         }
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=5b3a3cc3&s=avengers');
// xhr.send();

// /* > Dengan cara fetch */
// const movies = fetch('http://www.omdbapi.com/?apikey=5b3a3cc3&s=avengers');
// console.log(movies);

fetch('http://www.omdbapi.com/?apikey=5b3a3cc3&s=avengers') //melihat isinya
    .then( response => response.json())
    .then( response => console.log(response));


// Contoh Promise
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
    if(ditepati) {
        resolve('Janji telah ditepati!'); // -> Bisa request Api atau menjalankan proses yang kompleks
    } else {
        reject('Ingkar janji..');
    }
});

// console.log(janji1); /* Menjalankan Default */
/* Jika menjalankan resolve dan reject */
janji1
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! : ' + response));

/* > Contoh Kasus */
let ditepati1 = false;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktu');
        }, 2000);
    } else {
        setTimeout(() => {
            reject('Tidak ditepati setelah beberapa waktu!');
        }, 2000);
    }
});
/* Coba jalankan asynchronous */
console.log('mulai');
// console.log(janji2.then(() => console.log(janji2))); // melihatkan proses pendingnya
janji2
    .finally(() => console.log('selesai menunggu!')) // biasanya digunakan untuk menambahkan animasi loading
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! : ' + response));
console.log('selesai');

/* > Contoh kasus menggunakan method Promise.all ketika ingin mengambil dua API/lebih */
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Muhammad Ridho',
            pemeran: 'Arif, Darma'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Palembang',
            temp: 26,
            kondisi: 'Cerah Berawan'
        }]);
    }, 500);
});
// /* Menjalankannya satu satu */
// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));
/* Jika Menjalankannya sekaligus */
Promise.all([film, cuaca])
    // .then(response => console.log(response)); // array di dalam array, atau
    .then(response => { // dengan spread operator
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });
