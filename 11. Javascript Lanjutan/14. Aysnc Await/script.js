/* Async Await

-> Konsep Async
    > Asynchronous Function
        > Sebuah function yang bekerja secara asynchronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return value-nya, tapi cara penulisan cose-nya menggunakan penulisan yang synchronous (standard). -MDN
        > Jadi dapat di katakan Asynchronous function:
            - Fungsi yang berjalan secara asynchronous
            - Menghasilkan (implisit) promise
            - Cara penulisannya sama seperti synchronous function (function biasa)
        > Sebuah async function dapat memiliki keyword await di dalamnya untu memberhentikan sementara eksekusi fungsinnya sambil menunggu promise-nya selesai. -MDN

FYI
> async dan await asumsinya sudah resolve, jadi tidak menangkap reject
*/

// Review Kilas
// const coba = new Promise(resolve => resolve('selesai'));
// console.log(coba);

/* */
// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000);
//     });
// coba.then(() => console.log(coba));



// Menerapkan Async Await
// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('selesai')
//         }, 2000);
//     });
// }
// // const coba = cobaPromise();
// // coba.then( coba => console.log(coba));

// /* > Untuk mengubah menjadi async dan  await maka membutuhkan sebuah function untuk menjalankan function sebelumnya */
// async function cobaAsync() {
//     const coba = await cobaPromise();
//     console.log(coba);
// }
// cobaAsync();



/* > Coba error handling */
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, waktu);
        } else {
            reject('kelamaan');
        }
    });
}

/* Menggunakan then */
// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));

/* Menggunakan Async Await */
async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) {
        console.error(err);
    }
}

cobaAsync();