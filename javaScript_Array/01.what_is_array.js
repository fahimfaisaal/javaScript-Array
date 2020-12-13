console.clear()

//# In javaScript Array is an Object

//! How can we create an Array in javaScript?

/**
 * # Step-1 - Create an instance of an array
 * Array Literal Pattern-> []
 * Array Constructor Patter-> let arr = new Array()
 * Array Factory Patter-> let arr = Array()
 */

//* Array Literal
let arr = []

//* Array Constructor 
let arr2 = new Array()

//* Array Factory 
let arr3 = Array()

// console.log(arr, arr2, arr3)


/**
 * # Step-2 - Add Elements to Array
 * We can control an array with Index numbers & it's start from 0, like -->
 * arr[0], arr[1], arr[2]
 * Then we can assign a value in it
 */

arr[0] = 1
arr[1] = 2
arr[2] = 3

// console.log(arr)

//# Step-3 - Access an Array

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

let sum = 0

sum += arr[0]
sum += arr[1]
sum += arr[2]

// console.log(sum)

//* javaScript Array is a Dynamic Array, Mean ->
/**
 * Don't need to specify Array length but we can do this, with the array constructor
 * Dynamically increase and decrease array size
 * Don't need to collect garbage
 * Can store any kind of data
 */

//# specify length

let arr4 = new Array(5) //* Here we can use also Factory pattern -> Array(5)
// console.log(arr4)

arr4[0] = 1
arr4[1] = 2
arr4[2] = 3
arr4[3] = 4
arr4[4] = 5

// console.log(arr4)

//* But after declaration of array length we can also increase the array size 😁

arr4[5] = 6
arr4[6] = 7
arr4[7] = 8
arr4[8] = 9
arr4[9] = 10

// console.log(arr4)

//* We can store any kind of data in javaScript array

let anyThing = [true, 15, 'Fahim Faisal', function hello() { return 'hello' }, { name: 'Fahim Faisal' }, [1, 2, 3]]

// console.log(typeof anyThing[0])
// console.log(typeof anyThing[1])
// console.log(typeof anyThing[2])
// console.log(typeof anyThing[3])
// console.log(typeof anyThing[4])
// console.log(typeof anyThing[5])