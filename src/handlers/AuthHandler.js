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

    // const rf_token = await prisma.refresh_session.upsert({
    //     update: {
    //         user: {
    //             connect: {
    //                 ID: user.ID
    //             }
    //         }
    //     },
    //     create: {
    //         user: {
    //             connect: {
    //                 ID: user.ID
    //             }
    //         }
    //     },
    //     where: {
    //         userId: user.ID
    //     }
    // })

    const token = generateAccessToken(user.ID, user.email)
    // const refresh_token = generateRefreshToken(rf_token.ID)

    const userData = {
        email: user.email,
        name: user.name,
        age: user.age,
        weight: user.weight
    }

    res.status(200)
    res.cookie('access_token', token, { maxAge: 30000 })
    // res.cookie('refresh_token', refresh_token, { maxAge: 600000 })
    return res.json({
        status: 'Success',
        data: {
            user: userData,
            token
        }
    })
}

async function logoutUserHandler(req, res) {
    // await prisma.refresh_session.delete({
    //     where: {
    //         user: {
    //             ID: req.user.ID
    //         }
    //     }
    // })
    res.clearCookie('access_token')
    return res.json({
        status: 'Success',
        message: 'Logout successful'
    })
}

module.exports = { loginUserHandler, logoutUserHandler }