interface Data {
    name: string;
    age: number;
}

const input: Data[] = [{name: "David", age: 20}];

function switchKeyValue(input: Data[]) {
    const newObj = {}
    input.map(item => {
        for(const [key, value] of Object.entries(item)){
            newObj[value] = key
        }
    })
    return newObj
}

console.log(switchKeyValue(input))