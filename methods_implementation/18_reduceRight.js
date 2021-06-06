console.clear();
//# reduceRight is the reverse version of reduce method

const arr = [1, 2, 3, 4, 5];

const sumReverse = arr.reduceRight((acc, number) => {
    console.log(`${acc} + ${number} =`, acc + number);
    return acc + number;
}) //* by default accumulator / initializer is arr[arr.length - 1]
console.log('reverse sum =', sumReverse);

const names = ['fahim', 'faisal', 'shakil', 'turky', 'ashraful'];
const ages = [22, 24, 18, 25, 27];

const nameWithAge = names.reduceRight((arrOfObj, name, index) => {
   arrOfObj.push({
        name: name,
        age: ages[index]
    })
    return arrOfObj;
}, [])
console.log(nameWithAge);

//* reverse + reduce = reduceRight 😁

/**
 * @title Implementation of reduceRight method
 * @param {Array<any>} arr
 * @function callback -> {
 * @argument {any} initializer
 * @argument {any} arr[i]
 * @argument {number} i
 * @argument {Array<any>} @param arr
 * }
 * @param {any} initializer -> initializer by default arr[arr.length - 1]
 * @returns @param initializer
 */
function myReduceRight(arr, callBack, initializer = arr.reverse()[0]) {
    const len = arr.length,
        reverseArr = [...arr].reverse();

    for (
        let i = initializer === arr[0] ? 1 : 0;
        i < len; i++
    ) {
        initializer = callBack(initializer, arr[i], i, reverseArr);        
    }        

    return initializer;
}

const sum2 = myReduceRight(arr, (acc, number) => {
    console.log(`${acc} + ${number} =`, acc + number);
    return acc + number;
})
console.log('reverse sum2 =', sum2)

const nameWithAge2 = names.reduceRight((arrOfObj, name, index) => {
   arrOfObj.push({
        name: name,
        age: ages[index]
    })
    return arrOfObj;
}, [])
console.log(nameWithAge2);