/*// Event Handling
// Langkah 1; Menangkap elemen
const close = document.querySelector('.close');
const card = document.querySelector('.card');
// Langkah 2: Melakukan Event
close.addEventListener('click', function() {
    card.style.display = 'none';
});*/

// DOM Traversal
// const close = document.querySelectorAll('.close');

// Looping
/*for( let i = 0; i < close.length; i++ ) {
    close[i].addEventListener('click', function(e) {
        // close[i].parentElement.style.display = 'none';
        // Perbaikan gunakan objek e
        e.target.parentElement.style.display = 'none';
    });
}*/

/*// Cara lebih efektif
close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    });
});

const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function(e) {
        alert('ok');
    });
});*/

// Metode Efektif
const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if( e.target.className == 'close' ) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});



/*

Event Bubbling

-> ketika mempunyai sebuah event pada pembungkus elemen sampai tidak ada pembungkus yang membungkusi elemen lagi

*/