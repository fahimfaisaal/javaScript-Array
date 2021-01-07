console.clear()

//* length the most used property in javaScript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'fahim']
console.log(arr.length)

//* Implementation of length property as a function
/**
 * @param {any} arr 
 */
function myLength(arr) {
    let count = 0;

    for (let i = 0; i < Infinity; i++) {
        if (arr[i] === undefined) break
        count++
    }

    return count
}

console.log(myLength(arr))