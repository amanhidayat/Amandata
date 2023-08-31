// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 5; i > 0; i--) {
//     if (i === 3) continue
//     console.log(i);
// }


for ( let a = 1;a <= 10; a++){
    console.log(`5 x ${a} = ${a * 5}`) 
}


let num = 7

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * 1}`);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2) {
        console.log (`${i} adalah bilangan ganjil`);
    } else {
        console.log (`${i} adalah bilangan genap`);
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(`${1} adalah bilangan ${i % 2 == 0 ? "genap" : "ganjil"}`);
}