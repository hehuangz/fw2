import React, { Component } from "react";

import { PSortList } from 'dragact2';
import './style.css'
export default class Index extends Component {
	render() {
		const fakeData = [
			{ GridX: 0, GridY: 0, w: 4, h: 2, key: '0' },
			{ GridX: 0, GridY: 0, w: 4, h: 2, key: '1' },
			{ GridX: 0, GridY: 0, w: 4, h: 2, key: '2' }
		]

		const getblockStyle = (isDragging) => {
			return {
				background: '#f0f0f0',
			}
		};
		return (
			<PSortList
				layout={fakeData}//必填项
				col={16}//必填项
				width={800}//必填项
				rowHeight={100}//必填项
				margin={[5, 5]}//必填项,间距，第一个参数是左右，第二个参数是上下
				className='plant-layout'//必填项
			>
				{(item, provided) => {
					return (
						<div
							className='_item'
							{...provided.props}
							{...provided.dragHandle}
							style={{
								...provided.props.style,
								...getblockStyle(provided.isDragging)
							}}
						>
							我是{item.key}
						</div>
					)
				}}
			</PSortList>
		)
	}
}
