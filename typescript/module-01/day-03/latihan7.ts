let str: string = 'The QuiCk BrOwN Fox';

let newStr: string = str.split("").map((item: string) => {
    if(item.toUpperCase() === item){
        return item.toLowerCase()
    } else {
        return item.toUpperCase()
    }
}).join("");

console.log(newStr)