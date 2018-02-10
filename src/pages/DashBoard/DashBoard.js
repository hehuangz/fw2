import React, { Component } from 'react'
import NavBar from '../../component/Common/NavBar'
import { connect } from 'react-redux'
import Bar from '../../component/Common/Bar'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import Boss from '../../component/Boss/Boss'
import Genius from '../../component/Genius/Genius'

const Msg = () => {
    return <h2>Msg</h2>
}
const Me = () => {
    return <h2>Me</h2>
}
@connect(
    state => state.user
)
class DashBoard extends Component {
    static PropType = {
        navArr: PropTypes.array.isRequired
    }
    constructor(props) {
        super(props)
    }
    render() {
        const { pathname } = this.props.location
        const { type } = this.props
        const navArr = [
            {
                path: '/boss',//boss找面试者
                title: '牛人',
                icon: 'icon-niuren',
                hide: type == 'genius',
                component: Boss
            },
            {
                path: '/genius',//面试者找工作
                title: '岗位',
                icon: 'icon-755danzi',
                hide: type == 'boss',
                component: Genius
            },
            {
                path: '/msg',
                title: '消息',
                icon: 'icon-buoumaotubiao14',
                component: Msg
            },
            {
                path: '/me',
                title: '我的',
                icon: 'icon-account',
                component: Me
            }
        ]
        return (
            <div>
                <NavBar title={navArr.find(v => v.path == pathname) && navArr.find(v => v.path == pathname).title}></NavBar>
                {navArr.map(v => (
                    <Route key={v.path} path={v.path} component={v.component} />
                ))}
                <Bar navArr={navArr} pathname={pathname} history={this.props.history}></Bar>
            </div>
        )
    }
}
export default DashBoard