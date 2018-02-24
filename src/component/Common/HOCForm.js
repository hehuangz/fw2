// 高阶组件，用于将表单中的handleChange与this.state复用
import React from 'react'
export function HOCForm(Comb) {
    return class Index extends React.Component {
        constructor() {
            super()
            this.state = {
                user: '',
                pwd: ''
            }
            this.handleChange = this.handleChange.bind(this)
        }
        handleChange(key, val) {
            this.setState({
                [key]: val
            })
        }
        render() {
            return <Comb {...this.props} state={this.state} handleChange={this.handleChange} />
        }
    }
}