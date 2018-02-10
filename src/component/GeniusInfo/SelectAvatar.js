import React, { Component } from 'react';
import { Grid } from 'antd-mobile'
import PropTypes from 'prop-types'
class Index extends Component {
	static propTypes = {
		select: PropTypes.func.isRequired
	}
	constructor(props) {
		super(props)
	}
	render() {
		let arr = []
		for (let i = 1; i <= 14; i++) {
			arr.push(`avatar (${i}).png`)
		}
		const data = Array.from(arr).map((v, i) => ({
			icon: require(`../imgs/${v}`),
			text: `name${i}`
		}));
		const handleChange = (v) => {
			this.props.select(v.icon)
		}
		return (
			<Grid
				data={data}
				columnNum={5}
				onClick={(v) => handleChange(v)}
			/>
		)
	}
}
export default Index