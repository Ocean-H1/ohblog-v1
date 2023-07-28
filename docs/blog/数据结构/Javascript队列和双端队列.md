---
title: JS 队列和双端队列
categories:
 - 数据结构
tags: 
 - 队列
date: 2022-03-26
---

::: tip 前言

队列的概念就不在这整理了，直接开始实现吧

:::

## 1. 创建队列:tada:

> 声明自己的类，表示一个队列

```javascript
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
}
```

::: tip 

* 首先是需要存储队列中元素，也就是上面的`items`,我们可以用一个数组,但是为了在获取元素的时候更加高效，选择用一个对象来存储更好。
* `count`是用来控制队列的大小。
* 有时候，我们还需要从队列前端移除元素，所以定义一个`lowestCount`来标记，相当于一个指针的作用。

:::

### 1.1 `isEmpty()`:ocean:

> 判断队列是否为空,

```javascript
isEmpty() {
    return this.count - this.lowestCount === 0
}
```

### 1.2 `size()`:ocean:

> 获取队列的长度

```javascript
size() {
	return this.count - this.lowestCount; 
}
```



### 1.4 `enqueue() `:ocean:

> 向队列中添加元素

```javascript
enqueue(element) {
    this.items[this.count] = element;
    this.count++ ;
}
```

### 1.5 `dequeue() `:ocean:

> 从队列中移除元素,并返回被移除的元素

```javascript
dequeue() {
    //首先判断队列是否为空
    if(this.isEmpty()) {
        return undefined;
    }
    const res = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return res
}
```

### 1.6 `peek()`:ocean:

> 查看队头元素

```javascript
peek() {
    if(this.isEmpty()) {
        return undefined;
    }
    return this.items[this.lowestCount]
}
```

### 1.7 `clear()`:ocean:

> 清空队列

```javascript
clear() {
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
}
```

### 1.8 `toString() `:ocean:

> 如果你的`items`使用的是数组来定义的，那么不需要考虑这个问题
>
> 创建一个`toString`方法来像数组一样打印出队列中的内容

```javascript
toString() {
    if(this.isEmpty()) {
        return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for(let i = this.lowestCount+1;i<this.count;i++) {
        objString = `${objString},${this.items[i]}`;
    }
    return objString;
}
```

### 完整代码及使用

```javascript
class myQueue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }
    size() {
        return this.count - this.lowestCount;
    }
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const res = this.items[this.lowestCount];
        this.lowestCount++;
        return res;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

const queue = new myQueue()
console.log(queue.isEmpty()); //true
queue.enqueue('Ocean');
queue.enqueue('jojo');
console.log(queue.isEmpty()); //false
console.log(queue.size());  //2
console.log(queue.toString());//Ocean,jojo
console.log(queue.peek());//Ocean
console.log(queue.dequeue());//Ocean
console.log(queue.toString());//jojo
queue.clear();
console.log(queue.isEmpty());//true
```



## 2. 双端队列

> 允许同时从前端和后端添加和移出元素的特殊队列

> 在此主要整理`addFront()`方法

```javascript
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
}
```

方法:

* `addFront(element)`
  * 在前端添加新元素
* `addBack(element)`
  * 在后端添加新元素(与Queue中enqueue相同)
* `removeFront()`
  * 从前端移除第一个元素(与Queue中dequeue相同)
* `removeBack()`
  * 从后端移除第一个元素(与Stack中的pop相同)
* `peekFront()`
  * 返回队列前端的第一个元素(与Queue中的peek相同)
* `peekBack()`
  * 返回队列后端的第一个元素(与Stack中的peek相同)

​	

### 2.1 `addFront()`:ocean:

```javascript
addFront(element) {
        if(this.isEmpty()) {
            this.addBack(element);
        }else if(this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        }else {
            for(let i = this.count;i>0;i--) {
                this.items[i] = this.items[i-1]
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }
}
```

