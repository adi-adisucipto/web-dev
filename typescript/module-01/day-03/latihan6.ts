let str: string = "hello world";
let newStr: string[] = str.split(" ");
let a: string

let capitalize: string[] = newStr.map((item: string) => {
    a = item.charAt(0).toUpperCase() + item.slice(1);
    return a
})

console.log(capitalize.join(" "))