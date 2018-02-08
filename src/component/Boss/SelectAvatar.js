import React, { Component } from 'react';
import { Grid } from 'antd-mobile'

const Index = (props) => {
	let arr = []
	for (let i = 1; i <= 14; i++) {
		arr.push(`avatar (${i}).png`)
	}
	const data = Array.from(arr).map((v, i) => ({
		icon: require(`../imgs/${v}`),
		text: `name${i}`
	}));
	const handleChange = (v) => {
		props.select(v.icon)
	}

	return (
		<Grid
			data={data}
			columnNum={5}
			onClick={(v) => handleChange(v)}
		/>
	);
};
export default Index;
