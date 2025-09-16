interface Student {
    name: string;
    email: string
}

let array1: Student[] = [
    {name: 'Student 1', email: "student1@gmail.com"},
    {name: 'Student 2', email: "student2@gmail.com"},
]

let array2: Student[] = [
    {name: 'Student 1', email: "student1@gmail.com"},
    {name: 'Student 3', email: "student3@gmail.com"},
]

function concatArr(array1: Student[], array2: Student[]): Student[] {
    let newArr = [...array1, ...array2]
    const uniqueEmail: string[] = [];
    const data: Student[] = []

    newArr.map(item => {
        if(!uniqueEmail.includes(item.email)){
            uniqueEmail.push(item.email)
            data.push(item)
        }
    })

    return data
}

console.log(concatArr(array1, array2))