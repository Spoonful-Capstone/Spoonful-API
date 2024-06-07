const express = require('express')
const { registerUserHandler, editUserHandler } = require('../handlers/userHandler')

router = express.Router()

router.post('/user', registerUserHandler)
router.put('/user/:userId', editUserHandler)

module.exports = router