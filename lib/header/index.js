!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}({0:function(t,e,n){t.exports=n(65)},65:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(173);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o(i).default}})},102:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"wv-header",props:{title:String,skin:{type:String,default:"ios"},fixed:{type:Boolean,default:!0},showClose:Boolean,showBack:Boolean,showMenu:Boolean}}},160:function(t,e){},173:function(t,e,n){var o,i;n(160),o=n(102);var a=n(223);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-93505484",t.exports=o},223:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"wv-header",class:{"is-fixed":t.fixed},on:{click:function(e){e.stopPropagation(),t.$emit("headerClick")}}},[n("div",{staticClass:"left"},[n("div",{staticClass:"btn btn-back",on:{click:function(e){e.stopPropagation(),t.$emit("btnBackClick")}}},[t._v("back")]),t._v(" "),n("div",{staticClass:"btn btn-close",on:{click:function(e){e.stopPropagation(),t.$emit("btnCloseClick")}}},[t._v("close")]),t._v(" "),t._t("left")],2),t._v(" "),n("div",{staticClass:"wv-header-title",domProps:{textContent:t._s(t.title)}}),t._v(" "),n("div",{staticClass:"wv-header-menu",on:{click:function(e){e.stopPropagation(),t.$emit("menuClick")}}},[t._t("right",[t._v("test")])],2)])},staticRenderFns:[]}}});