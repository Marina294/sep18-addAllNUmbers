// Create a function that takes a number as an argument. 
// Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.


// var array = [1, 2, 3, 4, 5];
    
// // Getting sum of numbers
// var sum = array.reduce(function(a, b){
//     return a + b;
// }, 0);

// console.log(sum); // Prints: 15

// var numbers = [10, 20, 30, 40] // sums to 100
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }

// function addAllNumbers (i) {
//     let num = 0;
//     for (let i = 0; i <= addAllNumbers.length; i++)
//     {
//         num += addAllNumbers[i];
    
//         console.log(num);

//     }
// }

// addAllNumbers = function(arr){
//     return arr.reduce(function(a,b){
//       return a + b
//     }, 0);
//   }

// let sum: number = 0;
// itemArray.forEach(a => sum += a.value);
// console.log(sum);

// function sum(arr) {    
//     let sum = 0;
//     for (let index = 0; index <= arr.length; index++) {
//       sum += arr[index];
//     }    
//     return sum;
//   }

// function addAllNumbers(ary){
//     return ary.reduce(function(sum, value) {
//         return sum + value;
//     });
// }

// let sum = 0;
// for (var i = 1; i <= 600; i++) {
//    sum = sum + i;
// }
// console.log("Sum = " + sum);

// const addAllNumbers = function(i) {
// let sum = 0;
// for (let i = 1; i <= 600; i++) {
//    sum = sum + i;
// }
// console.log("Sum = " + sum);
// }

// function addAllNumbers(i) {
//     let sum = 0;
//     for (let i = 1; i <= 600; i++) {
//     sum = sum + 1;
//     }
//     console.log(sum);
//     }

const addAllNumbers = function(arr) {
    let sum = 0;
    for (i = 1; i <= arr; i++) {
        sum += i;
    }
    return sum;
};

console.log(addAllNumbers(600));

// answer should be 180300