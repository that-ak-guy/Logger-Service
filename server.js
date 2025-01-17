const express = require('express')
const LogRouter = require('./routers/log.router')
const { ErrorHandler } = require('./middlewares/errors.middleware')
require('./config/initENV.js')

const app = express()

app.use(express.json())


app.use('/logs', LogRouter)

app.use(ErrorHandler)

app.listen(5000, () => {
    console.log('Service Running...')
})
