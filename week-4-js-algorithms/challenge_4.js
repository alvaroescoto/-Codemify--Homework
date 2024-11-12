// // Challenge 4: Find Numbers Greater than Ten
// // Write a function to find all numbers that are larger than 10 in the array.

// // function findNumbersGreaterThanTen(array) {
// //   let result = [];
// //   for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
// //     if (element > 10) 
// //       result.push(element);
// //   }
// //   return result;
// // }

// // console.log(findNumbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
// // console.log(findNumbersGreaterThanTen([1, 2, 3, 4, 5])); // []
// // console.log(findNumbersGreaterThanTen([10, 20, 30, 40, 50])); // [20, 30, 40, 50]



// function findNumbersGreaterThanTen(array) {
//   let result = [];
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     array.filter(element => element > 10)
//       result.push(element);
//   }
//   return result;
// }


// Highest order function !!!
function findNumbersGreaterThanTen (array){

    return array.filter (element => element > 10)
    

}



console.log(findNumbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
 console.log(findNumbersGreaterThanTen([1, 2, 3, 4, 5])); // []
console.log(findNumbersGreaterThanTen([10, 20, 30, 40, 50])); // [20, 30, 40, 50]

