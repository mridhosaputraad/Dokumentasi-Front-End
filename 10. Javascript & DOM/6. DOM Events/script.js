/*

Events

-> Events pada javascript mempresentasikan sebuah kejadian yang terjadi di dalam DOM.
-> kejadian tersebut bisa dilakukan oleh user ketika menekan/mengklik(mouse event, keyboard event, dll)
-> ataupun dilakukan secara otomatis oleh API misalnya (animasi selesai dijalankan, halaman selesai di load, dll)

Cara 'mendengarkan' event
-> Event Handler
    > Inline HTML attribute
    > Element method
-> addEventListener()

Perbedaannya ketika memberi lebih dari satu perubahan pada sebuah event jika menggunakan event handler maka perubahan yang terakhir dilakukan akan menimpa perubahan sebelumnya. Sedangkan menggunakan addEventListener akan menmbah perubahannya.

Daftar Event
-> Mouse Event --- ketika mousenya diklik, digeser pointer, double click dsb
    > click
    > dblclick
    > mouseover
    > mouseenter
    > mouseup
    > wheel
    > ...
-> Keyboard Event  --- ketika keyboardnya ditekan, dilepas dsb
    > keydown
    > keypress
    > keyup
-> Resources Event ---ketika halamannya di load jadi bisa mengetahui apakah koneksi internetnya lambat atau lambat
-> Focus Event --- penting ketika membuat form. ketika sebuah teks view/inputan itu diklik akan masuk ke fokus
-> View Event
    > resize
    > scroll
-> Form Event
    > reset
    > submit
-> CSS Animation & Transition Event
-> Drag & Drop Event
-> dll.

*/

// Event Handler
// Inline HTML attribute
// const p3 = document.querySelector('.p3');
// function ubahWarnap3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// Elemen Method
// const p2 = document.querySelector('.p2');
// function ubahWarna() {
//     p2.style.backgroundColor = 'lightblue';
// }
// p2.onclick = ubahWarna;

// const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function() {
//     p3.style.color = 'red';
// }


// addEventListener()
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('Item Baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
//     alert('ok');
// });

// const p3 = document.querySelector('.p3');
// p3.addEventListener('click', function() {
//     p3.style.backgroundColor = 'lightblue';
// });
// p3.addEventListener('click', function() {
//     p3.style.color = 'red';
// });

const p3 = document.querySelector('.p3');
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'white';
});