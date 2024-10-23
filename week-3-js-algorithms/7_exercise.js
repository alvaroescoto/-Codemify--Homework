function longerString(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else if (str1.length < str2.length) {
    return str2;
  } else {
    return "Both strings are of equal length"; // Extra - just for practice
  }
}

console.log(longerString("codemify", "test")); // codemify
console.log(longerString("automation", "coding")); // automation
console.log(longerString("automation", "the codemify")); // the codemify

// Extra - just for practice
console.log(longerString("codemify", "ssssssss")); // Both strings are of equal length
