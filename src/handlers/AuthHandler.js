const { prisma } = require("../prisma")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function loginUserHandler(req, res) {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (user === null) {
        return res.json({
            status: 'Failed',
            message: 'User is not found',
        })
    }

    let isPasswordSame = bcrypt.compare(password, user.password)

    if (!isPasswordSame) {
        return res.json({
            status: 'Failed',
            message: 'Please insert correct credentials'
        })
    }


    res.json({
        status: 'Success',
        data: {
            user
        }
    })
}

module.exports = { loginUserHandler }