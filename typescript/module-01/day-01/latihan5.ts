let days: number = 366;
let year: number = Math.floor(days / 365);
let month: number = Math.floor((days % 365) / 30)
let day: number = (days % 365) % 30

console.log(`${days} hari = ${year} tahun, ${month} bulan, ${day} hari`)