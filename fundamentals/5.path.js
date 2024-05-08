const path = require('node:path')

// use path.sep to get the correct separator for the current platform
console.log(path.sep) // could be / or \


// use path.join to concatenate paths
const filePath = path.join('folder', 'subfolder', 'file.txt')
console.log(filePath) // folder/subfolder/file.txt

const base = path.basename(filePath)
console.log(base) // file.txt

const filename = path.basename(filePath, '.txt')
console.log(filename) // file

const extension = path.extname(filePath)
console.log(extension) // .txt

const filename2 = path.basename(filePath, extension)
console.log(filename2) // file

