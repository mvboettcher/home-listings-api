const express = require('express')
const cors = require('cors')

const listings = require('./routes/listings')

const app = express()

app.use(cors())

// Mount routers
app.use('/api/listings', listings)

const PORT = 5000

const server = app.listen(
  PORT,
  console.log(`Server running on port ${PORT}...`)
)
