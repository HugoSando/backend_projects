const express = require('express')
const ditto = require('./pokemon/ditto.json')

const port = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())
/* app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  let body = ''

  // listen to event data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = new Date().toISOString()
    // set req.body to the parsed data
    req.body = data
    next()
  })
}) */

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('Not found')
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})
