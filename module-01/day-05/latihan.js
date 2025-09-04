console.log("####### Find lowest, higest, and average in array #######");

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

let arr = [12, 5, 23, 18, 45, 32, 4];

console.log("Higest: " + lowHigAvg([arr])[0]);
console.log("Lowest: " + lowHigAvg([arr])[1]);
console.log("Average: " + lowHigAvg([arr])[2]);
console.log("################# Selesai ###################");

console.log("");





console.log("#### Concatenanting the array of words seperated by commas and the last by the 'and' ####");
let arrOfStr = ["apple", "banana", "cherry", "date"];

function concatArr([array]){
    array[array.length - 1] = "and " + array[array.length - 1];
    return console.log(arrOfStr.join(", "));
}

concatArr([arrOfStr]);
console.log("################# Selesai ###################");

console.log("");





console.log("#### Second smallest of array number ####")

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


console.log("################# Selesai ###################");

console.log("");



console.log("### Calculate each element in same position from two arrays of integer ###");

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

console.log("################# Selesai ###################");

console.log("");






