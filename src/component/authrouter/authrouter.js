// 只负责获取用户的信息并跳转
import React from 'react'
import axios from 'axios'
// 单一的路由，需要withRouter才能获取到this.props
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveUserData } from '../../redux/user.redux'
@withRouter
@connect(
    null,
    { saveUserData }
)
class AuthRouter extends React.Component {
    componentDidMount() {
        const publicList = ['/login', '/register']
        const pathname = this.props.location.pathname
        if (publicList.includes(pathname)) {
            return null
        }
        axios.get('/user/info').then(res => {
            if (res.status === 200) {
                if (res.data.code === 0) {
                    // 有登陆信息
                    this.props.saveUserData(res.data.data)
                } else {
                    // 无登陆信息
                    this.props.history.push('/login')
                }
            }
        })
    }
    render() {
        return null
    }
}
export default AuthRouter