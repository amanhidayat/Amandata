// Membuat fungsi untuk memeriksa apakah dua objek sama
console.log("Soal Nomor 1");

function areObjectsEqual(obj1, obj2) {
    return obj1 === obj2;
}

const objA = { "Nama": "Aman", "Umur": 25 };
const objB = { "Nama": "Aman", "Umur": 25 };
const objC = objA;

console.log(areObjectsEqual(objA, objB));
console.log(areObjectsEqual(objA, objC));


// Membuat fungsi untuk mendapatkan perpotongan dua objek
// contoh Input : { a: 1, b: 2 } & { a: 1, c: 3 } Output: { a: 1 }
console.log("Soal Nomor 2");

function getIntersection(obj1, obj2) {
  const result = {};

  for (const key in obj1) {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      result[key] = obj1[key];
    }
  }

  return result;
}

console.log(getIntersection({a: 1, b: 2}, {a: 1, c: 3}));


// Membuat fungsi untuk menggabungkan dua array data siswa dan menghapus data duplikat
// Data mahasiswa : nama & email
console.log("Soal Nomor 3");
function gabungDanHapusDuplikat(array1, array2) {
    const setGabungan = new Set();
    
    for (const item of array1) {
      const kunci = `${item.name}_${item.email}`;
      setGabungan.add(kunci);
    }
    
    for (const item of array2) {
      const kunci = `${item.name}_${item.email}`;
      if (!setGabungan.has(kunci)) {
        setGabungan.add(kunci);
      }
    }
    
    const arrayGabungan = Array.from(setGabungan).map((kunci) => {
      const [nama, email] = kunci.split('_');
      return { name: nama, email: email };
    });
    
    return arrayGabungan;
  }
  
  const array1 = [
    { name: 'Aman', email: 'amanhidayat39@gmail.com' },
    { name: 'Hidayat', email: 'hidayat71@gmail.com' }
  ];
  
  const array2 = [
    { name: 'Aman', email: 'amanhidayat39@gmail.com' },
    { name: 'Yayat', email: 'yayat2702@mail.com' }
  ];
  
  const arrayHasil = gabungDanHapusDuplikat(array1, array2);
  console.log(arrayHasil);

//   Buat fungsi yang dapat menerima input sebagai array objek dan alihkan semua nilai menjadi 
// properti dan properti menjadi nilai nama = 25 = umur
console.log("Soal Nomor 4");

function ubahArrayKeObjek(arr) {
    const objek = {};
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'object' && arr[i] !== null) {
        for (const prop in arr[i]) {
          if (arr[i].hasOwnProperty(prop)) {
            objek[arr[i][prop]] = prop;
          }
        }
      }
    }
  
    return objek;
  }
  
  const arrayObjek = [{ nama: 'yayat', umur: 25 }];
  const objekHasil = ubahArrayKeObjek(arrayObjek);
  
  console.log(objekHasil);

  // Membuat fungsi untuk menemukan bilangan faktorial menggunakan rekursi
console.log("Soal nomor 5");
let n = 5;

function factorial(n) {
    return (n === 0 ? 1 : n * factorial(n - 1))
}

const hasil = factorial(n)
console.log(`Nilai faktorial ${n} adalah ${hasil}`);