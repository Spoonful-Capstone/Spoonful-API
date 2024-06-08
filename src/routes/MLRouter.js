const express = require('express')
const { recommendPlaceHandler } = require('../handlers/MLHandler')
const expressAsyncHandler = require('express-async-handler')

router = express.Router()

router.post('/recommend/place', recommendPlaceHandler)

module.exports = router