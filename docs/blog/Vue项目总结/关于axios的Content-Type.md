---
title: 关于axios的Content-Type
categories: 
 - Vue项目总结
tags:
 - vue
date: 2022-09-28
isShowComments: false
cover: 'https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/axios.png'
---

::: tip

​		最近在和后端联调过程中，后端接口是从post请求的`url`中拿到参数，而一般post请求参数都是放在**请求体**中的，在文档中没有注明加上沟通不充分的情况下，导致后端拿不到前端发送的参数的值，特此记录这次问题。

:::



## 一、`axios`传递参数的基本方式:robot:

::: tip

​	首先，参数传递一般有两种，一种是`params`,另一种是`data`,相信大家在实际使用中都已经体验过

:::

### ①`get`请求

```javascript
// 假设处理好的参数
const params = {
    id: this.id,
    username: this.name
}
axios({
    method: 'GET',
    url: 'xxx',
    params: params
})
// 或者
axios({
    method: 'GET',
    url: `/xxx?id=${id}`,
})
```

### ②`post`请求

```javascript
const params = {
    id: this.id,
    username: this.name
}
axios({
    method: 'POST',
    url: 'xxx',
    data: params
})
// 或者
axios({
    method: 'POST',
    url: 'xxx',
    params: params
})
```

### ③`params`形式传递参数

::: warning

`params`形式的参数会被拼接到`url`后面(params是查询参数)

:::

![](https://img2022.cnblogs.com/blog/1263537/202208/1263537-20220827091827427-534590062.png)

### ④`data`形式传递参数

::: warning

`data`形式的参数会根据参数类型，自动设置请求头中`Content-Type`属性的值

:::

#### (1)比如发送下面的请求，会发现请求头的`Content-Type`被设置成了`application/json;charset=UTF-8`

```javascript
axios({
        url: '/login',
        method: 'post',
        data: {username: 'xxxx', password: 123123}
})
```

#### (2) 比如发送一个上传文件的请求`formdata`, 会发现请求头的`content-type`是`multipart/form-data`

```javascript
// 创建一个formData格式的数据
let formData = new FormData()
formData.append('file',file)
axios({
    url: '/login',
    method: 'POST',
    data: formData
})
```



