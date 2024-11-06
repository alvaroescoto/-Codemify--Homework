

// Challenge 6: Factorial a Number
// Write a function that takes a number as an argument and returns the factorial of that number.



function factorial(n) {
    let result = 1; 

    for (let i = 1; i <= n; i++) {
        result = result * i; 
    }

    return result;
}
     
      




console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800