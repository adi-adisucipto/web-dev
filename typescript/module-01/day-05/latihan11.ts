type MixedType = (number | string | boolean | null | undefined | object)

let arr: MixedType[] = [1, [], undefined, {}, "string", {}, [], null]
let a: MixedType[] = []

const primitive: MixedType[] = arr.filter(item => {
    return typeof item !== 'object' || item === null
})

console.log(primitive)

console.log(typeof null)