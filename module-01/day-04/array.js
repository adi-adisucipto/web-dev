//          TIPE DATA NON PRIMITIVE
// ARRAY
const arrOfNum = [1, 2, 4, 5];
console.log(arrOfNum);

const arrOfStr = ["hello", "string"];
arrOfStr.push("Mangga"); // memasukan elemen ke akhir
arrOfStr.unshift("Anggur"); // memasukan elemen ke awal
arrOfStr.shift(); // menghilangkan elemen pertama
arrOfStr.pop(); // menghapus elemen terakhir pada array
console.log(arrOfStr);
console.log("Panjang array: " + arrOfStr.length);

const arr = [1, "hello", true, null]; // tidak bagus secara desain
console.log(arr);

// Looping pada Array

for(let i = 0; i < arrOfStr.length; i++){
    console.log(arrOfStr[i].toUpperCase());
}

for(const value of arrOfStr){
    console.log(value);
}