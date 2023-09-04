// Tulis fungsi untuk menyisipkan beberapa bilangan bulat yang diberikan (bukan array) ke array dan memiliki ukuran maksimum 
// masukan. Array hanya dapat memiliki ukuran maksimum dari input yang diberikan. (jika ukuran maksimum yang diberikan 
// input adalah 5 dari array hanya dapat berisi 5 elemen). 
// sebuah. Contoh: maxSize = 5, bilangan bulat yang diberikan adalah 5, 10, 24, 3, 6, 7, 8 i. Fungsi akan kembali [5, 10, 24, 3, 6]
console.log("Soal nomor 7");
function myFunc (maxSize, ...numbers) {
    console.log(numbers.slice(0, maxSize));
}

myFunc(5, 10, 24, 3, 6, 7, 8, 9, 11)

