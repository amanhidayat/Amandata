//Tulis fungsi untuk menghapus semua angka ganjil dalam array dan mengembalikan array baru yang berisi genap Hanya angka
console.log("Soal nomor 6");
function filterOutOddNumbers(arr) {
    const evenNumbers = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }

    return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterOutOddNumbers(numbers);

console.log(evenNumbers);
