const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({ "data": "hello world" })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    const serverUrl = `http://localhost:${PORT}`;
    console.log(`Server URL: ${serverUrl}`);
})