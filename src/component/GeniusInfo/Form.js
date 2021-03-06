import React, { Component } from 'react'
import { List, InputItem, TextareaItem, Button } from 'antd-mobile'
import SelectAvatar from '../Common/SelectAvatar'
import { connect } from 'react-redux'
import { update } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
@connect(
    state => state.user,
    { update }
)
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            job: '',
            money: '',
            desc: '',
            avatar: ''
        }
    }
    handleChange(type, val) {
        this.setState({
            [type]: val
        })
    }
    save() {
        this.props.update(this.state)
    }
    render() {
        const path = this.props.location.pathname;
        const redirect = this.props.redirectTo;
        const Avatar = this.state.avatar ? <div className='_avator'>我的头像：<img src={this.state.avatar} alt="" /></div> : '请选择头像：'
        return (
            <div>
                {redirect && path !== redirect ? <Redirect to={redirect}></Redirect> : null}
                <List renderHeader={Avatar}>
                    <SelectAvatar select={(v) => this.handleChange('avatar', v)}></SelectAvatar>
                    <InputItem onChange={(v) => this.handleChange('job', v)}>求职岗位：</InputItem>
                    <InputItem onChange={(v) => this.handleChange('money', v)}>岗位薪资：</InputItem>
                    <TextareaItem
                        title='自我描述：'
                        rows={3}
                        count={200}
                        autoHeight={true}
                        onChange={(v) => this.handleChange('desc', v)}
                    />
                </List>
                <Button onClick={() => this.save()}>保存</Button>
            </div>
        )
    }
}
export default Form