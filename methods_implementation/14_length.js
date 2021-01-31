console.clear()

//* length the most used property in javaScript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(arr.length)

/**
 * # Implementation of length property as a function
 * @param {any} arr 
 */
function myLength(arr) {
    for (let length = 0; length < Infinity; length++)
        if (arr[length] === undefined) return length;
}
console.log(myLength(arr))