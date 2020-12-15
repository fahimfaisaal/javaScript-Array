//* we can traverse an array by using loop

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//# Traverse by for loop
for (let i = 0; i < arr.length; i++) {
    // console.log(`Value -> ${arr[i]} Index -> ${i} Array -> ${arr}`)
}

//# Traverse by for in loop
for (let index in arr) {
    // console.log(`Value -> ${arr[index]} Index -> ${index} Array -> ${arr}`)
}

//# Traverse by for of loop
for (let value of arr) {
    // console.log(value)
}

//# Traverse by while loop
let index = 0,
    length = arr.length;

while (length--) {
    // console.log(`Value -> ${arr[index]} Index -> ${index++} Array -> ${arr}`)
}

//# Traverse by do while loop
let k = 0;

do {
    // console.log(`Value -> ${arr[k]} Index -> ${k++} Array -> ${arr}`)
} while (k < arr.length)