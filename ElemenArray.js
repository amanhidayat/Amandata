/* Tulis kode yang menghitung jumlah semua elemen array dua dimensi */

function hitungJumlahElemenArrayDuaDimensi(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            total += arr[i][j];
        }
    }
    return total;
}

// Contoh penggunaan
const arrayDuaDimensi = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const jumlah = hitungJumlahElemenArrayDuaDimensi(arrayDuaDimensi);
console.log("Jumlah semua elemen dalam array dua dimensi:", jumlah);
