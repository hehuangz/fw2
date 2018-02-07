// 存放所有redux信息
// 引入axios发送请求
import axios from 'axios'
// 引入登陆或注册成功后跳转url的工具函数
import getDedirectUrl from '../util.js'

const ERROR_MSG = 'ERROR_MSG'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const USER_DATA = 'USER_DATA'
const initState = {
	redirectTo: '',
	msg: '',
	isAuth: false,
	user: '',
	type: ''
}

export default function user(state = initState, action) {
	switch (action.type) {
		case ERROR_MSG:
			return { ...state, isAuth: false, msg: action.msg }
		case REGISTER_SUCCESS:
			return { ...state, isAuth: true, msg: '注册成功', redirectTo: getDedirectUrl(action.payload), ...action.payload }
		case LOGIN_SUCCESS:
			return { ...state, isAuth: true, msg: '登陆成功', redirectTo: getDedirectUrl(action.payload), ...action.payload }
		case USER_DATA:
			return { ...state, ...action.payload }
		default:
			return state
	}
}
function ErrorMsg(msg) {
	return { msg, type: ERROR_MSG }
}
export function registerSuccess(data) {
	return { type: REGISTER_SUCCESS, payload: data }
}
export function loginSuccess(data) {
	return { type: LOGIN_SUCCESS, payload: data }
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
				dispatch(registerSuccess({ user, pwd, type, msg: res.data.msg }))
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
				dispatch(loginSuccess(res.data.data))
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
