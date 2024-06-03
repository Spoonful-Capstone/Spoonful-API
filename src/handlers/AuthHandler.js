const { prisma } = require("../prisma")
const bcrypt = require('bcrypt')
const { generateAccessToken } = require("../utils/JWTUtils")

async function loginUserHandler(req, res) {
    const { email, password } = req.body

    if (email === null || email === '' || password === null || password === '') {
        res.status(400)
        return res.json({
            status: 'Failed',
            message: 'Email or password is not provided'
        })
    }

    const user = await prisma.user.findUnique({
        where: {
            email
        },
    })

    if (user === null) {
        res.status(404)
        return res.json({
            status: 'Failed',
            message: 'User is not found',
        })
    }

    let isPasswordSame = await bcrypt.compare(password, user.password)

    if (!isPasswordSame) {
        res.status(400)
        return res.json({
            status: 'Failed',
            message: 'Please insert correct credentials'
        })
    }

    const token = generateAccessToken(user.ID, user.email)

    const userData = {
        email: user.email,
        name: user.name,
        age: user.age,
        weight: user.weight
    }

    res.status(200)
    return res.json({
        status: 'Success',
        data: {
            user: userData,
            token
        }
    })
}

module.exports = { loginUserHandler }