---
title:  Pinia状态持久化
categories: 
 - Plugin
date: 2022-07-26
isShowComments: false
cover: 'https://www.zpzpup.com/assets/image/gd03.jpg'
---
::: tip
在vue3中，常用Pinia代替Vuex来进行状态管理。这里贴上Pinia的官网，有兴趣的可以去了解一下。[Pinia](https://pinia.web3doc.top/):pineapple:
:::

::: tip

​	其他过程就省略了，今天在vue3中实现一个最简单的Pinia持久化插件,后续可能会进一步封装

:::

```typescript
//   FilePath <  @/main.ts >

import { createApp, toRaw } from 'vue'
import App from './App.vue'
//	引入pinia
import { createPinia, PiniaPluginContext } from "pinia";

const app = createApp(App)

type Options = {
    key?: string
}
//	默认的key
const __piniaKey__: string = 'Ocean'
//	负责存储的函数
const setStorage = (key: string, value: any) => {
    //	将对象转字符串后存入 localStorage
    localStorage.setItem(key, JSON.stringify(value))
}
//	负责取值的函数
const getStorage = (key: string) => {
    //	根据key拿到localStorage中对应的值
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
//	Pinia持久化插件
const piniaPlugin = (options: Options) => {
    return (context: PiniaPluginContext) => {
        const { store } = context
        const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
        console.log(data);
        
        store.$subscribe(() => {
            // store.$state是一个 proxy 对象 要通过 toRaw() 转换成 原始对象
            setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`,toRaw(store.$state))
        })
        return {
            ...data
        }
    }
}
//	创建一个Pinia实例
const store = createPinia()
//	注册插件
store.use(piniaPlugin({
    key: 'pinia'
}))

app.use(store)
app.mount('#app')
```

