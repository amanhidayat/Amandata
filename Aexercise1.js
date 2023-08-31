// Write a code to find area of rectangle.
const panjang = 9;
const lebar = 5;

const luaspersegipanjang = panjang * lebar;
console.log (`luas dari persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${panjang * lebar}`)  


// Write a code to find perimeter of rectangle.
const kelilingpersegipanjang = 2 * panjang * lebar;
console.log (kelilingpersegipanjang);


// Write a code to find diameter, circumference and area of a circle.
// Temukan diameter, keliling, dan luas lingkaran:
const jarijari = 7;
const pi = 3.14

const diameterLingkaran = 2 * jarijari;
console.log (diameterLingkaran);

const kelilingLingkaran = 2 * pi * jarijari;
console.log (kelilingLingkaran);

const luaslingkaran = 3.14 * jarijari * jarijari;
console.log (luaslingkaran);


// Write a code to find angles of triangle if two angles are given.
const sudutA = 30;
const sudutB = 30;

let sudutC = 180 - (sudutA + sudutB);
console.log (sudutC);


// Write a code to get difference between dates in days.
const hariini = new Date();
const haritujuan = new Date('2024-01-01');

const perbedaanwaktu = haritujuan - hariini; 
const perbedaanhari = Math.floor(perbedaanwaktu / (24 * 3600 * 1000));
console.log(`${perbedaanhari}`)

// Write a code to convert days to years, months and days.
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ 1 year : 365 days, 1 month : 30 days

let tahun = Math.floor(perbedaanhari / 365)
let sisa = perbedaanhari % 365
let bulan = Math.floor(sisa / 30);
let hari = sisa % 30;

console.log(`${tahun} tahun , ${bulan} bulan, ${hari} hari`);