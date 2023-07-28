---
title: Vuex状态持久化
categories: 
 - Vue项目总结
tags:
 - vuex
date: 2022-06-05
isShowComments: false
cover: 'https://www.zpzpup.com/assets/image/gd05.jpg'
---

## 使用Vuex管理状态:pineapple:

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 车站列表
        stationList: [],
        // 当前激活车站信息(地图页面)
        activeStation: {},
        // 用户的登录状态
        isLogin: false,
        // 用户权限
        isRoot: false,
        // 查询车票页面的状态
        searchStatus: {},
    },
    // 获取属性的状态
    getters: {
        // 获取登录状态
        isLogin: state => state.isLogin,
        // 获取权限状态
        isRoot: state => state.isRoot,
        // 获取车票查询页面的状态
        searchStatus: state => state.searchStatus
    },
    mutations: {
        // 修改车站信息为用户点击的车站
        setPosition(state, activeStation) {
            state.activeStation = activeStation
        },
        // 设置车站列表
        setStationList(state, list) {
            state.stationList = list
        },
        // 保存登录状态
        userStatus(state, flag) {
            state.isLogin = flag
        },
        // 保存用户权限
        userPermissions(state,flag) {
            state.isRoot = flag
        },
        // 设置车票查询页面的状态
        setSearchStatus(state,status){
            state.searchStatus = status
        },
    },
    actions: {
        // 设置登录状态
        userLogin({ commit }, flag) {
            commit('userStatus', flag)
        },
        // 设置权限状态
        setPermissions({commit},flag) {
            commit('userPermissions',flag)
        }
    },
})
```

## 在App.vue中进行设置:pineapple:

::: tip

​	在主组件`app.vue`中进行一些操作

	1. 在页面刷新前，将Vuex中的状态保存到客户端存储(此处用`sessionStorage`)
	1. 在页面加载的时候从`sessionStorage`中取出，并赋值state

:::

```javascript
created() {
    	// 在页面刷新的时候将vuex里的数据保存到sessionStorage中
        window.addEventListener('beforeunload', () => {
          sessionStorage.setItem('dataStore', JSON.stringify(this.$store.state))
        })
        // 在页面加载的时候读取sessionStorage中的数据
        sessionStorage.getItem('dataStore') &&
          this.$store.replaceState(
            Object.assign(
              this.$store.state,
              JSON.parse(sessionStorage.getItem('dataStore'))
            )
          )
  },
```

