 let age =13;

 if (age >= 17) {
     console.log("you can now create an ID Card")
 } else {
     console.log("You are not old enough to create an ID CARD")
 }

 let grade = "C"

 if (grade === "A") {
     console.log("Excelent Result")
 } else if (grade === "B") {
     console.log("Great Result!")
 } else if (grade === "C") {
     console.log("invalid Grade!")
 }

let now = new Date ();
let days = now.getDay();
console.log(days);


switch (days) {
    case 0:
        console.log("hari minggu");
        break;
    case 1:
        console.log("hari senin");
        break;
    case 2:
        console.log("hari selasa");
        break;
    case 3:
        console.log("hari rabu");
        break;
    case 4:
        console.log("hari kamis");
        break;
    case 5:
        console.log("hari jumat");
        break;
    default:
        console.log("hari sabtu");
        break;
}



// contoh NaN
let str = "abc"
console.log(Number(str))

let car = "BMW"

if (car === "BMW" || car === "Toyota") {
    console.log("this car is awesome");
}

// ternary operator
let word = "Typescript"

if (word === "Javascript") {
    console.log("Javascript");
} else if (word === "python") 
    console.log("python");
 else {
    console.log("Not javascript or Phyton");
}

console.log(word === "Javascript" ||word === "Javascript" ? "Javascript" :
word === "Python" ? "python" : "Not Javascript or python")


