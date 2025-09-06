console.log("~~~~ Create a triangle pattern according to the height we provide ~~~~")
let height = 4;
function triangle(n){
    let a = 1;
    let hasil = "";
    if(typeof n != "number"){
        hasil = "Tinggi harus angka";
    } else{
        for(let i = 1; i <= height; i++){
            for(let j = 1; j <= i; j++){
                hasil += a < 10 ? `0${a} ` : `${a} `;
                a++
            }
            hasil += "\n"
        }
    }
    return hasil;
}
console.log(triangle(height));
console.log("~~~~ Selesai ~~~~");
console.log("");


console.log("~~~~ Fizz Buzz Game ~~~~");
const a = 15;
function FizzBuzz(a){
    let res = "";
    if(typeof a != "number"){
        res = "Input harus angka";
    } else {
        for(let i = 1; i <= a; i++){
            if(i % 3 === 0 && i % 5 === 0){
                res += "FizzBuzz ";
            } else if(i % 3 === 0){
                res += "Fizz "
            } else if(i % 5 === 0){
                res += "Buzz "
            } else {
                res += `${i} `
            }
        }
    }
    return res;
}
console.log(FizzBuzz(a));
console.log("~~~~ Selesai ~~~~");
console.log("");



console.log("~~~~ Body Mass Index ~~~~");
const w = 65;
const h = 1.65;
function bmi(w, h) {
    let bmi;
    let message = "";
    if(typeof w != "number" || typeof h!= "number"){
        console.log("Input harus angka");
    } else {
        bmi = w / (h ** 2);
        message = `${bmi.toFixed(3)} = `
        
        if(bmi < 18.5){
            message += "Less weight";
        } else if(bmi > 18.5 && bmi < 24.9){
            message += "Ideal";
        } else if(bmi > 25.0 && bmi < 29.9){
            message += "Overweight";
        } else if(bmi > 30.0 && bmi < 39.9){
            message += "Very overweight";
        } else {
            message += "Obesity";
        }
    }
    return message
}
console.log(bmi(w, h));
console.log("~~~~ Selesai ~~~~");
console.log("");


console.log("~~~~ Remove all odd numbers in an array ~~~~")
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenArr(array){
    let newArr = []
    array.map(item => {
        if(item % 2 === 0){
            newArr.push(item);
        }
    })
    return newArr;
}
console.log(evenArr(array));
console.log("~~~~ Selesai ~~~~");
console.log("");


console.log("~~~ Split String")
const str = "Hello World"
function splitArr(str) {
    let splitArr;
    if(typeof str != "string"){
        splitArr = "Data harus string";
    } else {
        splitArr = str.split(" ");
    }
    return splitArr;
}
console.log(splitArr(str));
console.log("~~~~ Selesai ~~~~");
console.log("");