//! map method return a new array mean an immutable array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mapArr = arr.map((item, index, array) => {
    return item * 2
})

// console.log(mapArr)

/**
 * # Implementation of map method
 * @param {anyType} arr 
 * @param {function} callBack -> {
 * @argument {anyType} arr[i]
 * @argument {number} i
 * @argument {anyType} arr
 * }
 * @return {immutable Array}
 */
function myMap(arr, callBack) {
    const len = arr.length
    let newArr = []

    for (let i = 0; i < len; i++) {
        newArr.push(callBack(arr[i], i, arr))
    }

    return newArr
}

const mapArr2 = myMap(arr, item => {
    return item * 2
})
// console.log(mapArr2)

//* play with map & reduceRight 😁
const mapAndReduceRight = myMap(arr, (item, index, arr) => {
    return {
        numberSquare: item ** 2,
        index: index,
        invertedArray: arr.reduceRight((acc, item) => {
            acc.push(item)
            return acc
        }, [])
    }
})

console.log(mapAndReduceRight)