console.clear()

//* lastIndexOf method as like indexOf method but the deference is it's iterate of the last index
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'fahim', 10, 'faisal', 11]
const fahimIndex = arr.lastIndexOf('fahim', 11)

console.log(fahimIndex)

/**
 * @title Implementation of lastIndexOf method
 * @param arr
 * @param {any} item
 * @param {number} start index
 * @returns {number} index number of the item if not found then return -1
 */
function myLastIndexOf(arr, item, start = arr.length - 1) {
    for (let i = start; i > -1; i--) {
        if (arr[i] === item) {
            return i
        }
    }

    return -1
}

const faisalIndex = myLastIndexOf(arr, 'faisal', 12)
console.log(faisalIndex)