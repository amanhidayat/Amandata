console.log("Soal Nomor 1");
function isAnagrams(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, "");
    str2 = str2.toLowerCase().replace(/\s/g, "");
    
    if (str1.length !== str2.length) {
        return false;
    }
    
    const charMap1 = {};
    const charMap2 = {};
    
    for (let i = 0; i < str1.length; i++) {
        charMap1[str1[i]] = (charMap1[str1[i]] || 0) + 1;
        charMap2[str2[i]] = (charMap2[str2[i]] || 0) + 1;
    }
    
    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }
    
    return true;
}

// Contoh penggunaan
const str1 = "listen";
const str2 = "silent";

if (isAnagrams(str1, str2)) {
    console.log("Kedua string adalah anagram.");
} else {
    console.log("Kedua string bukan anagram.");
}

console.log("Soal Nomor 2");
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 1;
    } else {
        return 0;
    }
}

// Contoh penggunaan
const year = 2100;

console.log("Tahun " + year + " adalah tahun kabisat: " + (isLeapYear(year) ? "Ya" : "Tidak"));

console.log("Soal Nomor 3");
function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const number1 = 1; // Ganti dengan nilai batas bawah
  const number2 = 100; // Ganti dengan nilai batas atas
  const prime = [];
  
  for (let i = number1; i <= number2; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  
  console.log(prime);


console.log("Soal Nomor 4");
function getFloors(floor) {
    // Write your code here
    const lockerPerFloor =[5,6,7,5,6,7]
    let highestLocker = 0
    for (let i = 0;i < floor; i++){
        highestLocker += lockerPerFloor[i % 3]
    }
    return [floor,highestLocker]

}

  // Example usage:
const floorNumber = 1;
const result = getFloors(floorNumber);
console.log(result); // Output: [3, 18]


