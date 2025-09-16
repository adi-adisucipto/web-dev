let num: number = 14;
let faktor: number = 0;
let isPrime: boolean = true;

for(let i: number = 2; i < num; i++){
    if(num % i === 0){
        isPrime = false;
        break;
    }
}

if(num <= 0){
    console.log(`Input salah`);
} else if(num === 1){
    console.log(`${num} bukan bilanga prima ❌`);
}else if(isPrime){
    console.log(`${num} adalah bilangan prima ✅`);
} else {
    console.log(`${num} bukan bilanga prima ❌`);
}