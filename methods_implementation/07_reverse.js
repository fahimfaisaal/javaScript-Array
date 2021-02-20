console.clear()

//* reverse is a mutable method cause it's reverse the existing array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(arr.reverse())

/**
 * # Implementation of reverse method
 * @param {Array<any>} array
 * @return {Array<any>} reverse array of array
 */
function myReverse(array) {
    let fromEnd = array.length - 1,
        fromStart = 0,
        operation = Math.floor(array.length / 2)

    while (operation--) {
        let swap = array[fromStart];
        array[fromStart] = array[fromEnd];
        array[fromEnd] = swap;

        fromEnd--, fromStart++
    }
    
    return array;
}
console.log(myReverse(arr))