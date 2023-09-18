/* Tulis kode untuk memeriksa apakah tanggalnya adalah akhir pekan */

function AkhirPekan() {
    const hari = Date ? new Date(Date).getDay() : new Date().getDay();
    return hari === 0 || hari === 6 ? "Akhir Pekan" : "Bukan Akhir Pekan";
}

console.log(AkhirPekan("2023-09-18"));