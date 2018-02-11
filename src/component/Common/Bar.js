import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
class Bar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: ''
        }
    }
    render() {
        const { navArr, pathname, history } = this.props
        const data = navArr.filter(v => !v.hide)
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
                <TabBar
                >
                    {data.map(v => (
                        <TabBar.Item
                            title={v.title}
                            key={v.title}
                            icon={<i className={`iconfont ${v.icon}`} />}
                            selectedIcon={<i className={`iconfont ${v.icon}`} />}
                            selected={pathname && pathname === v.path}
                            onPress={() => history.push(v.path)}
                        >
                        </TabBar.Item>
                    ))}

                </TabBar>
            </div>
        )
    }
}
export default Bar