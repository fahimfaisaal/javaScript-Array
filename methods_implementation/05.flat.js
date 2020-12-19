console.clear();

const arrArray = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    21,
    22
]

const flatArr = arrArray.flat()
console.log('Built in Method ->', flatArr)


//# Implementation of flat method
/**
 * @param {Array <anyType>} arr
 * @return {new Array}
 */
function myFlat(arr) {
    let newArr = []
    
    for (let i in arr) {
        if (typeof arr[i] != 'object') {
            newArr.push(arr[i])
        } else for (let j in arr[i]) {
                newArr.push(arr[i][j])
            }
    }

    return newArr
}

const myFlatArr = myFlat(arrArray)
console.log('Implementation Method ->', myFlatArr)