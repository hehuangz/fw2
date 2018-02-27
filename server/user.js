const server = require('express')
const router = server.Router()
const Model = require('./model')
const User = Model.getModel('user')
const Chat = Model.getModel('chat')
const utility = require('utility')
const _filter = { pwd: 0, __v: 0 }//过滤掉、不需要返回的字段

// 密码加密处理
function secretPass(pass) {
	let secret = utility.md5(pass + 'Strictly Guard State Secrets%1314*')
	return utility.md5(secret)
}
// 权限控制
router.get('/info', (req, res) => {
	const { userid } = req.cookies;
	if (!userid) {
		return res.json({ code: 1 })
	}
	User.findOne({ _id: userid }, _filter, (e, d) => {
		if (!e) {
			if (d) {
				res.json({ code: 0, data: d })
			}
		} else {
			res.json({ code: 1, msg: '后端出错了' })
		}
	})
})
// 清除所有数据+查找所有数据
router.get('/list', (req, res) => {
	// User.remove({}, (err, doc) => { })
	const { type } = req.query
	User.find({ type }, (err, doc) => {
		if (!err) {
			res.json({ code: 0, data: doc })
		}
	})
})
// 注册
router.post('/register', (req, res) => {
	const { user, pwd, type } = { ...req.body }
	User.findOne({ user }, (err, doc) => {
		if (!err) {
			if (!doc) {
				// 这里新添加一条用户不用create，因为不会返回_id，所以这里用UserModal
				const UserModal = new User({ user, pwd: secretPass(pwd), type })
				UserModal.save((e, d) => {
					if (!e) {
						res.cookie('userid', d._id)
						const { user, type, _id } = d
						res.json({ code: 0, data: { user, type, _id } })
					} else {
						res.json({ code: 1, msg: '后端出错了' })
					}
				})
				// User.create({
				// 	user, pwd: secretPass(pwd), type
				// }, (e, d) => {
				// 	if (!e) {
				// 		res.cookie('userid', d._id)
				// 		res.json({ code: 0, msg: '注册成功' })
				// 	} else {
				// 		res.json({ code: 1, msg: '错误，请重试！' })
				// 	}
				// })
			} else {
				res.json({ code: 1, msg: '用户名重复' })
			}
		}
	})
})
// 登陆
router.post('/login', (req, res) => {
	const { user, pwd } = { ...req.body }
	User.findOne({ user }, (err, doc) => {
		if (!err) {
			if (doc) {
				// @parem2 不用返回出去的参数 
				User.findOne(
					{ user, pwd: secretPass(pwd) },
					_filter,
					(e, d) => {
						if (!e) {
							if (d) {
								res.cookie('userid', d._id)
								res.json({ code: 0, data: d })
							} else {
								res.json({ code: 1, msg: '密码错误' })
							}
						}
					})
			} else {
				res.json({ code: 1, msg: '用户不存在' })
			}
		}
	})
})

// 完善信息时保存数据
router.post('/update', (req, res) => {
	const { userid } = req.cookies
	if (!userid) {
		res.json({ code: 1 })
	} else {
		const body = req.body;
		User.findByIdAndUpdate(userid, body, function (err, doc) {
			if (!err) {
				//合并对象
				const data = Object.assign({}, {
					user: doc.user,
					type: doc.type
				}, body)
				res.json({ code: 0, data })
			} else {
				res.json({ code: 1, msg: '后端出错了' })
			}
		})
	}
})

// 获取聊天数据
router.get('/chatlist', (req, res) => {
	Chat.find({}, (err, doc) => {
		if (!err) {
			res.json({ code: 0, data: doc })
		}
	})
})
module.exports = router