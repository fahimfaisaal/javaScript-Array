console.clear();
//# Reduce is the one man army cause it's return what you want 😎

//* The main part of reduce function is accumulator / initializer -> it's return the initializer

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((accumulator, number) => {
    console.log(`${accumulator} + ${number} =`, accumulator + number);
    return accumulator + number;
}) //* By Default accumulator is arr[0]

console.log(sum);

//* return an array of object from two array
const names = ['fahim', 'faisal', 'shakil', 'turky', 'ashraful'];
const ages = [22, 24, 18, 25, 27];

const nameWithAge = names.reduce((arrOfObj, name, index) => {
   arrOfObj.push({
        name: name,
        age: ages[index]
   })
    
    return arrOfObj;
}, [])
console.log(nameWithAge);

//* Let's see, what is the most popular language 😁 - using reduce
const votes = [
    'javaScript',
    'python',
    'c',
    'java',
    'javaScript',
    'javaScript',
    'c',
    'python',
    'python',
    'javaScript',
    'java'
];

const modeOfVotes = votes.reduce((modeObj, lan) => {
    if (!modeObj[lan]) modeObj[lan] = 1;
    else modeObj[lan]++;

    return modeObj;
}, {})
console.log(modeOfVotes)

/**
 * @title Implementation of reduce method
 * @param {Array<any>} arr
 * @function callback -> {
 * @argument {any} initializer
 * @argument {any} arr[i]
 * @argument {number} i
 * @argument {Array<any>} @param arr
 * }
 * @param {any} initializer -> initializer by default arr[0]
 * @returns @param initializer
 */
function myReduce(arr, callBack, initializer = arr[0]) {
    for (
        let i = initializer === arr[0] ? 1 : 0,
        len = arr.length;
        i < len; i++
    ) {
        initializer = callBack(initializer, arr[i], i, arr);      
    }

    return initializer;
}

const sum2 = myReduce(arr, (acc, num) => {
    console.log(`${acc} + ${num} =`, acc + num);

    return acc + num;
})
console.log(sum2);

const nameWithAge2 = myReduce(names, (arrOfObj, name, index) => {
    arrOfObj.push({
        name: name,
        age: ages[index]
    });
    
    return arrOfObj;
}, [])
console.log(nameWithAge2);

const modeOfVotes2 = myReduce(votes, (modeObj, lan) => {
    if (!modeObj[lan]) modeObj[lan] = 1;
    else modeObj[lan]++;

    return modeObj;
}, {})
console.log(modeOfVotes2);