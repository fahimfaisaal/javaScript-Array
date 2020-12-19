console.clear()

//* Array of numbers
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//* Array of strings
const arrNames = ['Fahim', 'Faisal', 'Soikot', 'Shakil', 'Turky']

//* Array of arrays
const arrArray = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

//* Array of objects
const arrObject = [
    {
        name: 'Fahim Faisal',
        age: 22,
        gmail: 'mdsoikot678@gmail.com'
    },
    {
        name: 'Shakil Hossain',
        age: 17,
        gmail: 'shakil@gmail.com'
    },
    {
        name: 'Abdullah Turky',
        age: 24,
        gmail: 'abdullahturky@gmail.com'
    }
]

//* Array of functions
function sum(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

const arrFunction = [sum, sub, mul, div]