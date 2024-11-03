// Challenge 8: Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz"
// instead of the number and for the multiples of five print "Buzz". For numbers which are multiples
// of both three and five print "FizzBuzz".
// No need for permutations as there are no arguments to this function. Check the printed output.

function rangeArray() {
  let result = [];
  for (let index = 1; index < 100; index++) {
    if (index % 5 === 0 && index % 3 === 0) {
      result.push("FizzBuzz");
    } else if (index % 5 === 0) {
      result.push("Buzz");
    } else if (index % 3 === 0) {
      result.push("Fizz");
    } else {
      result.push(index);
    }
  }
  return result
}

console.log(rangeArray())