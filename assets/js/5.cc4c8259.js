(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("p",[t._v("v8n aims to be the most fluent and simple validation library for use in any\ncontext. The API is beautifully readable and allows for easy creation of complex\nvalidations in any part of your app. Even though there are many useful default\nvalidation methods, it's a breeze to add your own fluent rules to v8n and use\nthem anywhere in your app.")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),s("p",[t._v("This is just the most straightforward approach without any build setup or\ncomplex imports. The "),s("router-link",{attrs:{to:"/Installation.html"}},[t._v("Installation")]),t._v(" page gives you an overview\nof all the available installation methods.")],1),s("p",[t._v("After you've included v8n in some way you can use it very easily.")]),t._m(9),t._m(10),t._m(11),s("p",[t._v("One of the main goals of v8n is its simple and fluent usage. You simply chain\nyour rules and build even incredibly complex rules with easy. You can chain any\nnumber of built-in rules and even combine them with your own custom rules in the\nsame way. Make sure to check out all the\n"),s("router-link",{attrs:{to:"/api/#built-in-rules"}},[t._v("built-in rules")]),t._v(" and how you can add your own.")],1),t._m(12),t._m(13),t._m(14),s("p",[t._v("Extending is at the core of v8n. And it's easy, too. All you do is pack your own\nvalidation into a function that returns a "),s("code",[t._v("boolean")]),t._v(". You can do as much logic\nin your rule as you like, all that matters is the boolean return and you're good\nto go. Once you created your function just add it using "),s("code",[t._v("extend()")]),t._v(". Take a look\nat the "),s("router-link",{attrs:{to:"/Extending.html"}},[t._v("Extending")]),t._v(" page for more details and different types of\nrules you might want to add.")],1),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),s("p",[t._v("You can also create\n"),s("router-link",{attrs:{to:"/Validation.html#Asynchronous-validation"}},[t._v("Promise based validation rules")]),t._v(".")],1)]),t._m(15),s("p",[t._v("Sometimes you might not want a boolean return, maybe you're working in a\ntry-catch or you need to know which rules failed for the given value. You're\nin luck, v8n offers multiple validation strategies that give you great\nflexibility when writing your code and give your more than just true or false.\nIf you want to know more read up about all the\n"),s("router-link",{attrs:{to:"/Validation.html#strategies"}},[t._v("validation strategies")]),t._v(" and how to use them.")],1)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"what-s-v8n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-v8n","aria-hidden":"true"}},[this._v("#")]),this._v(" What's v8n?")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v('The name v8n is actually derived from the structure of the word "validation". If\nyou look closely you will find that between the '),s("em",[t._v("v")]),t._v(" and the "),s("em",[t._v("n")]),t._v(" in there are\nprecisely 8 letters ("),s("em",[t._v("a l i d a t i o")]),t._v("). So we get from the sort of boring word\n"),s("em",[t._v("validation")]),t._v(" to the very nice looking acronym "),s("strong",[t._v("v8n")]),t._v(".")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Fluent and chainable API")]),a("li",[this._v("Useful standard validation rules (30+)")]),a("li",[this._v("Custom validations rules")]),a("li",[this._v("Asynchronous validation")]),a("li",[this._v("Reusability")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting started")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Using v8n is supposed to be easy and intuitive. Aside from usage in the browser\nwith versions hosted on popular CDN services, you can import the library into\nyour codebase with "),a("code",[this._v("import")]),this._v(" or "),a("code",[this._v("require")]),this._v(" depending on how bleeding-edge you\nare.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The example below shows one way to get started. Simply create an "),a("code",[this._v(".html")]),this._v(" file\nand add this to it. Now you will be able to use "),a("code",[this._v("v8n()")]),this._v(" anywhere on that page\nright away.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/v8n/dist/v8n.min.js"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}}),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("v8n")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("test")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"My string!"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"fluent-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fluent-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Fluent API")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("v8n")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("first")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"H"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("last")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"o"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("test")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Hello"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The code above simply validates that the given value is a string, it's first\ncharacter is "),a("code",[this._v("H")]),this._v(" and the last is "),a("code",[this._v("o")]),this._v(". Doesn't that look really readable? Be sure\nto read up on "),a("a",{attrs:{href:"#validation-strategies"}},[this._v("validation strategies")]),this._v(" after you wrote\nyour validations, so that you can leverage them to their full extent.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"custom-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom rules")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"validation-strategies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation-strategies","aria-hidden":"true"}},[this._v("#")]),this._v(" Validation strategies")])}],!1,null,null,null);a.default=e.exports}}]);