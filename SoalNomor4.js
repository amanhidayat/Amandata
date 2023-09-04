// Tulis fungsi untuk menghitung setiap elemen dalam posisi yang sama dari dua array bilangan bulat. 
// Asumsikan kedua array memiliki panjang yang sama.
// sebuah. Contoh : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

let arr = [1, 2, 3]
let arr2 = [3, 2, 1]
// [4, 4, 4]

function myFunc (a, b) {
    return a.map((item, index) => item + b[index])
}

console.log(myFunc(arr, arr2));