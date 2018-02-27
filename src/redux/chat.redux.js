import axios from 'axios'
import io from 'socket.io-client'
const socket = io('ws://localhost:8899');//连接，注意是websocket协议

const CHAT_LIST = 'CHAT_LIST'
const CHAT_RECV = 'CHAT_RECV'
const CHAT_READ = 'CHAT_READ'
const ERROR_MSG = 'ERROR_MSG'
const initState = {
    chatmsg: '',
    unread: 0,
}
export default function chat(state = initState, action) {
    switch (action.type) {
        case CHAT_LIST:
            return { ...state, chatmsg: action.payload }
        default:
            return { ...state }
    }
}
function getChatListSuccess(data) {
    return { type: CHAT_LIST, payload: data }
}
export function getChatList() {
    return dispatch => {
        axios.get('/user/chatlist').then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(getChatListSuccess(res.data.data))
            }
        })
    }
}
export function sendChatMsg(obj) {
    return dispatch => {
        socket.emit('sendMsg', obj)
    }
}
export function receiveMsg(fn) {
    return dispatch => {
        socket.on('receiveMsg', (data) => {
            fn(data)
        })
    }
}