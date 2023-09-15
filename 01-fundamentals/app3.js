const fs = require('fs')

const content = fs.readFileSync('README.md', 'utf-8')

const wordCount = content.split(' ').length
const reactWordCount = content.split(/React/gi).length - 1

console.log('Words:', wordCount)
console.log('Reacts Words:', reactWordCount)
