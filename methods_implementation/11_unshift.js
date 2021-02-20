console.clear()

//* unshift method return the length of existing array after replacement
const arr = [16, 17, 18, 19, 20]

const arrUnshift = arr.unshift(11, 12, 13, 14, 15)
console.log('Built in method ->', arrUnshift, arr)

/**
 * # Implementation of unshift method
 * @param {Array<any>} arr
 * @param {any}
 * @return existing length of param arr
 */
function myUnshift(arr, ...any) {
    const len = any.length,
        operation = arr.length >= len ? arr.length : len,
        flag = [...arr] //* Also can use Array.from(arr)
    
    for (let i = 0; i < operation; i++) {        
        if (i < flag.length) {
            arr[i + len] = flag[i]
        }

        if (i < len) {
            arr[i] = any[i]
        }
    }

    return arr.length;
}

const arrUnshift2 = myUnshift(arr, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log('Implemented method ->', arrUnshift2, arr)