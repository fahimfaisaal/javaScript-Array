console.clear()

//* it's used for pick an array index by index number or array item
const arr = [1, 2, 13, 4, 5, 11, 7];

let findIndex = arr.findIndex((x, i) => {
    return x === 11
})

console.log(findIndex)

/**
 * @title Implementation of findIndex method
 * @param {Array<any>} arr 
 * @function callBack -> {
 * @argument {any} arr[i]
 * @argument {number} i
 * @argument {Array<any>} @param arr
 * }
 * @return {number} index of @param arr
 */
function myFindIndex(arr, callBack) {    
    for (
        let i = 0, len = arr.length;
        i < len; i++
    ) {
        if (callBack(arr[i], i, arr)) {
            return i
        }
    }

    return -1
}

let findIndex2 = myFindIndex(arr, (x, i) => {
    return i === 6
})

console.log(findIndex2)