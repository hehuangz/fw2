// boss首页
import React from 'react'
import axios from 'axios'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        axios.get('/user/list?type=genius').then(res => {
            if (res.status === 200) {
                this.setState({
                    data: res.data
                })
            }
        })
    }
    render() {
        const { data } = this.state
        return (
            <WingBlank size="lg" style={{ marginBottom: 66 }} className='v-boss-card'>
                {data.map(v => (
                    <div key={v._id}>
                        <WhiteSpace size="lg" />
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
                            <Card.Footer content={"薪资要求：" + v.money} extra={<div></div>} />
                        </Card>
                    </div>
                ))}
            </WingBlank>
        )
    }
}
export default Index