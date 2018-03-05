//拖拽组件，具体要求看文档Drag.md
import React, { Component } from 'react'
import PSortList from './PSortList'
class Drag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { id: 1, text: '1111' },
                { id: 2, text: '2222' },
                { id: 3, text: '3333' },
                { id: 4, text: '4444' },
                { id: 5, text: '5555' },
            ]
        }
    }
    render() {
        const itemStyles = { background: 'pink', margin: 10 }
        const Item = <div styles={{ background: 'pink', margin: 10 }}>我是一条Item</div>
        return (
            <PSortList
            // dataSourse={[1, 2, 3, 4]}
            // onChange={}
            // renderRow={Item}
            >
                {this.state.list.map(v => {
                    return <div key={v.id} style={itemStyles}>{v.text}</div>
                })}
            </PSortList>
        )
    }
}
export default Drag