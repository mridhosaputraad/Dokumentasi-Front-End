// DOMSelection
// document.getElementById() -> element
/*const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Muhammad Ridho';

// document.getElementByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p');
for( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari javascript';*/

// document,querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // const p = document.querySelector('p');
// // p.innerHTML = 'Ini diubah melalui javascript'; gunakan query selector all jika ingin mengubah semua element

// // document.querySelectorAll() -> nodeList
// const p = document.querySelectorAll('p');
// for( let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = 'lightblue';
// }
// p[2].style.backgroundColor = 'lightblue'; ||satu element

// Mengubah node root
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

/* atau */
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';

/* DOM Selection

-> merupakan tahap awal ketika ingin melakukan manipulasi atau penelusuran pada DOM

DOM Selection Method
-> getElementById() > Menghasilkan > element
-> getElementsTagName() > Menghasilkan > HTMLCollection
-> getElementsByClassName() > Menghasilkan > HTMLCollection
-> querySelector() > Menghasilkan > element
-> querySelectorAll() > Menghasilkan > nodeList



*/ 