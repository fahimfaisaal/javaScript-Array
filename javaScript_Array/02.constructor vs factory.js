console.clear()

//* Constructor Pattern
const constructorArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) //* It's same to [] literal
console.log(constructorArray, constructorArray.length)

//* for define length
const constructorArray2 = new Array(10)
console.log(constructorArray2, constructorArray2.length)

//* Factory Pattern
const factoryArray = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) //* it's also same to [] literal
console.log(factoryArray)

const factoryArray2 = Array(10)
console.log(factoryArray2, factoryArray2.length)

//* Prototype are same
console.log(constructorArray.__proto__.constructor)
console.log(constructorArray.__proto__.constructor)
