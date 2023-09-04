// Menulis fungsi untuk menemukan nilai duplikat dalam array
console.log("Soal nomor 9");

const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

const NilaiDuplikat = (arr) => {
  let sorted = arr.sort((a, b) => a - b); 
  let res = [];

  for (let a = 0; a < sorted.length - 1; a++) { 
    if (sorted[a] === sorted[a + 1]) {
      res.push(sorted[a]);
    }
  }

  return res;
};

const HasilDuplikat = NilaiDuplikat(arr);
console.log(HasilDuplikat);





