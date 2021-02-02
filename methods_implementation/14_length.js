console.clear()

//* length the most used property in javaScript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(arr.length)

/**
 * # Implementation of length property as a function [using for loop]
 * @param {any} arr 
 */
function myLength(arr) {
    for (let length = 0; length < Infinity; length++)
        if (arr[length] === undefined) return length;
}

/**
 * # Implementation of length property as a function [using while loop]
 * @param {any} arr 
 */
function myLength2(arr) {
    let length = 0
    
    while (arr[length] !== undefined) length++;

    return length
}

console.log('With for loop ->', myLength(arr))
console.log('With while loop ->', myLength2(arr))