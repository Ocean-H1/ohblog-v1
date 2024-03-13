(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{649:function(t,s,a){"use strict";a.r(s);var e=a(6),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、-cors跨域资源共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-cors跨域资源共享"}},[t._v("#")]),t._v(" 一、 "),a("code",[t._v("CORS")]),t._v("跨域资源共享")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("CORS(Cross-Origin Resource Sharing)即跨域资源共享。需要浏览器(都支持)和服务器都支持，所以只需要服务器支持，就可以跨域通信。CORS请求分两类: "),a("strong",[t._v("简单请求")]),t._v(" 和 "),a("strong",[t._v("非简单请求")])]),t._v(" "),a("p",[t._v("此外，CORS请求 "),a("strong",[t._v("默认不包含Cookie以及HTTP认证信息")]),t._v("，如果需要包含Cookie，需要满足几个条件:")]),t._v(" "),a("ul",[a("li",[t._v("服务器指定了"),a("code",[t._v("Access-Control-Allow-Credentials: true")])]),t._v(" "),a("li",[t._v("开发者需在请求中打开"),a("code",[t._v("withCredentials")]),t._v("属性: "),a("code",[t._v("xhr.withCredentials = true")])]),t._v(" "),a("li",[a("code",[t._v("Acess-Control-Allow-Origin")]),t._v("不要设为"),a("code",[t._v("*")]),t._v(",指定明确的与请求网页一致的域名，这样就不会把其他域名的Cookie上传")])])]),a("h3",{attrs:{id:"_1-1-简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-简单请求"}},[t._v("#")]),t._v(" 1.1 简单请求")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("如果同时满足以下两个条件，就属于简单请求:")]),t._v(" "),a("ul",[a("li",[t._v("请求方法是: "),a("code",[t._v("HEAD、GET、POST")]),t._v("三者其一")]),t._v(" "),a("li",[t._v("请求头信息不超过以下几个字段：\n"),a("ul",[a("li",[a("code",[t._v("Accept")])]),t._v(" "),a("li",[a("code",[t._v("Accept-Language")])]),t._v(" "),a("li",[a("code",[t._v("Content-Language")])]),t._v(" "),a("li",[a("code",[t._v("Last-Event-Id")])]),t._v(" "),a("li",[a("code",[t._v("Content-Type")]),t._v(": 值为三者之一 ->  "),a("code",[t._v("application/x-www/form/urlencoded")]),t._v("、"),a("code",[t._v("multipart/form-data、text/plain")])])])])]),t._v(" "),a("p",[t._v("需要这些条件是为了兼容表单，因为历史上表单一直可以跨域")]),t._v(" "),a("p",[t._v("浏览器直接发出CORS请求，具体来说就是在头信息中增加"),a("code",[t._v("Origin")]),t._v("字段,表示请求来源来自那个域(协议+域名+端口)，服务器根据这个值决定是否同意请求。如果同意，返回的响应会多出以下响应头信息")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 和Origin一致 这个字段是必须的")]),t._v("\nAccess"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Credentials"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示是否允许发送Cookie 这个字段是可选的")]),t._v("\nAceess"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Expose"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FooBar\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定返回其他字段的值\t这个字段是可选的")]),t._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("charset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uft"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示文档类型")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("在简单请求中服务器至少需要设置: "),a("code",[t._v("Access-Control-Allow-Origin")]),t._v("字段")])]),a("h3",{attrs:{id:"_1-2-非简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-非简单请求"}},[t._v("#")]),t._v(" 1.2 非简单请求")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("比如"),a("code",[t._v("PUT")]),t._v("或"),a("code",[t._v("DELETE")]),t._v("请求，或"),a("code",[t._v("Content-Type")]),t._v("为"),a("code",[t._v("application/json")]),t._v(",就是非简单请求")]),t._v(" "),a("p",[t._v("非简单CORS请求,"),a("strong",[t._v("正式请求前会发一次OPTIONS类型的查询请求")]),t._v(",成为"),a("code",[t._v("预检请求")]),t._v(",询问服务器是否支持网页所在域名的请求，以及可以使用哪些头信息字段。只有收到肯定的答复，才会发起正式XMLHttpRequest请求，否则报错")]),t._v(" "),a("p",[t._v("预检请求的方法是OPTIONS,它的头信息中有几个字段")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Origin")]),t._v(": 表示请求来自哪个域，这个字段是必须的")]),t._v(" "),a("li",[a("code",[t._v("Access-Control-Request-Method")]),t._v(": 列出CORS请求会用到哪些HTTP方法，这个字段是必须的")]),t._v(" "),a("li",[a("code",[t._v("Access-Control-Request-Headers")]),t._v(": 指定CORS请求会额外发送的头信息字段，用逗号隔开")])]),t._v(" "),a("p",[t._v("但OPTIONS请求次数过多也会损耗性能，所以要尽量减少OPTIONS请求，可以让服务器在请求返回头部添加:")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数字 单位是秒")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("表示预检请求的返回结果可以被缓存多久，在这个事件范围内再请求就不需要预检了。不过这个缓存只对完全一样的URL才会生效")])]),a("h2",{attrs:{id:"二、nginx反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、nginx反向代理"}},[t._v("#")]),t._v(" 二、Nginx反向代理")]),t._v(" "),a("p",[t._v("配置一个代理服务器向服务器请求，再将数据返回给客户端，实质和CORS跨域原理一样，需要配置请求响应头"),a("code",[t._v("Access-Control-Allow-Origin")]),t._v("等字段")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("81")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("server_name www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy_pass http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxxx1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 反向代理")]),t._v("\n        proxy_cookie_domain www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxxx2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改cookie域名")]),t._v("\n        index index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用 ")]),t._v("\n        add_header Access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Origin http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxxx2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前端只跨域不带cookie时，可为* ")]),t._v("\n        add_header Access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Credentials "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);