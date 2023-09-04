// Tulis fungsi yang mengambil array kata dan mengembalikan string dengan menggabungkan kata-kata dalam 
// array, dipisahkan dengan koma dan - kata terakhir - dengan 'dan'.
console.log("Soal nomor 2");
let arr = ['Kerbau', 'Banteng', 'Apple', 'Jeruk'];

let concat = (arr) => {
    let comma = "";
    comma += arr.slice(0, -1);
    let result = `${comma}, and ${arr[arr.length -1]}`;
    return result;
}

console.log(concat(arr));