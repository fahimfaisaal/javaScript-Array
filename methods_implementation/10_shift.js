console.clear()

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let fistElement = arr.shift()
console.log('Built in method ->', fistElement, arr)

/**
 * # implementation of shift method
 * @param {Array<any>} arr
 * @return {any} first element of the existing arr
 */
function myShift(arr) {
    let shift = arr[0]

    for (let i = 1, j = 0; i < arr.length; i++, j++) arr[j] = arr[i]
    
    arr.length -= 1

    return shift
}

firstElement = myShift(arr)
console.log('Implemented method ->', firstElement, arr)