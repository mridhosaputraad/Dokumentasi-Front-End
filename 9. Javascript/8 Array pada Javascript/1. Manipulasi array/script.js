// Manipulasi Array

// 1. Menambah isi array
var arr = ["a", 1, true];
console.log(arr); //[1]

var arr = [];
arr[0] = "Muhammad";
arr[1] = "Ridho";
arr[2] = "SAputra";
console.log(arr);

// 2. Menghapus isi array
var arr =["Muhammad", "Ridho", "Saputra"];
arr[1] = undefined;
console.log(arr);

// 3. Menampilkan isi array
var arr =["Muhammad", "Ridho", "Saputra", "Arif"];
for(var i = 0; i < arr.length; i++) {
    console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
}


// Method pada array
// 1. join
var arr =["Muhammad", "Ridho", "Saputra"];
console.log(arr.join(' - '));

// 2. push & pop
var arr =["Muhammad", "Ridho", "Saputra"];
arr.push('Arif', 'Darmawan');
// arr.pop();
// arr.pop();
console.log(arr.join(' - '));

// 3. unshift & shift
var arr =["Ridho", "Saputra"];
arr.unshift('Muhammad');
// arr.shift();
console.log(arr.join(' - '));