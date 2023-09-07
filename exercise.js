// Buat fungsi yang dapat membuat pola segitiga sesuai dengan tinggi yang kami sediakan seperti berikut ini 
console.log("Soal nomor 1");
function NumberTriangle(number) {
    let currentNumber = 1;

    for (let i = 1; i <= number; i++) {
        let row = '';

        for (let j = 1; j <= i; j++){
            row += `${currentNumber.toString().padStart(2, '0')} `
            currentNumber++;
        }

        console.log(row);
    }
}
NumberTriangle(4);


// Buat fungsi yang dapat mengulang berapa kali sesuai dengan input yang kami berikan, dan akan ganti kelipatan ú dengan "Fizz", kelipatan ü dengan "Buzz", kelipatan ú dan ü dengan "FizzBuzz" Parameter : n → total perulangan 
 console.log("Soal Nomor 2");
 function FizzBuzz(num) {
    let tampungan = []
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) tampungan.push("FizzBuzz");
         else if (i % 3 === 0) tampungan.push("Fizz");
         else if (i % 5 === 0) tampungan.push("Buzz");
         else tampungan.push(i);
     }
     return tampungan;
}
console.log(FizzBuzz(15));

// Membuat fungsi untuk menghitung Indeks Massa Tubuh (BMI)
// ● Rumus: BMI = berat (kg) / (tinggi (meter))²
// ● Parameter : berat & tinggi badan
// ● Nilai kembali:
// ○ < 1ÿ.5 mengembalikan "berat badan kurang" ○ 1ÿ.5 - 24.Ā mengembalikan "ideal" 
// ○ 25.0 - 2Ā.Ā mengembalikan "kelebihan berat badan" ○ 30.0 - 3Ā.Ā mengembalikan "sangat kelebihan berat badan" 
// ○ > 3Ā.Ā mengembalikan "obesitas"
console.log("Soal Nomor 3");
function bmiCalculator(weight, height) {
    let bmi = weight / (height**2)

    if (bmi < 18.5) {
        console.log("Less weight");
    } else if (bmi > 18.5 && bmi < 24.9){
        console.log("Ideal");
    } else if (bmi > 25.0 && bmi < 29.9){
        console.log("Overweight");
    } else if (bmi > 30.0 && bmi < 39.9){
        console.log("Very Overweight");
    } else {
        console.log("Obesity");
    }
}
    
bmiCalculator(65, 1.65);

// Tulis fungsi untuk menghapus semua angka ganjil dalam array dan mengembalikan array baru yang berisi angka genap saja
console.log("Soal Nomor 4");
let arr = [1, 2, 3, 4, 5, 6, 7, 8]

const even =(array) => array.filter(item => item % 2 === 0)

console.log(even(arr));
console.log(even2(arr));

function even2(array) {
    return array.filter
    
}
console.log(evenNumbers);

// Tulis fungsi untuk membagi string dan mengubahnya menjadi array kata 
// ○ Contoh: "Halo Dunia" → ["Halo", "Dunia"]
console.log("Soal Nomor 5");

function ConvertArray(str){
    let strSplit = str.split(' ')
    return strSplit
}
let kata = 'Orgen Tunggal Pesona'
console.log(ConvertArray(kata));