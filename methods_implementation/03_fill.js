console.clear()

//* fill method in javaScript
const arr1 = [1, 2, 3, 4, 5]
const fillArray = arr1.fill(false, 1, 2)
console.log(fillArray)
//! Remember that fill method is mutable cause it's don't return a new Array
console.log(fillArray === arr1)

const arr2 = [6, 7, 8, 9, 10]

/**
 * @title Implementation of fill method
 * @param {Array} arr
 * @param {anyType} el
 * @param {number} start
 * @param {number} end
 * @returns {Array}
 */
function myFill(arr, el, start = 0, end = arr.length) {
    const len = end > arr.length ? arr.length : end
    
    for (let i = start; i < len; i++) {
        arr[i] = el
    }

    return arr
}

myFill(arr2, true, 1, 3)
console.log(arr2)