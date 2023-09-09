// no 1. buat function konversi ke tamplate phonenumber (xxx-xxx-xxxx)
// example -> '1234567890' = '123-456-7890'   jenis string semua

console.log("Soal Nomor 1");

function konversiNo(s) {
  const p = s.replace(/\D/g, '');

  if (p.length !== 10) {
    return 'Nomor telepon tidak ditemukan';
  }
  
  const template = `(${p.slice(0, 3)})-${p.slice(3, 6)}-${p.slice(6)}`;
  return template;
}

const input = '1234567890';
console.log(konversiNo(input));

 

// no 2. buat class Train
    // - masinis duduk dipaling depan
    // - maksimal penumpang 10 
    // - tidak boleh ada penumpang dengan nama yang sama 
    // - penumpang mengisi urutan kursi dari depan terlebih dahulu 
    // - penumpang bisa keluar kereta
    // - penumpang baru, mengisi kursi kosong terlebih dahulu sebelum ke kursi belakang 

    class Train {
        #container = ["masinis"]
        #maxSize = 11

        addPassenger(name) {
            if (this.#container.length >= this.#maxSize) throw new Error("Train overflow!")
            if (name == "masinis") throw new Error("masinis is not passenger")
            if (this.#container.includes(name)) throw new Error("name must be unique")

            let idx = this.#container.indexOf(null)
            if (idx == -1) {
                this.#container.push(name)
            } else {
                // this.#container[idx] = name
                this.#container.splice(idx, 1, name)
            }
        }

        outPassenger(name) {
            if (!this.#container.includes(name)) throw new Error("name undifined") 

            let idx = this.#container.indexOf(name)
            // this.#container[idx] = nul
            this.#container.splice(idx, 1, null)
        }

        getPassenger() {
            console.log("=== Daftar Penumpang ===")
            this.#container.map((val, idx) => {
                if (idx > 0) {
                    console.log(`${idx}. ${val == null ? "kursi kosong" : val}`)
                }
            })
        }
    }

    const train = new Train()
    train.addPassenger("ahmad")
    train.addPassenger("akmal")
    train.addPassenger("fatir")
    train.outPassenger("akmal")
    // train.addPassenger("amadeo")
    train.getPassenger()


        










