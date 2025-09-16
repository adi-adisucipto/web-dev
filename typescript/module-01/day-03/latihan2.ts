let str: string = "madam";

let right: number = str.length - 1;
let left: number = 0;
let a: boolean = true

while(left < right){
    if(str[left] !== str[right]) {
        a = false;
        break;
    };
    left++;
    right--;
}

if(a){
    console.log(`${str} adalah palindrom ✅`);
} else{
    console.log(`${str} bukan palindrom ❌`);
}