const fs = require('node:fs') 

console.log('Reading file.txt asynchronously:')
const textAsync = fs.readFile('./file2.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('File content:', data)
}   )

console.log('Reading file.txt synchronously:')
const text = fs.readFileSync('./file.txt', 'utf-8')
console.log('File content:', text)
