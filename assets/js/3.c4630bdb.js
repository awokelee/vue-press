(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{350:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"eventbus-通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventbus-通信","aria-hidden":"true"}},[s._v("#")]),s._v(" EventBus 通信")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),a("p",[a("code",[s._v("EventBus")]),s._v(" 事件总线,  本案例中本质就是重新 "),a("code",[s._v("new")]),s._v(" 了个 "),a("code",[s._v("Vue")]),s._v(", 将你需要的数据放在 新 "),a("code",[s._v("new")]),s._v(" 的 "),a("code",[s._v("Vue")]),s._v(" 上")]),a("p",[s._v("利用 "),a("code",[s._v("$on")]),s._v("监听 和 "),a("code",[s._v("$emit")]),s._v("触发方法.")])]),a("ul",[a("li",[s._v("创建")])]),a("p",[s._v("新建 "),a("code",[s._v("src/components/common/bus.js")]),s._v(" 文件, 内容如下:")]),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 使用 Event Bus")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bus "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("default")]),s._v(" bus\n")])])]),a("ul",[a("li",[s._v("组件 A 中")])]),a("div",{staticClass:"language-html extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bus "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'@/components/common/bus'")]),s._v("\n\n"),a("span",{attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 方法中")]),s._v("\nbus"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("$on")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'collapse'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" msg "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("this")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("collapse "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" msg\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("ul",[a("li",[s._v("组件 B 中")])]),a("div",{staticClass:"language-html extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bus "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'@/components/common/bus'")]),s._v("\n\n"),a("span",{attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 方法中")]),s._v("\nbus"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("$emit")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'collapse'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("this")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("collapse"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])])])}],!1,null,null,null);t.default=e.exports}}]);