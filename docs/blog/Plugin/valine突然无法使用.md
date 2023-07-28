---
title: valine无法加载评论
categories: 
 - Plugin
date: 2022-05-30
isShowComments: false
cover: 'https://www.zpzpup.com/assets/image/gd09.jpg'
---

## Valine无法加载评论

::: tip

近期在我未修改博客配置的情况下，基于Valine的评论功能出现问题，leanCloud中有评论数据，但博客页面无法获取，检查控制台后发现了报错，原因是Valine的av-min.js因为jsdeliver的cdn地址出现了问题

:::

### 解决办法:ocean:

> 将Valine.min.js中的cdn地址替换成下面的地址，也可以到leancloud官网查看最新的cdn地址

```javascript
//code.bdstatic.com/npm/leancloud-storage@4.12.0/dist/av-min.js
```

