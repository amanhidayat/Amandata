// ● Write a code to convert celsius to fahrenheit.
let celcius = 4;
console.log(`fahrenheit = ${celcius * 33.8}`);


// ● Write a code to check whether the number is odd or even
let number = 8;
console.log(`${number} adalah bilangan ${number % 2 === 0 ? "genap" : "ganjil"}`) ;
    

// ● Write a code to check whether the number is prime number or not
let numbers = 19
let divider = 0  

for (let i = 1; i <= number; i++) {
    if (numbers % i === 0) {
        divider++  
    }
}

console.log(`${numbers} ${divider === 2 ? 'is' : 'is not'} prime number`);

// ● Write a code to find the sum of the numbers 1 to N.
// ○ Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
let num = 5
let counter = 0
let desc = ""
for (let i = 1; i <=num; i++){
    desc += `${i} +`
    counter += i
}

console.log(`${num} -> ${desc} = ${counter}`);

// ● Write a code to find factorial of a number.
let Num = 6;
let Counter = 1; 
let Desc = "";

for (let b = Num; b >= 1; b--) {
    Desc += `x ${b} `
    Counter *= b; 
}

console.log(`${Num} -> ${Desc} = ${Counter}`);


// ● Write a code to print the first N fibonacci numbers

let n = 10
let curr = 0
let next = 1

for (let i = 1; i <= n; i++)   {
    console.log(curr)
    let count = curr + next
    curr = next 
    next = count
    }
