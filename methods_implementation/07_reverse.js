console.clear()

//* reverse is a mutable method cause it's reverse the existing array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(arr.reverse())

/**
 * @title Implementation of reverse method
 * @param {Array<any>} array
 * @returns {Array<any>} reverse array of array
 */
function myReverse(array) {
    let fromEnd = array.length - 1,
        fromStart = 0,
        operation = parseInt(array.length / 2)

    while (operation--) {
        //* swap elements by destructuring array
        [array[fromEnd], array[fromStart]] = [array[fromStart], array[fromEnd]];

        fromEnd--, fromStart++
    }
    
    return array;
}
console.log(myReverse(arr))