const str: string = "Hello World";
const target: string = "ell";

const regex = new RegExp(target, 'i');
let newStr: string = str.replace(regex, "");

if(newStr === str){
    console.log("Tidak ditemukan");
} else {
    console.log(newStr)
}