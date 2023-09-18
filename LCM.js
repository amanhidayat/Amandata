/* Tulis kode untuk menemukan LCM dari dua angka → gunakan lakukan ... sambil. */

const { log } = require("console")

function lcm(a, b) {
    let kpk = a > b ? a : b 
    let counter = a > b ? a : b
    do {
        if (kpk % a == 0 && kpk % b == 0) {
            return kpk
        }
        kpk += counter
    } while (true)
}

console.log(lcm(15, 20));