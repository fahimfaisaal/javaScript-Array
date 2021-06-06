console.clear();

const arrArray = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    21,
    22
];

const flatArr = arrArray.flat();
console.log('Built in Method ->', flatArr);

/**
 * @title Implementation of flat method
 * @param {Array <anyType>} arr
 * @returns {new Array}
 */
function myFlat(arr) {
    const newArr = [];

    function pushItem(arr) {
        for (let i in arr) {
            if (Array.isArray(arr[i])) {
                pushItem(arr[i]);
            }

            else newArr.push(arr[i]);
        }
    }
    
    pushItem(arr);

    return newArr;
}

const myFlatArr = myFlat(arrArray);
console.log('Implemented Method ->', myFlatArr);