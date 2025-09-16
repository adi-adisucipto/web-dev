interface Sum{
    sum: number
}

function sumData(arr: (string | number | null | boolean | undefined)[]): Sum {
    let sum: number = 0;

    arr.map((item) => {
        if(typeof item === 'number'){
            sum += item;
        }
    })

    return {sum}
}

const arr: (string | number | null | boolean | undefined)[] = ["3", 1, "string", null, false, undefined, 2]

console.log(sumData(arr))