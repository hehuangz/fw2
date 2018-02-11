import React from 'react'
import LOGO from '../../component/logo/index.js'
import { InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import { createForm } from 'rc-form';
import { connect } from 'react-redux'
import { Login } from '../../redux/user.redux.js'
import { Redirect } from 'react-router-dom'
@connect(
    state => state.user,
    { Login }
)
class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    login() {
        this.props.Login(this.state)
    }
    register() {
        this.props.history.push('/register')
    }
    render() {
        return (
            <div className="flex-container">
                {this.props.msg ? <p>{this.props.msg}</p> : null}
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <LOGO></LOGO>
                <WingBlank>
                    <InputItem
                        onChange={(v) => this.handleChange('user', v)}
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type='password'
                        onChange={(v) => this.handleChange('pwd', v)}
                    >密码</InputItem>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.login}>登陆</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}
const Page = createForm()(Index)
export default Page