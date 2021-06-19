// Langkah 1: Membuat logika komputer
function getPilihanComputer() {
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

// Langkah 2: Membuat rules
function getHasil(comp, player) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG';
}

// Membuat area comp interaktif

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if( new Date().getTime() - waktuMulai > 1000 ) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if( i == gambar.length ) i = 0;
    }, 100)
}

// Cara Efektif

const pilihan = document.querySelectorAll('li img');
let win = 1;
let lose = 1;
// Looping
pilihan.forEach(function(pil) {
    // Event
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
    
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

            putar();

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer');
                imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
            const info = document.querySelector('.info');
                info.innerHTML = hasil;
            // Membuat skoring
            const skorComputer = document.querySelector('.skorComputer');
            const skorPlayer = document.querySelector('.skorPlayer')
        
                if(hasil == 'MENANG!') {
                    skorPlayer.innerHTML = win++;
                }
                if(hasil == 'KALAH!') {
                    skorComputer.innerHTML = lose++;
                }
        }, 1000);
    });
});

// Membuat skoring

let sPlayer = 0;
let sComp = 0;
function getScore(hasil) {
    if (hasil == 'SERI') sPlayer = sPlayer, sComp = sComp;
    if (hasil == 'MENANG') sPlayer = sPlayer + 1;
    if (hasil == 'KALAH') sComp = sComp + 1;
    const scoreC = document.querySelector('.white.C').innerHTML = sComp;
    const scoreP = document.querySelector('.white.P').innerHTML = sPlayer;
}

/*// Langkah 3: Menjalankan event
// Gajah
const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pGajah.className;
    // Langkah 4: Memasukkan Rules
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    // Langkah 5: Mengganti gambar area comp > Manipulasi DOM
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
    // Langkah 6: Memasukan hasil ke area info
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

// Orang
const pOrang = document.querySelector('.orang');
pOrang.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pOrang.className;
    
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

// Semut
const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pSemut.className;
    
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
}); */

