interface ConcatResult {
    result: string;
}

function concatArr(arr: string[]): ConcatResult {
    const lastElement: string = arr[arr.length - 1];
    let arrDup: string[] = [...arr];
    
    arrDup[arr.length - 1] = `and ${arrDup[arr.length - 1]}`

    const result: string = arrDup.join(", ")
    return {result}
}

let arr: string[] = ["apple", "banana", "cherry", "date"];
console.log(concatArr(arr))