---
title: 使用new fn 和new fn()的细微区别
categories: 
 - Html & Css & Js
date: 2022-08-12
isShowComments: false
cover: 'https://www.zpzpup.com/assets/image/gd03.jpg'
---

## 在多数情况下，两种方法的结果是一致的:

```javascript
function Parent(){
  this.num = 1;
}
console.log(new Parent());//输出Parent对象：{num:1}
console.log(new Parent);//输出Parent对象：{num:1}
```

## 例外:

```javascript
function Parent(){
  this.num = 1;
}
console.log(new Parent().num);//1
console.log(new Parent.num);//报错
```

## 原因

::: tip

* `new Parent().num` 的执行顺序相当于`(new Parent()).num`
* `new Parent.num`相当于`new (Parent.num)`
* 由此看来 `new` 的构造函数后跟括号优先级会提升

:::