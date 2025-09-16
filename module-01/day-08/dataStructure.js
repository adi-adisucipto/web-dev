// SET
const arr = [1, 2, 3, 1, 4, 5];
const newArr = new Set(arr) // menghilangkan data duplikat
const a = Array.from(newArr)
console.log(newArr)
console.log(a)


// MAP
const obj = {
    name: "budi",
    2: 22,
}

console.log(obj);

const newMap = new Map();
newMap.set({name: "budi"}, [1, 2, 3, 4]);
console.log(newMap)