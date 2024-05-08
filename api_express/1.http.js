const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.end('Welcome to the home page reloaded')
  } else if (req.url === '/about') {
    res.statusCode = 200 // OK
    res.end('About page')
  } else if (req.url === '/contact') {
    res.statusCode = 200 // OK
    res.end('Contact page')
  } else if (req.url === '/image-socrates.png') {
    res.statusCode = 200 // OK
    fs.readFile('./SOCRATES.png', (err, data) => {
      if (err) {
        res.statusCode = 500 // Internal Server Error
        res.end('Internal Server Error')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404 // Not Found
    res.end('404 Not Found')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server started on http://localhost:${desiredPort}`)
})
