const express = require('express')
const app = express()

// Import the user routes
const prodRoutes = require('./productRoutes')

// Use the user routes for the '/users' path
app.use('/product', prodRoutes)

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));