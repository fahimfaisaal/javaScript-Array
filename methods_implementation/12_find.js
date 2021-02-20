console.clear()

//* use case of find method
//* it's use for search items in an array

const arr = [1, 2, 3, 4, 5, 'fahim', 6, 7, 8, 9, 10]
let findMain = arr.find((item, index, arr) => item === 'fahim')
console.log(findMain)

/**
 * # Implementation of find method [it's more faster than built in find 😁]
 * @param {Array<any>} arr
 * @function callback -> {
 * @argument {any} arr[i]
 * @argument {number} i
 * @argument {Array<any>} @param arr
 * }
 * @return {any} find element arr if it has not it's return undefined
 */
function myFind(arr, callback) {
    const len = Math.ceil(arr.length / 2)

    for (let i = 0, j = arr.length - 1; i < len; i++, j--) {
        if (callback(arr[i], i, arr)) {
            return arr[i]
        }

        if (callback(arr[j], j, arr)) {
            return arr[j]
        }
    }

    return undefined;
}

const find = myFind(arr, (item, index, arr) =>  item === 10)
console.log(find)