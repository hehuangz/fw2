import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import './Styles.scss';
let eleDrag = null;
class PSortList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			mask: null
		};
	}

	componentDidMount() {
		this.setState({
			list: this.props.dataSourse
		});
	}
	// 控制遮罩是否出现
	handleMask = (id) => {
		return id == this.state.mask ? true : false;
	}
	// 点击遮罩上的按钮
	handleMaskBtn = (current) => {
		this.setState({
			list: this.handleMove(current)
		});
	}
	// 点击遮罩上的按钮，左移、右移、删除
	handleMove = (current) => {
		const { id, i, type } = current;
		const list = this.state.list;
		const arr = [];
		list.map(v => {
			if (v.id !== id) {
				arr.push(v);
			}
		});
		switch (type) {
			case 'left':
				arr.splice(i - 1, 0, list[i]);
				break;
			case 'right':
				arr.splice(i + 1, 0, list[i]);
				break;
			case 'drag':
				const id_i = list.findIndex((v) => v.id == id);// 这个id元素对应的下标
				arr.splice(i, 0, list[id_i]);
				break;
			default: // 删除
				return arr;
		}
		return arr;
	}
	// 拖拽开始 
	onDragStart = (e) => {
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData("text", e.target.innerHTML);
		eleDrag = e.target;
		// console.log(eleDrag, e.target.id);

		// ？？？？？？dataTransfer.setDragImage
		e.dataTransfer.setDragImage(eleDrag, e.target.offsetWidth / 2, e.target.offsetHeight / 2);
		return true;
	}
	// 拖拽结束
	onDragEnd = (e) => {
		e.dataTransfer.clearData("text");
		eleDrag = null;
		return false;
	}
	// 拖拽元素在目标元素头上移动的时候
	onDragOver = (e) => {
		e.preventDefault();
		return true;
	}
	// 拖拽元素进入目标元素头上的时候
	onDragEnter = function (e) {
		// console.log(e.target);
		// this.style.opacity = 0.2;
		return true;
	}
	// 拖拽元素进入目标元素头上，同时鼠标松开的时候
	onDrop = (e) => {
		const id = eleDrag.id;// 选中的元素的id
		const target_id = e.target.id;// 移入目标的id，不严谨！一定注意要选中父节点，如果上面有其他内容挡住的话要改
		if (!target_id) { // 移入自己的时候
			return;
		}
		const i = this.state.list.findIndex(v => v.id === Number(target_id));// 移入目标的下标
		this.setState({
			list: this.handleMove({ id: Number(id), i, type: 'drag' })
		});
	}

	render() {
		const { list } = this.state;
		const { dataStyles, onChange } = this.props;
		return (
			<div className={'PSortList_container'}>
				{list && list.map((v, i) => {
					return <div
						draggable={true}
						key={v.id}
						id={v.id}
						style={dataStyles}
						onMouseEnter={() => this.setState({ mask: v.id })}
						onMouseLeave={() => this.setState({ mask: null })}
						onDragStart={this.onDragStart}
						onDragEnd={this.onDragEnd}
						onDragOver={this.onDragOver}
						onDragEnter={this.onDragEnter}
						onDrop={this.onDrop}
					// onChange={onChange && onChange()}
					>
						{v.text}
						{this.handleMask(v.id)
							? <div className="_mask">
								{i !== 0
									? <span onClick={() => this.handleMaskBtn({ id: v.id, i, type: 'left' })}>&#10094;</span>
									: <span />
								}
								<span onClick={() => this.handleMaskBtn({ id: v.id, i, type: 'delete' })}>&#10006;</span>
								{i !== list.length - 1
									? <span onClick={() => this.handleMaskBtn({ id: v.id, i, type: 'right' })}>&#10095;</span>
									: <span />
								}
							</div>
							: null
						}
					</div>;
				})
				}
			</div >
		);
	}
}
PSortList.propTypes = {
	dataSourse: PropTypes.array.isRequired,
	dataStyles: PropTypes.object,
	onChange: PropTypes.func
};
export default PSortList;