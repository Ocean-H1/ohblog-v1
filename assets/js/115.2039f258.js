(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{710:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目🔒")]),s._v(" "),a("p",[s._v("请编写一个函数，用于 "),a("strong",[s._v("删除单链表中某个特定节点")]),s._v(" 。在设计函数时需要注意，你无法访问链表的头节点 "),a("code",[s._v("head")]),s._v(" ，只能直接访问 "),a("strong",[s._v("要被删除的节点")]),s._v(" 。")]),s._v(" "),a("p",[s._v("题目数据保证需要删除的节点 "),a("strong",[s._v("不是末尾节点")]),s._v(" 。")]),s._v(" "),a("p",[a("strong",[s._v("示例 1：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/uploads/2020/09/01/node1.jpg",alt:"img"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("输入：head = [4,5,1,9], node = 5\n输出：[4,1,9]\n解释：指定链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("示例 2：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/uploads/2020/09/01/node2.jpg",alt:"img"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("输入：head = [4,5,1,9], node = 1\n输出：[4,5,9]\n解释：指定链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"解题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题"}},[s._v("#")]),s._v(" 解题🔑")]),s._v(" "),a("h3",{attrs:{id:"_1和下一个结点交换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1和下一个结点交换"}},[s._v("#")]),s._v(" ①和下一个结点交换")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("​\t题目要求只能访问被删除的节点，而不能访问头结点，所以使用常规方法直接删除目标节点肯定不行，")]),s._v(" "),a("p",[s._v("​\t但此题限制条件不多，节点的值都是唯一的且目标节点不会是最后一个节点")]),s._v(" "),a("p",[s._v("​\t所以我们可以将目标节点后一个节点的值，然后将后一个节点删除即可(实际上是删除了目标节点后一个节点，但节点的值是符合要求的)")])]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {ListNode} node\n * @return {void} Do not return anything, modify node in-place instead.\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("deleteNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val \n    node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);