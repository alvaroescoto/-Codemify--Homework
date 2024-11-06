// Write a function that checks whether a passed string is a palindrome or not.
// A palindrome is a word, phrase, number, or other sequences of characters that reads the same backward or forward.

function palindrome(word) {
  let result = [];

  for (let i = word.length - 1; i >= 0; i--) {
    result = result + word[i];
  }
  if (word === result) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("racecar")); // true;
console.log(palindrome("hello")); // false
console.log(palindrome("a")); // true
console.log(palindrome("madam")); // true
