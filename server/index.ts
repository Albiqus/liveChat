const express = require('express')
const userRouter = require('./routes/user.routes')

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/api', userRouter)

const start = () => {
    try {
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()