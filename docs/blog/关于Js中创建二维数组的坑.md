---
title: js中创建二维数组的坑
categories: 
 - 前端
tags:
 - javascript
date: 2022-2-19
---

# Js中二维数组的创建:
>首先JavaScript只支持 **一维数组** ，但我们可以通过一些方法实现矩阵以及多维数组

###### 其中普通的创建方法并不会出现什么问题：

(1) 利用一维数组嵌套一维数组的方式创建二维数组：

```javascript
let arr = [] ;
a[0] = [1,2,3,4,5,6];
a[1] = [10,20,30,40,50,60]
```
然后使用一个 双层for循环 就可以迭代这个二维数组中的元素
>所以用这种方法创建多维数组，不管有几个维度，都可以通过嵌套循环来遍历

## ==遇到问题的方法:==

```javascript
  let arr1= new Array(10).fill(new Array(10).fill(0))

```
控制台打印`arr1`：

![请添加图片描述](https://img-blog.csdnimg.cn/9e78ffe26b084ff390b659fafb83d6e9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAT2NlYW7vvIHvvIE=,size_20,color_FFFFFF,t_70,g_se,x_16)

**这时候，若你想设置，`arr[0][0] = 1`，你会发现二维数组所有子数组的第一项都被改为1**

![请添加图片描述](https://img-blog.csdnimg.cn/64d03615be70474e93adc6b43ce71807.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAT2NlYW7vvIHvvIE=,size_20,color_FFFFFF,t_70,g_se,x_16)
# 原因：
![请添加图片描述](https://img-blog.csdnimg.cn/5dfc8d3a1dae498baf998ce1be1eadec.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAT2NlYW7vvIHvvIE=,size_20,color_FFFFFF,t_70,g_se,x_16)


综上，还是选择老实一点的创建方法：

```javascript
var a = new Array();

for(var i=0;i<5;i++){        //一维长度为5

    a[i] = new Array();

    for(var j=0;j<5;j++){    //二维长度为5

    	a[i][j] = 0;
   }

}

```

