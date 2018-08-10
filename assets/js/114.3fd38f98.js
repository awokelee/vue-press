(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{219:function(e,t,i){"use strict";i.r(t);var r=i(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"前端工作面试html相关问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#前端工作面试html相关问题","aria-hidden":"true"}},[e._v("#")]),i("a",{attrs:{href:"https://github.com/darcyclarke/Front-end-Developer-Interview-Questions#html",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端工作面试HTML相关问题"),i("OutboundLink")],1)]),i("ul",[i("li",[e._m(0),e._m(1),e._m(2),i("p",[e._v("关于IE浏览器的文档模式，浏览器模式，严格模式，怪异模式，DOCTYPE标签，可详细阅读"),i("a",{attrs:{href:"http://padding.me/blog/2014/07/04/mode-or-standard/",target:"_blank",rel:"noopener noreferrer"}},[e._v("模式？标准！"),i("OutboundLink")],1),e._v("的内容。")])]),i("li",[i("p",[e._v("Q: 浏览器标准模式和怪异模式之间的区别是什么？")]),e._m(3),i("p",[e._v("强烈建议阅读加深理解："),i("a",{attrs:{href:"http://www.ibm.com/developerworks/cn/web/1310_shatao_quirks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("怪异模式（Quirks Mode）对 HTML 页面的影响"),i("OutboundLink")],1),e._v("，这里列下浏览器标准模式和怪异模式的区别：")]),e._m(4),i("p",[e._v("在怪异模式下，盒模型为IE盒模型而非标准模式下的W3C 盒模型：在 IE 盒模型中，\nbox width = content width + padding left + padding right + border left + border right，\nbox height = content height + padding top + padding bottom + border top + border bottom。\n而在 W3C 标准的盒模型中，box 的大小就是 content 的大小。")]),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),i("p",[e._v("CSS 中对于元素的百分比高度规定如下，百分比为元素包含块的高度，不可为负值。如果包含块的高度没有显式给出，该值等同于“auto”（即取决于内容的高度）。所以百分比的高度必须在父元素有声明高度时使用。")]),i("p",[e._v("当一个元素使用百分比高度时，在 IE Standards Mode 下，高度取决于内容的变化，而在 Quirks Mode 下，百分比高度则被正确应用。")]),e._m(12),e._m(13),i("p",[e._v("另可参考阅读："),i("a",{attrs:{href:"https://www.cs.tut.fi/~jkorpela/quirks-mode.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.cs.tut.fi/~jkorpela/quirks-mode.html"),i("OutboundLink")],1)])]),e._m(14),e._m(15),e._m(16),i("li",[i("p",[e._v("Q:如果把 HTML5 看作做一个开放平台，那它的构建模块有哪些？")]),i("p",[e._v("A: 开放网络平台:")]),e._m(17),i("p",[e._v("开放网络平台（Open Web Platform）是一些开放的（免版权）技术的集合，这些技术激活了互联网。使用开放网络平台时，每个人都有权实现 Web 上的一个组件，而不用向任何人索取许可和证书。")]),i("p",[e._v("将 HTML5 看做开放网络平台，那它的构建模块有哪些？我想，所谓构建模块，指的应该是开放网络平台这个技术集合中的技术。")]),e._m(18),i("p",[e._v("该答案引自: "),i("a",{attrs:{href:"http://witcher42.github.io/2014/06/03/open-web-platform/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://witcher42.github.io/2014/06/03/open-web-platform/"),i("OutboundLink")],1)])]),e._m(19),e._m(20)]),i("p",[e._v("tips: 以上部分答案参考自：")]),i("ul",[i("li",[i("a",{attrs:{href:"http://padding.me",target:"_blank",rel:"noopener noreferrer"}},[e._v("paddingme"),i("OutboundLink")],1)]),i("li",[i("a",{attrs:{href:"http://witcher42.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Witcher42"),i("OutboundLink")],1)]),i("li",[i("a",{attrs:{href:"http://camnpr.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("郑州网建"),i("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Q: "),t("code",[this._v("doctype")]),this._v("（文档类型）的作用是什么？")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A: 在HTML中 "),t("code",[this._v("doctype")]),this._v(" 有两个主要目的。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("对文档进行有效性验证:")]),t("p",[this._v("它告诉用户代理和校验器这个文档是按照什么DTD 写的。这个动作是被动的，每次页面加载时，浏览器并不会下载DTD 并检查合法性，只有当手动校验页面时才启用。")])]),t("li",[t("p",[this._v("决定浏览器的呈现模式:")]),t("p",[this._v("对于实际操作，通知浏览器读取文档时用哪种解析算法。如果没有写，则浏览器则根据自身的规则对代码进行解析，可能会严重影响HTML 排版布局。浏览器有三种方式解析HTML文档。")]),t("ul",[t("li",[this._v("非怪异（标准）模式")]),t("li",[this._v("怪异模式")]),t("li",[this._v("部分怪异（近乎标准）模式")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A: 在“标准模式”(Standards Mode) 页面按照 HTML 与 CSS 的定义渲染，而在“怪异模式”(Quirks Mode)就是浏览器为了兼容很早之前针对旧版本浏览器设计、并未严格遵循 W3C 标准的网页而产生的一种页面渲染模式。浏览器基于页面中文件类型描述的存在以决定采用哪种渲染模式；如果存在一个完整的"),t("code",[this._v("DOCTYPE")]),this._v("则浏览器将会采用标准模式，而如果它缺失则浏览器将会采用怪异模式。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("盒模型：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("图片元素的垂直对齐方式:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("对于"),i("code",[e._v("inline")]),e._v("元素和"),i("code",[e._v("table-cell")]),e._v("元素，在 IE Standards Mode 下 vertical-align 属性默认取值为"),i("code",[e._v("baseline")]),e._v("。而当"),i("code",[e._v("inline")]),e._v("元素的内容只有图片时，如"),i("code",[e._v("table")]),e._v("的单元格"),i("code",[e._v("table-cell")]),e._v("。在 IE Quirks Mode 下，"),i("code",[e._v("table")]),e._v("单元格中的图片的 "),i("code",[e._v("vertical-align")]),e._v(" 属性默认为"),i("code",[e._v("bottom")]),e._v("，因此，在图片底部会有几像素的空间。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"3"}},[t("li",[t("code",[this._v("<table>")]),this._v("元素中的字体:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("CSS 中，描述"),i("code",[e._v("font")]),e._v("的属性有"),i("code",[e._v("font-family")]),e._v("，"),i("code",[e._v("font-size")]),e._v("，"),i("code",[e._v("font-style")]),e._v("，"),i("code",[e._v("font-weigh")]),e._v(",上述属性都是可以继承的。而在 IE Quirks Mode 下，对于"),i("code",[e._v("table")]),e._v(" 元素，字体的某些属性将不会从"),i("code",[e._v("body")]),e._v("或其他封闭元素继承到"),i("code",[e._v("table")]),e._v("中，特别是 "),i("code",[e._v("font-size")]),e._v("属性。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"4"}},[t("li",[this._v("内联元素的尺寸:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("在 IE Standards Mode 下，non-replaced inline 元素无法自定义大小，而在 IE Quirks Mode 下，定义这些元素的"),t("code",[this._v("width")]),this._v("和"),t("code",[this._v("height")]),this._v(" 属性，能够影响该元素显示的大小尺寸。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"5"}},[t("li",[this._v("元素的百分比高度:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"6"}},[t("li",[this._v("元素溢出的处理：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("在 IE Standard Mode 下，"),t("code",[this._v("overflow")]),this._v("取默认值 "),t("code",[this._v("visible")]),this._v("，即溢出可见，这种情况下，溢出内容不会被裁剪，呈现在元素框外。而在 Quirks Mode 下，该溢出被当做扩展"),t("code",[this._v("box")]),this._v("来对待，即元素的大小由其内容决定，溢出不会被裁剪，元素框自动调整，包含溢出内容。")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("p",[e._v("Q: 使用 XHTML 的局限有哪些？")]),i("ul",[i("li",[e._v("如果页面使用 'application/xhtml+xml' 会有什么问题吗？")])]),i("p",[e._v("A: xhtml 语法要求严格，必须有"),i("code",[e._v("head")]),e._v("、"),i("code",[e._v("body")]),e._v(" 每个dom 必须要闭合。空标签也必须闭合。例如"),i("code",[e._v("<img />")]),e._v(", "),i("code",[e._v("<br/>")]),e._v(", "),i("code",[e._v("<input />")]),e._v("等。另外要在属性值上使用双引号。一旦遇到错误，立刻停止解析，并显示错误信息。\n如果页面使用'application/xhtml+xml',一些老的浏览器会不兼容。")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("p",[e._v("Q: 如果网页内容需要支持多语言，你会怎么做？")]),i("ul",[i("li",[e._v("在设计和开发多语言网站时，有哪些问题你必须要考虑？")])]),i("p",[e._v("A: 编码使用"),i("code",[e._v("UTF-8")]),e._v("，空间域名需要支持多浏览地址,准备多套模板。\n在设计和开发多语言网站时，需要考虑")]),i("ul",[i("li",[e._v("应用字符集的选择")]),i("li",[e._v("语言书写习惯&导航结构")]),i("li",[e._v("数据库驱动型网站")]),i("li",[e._v("css 盒子会因为内容尺寸不一样出现不对齐偏移")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("p",[e._v("Q: "),i("code",[e._v("data-")]),e._v("属性的作用是什么？")]),i("p",[e._v("A: "),i("code",[e._v("data-")]),e._v("为前端开发者提供自定义的属性，这些属性集可以通过对象的"),i("code",[e._v("dataset")]),e._v("属性获取，不支持该属性的浏览器可以通过"),i("code",[e._v("getAttribute")]),e._v("方法获取:")]),i("p",[i("code",[e._v('<div data-author="david" data-time="2011-06-20" data-comment-num="10">...</div>')])]),i("p",[i("code",[e._v("div.dataset.commentNum; // 10")])]),i("p",[e._v("需要注意的是，"),i("code",[e._v("data-")]),e._v("之后的以连字符分割的多个单词组成的属性，获取的时候使用驼峰风格。并不是所有的浏览器都支持."),i("code",[e._v("dataset")]),e._v("属性，测试的浏览器中只有Chrome 和Opera 支持。")]),i("p",[e._v("即：当没有合适的属性和元素时，自定义的 data 属性是能够存储页面或 App 的私有的自定义数据。")]),i("blockquote",[i("p",[e._v("Custom data attributes are intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("The Open Web Platform is the collection of open (royalty-free) technologies which enables the Web. Using the Open Web Platform, everyone has the right to implement a software component of the Web without requiring any approvals or waiving license fees.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("HTML")]),i("li",[e._v("DOM")]),i("li",[e._v("CSS")]),i("li",[e._v("SVG")]),i("li",[e._v("MathML")]),i("li",[e._v("Web APIs\n"),i("ul",[i("li",[e._v("Canvas WebGL")]),i("li",[e._v("Audio")]),i("li",[e._v("Web Storage")]),i("li",[e._v("File, File System")]),i("li",[e._v("History, contentEditable, Drag & Drop, HTML Editing Commands")]),i("li",[e._v("Web Sockets")]),i("li",[e._v("Web Workers")]),i("li",[e._v("Server-Send Events")]),i("li",[e._v("XMLHttpRequest")]),i("li",[e._v("Geolocation, Device Orientation")]),i("li",[e._v("DOM Events, Touch Events, Progress Events")]),i("li",[e._v("Custom application development")]),i("li",[e._v("Clipboard and events")]),i("li",[e._v("Web Notifications, Web Messaging")]),i("li",[e._v("Offine Web Applications")]),i("li",[e._v("Media Capture API")]),i("li",[e._v("Timing control for script-based animations, Page Visibility, Navigation + Timing, Resource Timing")]),i("li",[e._v("Selectors")]),i("li",[e._v("DOM Traversal, DOM XPath, Element Traversal")]),i("li",[e._v("EcmaScript / JavaScript")]),i("li",[e._v("HTTP")]),i("li",[e._v("URI")]),i("li",[e._v("Media Accessibility Checklist")])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("p",[e._v("Q: 请描述一下 cookies，sessionStorage 和 localStorage 的区别？")]),i("p",[e._v("A: sessionStorage 和 localStorage 是HTML5 Web Storage API 提供的，可以方便的在web请求之间保存数据。有了本地数据，就可以避免数据在浏览器和服务器间不必要地来回传递。")]),i("p",[e._v("sessionStorage、localStorage、cookie都是在浏览器端存储的数据，其中sessionStorage 的概念很特别，引入了一个“浏览器窗口”的概念。sessionStorage 是在同源的同窗口（或tab）中，始终存在的数据。也就是说只要这个浏览器窗口没有关闭，即使刷新页面或进入同源另一页面，数据仍然存在。关闭窗口后，sessionStorage 即被销毁。同时“独立”打开的不同窗口，即使是同一页面，sessionStorage 对象也是不同的")]),i("p",[e._v("cookies会发送到服务器端。其余两个不会。")]),i("p",[e._v("Microsoft 指出 Internet Explorer 8 增加cookie 限制为每个域名50个，但IE7 似乎也允许每个域名50个cookie。Firefox 每个域名cookie 限制为50个。Opera每个域名cookie 限制为30个。Firefox 和Safari 允许cookie 多达4097个字节，包括名（name）、值（value）和等号。Opera 许cookie 多达4096个字节，包括：名（name）、值（value）和等号。Internet Explorer 允许cookie 多达4095个字节，包括：名（name）、值（value）和等号。")]),i("ul",[i("li",[e._v("Cookie\n"),i("ul",[i("li",[e._v("每个域名存储量比较小（各浏览器不同，大致4K）")]),i("li",[e._v("所有域名的存储量有限制（各浏览器不同，大致4K）")]),i("li",[e._v("有个数限制（各浏览器不同）")]),i("li",[e._v("会随请求发送到服务器")])])]),i("li",[e._v("LocalStorage\n"),i("ul",[i("li",[e._v("永久存储")]),i("li",[e._v("单个域名存储量比较大（推荐5MB，各浏览器不同）")]),i("li",[e._v("总体数量无限制")])])]),i("li",[e._v("SessionStorage\n"),i("ul",[i("li",[e._v("只在 Session 内有效")]),i("li",[e._v("存储量更大（推荐没有限制，但是实际上各浏览器也不同）")])])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("p",[e._v("请描述一下 "),i("code",[e._v("GET")]),e._v(" 和 "),i("code",[e._v("POST")]),e._v(" 的区别?")]),i("p",[e._v("A: 区别如下：")]),i("ul",[i("li",[e._v("get 向指定的资源请求数据,请求的数据会附在URL 之后,就是把数据放置在请求行（request line）中），以?分割URL和传输数据，多个参数用&连接；")]),i("li",[e._v("post 向指定的资源提交要被处理的数据。get 方法，查询请求是在url中显示的，有长度限制，get 方法是安全幂等的。而post 方法请求是封装在http 消息包体中")])]),i("table",[i("thead",[i("tr",[i("th",[e._v("&")]),i("th",[e._v("get")]),i("th",[e._v("post")])])]),i("tbody",[i("tr",[i("td",[e._v("后退/刷新")]),i("td",[e._v("无害")]),i("td",[e._v("请求重新提交")])]),i("tr",[i("td",[e._v("书签")]),i("td",[e._v("可做书签")]),i("td",[e._v("不可做")])]),i("tr",[i("td",[e._v("缓存")]),i("td",[e._v("可被缓存")]),i("td",[e._v("不能被缓存")])]),i("tr",[i("td",[e._v("历史")]),i("td",[e._v("保留在浏览器记录里")]),i("td",[e._v("不保留")])]),i("tr",[i("td",[e._v("对数据长度限制")]),i("td",[e._v("限制（2048字符）")]),i("td",[e._v("不限制")])]),i("tr",[i("td",[e._v("安全性")]),i("td",[e._v("url中暴露数据")]),i("td",[e._v("相对安全")])]),i("tr",[i("td",[e._v("可见性")]),i("td",[e._v("url中可见")]),i("td",[e._v("不可见")])])])]),i("p",[e._v("总结：")]),i("ul",[i("li",[e._v("对于get 来说，是向服务器端请求数据，其请求在url 中可见，其长度有限制（2048字符）个体方法是安全幂等，这里的安全是指用于获取信息而非修改信息，幂等是指每次请求得到的结果都一样。")]),i("li",[e._v("对于post 来说，是向服务器端提交数据，每次刷新或者后退都会重新提交，post 请求的数据封装在http 请求的首部里。")])])])}],!1,null,null,null);t.default=o.exports}}]);