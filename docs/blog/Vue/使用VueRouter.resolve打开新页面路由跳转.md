---
title: 使用router.resolve打开新页面并跳转路由
categories: 
 - Plugin
date: 2023-04-16
isShowComments: false
cover: 'https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/vuerouter.png'
---

## 场景: 打开新页面并跳转路由(可附带参数)

### 关于router.resolve的用法可移步官网: [router.resolve](https://router.vuejs.org/zh/api/interfaces/Router.html#Methods-resolve)

```javascript
// window.open()的三个参数
window.open("要跳转的网址", "跳转形式或者名字", "给出窗口添加新的的属性（字符串形式）");
```
```typescript
// 打开新页面 并跳转路由到/preview 
const toPreview = (item: any) => {
    const newPage = router.resolve({
      path: '/preview',
      query: {
        id: item._id
      }
    });
    window.open(newPage.href, '_blank'); //  在新标签页打开
  };
```
