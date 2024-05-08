const fs = require('node:fs') 

const stats = fs.statSync('./file.txt')

console.log(
    'File size:', stats.size, 'bytes',
    'Last modified:', stats.mtime,
    'Last accessed:', stats.atime,
    'Created:', stats.birthtime,
    'Is file:', stats.isFile(),
    'Is directory:', stats.isDirectory(),
    'Is symbolic link:', stats.isSymbolicLink(),
    'Is FIFO:', stats.isFIFO(),
    'Is socket:', stats.isSocket(),
    'Is block device:', stats.isBlockDevice(),
    'Is character device:', stats.isCharacterDevice()
)