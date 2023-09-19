
console.log("Soal nomor 2");
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


console.log("Soal nomor 3");
let centimeters = 5;
let kilometers = centimeters / 100000; // 1 kilometer = 100000 centimeters

console.log(`5 centimeters is equal to ${kilometers} kilometers.`);


console.log("soal nomor 4");
let number = 1000;
let formattedNumber = `Rp. ${number.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

console.log(formattedNumber);


console.log("soal nomor 5")
let string = "Hello Dunia";
let Searchstring = "ell";

const index = string.indexOf(Searchstring);

if (index !== -1) {
    const before = string.substring(0, index);
    const after = string.substring(index + Searchstring.length);
    const newString = before + after;
    console.log(newString);
}   else  {
    console.log(string);
}


console.log("soal nomor 6")
let string6 = "Hello world bandung"
let capitalized_string = "";

for(let i = 0; i < string6.length; i++) {
  if (string6[i - 1] == " "){
    capitalized_string = capitalized_string + string6[i].toUpperCase();
  } else {
    capitalized_string = capitalized_string + string6[i];
  }
}
console.log(capitalized_string);

console.log("soal nomor 7");
let string7 = "uhuy";
let reversedString = "";
for (let i = string7.length -1; i >=0; i--) {
  reversedString = reversedString + string7[i];
}
console.log(reversedString);


console.log("Soal nomor 8")
function swapCase(inputString2) {
  let swappedString = "";
  for (const char of inputString2) {
      if (char === char.toLowerCase()) {
          swappedString += char.toUpperCase();
      } else if (char === char.toUpperCase()) {
          swappedString += char.toLowerCase();
      } else {
          swappedString += char;
      }
  }
  return swappedString;
}
let inputString2 = 'The QuiCk BrOwN Fox';
let result = swapCase(inputString2);
console.log(result);

console.log("soal nomor 9");
let a1 = 10
let b1 = 15

console.log(`${a1 > b1 ? a1 : b1} is larger then ${a1 . b1 ? b1 : a1}`)

console.log("soal nomor 10");
let a2 = 9
let b2 = 10
let c2 = 8

if(a2 > b2) {
  let d2 = a2 
  a2 = b2 
  b2 = d2
}

if (b2 > c2) {
  let d2 = b2
  b2 = c2
  c2 = d2
}

if (a2 > b2) {
  let d2 = a2
  a2 = b2

  
}

console.log(a2, b2, c2) 






