/* Tulis kode untuk menemukan karakter paling umum dari string */

function common(str) {
    let hasil = ""
    let maxSize = 1
    str.split("").map(v => {
        let i = str.split(v).length -1
        if (i > maxSize) {
            hasil = v
            maxSize = i
        }
    })
    return hasil
}


console.log(common("Abcdefghijkkl"));