import React from 'react'
import LOGO from '../../component/logo/index.js'
import { InputItem, Button, WhiteSpace, WingBlank, Radio } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import { connect } from 'react-redux'
import { createForm } from 'rc-form';
import { Register } from '../../redux/user.redux.js'
import { Redirect } from 'react-router-dom'
import { HOCForm } from '../../component/Common/HOCForm'
const RadioItem = Radio.RadioItem

@connect(
    state => state.user,
    { Register }
)
@HOCForm
class Index extends React.Component {
    constructor() {
        super()
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }
    componentDidMount() {
        this.props.handleChange('type', 'genius')
    }
    login() {
        this.props.history.push('/login')
    }
    register() {
        this.props.Register(this.props.state)
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
                        onChange={(v) => this.props.handleChange('user', v)}
                    >用户名</InputItem>
                    <WhiteSpace />

                    <InputItem
                        type='password'
                        onChange={(v) => this.props.handleChange('pwd', v)}
                    >输入密码</InputItem>

                    <WhiteSpace />
                    <InputItem
                        type='password'
                        onChange={(v) => this.props.handleChange('repeatPwd', v)}
                    >再输密码</InputItem>
                    <WhiteSpace />

                    <RadioItem checked={this.props.state.type === 'genius'} onClick={() => this.props.handleChange('type', 'genius')}>牛人</RadioItem>
                    <WhiteSpace />

                    <RadioItem checked={this.props.state.type === 'boss'} onClick={() => this.props.handleChange('type', 'boss')}>Boss</RadioItem>
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