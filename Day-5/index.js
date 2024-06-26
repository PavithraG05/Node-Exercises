const express = require('express')
const app = express()
const usersRouter = require('./routes/userRouter.js')

app.use('/users', usersRouter)

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))