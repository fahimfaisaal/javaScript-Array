//! forEach method return nothing mean undefined and it's work with existing array element

console.clear()

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const arrayOfObjects = [
    { name: 'Fahim Faisal', age: 22, gmail: 'fahimfaisal.soikot@gmail.com' },
    { name: 'soikot', age: 23, gmail: 'soikot@gmail.com' },
    { name: 'Ashraful', age: 28, gmail: 'ashraful@gmail.com' },
    { name: 'Turky', age: 24, gmail: 'turky@gmail.com' },
    { name: 'Easin', age: 18, gmail: 'easinwebpro@gmail.com' },
    { name: 'Sourov Hossain', age: 22, gmail: 'sourovhossain@gmail.com' }
]

let sumOfValue = 0,
    sumOfIndex = 0,
    count = 0,
    condition

arr1.forEach((value, index, array) => {
    // console.log('Value ->', value, 'Index ->', index, 'Array ->', array)
    sumOfValue += value;
    sumOfIndex += index;

   !condition && array.forEach(item => {
        // console.log('inner array traversing, value ->', item)
       count++
       condition = 1 //* condition is controller of existing inner forEach method
   })
    
})

// console.log('Total sum of value is ->', sumOfValue)
// console.log('Total sum of index is ->', sumOfIndex)
// console.log('Inner array traversing count is ->', count)

let arrayOfNames = [],
    arrayOfAges = [],
    arrayOfGmail = []

arrayOfObjects.forEach(item => {
    arrayOfNames.push(item['name'])
    arrayOfAges.push(item['age'])
    arrayOfGmail.push(item['gmail'])
})

// console.log(arrayOfNames, arrayOfAges, arrayOfGmail)

sumOfValue = 0, sumOfIndex = 0, count = 0, condition = 0

/**
 * # Implementation of forEach method
 * @param {Array<anyType>} arr 
 * @param {function} callBack -> {
 * @argument {anyType} arr[i] 
 * @argument {number} i 
 * @argument {Array<anyType>} arr
 * }
 * @return {undefined}
 */
function myForEach(arr, callBack) {
    for (let i = 0; i < arr.length; i++)
        callBack(arr[i], i, arr)
}

/**
 * @argument {Array<anyType>} arr 
 * @argument {function} callBack -> {
 * @param {anyType} value
 * @param {number} index
 * @param {Array<anyType>} array
 * @return {undefined}
 * }
 */
myForEach(arr1, (value, index, array) => {
    // console.log('Value ->', value, 'Index ->', index, 'Array ->', array)
    
    sumOfValue += value;
    sumOfIndex += index;

    !condition && myForEach(array, value => {
        console.log('inner array traversing, value ->', value)
        count++
        condition = 1 //* condition is controller of existing inner myForEach function
    })
})
console.log('Total sum of value is ->', sumOfValue)
console.log('Total sum of index is ->', sumOfIndex)
console.log('Total count ->', count)