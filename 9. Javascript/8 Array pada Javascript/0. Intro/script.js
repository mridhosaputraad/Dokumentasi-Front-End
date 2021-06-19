// Syntax
var hari = ['senin','selasa','rabu'];
var mhs = ['muhammad','ridho','saputra'];
var angka = [10,123,2004];
var myArr = ['teks',2,false];
var myFunc = function() {
    alert('Hello World!');
}
var myArr2 = ['teks',2,false,myFunc];
var myArr3 = ['teks',2,false,myFunc,[4,5,6]];


// key and Value Pair
// Membuat array
var binatang = ['kucing','kelinci','monyet','panda','koala','sapi'];
    // atau
var binatang = [];
binatang = ['kucing','kelinci','monyet','panda','koala','sapi'];
// Mengakses elemen pada array
var binatang = [];
binatang = ['kucing','kelinci','monyet','panda','koala','sapi'];

console.log(binatang[4]);


// Array bertipe Object
var binatang = [];
binatang = ['kucing','kelinci','monyet','panda','koala','sapi'];

console.log(typeof(binatang));
// Memiliki method length
var binatang = [];
binatang = ['kucing','kelinci','monyet','panda','koala','sapi'];

console.log(binatang.length);


// Elemen pada array boleh beda tipe
// array multidimensi/array bersarang
var myArr3 = ['teks',2,false,myFunc,[4,5,6]];

console.log(myArr3[4][1]);


// javascript EA6
// const ages = [33, 12, 15];

// cara satu
// const canDrink = ages.filter(function(age) {
//     if(age>=21) {
//         return true;
//     }
// });
// console.log(canDrink[33]); 

//cara dua
// const canDrink = ages.filter(age => age >= 21); console.log(canDrink[33]); 


// Javascript EA5
ages.filter(function(age) {
    return age >=21;
});

//atau
ages.filter(function(age) {
    if(age >= 21) {
        return true;
    }
});