---
title: Vue2中添加新属性，界面不刷新
categoires: 
 - Vue
tags: 
 - Vue
date: 2022-09-26
cover: 'https://mu-yan.cn/blogsImg/28.png'
isShowComments: false
---

::: tip

下文中提到的Vue均为`Vue2.x版本`

:::

## 一、`Vue`中直接添加属性存在的问题

```vue
<p v-for="(value,key) in item" :key="key">
    {{ value }}
</p>
<button @click="addProperty">动态添加新属性</button>
```

实例化一个vue实例：	

```javascript
const app = new Vue({
    el:"#app",
   	data:()=>{
       	item:{
            oldProperty:"旧属性"
        }
    },
    methods:{
        addProperty(){
            this.items.newProperty = "新属性"  // 为items添加新属性
            console.log(this.items)  // 输出带有newProperty的items
        }
    }
})
```

::: warning 

点击按钮，意料之中的没有更新页面，但实际上数据已经更新完成

:::

## 二、原因

::: tip

vue2主要是利用`Object.defineProperty`来实现数据响应式的

具体原因异步之前的文章，[Vue2数据双向绑定原理](https://oceanh.top/blog/vue/vue2shu-ju-shuang-xiang-bang-ding-yuan-li.html)

所以，当我们给一个对象添加新属性时，无法对它进行属性劫持

总结：Vue2不允许在已经创建的实例上动态添加新的响应式属性

:::

## 三、解决方案

### ①`Vue.set()`

```
Vue.set( target, propertyName/index, value )

参数

- `{Object | Array} target`
- `{string | number} propertyName/index`
- `{any} value`

返回值：设置的值
```

::: tip

关于`Vue.set`源码

源码位置：`src\core\observer\index.js`

其实就是再次调用了`defineReactive`,内部还是通过`Object.defineProperty`实现属性拦截

::: 

```javascript
function set (target: Array<any> | Object, key: any, val: any): any {
  ...
  defineReactive(ob.value, key, val)
  ob.dep.notify()
  return val
}

function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        get() {
            console.log(`get ${key}:${val}`);
            return val
        },
        set(newVal) {
            if (newVal !== val) {
                console.log(`set ${key}:${newVal}`);
                val = newVal
            }
        }
    })
}
```

### ②`Object.assign()`

```
 Object.assign(target, ...sources)

  参数：target--->目标对象

      source--->源对象

  返回值：target，即目标对象
```

```javascript
//创建一个新的对象，合并原对象和混入对象的属性
this.someObj = Object.assign({}.this.someObj,{newProperty:1,newProperty:2,...})	
```

### ③`$forceUpdate`

::: danger

​	实际上，当你发现自己在vue中遇到了需要强制更新的情况，那我劝你冷静下，因为99.9%的情况都是你的代码哪里出现了问题

`$forceUpdate`迫使` Vue` 实例重新渲染

**仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。**

:::

## 小结

* 当添加的属性不太多的情况下，可以使用`Vue.set()`方法进行添加
* 当需要添加大量属性时，建议使用`Object.assign()`
* 不到万不得已不要使用`$forceUpdate`强制刷新
