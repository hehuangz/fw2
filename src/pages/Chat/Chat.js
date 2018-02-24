import React, { Component } from 'react'
class Chat extends Component {
    render() {
        return <h1>chat with {this.props.match.params.user}</h1>
    }
}
export default Chat