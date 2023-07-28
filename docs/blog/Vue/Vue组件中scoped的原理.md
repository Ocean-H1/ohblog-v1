---
title: Vue组件中scoped原理
categoires: 
 - Vue
tags: 
 - Vue
date: 2022-04-25
cover: 'https://www.zpzpup.com/assets/image/gd07.jpg'
isShowComments: false
---



## 一、使用场景:ocean:

::: tip 

在编写Vue组件时，我们通常希望一些样式只作用于这一个组件，而不影响全局，此时只需要在style标签后加上一个scoped就可以了，但它是怎么做到的呢？

当一个style标签拥有scoped属性时，它的CSS样式就只能作用于当前的组件，通过该属性，可以使得组件之间的样式不互相污染。

如果你善于观察，应该会发现，渲染后的dom元素上有很多 data-v-xxxxx 这样的标识，其实这就是秘密所在.

:::

## 二、实现原理:ocean:

scoped属性的效果主要是通过PostCss实现的

> * 为组件实例生成一个唯一标识，给组件中的每个标签对应的dom元素添加一个标签属性，`data-v-xxxx`
> * 给`<style scoped>`中的每个选择器的最后一个选择器添加一个属性选择器，`原选择器[data-v-xxxx]`，如：原选择器为`.container #id div`，则更改后选择器为`.container #id div[data-v-xxxx]`

## 三、关于样式穿透:ocean:

#### 为什么需要样式穿透

> 在实际开发过程中，我们常常用到一些第三方的组件库,当需要修改这些组件的默认样式，又不想去除scoped污染全局时，就可以使用样式穿透

#### 样式穿透的用法

##### 1. `>>>`

> 如果项目使用css原生样式，那么可以直接使用 `>>>`

```css
.container >>> .el-table {
    ...
}
```

##### 2. `/deep/`

> 项目中用到了预处理器 scss 、sass、less 操作符 >>> 可能会因为无法编译而报错 。可以使用 /deep/
> `注意：vue-cli3以上版本不可以`

```less
.container /deep/ .el-table {
    ...
}
```

##### 3. ::v-deep

```
.container ::v-deep .el-table {
    ...
}
```

### 样式穿透的原理

> 用了样式穿透后，在deep之后的选择器最后就不会再加上标识。
