// Challenge 2: Find the Largest Number
// Write a function to find the largest number in the array.

// function findLargestNumber(array) {
//   let largest = -Infinity;
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element > largest) {
//       largest = element;
//     }
//   }
//   return largest;
// }


// Highest order function !!!
function findLargestNumber(array){
  const largestNumber = array.reduce((largest,current) => {
    return current > largest ? current : largest;
  },-Infinity)
  return largestNumber
}



console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1
