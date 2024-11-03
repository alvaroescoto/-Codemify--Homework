


// Challenge 9: Find the Longest Word in a String
// Write a function that returns the length of the longest word in the provided sentence.

function findLongestWord(phrase){
    let result = ''
    let phraseDivision = phrase.split(' ')
    
    for (let index = 0; index < phraseDivision.length; index++) {
        if (phraseDivision[index].length > result.length)
            result = phraseDivision[index]
        
    }  
    return result.length
}




console.log(findLongestWord('The quick brown fox')); // 5
console.log(findLongestWord('Hello world')); // 5
console.log(findLongestWord('')); // 0
console.log(findLongestWord('OneWord')); // 7