const express = require('express')
const { recommendPlaceHandler } = require('../handlers/MLHandler')

const router = express.Router()

router.post('/recommend/place', recommendPlaceHandler)

module.exports = router