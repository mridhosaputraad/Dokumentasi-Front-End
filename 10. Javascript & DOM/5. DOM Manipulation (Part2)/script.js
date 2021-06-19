// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);


// parentNode.removeChild()
const Link = document.getElementsByTagName('a')[0];

sectionA.removeChild(Link);


// parentNode.ReplaceChild()
// menangkap parent/elemen
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
// membuat elemen baru
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');
// Masukan judul ke h2
h2Baru.appendChild(teksH2Baru);

// Melakukan Replace
sectionB.replaceChild(h2Baru, p4);


pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';

/*

Manipulasi Node

-> memungkinkan untuk menambah node baru pada DOM
-> method
    > document.createElement()
    > document.createTextNode()
    > node.appendChild()
    > node.insertBefore()
    > parentNode.removeChild()
    > parentNode.ReplaceChild()
    > ...
-> Method Baru
    > parentNode.append()
    > parentNode.prepend()
    > childNote.before()
    > childNote.after()
    > childNote.remove()
    > childNote.replaceWith()
    > ...


*/