class Student {
    constructor(name, age, program) {
        this.name = name;
        this.age = age;
        this.program = program;
    }

    greeting() {
        console.log(`Hello ${this.name}`);
    }

    getAge() {
        return this.age;
    }
}

const student1 = new Student("Aman", 25, "Fullstack Web Development");
const student2 = new Student("Hidayat", 25, "LOG IN USA");

console.log(student1.name);
console.log(student1.age);
student1.greeting();
console.log(student1.getAge()); // Panggil metode getAge
student2.greeting();

class Employee {
    constructor() {
        this.employeeName = '';
    }

    getEmployeeName() {
        return this.employeeName;
    }

    setEmployeeName(value) {
        this.employeeName = value;
    }
}

const employee1 = new Employee();
employee1.setEmployeeName("John");
console.log(employee1.getEmployeeName());
console.log(employee1.employeeName);


// 




