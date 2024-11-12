


// Challenge 7: Convert Numbers to Strings
// Write a function that converts all numbers to strings.

// function convertNumbersToStrings (array){
//     result = []
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         result.push (element.toString())
        
//     }
//     return result

// }

function convertNumbersToStrings(array) {
    return array.map(current => current.toString());
}



console.log(convertNumbersToStrings([1, 2, 3, 4, 5])); // ["1", "2", "3", "4", "5"]
console.log(convertNumbersToStrings([10, 20, 30, 40, 50])); // ["10", "20", "30", "40", "50"]
console.log(convertNumbersToStrings([-1, -2, -3, -4, -5])); // ["-1", "-2", "-3", "-4", "-5"]