// 存放所有redux信息
// 引入axios发送请求
import axios from 'axios'
// 引入登陆或注册成功后跳转url的工具函数
import getDedirectUrl from '../util.js'

const ERROR_MSG = 'ERROR_MSG'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const USER_DATA = 'USER_DATA'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
const initState = {
	redirectTo: '',
	msg: '',
	user: '',
	type: ''
}

export default function user(state = initState, action) {
	switch (action.type) {
		case ERROR_MSG:
			return { ...state, msg: action.msg }
		case AUTH_SUCCESS:
			return { ...state, msg: '', redirectTo: getDedirectUrl(action.payload), ...action.payload }
		case USER_DATA:
			return { ...state, ...action.payload }
		case LOGOUT_SUCCESS:
			return { ...initState, redirectTo: '/login' }
		default:
			return state
	}
}
function ErrorMsg(msg) {
	return { msg, type: ERROR_MSG }
}
export function authSuccess(obj) {
	const { pwd, ...data } = obj
	return { type: AUTH_SUCCESS, payload: data }
}
export function Register({ user, pwd, repeatPwd, type }) {
	if (!user || !pwd || !repeatPwd) {
		return ErrorMsg('用户名或密码必须输入')
	}
	if (pwd !== repeatPwd) {
		return ErrorMsg('俩次密码输入不一致')
	}
	// dispatch用于通知数据修改
	return dispatch => {
		axios.post('/user/register', { user, pwd, type }).then(res => {
			if (res.status === 200 && res.data.code === 0) {
				dispatch(authSuccess({ user, pwd, type, msg: res.data.msg }))
			} else {
				dispatch(ErrorMsg(res.data.msg))
			}
		})
	}
}

export function Login({ user, pwd }) {
	if (!user || !pwd) {
		return ErrorMsg('用户名或密码必须输入')
	}
	return dispatch => {
		axios.post('/user/login', { user, pwd }).then(res => {
			if (res.status === 200 && res.data.code === 0) {
				dispatch(authSuccess(res.data.data))
			} else {
				dispatch(ErrorMsg(res.data.msg))
			}
		})
	}
}

// 登录和注册之后将用户信息保存在redux中
export function saveUserData(data) {
	return { type: USER_DATA, payload: data }
}

// 完善信息点保存后函数
export function update(data) {
	return dispatch => {
		axios.post('/user/update', data).then(res => {
			if (res.status === 200 && res.data.code === 0) {
				dispatch(authSuccess(res.data.data))
			} else {
				dispatch(ErrorMsg(res.data.msg))
			}
		})
	}
}

// 退出登录，清空redux并跳转
export function logout() {
	return { type: LOGOUT_SUCCESS }
}
