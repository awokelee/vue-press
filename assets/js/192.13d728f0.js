(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{337:function(e,t,v){"use strict";v.r(t);var c=v(0),_=Object(c.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"高级-5：想丢弃的也不是最新的提交？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高级-5：想丢弃的也不是最新的提交？","aria-hidden":"true"}},[e._v("#")]),e._v(" 高级 5：想丢弃的也不是最新的提交？")]),v("p",[e._v("假如有一个 "),v("code",[e._v("commit")]),e._v(" ，你在刚把它写完的时候并没有觉得它不好，可是在之后又写了几个提交以后，你突然灵光一现：「哎呀，那个 "),v("code",[e._v("commit")]),e._v(" 不该写，我要撤销！」")]),v("p",[e._v("不是最新的提交，就不能用 "),v("code",[e._v("reset --hard")]),e._v(" 来撤销了。这种情况的撤销，就要用之前介绍过的一个指令：交互式 "),v("code",[e._v("rebase")]),e._v(" ——"),v("code",[e._v("rebase -i")]),e._v("。")]),v("h2",{attrs:{id:"用交互式-rebase-撤销提交"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用交互式-rebase-撤销提交","aria-hidden":"true"}},[e._v("#")]),e._v(" 用交互式 rebase 撤销提交")]),v("p",[e._v("之前介绍过，交互式 "),v("code",[e._v("rebase")]),e._v(" 可以用来修改某些旧的 "),v("code",[e._v("commit")]),e._v("s。其实除了修改提交，它还可以用于撤销提交。比如下面这种情况：")]),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe243fc7996318?w=536&h=354&f=jpeg&s=118972",alt:""}})]),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe243fc74f48c7?w=447&h=273&f=jpeg&s=16849",alt:""}})]),v("p",[e._v("你想撤销倒数第二条 "),v("code",[e._v("commit")]),e._v("，那么可以使用 "),v("code",[e._v("rebase -i")]),e._v("：")]),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("git rebase -i HEAD^^\n")])])]),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe243fc7ac1154?w=554&h=261&f=jpeg&s=96953",alt:""}})]),v("p",[e._v("然后就会跳到 "),v("code",[e._v("commit")]),e._v(" 序列的编辑界面，这个在之前的第 10 节里已经讲过了。和第 10 节一样，你需要修改这个序列来进行操作。不过不同的是，之前讲的修正 "),v("code",[e._v("commit")]),e._v(" 的方法是把要修改的 "),v("code",[e._v("commit")]),e._v(" 左边的 "),v("code",[e._v("pick")]),e._v(" 改成 "),v("code",[e._v("edit")]),e._v("，而如果你要撤销某个 "),v("code",[e._v("commit")]),e._v(" ，做法就更加简单粗暴一点：直接删掉这一行就好。")]),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe243fcf5f6607?w=542&h=240&f=jpeg&s=77581",alt:""}})]),v("p",[v("code",[e._v("pick")]),e._v(" 的直接意思是「选取」，在这个界面的意思就是应用这个 "),v("code",[e._v("commit")]),e._v("。而如果把这一行删掉，那就相当于在 "),v("code",[e._v("rebase")]),e._v(" 的过程中跳过了这个 "),v("code",[e._v("commit")]),e._v("，从而也就把这个 "),v("code",[e._v("commit")]),e._v(" 撤销掉了。")]),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe243fce5804fd?w=548&h=330&f=gif&s=326602",alt:""}})]),v("p",[e._v("现在再看 "),v("code",[e._v("log")]),e._v("，就会发现之前的倒数第二条 "),v("code",[e._v("commit")]),e._v(" 已经不在了。")]),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("git log\n")])])]),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe243fc7eb3b31?w=528&h=220&f=jpeg&s=71201",alt:""}})]),v("h2",{attrs:{id:"用-rebase-onto-撤销提交"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用-rebase-onto-撤销提交","aria-hidden":"true"}},[e._v("#")]),e._v(" 用 rebase --onto 撤销提交")]),v("p",[e._v("除了用交互式 "),v("code",[e._v("rebase")]),e._v(" ，你还可以用 "),v("code",[e._v("rebase --onto")]),e._v(" 来更简便地撤销提交。")]),v("p",[v("code",[e._v("rebase")]),e._v(" 加上 "),v("code",[e._v("--onto")]),e._v(" 选项之后，可以指定 "),v("code",[e._v("rebase")]),e._v(" 的「起点」。一般的 "),v("code",[e._v("rebase")]),e._v("，告诉 Git 的是「我要把当前 "),v("code",[e._v("commit")]),e._v(" 以及它之前的 "),v("code",[e._v("commit")]),e._v("s 重新提交到目标 "),v("code",[e._v("commit")]),e._v(" 上去，这其中，"),v("code",[e._v("rebase")]),e._v(" 的「起点」是自动判定的：选取当前 "),v("code",[e._v("commit")]),e._v(" 和目标 "),v("code",[e._v("commit")]),e._v(" 在历史上的交叉点作为起点。")]),v("p",[e._v("例如下面这种情况：")]),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe24400508e3c8?w=515&h=360&f=jpeg&s=19522",alt:""}})]),v("p",[e._v("如果在这里执行：")]),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("git rebase 第3个commit\n")])])]),v("p",[e._v("那么 Git 会自动选取 "),v("code",[e._v("3")]),e._v(" 和 "),v("code",[e._v("5")]),e._v(" 的历史交叉点 "),v("code",[e._v("2")]),e._v(" 作为 "),v("code",[e._v("rebase")]),e._v(" 的起点，依次将 "),v("code",[e._v("4")]),e._v(" 和 "),v("code",[e._v("5")]),e._v(" 重新提交到 "),v("code",[e._v("3")]),e._v(" 的路径上去。")]),v("p",[e._v("而 "),v("code",[e._v("--onto")]),e._v(" 参数，就可以额外给 rebase 指定它的起点。例如同样以上图为例，如果我只想把 "),v("code",[e._v("5")]),e._v(" 提交到 "),v("code",[e._v("3")]),e._v(" 上，不想附带上 "),v("code",[e._v("4")]),e._v("，那么我可以执行：")]),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("git rebase --onto 第3个commit 第4个commit branch1\n")])])]),v("p",[v("code",[e._v("--onto")]),e._v(" 参数后面有三个附加参数：目标 "),v("code",[e._v("commit")]),e._v("、起点 "),v("code",[e._v("commit")]),e._v("（注意：rebase 的时候会把起点排除在外）、终点 "),v("code",[e._v("commit")]),e._v("。所以上面这行指令就会从 "),v("code",[e._v("4")]),e._v(" 往下数，拿到 "),v("code",[e._v("branch1")]),e._v(" 所指向的 "),v("code",[e._v("5")]),e._v("，然后把 "),v("code",[e._v("5")]),e._v(" 重新提交到 "),v("code",[e._v("3")]),e._v(" 上去。")]),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe24400d7d73d0?w=534&h=552&f=gif&s=199563",alt:""}})]),v("p",[e._v("同样的，你也可以用 "),v("code",[e._v("rebase --onto")]),e._v(" 来撤销提交：")]),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("git rebase --onto HEAD^^ HEAD^ branch1\n")])])]),v("p",[e._v("上面这行代码的意思是：以倒数第二个 "),v("code",[e._v("commit")]),e._v(" 为起点（起点不包含在 "),v("code",[e._v("rebase")]),e._v(" 序列里哟），"),v("code",[e._v("branch1")]),e._v(" 为终点，"),v("code",[e._v("rebase")]),e._v(" 到倒数第三个 "),v("code",[e._v("commit")]),e._v(" 上。")]),v("p",[e._v("也就是这样：")]),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe243fce5804fd?w=548&h=330&f=gif&s=326602",alt:""}})]),v("h2",{attrs:{id:"小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[e._v("#")]),e._v(" 小结")]),v("p",[e._v("这节的内容是「撤销过往的提交」。方法有两种：")]),v("ol",[v("li",[e._v("用 "),v("code",[e._v("git rebase -i")]),e._v(" 在编辑界面中删除想撤销的 "),v("code",[e._v("commit")]),e._v("s")]),v("li",[e._v("用 "),v("code",[e._v("git rebase --onto")]),e._v(" 在 rebase 命令中直接剔除想撤销的 "),v("code",[e._v("commit")]),e._v("s")])]),v("p",[e._v("方法有两种，理念是一样的：在 "),v("code",[e._v("rebase")]),e._v(" 的过程中去掉想撤销的 "),v("code",[e._v("commit")]),e._v("，让他它消失在历史中。")])])}],!1,null,null,null);t.default=_.exports}}]);