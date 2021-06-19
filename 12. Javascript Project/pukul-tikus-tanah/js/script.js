const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

// Langkah3: Menghindari kemuculan sama
let tanahSebelumnya;

let selesai;
let skor;

// Langkah2: Membangkitkan bilangan random
function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if(tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;

  return tRandom;
}

// Langkah 5: Mengantur waktu random
function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Langkah 1: Munculkan tikus
function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(300, 1000);
  tRandom.classList.add('muncul');

  // waktu tikus menghilang
  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if(!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}

// Langkah 6: Memulai permainan
function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;

  munculkanTikus();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

// Langkah 7: Memukul tikus
function pukul() {
  skor++;
  this.parentNode.className = 'tanah';
  pop.play();
  papanSkor.textContent = skor;

}

// Langkah 8: Ketika di pukul tikus masuk ke tanah
tikus.forEach(t => {
  t.addEventListener('click', pukul);
});