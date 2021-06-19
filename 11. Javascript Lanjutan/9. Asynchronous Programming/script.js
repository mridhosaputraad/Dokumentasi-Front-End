/* Asynchronous Programming

-> Teknik-teknik asynchronous pada javascript:
    > Callback
    > Promise
    > ajax
    > Async & Await

-> Penjelasan Konsep
    > Javascript, adalah bahasa pemograman tingkat tinggi dan dinamis yang secara umum dapat berjalan pada browser. -wikipedia
    > Javascript, is a single-threaded, non-blocking, asynchronous and concurrent language. -latentflip

    -> Apa itu single-threaded?
        > Thread adalah urutan eksekusi kode yang dapat dilakukan secara bebas/independent satu sama lain. Intinya javascript hanya bisa melakukan satu hal pada satu waktu tertentu. ilustrasinya berikut:
            thread 1 = Task-1 -> Task-2 -> Task-3 -> Task-4
            Artinya javascript membaca baris perbaris dan menyelesaikannya.

    -> Multi threaded,
        > Threadnya bisa banyak. Walaupun secara umum tetap aja pekerjaannya tetap hanya bisa dilakukan satu persatu. Tapi, bisa aja dikerjakan oleh thread yang berbeda. Ilustrasinya berikut:
            thread 1 = Task-1                   Task-4
            thread 2 =          Task-2
            thread 3 =                  Task-3

    -> Blocking
        > Ilustrasinya ketika memiliki Task-1. Pada saat dieksekusi, ternyata script ini membutuhkan waktu yang lama. Jika Task-1 belum selesai, maka dia tidak bisa masuk ke Task berikutnya.

    -> Non-blocking
        > Ilustrasinya ketika kita mengejakan satu hal walapun pekerjaannya belum selesai. Kita bisa lanjut ke Task berikutnya.

    -> Synchronous
        > Task-1 -> Task-2 -> Task-3 -> Task-4

    -> Asynchronous
        > Misalnya mulai mengerjakan Task-1 dan belum selesai. Tapi, thread-nya bisa pindah ke Task-2. JIka Task-2 belum selesai, maka akan berpindah lagi ke Task-1. Dan seterusnya sampai Task-1 selesai dan Task-2 selesai. Ini kalo Asychronousnya single threaded. Ilustrasinya berikut:
            Task-1 (mulai) -> Task-2 (mulai) -> Task-1 -> Task-2 --- Task-1(selesai) -> Task 2 (selesai)
        
        > Jika Asynchonousnya multi threaded, misalnya memiliki 3 threaded itu bisa dikerjakan secara bersamaan. Ilustrasinya berikut:
            thread 1 = Task-1       Task-4
            thread 2 =      Task-2
            thread 3 =               Task-3

    -> Konsep ini jika digabungkan
        > Misalnya Asynchronous + Single-threaded = Concurrency
        > Sedangkan Asynchronous + Multi-threaded = Parallelism (bener-bener dikerjakan secara bersamaan dalam satu waktu tertentu)

    -> Kesimpulan
        > Single vs Multi Thread 
            - ada hubungannya dengan lingkungan eksekusi 'task'-nya. Yang dikerjainnya menggunakan satu thread/banyak thread.
        > Blocking vs Non-blocking
            - merupakan teknik 'ngoding' yang biasanya ada hubungan dengan input output (IO related). Ketika tombol di click, saat memilih sesuatu, mengerjakan sebuah fungsi yang kompleks.
        > Synchronous vs Asynchronous
            - merupakan teknik 'ngoding' yang ada hubungan dengan request http (HTTP Request related). Biasanya misal ketika ingin menggunakan ajax
        > Concurrent vs Parallel
            - berhubungan dengan lingkungan eksukusi 'task'. Biasanya ada hubungannya juga dengan infrasturktur sama hardware atau virtualisasi misalnya.
        > Diperdalam, javascript itu single-threaded yang hanya bisa melakukan satu hal dalam satu waktu tertentu. Tapi javascrip bisa Non-blocking dan Asynchronous.

-> Javascript
    > Didalamnya ada sesuatu yang namanya "V8 Engine" mesin yang menjalankan javascript yang ditanam di browser.
        - V8 terdiri dari dua bagian:
            1. Heap, digunakan untuk alokasi memory (Memory Allocation). Dan digunakan juga untuk tempat penyimpanan variabel, functions, ada hubungannya juga dengan hoisting.
            2. Stack, javascript gunakan untuk pemanggilan functions (Function Call) dan eksekusi scriptnya (Execution Context) 
            
FYI
> http://latenflip.com/loupe/ by philip roberts
> DON'T BLOCK THE EVENT LOOP
*/
// Contoh
console.log('satu');
console.log('dua');
console.log('tiga');
/* > Ini ada eksekusi. Berarti adanya di stack */

function kalikan(a, b) { /* > Ini masuk ke dalam heap, lakukan hoisting */
    return a * b;
}
function hitungLuas(sisi) { /* > Ini masuk ke dalam heap, lakukan hoisting */
    return kalikan(sisi, sisi);
}
function cetakLuasKotak(sisi) { /* > Ini masuk ke dalam heap, lakukan hoisting */
    const luas = hitungLuas(sisi);
    console.log(luas)
}
cetakLuasKotak(5); /* Ini eksekusi, masuk ke dalam stack */


// Contoh Kasus
console.log('satu');
prosesYangSuperKompleks(); /* > ini adalah blocking */
console.log('tiga');

/* > Cara mengatasinya blocking tsb */
console.log('satu');
setTimeout(() => { /* > jadinya non-blocking. Ini menggunakan Asynchronous callback dan bisa terjadi karena ada sesuatu yang namanya Event Loop */
    // prosesYangSuperKompleks();
    console.log('dua');
}, 5000);
console.log('tiga');


// Contoh kasus lain
$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button');
    }, 2000);
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");