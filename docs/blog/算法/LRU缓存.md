---
title: 实现一个LRU缓存(Least Recently Used Cache)
categories:
  - 算法
date: 2024-03-09
cover: "https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/leetcode.png"
isShowComments: false
---

## 题目:lock:

> 请你设计并实现一个满足 LRU (最近最少使用) 缓存 约束的数据结构。
> 实现 LRUCache 类：
> LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
> int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
> void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
> 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

### 思路

![解题思路](https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/202403091736702.png)

## 代码

### 缓存访问的时间复杂度是 O(n)

```js
/**
 * @Description: 实现一个LRU Cache类
 * @Author: OceanH
 * @Date: 2024-03-09 16:15:51
 */
class Node {
  /**
   *
   * @param {Number} key
   * @param {Number} value
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  /**
   *
   * @param {Number} capacity
   */
  constructor(capacity) {
    this.cap = capacity;
    this.cache = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (this.cache.has(key)) {
      const targetNode = this.cache.get(key);
      this.remove(targetNode);
      this.insert(targetNode);
      return targetNode.value;
    }
    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key));
    }
    this.cache.set(key, new Node(key, value));
    this.insert(this.cache.get(key));
    if (this.cache.size > this.cap) {
      const old = this.tail.prev;
      this.remove(old);
      this.cache.delete(old.key);
    }
  }

  remove(node) {
    const prev = node.prev;
    const next = node.next;
    next.prev = prev;
    prev.next = next;
  }

  insert(node) {
    const next = this.head.next;
    this.head.next = node;
    next.prev = node;
    node.next = next;
    node.prev = this.head;
  }
}
```

### 使用双向链表和哈希表降低缓存访问的时间复杂度为 O(1)

```js

```
