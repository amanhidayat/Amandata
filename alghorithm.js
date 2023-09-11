function checkDuplicate (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true
        }
    }
    return false
}

console.log(checkDuplicate([1, 2, 3, 1]))

function checkDuplicate2 (arr) {
    const uniqueData = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (uniqueData.has(arr[i])) return true
        else uniqueData.add(arr[i])
    }
    return false
}

console.log(checkDuplicate2([1, 2, 3, 1]));

function search  (arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i
        }
    }
    return -1
}

console.log(search([2, 20, 10, 3], 20));


function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 6]));


function selectionSort (arr) {
    let min 
    for (let i = 0; i < arr.length; i++) {
        min = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j
        }
        if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));
