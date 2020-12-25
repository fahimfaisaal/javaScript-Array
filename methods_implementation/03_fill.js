console.clear()

//* fill method in javaScript
const arr1 = [1, 2, 3, 4, 5]
const fillArray = arr1.fill(false, 1, 3)
console.log(fillArray)
//! Remember that fill method is mutable cause it's don't return a new Array
console.log(fillArray === arr1)


//# Implementation of fill method
const arr2 = [6, 7, 8, 9, 10]

/**
 * @param {Array} arr
 * @param {anyType} el
 * @param {number} start
 * @param {number} end
 * @return {Array}
 */
function myFill(arr, el, start, end) {

    if (!start || start < 0) start = 0
    if (!end || end > arr.length) end = arr.length
    
    for (let i = start; i < end; i++) arr[i] = el

    return arr
}

myFill(arr2, true, 2, 4)
console.log(arr2)