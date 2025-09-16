const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
const newArr = [...arr.sort((a, b) => a - b)]
let dupArr: number[] = []

for(let i: number = 0; i < newArr.length; i++){
    if(newArr[i] === newArr[i + 1] && !dupArr.includes(newArr[i])){
        dupArr.push(newArr[i]);
    }
}

console.log(dupArr)