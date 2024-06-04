const express = require('express')
const { requireAuth, revokeAuth } = require('./middlewares/AuthMiddleware')

const app = express()
const userRouter = require('./routes/UserRouter')
const foodRouter = require('./routes/FoodRouter')
const cookieParser = require('cookie-parser')
const { getAllFoodHandler } = require('./handlers/FoodHandler')

app.use(express.json())
app.use(cookieParser())

app.get('/foods', getAllFoodHandler)

app.get('/', requireAuth, revokeAuth, (req, res) => {
    let cookie = req.cookies.access_token ?? 'tidak ada isinya'
    res.json({ "data": cookie })
})

app.use(userRouter)
app.use(foodRouter)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    const serverUrl = `http://localhost:${PORT}`;
    console.log(`Server URL: ${serverUrl}`);
})