interface Result {
    result: number[]
}

function sumFunc(arr1: number[], arr2: number[]): Result{
    let result: number[] = [];
    if(arr1.length != arr2.length){
        console.log("Array harus memiliki panjang yang sama");
        return {result: []};
    }
    for(let i: number = 0; i < arr1.length; i++){
        result.push(arr1[i] + arr2[i])
    }
    return {result}
}

let arr1: number[] = [1, 2, 3];
let arr2: number[] = [3, 2, 1];

console.log(sumFunc(arr1, arr2))