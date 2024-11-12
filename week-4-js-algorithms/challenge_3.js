// Challenge 3: Find Strings with Dollar Sign
// Write a function to find all strings that include a $ sign in the array.

// function findDollarStrings(array) {
//   let result = [];
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element.includes("$")) {
//       result.push(element);
//     }
//   }
//   return result;
// }


// Highest order function !!!
function findDollarStrings(array) {
  return array.filter((element) => element.includes("$"));
}

console.log(findDollarStrings(["I", "have", "$10"]));

console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
console.log(findDollarStrings(["no", "dollars", "here"])); // []
