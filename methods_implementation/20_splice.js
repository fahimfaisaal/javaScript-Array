console.clear()

let arr = [1, 21, 22, 4, 5, 6, 23, 24, 25, 10, 11, 12, 13, 14, 15]
let spliceArr = arr.splice(1, 2, 2, 3)
console.log(arr, spliceArr)

/**
 * @param {Array} arr
 * @param {number} start
 * @param {number} remove
 * @param {any} push
 * @return {Array} deleted items
 */
function mySplice(arr, start = arr.length, remove = arr.length - start, ...push) {
    let deleteItems = new Array()

    //* Delete operation
    for (let i = start, j = 0; i < start + remove; i++) {
        deleteItems.push(arr[i])
        delete arr[i]
        arr[i] = push[j++]
    }

    //* separate remain element of arr
    let partition = new Array()
    for (let j = start + remove; j < arr.length; j++) 
        partition.push(arr[j])
    
    arr.length -= (partition.length + remove)

    //* concat two arrays
    const pushAndPartition = push.concat(partition)
    for (let i = 0; i < pushAndPartition.length; i++) 
        arr.push(pushAndPartition[i])
    
    return deleteItems        
}

const spliceArr2 = mySplice(arr, 6, 3, 7, 8, 9)
console.log(arr, spliceArr2)