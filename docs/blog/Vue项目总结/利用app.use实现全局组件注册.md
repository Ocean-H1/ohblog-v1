---
title: (Vue3+TS+Vite)利用app.use实现全局组件注册
categories: 
 - Vue项目总结
tags:
 - vue
date: 2023-03-09
isShowComments: false
cover: 'https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/vue3-vite-ts.png' 
---

::: tip

利用`app.use`将组件注入全局的方法，简单实用，整理一下。

:::

```typescript
/*
 * @Description: 基础组件全局注册
 * @FilePath: src\components\packages\index.ts
 */
import { App } from 'vue';
// 要全局注册的第三方组件
import components from './components/components';
import './styles/index.scss';
export * from './components';
export * from './hooks';
export * from './util';

export default {
  install: (app: App) => {
    components.forEach((item) => {
      app.use(item);
    });
  }
};
```

```typescript
/*
 * @Description: 用到的基础组件
 * @FilePath: src\components\packages\components\components.ts
 */
import { Plugin } from 'vue';
import Comment from './comment';
import Editor from './editor';
import Fold from './fold';
import Icon from './icon';
import Emoji from './emoji';

export default [Comment, Editor, Fold, Icon, Emoji] as Plugin[];
```



::: tip

​	之后`利用app.use`便可以在全局使用了

:::

```typescript
/*
 * @FilePath: src\components\main.ts
 */
import BaseComp from 'src\components\packages'

app.use(BaseComp)
```

