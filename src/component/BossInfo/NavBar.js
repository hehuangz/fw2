import React, { Component } from 'react';
import { NavBar } from 'antd-mobile'

const Index = (props) => {
    return (
        <NavBar mode="dark">{props.title}</NavBar>
    );
};
export default Index;
