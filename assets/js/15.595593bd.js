(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{609:function(_,v,e){"use strict";e.r(v);var a=e(6),t=Object(a.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h2",{attrs:{id:"基本使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[_._v("#")]),_._v(" 基本使用📝")]),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("ul",[e("li",[e("code",[_._v("src")]),_._v(": 规定在"),e("code",[_._v("iframe")]),_._v("中显示的文档的"),e("code",[_._v("URL")]),_._v("。")]),_._v(" "),e("li",[e("code",[_._v("frameborder")]),_._v("：规定是否显示框架周围的边框。")]),_._v(" "),e("li",[e("code",[_._v("scrolling")]),_._v("：规定是否在"),e("code",[_._v("iframe")]),_._v("中显示滚动条")]),_._v(" "),e("li",[e("code",[_._v("width")]),_._v("：规定"),e("code",[_._v("iframe")]),_._v("的宽度，建议使用"),e("code",[_._v("CSS")]),_._v("替代。")]),_._v(" "),e("li",[e("code",[_._v("height")]),_._v("：规定"),e("code",[_._v("iframe")]),_._v("的高度，建议使用"),e("code",[_._v("CSS")]),_._v("替代。")]),_._v(" "),e("li",[e("code",[_._v("sandbox")]),_._v("：启用一系列对"),e("code",[_._v("iframe")]),_._v("中内容的额外限制。")]),_._v(" "),e("li",[e("code",[_._v("marginwidth")]),_._v("：定义"),e("code",[_._v("iframe")]),_._v("的左侧和右侧的边距。")]),_._v(" "),e("li",[e("code",[_._v("marginheight")]),_._v("：定义"),e("code",[_._v("iframe")]),_._v("的顶部和底部的边距。")]),_._v(" "),e("li",[e("code",[_._v("srcdoc")]),_._v("：规定在"),e("code",[_._v("iframe")]),_._v("中显示的页面的"),e("code",[_._v("HTML")]),_._v("内容。")]),_._v(" "),e("li",[e("code",[_._v("align")]),_._v("：规定如何根据周围的元素来对齐此框架，建议使用样式替代。")])])]),e("h2",{attrs:{id:"使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[_._v("#")]),_._v(" 使用场景🏠")]),_._v(" "),e("h3",{attrs:{id:"_1-加载其他域的网页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-加载其他域的网页"}},[_._v("#")]),_._v(" 1. 加载其他域的网页")]),_._v(" "),e("blockquote",[e("p",[e("code",[_._v("<iframe>")]),_._v("是允许跨域请求资源的，但是不能够修改，由此可以在网页中嵌套其他网页")])]),_._v(" "),e("h3",{attrs:{id:"_2-典型系统结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-典型系统结构"}},[_._v("#")]),_._v(" 2. 典型系统结构")]),_._v(" "),e("blockquote",[e("p",[_._v("典型的系统结构，左侧是功能树，上部为个人信息，右侧就是实际功能，使用"),e("code",[_._v("iframe")]),_._v("将功能单独分离出来，当然也可以使用"),e("code",[_._v("vue")]),_._v("和"),e("code",[_._v("react")]),_._v("进行实现。")])]),_._v(" "),e("h3",{attrs:{id:"_3-实现ajax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-实现ajax"}},[_._v("#")]),_._v(" 3. 实现ajax")]),_._v(" "),e("blockquote",[e("p",[_._v("可以使用"),e("code",[_._v("iframe")]),_._v("进行实现异步请求发送，来模拟"),e("code",[_._v("Ajax")]),_._v("的请求操作，"),e("code",[_._v("Ajax")]),_._v("的异步请求完成操作为"),e("code",[_._v("XHR.readyState === 4")]),_._v("执行"),e("code",[_._v("callback")]),_._v("，"),e("code",[_._v("iframe")]),_._v("使用"),e("code",[_._v("iframe.onload")]),_._v("执行"),e("code",[_._v("callback")]),_._v("，还可以实现一个轮询长连接")])]),_._v(" "),e("h3",{attrs:{id:"_4-加载广告"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-加载广告"}},[_._v("#")]),_._v(" 4. 加载广告")]),_._v(" "),e("blockquote",[e("p",[_._v("广告是与原文无关的，假如硬编码进去，会造成网页布局的紊乱,而且这样势必需要引入额外的"),e("code",[_._v("css")]),_._v("和"),e("code",[_._v("js")]),_._v("文件，极大的降低了网页的安全性，使用"),e("code",[_._v("iframe")]),_._v("便可以解决这些问题")])]),_._v(" "),e("h3",{attrs:{id:"_5-提交表单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-提交表单"}},[_._v("#")]),_._v(" 5. 提交表单")]),_._v(" "),e("blockquote",[e("p",[_._v("可以使用"),e("code",[_._v("iframe")]),_._v("来提交表单，避免整个页面的刷新，还可以实现无刷新文件上传的操作")])]),_._v(" "),e("h2",{attrs:{id:"优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[_._v("#")]),_._v(" 优缺点🐛")]),_._v(" "),e("h3",{attrs:{id:"优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[_._v("#")]),_._v(" 优点")]),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("ol",[e("li",[_._v("可以跨域请求其他网站，并将网站完整展示出来。")]),_._v(" "),e("li",[_._v("典型系统结构可以提高代码的复用性。")]),_._v(" "),e("li",[_._v("创建一个全新的独立的宿主环境，可以隔离或者访问原生接口及对象。")]),_._v(" "),e("li",[_._v("模块分离，若多个页面引用同一个"),e("code",[_._v("iframe")]),_._v("，则便于修改操作。")]),_._v(" "),e("li",[_._v("实现广告展示的一个解决方案。")]),_._v(" "),e("li",[_._v("若需要刷新"),e("code",[_._v("iframe")]),_._v("则只需要刷新框架内，不需要刷新整个页面。")])])]),e("h3",{attrs:{id:"缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[_._v("#")]),_._v(" 缺点")]),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("ol",[e("li",[e("code",[_._v("iframes")]),_._v("阻塞页面加载，影响网页加载速度，"),e("code",[_._v("iframe")]),_._v("加载完毕后才会触发"),e("code",[_._v("window.onload")]),_._v("事件，动态设置"),e("code",[_._v("src")]),_._v("可解决这个问题。")]),_._v(" "),e("li",[_._v("加载了新页面，增加了"),e("code",[_._v("css")]),_._v("与"),e("code",[_._v("js")]),_._v("文件的请求，即额外增加了"),e("code",[_._v("HTTP")]),_._v("请求，增加了服务器负担。")]),_._v(" "),e("li",[_._v("有时"),e("code",[_._v("iframe")]),_._v("由于页面挤占空间的原因出现滚动条，造成布局混乱。")]),_._v(" "),e("li",[_._v("不利于"),e("code",[_._v("SEO")]),_._v("，搜索引擎的爬虫无法解读"),e("code",[_._v("iframe")]),_._v("的页面。")]),_._v(" "),e("li",[_._v("有些小型的移动设备如手机等无法完全显示框架，兼容性较差。")]),_._v(" "),e("li",[e("code",[_._v("iframe")]),_._v("与主页面是共享链接池的，若"),e("code",[_._v("iframe")]),_._v("加载时用光了链接池，则会造成主页面加载阻塞。")])])])])}),[],!1,null,null,null);v.default=t.exports}}]);