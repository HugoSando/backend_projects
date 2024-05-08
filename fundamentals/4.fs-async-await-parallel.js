const { readFile } = require('node:fs/promises')

// Parallel reading of files
Promise.all([
    readFile('./file2.txt', 'utf-8'),
    readFile('./file.txt', 'utf-8'),
]).then(([text2, text]) => {
    console.log('File 2 content:', text2)
    console.log('File content:', text)
})