const express = require('express')
const { loginUserHandler } = require('./handlers/AuthHandler')
const { userMustAuthMiddleware } = require('./middlewares/AuthMiddleware')

const app = express()
const router = express.Router({ mergeParams: true })
const userRouter = require('./routes/UserRouter')

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ "data": "hello world" })
})


app.use(userRouter)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    const serverUrl = `http://localhost:${PORT}`;
    console.log(`Server URL: ${serverUrl}`);
})