# 拖拽组件

https://react-dnd.github.io/react-dnd/docs-tutorial.html

### 1 需求

1. 用h5实现可拖动，动效可以先不做。http://www.zhangxinxu.com/wordpress/2011/02/html5-drag-drop-%E6%8B%96%E6%8B%BD%E4%B8%8E%E6%8B%96%E6%94%BE%E7%AE%80%E4%BB%8B/
2. 移入出现左右箭头和删除按钮
3. 做受控与非受控2种方式
4. 位置可重新排序
5. 不用兼容低版本和移动端
6. 样式很重要、功能好实现

### 2 要求

1. 不依靠其他组件

2. 传个数组就可以实现

   ```js
   constructor(props) {
       super(props)
       this.state = {
           list: this.props.list
       }
   }
   render(){
     return (
       <PsortList
         dataSourse={[1, 2, 3, 4]}
         onChange={}//回调，每次拖拽后调用
         renderRow={Item}//每个子组件外层包裹的元素
       >
           {list.map(v => { return <Item>})}//Item经过加工后的，加了左右箭头后的Item元素
       </PsortList>
     )
   }
   ```

3. 受控与非受控

   ```js
   <Input></Input>//这是非受控组件，onChange=null
   <Input value={'111'} onChange={this.handleChange}></Input>//这是受控组件，没有onChange，这个input框的值就改变不了
   ```

### 3 问题

1. 最新的自动生成demo的工具，目前只支持mac的操作系统，不支持windows，对这个拖拽组件有无影响？无影响！
2. 确认<></>是否是经过处理才能用的
3. antd的Select的定位问题问苟万彤

