---
title: Vue组件生命周期
categories: 
 - Vue
tags: 
 - Vue
cover: 'https://www.zpzpup.com/assets/image/gd04.jpg'
date: 2022-03-21
isShowComments: false
---

## 一、什么是Vue的生命周期？
::: tip

vue每个组件都是独立的，每个组件都有一个属于它的生命周期，从一个组件**创建、数据初始化、挂载、更新、最后销毁**，这就是一个组件所谓的生命周期。

Vue组件声明周期总体上可以分为8个阶段，分别是：创建前后，挂载前后、更新前后、销毁前后，以及一些特殊场景的生命周期

:::

## 二、生命周期有哪些:

| 生命周期     |  描述    | 使用场景 |
| :--: | :--: | :--: |
|   beforeCreate   |    组件实例被创建之初  | 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务。该阶段data,methods,watcher都还不存在，但$route已经存在，可以根据路由信息进行重定向等操作 |
| created | 组件实例已经完全创建 | 组件初始化完毕，该阶段可访问data，并使用watcher, events,methods，常用于ajax异步数据获取 |
| beforeMount | 组件挂载之前 | 将HTML解析生成AST节点，再根据AST节点动态生成渲染函数。相关render函数首次被调用。(未执行渲染、更新，dom未创建) |
| mounted | 组件挂载到实例上去之后 | 挂载结束，dom已创建，可获取访问数据和操作dom元素 |
| beforeUpdate  |     组件发生数据变化，更新之前     | 可用于获取更新前各种状态 |
|    updated    |          数据数据更新之后          | 虚拟dom重新渲染之后执行，若在此阶段在此修改vm.$data,会再次触发beforeUpdate、updated，进入死循环 |
| beforeDestroy |          组件实例销毁之前          | 销毁前，可用于一些定时器或订阅的取消 |
|   destroyed   |          组件实例销毁之后          | 组件已销毁，所有的事件监听器已被移除，子实例被销毁 |
|   activated   |    keep-alive 缓存的组件激活时     | / |
|  deactivated  |  keep-alive 缓存的组件停用时调用   | / |
| errorCaptured | 捕获一个来自子孙组件的错误时被调用 | / |



## 三、生命周期流程：

![life Cycle](https://static.vue-js.com/44114780-3aca-11eb-85f6-6fac77c0c9b3.png)

 1. 首先做的的事情就是实例化vue对象，也就是创建一个vue实例，紧接着 初始化事件以及生命周期；
 2. 触发 **beforCreate**，是创建实例之前执行的钩子事件，此事件执行完成后进行初始化注入；
 3.  触发**created**,是创建实例之后执行的钩子事件 ；
 4. 然后Vue会判断，是否含有"el"选项，如果没有，则使用vm.$mount()挂载模板；如果有，就判断是否含有template，然后进行编译模板的工作，将data对象里面的数据和使用vue语法声明的模板编译成浏览器可读的html；
 5. 触发 **beforMount**,是将编译好的HTML挂载到对应的虚拟dom上时执行的钩子事件，此时页面并没有内容；
 6. 然后将编译好的HTML替换掉el属性所指向的dom；
 7. 此时触发**mounted**，是将编译好的HTML挂载完成后执行的钩子，这个钩子函数中一般进行一些ajax的请求获取数据进行数据的初始化，注意：**mounted在整个实例中只执行一次**
 8. 此时，实例已经将编译后的HTML挂载完成，开始**实时监控数据的变化，并随之更新dom**
 9. **beforeUpdate**，是更新之前执行的钩子；**updated**是更新完成后执行的钩子；
 10. 接下来，vue实例开始执行销毁工作,**拆除数据监听，子组件和事件监听**；
 11. 此时触发**beforeDestroy**,是实例销毁工作完成前执行的钩子；
 12. 等待实例销毁工作完成后，触发**destroyed**,是销毁工作完成后执行的钩子;

 

## 四、提出一些问题:question:

### 1. ajax一般放在哪个生命周期函数中?

::: tip

在`created,mountd`中都可以发送数据请求，但是，大部分会在`created`中发送



在`created`中发送的优点:

- 能更快获取到服务端数据，减少页面loading时间
- 放在`created`中有助于一致性，因为SSR（服务端渲染）不支持`beforeMount、mounted`钩子

:::

### 2. Vue中render函数的调用时机？

::: tip

- render函数的调用时机是在`beforeMount`之后，`mounted`之前
- 通过call将`render`函数的this绑定到了vm，并且会根据Proxy的支持情况和是否是SFC做一些不同的处理
- `render`函数的参数h的作用是创建vnode

:::

### 3. 父子组件的生命周期执行顺序?

::: tip

整个过程依然可以分为四个阶段: **创建前后，挂载前后，更新前后，销毁前后**

- **加载渲染过程:**
  - 父组件`beforeCreate` -> 父组件`created`->父组件`beforeMount`->子组件`beforeCreate`->子组件`created`->子组件`beforeMount`->子组件`mounted`->父组件`mounted`
- **子组件更新过程:**
  - 父组件`beforeUpdate`  -> 子组件`beforeUpdate`  -> 子组件`updated` -> 父组件`updated`
- **父组件更新过程:**
  - 父组件`beforeUpdate` -> 父组件`updated`
- **销毁过程:**
  - 父组件`beforeDestory` -> 子组件`beforeDestory` -> 子组件`destoryed` -> 父组件`destoryed`

:::

### 4. 能否使用箭头函数来定义一个声明周期方法?

::: warning

不能

例如 `created: () => this.fetchTodos()`,会导致this指向父级而不是当前组件实例

:::

### 5. 父组件传递接口数据给子组件时需要注意的问题

#### 问题:

::: warning

在父组件的`created`中发送请求获得数据，通过props传递给子组件。子组件在`created`或`mounted`中拿到父组件传递过来的数据，这样处理是有问题的。

在父组件调用接口传递数据给子组件时，**接口响应显然是异步的**。这就会导致子组件没法正常接收到数据。当子组件的mounted都执行完之后，此时可能父组件的请求才返回数据。会导致，从父组件传递给子组件的数据是undefined。

:::

#### 解决方法1: 

::: tip

在渲染子组件的时候加上一个条件，`data1`是父组件调用接口返回的数据。当有数据的时候再去渲染子组件，这样就会形成天然的阻塞。在父组件的`created`中的请求返回数据后，才会执行子组件的`created`,`mounted`。最后执行父组件的`mounted`

:::

```vue
<div class="test">
    <children v-if="data1" :data="data1" ></children>
</div>
```

#### 解决方法2:

::: tip

在子组件中watch监听，父组件获取到值，这个值发生变化就可以监听到

:::

```javascript
watch: {
	data: {
		deep: true
		handler: function(newVal,oldVal) {
			this.$nextTick(() => {
                this.data = newVal
                this.data = newVal.url ? newVal.url : ''
            })
		}
	}
}
```

```javascript
props: ['data1']
watch: {
    data1: {
        deep: true,
            handler: function(newVal,oldVal) {
                this.$nextTick(() => {
                    this.data1 = newVal
                    this.showData1(this.data1)
                })
            }
    }
}
```

参考连接: https://zhuanlan.zhihu.com/p/389292000
