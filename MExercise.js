console.log("Soal Nomor 1");
/* Buat kode yang dapat menangani antrian pada proses pemesanan makanan, dengan spesifikasi ini:
● Buat kelas untuk menangani proses antrian dalam file.
● Buat file untuk menangani dan menjalankan kelas antrian.
● Setiap proses antrian membutuhkan interval acak dari 1-10 detik.
● Petunjuk: Gunakan while &; janji 
  Latihan - Output
● Tambahkan pesanan ke antrian
● [Log] Cetak semua data dalam antrian
● Jalankan proses -> antrian proses berdasarkan interval acak
● [Log] Antrian 1 Selesai dalam XXX menit
● [Log] Antrian 2 Selesai dalam XXX menit
● [Log] Antrian 3 Selesai dalam XXX menit
● [Log] Antrian 4 Selesai dalam XXX menit */

class QueueClass {
    constructor(data) {
        this.data = data
    }

    #randomTime() {
        return Math.ceil(Math.random() * 10)
    }

    run() {
        let i = 0
        while (i < this.data.length) {
            let promisData = new Promise(resolve => resolve(this.data[i]))
            
            let executePromise = async () => {
                try {
                    let data = await promisData
                    console.log(`${data} done in ${this.#randomTime()} minutes`)
                } catch (err) {
                    console.log(err)
                }
            }
            executePromise()
            i++
        }
    }
}

module.exports = QueueClass
