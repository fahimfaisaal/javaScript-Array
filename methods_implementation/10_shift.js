console.clear();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let fistElement = arr.shift();
console.log('Built in method ->', fistElement, arr);

/**
 * @title implementation of shift method
 * @param {Array<any>} arr
 * @returns {any} first element of the @param arr
 */
function myShift(arr) {
    const firstElement = arr[0];

    for (
        let i = 0, len = arr.length - 1;
        i < len; i++
    ) {
        arr[i] = arr[i + 1];
    }
    
    arr.length--;

    return firstElement;
}

firstElement = myShift(arr);
console.log('Implemented method ->', firstElement, arr);