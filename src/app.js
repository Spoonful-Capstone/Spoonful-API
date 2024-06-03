const express = require('express')
const { loginUserHandler } = require('./handlers/AuthHandler')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ "data": "hello world" })
})

app.post('/login', loginUserHandler)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    const serverUrl = `http://localhost:${PORT}`;
    console.log(`Server URL: ${serverUrl}`);
})