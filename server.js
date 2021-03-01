const express = require('express')
const listings = require('./routes/listings')

const app = express()

// Mount routers
app.use('/api/listings', listings)

const PORT = 5000

const server = app.listen(
  PORT,
  console.log(`Server running on port ${PORT}...`)
)
