let str2: string = "An apple a day keeps the doctor away";
const regex = new RegExp("a", "gi");

let a: string = str2.replaceAll(regex, "*");
console.log(a);