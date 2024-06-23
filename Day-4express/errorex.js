const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the Express Error Handling Demo!') 
});

// thowing an exception
app.get('/error', (req, res) => {
    throw new Error('Something went wrong!')
});

// another way to throw error using next
app.get('/data', (req, res, next) => {
    const data = ''
    if (!data) {
        const err = new Error('No data found!')
        err.status = 404  // Custom error status for 404
        next(err);
    } else {
        res.send(data)
    }
})

app.use((req, res, next) => {
    res.status(404).send('404 page not found. Sorry, that route does not exist.')
});

app.use((err, req, res, next) => {
    console.error(err.stack)  // Log error for debugging
    res.status(err.status || 500).send(err.message|| 'Something broke!')
});

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))