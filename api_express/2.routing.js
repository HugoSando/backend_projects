const http = require('node:http')

const dittoJSON = require('./pokemon/ditto.json')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404 // Not Found
          res.setHeader('Content-Type', 'text/plain')
          return res.end('404 Not Found')
      }

    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''

          // listen to event data
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            // call the database to save the data
            res.writeHead(201, { 'Content-Type': 'application/json' })

            data.timestamp = new Date().toISOString()
            res.end(JSON.stringify(data))
          })

          break
        }

        default:
          res.statusCode = 404 // Not Found
          res.setHeader('Content-Type', 'text/plain')
          return res.end('404 Not Found')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server started on http://localhost:${desiredPort}`)
})
