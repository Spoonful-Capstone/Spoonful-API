const express = require('express')
const { registerUserHandler, editUserHandler } = require('../handlers/UserHandler')
const { loginUserHandler, logoutUserHandler } = require('../handlers/AuthHandler')
const { requireAuth, revokeAuth } = require('../middlewares/AuthMiddleware')

router = express.Router()

router.post('/login', loginUserHandler)
router.post('/logout', logoutUserHandler)
router.post('/user', registerUserHandler)
router.put('/user/:userId', requireAuth, revokeAuth, editUserHandler)

module.exports = router