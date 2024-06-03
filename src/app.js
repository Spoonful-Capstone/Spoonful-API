const express = require('express')
const { loginUserHandler } = require('./handlers/AuthHandler')
const { userMustAuthMiddleware } = require('./middlewares/AuthMiddleware')

const app = express()
const router = express.Router({ mergeParams: true })
const userRouter = require('./routes/UserRouter')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

app.get('/', userMustAuthMiddleware, (req, res) => {
    let cookie = req.cookies.coba ?? 'tidak ada isinya'
    res.json({ "data": cookie })
})


app.use(userRouter)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    const serverUrl = `http://localhost:${PORT}`;
    console.log(`Server URL: ${serverUrl}`);
})