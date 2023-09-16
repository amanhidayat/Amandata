alert("Selamat datang di Kalkulator");
var value = prompt(
  `Pilih Menu:
    1. Penjumlahan
    2. Pengurangan
    3. Pembagian
    4. Perkalian
    5. Pangkat 2
    6. Akar Pangkat 2
    7. Akar Pangkat 3
`
);

function penjumlahan(a, b) {
    return a + b

}

function pengurangan(a, b) {
    return a - b
}

function pembagian(a, b) {

    if (b == 0){
    return ("Tidak bisa dibagi 0")
    }else{
    return a / b
    }

}

function perkalian(a, b) {
    return a * b
}

function pangkat2(a) {
    return a ** 2
}

function akarpangkat2(a) {
    return Math.sqrt(a)
}

function akarpangkat3(a) {
    return Math.cbrt(a)
}


switch (parseInt(value)) {
    case 1:
        const tambahA = parseInt(prompt("Masukkan Angka Pertama:"));
        const tambahB = parseInt(prompt("Masukkan Angka Kedua:"));
        alert(`Hasil penjumlahan: ${penjumlahan(tambahA, tambahB)}`);
        break;
    case 2:
        const kurangA = parseInt(prompt("Masukkan Angka Pertama:"));
        const kurangB = parseInt(prompt("Masukkan Angka Kedua:"));
        alert(`Hasil pengurangan: ${pengurangan(kurangA, kurangB)}`);
        break;
    case 3:
        const bagiA = parseInt(prompt("Masukkan Angka Pertama:"));
        const bagiB = parseInt(prompt("Masukkan Angka Kedua:"));
        alert(`Hasil pembagian: ${pembagian(bagiA, bagiB)}`);
        break;
    case 4:
        const kaliA = parseInt(prompt("Masukkan Angka Pertama:"));
        const kaliB = parseInt(prompt("Masukkan Angka Kedua:"));
        alert(`Hasil perkalian: ${perkalian(kaliA, kaliB)}`);
        break;
    case 5:
        const pangkatA = parseInt(prompt("Masukkan Angka:"));
        alert(`Hasil pangkat 2: ${pangkat2(pangkatA)}`);
        break;
    case 6:
        const akarPangkat2A = parseInt(prompt("Masukkan Angka:"));
        alert(`Hasil akar pangkat 2: ${akarpangkat2(akarPangkat2A)}`);
        break;
    case 7:
        const akarPangkat3A = parseInt(prompt("Masukkan Angka:"));
        alert(`Hasil akar pangkat 3: ${akarpangkat3(akarPangkat3A)}`);
        break;
    default:
        alert("Menu yang Anda pilih tidak valid.");
}

        