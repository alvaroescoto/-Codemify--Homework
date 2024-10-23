

function compareAge(name, age) {
  const myAge = 42;
  if (age > myAge) {
    return `${name} is older than me` 
  } else {
    return `${name} is younger than me`;
  }
}

console.log(compareAge("Joel", 43)); //  "Joel is older than me."
console.log(compareAge("Samuel", 24)); //"Samuel is younger than me"
console.log(compareAge("Lilly", 28)); //  "Lily is oder than me."


