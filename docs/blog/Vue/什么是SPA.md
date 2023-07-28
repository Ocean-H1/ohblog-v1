---
title: SPA(单页应用)相关
categoires: 
 - Vue
date: 2022-11-23
cover: 'https://images.oceanh.top/bg03.png'
isShowComments: false
---

## 一、什么是SPA:question:

::: info

​	SPA(Single Page Application),即单页面应用，主要是网页的界面渲染在一个静态的页面上，**当用户需要跳转界面的时候，不需要重新加载整个界面**，所以页面的切换十分快速

​	多页面在进行页面切换的时候十分缓慢，在路由进行跳转的时候会加载所有的资源，而且页面重复代码多

相比之下，单页面的资源只需要局部刷新，因此具有极高的流畅度

:::

## 二、SPA的优点:rocket:

::: tip

- 页面切换后，用户体验好，内容的改变不需要重新加载整个页面
- 良好的前后端分离，分工更加明确
- 具有桌面应用的即时性，网站的可移植性和可访问性

:::

## 三、SPA的缺点:bug:

::: warning

- 不利于SEO
- 首次渲染速度较慢

:::

## 四、SPA与MPA的不同:artificial_satellite:

|    /     |             SPA              |           MPA            |
| :------: | :--------------------------: | :----------------------: |
|   组成   | 由外壳页面和多个页面片段构成 |    由多个完整页面构成    |
| 资源共用 |             可以             | 不能。每个页面都需要加载 |
| 刷新方式 |        局部刷新或更改        |         整页刷新         |
| URL模式  |         a.com/#/one          |      a.com/one.html      |
| 数据传递 |            较容易            |  依赖URL传参或者cookie   |
|   SEO    |            不利于            |          较容易          |
| 开发成本 |             较高             |           较低           |
| 维护成本 |       较低，可维护性高       |           较高           |

## 五、SPA的首屏加载:rocket:

### 5.1 什么是首屏加载:question:

::: tip

首屏时间(First Contentful Paint),指的是**浏览器从响应用户输入的URL，到首屏内容渲染完成的时间**，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容

:::

![首屏时间计算](https://static.vue-js.com/2e2491a0-3acc-11eb-85f6-6fac77c0c9b3.png)



```javascript
// 可通过DOMContentLoad 或者 performance 来计算出首屏时间

// 方案一
document.addEventListener('DOMContentLoaded',(event) => {
    console.log('first contentful painting')
})

// 方案二
performance.getEntriesByName('first-contentful-paint')[0].startTime
// 
/*
	* performance.getEntriesByName("first-contentful-paint")[0]会返回一个	PerformancePaintTiming的实例，结构如下:
	{
      name: "first-contentful-paint",
      entryType: "paint",
      startTime: 507.80000002123415,
      duration: 0,
    }
*/

```



### 5.2 加载慢的原因:question:

::: warning 

- **网络延时问题**
- **资源文件体积过大**
- **资源重复发送请求**
- **加载脚本的时候，渲染内容堵塞了等等**

:::

## 六、首屏加载优化方案:milky_way:

::: tip

- **减小入口文件体积**
- **静态资源本地缓存**
- **UI框架按需加载**
- **图片资源的压缩**
- **组件重复打包**
- **开启GZip压缩**
- **使用SSR**

:::



### 6.1 减小入口文件体积:rocket:

::: tip

常用的手段是**路由懒加载**，把不同路由对应的组件分割成不同的代码块，等到路由被请求的时候会单独打包路由，使入口文件体积减小，加载速度大大提高

:::

![路由懒加载](https://static.vue-js.com/486cee90-3acc-11eb-ab90-d9ae814b240d.png)

### 6.2 静态资源本地缓存:rocket:

::: tip

后端返回资源问题：

- 采用`HTTP`缓存，设置`cache-control`,`Last-Modified`,`Etag`等响应头
- 采用`Service Worker`离线缓存

前端合理利用本地存储`localStorage,sessionStorage`

:::

### 6.3 UI框架按需加载:rocket:

::: tip

这部分直接查阅框架文档即可

:::

### 6.4 组件重复打包:rocket:

::: tip

假设`A.js`文件是一个常用的库，现在有多个路由都使用了`A.js`,这就造成了重复下载

解决方案: 配置webpack的`config`文件，修改`CommonsChunkPlugin`的配置:

```javascript
// `minChunks`为3表示会把使用3次及以上的包抽离出来，放进公共依赖文件，避免重复加载
minChunks: 3
```

:::

### 6.5 图片资源压缩:rocket:

::: info 

图片资源虽然不在编码过程中，但它却是对页面性能影响最大的元素

对于所有的图片资源，可以进行适当的压缩

对页面上使用到的`icon`，可以使用在线字体图标或者雪碧图等，，减轻`http`请求压力

:::

### 6.6 开启GZip压缩:rocket:

- 首先可以安装`compression-webpack-plugin`

```
npm i compression-webpack-plugin -D
```

- 在`vue.config.js`中引入并修改`webpack`配置

```javascript
const CompressionPlugin = require('compression-webpack-plugin')

configureWebpack: (config) => {
    if(process.env.NODE_ENV  === 'production'){
        // 为生产环境修改配置
        config.mode = 'production'
        return {
            plugins: [
                new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/, // 匹配文件名
                    threshold: 10240, // 对超过10K的数据进行压缩
                    deleteOriginalAssets: false // 是否删除原文件
                })
            ]
        }
    }
}
```

- 在服务器也要做相应的配置，如果发送请求的浏览器支持`gzip`,就发送`gzip`格式的文件,以express搭建的服务器为例：

```javascript
const compression = require('compression')
app.use(compression()) // 在其他中间件使用之前调用
```

### 6.7 使用SSR:rocket:

::: tip

SSR(Server-Side Rendering),也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器。

:::

## 小结:notebook_with_decorative_cover:

减少首屏渲染时间的方式又很多，总体上可以分成两大部分: **资源加载优化** 和 **页面渲染优化**

实际开发中应根据项目情况合理选择各种方式进行优化

![](https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/202303051718635.png)