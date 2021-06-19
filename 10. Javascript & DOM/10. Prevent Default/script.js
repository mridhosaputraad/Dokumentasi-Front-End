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
        e.preventDefault();
    });
});




/*

Prevent Default

-> untuk menghentikan aksi default yang dilakukan oleh sebuah elemen

*/