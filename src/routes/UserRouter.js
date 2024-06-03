const express = require('express')
const { loginUserHandler } = require('../handlers/AuthHandler')

router = express.Router()

router.post('/login', loginUserHandler)

module.exports = router