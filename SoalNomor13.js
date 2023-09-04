let arr = [1, "a", null, 2, 3, "g"]

function myFunc(input) {
    return input.filter(item => typeof item == 'number')
    .reduce((a, b) => a + b)
}

console.log(myFunc(arr));