const express = require('express')
const { loginUserHandler, logoutUserHandler, } = require('../handlers/AuthHandler')

router = express.Router()

router.post('/login', loginUserHandler)
router.delete('/logout', logoutUserHandler)

module.exports = router