const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user.routes')


const PORT = process.env.PORT || 5000
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server)



app.use(cors())
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