/*// Event Handling
// Langkah 1; Menangkap elemen
const close = document.querySelector('.close');
const card = document.querySelector('.card');
// Langkah 2: Melakukan Event
close.addEventListener('click', function() {
    card.style.display = 'none';
});*/

// DOM Traversal
const close = document.querySelectorAll('.close');

// Looping
/*for( let i = 0; i < close.length; i++ ) {
    close[i].addEventListener('click', function(e) {
        // close[i].parentElement.style.display = 'none';
        // Perbaikan gunakan objek e
        e.target.parentElement.style.display = 'none';
    });
}*/

// Cara lebih efektif
close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    });
});

const nama = document.querySelector('.nama');
console.log(nama.previousElementSibling);


/*

DOM Traversal

-> menelusuri elemen berdasarkan elemen yang di seleksi di awal
-> Method
    > parentsNode -mengembalikan- node
    > parentElement -mengembalikan- element
    > nextSibling -mengembalikan- node
    > nextElementSibling -mengembalikan- element
    > previousSibling -mengembalikan- node
    > previousElementSibling -mengembalikan- element

*/