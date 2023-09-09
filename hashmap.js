const myMap = new Map()

myMap.set("David", "001")
myMap.set("Burhan", "002")

console.log(myMap)

for (const [key,value] of myMap) {
    console.log(`${key} = ${value}`);
}