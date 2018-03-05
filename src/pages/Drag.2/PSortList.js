//拖拽组件，具体要求看文档Drag.md
import React, { Component } from 'react'
const Fragment = React.Fragment;
class PsortList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: this.props.list
        }
    }
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}
export default PsortList