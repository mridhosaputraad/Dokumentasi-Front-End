// DOMSelection
// document.getElementById() -> element
const judul = document.getElementById('judul');
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
p1.innerHTML = 'Ini diubah dari javascript';

/* DOM Selection

-> merupakan tahap awal ketika ingin melakukan manipulasi atau penelusuran pada DOM

DOM Selection Method
-> getElementById() > Menghasilkan > element
-> getElementsTagName() > Menghasilkan > HTMLCollection
-> getElementsByClassName() > Menghasilkan > HTMLCollection
-> querySelector() > Menghasilkan > element
-> querySelectorAll() > Menghasilkan > nodeList



*/ 