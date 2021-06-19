//Block Scope
// var i = 2

// if( i % 2 == 0 ) {
//     var genap = true;
// }

// if( genap ) {
//     console.log('genap!');
// }


//Global scope / window scope
// var a = 1;

// function tes() {
//     var b = 2;
//     console.log(a);
// }

// tes();
// console.log(b); //Dimasukkan ke dalam scope

//Contoh kasus
var a = 1;          //Global

function tes(a) {
    console.log(a); //Lokal
}

tes(a);             //Luaran
console.log(a)  