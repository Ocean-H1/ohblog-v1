---
title: Vue中的修饰符
categoires: 
 - Vue
tags: 
 - Vue
date: 2022-03-20
cover: 'https://www.zpzpup.com/assets/image/gd04.jpg'
isShowComments: false
---
::: tip 前言
这篇文章主要整理一下Vue中的 事件修饰符、按键修饰符和系统修饰符 及其基本使用
:::

## 事件修饰符

> 之前，我们经常通过 `event.preventDefault()`或者`event.stopPropagation()`来实现自己的一些特殊需求
>
> 在Vue中，为`v-on`提供了**事件修饰符**

* `.stop`
  * 阻止冒泡
* `.prevent`
  * 阻止默认事件（例如a标签的跳转）
* `.capture`
  * 事件默认是由内向外冒泡，capture修饰符的作用是反过来，由外向内捕获
* `.self`
  * 只有事件绑定的本身才会触发事件
* `.once`
  * 事件只执行一次
* `.passive`
  * 示处理事件函数中不会调用`preventDefault`函数，就会减少了额外的监听，从而提高了性能，**所以不能和.prevent修饰符一同使用**。（常用于提高移动端的性能）



```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

::: danger
修饰符的使用**顺序**很重要。比如，使用`v-on:click.prevent.self`会**阻止所有的点击**，而 `v-on:click.self.prevent`只会阻止对元素自身的点击
:::

## 按键修饰符

可以直接将 [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露的任意有效按键名转换为 kebab-case 来作为修饰符

例如 page-down

```vue
<!-- 只有在 `key` 是 `oage-down` 时调用 `onPageDown` -->
<input v-on:keyup.page-down="onPageDown">
```

Vue 提供了绝大多数常用的按键码的别名：

- `.enter`
- `.tab`
- `.delete` 
  - (捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

::: danger

`.esc`以及所有的方向键 在IE9中有不同的`key`值，如果你想支持IE9，就可以使用这些内置的别名

:::

## 系统修饰键

用法和修饰符类似

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`
