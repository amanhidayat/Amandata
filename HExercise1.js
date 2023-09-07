console.log("Soal Nomor 1");
class Employee {
    name = ""
    hour = 0;

    addName(name) {
        this.name = name;
    }

    addWork(hour) {
        hour < 0 ? console.log("Anda belum bekerja") : (this.hour = hour);
    }
}

class Fulltime extends Employee {
    getSalary() {
        return this.hour <= 6
        ? this.hour * 100000
        : (this.hour -6) * 75000 + 600000; 
    }
}

let fullTime1 = new Fulltime();
fullTime1.addName("Aman");
fullTime1.addWork(6);
console.log(fullTime1);
console.log(fullTime1.getSalary());