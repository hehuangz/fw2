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
        console.log(data)
        return (
            <WingBlank size="lg" style={{ marginBottom: 66 }}>
                {data.map(v => (
                    <div key={v._id}>
                        <WhiteSpace size="lg" />
                        <Card>
                            <Card.Header
                                title={v.user}
                                thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                                extra={<span>this is extra</span>}
                            />
                            <Card.Body>
                                <div>This is content of `Card`</div>
                            </Card.Body>
                            <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                        </Card>
                    </div>
                ))}
            </WingBlank>
        )
    }
}
export default Index