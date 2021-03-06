import React, { Component } from 'react'
import NavBar from '../../component/Common/NavBar'
import { connect } from 'react-redux'
import Bar from '../../component/Common/Bar'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import Boss from '../../component/Boss/Boss'
import Genius from '../../component/Genius/Genius'
import Me from '../../component/Me/Me'
import Msg from '../../component/Msg/Msg'
@connect(
	state => state.user
)
class DashBoard extends Component {
	static PropType = {
		navArr: PropTypes.array.isRequired
	}
	render() {
		const { pathname } = this.props.location
		const { type } = this.props
		const navArr = [
			{
				path: '/boss',//boss找面试者
				title: '牛人',
				icon: 'icon-niuren',
				hide: type === 'genius',
				component: Boss
			},
			{
				path: '/genius',//面试者找工作
				title: '岗位',
				icon: 'icon-755danzi',
				hide: type === 'boss',
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
				<NavBar title={navArr.find(v => v.path === pathname) && navArr.find(v => v.path === pathname).title}></NavBar>
				<Bar navArr={navArr} pathname={pathname} history={this.props.history}></Bar>
				<Switch>
					{navArr.map(v => (
						<Route key={v.path} path={v.path} component={v.component} />
					))}
				</Switch>
			</div>
		)
	}
}
export default DashBoard