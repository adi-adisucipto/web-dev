// Blok kode yang bisa dipakai berulang-ulang
// Secara umum seperti build in method

// function declaration
function addTwo(num){
    console.log(num + 2);
}
// pemanggilan function
addTwo(8);


function addNumber(a, b) {
    console.log(a + b);
}
addNumber(1, 2);

function greet(){
    return "Hello world";
}
const message = greet();
console.log(message)

// Rest Parameter: menampung kelebihan sisa parameter
function substractNumber(a, b, ...nums){
    let sum = 0;
    for(const num of nums){
        sum += num;
    }
    console.log(sum);
}
substractNumber(5, 6, 7, 1, 4, 10, 12);


//      FUNCTION EXPRESSIONS: tidak memiliki nama
const a = function (c, d){
    return c * d;
}
console.log(a(2, 5));

// Arrow function
const b = (a, b) => a / b;
console.log(b(10, 5));


//      HOISTING: memanggil sebelum dibuat
console.log(multiplication(2, 5))

function multiplication(a, b){
    return a * b;
}

const checkOddEven = (num) => {
    let message = num % 2 === 0 ? (num + " bilangan genap") : (num + " bilangan ganjil");
    return message;
}
console.log(checkOddEven(3));


//      Nested Function
function greeting(name) {
    function message(){
        return `Hello ${name}`;
    }

    function greet() {
        return "Welcome";
    }

    return message() + ", " + greet();
}

console.log(greeting("Adi"));


// CLOSURE
function pertambahan(num) {
    return function() {
        return num + 2;
    }
}

const tambah = pertambahan(5);
console.log(tambah());