import React, { Component } from 'react';
import { PSortList } from '../../../main.js';
class Basic extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			list: [
				{ id: 1, text: '1111' },
				{ id: 2, text: '2222' },
				{ id: 3, text: '3333' },
				{ id: 4, text: '4444' },
				{ id: 5, text: '5555' },
				{ id: 6, text: '6666' },
			]
		};
		this.onChange = () => {
			console.log('onChage');
		};
	}
	render() {
		const list = this.state.list;
		const dataStyles = { background: '#f5f5f5', margin: 10, lineHeight: '60px' };
		return (
			<PSortList
				dataSourse={list}
				dataStyles={dataStyles}
				onChange={this.onChange}
			// renderRow={Item}
			>
			</PSortList>
		);
	}
}
export default Basic;
