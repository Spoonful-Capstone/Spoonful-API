const express = require('express')
const { loginUserHandler, logoutUserHandler, } = require('../handlers/AuthHandler')
const { registerUserHandler, editUserHandler, getSpesificUserHandler } = require('../handlers/UserHandler')

router = express.Router()

router.post('/login', loginUserHandler)
router.delete('/logout', logoutUserHandler)

router.get('/user/:userId', getSpesificUserHandler);
router.post('/user',registerUserHandler)
router.put('/user/:userId', editUserHandler);

module.exports = router