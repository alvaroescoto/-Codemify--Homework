


function isBiggerThan5(number) {
    if(number > 5){
      return true
    }
    else{
      return false // my code
    }
  }
  
  console.log(isBiggerThan5(6)) // true
  console.log(isBiggerThan5(5)) // false
  console.log(isBiggerThan5(4)) // false
  console.log(isBiggerThan5(1)) // false

  // Extra - just for practice
  const result = isBiggerThan5
  console.log(result(10))