let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10, 20];

function sumDup(input) {
    let res = [];
    
    for (let i = 0; i < input.length; i++) {
        // Gunakan filter untuk mencari elemen yang sama
        let duplicates = input.filter(item => item === input[i]);
        
        // Jika ada lebih dari satu elemen yang sama, dan belum ditambahkan ke res, tambahkan ke res
        if (duplicates.length > 1 && !res.includes(input[i])) {
            res.push(input[i]);
        }
    }

    // Menggunakan reduce untuk menghitung jumlah semua elemen di res
    return res.reduce((a, b) => a + b, 0);
}

console.log(sumDup(arr));




