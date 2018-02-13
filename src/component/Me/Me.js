import React, { Component } from 'react'
import { Result, List, WhiteSpace, Button, Modal } from 'antd-mobile'
import { connect } from 'react-redux'
import browserCookies from 'browser-cookies'
import { logout } from '../../redux/user.redux'
const Item = List.Item
const Brief = Item.Brief
const alert = Modal.alert

@connect(
	state => state.user,
	{ logout }
)
class Me extends Component {
	constructor(props) {
		super(props)
		this.logout = this.logout.bind(this)
	}
	logout() {
		alert('注销', '确认退出登录吗???', [
			{ text: '取消' },
			{
				text: '确定',
				onPress: () => {
					browserCookies.erase('userid')
					this.props.logout();
					setTimeout(() => {
						this.props.history.push('/login')
					}, 200);
				}
			},
		])
	}
	render() {
		const { user, money, job, desc, avatar, company, type } = this.props
		return (
			user ? <div>
				<Result
					img={<img src={avatar} alt='头像' style={{ width: 60 }} />}
					title={user}
					message={company ? company : '找啊找啊找工作~'}
				/>
				<List renderHeader={() => '简介'}>
					<Item
						arrow="horizontal"
					>
						{type === 'boss' ? `招聘岗位：` : `应聘岗位：`}
						<Brief>{job}</Brief>
					</Item>
				</List>
				<WhiteSpace />
				<List>
					<Item
						arrow="horizontal"
					>
						薪资要求： <Brief>{money}</Brief>
					</Item>
				</List >
				<WhiteSpace />
				<List>
					<Item
						arrow="horizontal"
					>
						{type === 'boss' ? `岗位描述：` : `个人描述：`}
						<Brief>{desc}</Brief>
					</Item>
				</List >
				<Button onClick={this.logout}>退出登录</Button>
			</div> : null
		)
	}
}
export default Me