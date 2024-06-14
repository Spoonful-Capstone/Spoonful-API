const express = require('express')
const { getAllFoodHandler, getFoodByIdHandler } = require('../handlers/FoodHandler')
const { requireAuth } = require('../middlewares/AuthMiddleware')

router = express.Router()

router.get('/foods', getAllFoodHandler)
router.get('/food/:id', getFoodByIdHandler)

module.exports = router