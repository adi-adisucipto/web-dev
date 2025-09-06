console.log("~~~~ Multiplication table of a given integer. ~~~~")
for(let i = 1; i <= 10; i++) {
    console.log(`9 x ${i} = ${i * 9}`);
}
console.log("~~~~ Selesai ~~~~");
console.log("");


console.log("~~~~ Palindrome ~~~~")
let kata = "radaR";
let a = kata.toLowerCase().split("");
let b = [];
let c = 0;
// Proses pembalikan kata
for(let i = kata.length - 1; i >= 0; i--) {
    b[c] = a[i];
    c++;
}
// Proses mengetahui palindrome
if(b.join("") == kata.toLowerCase()) {
    console.log(kata + " adalah palindrome ✅");
} else {
    console.log(kata + " bukan paliandrome ❌");
}
console.log("~~~~ Selesai ~~~~");

console.log("~~~~ Using build in method ~~~~");
let z = a.reverse();
if(z.join("") == kata.toLowerCase()) {
    console.log(kata + " adalah palindrome ✅");
} else {
    console.log(kata + " bukan paliandrome ❌");
}
console.log("~~~~ Selesai ~~~~");
console.log("");


console.log("~~~~ Convert cm to km ~~~~");
let cm = 30;
let km = cm / 100000
console.log(`${cm} cm sama dengan ${km} km`);
console.log("~~~~ Selesai ~~~~");
console.log("");


console.log("Format number as currency (IDR)");
let duit = 100000000;
let p = String(duit).split("");
let q = 1;
let r = [];
let s = []
for(let i = String(duit).length - 1; i >= 0; i--){
    r.push(p[i]);
    if(q % 3 == 0 && i != 0){
        r.push(".");
    }
    q++;
}

let u = 0
for(let i = r.length - 1; i >= 0; i--){
    s[u] = r[i];
    u++
}
console.log(`Rp.${s.join("")},00`);
console.log("~~~~ Selesai ~~~~");
console.log("");



console.log("~~~~ Remove the first occurrence of a given “search string” from a string ~~~~")
let searchString = "ell";
let mainString = "Hello world";

const hasilString = mainString.indexOf(searchString);
if(hasilString == -1) {
    console.log("Hasil tidak ditemukan");
} else {
    let kata1 = mainString.slice(0, hasilString);
    let kata2 = mainString.slice(searchString.length + hasilString, mainString.length)
    console.log(kata1 + kata2)
}
console.log("~~~~ Selesai ~~~~");
console.log("");


console.log("~~~~ Capitalize the first letter of each word in a string ~~~~")
let capitalize = "hello world";
let words = capitalize.split(" ");
let firstWord = [];
let lastWord = [];
let fullWord = [];
for(let i = 0; i < words.length; i++) {
    firstWord[i] = words[i].slice(0, 1).toUpperCase();
    lastWord[i] = words[i].slice(1, words[i].length).toLowerCase();
    fullWord[i] = firstWord[i] + lastWord[i];
}
console.log(fullWord.join(" "));
console.log("~~~~ Selesai ~~~~");
console.log("");


console.log("~~~~ Swap the case of each character from string ~~~~")
let wordCheck = "The QuiCk BrOwN Fox";
let wordSplit = wordCheck.split("");
let hasil = ""
for(let i = 0; i < wordCheck.length; i++) {
    if(wordSplit[i] === wordSplit[i].toUpperCase()){
        hasil = hasil + wordSplit[i].toLowerCase();
    } else {
        hasil = hasil + wordSplit[i].toUpperCase();
    }
}
console.log(hasil);
console.log("~~~~ Selesai ~~~~");
console.log("");


console.log("~~~~ Find the largest of two given integers ~~~~");
let num1 = 42;
let num2 = 66;
if(num1 == num2) {
    console.log("Same integer");
} else if(num1 < num2) {
    console.log("Max: " + num2);
}  else {
    console.log("Max: " + num1);
}
console.log("~~~~ Selesai ~~~~");
console.log("");


console.log("~~~~ Sort three numbers ~~~~");
let number1 = 1;
let number2 = 3;
let number3 = 2;
let h;

if(number1 < number2){
    h = number2;
    number2 = number1;
    number1 = h;
    if(number1 < number3) {
        h = number3;
        number3 = number2;
        number2 = number1;
        number1 = h;
    } else if(number2 < number3){
        h = number3;
        number3 = number2;
        number2 = h;
    }
} else if(number1 < number3) {
    h = number3;
    number3 = number1;
    number1 = h;
}

console.log(number1, number2, number3);
console.log("~~~~ Selesai ~~~~");
console.log("");


console.log("~~~~ Shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type. ~~~~");
const dataType = "hello";
if(typeof dataType == "string"){
    console.log(`${typeof dataType} = 1`);
} else if(typeof dataType == "number") {
    console.log(`${typeof dataType} = 2`);
} else {
    console.log(`${typeof dataType} = 3`)
}
console.log("~~~~ Selesai ~~~~");
console.log("");


console.log("~~~~ Change every letter a into * from a string of input ~~~~")
let sentence = "An apple a day keeps the doctor away";
let letter = "e";
let hasilSentence = "";
let sentenceSplit = sentence.split("");
for(let i = 0; i < sentenceSplit.length; i++){
    if(sentenceSplit[i].toLowerCase() === letter.toLowerCase()){
        hasilSentence = hasilSentence + "*";
    } else {
        hasilSentence = hasilSentence + sentenceSplit[i];
    }
}
console.log(hasilSentence);
console.log("~~~~ Selesai ~~~~");
console.log("");