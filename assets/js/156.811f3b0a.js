(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{283:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),a("p",[t._v("假设我们有如下这么一种情况。")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),a("p",[t._v("那么什么是下一个 tick 呢？")]),t._m(9),t._m(10),t._m(11),a("p",[t._v("笔者用 "),a("code",[t._v("setTimeout")]),t._v(" 来模拟这个方法，当然，真实的源码中会更加复杂，笔者在小册中只讲原理，有兴趣了解源码中 "),a("code",[t._v("nextTick")]),t._v(" 的具体实现的同学可以参考"),a("a",{attrs:{href:"https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js#L90",target:"_blank",rel:"noopener noreferrer"}},[t._v("next-tick"),a("OutboundLink")],1),t._v("。")]),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),a("p",[t._v("实际上则执行")]),t._m(38),t._m(39),t._m(40),a("p",[t._v("到这里，批量异步更新策略及 nextTick 原理已经讲完了，接下来让我们学习一下 Vuex 状态管理的工作原理。")]),a("p",[t._v("注：本节代码参考"),a("a",{attrs:{href:"https://github.com/answershuto/VueDemo/blob/master/%E3%80%8A%E6%89%B9%E9%87%8F%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E7%AD%96%E7%95%A5%E5%8F%8A%20nextTick%20%E5%8E%9F%E7%90%86%E3%80%8B.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("《批量异步更新策略及 nextTick 原理》"),a("OutboundLink")],1),t._v("。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"批量异步更新策略及-nexttick-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批量异步更新策略及-nexttick-原理","aria-hidden":"true"}},[this._v("#")]),this._v(" 批量异步更新策略及 nextTick 原理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"为什么要异步更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要异步更新","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么要异步更新")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("通过前面几个章节我们介绍，相信大家已经明白了 Vue.js 是如何在我们修改 "),s("code",[this._v("data")]),this._v(" 中的数据后修改视图了。简单回顾一下，这里面其实就是一个“"),s("code",[this._v("setter -> Dep -> Watcher -> patch -> 视图")]),this._v("”的过程。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{number}}"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleClick"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("click"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            number"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("handleClick")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当我们按下 click 按钮的时候，"),s("code",[this._v("number")]),this._v(" 会被循环增加1000次。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("那么按照之前的理解，每次 "),s("code",[this._v("number")]),this._v(" 被 +1 的时候，都会触发 "),s("code",[this._v("number")]),this._v(" 的 "),s("code",[this._v("setter")]),this._v(" 方法，从而根据上面的流程一直跑下来最后修改真实 DOM。那么在这个过程中，DOM 会被更新 1000 次！太可怕了。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Vue.js 肯定不会以如此低效的方法来处理。Vue.js在默认情况下，每次触发某个数据的 "),a("code",[t._v("setter")]),t._v(" 方法后，对应的 "),a("code",[t._v("Watcher")]),t._v(" 对象其实会被 "),a("code",[t._v("push")]),t._v(" 进一个队列 "),a("code",[t._v("queue")]),t._v(" 中，在下一个 tick 的时候将这个队列 "),a("code",[t._v("queue")]),t._v(" 全部拿出来 "),a("code",[t._v("run")]),t._v("（ "),a("code",[t._v("Watcher")]),t._v(" 对象的一个方法，用来触发 "),a("code",[t._v("patch")]),t._v(" 操作） 一遍。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/24/161285d6b2d9e6bd?w=350&h=404&f=png&s=16724",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nexttick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nexttick","aria-hidden":"true"}},[this._v("#")]),this._v(" nextTick")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Vue.js 实现了一个 "),a("code",[t._v("nextTick")]),t._v(" 函数，传入一个 "),a("code",[t._v("cb")]),t._v(" ，这个 "),a("code",[t._v("cb")]),t._v(" 会被存储到一个队列中，在下一个 tick 时触发队列中的所有 "),a("code",[t._v("cb")]),t._v(" 事件。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("因为目前浏览器平台并没有实现 "),a("code",[t._v("nextTick")]),t._v(" 方法，所以 Vue.js 源码中分别用 "),a("code",[t._v("Promise")]),t._v("、"),a("code",[t._v("setTimeout")]),t._v("、"),a("code",[t._v("setImmediate")]),t._v(" 等方式在 microtask（或是task）中创建一个事件，目的是在当前调用栈执行完毕以后（不一定立即）才会去执行这个事件。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("首先定义一个 "),a("code",[t._v("callbacks")]),t._v(" 数组用来存储 "),a("code",[t._v("nextTick")]),t._v("，在下一个 tick 处理这些回调函数之前，所有的 "),a("code",[t._v("cb")]),t._v(" 都会被存在这个 "),a("code",[t._v("callbacks")]),t._v(" 数组中。"),a("code",[t._v("pending")]),t._v(" 是一个标记位，代表一个等待的状态。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("setTimeout")]),t._v(" 会在 task 中创建一个事件 "),a("code",[t._v("flushCallbacks")]),t._v(" ，"),a("code",[t._v("flushCallbacks")]),t._v(" 则会在执行时将 "),a("code",[t._v("callbacks")]),t._v(" 中的所有 "),a("code",[t._v("cb")]),t._v(" 依次执行。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" callbacks "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pending "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("nextTick")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    callbacks"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("pending"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        pending "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flushCallbacks"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("flushCallbacks")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pending "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" copies "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" callbacks"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("slice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    callbacks"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" copies"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        copies"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"再写-watcher"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#再写-watcher","aria-hidden":"true"}},[this._v("#")]),this._v(" 再写 Watcher")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("第一个例子中，当我们将 "),a("code",[t._v("number")]),t._v(" 增加 1000 次时，先将对应的 "),a("code",[t._v("Watcher")]),t._v(" 对象给 "),a("code",[t._v("push")]),t._v(" 进一个队列 "),a("code",[t._v("queue")]),t._v(" 中去，等下一个 tick 的时候再去执行，这样做是对的。但是有没有发现，另一个问题出现了？")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("因为 "),a("code",[t._v("number")]),t._v(" 执行 ++ 操作以后对应的 "),a("code",[t._v("Watcher")]),t._v(" 对象都是同一个，我们并不需要在下一个 tick 的时候执行 1000 个同样的 "),a("code",[t._v("Watcher")]),t._v(" 对象去修改界面，而是只需要执行一个 "),a("code",[t._v("Watcher")]),t._v(" 对象，使其将界面上的 0 变成 1000 即可。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("那么，我们就需要执行一个过滤的操作，同一个的 "),s("code",[this._v("Watcher")]),this._v(" 在同一个 tick 的时候应该只被执行一次，也就是说队列 "),s("code",[this._v("queue")]),this._v(" 中不应该出现重复的 "),s("code",[this._v("Watcher")]),this._v(" 对象。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("那么我们给 "),s("code",[this._v("Watcher")]),this._v(" 对象起个名字吧～用 "),s("code",[this._v("id")]),this._v(" 来标记每一个 "),s("code",[this._v("Watcher")]),this._v(" 对象，让他们看起来“不太一样”。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("实现 "),a("code",[t._v("update")]),t._v(" 方法，在修改数据后由 "),a("code",[t._v("Dep")]),t._v(" 来调用， 而 "),a("code",[t._v("run")]),t._v(" 方法才是真正的触发 "),a("code",[t._v("patch")]),t._v(" 更新视图的方法。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" uid "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Watcher")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("uid"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("update")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'watch'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("' update'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("queueWatcher")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("run")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'watch'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'视图更新啦～'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"queuewatcher"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queuewatcher","aria-hidden":"true"}},[this._v("#")]),this._v(" queueWatcher")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("不知道大家注意到了没有？笔者已经将 "),s("code",[this._v("Watcher")]),this._v(" 的 "),s("code",[this._v("update")]),this._v(" 中的实现改成了")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("queueWatcher")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token keyword"}},[this._v("this")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("将 "),s("code",[this._v("Watcher")]),this._v(" 对象自身传递给 "),s("code",[this._v("queueWatcher")]),this._v(" 方法。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们来实现一下 "),s("code",[this._v("queueWatcher")]),this._v(" 方法。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" has "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" queue "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" waiting "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("queueWatcher")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("watcher"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" watcher"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("has"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        has"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        queue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("watcher"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("waiting"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            waiting "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flushSchedulerQueue"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们使用一个叫做 "),s("code",[this._v("has")]),this._v(" 的 map，里面存放 id -> true ( false ) 的形式，用来判断是否已经存在相同的 "),s("code",[this._v("Watcher")]),this._v(" 对象 （这样比每次都去遍历 "),s("code",[this._v("queue")]),this._v(" 效率上会高很多）。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("如果目前队列 "),a("code",[t._v("queue")]),t._v(" 中还没有这个 "),a("code",[t._v("Watcher")]),t._v(" 对象，则该对象会被 "),a("code",[t._v("push")]),t._v(" 进队列 "),a("code",[t._v("queue")]),t._v(" 中去。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("waiting")]),t._v(" 是一个标记位，标记是否已经向 "),a("code",[t._v("nextTick")]),t._v(" 传递了 "),a("code",[t._v("flushSchedulerQueue")]),t._v(" 方法，在下一个 tick 的时候执行 "),a("code",[t._v("flushSchedulerQueue")]),t._v(" 方法来 flush 队列 "),a("code",[t._v("queue")]),t._v("，执行它里面的所有 "),a("code",[t._v("Watcher")]),t._v(" 对象的 "),a("code",[t._v("run")]),t._v(" 方法。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"flushschedulerqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flushschedulerqueue","aria-hidden":"true"}},[this._v("#")]),this._v(" flushSchedulerQueue")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("flushSchedulerQueue")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" watcher"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" index "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" queue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" index"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        watcher "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" queue"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" watcher"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        has"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        watcher"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("run")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    waiting  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"举个例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举个例子","aria-hidden":"true"}},[this._v("#")]),this._v(" 举个例子")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" watch1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Watcher")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" watch2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Watcher")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwatch1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwatch1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwatch2"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("我们现在 new 了两个 "),a("code",[t._v("Watcher")]),t._v(" 对象，因为修改了 "),a("code",[t._v("data")]),t._v(" 的数据，所以我们模拟触发了两次 "),a("code",[t._v("watch1")]),t._v(" 的 "),a("code",[t._v("update")]),t._v(" 以及 一次 "),a("code",[t._v("watch2")]),t._v(" 的 "),a("code",[t._v("update")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("假设没有批量异步更新策略的话，理论上应该执行 "),s("code",[this._v("Watcher")]),this._v(" 对象的 "),s("code",[this._v("run")]),this._v("，那么会打印。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("watch1 update\nwatch1视图更新啦～\nwatch1 update\nwatch1视图更新啦～\nwatch2 update\nwatch2视图更新啦～\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("watch1 update\nwatch1 update\nwatch2 update\nwatch1视图更新啦～\nwatch2视图更新啦～\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这就是异步更新策略的效果，相同的 "),s("code",[this._v("Watcher")]),this._v(" 对象会在这个过程中被剔除，在下一个 tick 的时候去更新视图，从而达到对我们第一个例子的优化。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("我们再回过头聊一下第一个例子， "),a("code",[t._v("number")]),t._v(" 会被不停地进行 "),a("code",[t._v("++")]),t._v(" 操作，不断地触发它对应的 "),a("code",[t._v("Dep")]),t._v(" 中的 "),a("code",[t._v("Watcher")]),t._v(" 对象的 "),a("code",[t._v("update")]),t._v(" 方法。然后最终 "),a("code",[t._v("queue")]),t._v(" 中因为对相同 "),a("code",[t._v("id")]),t._v(" 的 "),a("code",[t._v("Watcher")]),t._v(" 对象进行了筛选，从而 "),a("code",[t._v("queue")]),t._v(" 中实际上只会存在一个 "),a("code",[t._v("number")]),t._v(" 对应的 "),a("code",[t._v("Watcher")]),t._v(" 对象。在下一个 tick 的时候（此时 "),a("code",[t._v("number")]),t._v(" 已经变成了 1000），触发 "),a("code",[t._v("Watcher")]),t._v(" 对象的 "),a("code",[t._v("run")]),t._v(" 方法来更新视图，将视图上的 "),a("code",[t._v("number")]),t._v(" 从 0 直接变成 1000。")])}],!1,null,null,null);s.default=e.exports}}]);