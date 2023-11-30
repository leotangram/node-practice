const { mkdirSync, writeFileSync } = require('fs')

let outputMessage = ''
const base = 5
const headerMessage = `
==================
   Table ${base}
==================\n
`

for (let i = 1; i <= 10; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`
}

outputMessage = headerMessage + outputMessage

console.log(outputMessage)

const outputPath = `outputs`

mkdirSync(outputPath, { recursive: true })

writeFileSync(
  `${outputPath}/table-${base}.txt`,
  outputMessage,
  (error: any) => {
    if (error) throw error
  }
)
