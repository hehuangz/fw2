// boss首页
import React from 'react'

import { connect } from 'react-redux'
import { getUserList } from '../../redux/chatuser.redux'
import ChatCard from '../Common/ChatCard'
@connect(
    state => state.chatuser,
    { getUserList }
)
class Index extends React.Component {
    componentWillMount() {
        this.props.getUserList('genius')
    }
    render() {
        return (
            <ChatCard userlist={this.props.userlist} />
        )
    }
}
export default Index