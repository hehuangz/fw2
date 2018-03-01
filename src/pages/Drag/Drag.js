import React, { Component } from 'react'
import './Styles.css'
const Fragment = React.Fragment;
class Drag extends Component {
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
            </Fragment>
        )
    }
}
export default Drag