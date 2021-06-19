// Kasus Pertama: Mengubah warna secara sederhana
const tUbahWarna = document.getElementById('tUbahWarna');
// method event handler
tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue'; -> cara 1
    // document.body.setAttribute('class', 'biru-muda') -> cara 2
    document.body.classList.toggle('biru-muda'); // Cara 3
}

// Kasus Kedua: Membuat tombol baru tapi merubah warna secara ranndom
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

// Kasus Ketiga: (Menggunanakan HTML5) >Langkah 2
// Cara efektif > tambahkan section
const sectionA = document.querySelector('section#a');

const sMerah = sectionA.querySelector('input[name=sMerah]');
const sHijau = sectionA.querySelector('input[name=sHijau]');
const sBiru = sectionA.querySelector('input[name=sBiru]');

// sMerah.addEventListener('input', function() {
//     // Menangkap nilai dari slidernya >tambahkan nilai value min dan max di input slidernya
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
    
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// sHijau.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
    
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// sBiru.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
    
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// cara efektif
sectionA.addEventListener('input', function() {
    // Menangkap nilai dari slidernya >tambahkan nilai value min dan max di input slidernya
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

// Kasus Keempat: Merubah warna dengan kursor
// Bekerja dengan posisi mouse
// Langkah1 >menangkap body
document.body.addEventListener('mousemove', function(event) {
    // posisi mouse
    // console.log(event.clientX);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});