(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{226:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),r("p",[t._v("总结：\n①. 对于get来说，是向服务器端请求数据，其请求在url中可见，其长度有限制（2048字符）个体方法是安全幂等，这里的安全是指用于获取信息而非修改信息，幂等是指每次请求得到的结果都一样。\n②. 对于post来说，是向服务器端提交数据，每次刷新或者后退都会重新提交，post请求的数据封装在http请求的首部里。")]),t._m(3),t._m(4),t._m(5),r("p",[t._v("MVC（模型-视图-控制器）\nModel(模型)主要与业务数据有关。\nView(视图)是关于构件和维护一个DOM元素。应用程序数据的可视化表示。\nController(控制器）用户更新视图，controller更新model.(网上没有这类型的详细文章，这里可以好好写一写，画画图，各个框架MVC之间的异同。)")]),r("p",[t._v("如"),r("a",{attrs:{href:"http://www.zhihu.com/question/20135390",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎"),r("OutboundLink")],1),t._v("，把数据请求和数据操作放在model中，对视图的操作和改变放在view中，事件绑定放在controller中。")]),t._m(6),r("p",[t._v("请见"),r("a",{attrs:{href:"http://padding.me/blog/2014/04/20/what-is-closure/",target:"_blank",rel:"noopener noreferrer"}},[t._v("隔壁"),r("OutboundLink")],1),t._v("。")]),t._m(7),r("p",[t._v("DOCTYPE声明位于HTML文档顶端，告诉浏览器应该用什么文档类型规范来解析这个文档；\n严格模式的排版和JS运作模式是以该浏览器支持的最高标准运行；而混杂模式中，页面以较宽松的向后兼容的模式显示。模拟老式浏览器的行为以防止站点无法工作。\n；DOCTYPE不存在或者格式不正确，则浏览器以混杂模式呈现文档。")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),r("p",[t._v("localStorage 长期存储数据，浏览器关闭后数据不丢失；而sessionStorage数据在浏览器关闭后自动删除。")]),t._m(15),r("p",[t._v("① cookie数据存在客户的浏览器上，session数据存放在服务器端\n② cookie不安全\n③ session会在一定时间内保存在服务器端，访问增多，占用服务器性能。\n④ 单个cookie保存的数据不超过4K")]),t._m(16),t._m(17),t._m(18),r("p",[t._v("cookie在浏览器和服务器间来回传递。 sessionStorage和localStorage不会\nsessionStorage和localStorage的存储空间更大；\nsessionStorage和localStorage有更多丰富易用的接口；\nsessionStorage和localStorage各自独立的存储空间；")]),t._m(19),r("p",[t._v("① 有两种， IE 盒子模型、标准 W3C 盒子模型；IE的content部分包含了 border 和 padding;")]),r("p",[t._v("② 盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border).")]),r("p",[t._v("##17.CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？##\n!important>id>class>tag")]),t._m(20),r("p",[t._v("摘自：")]),r("ul",[r("li",[r("cite",[t._v("markyun"),r("cite",[r("a",{attrs:{href:"https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions",target:"_blank",rel:"noopener noreferrer"}},[t._v("2014年最新前端开发面试题"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"http://segmentfault.com/a/1190000000465431",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端开发面试题"),r("OutboundLink")],1)])])]),r("li",[r("cite",[t._v("darcyclarke")]),r("a",{attrs:{href:"https://github.com/darcyclarke/Front-end-Developer-Interview-Questions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Front-end-Developer-Interview-Questions"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-get和post的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-get和post的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.get和post的区别##")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("get向指定的资源请求数据,请求的数据会附在URL之后,就是把数据放置在请求行（request line）中），以?分割URL和传输数据，多个参数用&连接；")]),e("li",[this._v("post向指定的资源提交要被处理的数据\nget方法，查询请求是在url中显示的，有长度限制，get方法是安全幂等的。而post方法请求是封装在http消息包体中")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("&")]),r("th",[t._v("get")]),r("th",[t._v("post")])])]),r("tbody",[r("tr",[r("td",[t._v("后退/刷新")]),r("td",[t._v("无害")]),r("td",[t._v("请求重新提交")])]),r("tr",[r("td",[t._v("书签")]),r("td",[t._v("可做书签")]),r("td",[t._v("不可做")])]),r("tr",[r("td",[t._v("缓存")]),r("td",[t._v("可被缓存")]),r("td",[t._v("不能被缓存")])]),r("tr",[r("td",[t._v("历史")]),r("td",[t._v("保留在浏览器记录里")]),r("td",[t._v("不保留")])]),r("tr",[r("td",[t._v("对数据长度限制")]),r("td",[t._v("限制（2048字符）")]),r("td",[t._v("不限制")])]),r("tr",[r("td",[t._v("安全性")]),r("td",[t._v("url中暴露数据")]),r("td",[t._v("相对安全")])]),r("tr",[r("td",[t._v("可见性")]),r("td",[t._v("url中可见")]),r("td",[t._v("不可见")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-http-状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-状态码","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. HTTP 状态码##")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("code",[t._v("1XX")]),t._v("代表请求已经被接收；")]),r("li",[r("code",[t._v("2xx")]),t._v("代表请求已成功被服务器接收、理解、并接受。常用的200表示请求已成功，请求所希望的响应头或数据体将随此响应返回；")]),r("li",[r("code",[t._v("3xx")]),t._v("代表重定向。")]),r("li",[r("code",[t._v("4xx")]),t._v("代表客户端错误。404表示网页不存在。")]),r("li",[r("code",[t._v("5xx")]),t._v("代表服务器错误。500表示服务器内部错误，503表示服务器暂时不可用")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-前端mvc框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-前端mvc框架","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.前端MVC框架##")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4-闭包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-闭包","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.闭包##")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5-doctype的作用？严格模式与混杂模式如何区分？它们有什么意义？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-doctype的作用？严格模式与混杂模式如何区分？它们有什么意义？","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.DOCTYPE的作用？严格模式与混杂模式如何区分？它们有什么意义？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_6-行内元素有哪些？块级元素有哪些？空（void-元素有哪些？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-行内元素有哪些？块级元素有哪些？空（void-元素有哪些？","aria-hidden":"true"}},[this._v("#")]),this._v(" 6.行内元素有哪些？块级元素有哪些？空（void  )元素有哪些？##")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_7-link和-import的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-link和-import的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" 7.link和@import的区别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_8-浏览器的内核分别是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-浏览器的内核分别是什么","aria-hidden":"true"}},[this._v("#")]),this._v(" 8.浏览器的内核分别是什么")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_9-常见兼容性问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-常见兼容性问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 9.常见兼容性问题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("浏览器的"),e("code",[this._v("padding")]),this._v("和"),e("code",[this._v("marigin")]),this._v("不同。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_10-语义化的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-语义化的理解","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.语义化的理解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_11-html5的离线存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-html5的离线存储","aria-hidden":"true"}},[this._v("#")]),this._v(" 11.HTML5的离线存储")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_12-cookie和session的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-cookie和session的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" 12.cookie和session的区别##")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_13-写-描述一段语义的html代码吧。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-写-描述一段语义的html代码吧。","aria-hidden":"true"}},[this._v("#")]),this._v(" 13.(写)描述一段语义的html代码吧。##")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_14-frame有那些缺点？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-frame有那些缺点？","aria-hidden":"true"}},[this._v("#")]),this._v(" 14.frame有那些缺点？##")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_15-请描述一下-cookies，sessionstorage-和-localstorage-的区别？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15-请描述一下-cookies，sessionstorage-和-localstorage-的区别？","aria-hidden":"true"}},[this._v("#")]),this._v(" 15.请描述一下 cookies，sessionStorage 和 localStorage 的区别？##")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_16-介绍一下css的盒子模型？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-介绍一下css的盒子模型？","aria-hidden":"true"}},[this._v("#")]),this._v(" 16.介绍一下CSS的盒子模型？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_18-如何居中div？如何居中一个浮动元素？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_18-如何居中div？如何居中一个浮动元素？","aria-hidden":"true"}},[this._v("#")]),this._v(" 18.如何居中div？如何居中一个浮动元素？")])}],!1,null,null,null);e.default=a.exports}}]);