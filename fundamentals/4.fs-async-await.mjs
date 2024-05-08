// use promisify just for native modules that doesnt support promises
//const { promisify } = require('node.util')
//const readFilePromise = promisify(fs.readFile)  

import { readFile } from 'node:fs/promises' 

console.log('Reading file.txt asynchronously:')
const textAsync = await readFile('./file2.txt', 'utf-8')
console.log('File content:', textAsync)


console.log('Reading file.txt asynchronously 2:')
const text = await readFile('./file.txt', 'utf-8')
console.log('File content:', text)
