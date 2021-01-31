//! Remember That concat method is immutable mean it's return us a new array
console.clear()

//* concat Array
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]
const arr3 = [11, 12, 13, 14, 15]

//* concat with concat Method
const arr4 = arr1.concat(arr2)
// console.log(arr4)

//* concat with spread operator in ES6
const arr5 = [...arr1, ...arr2]
// console.log(arr5)

//# concat an array with concat method by using empty array
const arr6 = [].concat(arr1, arr2, 11, 12)
console.log(arr6)

//! Implementation of Concat Method
/**
 * # use rest & spread operator
 * @param {Array} arr
 * @param {anyType} anyType
 * @return {New immutable array: newArray}
 */
function myConcat(arr, ...anyType) {
    
    let newArray = [...arr]

    for (let i in anyType) {
        //* if anyTypes element are object
        if (typeof anyType[i] == 'object') {
            for (let j in anyType[i])
                newArray.push(anyType[i][j])
        //* if anyTypes element are primitive
        } else newArray.push(anyType[i])
    }

    return newArray
}

const arr7 = myConcat(arr1, arr2, arr3, 17, '17', true, myConcat2, {name: 'fahim faisal'})
// console.log('New immutable Array =', arr7, 'input Arrays = ', arr1, arr2, arr3)

/**
 * # use arguments property
 * @arguments {anything}
 * @return {New immutable array: newArr}
 */
function myConcat2() {
    let newArr = []

    for (let i in arguments) {
        //* if arguments element are object
        if (typeof arguments[i] == 'object') {
            for (let j in arguments[i]) {
                newArr.push(arguments[i][j])
            }
        //* if arguments element are primitive
        } else newArr.push(arguments[i])        
    }

    return newArr
}

const arr8 = myConcat2(arr1, arr2, arr3, 16, '17', true, myConcat, { name: 'Fahim Faisal'})
// console.log('New immutable Array =', arr8, 'input Arrays = ', arr1, arr2, arr3)