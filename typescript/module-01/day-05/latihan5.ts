interface Result {
    newArr: number[];
}

let arr: number[] = [1, 2, 3, 4];
let newElement: number = 7

function addNewElement(arr: number[], newElement: number): Result{
    const newArr = [...arr]
    if(newArr.includes(newElement)){
        return {newArr};
    } else {
        newArr.push(newElement)
        return {newArr}
    }
}

console.log(addNewElement(arr, newElement))