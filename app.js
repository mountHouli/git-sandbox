const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} -----------------------------`)
  next()
})

app.get('/master1', (req, res) => {
  res.status(200).send('master1')
})

app.get('/branch-a-1', (req, res) => {
  res.status(200).send('branch-a-1')
})

const port = 1337

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting server:', err)
    process.exit(1)
  }
  console.log(`App listening on port ${port}`)
})
