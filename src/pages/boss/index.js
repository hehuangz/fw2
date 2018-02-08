// boss首页
import React from 'react'
import NavBar from '../../component/Boss/NavBar'
import Form from '../../component/Boss/Form'
class Index extends React.Component {
    render() {
        return (
            <div className='v-boss'>
                <NavBar title='BOSS完善信息页' />
                <Form></Form>
            </div>
        )
    }
}
export default Index
