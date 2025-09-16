// Write a function to get the lowest, highest and average value in the array (with and without sort function).

interface Result {
    low: number;
    high: number;
    average: number;
}

function lowHighAvg(arr: number[]): Result {
    arr.sort((a: number, b: number) => a - b);
    let sum: number = arr.reduce((sum, current) => sum + current, 0)
    return {
        low: arr[0],
        high: arr[arr.length - 1],
        average: parseFloat((sum / arr.length).toFixed(3))
    }
}

let arr: number[] = [12, 5, 23, 18, 4, 45, 32];
console.log(lowHighAvg(arr))