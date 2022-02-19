---
title: JavaScript事件循环机制
categories: 
 - 前端
tags:
 - javascript
date: 2022-2-19
# 文章封面
cover: 'https://www.zpzpup.com/assets/image/gd04.jpg'
---
:::tip
这次主要整理一下自己对 Js事件循环机制，同步，异步任务，宏任务，微任务的理解，大概率暂时还有些偏差或者错误。如果有，十分欢迎各位纠正我的错误！
:::



### 一、**事件循环和任务队列产生的原因：**
>首先，JS是**单线程**,这样设计也是具有合理性的，试想如果一边进行dom的删除，另一边又进行dom的添加，浏览器该如何处理？

引用：
>“*单线程即任务是串行的，后一个任务需要等待前一个任务的执行，这就可能出现长时间的等待。但由于类似ajax网络请求、setTimeout时间延迟、DOM事件的用户交互等，这些任务并不消耗 CPU，是一种空等，资源浪费，因此出现了异步。通过将任务交给相应的异步模块去处理，主线程的效率大大提升，可以并行的去处理其他的操作。当异步处理完成，主线程空闲时，主线程读取相应的callback，进行后续的操作，最大程度的利用CPU。此时出现了同步执行和异步执行的概念，同步执行是主线程按照顺序，串行执行任务；异步执行就是cpu跳过等待，先处理后续的任务（CPU与网络模块、timer等并行进行任务）。由此产生了任务队列与事件循环，来协调主线程与异步模块之间的工作。*“”


### 二、==事件循环机制==：
图解：
![在这里插入图片描述](https://img-blog.csdnimg.cn/30b61e39cc3c4116b262e8e049ccfbba.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAT2NlYW7vvIHvvIE=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
首先把JS执行代码操作 分为`主线程`，`任务队列`，任何一段js代码的执行都可以分为以下几个步骤：

>步骤一： 主线程读取JS代码，此时为同步环境，形成相应的堆和执行栈；
步骤二： 当主线程遇到异步操作的时候，将异步操作交给对应的API进行处理；
步骤三： 当异步操作处理完成，推入任务队列中
步骤四： 主线程执行完毕后，查询任务队列，取出一个任务，并推入主线程进行处理
步骤五： 重复步骤二、三、四

其中常见的异步操作有：ajax请求，setTimeout,还有类似onclik事件等
等

### 三、==任务队列==：
>同步和异步任务分别进入不同的执行环境，同步的进入主线程，即主执行栈，异步的进入任务队列 

>首先，顾名思义，既然是一个队列，那么就遵循`FIFO`原则

如上示意图，任务队列存在多个，它们的执行顺序：

>同一任务队列内，按队列顺序被主线程取走；
>不同任务队列之间，存在着优先级，优先级高的优先获取（如用户I/O）

##### 3.1 任务队列 的类型：
任务队列分为 `宏任务(macrotask queue)` 和 `微任务(microtask queue)`

宏任务主要包含：**script( 整体代码)、setTimeout、setInterval、I/O、UI 交互事件、setImmediate(Node.js 环境)**

微任务主要包含：**Promise、MutationObserver、process.nextTick(Node.js 环境)**

##### 3.2 两者区别：
微任务`microtask queue:`   
>(1) **唯一**，整个事件循环当中，仅存在一个;
>(2) **执行为同步**，同一个事件循环中的microtask会按队列顺序，串行执行完毕；

PS：所以利用microtask queue可以形成一个同步执行的环境

宏任务`macrotask queue`:
>(1) **不唯一**，存在一定的优先级（用户I/O部分优先级更高）
>(2) **异步执行**，同一事件循环中，只执行一个

##### 3.3 ==更细致的事件循环过程==
* 一、二、三、步同上
* 主线程查询任务队列，执行microtask queue，将其按序执行，全部执行完毕;
* 主线程查询任务队列，执行macrotask queue，取队首任务执行，执行完毕；
* 重复四、五步骤;

先用一个简单的例子加深一下理解：

```javascript
console.log('1, time = ' + new Date().toString()) // 1.进入主线程，执行同步任务，输出1
setTimeout(macroCallback, 0)// 2. 加入宏任务队列 // 7.开始执行此定时器宏任务，调用macroCallback，输出4
new Promise(function (resolve, reject) {//3.加入微任务队列
  console.log('2, time = ' + new Date().toString())//4.执行此微任务中的同步代码，输出2
  resolve()
  console.log('3, time = ' + new Date().toString())//5.输出3
}).then(microCallback)// 6.执行then微任务,调用microCallback,输出5

//函数定义
function macroCallback() {
  console.log('4, time = ' + new Date().toString())
}

function microCallback() {
  console.log('5, time = ' + new Date().toString())
}
```
运行结果：
![请添加图片描述](https://img-blog.csdnimg.cn/462e9c9803e144398e502048177ac9c8.png)
### 四、==强大的异步专家 `process.nextTick()`==
>第一次看见这东西，有点眼熟啊，想了一下好像之前vue项目中 用过 `this.$nextTick(callback)` 当时说的是 **当页面上元素被重新渲染之后 才会执行回调函数中的代码**
，不是很理解，暂时记住吧![请添加图片描述](https://img-blog.csdnimg.cn/47ccaf7465ac499db290f239ff6d9139.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAT2NlYW7vvIHvvIE=,size_20,color_FFFFFF,t_70,g_se,x_16)


>**process是node中的一个全局对象，可以通过它获得或修改进程相关信息**
###### 4.1 `process.nextTick()`在何时调用？
>任何时候在给定的阶段中调用 process.nextTick()，所有传递到 process.nextTick() 的回调将在**事件循环继续之前**解析

**在事件循环中，每进行一次循环操作称为`tick`**，知道了这个之后，对理解这个方法什么时候调用瞬间明白了一些！


再借用别人的例子，加深一下对事件循环的理解吧：
```javascript
var flag = false // 1. 变量声明

Promise.resolve().then(() => {
  // 2. 将 then 任务分发到本轮循环微任务队列中去
  console.log('then1') // 8. 执行 then 微任务， 打印 then1，flag 此时是 true 了
  flag = true
})
process.nextTick(() => {
  console.log('nextTick1');
})
new Promise(resolve => {
  // 3. 执行 Promise 里 同步代码
  console.log('promise')
  resolve()
  setTimeout(() => { // 4. 将定时器里的任务放到宏任务队列中
    console.log('timeout2') // 11. 执行定时器宏任务 这边指定了 10 的等待时长, 因此在另一个定时器任务之后执行了
  }, 10)
}).then(function () {
  // 5. 将 then 任务分发到本轮循环微任务队列中去
  console.log('then2') // 9. 执行 then 微任务， 打印 then2，至此本轮 tick 结束
})
function f1(f) {
  // 1. 函数声明
  f()
}
function f2(f) {
  // 1. 函数声明
  setTimeout(f) //  7. 把`setTimeout`中的`f`放到宏任务队列中，等本轮`tick`执行完，下一次事件循环再执行
}
f1(() => console.log('f为：', flag ? '异步' : '同步')) // 6. 打印 `f为：同步`
f2(() => {
  console.log('timeout1,', 'f为：', flag ? '异步' : '同步') // 10. 执行定时器宏任务
})

console.log('本轮宏任务执行完') // 7. 打印
```
运行结果：
![请添加图片描述](https://img-blog.csdnimg.cn/4dfddb91b82246728e3b85943afb17f5.png)

==**process.nextTick 中的回调是在当前tick执行完之后，下一个宏任务执行之前调用的。**==

官方的例子：

```javascript
let bar;

// 这个方法用的是一个异步签名，但其实它是同步方式调用回调的
function someAsyncApiCall(callback) { callback(); }

// 回调函数在`someAsyncApiCall`完成之前被调用
someAsyncApiCall(() => {
  // 由于`someAsyncApiCall`已经完成，bar没有被分配任何值
  console.log('bar', bar); // undefined
});

bar = 1;
```
使用 `process.nextTick`:

```javascript
let bar;

function someAsyncApiCall(callback) {
  process.nextTick(callback);
}

someAsyncApiCall(() => {
  console.log('bar', bar); // 1
});

bar = 1;
```

再看一个含有 `process.nextTick`的例子：

```javascript
console.log('1'); // 1.压入主线程执行栈，输出1

setTimeout(function () { //2.它的回调函数被加入 宏任务队列中
	//7.目前微任务队列为空，所以取出 宏任务队列首项，执行此任务
    console.log('2'); // 输出2
    process.nextTick(function () { // 16.上一次循环结束，在下一次宏任务开始之前调用，输出3
        console.log('3'); 
    })
    new Promise(function (resolve) {
    	//8.执行 此promise的同步任务，输出4，状态变为resolve
        console.log('4');
        resolve();
    }).then(function () {//9.检测到异步方法then，将其回调函数加入 微任务队列中
        console.log('5'); // 10. 取出微任务队列首项，也就是这个then的回调，执行，输出5
    })
})

process.nextTick(function () { // 11.一次事件循环结束，执行nextTick()的回调，输出6
    console.log('6');
})
new Promise(function (resolve) { 
	//3.执行promise中的同步任务 输出7，状态变为resolve
    console.log('7');
    resolve();
}).then(function () { //4.检测到异步方法then，将其回调函数加入 微任务队列中
    console.log('8'); //6. 主线程执行完毕，取出微任务队列中首项，将其回调函数压入执行栈，输出8
})

setTimeout(function () { //5.它的回调函数 加入 宏任务队列中
	//12.此刻，微任务队列为空，开始执行此宏任务
    console.log('9'); // 输出9
    process.nextTick(function () { // 17.此刻 微任务和宏任务队列都为空了，此次循环自动结束，执行此回调，输出10
        console.log('10');
    })
    new Promise(function (resolve) {
    	//13. 执行此promise的同步任务，输出11，状态改变
        console.log('11');
        resolve();
    }).then(function () {//14.检测到then异步方法，加入微任务队列
        console.log('12');//15.取出微任务队列首项，执行此then微任务，输出12
    })

})
```
运行结果：
![请添加图片描述](https://img-blog.csdnimg.cn/8ee99fa4391540bbbda6ab6960cf0e4f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAT2NlYW7vvIHvvIE=,size_17,color_FFFFFF,t_70,g_se,x_16)
此过程步骤详解：
1.  首先进入主线程，检测到log只是普通函数，压入执行栈，输出1;
2. 检测到setTimeout为特殊的异步方法（macrotask），将其交由其他内核模块处理，setTimeout的回调函数被放入`宏任务(macrotask)`队列中;
3. 检测到process.nextTick() ，将其加入微任务队列，但其回调在一次事件循环结束，下一次宏任务之前触发；
4. 检测到promise对象以及其中的resolve是一般的方法，将其同步任务压入执行栈，输出7，并且状态改变为ressolve;
5. 检测到刚才的promise对象的then方法是异步方法，将其交由其他内核模块处理，回调函数被放入`微任务(microtask)`队列中;
6. 又检测到一个setTimeout为特殊的异步方法，其回调函数被放入`宏任务(macrotask)`队列中;
7. 此时，主线程空了，开始从任务队列中取，取出 微任务队列首项，也就是第一个promise的then方法的回调，执行，输出8;
8. 检查此时微任务队列为空，取出宏任务队列首项，也就是第一个setTimeOut,执行其回调函数，输出2;
9. 在它的回调中碰到一个promise，执行其同步任务，输出4，状态改变;
10. 然后检测到then，同上，加入到微任务队列;
11. 取出微任务队列首项到主线程执行，也就是刚才的then，输出5;
12. 此次循环结束，在下一个宏任务开始之前，调用第一个process.nextTick()的回调，输出6;
13. 开始下一个宏任务，取出宏任务队列首项，也就是第二个setTimeout的回调，将其压入执行栈，输出9；
14. 然后将里面的promise对象的同步任务压入执行栈，输出11，状态改为resolve；
15. 这时又检测到异步then方法，同上，将其回调加入 微任务队列;
16. 取出微任务队列首项，也就是刚才的then回调，输出12;
17. 此次循环结束,在下一次宏任务开始之前执行，process.nextTick()的回调,输出3;
18. 此时发现 任务队列和主线程都空了，此次事件循环自动结束，执行最后一个process.nextTick()的回调，输出10;



结束！趁着灵光乍现的时候，噼里啪啦赶紧记录下来，后面再检查检查是否有问题，也欢迎各位指出我的错误。


**再来分析一个简单的例子：**
```javascript
console.log('0');
setTimeout(() => {
    console.log('1');
    new Promise(function(resolve) {
        console.log('2');
        resolve();
    }).then(()=>{
        console.log('3');
    })
    new Promise(resolve => {
        console.log('4');
        for(let i=0;i<9;i++){
            i == 7 && resolve();
        }
        console.log('5');
    }).then(() => {
        console.log('6');
    })
})
```

* 进入主线程，检测到log为普通函数，压入执行栈，输出0;
* 检测到setTimeOut是特殊的异步方法，交给其他模块处理，其回调函数加入 宏任务(macrotask)队列;
* 此时主线程中已经没有任务，开始从任务队列中取;
* 发现微任务队列为空，则取出宏任务队列首项，也就是刚才的定时器的回调函数;
* 执行其中的同步任务，输出1;
* 检测到promise及其resolve方法是一般的方法，压入执行栈,输出2，状态改变为resolve;
* 检测到这个promise的then方法是异步方法，将其回调函数加入 微任务队列;
* 紧接着又检测到一个promise，执行其中的同步任务，输出4，5，状态改变为resolve;
* 然后将它的then异步方法加入微任务队列;
* 执行微任务队列首项，也就是第一个promise的then，输出3;
* 再取出微任务队列首项，也就是第二个promise的then，输出6;
* 此时主线程和任务队列都为空，执行完毕;


代码运行结果：
![请添加图片描述](https://img-blog.csdnimg.cn/555526b5ffc74e1fafd7e64f8db9403e.png)

![请添加图片描述](https://img-blog.csdnimg.cn/ed59ed610f004e01a746dadd2a66d9d6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAT2NlYW7vvIHvvIE=,size_20,color_FFFFFF,t_70,g_se,x_16)
