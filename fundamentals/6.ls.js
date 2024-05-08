const fs = require('node:fs/promises')

fs.readdir('.', (err, files) => {
    if (err) {
        console.error(err);
    }
    files.forEach(file => {
        console.log(file)
    })
})

// or using promises
fs.readdir('./')
    .then(files => {
        files.forEach(file => {
            console.log(file)
        })
    })
    .catch(err => {
        if (err) {
            console.error(err)
            return;
        }
    })