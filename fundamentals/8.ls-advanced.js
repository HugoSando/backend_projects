const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

// get the folder from the command line
const folder = process.argv[2] || '.'

async function ls (folder) {
  // get all the files in the folder
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(`${pc.red(`Error reading directory: ${folder}`)}`)
    process.exit(1)
  }

  // get information about each file
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath) // get file information
    } catch {
      console.error(`Error reading file: ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory() ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${isDirectory} ${pc.blue(file.padEnd(20))} - ${pc.green(fileSize.padStart(10))} bytes, modified on ${pc.yellow(fileModified)}`
  })

  // print the information
  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
