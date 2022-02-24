// Include express to this project
const express = require('express')
const app = express()

// Define server variables
const port = 3000

// Require template engine: handlebars
const exphbs = require('express-handlebars')

// Set template enegine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Set static files
app.use(express.static('public'))

// Set routes
app.get('/', (req, res) => {
  res.render('index')
})

// Listen to the server
app.listen(port, () => {
  console.log(`Express is now listening to localhost:${port}`)
})