function myFunc (n, array) {
    if (!array.includes(n)) {
        array.push(n)
    } else {
        console.log("Value udah ada");
    }
    return array
}

console.log(myFunc(3, [1, 2, 3]));