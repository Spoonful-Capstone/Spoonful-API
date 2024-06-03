const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config()

function userMustAuthMiddleware(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).json({
            status: 'Failed',
            message: 'Authorization header is missing'
        });
    }

    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        res.json({
            status: 'Failed',
            message: 'User is not authenticated'
        })
    }
    try {
        jwt.verify(token, process.env.ACCESS_TOKEN)
        return next()
    } catch (err) {
        res.status(401)
        return res.json({
            status: 'Failed',
            message: 'User is not authenticated'
        })
    }
}


module.exports = { userMustAuthMiddleware }