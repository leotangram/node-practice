const fs = require('fs')

console.clear()

const base = 3
let exit = ''

console.log('====================')
console.log(`Table ${base}`)
console.log('====================')

for (let index = 1; index <= 10; index++) {
  exit += `${base} * ${index} = ${base * index}\n`
}

console.log(exit)

fs.writeFile(`table-${base}.txt`, exit, error => {
  if (error) throw error

  console.log(`table-${base}.txt created!`)
})
