console.log("Soal Nomor 1");
/*  Dengan jumlah array ukuran n, kembalikan elemen mayoritas. Elemen mayoritas adalah elemen 
yang muncul lebih dari ⌊n / ù⌋ kali. Anda mungkin berasumsi bahwa elemen mayoritas selalu ada 
dalam array.
● Contoh 1:
○ Memasukkan: angka = [3,2,3]
○ Keluaran: 3
● Contoh 2:
○ Memasukkan: angka = [2,2,1,1,1,2,2]
○ Keluaran: 2  */

function myFunc (arr) {
    return arr.filter(v => arr.filter(item => item == v).length > arr.length / 2) [0] || 0
}

console.log(myFunc([3, 2, 3]))
console.log(myFunc([2, 2, 1, 1, 1, 2, 2]))


console.log("Soal Nomor 2");
/* Buat fungsi untuk mengonversi angka romawi menjadi bilangan bulat.
● Contoh 1:
○ Memasukkan: s = "III"
○ Keluaran: 3
○ Penjelasan: III = 3.
● Contoh 2:
○ Memasukkan: s = "LVIII"
○ Keluaran: 58
○ Penjelasan: L = 50, V = 5, III = 3.
● Contoh 3:
○ Memasukkan: s = "MCMXCIV"
○ Keluaran: 1994
○ Penjelasan: M = 1000, CM = 900, XC = 90 dan IV = 4.
*/

function RomawikeBilangan(angkaRomawi) {
    const konversiKeRomawi = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

    let hasil = 0;
    let nilaisebelumnya = 0;

    for (let i = angkaRomawi.length -1; i >= 0; i--) {
        const simbolRomawi = angkaRomawi[i];
        const nilaiSimbol = konversiKeRomawi[simbolRomawi];

        if (nilaiSimbol >= nilaisebelumnya) {
            hasil += nilaiSimbol;
        } else {
            hasil -= nilaiSimbol;
        }

        nilaisebelumnya = nilaiSimbol;
    }
 
    return hasil;
}

console.log(RomawikeBilangan("III"));
console.log(RomawikeBilangan("LVIII"));
console.log(RomawikeBilangan("MCMXCIV"));

console.log("Soal Nomor 3");
/* Dengan bilangan bulat numRows, kembalikan numRows pertama dari 
Segitiga Pascal.
Dalam segitiga Pascal, setiap angka adalah jumlah dari keduanya 
angka tepat di atasnya seperti yang ditunjukkan →
● Contoh 1:
○ Memasukkan: numRows = 5
○ Keluaran: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
● Contoh 2:
○ Memasukkan: numRows = 1
○ Keluaran: [[1]]
*/

function SegitigaPascal(numRows) {
    if (numRows <= 0) {
        return [];
    }

    const SegitigaPascal = [[1]]; 

    for (let i = 1; i <= numRows; i++) {
        const barisSebelumnya = SegitigaPascal[i - 1];
        const barisSekarang = [1];

    for (let j = 1; j < barisSebelumnya.length; j++) {
        barisSekarang.push(barisSebelumnya[j - 1] + barisSebelumnya[j]);
    }

    barisSekarang.push(1);
    SegitigaPascal.push(barisSekarang)
    }

    return SegitigaPascal
}

    console.log(SegitigaPascal(5));
    console.log(SegitigaPascal(1));


console.log("Soal Nomor 4");
/* 
● Anda diberi harga array di mana harga [i] adalah harga saham tertentu pada hari itu.
● Anda ingin memaksimalkan keuntungan Anda dengan memilih satu hari untuk membeli satu saham dan memilih 
hari yang berbeda di masa depan untuk menjual saham itu.
● Kembalikan keuntungan maksimum yang dapat Anda capai dari transaksi ini. Jika Anda tidak dapat mencapainya 
untung, kembalikan ÷. 
Contoh 1:
○ Memasukkan: harga = [7,1,5,3,6,4]
○ Keluaran: 5
○ Penjelasan: Beli pada hari ke-2 (harga = 1) dan jual pada hari ke-5 (harga = 6), keuntungan = 6-1 = 5.
○ Perhatikan bahwa membeli pada hari ke-2 dan menjual pada hari ke-1 tidak diperbolehkan karena Anda harus membeli sebelum menjual.
● Contoh 2:
○ Memasukkan: harga = [7,6,4,3,1]
○ Keluaran: O
○ Penjelasan: Dalam hal ini, tidak ada transaksi yang dilakukan dan keuntungan maksimal = O
*/

function myFunc (arr){
    let minValue = Math.min(...arr)
    let indexMin = arr.indexOf(minValue)
    let tempArr = arr.splice(indexMin, arr.length - indexMin)
    let maxValueTemp = Math.max(... tempArr)
    console.log({
        minValue, indexMin, tempArr, maxValueTemp
    })

    return maxValueTemp - minValue;
}

console.log(myFunc([7,1,5,3,6,4]));