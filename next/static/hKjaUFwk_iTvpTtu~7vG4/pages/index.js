(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{385:function(t,e,n){__NEXT_REGISTER_PAGE("/",function(){return t.exports=n(386),{page:t.exports.default}})},386:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e.default=t,e}(n(0)),u=n(56),a=(r=n(14))&&r.__esModule?r:{default:r};function c(t){return(c="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var y=function(t){function e(t){var n,o,r,i,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,r=l(e).call(this,t),n=!r||"object"!==c(r)&&"function"!=typeof r?s(o):r,i=s(s(n)),a=function(){var t=window.innerWidth/window.innerHeight>1.777777777777778?"landscape":"portrait";t!==n.state.orientation&&n.setState({orientation:t})},(u="updateOrientation")in i?Object.defineProperty(i,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[u]=a,n.state={orientation:"landscape"},n.orientation="landscape",n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,i.Component),n=e,(o=[{key:"componentDidMount",value:function(){var t=this;this.updateOrientation(),this.video.onended=function(){t.props.router.replace("/home")}}},{key:"render",value:function(){var t=this;return i.default.createElement("div",{className:"intro-vid-cont"},i.default.createElement("video",{ref:function(e){return t.video=e},className:"intro-vid-".concat(this.state.orientation),autoPlay:!0,muted:!0,playsInline:!0},i.default.createElement("source",{src:"".concat(a.default.ASSET_PATH,"videos/web-intro.mp4"),type:"video/mp4"}),"Your browser does not support the video tag."))}}])&&f(n.prototype,o),r&&f(n,r),e}(),d=(0,u.withRouter)(y);e.default=d}},[[385,1,0]]]);
