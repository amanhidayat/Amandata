
console.log("soal nomor 2");
const inputString = "Rabu";
const cleanString = inputString.toLowerCase().replace(/[^a-z0-9]/g, ''); 
const length = cleanString.length;
const mid = Math.floor(length / 2);
let isPalindrome = true;

for (let i = 0; i < mid; i++) {
  if (cleanString[i] !== cleanString[length - 1 - i]) {
    isPalindrome = false; 
    break;
  }
}

if (isPalindrome) {
  console.log(`${inputString} adalah sebuah palindrom.`);
} else {
  console.log(`${inputString} bukan palindrom.`);
}



console.log("soal nomor 3");
const centimeters = 5;
const kilometers = centimeters / 100000; // 1 kilometer = 100000 centimeters

console.log(`5 centimeters is equal to ${kilometers} kilometers.`);


console.log("soal nomor 4");
const number = 1000;
const formattedNumber = `Rp. ${number.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

console.log(formattedNumber);


console.log("soal nomor 5")
const string = "Hallo Dunia";
const Searchstring = "ell";

const index = string.indexOf(Searchstring);

if (index !== -1) {
    const before = string.substring(0, index);
    const after = string.substring(index + Searchstring.length);
    const newString = before + after;
    console.log(newString);
}   else  {
    console.log(string);
}

console.log("Soal nomor ");
const nilai = ""