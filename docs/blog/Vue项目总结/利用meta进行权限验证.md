---
title: 前端利用meta源信息进行简单的权限验证
categories: 
 - Vue项目总结
tags:
 - vue-router
date: 2022-06-05
isShowComments: false
cover: 'https://www.zpzpup.com/assets/image/gd04.jpg'
---

::: warning

​	其实这种权限验证应该由后端来控制更为安全，所以只是在前端进行一个简单的控制,实际项目中应用建议配合后端一起

​	应用场景：

			1. 某些页面需要用户登录后，才能访问，不允许直接通过路由进行访问，则可以通过路由守卫进行控制
			1. 某些页面只能管理员可以访问

:::

## 1. 设置`meta`源信息中的权限:pineapple:

```javascript
  {
    path: '/shiftModule',
    meta: {
      title: '后台管理 | 班次管理',
      // 是否需要登录
      isNeedLogin: true,
      // 是否需要管理员权限
      isNeedRoot: true
    },
    component: shiftModule,
  },
```

## 2. 添加全局路由守卫:pineapple:

```javascript
router.beforeEach((to, from, next) => {
  const isLogin = sessionStorage.getItem('isLogin')
  const isRoot = sessionStorage.getItem('isRoot')
  if (to.meta.isNeedLogin && !isLogin) {
    alert('您还未登录，请先登录！')
    next(
      {
        path: '/login',
        query: {
          redirectPath: to.path
        }
      }
    )
  }
  if ( isLogin && to.meta.isNeedRoot && !isRoot) {
    alert('对不起，您无权访问！')
    next(
      {
        path: '/help'
      }
    )
  }
  next()
})
```

