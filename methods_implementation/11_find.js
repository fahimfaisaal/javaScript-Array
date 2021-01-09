console.clear()

//* use case of find method
//* it's use for search items in array

const arr = [1, 2, 3, 4, 5, 'fahim']

let findMain = arr.find((item, index, arr) => item === 'fahim')
console.log(findMain)

/**
 * # Implementation of find method
 * @param {Array} arr
 * @param {function} cb
 * @return {any} of arr
 */
function myFind(arr, cb) {
    let matchItem

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) matchItem = arr[i]
    }

    return matchItem
}

let find = myFind(arr, (item, index, arr) =>  item === 'fahim')

console.log(find)