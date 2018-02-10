// 牛人完善信息页
import React from 'react'
import NavBar from '../../component/Common/NavBar'
import Form from '../../component/GeniusInfo/Form'
class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='v-bossinfo'>
                <NavBar title='牛人完善信息页' />
                <Form location={this.props.location}></Form>
            </div>
        )
    }
}
export default Index
