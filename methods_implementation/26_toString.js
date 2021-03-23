console.clear()
const log = (...items) => console.log(...items)

//* it's return string representation of an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = ['one', 'two', 'three', 'four', 'five']

log('Built in method ->', arr.toString(), arr2.toString())

/**
 * @param {any} arr 
 * @returns {String}
 */
function myToString(arr) {
    return arr + ''
}

log('Implemented method ->', myToString(arr), myToString(arr2))