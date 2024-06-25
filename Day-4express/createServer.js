const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.get('/hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))