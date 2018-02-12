import React, { Component } from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import PropTypes from 'prop-types'
class ChatCard extends Component {
    static propTypes = {
        userlist: PropTypes.array.isRequired
    }
    render() {
        return (
            <WingBlank size="sm" style={{ marginBottom: 66 }} className='v-boss-card'>
                {this.props.userlist.map(v => (
                    <div key={v._id}>
                        <WhiteSpace size="sm" />
                        <Card>
                            <Card.Header
                                title={v.user}
                                thumb={v.avatar}
                                extra={<span>{v.job}</span>}
                                className='_header'
                            />
                            <Card.Body>
                                <div>{v.desc}</div>
                            </Card.Body>
                            <Card.Footer
                                content={"薪资要求：" + v.money}
                                extra={v.type === 'boss' ? <div>公司名称：{v.company ? v.company : '无'}</div> : null} />
                        </Card>
                    </div>
                ))}
            </WingBlank>
        )
    }
}
export default ChatCard