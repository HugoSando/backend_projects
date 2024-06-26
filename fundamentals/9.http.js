const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const server = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hello, World!')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
  })
})
