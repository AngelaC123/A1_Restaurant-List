// Include express to this project
const express = require('express')
const app = express()

// Define server variables
const port = 3000

// Require template engine: handlebars
const exphbs = require('express-handlebars')

const restaurantList = require('./restaurant.json')


// Set template enegine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Set static files
app.use(express.static('public'))

// Set routes
app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurantList.results })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurantShow = restaurantList.results.find((restaurant) => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurantShow: restaurantShow })
})



// Listen to the server
app.listen(port, () => {
  console.log(`Express is now listening to localhost:${port}`)
})
