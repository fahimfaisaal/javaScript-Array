console.clear()

//* reverse is a mutable method cause it's reverse the existing array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.reverse()
console.log(arr)

//* Implementation of reverse method
const arr2 = [11, 12, 13, 14, 15]
/**
 * @param {Array<any>} array
 * @return {Array<any>}
 */
function myReverse(array) {
    let tempArr = [];

    for (let i = array.length - 1; i >= 0; i--) tempArr.push(array[i]);
    
    for (let i = 0; i < tempArr.length; i++) {
        array[i] = tempArr[i]
    }

    return array;
}

myReverse(arr2)

console.log(arr2)
