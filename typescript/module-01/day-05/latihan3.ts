interface Result {
    secSmall: number
}

function secSmallest(arr: number[]): Result{
    let dupNumbers: number[] = [...new Set(numbers)]
    dupNumbers.sort((a, b) => a - b)

    let secSmall: number = dupNumbers[1]

    return {secSmall};
}

let numbers: number[] = [5, 3, 1, 7, 2, 6, 1]

console.log(secSmallest(numbers))