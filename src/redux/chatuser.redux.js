// tab第一栏，列表
import axios from 'axios'
const USERLIST_SUCCESS = 'USERLIST_SUCCESS'
const initState = {
    userlist: []
}
export default function chatuser(state = initState, action) {
    switch (action.type) {
        case USERLIST_SUCCESS:
            return { ...state, userlist: action.payload }
        default:
            return state;
    }
}
function userList(data) {
    return { type: USERLIST_SUCCESS, payload: data }
}
export function getUserList(type) {
    return dispatch => {
        axios.get(`/user/list?type=${type}`).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(userList(res.data.data))
            }
        })
    }
}