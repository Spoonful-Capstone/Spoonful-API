const express = require('express')
const { getAllFoodHandler, getFoodByIdHandler } = require('../handlers/FoodHandler')

router = express.Router()

router.get('/foods', getAllFoodHandler)
router.get('/food/:id', getFoodByIdHandler)

module.exports = router