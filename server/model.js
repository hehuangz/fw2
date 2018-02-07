// 数据模型
const mongoose = require('mongoose')
// 链接mongodb,并且使用react集合，没有会自动新建
const DB_URL = 'mongodb://127.0.0.1:27017/react'
mongoose.connect(DB_URL,{
    useMongoClient: true
})
mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})
const models = {
    user: {
        user: { type: String, require: true },
        pwd: { type: String, require: true },
        type: { type: String, require: true },
        avatar: { type: String },
        desc: { type: String },
        title: { type: String }
    },
    chat: {

    }
}

for (let i in models) {
    mongoose.model(i, new mongoose.Schema(models[i]))
}

module.exports = {
    getModel: (name) => {
        return mongoose.model(name)
    }
}