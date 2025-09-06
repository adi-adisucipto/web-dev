let number = 15;

console.log("~~~~ Check odd or even number ~~~~");
if(number % 2 == 0) {
    console.log(number + " adalah bilangan genap");
} else {
    console.log(number + " adalah bilangan ganjil");
}
console.log("~~~~ Selesai ~~~~");
console.log("");

console.log("~~~~ Check prime number ~~~~");
let faktor = 0;
for(let i = 2; i < number; i++){
    if(number % i == 0) {
        faktor++;
    }
}
if(faktor > 1 || number == 1) {
    console.log(number + " bukan bilangan prima ❌");
} else {
    console.log(number + " adalah bilangan prima ✅")
}
console.log("~~~~ Selesai ~~~~");
console.log("");

console.log("~~~~ Find the sum of the numbers 1 to N ~~~~")
let sum = 0;
for(let i = 1; i <= number; i++) {
    sum += i;
}
console.log(sum);
console.log("~~~~ Selesai ~~~~");
console.log("");

console.log("~~~~ Find Factorial of a number ~~~~");
let times = 1;
for(let i = 1; i <= number; i++) {
    times *= i;
}
console.log(times);
console.log("~~~~ Selesai ~~~~");
console.log("");

console.log("~~~~ Fibonacci ~~~~");
let sukuN;
let sukuN_1 = 1;
let sukuN_2 = 0;
for(let i = 0; i < number - 1; i++) {
    sukuN = sukuN_1 + sukuN_2;
    sukuN_2 = sukuN_1;
    sukuN_1 = sukuN;
    console.log(sukuN);
}
console.log("~~~~ Selesai ~~~~");
console.log("");