const express = require('express')
const app = express()

// Middleware to parse JSON bodies
app.use(express.json())

// GET route
app.get('/users', (req, res) => {
    res.send('GET Request to the homepage')
})

// POST route
app.post('/users', (req, res) => {
    res.send('POST Request to the homepage')
})

// PUT route
app.put('/users/:id', (req, res) => {
    res.send(`PUT Request to user ${req.params.id}`)
})

// DELETE route
app.delete('/users/:id', (req, res) => {
    res.send(`DELETE Request for user ${req.params.id}`)
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

//or
// const debug = require('debug')('app');
// const chalk = require('chalk');

// const express = require('express');
// const app = express();

// //Session router
// const session_router = express.Router();

// session_router.route('/').get((req,res) => {
//     res.send("Welcome to my Node.js server!");
// });

// session_router.route('/contact').get((req,res) => {
//     res.send("Contact Us");
// });

// session_router.route('/about').get((req,res) => {
//     res.send("About Us");
// });

// session_router.route('/:id').get((req,res) => {
//     res.send("404 Not Found");
// });



// app.use(session_router);

// // const server = http.createServer((req, res) => {
// //     // res.send();
// //     res.end("Welcome to my Node.js server!");
// // })

// app.listen(3000,() => {
//     console.log(`Server is running on ${chalk.green('http://localhost:3000')}`);
// });