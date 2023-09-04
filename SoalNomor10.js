// Tulis fungsi untuk menemukan perbedaan dalam 2 array yang diberikan


console.log("Soal Nomor 10");
const arr1 = [1, 2, 3]
const arr2 = [1, 2, 4]
const differenceInArray = (arr1, arr2) => {
    let res = [];

for (let a = 0; a < arr1.length ; a++) {
    if (!arr2.includes(arr1[a])) {
        res.push(arr1[a]);
    }
}
for (let a = 0; a < arr2.length; a++){
    if (!arr1.includes(arr2[a])) ;
        res.push(arr2[a]);
}

    return res;

};

const hasilPerbedaan = differenceInArray(arr1, arr2);
console.log(hasilPerbedaan)