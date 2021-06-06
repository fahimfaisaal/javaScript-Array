console.clear();

//* indexOf return the index of existing passing argument if it's not found it'll return -1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'fahim', 'faisal'];
const fahimIndex = arr.indexOf('fahim', 5);
console.log(fahimIndex);

/**
 * @title Implementation of indexOf
 * @param {Array<any>} arr
 * @param {any} item
 * @param {number} start index
 * @returns {number} index number of the item if not found then return -1
 */
function myIndexOf(arr, item, start = 0) {
    for (let i = start, len = arr.length; i < len; i++) {
        if (item === arr[i]) {
            return i;
        }
    }

    return -1;
};

const faisalIndex = myIndexOf(arr, 'faisal', 10);
console.log(faisalIndex);