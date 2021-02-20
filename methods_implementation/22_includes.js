console.clear()

//* includes method return a boolean if the passing argument exist in the array
//* first argument is search element and second parameter is fromIndex (inclusive)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'fahim', 12]
const is10InArr = arr.includes(10, 9)

console.log(is10InArr)

/**
 * # Implementation of includes method
 * @param {Array<any>} arr
 * @param {any} el
 * @param {number} fromIndex
 * @return {boolean}
 */
function myIncludes(arr, el, fromIndex = 0) {
    const len = arr.length

    for (let i = fromIndex; i < len; i++) {
        if (el === arr[i]) {
            return true
        }
    }

    return false
}

const isFahimInArr = myIncludes(arr, 'fahim', 10)
console.log(isFahimInArr)