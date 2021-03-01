const fs = require('fs')

// @desc      Get all listings
// @route     GET /api/listings
exports.getListings = (req, res, next) => {
  const dataPath = './data/homeListings.json'

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err
    }

    res.send(JSON.parse(data))
  })
}
