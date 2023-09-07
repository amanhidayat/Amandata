console.log("Soal Nomor 1");
    function isPrime(n) {
        if (n >= 2) {
            if (n % 2 === 0) {
                return 0;
            } else {
                return 1;
            }
        } else {
            return 1;
        }
    }
console.log(isPrime(10));
console.log(isPrime(11));


console.log("Soal Nomor 2");
const letter = ' abcdefghijklmnopqrstuvwxyz'; 

function convertToText(arr) {

    let text = '';
    for (const num of arr){
        if(num === 0) {
            text += ' '
        } else {
            text += letter[num]
        }
    }
    return text
}

console.log(convertToText([1, 2, 3, 4]));

console.log("Soal Nomor 3");
const sumLetter =(s) => {
const letterOrder = "abcdefghijklmnopqrstuvwxyz"
let res = 0
let arr = s.toLowerCase()
    for (let i = 0; i < s.length; i++) {
if (arr[i] === " ") {
    res += 5
}else if (/[a-z]/.test(arr[i])) {
    let index = letterOrder.indexOf(arr[i]) + 1
    res+= index 
}else {
    res+=10
    }
}
return res
}

console.log(sumLetter("Reading Book!"));


console.log("Soal Nomor 4");
function convertToBanknotes(amount) {
    const fractions = [100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000];
    const banknotes = [];

    for (const fraction of fractions) {
        while (amount >= fraction) {
            banknotes.push(fraction);
            amount -= fraction;
        }
    }
    
    return banknotes;
}

const amount = 74000;
const result = convertToBanknotes(amount);
console.log(result); // Output: [50000, 20000, 2000]



