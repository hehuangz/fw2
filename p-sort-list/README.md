## [Demo Basic](https://wya-team.github.io/wya-rc/dist/web/p-sort-list/Basic.html)
## 功能
1. 使元素可拖拽
2. 点击按钮可左右移动
3. 点击删除可移除元素

## API

| 属性           | 说明                          | 类型                | 默认值   |
| ------------ | --------------------------- | ----------------- | ----- |
| value        | 复制的文本内容                     | `any`             | -     |
| onCopyBefore | 复制前的操作, 要求返回`Promise`       | `(e) => Promise`  | -     |
| onCopyAfter  | 复制后的操作                      | `(value) => void` | -     |
| isReplace    | onCopyBefore 之后是否重新赋值给value | `bool`            | false |





| 属性         | 说明     | 类型       | 默认值  |
| ---------- | ------ | -------- | ---- |
| dataSourse | 必填，数据源 | `array`  |      |
| dataStyles | 元素的样式  | `object` |      |
| onChange   | 改变后的回调 | `func`   |      |
|            |        |          |      |

## 基础用法

```jsx
import React, { Component } from 'react';
import { Copy } from 'wya-rc';
class Basic extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<Copy value="test">
				<button>点我复制</button>
			</Copy>
		);
	}
}
export default Basic;
```

