// element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Muhammad Ridho</em>'

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>paragraf1</p></div>';


// element.style.<property>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';


// element.setAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'muhammad');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'Link');
// a.getAttribute('href');
// // judul.getAttribute('id');
// a.removeAttribute('href');

// const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label'); /* gunakan method class list*/


// element.classList
const p2 = document.querySelector('.p2');
p2.classList.add('satu', 'dua', 'tiga');
// p2.classList.remove('label');
// p2.classList.toggle('label');
    // document.body.style.backgroundColor = 'lightblue' menggunakan toogle
    // document.body.classList.toggle('biru-muda');
p2.classList.item(2);
p2.classList.contains('dua');
p2.classList.replace('tiga', 'empat');

/*

Manipulasi Elemen

-> elemen yang sudah diseleksi akan dimanipulasi
-> Method :
    > element.innerHTML ---- untuk merubah isi dari sebuah tag yang sudah diseleksi
    > element.style.<property> ---- untuk merubah css/style dari sebuah elemen yang sudah diseleksi
    > element.setAttribute() ----  untuk memanipulasi attribute pada sebuah elemen yang sudah diseleksi
        Method:
        - element.getAttribute()
        - element.setAttribute()
        - element.removeAttribute()
    > element.classList ---- untuk menambahkan kelas
        Method:
        - element.classList.add()
        - element.classList.remove()
        - element.classList.toggle()
        - element.classList.items()
        - element.classList.contains()
        - element.classList.replace()
    > ...

*/