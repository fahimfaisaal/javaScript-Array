console.clear();

//* every method also return a boolean value but in this method if one item break the condition it's return false
const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 1, 1, 1, 1];

let every = arr.every(item => item === 1);
let every2 = arr2.every(item => item === 1);

console.log(every, every2);

/**
 * @title Implementation of every method
 * @param {Array<any>} arr
 * @function callback -> {
 * @argument {any} arr[i]
 * @argument {number} i
 * @argument {Array<any>} arr
 * }
 * @returns {boolean}
 */
function myEvery(arr, callback) {
    for (
        let i = 0, len = arr.length;
        i < len; i++
    ) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
}

every = myEvery(arr, item => item === 1);
every2 = myEvery(arr2, item => item === 1);
console.log(every, every2);