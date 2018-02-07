const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// 新建app
const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
// 开启一个中建件
app.use('/user', userRouter)

app.listen(8899, () => {
    console.log('yes')
})