!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),a=r(1),c=r(0),i=r(4),l=r(3);r(6);Object(i.registerBlockType)("media-card/media-card-three-column-esnext",{title:Object(c.__)("Media Card Three Columns","gutenberg-examples"),description:Object(c.__)("Welcome to the wonderful world of blocks! Blocks are the basis of all content within the editor.There are blocks available for all kinds of content: insert text, headings, images, lists, videos, tables, and lots more.Browse through the library to learn more about what each block does.","gutenberg-examples"),icon:"index-card",category:"layout",attributes:{title:{type:"array",source:"children",selector:"h2"},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},ingredients:{type:"array",source:"children",selector:".ingredients"},instructions:{type:"array",source:"children",selector:".steps"}},example:{attributes:{title:Object(c.__)("Chocolate Chip Cookies","gutenberg-examples"),mediaURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg",ingredients:[Object(c.__)("flour","gutenberg-examples"),Object(c.__)("sugar","gutenberg-examples"),Object(c.__)("chocolate","gutenberg-examples"),"💖"],instructions:[Object(c.__)("Mix","gutenberg-examples"),Object(c.__)("Bake","gutenberg-examples"),Object(c.__)("Enjoy","gutenberg-examples")]}},edit:function(e){var t=e.className;o()(e.attributes);e.setAttributes;return Object(a.createElement)("div",{className:t},Object(a.createElement)("div",{className:t},Object(a.createElement)("h2",null,"Media Card Three Columns"),Object(a.createElement)(l.InnerBlocks,{template:[["core/columns",{},[["core/column",{},[["core/image"],["core/heading",{placeholder:"Heading Here"}],["core/paragraph",{placeholder:"Enter Paragraph"}],["core/button",{placeholder:"Button"}]]],["core/column",{},[["core/image"],["core/heading",{placeholder:"Heading Here"}],["core/paragraph",{placeholder:"Enter Paragraph"}],["core/button",{placeholder:"Button"}]]],["core/column",{},[["core/image"],["core/heading",{placeholder:"Heading Here"}],["core/paragraph",{placeholder:"Enter Paragraph"}],["core/button",{placeholder:"Button"}]]]]]]})))},save:function(e){var t=e.className;return o()(e.attributes),Object(a.createElement)("div",{className:t},Object(a.createElement)("div",{className:"media-block-left"},Object(a.createElement)(l.InnerBlocks.Content,null)))}})},function(e,t){!function(){e.exports=this.wp.components}()}]);