//                          PAGE 1

console.log("~~~~~~~ Find lowest, higest, and average in array ~~~~~~~");
let arr = [12, 5, 23, 18, 45, 32, 4];

function lowHigAvg([arr]){
    let higest;
    let lowest;
    let sum = 0;
    let container = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j <= i; j++) {
            if(arr[j] > arr[j + 1]){
                container = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = container;
            }
        }
        sum += arr[i];
    }
    higest = arr[arr.length - 1];
    lowest = arr[0]
    let avg = (sum / arr.length).toFixed(3)
    return [higest, lowest, avg]
}

console.log("Higest: " + lowHigAvg([arr])[0]);
console.log("Lowest: " + lowHigAvg([arr])[1]);
console.log("Average: " + lowHigAvg([arr])[2]);
console.log("~~~~~~~ Selesai ~~~~~~~");
// Pakai Build In Method
console.log("~~~~ Use Build Method ~~~~");
function higLowAvg([arr]){
    let higest;
    let lowest;
    arr.sort((a, b) => {
        return a - b;
    })
    higest = arr[arr.length - 1];
    lowest = arr[0];
    const sum = arr.reduce((a, b) => {
        return a + b;
    }, 0);
    return [higest, lowest, sum / arr.length];
}
console.log("Higest: " + lowHigAvg([arr])[0]);
console.log("Lowest: " + lowHigAvg([arr])[1]);
console.log("Average: " + lowHigAvg([arr])[2]);
console.log("~~~~~~~ Selesai ~~~~~~~");
console.log("");



console.log("~~~~ Concatenanting the array of words seperated by commas and the last by the 'and' ~~~~");
let arrOfStr = ["apple", "banana", "cherry", "date"];

function concatArr([array]){
    array[array.length - 1] = "and " + array[array.length - 1];
    return console.log(array.join(", "));
}

concatArr([arrOfStr]);
console.log("~~~~~~~ Selesai ~~~~~~~");
console.log("");



console.log("~~~~ Second smallest of array number ~~~~")
function secSmall([arr]) {
    let a = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j <= i; j++){
            if(arr[j] > arr[j + 1]){
                a = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = a;
            }
        }
    }
    return arr[1];
}

let number = [5, 3, 1, 7, 2, 6];
console.log(`Second smallest of array: ${secSmall([number])}`)
console.log("~~~~~~~ Selesai ~~~~~~~");
// Use Build in method
console.log("~~~~ Use Build in method ~~~~");
function smallSec([arr]){
    arr.sort((a, b) => {return a - b});
    return arr;
}
console.log(`Second smallest of array: ${secSmall([number])}`)
console.log("");



console.log("~~~~ Calculate each element in same position from two arrays of integer ~~~~");
function sum2Array([arr1], [arr2]){
    let sum = [];
    for(let i = 0; i < arr1.length; i++){
        sum.push(arr1[i] + arr2[i]);
    }
    return sum;
}

let num1 = [1, 2, 3];
let num2 = [3, 2, 1];
console.log(sum2Array([num1], [num2]));
console.log("~~~~~~~ Selesai ~~~~~~~");
console.log("");



console.log("~~~~ Adds an element to end of an array ~~~~");
function addArray(c){
    let a = [1, 2, 3, 4];
    let b = true
    for(let i = 0; i < a.length; i++){
        if(a[i] == c){
            b = false;
            break;
        }
    }

    if(b){
        a.push(c);
    }

    return a;
}

console.log(addArray(5));
console.log("~~~~~~~ Selesai ~~~~~~~");
console.log("");




//                              PAGE 2
console.log("~~~~ Sum of all the number in mixed data types array ~~~~");
const mixedArray = ["3", 1, "string", null, false, undefined, 2];
function addNumber([mixedArray]){
    let count = 0;
    mixedArray.map((item) => {
        if(typeof item == "number"){
            count += item
        }
    });
    return count;
}
console.log(addNumber([mixedArray]));
console.log("~~~~~~~ Selesai ~~~~~~~");
console.log("");


console.log("~~~~ Maximum Size ~~~~");
const maxSize = 5;
function max(maxSize, ...a){
    let countainer = [];
    for(let i = 0; i < maxSize; i++){
        countainer.push(a[i]);
    }
    return console.log(countainer)
}
max(maxSize, 5, 10, 24, 3, 6, 7, 8 );
console.log("~~~~~~~ Selesai ~~~~~~~");
console.log("");


console.log("~~~~ Combine 2 array ~~~~")
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
function arrayCombine([array1], [array2]){
    for(let i = 0; i < array2.length; i++){
        array1.push(array2[i])
    }
    return array1
}
console.log(arrayCombine([array1], [array2]));
console.log("~~~~~~~ Selesai ~~~~~~~");
console.log("");


console.log("~~~~ Find duplicate values in an array ~~~~");
let aray = [1, 2, 2, 2, 3, 3, 4, 5, 5];
function dupValue([aray]){
    let p = [];
    aray.map(item => {
        let hitung = 0;
        for(let i = 0; i < aray.length; i++){
            if(item == aray[i]){
                hitung++;
            }
        }

        if(hitung > 1 && !p.includes(item)){
            p.push(item);
        }
    });
    return p;
}
console.log(dupValue([aray]));
console.log("~~~~~~~ Selesai ~~~~~~~");
console.log("");


console.log("~~~~ Find the difference in 2 given array ~~~~");
let arrA = [1, 2, 3, 4, 5];
let arrB = [3, 4, 5, 6, 7];
function diffArray([arrA], [arrB]){
    let dupArr = [];
    let combineArray = arrA.concat(arrB);
    let newArr = [];
    arrA.map(item => {
        for(let i = 0; i < arrB.length; i++){
            if(item == arrB[i]){
                dupArr.push(arrB[i]);
            }
        }
    })

    combineArray.map(item => {
        let counter = 0;
        for(let i = 0; i < dupArr.length; i++){
            if(item == dupArr[i]){
                counter++
            }
        }
        if(counter == 0){
            newArr.push(item)
        }
    })

    return newArr;
}
console.log(diffArray([arrA], [arrB]));
console.log("~~~~~~~ Selesai ~~~~~~~");
console.log("");


//                              PAGE 3
console.log("~~~ Function will return data type primitive only ~~~~");
function primitiveOnly(arr){
    const result = []
    for(const val of arr){
        if(typeof val != "object" || val === null){
            result.push(val);
        }
    }
    return result;
}

console.log(
    primitiveOnly([1, {}, [], true, "halo", undefined, null])
);
console.log("~~~~~~~ Selesai ~~~~~~~");
console.log("");



console.log("~~~ Sum element array of number which duplicate value ~~~");
// example: [10, 20, 40, 10, 50, 30, 10, 60, 10];
const p = [10, 20, 40, 10, 50, 30, 10, 60, 10];
function sumDupArr(arr){
    let sum = 0;
    p.map((item) => {
        let counter = 0;
        for(let i = 0; i < arr.length; i++) {
            if(item === p[i]){
                counter++
            }
        }
        if(counter > 1){
            sum += item;
        }
    })
    return sum
}
console.log(sumDupArr(p));
console.log("~~~~ Selesai ~~~~");
console.log("");


console.log("~~~~ Rock, Paper, Scissor Game ~~~~");
const x = "paper"
function paperRockScissor(x){
    const rand = Math.floor(Math.random() * 3);
    const z = ["ROCK", "PAPER", "SCISSOR"];
    let comp = z[rand];
    const me = x.toUpperCase();
    let message = `Pemain = ${me}, Komputer = ${comp}, kamu `;
    if(comp == me){
        message += "Seri";
    } else if(
        me == "ROCK" && comp == z[2] || 
        me == "PAPER" && comp == z[0] ||
        me == "SCISSOR" && comp == z[1]
    ){
        message += "Menang";
    } else {
        message += "Kalah";
    }
    return message;
}
console.log(paperRockScissor(x));
console.log("~~~~ Selesai ~~~~");
console.log("");