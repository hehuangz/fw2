// boss首页
import React from 'react'
import NavBar from '../../component/BossInfo/NavBar'
import Form from '../../component/BossInfo/Form'
class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='v-bossinfo'>
                <NavBar title='BOSS完善信息页' />
                <Form location={this.props.location}></Form>
            </div>
        )
    }
}
export default Index