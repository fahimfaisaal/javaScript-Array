console.clear()

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let lastElement = arr.pop()

console.log(lastElement, arr)

/**
 * # Implementation of pop method
 * @param {any} arr
 * @return {any} last element of arr
 */
function myPop(arr) {
    let lastElement = arr[arr.length - 1]

    arr.length -= 1

    return lastElement
}

lastElement = myPop(arr)
console.log(lastElement, arr)