const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config()

function userMustAuthMiddleware(req, res, next) {
    const token = req.headers.authorization.split(' ')[1]

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN)
        return next()
    } catch (err) {
        res.json({
            status: 'Failed',
            message: 'User is not authenticated'
        })
    }
}


module.exports = { userMustAuthMiddleware }