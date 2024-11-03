// Challenge 5: Sum of Numbers
// Write a function to find the sum of all numbers in the array.

function sumNumbers(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum + element;
  }
  return sum;
}

console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
console.log(sumNumbers([10, 20, 30, 40, 50])); // 150
console.log(sumNumbers([-1, -2, -3, -4, -5])); // -15
