const express = require('express')
const { recommendPlaceHandler, recommendFoodHandler } = require('../handlers/MLHandler')

router = express.Router()

router.post('/recommend/place', recommendPlaceHandler)
router.post('/recommend/food', recommendFoodHandler)

module.exports = router