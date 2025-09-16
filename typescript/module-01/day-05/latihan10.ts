const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [3, 4, 5, 6, 7];

let a: number[] = []

arr1.map(item => {
    if(!arr2.includes(item)){
        a.push(item)
    }
})

arr2.map(item => {
    if(!arr1.includes(item)){
        a.push(item)
    }
})

console.log(a)