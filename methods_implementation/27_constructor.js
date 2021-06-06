console.clear();

//* it's return a new array from existing array and it's an unique array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const constructArray = arr.constructor(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(arr === constructArray);

/**
 * @param {any<Array>} arr
 * @returns {any<Array>}
 */
function myConstructor(...arr) {
    return [...arr];
}

const constructArray2 = constructArray.constructor(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(constructArray === constructArray2);