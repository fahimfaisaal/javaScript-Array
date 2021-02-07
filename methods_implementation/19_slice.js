console.clear()
//* slice method return a new array with your given index number

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sliceArr = arr.slice(0, 5)
console.log('Build in method ->', sliceArr)

/**
 * # Implementation of slice method
 * @param {Array<any>} arr
 * @param {number} start
 * @param {number} end
 * @return {Array<any>} new array
 */
function mySlice(arr, start = 0, end = arr.length) {
    let newArr = []

    for (let i = start; i < (end > arr.length ? arr.length : end); i++) 
        newArr.push(arr[i])
    
    return newArr
}

const sliceArr2 = mySlice(arr, 5, 10)
console.log('Implemented method ->', sliceArr2)

console.log('Existing array ->', arr) //* No change in main array cause it's immutable method
