const dotenv = require('dotenv')
const jwt = require("jsonwebtoken");

dotenv.config()

function generateAccessToken(userId, email) {
    return jwt.sign({
        userId,
        email
    },
        process.env.ACCESS_TOKEN,
        { expiresIn: '10s' }
    )
}

module.exports = { generateAccessToken }