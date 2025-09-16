const n: number = 6;
let suku_n_1: number = 0;
let suku_n_2: number = 1;
let suku_n: number = 0;

for(let i = 2; i <= n; i++){
    suku_n = suku_n_1 + suku_n_2;
    suku_n_1 = suku_n_2;
    suku_n_2 = suku_n;
}

console.log(suku_n);