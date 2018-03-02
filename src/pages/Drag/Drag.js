//拖拽组件，具体要求看文档Drag.md
import React, { Component } from 'react'
import './Styles.css'
const Fragment = React.Fragment;
class Drag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: this.props.list
        }
    }
    render() {
        return (
            <Fragment>
                <div className="dustbin">垃圾箱</div>
                <div className="dragbox">
                    <div className="draglist" title="拖拽我" draggable="true">列表1</div>
                    <div className="draglist" title="拖拽我" draggable="true">列表2</div>
                    <div className="draglist" title="拖拽我" draggable="true">列表3</div>
                    <div className="draglist" title="拖拽我" draggable="true">列表4</div>
                    <div className="draglist" title="拖拽我" draggable="true">列表5</div>
                    <div className="draglist" title="拖拽我" draggable="true">列表6</div>
                </div>
                <div className="dragremind"></div>
                {/* <PsortList
                    dataSourse={[1, 2, 3, 4]}
                    onChange={}
                    renderRow={Item}
                >
                    {this.state.list.map(v => {
                        return <Item>})}
                </PsortList> */}
                <Input value={'111'} onChange={this.handleChange}></Input>
            </Fragment>
        )
    }
}
export default Drag