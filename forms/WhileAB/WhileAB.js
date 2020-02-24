
let firstName = prompt('Enter your first name.')
let lastName = prompt('Enter your last name.')
let name = firstName.concat(lastName)

let i=0
while (i < name.length){
  i++
  console.log(`Letter ${i} is: ${name[i-1]}`)
  }
