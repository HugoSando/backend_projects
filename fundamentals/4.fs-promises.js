// use promisify just for native modules that doesnt support promises
//const { promisify } = require('node.util')
//const readFilePromise = promisify(fs.readFile)  

const fs = require('node:fs/promises') 

console.log('Reading file.txt asynchronously:')
const textAsync = fs.readFile('./file2.txt', 'utf-8')
    .then(data => console.log('File content:', data))


console.log('Reading file.txt asynchronously 2:')
const text = fs.readFile('./file.txt', 'utf-8').then(data =>
    console.log('File content:', data)  )
