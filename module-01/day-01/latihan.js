console.log("~~~~ Find area of rectangle ~~~~");
let length = 5;
let width = 3;
const area = length * width;
console.log(area);
console.log("~~~~ Selesai ~~~~");
console.log("");

console.log("~~~~ Find perimeter of rectangle ~~~~");
const perimeter = 2 * (length + width);
console.log(perimeter)
console.log("~~~~ Selesai ~~~~");
console.log("");;

console.log("~~~~ Find diameter, circumference and area of circle ~~~~");
let radius = 5;
const diameter = 2 * radius;
const circumference = 2 * Math.PI * radius;
const areaCicrcle = Math.PI * radius ** 2;
console.log(`Diameter: ${diameter}`);
console.log(`Circumference: ${circumference}`);
console.log(`Area circle: ${areaCicrcle}`);
console.log("~~~~ Selesai ~~~~");
console.log("");

console.log("~~~~ Find angle of triangle ~~~~")
let angle1 = 80;
let angle2 = 65;
const angle3 = 180 - (angle1 + angle2);
console.log(`Sudut ke-3: ${angle3}`);
console.log("~~~~ Selesai ~~~~");
console.log("");

console.log("~~~~ Convert days to year, month, and days ~~~~")
let days = 366;
const year = parseInt(days / 365); // hasil bagi
const month = parseInt((days % 365) / 30);
const day = (days % 365) % 30;
console.log(year + " year, " + month + " month, " + day + " day");
console.log("~~~~ Selesai ~~~~");
console.log("");

console.log("~~~~ Find difference between dates in days ~~~~");
let date1 = new Date("2025-08-28");
let date2 = new Date("2025-08-31");
const miliDetikDalamHari = 1000 * 24 * 60 * 60;
console.log((date2 - date1) / miliDetikDalamHari + " days");
console.log("~~~~ Selesai ~~~~");
console.log("");