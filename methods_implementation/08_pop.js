console.clear();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let lastElement = arr.pop();

console.log(lastElement, arr);

/**
 * @title Implementation of pop method
 * @param {any} arr
 * @returns {any} last element of arr
 */
function myPop(arr) {
    const lastElement = arr[arr.length - 1];

    arr.length--;

    return lastElement;
}

lastElement = myPop(arr);
console.log(lastElement, arr);