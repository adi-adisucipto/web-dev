function faktorial(n: number): number {
    if(n === 0 || n === 1){
        return 1;
    } else {
        return n * faktorial(n - 1);
    }
}

console.log(faktorial(5))