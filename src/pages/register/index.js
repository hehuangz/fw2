import React from 'react'
import LOGO from '../../component/logo/index.js'
import { InputItem, Button, WhiteSpace, WingBlank, Radio } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import { connect } from 'react-redux'
import { createForm } from 'rc-form';
import { Register } from '../../redux/user.redux.js'
import { Redirect } from 'react-router-dom'
const RadioItem = Radio.RadioItem

@connect(
    state => state.user,
    { Register }
)
class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            user: '',
            pwd: '',
            repeatPwd: '',
            type: 'genius'
        }
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }
    login() {
        this.props.history.push('/login')
    }
    register() {
        this.props.Register(this.state)
        // if (this.props.msg === 'yes') {
        //     this.props.history.push('/login')
        // }
    }
    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }
    render() {
        var msg_red = {
            color: "red"
        }
        return (
            <div>
                {this.props.msg ? <p style={msg_red}>{this.props.msg}</p> : null}
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <LOGO></LOGO>
                <WingBlank>
                    <InputItem
                        type='text'
                        onChange={(v) => this.handleChange('user', v)}
                    >用户名</InputItem>
                    <WhiteSpace />

                    <InputItem
                        type='password'
                        onChange={(v) => this.handleChange('pwd', v)}
                    >输入密码</InputItem>

                    <WhiteSpace />
                    <InputItem
                        type='password'
                        onChange={(v) => this.handleChange('repeatPwd', v)}
                    >再输密码</InputItem>
                    <WhiteSpace />

                    <RadioItem checked={this.state.type === 'genius'} onClick={() => this.handleChange('type', 'genius')}>牛人</RadioItem>
                    <WhiteSpace />

                    <RadioItem checked={this.state.type === 'boss'} onClick={() => this.handleChange('type', 'boss')}>Boss</RadioItem>
                    <WhiteSpace />

                    <Button type='primary' onClick={this.register}>注册</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.login}>登陆</Button>
                </WingBlank>

            </div>
        )
    }
}
const Page = createForm()(Index);
export default Page