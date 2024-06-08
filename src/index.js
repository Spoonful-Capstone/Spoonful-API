const express = require('express')

const app = express()
const { userRouter } = require('./routes/userRouter')


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