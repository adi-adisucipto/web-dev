// Find area of rectangle
let length = 5;
let width = 3;
const area = length * width;
// console.log(area);

// Find perimeter of rectangle
const perimeter = 2 * (length + width);
// console.log(perimeter);

// Find diameter, circumference and area of circle
let radius = 5;
const diameter = 2 * radius;
const circumference = 2 * Math.PI * radius;
const areaCicrcle = Math.PI * radius ** 2;
// console.log(circumference);
// console.log(areaCicrcle);

// Find angle of triangle
let angle1 = 80;
let angle2 = 65;
const angle3 = 180 - (angle1 + angle2);
// console.log(angle3);

// Convert days to year, month, and days
let days = 366;
const year = parseInt(days / 365); // hasil bagi
const month = parseInt((days % 365) / 30);
const day = (days % 365) % 30;
// console.log(year + " year, " + month + " month, " + day + " day");

// Find difference between dates in days
let date1 = new Date("2025-08-28");
let date2 = new Date("2025-08-31");
const miliDetikDalamHari = 1000 * 24 * 60 * 60;
// console.log((date2 - date1) / miliDetikDalamHari + " days");