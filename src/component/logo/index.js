// LOGO
import React from 'react'
import logoImg from './job.png'
import './index.css'
class Index extends React.Component{
    render(){
        return (
            <div className="logoImg">
                <img src={logoImg} alt='logo' />
            </div>
        )
    }
}
export default Index