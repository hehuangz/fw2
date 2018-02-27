const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// 新建app
const app = express()
// socket.io与express关联起来
const server = require('http').Server(app)
const io = require('socket.io')(server)
io.on('connection', function (socket) {
	//socket当前连接的请求，io是全局请求
	socket.on('sendMsg', function (data) {
		io.emit('receiveMsg', data)
	})
})

app.use(cookieParser())
app.use(bodyParser.json())
// 开启一个中建件
app.use('/user', userRouter)

server.listen(8899, () => {
	console.log('yes')
})