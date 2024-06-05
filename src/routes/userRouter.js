const express = require('express')
const { registerUserHandler, editUserHandler } = require('../handlers/userHandler')

router = express.Router()

router.post('/addUser', registerUserHandler)
router.put('/user/:id', editUserHandler)

module.exports = router