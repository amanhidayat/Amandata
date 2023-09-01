let arr = ["a", "b", "c", "d", "e"]

let arr2 = new Array("a", "b", "c", "d", "e")

console.log(arr);
console.log(arr2);

console.log(arr[2]) // "c"
console.log(arr2[3]);

let data = [1, 2, 3]

data.push(4)
data.unshift(0);

data.pop(4);
data.shift(0);
console.log(data);

let str = "September telah tiba , adakah uang nya?"
let strSplit = str.split(" ");
console.log(strSplit);
console.log(strSplit.length);

let strJoin = strSplit.join("-");
console.log(strJoin);

let student = ["Ronni", "Emi", "Babi"] 
console.log(student.sort())

let nilai = [80, 100, 90]
console.log(nilai.sort((a, b) => a - b))
console.log(nilai.sort((a, b) => b - a))

let city = ["Palembang", "BSD", "Pangkal Pinang", "Bandung"]

city.forEach(item => {
    console.log(item);
});

city.map((item, index, arr) => {
    console.log(`${item} ada di index ${index} dalam array ${arr}`);
})

let age = [20, 30, 40, 50, 60, 70]
console.log(age.filter(item => item > 30));

let fruits = ["apple", "orange", "plum"]
for (let item of fruits) {
    console.log(item);
}

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]) 
}


