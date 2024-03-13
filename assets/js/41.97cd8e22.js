(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{633:function(t,s,a){"use strict";a.r(s);var _=a(6),v=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、什么是页面加载的白屏时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是页面加载的白屏时间"}},[t._v("#")]),t._v(" 一、什么是页面加载的白屏时间❓")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("白屏时间: 即用户点击一个链接或打开浏览器输入URL地址后，从屏幕空白到显示第一个画面的事件")])]),a("h2",{attrs:{id:"二、为什么需要减少页面白屏时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、为什么需要减少页面白屏时间"}},[t._v("#")]),t._v(" 二、为什么需要减少页面白屏时间❓")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[t._v("当用户点开一个链接或者是直接在浏览器中输入URL开始进行访问时，就开始等待页面的展示。页面渲染的时间越短，用户等待时间就越短，用户感知到页面的速度就越快。"),a("strong",[t._v("这样可以极大的提升用户的体验，减少用户的跳出，提升页面的留存率")]),t._v("。")])]),a("h2",{attrs:{id:"三、白屏的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、白屏的过程"}},[t._v("#")]),t._v(" 三、白屏的过程❓")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("从输入url，到页面展示的大致过程")]),t._v(" "),a("ol",[a("li",[t._v("首先，在浏览器地址栏输入URL")]),t._v(" "),a("li",[t._v("浏览器查看 浏览器缓存 ->  系统缓存 -> 路由器缓存， 如果缓存中有且没有过期，会直接进行渲染，否则，进行第三步操作")]),t._v(" "),a("li",[t._v("发送HTTP请求前，需要进行DNS解析，得到服务器的IP地址")]),t._v(" "),a("li",[t._v("浏览器向服务器发起TCP连接，与浏览器进行三次握手")]),t._v(" "),a("li",[t._v("握手成功后，浏览器向服务器发送http请求，请求数据包")]),t._v(" "),a("li",[t._v("服务器处理收到的请求，将数据返回至浏览器")]),t._v(" "),a("li",[t._v("浏览器收到HTTP响应")]),t._v(" "),a("li",[t._v("读取页面内容，浏览器开始渲染，解析HTML")]),t._v(" "),a("li",[t._v("生成DOM树，解析CSS样式，js脚本")])]),t._v(" "),a("p",[t._v("浏览器下载HTML后，首先解析头部代码，进行样式表下载，然后继续向下解析HTML代码，构建DOM树，同时进行样式下载。当DOM树构建完成之后，立即开始构造CSSOM树。理想情况下，样式表下载速度够快，DOM树和CSSOM树进入一个并行的过程，当两棵树构建完毕，就开始构建render树(渲染树)，然后进行绘制")])]),a("h3",{attrs:{id:"浏览器安全解析策略对解析html造成的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器安全解析策略对解析html造成的影响"}},[t._v("#")]),t._v(" 浏览器安全解析策略对解析HTML造成的影响:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("ul",[a("li",[t._v("当解析HTML时遇到内联JS代码，会阻塞DOM树的构建，会先执行完JS代码；当CSS样式文件没有下载完成时，浏览器解析HTML遇到了内联JS代码，此时，浏览器暂停JS脚本执行，暂停HTML解析、知道CSS文件下载完成，完成CSSOM树的构建，重新恢复原来的解析")]),t._v(" "),a("li",[t._v("JS会阻塞DOM的生成，而样式文件又会阻塞JS的执行，所以在实际的工程中需要重点关注JS文件和样式表文件，使用不当会影响到页面性能")])])]),a("h2",{attrs:{id:"四、白屏的性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、白屏的性能优化"}},[t._v("#")]),t._v(" 四、白屏的性能优化")]),t._v(" "),a("h3",{attrs:{id:"_4-1-dns解析优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-dns解析优化"}},[t._v("#")]),t._v(" 4.1 DNS解析优化🚀")]),t._v(" "),a("p",[t._v("针对DNS LookUP环节，我们可以针对性的进行DNS解析优化")]),t._v(" "),a("ul",[a("li",[t._v("DNS缓存优化")]),t._v(" "),a("li",[t._v("DNS预加载策略")]),t._v(" "),a("li",[t._v("稳定可靠的DNS服务器")])]),t._v(" "),a("h3",{attrs:{id:"_4-2-tcp网络链路优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-tcp网络链路优化"}},[t._v("#")]),t._v(" 4.2 TCP网络链路优化🚀")]),t._v(" "),a("h3",{attrs:{id:"_4-3-服务端处理优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-服务端处理优化"}},[t._v("#")]),t._v(" 4.3 服务端处理优化🚀")]),t._v(" "),a("h3",{attrs:{id:"_4-4-浏览器下载、解析、渲染页面优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-浏览器下载、解析、渲染页面优化"}},[t._v("#")]),t._v(" 4.4 浏览器下载、解析、渲染页面优化🚀")]),t._v(" "),a("ul",[a("li",[t._v("尽可能精简HTML的代码和结构")]),t._v(" "),a("li",[t._v("尽可能优化CSS文件和结构")]),t._v(" "),a("li",[t._v("合理的放置JS代码，尽量不要使用内联的JS代码")]),t._v(" "),a("li",[t._v("将渲染首屏内容所需的关键CSS内联到HTML中，能使CSS更快速的下载。")]),t._v(" "),a("li",[t._v("延迟首屏不需要的图片加载，优先加载首屏所需图片")])])])}),[],!1,null,null,null);s.default=v.exports}}]);