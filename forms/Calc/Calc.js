
function calculate(n1,n2) {
  let sum= n1 + n2
  return sum
  }

let num1= parseInt(prompt("Type in a number:"))
let num2= parseInt(prompt("Type in a second number:"))

let summedNumbers= calculate(num1, num2)

console.log(`The sum of ${num1} and ${num2} is ${summedNumbers}`)
