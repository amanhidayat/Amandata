/*const tryPromise = new Promise((resolve, reject) => {
    let isError = false
    if (isError) reject("Ini error")
    else resolve("Ini sukses")

})

tryPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("finally done"))

// assync Await
const asyncAwait = async () => {
    console.log("satu")
    await tryPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Finally Success")) // asynchorous
    console.log("dua")
} */

 // asyncAwait()

 const tryAndCatch = async () => {
    try {
        let age = 20
        if (age > 18) {
        throw ("Belum Cukup Umur")
        }
        let result = await tryPromise
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}

tryAndCatch()

 