//! filter is an immutable method mean it's return a new array
console.clear()

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenArr = arr.filter(value => value % 2 === 0)
// console.log(evenArr)

/**
 * @title Implementation of filter Method
 * @param {Array<any>} arr 
 * @param {function} callBack {
 * @argument {any} arr[i]
 * @argument {number} i
 * @argument {Array<any>} arr
 * }
 * @return newArr
 */
function myFilter(arr, callBack) {
    const len = arr.length
    let newArr = []

    for (let i = 0; i < len; i++) {
        if (callBack(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

const odd = myFilter(arr, value => value % 2 !== 0)
console.log(odd)