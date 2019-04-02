// function to calculate the square of the number
function square(x) {
     return x * x;
}
// creating the first array
let arr = [1, 4, 9];

// creating function map, which will take another function and array and will return new array with new values, which will appear after doing the function with array elements
function map(fn, array) {
    let arrayLength = array.length;     // create the variable with lemgth of the array
    let newArray = [];                  // create new array where we will write final data
    for (let i = 0; i < arrayLength; i++) {     // the circle to calculate the function for all array elements
        newArray[i] = fn(array[i]);             // and to write new values to new array
    }
    return newArray;                            // the function returns new array with new values
}
// writing the first new array with results of calculating square of first array elements
document.write(map(square, arr));       
// creating the function to calculate the cube
function cube(x) {
    return x * x * x;
}
// creating the second array for the cube function
let arr2 = [2, 4, 6, 8];
// writing the second new array with results of calculating cube of the second array elements
document.write('<br>' ,map(cube, arr2));
// creating the function to calculate the factorial
function factorial(x) {
    return x ? x * factorial(x - 1) : 1;
  }
// creating the third array for the factorial function
  let arr3 = [4, 6, 8, 10];

  // writing the third new array with results of calculating factorial of the third array elements
document.write('<br>' ,map(factorial, arr3));