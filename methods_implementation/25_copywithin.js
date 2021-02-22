console.clear()

let arr = ['javaScript', 'python', 'Rust', 'c', 'c++', 'java', 'php']
let copyWithinArr = arr.copyWithin(-4, -7, -5)

console.log(copyWithinArr)

/**
 * @title Implementation of copyWithin method
 * @param {Array<any>} arr
 * @param {number} target
 * @param {number} start -> by default 0
 * @param {number} end -> by default arr.length - 1
 * @return arr
 */
function myCopyWithin(arr, target, start = 0, end = arr.length - 1) {
    const len = arr.length

    //* negative value validation
    target = target < 0 ? len + target : target
    start = start < 0 ? len + start : start
    end = end < 0 ? len + end : end

    let copyElements = []
    for (let i = start; i < end && i < len; i++) {
        copyElements.push(arr[i])
    }

    while (copyElements.length) {
        arr[target++] = copyElements.shift()
    }

    return arr
}

copyWithinArr = myCopyWithin(arr, 0, 5, 7)
console.log(copyWithinArr)