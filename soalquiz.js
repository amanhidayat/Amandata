 console.log(" SOAL NOMOR 1");
 let arr = [10, 11, 12, 13]

 function oddEven(arr) {
     let odd = arr.filter((n) => n % 2 === 1); 
     let even = arr.filter((n) => n % 2 === 0);
     return [odd.length, even.length];

 }
 console.log(oddEven(arr));

console.log(" SOAL NOMOR 2");
 function upperLower(s) {
     let upperCase = 0;
     let lowerCase = 0;
  
     for (let i = 0; i < s.length; i++) {
       if (/[A-Z]/.test(s[i])) {
         upperCase++;
       } else if (/[a-z]/.test(s[i])) {
         lowerCase++;
       }
     }
  
    return [lowerCase, upperCase];
   }
console.log(upperLower('tes'));

console.log(" SOAL NOMOR 3");
 const s = "Congratulations"; 
 function searchVowel(s) {
     let count = 0;
     let string = s.toLowerCase();
     for (let i = 0; i < string.length; i++) { 
         if (string[i] === "a" || string[i] === "i" || string[i] === "u" || string[i] === "e" || string[i] === "o"){
             count++;
         }
     }
     return count;
 }
 console.log(searchVowel(s));

let arr2 = [1, 2, 3, 4, 10, 11]

console.log(" SOAL NOMOR 4");
function lengthMaximumValue(arr) {
    let Maximum = arr2.reduce((a,b) => Math.max(a, b));
    let count = 0;
    
    for (const number of arr2) {
        if (number === Maximum) {
            count ++;
        }
    }
    return count;
}
console.log(lengthMaximumValue(arr));
  
