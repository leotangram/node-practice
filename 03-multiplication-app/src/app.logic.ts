import { mkdirSync, writeFileSync } from 'fs'
import { yarg } from './config/plugins/args.plugin'

const { b: base, l: limit, s: displayTable } = yarg

let outputMessage = ''
const headerMessage = `
==================
   Table ${base}
==================\n
`

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`
}

outputMessage = headerMessage + outputMessage

if (displayTable) console.log(outputMessage)

const outputPath = `outputs`

mkdirSync(outputPath, { recursive: true })

try {
  writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage)
  console.log('File written successfully')
} catch (error) {
  console.error('An error occurred:', error)
}
