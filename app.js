// Include express to this project
const express = require('express')
const app = express()

// Define server variables
const port = 3000

// Set routes
app.get('/', (req, res) => {
  res.send(`<h1>This is my restaurant list.</h1>`)
})

// Listen to the server
app.listen(port, () => {
  console.log(`Express is now listening to localhost:${port}`)
})