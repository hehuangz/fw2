import React, { Component } from 'react'
import { List, InputItem } from 'antd-mobile'
import { connect } from 'react-redux'
import { getChatList, sendChatMsg, receiveMsg } from '../../redux/chat.redux'
import './Styles.css'
import io from 'socket.io-client'
const socket = io('ws://localhost:8899');//连接，注意是websocket协议
@connect(
    state => state,
    { getChatList, sendChatMsg, receiveMsg }
)
class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            msg: []
        }
    }
    componentDidMount() {
        this.props.getChatList()
        this.props.receiveMsg((data) => {
            this.setState({
                msg: [...this.state.msg, data.text]
            })
        })
    }
    handleSend() {
        const from = this.props.user._id
        const to = this.props.match.params.user
        this.props.sendChatMsg({ from, to, text: this.state.text })
        this.setState({ text: '' })
    }
    render() {
        return (
            <div className='v-chat'>
                {this.state.msg.map(v => {
                    return <p key={`${v}${Math.random()}`}>{v}</p>
                })}
                <List className='_input'>
                    <InputItem
                        placeholder='请输入内容'
                        value={this.state.text}
                        onChange={(v) => this.setState({ text: v })}
                        extra={<span style={{ color: 'blue' }} onClick={() => this.handleSend()}>发送</span>}
                    >
                    </InputItem>
                </List>
                <h1>chat with {this.props.match.params.user}</h1>
            </div>
        )
    }
}
export default Chat