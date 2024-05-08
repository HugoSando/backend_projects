// entry arguments
console.log(process.argv)

// process control and exit
//process.exit(1)

// process events
process.on('exit', () => {
    // resource cleanup
    })

// current working directory
console.log(process.cwd())

// platform information
console.log(process.platform)

// environment variables
console.log(process.env.PEPITO)