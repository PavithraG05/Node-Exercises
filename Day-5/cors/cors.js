const express = require('express')
const cors = require('cors')
const app = express()

// Enable all CORS requests
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('CORS enabled for all origins!')
})

app.get('/data', cors(), (req, res) => {
    res.json({ message: 'This route has CORS enabled for all origins!' })
})

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.post('/update', cors(corsOptions), (req, res) => {

    const {key1, key2} = req.body;
    res.json({ message: `CORS enabled ${key1} ${key2}` })
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))