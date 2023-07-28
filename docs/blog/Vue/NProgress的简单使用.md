---
title: NProgress的基本使用
categories: 
 - Vue
tags: 
 - Vue
date: 2022-03-17
isShowComments: false
# 文章封面
cover: 'https://www.zpzpup.com/assets/image/gd04.jpg'
---
::: tip 前言
最近想在项目中添加进度条，用来优化用户的体验
:::

## 1.安装NProgress

NPM

```
npm install --save nprogress
```

Yarn

```
yarn add nprogress
```

## 2.引入

可以直接引入`js`、`css`或者通过`cdn`引入

```html
<script src='nprogress.js'></script>
<link rel='stylesheet' href='nprogress.css'/>
```

Vue项目中

```javascript
// 引入NProgress
import NProgress from 'nprogress'
// 引入nprogress样式文件
import'nprogress/nprogress.css'
```

## 3.使用

> 在这里主要说下Vue项目中的基本使用

### 3.1 发送请求时展示进度条

```javascript
//设置request拦截器,在发起请求的时,展示进度条
axios.interceptors.request.use(config => {
  // 展示进度条
  NProgress.start()
})

// 设置response拦截器，在请求结束时,关闭进度条
axios.interceptors.response.use(config => {
  // 关闭进度条
  NProgress.done()
})
```

### 3.2 路由跳转时展示进度条

```javascript
router.beforeEach((to, from, next) => {
  // 开启进度条
  NProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  // 关闭进度条
  NProgress.done()
})
```

### 3.3 Nprogress的其他方法

> 可以通过调用 `.set(n)`来设置进度，n是0-1的数字。

```javascript
NProgress.set(0.0);     
NProgress.set(0.4);
NProgress.set(1.0);     
```

> 可以使用`inc()`随机增长进度条，注意，这个方法永远不会让进度条达到100%。

```js
NProgress.inc();
```

