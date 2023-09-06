
const car = {
    brand: "BMW",
    model: "M1351 xDrive",
    price: 800000000
}

console.log(car);

const car2 = new Object({
    brand: "BMW",
    model: "M135i xDrive",
    price: 800000000
})

console.log(car2);

// accessing value
console.log(car.brand);
console.log(car.model);

console.log(car['brand']);

let user = {
    name : "David",
    greet () {
        console.log("Hello!")
    }
}

user.greet()

// add property
user.age = 25
console.log(user);

// update property 
user.name = "Budi"
console.log(user);

user.name = "Dimas"
console.log(user);

// delete property 
delete user.greet
console.log(user);

let person = {
    name: "Ami",
    age: "19",
    address : {
        city: "Bandung",
        country : "Indonesia"
    }
}

// error
// console.log(person.address.city);

// optional chaining
console.log(person.address?.city);

// accessing.key
console.log(Object.keys(person));
console.log(Object.keys(person.address));

// for in
for (const key in person){
    console.log(key);
    console.log(person[key]);
}


// getter and setter
let student = {
    firstname: "John",
    lastname: "Smith",

    get fullname() {
        return `${this.firstname} ${this.lastname}`
    },

    set fullname(value) {
        const splittedValue = value.split(" ")
        this.firstname = splittedValue[0]
        this.lastname = splittedValue[1]
    }

}

console.log(student.fullname);

// setter
student.fullname = "Alice Cooper"
console.log(student.fullname);

// destructuring

let arr = ["Apple", "Lemon"]

let [a, b] = arr
console.log(a);
console.log(b);

let fruit = {
    name: "apple",
    color: "red"
}

let { name, color } = fruit
 
console.log(name)
console.log(fruit.name);

let fruit2 = {
    price: 5000,
    quantity: 10
}

let fruits = { ... fruit, ... fruit2}
console.log(fruits);

let fruits2 = Object.assign(fruit, fruit2)
console.log(fruits2);

















