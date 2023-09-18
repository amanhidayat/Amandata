/* Tulis kode yang menghitung jumlah semua elemen array dua dimensi */


let input = [
    [1, 2, 3],
    [2, 3, 1],
    [2, 1, 3]
]

function sum(arr) {
    let res = 0
    arr.map(v => v.map(i => res += i))
    return res
}

console.log(sum(input))
