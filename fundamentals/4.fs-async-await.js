const { readFile } = require('node:fs/promises')

// IIFE(Immediately Invoked Function Expression) to use async/await
;(async () => {
    console.log('Reading file.txt asynchronously:')
    const textAsync = await readFile('./file2.txt', 'utf-8')
    console.log('File content:', textAsync)
    
    
    console.log('Reading file.txt asynchronously 2:')
    const text = await readFile('./file.txt', 'utf-8')
    console.log('File content:', text)
})()