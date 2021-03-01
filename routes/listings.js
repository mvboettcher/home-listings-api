const express = require('express')
const { getListings } = require('../controllers/listings')

const router = express.Router()

router.route('/').get(getListings)

module.exports = router
