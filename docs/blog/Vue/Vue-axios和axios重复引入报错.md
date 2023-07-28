---
title: Vue-axios和axios重复引入的报错
categories: 
 - Vue
tags: 
 - Vue
date: 2022-03-17
isShowComments: false
# 文章封面
cover: 'https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/axios.png'
---
::: tip 前言
最近和伙伴一起合作开发时，重复引入了Vue-axios和axios导致报错
:::

## 报错

![](https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/202303051714181.png)

## 解决办法

> 直接注释下面两行代码就好

```javascript
//import VueAxios from "vue-axios";
/Vue.use(VueAxios,axios)
```

