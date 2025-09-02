// for(let i = 1; i <= 10; i++) {
//     console.log(`9 x ${i} = ${i * 9}`);
// }

let kata = "radaR";
let a = kata.toLowerCase().split("");
let b = [];
let c = 0;
// Proses pembalikan kata
for(let i = kata.length - 1; i >= 0; i--) {
    b[c] = a[i];
    c++;
}
// Proses mengetahui palindrome
if(b.join("") == kata.toLowerCase()) {
    console.log(kata + " adalah palindrome ✅");
} else {
    console.log(kata + " bukan paliandrome ❌");
}

// Convert cm to km
// 1 km = 100000 cm
let cm = 30;
let km = cm / 100000
console.log(`${cm} cm sama dengan ${km} km`);


// let duit = 100000;
// let p = String(duit).split("");
// let q = p.reverse();
// let r = [];
// for(let i = 1; i <= p.length; i++){
//     r.push(q[i - 1])
//     if(i % 3 == 0 && i != p.length){
//         r.push(".");
//     }
// }
// console.log(`Rp.${r.reverse().join("")},00`)

let duit = 100000000;
let p = String(duit).split("");
let q = 1;
let r = [];
let s = []
for(let i = String(duit).length - 1; i >= 0; i--){
    r.push(p[i]);
    if(q % 3 == 0 && i != 0){
        r.push(".");
    }
    q++;
}

let u = 0
for(let i = r.length - 1; i >= 0; i--){
    s[u] = r[i];
    u++
}
console.log(`Rp.${s.join("")},00`);

let searchString = "ell";
let kataKata = "Hello world";
let kataKataSplit = kataKata.split("");
let k = 0;

for(let i = 0; i < searchString.length; i++) {
    console.log(kataKata[i])
}