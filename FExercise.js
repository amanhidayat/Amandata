// Membuat fungsi untuk menghitung array data siswa
console.log("Soal Nomor 1");

class Siswa {
  constructor(nama, tanggalLahir, email, nilai) {
    this.nama = nama;
    this.tanggalLahir = new Date(tanggalLahir);
    this.email = email;
    this.nilai = nilai;
  }
}

function createSiswa(nama, tanggalLahir, email, nilai) {
  return new Siswa(nama, tanggalLahir, email, nilai);
}

const siswa1 = createSiswa("Aman", "2004-12-27", "amanhidayat39@gmail.com", 90);
const siswa2 = createSiswa("Hidyat", "2004-12-25", "amanhidayat38@gmail.com", 80);
const siswa3 = createSiswa("Yayat", "2003-12-06", "amanhidayat35@gmail.com", 87);

const arrStudent = [siswa1, siswa2, siswa3];

console.log(arrStudent);

function convertAge(date) {
  let birthdate = new Date(date).getTime();
  let now = new Date().getTime();
  let diff = now - birthdate;

  return Math.floor(diff / (24 * 3600 * 1000) / 365);
}

function calculate(arr) {
  let maxNilai = Math.max(...arr.map(item => item.nilai));
  let minNilai = Math.min(...arr.map(item => item.nilai));
  let AvgNilai = arr.map((item) => item.score).reduce((a, b) => a + b) / arr.length;

  return {
    nilai: {
      max: maxNilai,
      min: minNilai,
      avg: AvgNilai,
    }
  };
}

console.log(calculate(arrStudent));








// 

