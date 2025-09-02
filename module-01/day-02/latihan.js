let number = 3;

// Check odd or even number
if(number % 2 == 0) {
    console.log(number + " adalah bilangan genap");
} else {
    console.log(number + " adalah bilangan ganjil");
}

// Check prime number
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

// Sum: 5 -> 1 + 2 + 3 + 4 + 5
let sum = 0;
for(let i = 1; i <= number; i++) {
    sum += i;
}
console.log(sum);

// Find Factorial of a number
let times = 1;
for(let i = 1; i <= number; i++) {
    times *= i;
}
console.log(times);

// Fibonacci
let sukuN;
let sukuN_1 = 1;
let sukuN_2 = 0;
for(let i = 0; i < number - 1; i++) {
    sukuN = sukuN_1 + sukuN_2;
    sukuN_2 = sukuN_1;
    sukuN_1 = sukuN;
    console.log(sukuN);
}