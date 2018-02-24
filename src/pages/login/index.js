import React, { Component } from 'react'
import LOGO from '../../component/logo/index.js'
import { InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import { createForm } from 'rc-form';
import { connect } from 'react-redux'
import { Login } from '../../redux/user.redux.js'
import { Redirect } from 'react-router-dom'
import { HOCForm } from '../../component/Common/HOCForm'
// @本质上是一个高阶组件、
@connect(
    state => state.user,
    { Login }
)
@HOCForm
// @HOCForm
class Index extends Component {
    constructor() {
        super()
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
    }
    login() {
        this.props.Login(this.props.state)
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
                        onChange={(v) => this.props.handleChange('user', v)}
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type='password'
                        onChange={(v) => this.props.handleChange('pwd', v)}
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