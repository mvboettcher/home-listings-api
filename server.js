const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')

dotenv.config({ path: './.env' })

const listings = require('./routes/listings')

const app = express()

app.use(cors())

app.use('/api/listings', listings)

const NODE_ENV = process.env.NODE_ENV || 'development'

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}...`)
)
