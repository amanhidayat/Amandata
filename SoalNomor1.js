//Tulis fungsi untuk mendapatkan nilai terendah, tertinggi, dan rata-rata dalam array (dengan dan tanpa pengurutan fungsi).
console.log("Soal nomor 1");
console.log("Dengan Short");
let arr = [20, 30, 40, 60, 90, 80, 70, 100];
// mencari nilai tertinggi dan terendah array
let high = Math.max(...arr);
let low = Math.min(...arr);
// mencari rata rata array
let red = arr.reduce((a, b) => a + b);
let avg = red / arr.length;
console.log(`Nilai Tertinggi adalah ${high} dan nilai Terendah adalah ${low}, total nilai didalam array adalah ${red} dan rata rata adalah ${avg}`);


let min = arr[0];
let max = arr[0];
let sum = arr[0];
function TanpaShort (arr) {
    for (let a = 1; a < arr.length; a++) {
        if (arr[a] < min) {
            min = arr[a];
        }
        if (arr[a] > max) {
            max = arr[a];
        }
        sum += arr[a];
    }
    
    const avg = sum /arr.length;
    return { min, max, avg };

}

const noshort = TanpaShort(arr);
console.log("Tanpa Short :", noshort);






