console.clear()

//* it's used for pick an array item by index number
const arr = [1, 2, 13, 4, 5, 11, 7];

let findIndex = arr.findIndex((x, i) => {
    return i === 5
})

console.log(findIndex)

/**
 * # Implementation of findIndex method
 * @param {any} arr 
 * @param {function} cb
 * @return {index of arr}
 */
function myFindIndex(arr, cb) {
    let index = -1

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) index = i
    }

    return index
}

let findIndex2 = myFindIndex(arr, (x, i) => {
    return i === 12
})

console.log(findIndex2)