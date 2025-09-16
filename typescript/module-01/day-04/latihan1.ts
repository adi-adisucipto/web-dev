function triangle(height: number) {
    let hasil: string = ""
    let a: number = 1
    for(let i: number = 1; i <= height; i++){
        for(let j: number = 1; j <= i; j++){
            hasil += a < 10 ? `0${a} ` : `${a} `
            a++
        }
        hasil += `\n `
    }
    return hasil
}

console.log(triangle(4));