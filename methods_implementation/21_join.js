console.clear()

//* join method return a new string concatenated with passing string
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let joinArr = arr.join('-')
console.log(joinArr, arr)

/**
 * # Implementation of join method
 * @param {Array<any>} arr
 * @param {string} str
 * @return {string}
 */
function myJoin(arr, str) {
    let string = ''

    for (let i = 0; i < arr.length; i++)
        string += (arr[i] + (i !== arr.length - 1 ? str : ''))
    
    return string
}

let myJoinArr = myJoin(arr, ' |__| ')
console.log(myJoinArr, arr)