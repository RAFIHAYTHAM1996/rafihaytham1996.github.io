(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{381:function(e,t,n){__NEXT_REGISTER_PAGE("/faq",function(){return e.exports=n(382),{page:e.exports.default}})},382:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=(c(n(47)),c(n(40))),u=c(n(41)),l=c(n(383)),i=c(n(31));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,y(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.Component),n=t,(r=[{key:"render",value:function(){var e=this;return o.default.createElement(a.default,{id:"FAQ",menu:{solidStyle:!0},ref:function(t){return e.Page=t}},o.default.createElement("div",{className:"ContentContainer"},o.default.createElement("h2",{className:"dark"},"FAQ"),o.default.createElement("p",{className:"extra-help"},"Can’t find the answer here? Contact us at ",o.default.createElement("a",{href:"tel:+18002088480"},"1-800-208-8480")," or send us an e-mail at ",o.default.createElement("a",{href:"mailto:info@hospall.com"},"info@hospall.com")),i.default.FAQ.map(function(e,t){return o.default.createElement(l.default,{question:e.question,answer:e.answer,defaultExpanded:0===t,key:t})})),o.default.createElement(u.default,null))}}])&&s(n.prototype,r),c&&s(n,c),t}();t.default=b},383:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));(o=n(1))&&o.__esModule;function u(e){return(u="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=i(t).call(this,e),n=!o||"object"!==u(o)&&"function"!=typeof o?f(r):o,s(f(f(n)),"getState",function(){return n.state.collapsed?"":"expanded"}),s(f(f(n)),"toggleState",function(){n.setState({collapsed:!n.state.collapsed})}),n.state={collapsed:void 0===e.defaultExpanded||!e.defaultExpanded},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,a.PureComponent),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.answer,n=e.question;return a.default.createElement("div",{className:"InlineQuestion"},a.default.createElement("div",{onClick:this.toggleState},a.default.createElement("div",{className:"chevron "+this.getState()},a.default.createElement("svg",{viewBox:"0 0 52 52",onClick:this.toggleState},a.default.createElement("line",{x1:1,y1:25,x2:51,y2:25}),a.default.createElement("line",{x1:1,y1:25,x2:51,y2:25}))),a.default.createElement("p",{className:"question "+this.getState()},n)),t&&!this.state.collapsed&&t.map(function(e,t){return a.default.createElement("p",{className:"col-12 col-md-10 answer",key:t},e)}))}}])&&l(n.prototype,r),o&&l(n,o),t}();t.default=p,p.defaultProps={answer:["Answer not available"],defaultExpanded:!1}}},[[381,1,0]]]);