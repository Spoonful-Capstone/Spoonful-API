const express = require('express')
const { requireAuth, revokeAuth } = require('./middlewares/AuthMiddleware')

const app = express()
// const UserRouter = require('./routes/UserRouter')
const UserRouter = require('./routes/UserRouter')
const foodRouter = require('./routes/FoodRouter')
const MLRouter = require('./routes/MLRouter')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

app.get('/', requireAuth, revokeAuth, (req, res) => {
    res.json({ "data": req.user })
})

app.use(UserRouter)
app.use(foodRouter)
app.use(MLRouter)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    const serverUrl = `http://localhost:${PORT}`;
    console.log(`Server URL: ${serverUrl}`);
})