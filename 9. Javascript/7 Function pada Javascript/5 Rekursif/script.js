//Base case
// function cetakAngka(n) {
//     if( n === 0 ) return //* Base case = memberhentikan
//     console.log(n);
//     cetakAngka(n-1);
// }

// cetakAngka(10);


//Faktorial
function Faktorial(n) {
    if (n === 0) return 1;
    return n * Faktorial(n-1);
}

console.log(Faktorial(5));


//Implementasi
