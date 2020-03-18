(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{130:function(e){e.exports={services:[{name:"content strategy",description:["We want to understand who you are, then build a solution that revolves around who you want to be. We offer content strategy and copywriting services for businesses looking for that extra edge.","Our projects take a content-first approach because we believe that information holds the highest importance. Content should always drive design, and not vice-versa."]},{name:"brand identity",description:["It’s a lot more than just a pretty logo. We believe in the importance of first impressions, because better brands mean better business.","We create fresh, full brand packages for a more cohesive identity. Even if your brand just needs an update, we promise every addition we make will strengthen your brand’s story."]},{name:"ux & ui design",description:["We ensure your clients, customers, and users are satisfied by delivering ideal experiences, catered to their specific needs and goals.","From information architecture and custom iconography, right down to the smallest micro-interactions, every aspect will be considered. We love finding common ground for beauty and logic."]},{name:"development",description:["Using the latest technologies, we implement sophisticated systems that empower our clients. From automating processes to collecting analytical data, we do the heavy lifting so you can focus on what really matters.","With an emphasis on functionality and usability, and ensuring privacy and security are always a top priority, our products and applications are made to deliver."]},{name:"marketing strategy",description:["We help brands get noticed. We’ll work with you to develop a marketing strategy that will bring your brand to life.","From social media strategy to SEO optimization, and through the creation of both print and digital marketing content, we’ll make sure everything you put out into the market is on-brand and drives success for your business."]}],projects:[{name:"Hospall Private Homecare",services:["content strategy","ux & ui design","web development","marketing strategy"],thumbnail:"hospall/thumbnail.png"},{name:"Metals & Alloys Centre",services:["branding","ux & ui design","web development"],thumbnail:"mac/thumbnail.png"},{name:"King City Physiotherapy",services:["content strategy","ux & ui design","web development"],thumbnail:"king-city-physiotherapy/thumbnail.png"}]}},131:function(e,t,n){"use strict";e.exports=function(e){for(var t=e,n=0;n<t.length;n++)" "===t[n]&&n>0&&"-"!==t[n-1]?t=t.replace(" ","-"):t[n].match(/[A-Za-z0-9]/i)||(t=t.slice(0,n)+t.slice(n+1,t.length),n--);return t=t.toLowerCase()}},389:function(e,t,n){__NEXT_REGISTER_PAGE("/services",function(){return e.exports=n(390),{page:e.exports.default}})},390:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=f(n(55)),a=(n(12),f(n(128)),f(n(14))),u=f(n(130)),c=(f(n(58)),f(n(59))),l=f(n(131)),s=n(56);function f(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){function t(e){var n,r,o,i,c,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=y(t).call(this,e),n=!o||"object"!==p(o)&&"function"!=typeof o?b(r):o,i=b(b(n)),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;n.setState({selectedService:e})},(c="selectService")in i?Object.defineProperty(i,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[c]=s;var f=0;if(n.props.router.query.service){var d=u.default.services.map(function(e,t){return{index:t,url:(0,l.default)(e.name)}}).find(function(e){return e.url===n.props.router.query.service});d&&(f=d.index)}return n.state={selectedService:f},n.navLinks=["home","contact us"],n.ASSET_PATH=a.default.ASSET_PATH+"images/landing/",n}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.Page.transitionIn(this.childTransitionContainer)}},{key:"render",value:function(){var e=this,t=this.state.selectedService;return o.default.createElement(i.default,{id:"Services",brandColor:"primary",navLinks:this.navLinks,ref:function(t){return e.Page=t}},o.default.createElement("div",{ref:function(t){return e.childTransitionContainer=t}},o.default.createElement("div",{className:"brand-outline-position"},o.default.createElement(c.default,{ref:function(t){return e.BrandOutlineRef=t}})),o.default.createElement("div",{className:"row mb-5"},o.default.createElement("div",{className:"col-sm-4 offset-md-1 col-md-4 col-lg-3"},o.default.createElement("h1",null,o.default.createElement("span",{className:"outline"},"services")))),o.default.createElement("div",{className:"row d-none d-sm-flex"},o.default.createElement("div",{className:"col-sm-4 offset-md-1 col-md-4 col-lg-3"},o.default.createElement("ul",{className:"service-name-list"},u.default.services.map(function(n,r){return o.default.createElement("li",{key:r,className:t===r?"selected":"",tabIndex:0,onClick:e.selectService.bind(e,r),onFocus:e.selectService.bind(e,r)},n.name)}))),o.default.createElement("div",{className:"service-description col-11 col-sm-7 col-md-6"},u.default.services[t].description.map(function(e,t){return o.default.createElement("p",{key:t},e)}))),u.default.services.map(function(e,t){return o.default.createElement("div",{className:"row d-sm-none"},o.default.createElement("div",{className:"col-sm-4 offset-md-1 col-md-4 col-lg-3"},o.default.createElement("ul",{className:"services-list"},o.default.createElement("li",{key:t,tabIndex:0},o.default.createElement("h6",null,e.name),e.description.map(function(e,t){return o.default.createElement("p",{key:t},e)})))))})))}}])&&d(n.prototype,r),s&&d(n,s),t}(),h=(0,s.withRouter)(v);t.default=h},45:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=(a(n(1)),a(n(57)));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,s(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.color,n=e.size,r=e.className;return o.default.createElement("span",{className:"BrandA ".concat(t," size-").concat(n," ").concat(r),dangerouslySetInnerHTML:{__html:i.default}})}}])&&c(n.prototype,r),a&&c(n,a),t}();t.default=p,p.defaultProps={color:"primary",className:"",size:"md"}},57:function(e,t){e.exports='<svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.13 22.69V14.69C16.1635 13.6256 15.9826 12.5654 15.598 11.5724C15.2134 10.5793 14.633 9.67381 13.8912 8.90969C13.1495 8.14557 12.2616 7.53846 11.2805 7.1245C10.2993 6.71053 9.24492 6.49816 8.18001 6.50003C7.10394 6.49339 6.03726 6.70044 5.04182 7.10918C4.04638 7.51791 3.14199 8.12019 2.38108 8.8811C1.62017 9.64201 1.01789 10.5464 0.609155 11.5418C0.200422 12.5373 -0.00662759 13.604 1.08933e-05 14.68C-0.00855088 15.7483 0.198541 16.8073 0.608886 17.7936C1.01923 18.7799 1.62439 19.6733 2.38813 20.4202C3.15187 21.1671 4.05849 21.7523 5.05369 22.1406C6.0489 22.5289 7.11223 22.7124 8.18001 22.68C9.94086 22.7467 11.6621 22.1467 13 21V22.68L16.13 22.69ZM8.18001 19.46C7.53746 19.476 6.8981 19.3648 6.29863 19.133C5.69916 18.9011 5.15141 18.5531 4.68681 18.1089C4.22222 17.6648 3.84994 17.1332 3.59136 16.5448C3.33278 15.9564 3.19298 15.3226 3.18001 14.68C3.19812 13.3596 3.73072 12.0983 4.6645 11.1645C5.59829 10.2307 6.85956 9.69814 8.18001 9.68003C8.82262 9.69301 9.45634 9.8328 10.0448 10.0914C10.6332 10.35 11.1648 10.7222 11.6089 11.1868C12.0531 11.6514 12.4011 12.1992 12.6329 12.7987C12.8648 13.3981 12.9759 14.0375 12.96 14.68C12.9722 15.3111 12.857 15.9382 12.6211 16.5236C12.3852 17.1091 12.0335 17.6409 11.5872 18.0872C11.1409 18.5336 10.6091 18.8852 10.0236 19.1211C9.43815 19.357 8.81109 19.4723 8.18001 19.46Z" transform="translate(3 -4)"/></svg>'},58:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=u(n(45)),a=u(n(14));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(){var e,n,r,a,u,l,f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var d=arguments.length,y=new Array(d),m=0;m<d;m++)y[m]=arguments[m];return r=this,n=!(a=(e=s(t)).call.apply(e,[this].concat(y)))||"object"!==c(a)&&"function"!=typeof a?p(r):a,u=p(p(n)),f=function(){for(var e=[],t=!1,n=(window.innerHeight+40)/54,r=window.innerWidth/60,a=0;a<n;a++){for(var u=[],c=0;c<r;c++)u.push(o.default.createElement(i.default,{key:c,className:c%2==0?"odd":"even",size:"xs"}));e.push(o.default.createElement("div",{style:{transform:t?"translateX(-50px)":""},key:a},u)),t=!t}return e},(l="spawnPattern")in u?Object.defineProperty(u,l,{value:f,enumerable:!0,configurable:!0,writable:!0}):u[l]=f,n}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.Component),n=t,(r=[{key:"render",value:function(){return o.default.createElement("div",{className:"Brand-Pattern"},!a.default.isServer()&&this.spawnPattern())}}])&&l(n.prototype,r),u&&l(n,u),t}();t.default=d},59:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=(c(n(1)),n(12)),a=c(n(60)),u=c(n(80));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){function t(){var e,n,r,o,a,u,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,p=new Array(s),y=0;y<s;y++)p[y]=arguments[y];return r=this,o=(e=f(t)).call.apply(e,[this].concat(p)),n=!o||"object"!==l(o)&&"function"!=typeof o?d(r):o,a=d(d(n)),c=function(e){var t=window.innerWidth/2,r=(e.clientX-t)/t*30*-1;i.TweenMax.to(n.BrandOutline,.6,{transform:"translateX(".concat(r,"px)")})},(u="handleMouseMove")in a?Object.defineProperty(a,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[u]=c,n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props.animate,t=this.BrandOutline.childNodes[0].children;e?i.TweenMax.to(t,3,{strokeDashoffset:0,opacity:1,delay:.2,onComplete:function(){}}):i.TweenMax.set(t,{strokeDashoffset:0,opacity:1}),u.default.init(),"desktop"===u.default.device()&&window.addEventListener("mousemove",this.handleMouseMove)}},{key:"componentWillUnmount",value:function(){"desktop"===u.default.device()&&window.removeEventListener("mousemove",this.handleMouseMove)}},{key:"render",value:function(){var e=this;return o.default.createElement("span",{ref:function(t){return e.BrandOutline=t},className:"BrandOutline",dangerouslySetInnerHTML:{__html:a.default}})}}])&&s(n.prototype,r),c&&s(n,c),t}();t.default=y,y.defaultProps={animate:!1}},60:function(e,t){e.exports='<svg viewBox="0 0 831 179" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M126.989 178.124V164.993V115.506C126.989 79.9023 100.44 51.6262 64.8193 51.6262C29.1809 51.6262 0.877319 79.9198 0.877319 115.506C0.877319 151.092 29.1809 177.615 64.8193 177.615C79.2255 177.615 91.3507 174.092 102.212 164.993V178.124H126.989V178.124ZM64.8193 152.88C43.5872 152.88 25.6364 136.717 25.6364 115.523C25.6364 94.312 43.5696 76.3787 64.8193 76.3787C86.0514 76.3787 102.212 94.2945 102.212 115.523C102.212 136.717 86.0514 152.88 64.8193 152.88Z" stroke="#fff" stroke-miterlimit="10"/><path d="M426.906 152.88H403.357H375.545C358.612 152.88 344.452 142.029 339.152 126.883H426.344C433.433 126.883 438.978 121.326 438.978 114.507C438.978 73.346 406.13 51.1354 375.545 51.1354C340.416 51.1354 312.112 79.4115 312.112 114.507C312.112 149.339 340.416 178.141 375.545 178.141H403.357H426.906V152.88V152.88ZM339.152 101.868C344.452 86.9669 358.612 76.1158 375.545 76.1158C390.706 76.1158 406.884 84.1972 412.184 101.868H339.152Z" stroke="#fff" stroke-miterlimit="10"/><path d="M549.332 177.878H537.049H458.455C453.647 177.878 449.103 175.091 447.085 170.796C444.804 166.256 445.313 161.207 448.348 157.42L511.536 76.1157H457.964H445.681V51.1178H457.964H536.558C541.366 51.1178 545.911 53.6421 547.929 58.2C550.21 62.4948 549.701 67.5435 546.665 71.33L483.478 152.88H537.049H549.332V177.878V177.878Z" stroke="#fff" stroke-miterlimit="10"/><path d="M685.165 178.124V164.993V115.506C685.165 79.9023 658.634 51.6262 622.996 51.6262C587.357 51.6262 559.054 79.9023 559.054 115.506C559.054 151.11 587.357 177.615 622.996 177.615C637.402 177.615 649.527 174.092 660.389 164.993V178.124H685.165V178.124ZM622.996 152.88C601.764 152.88 583.813 136.717 583.813 115.523C583.813 94.312 601.746 76.3787 622.996 76.3787C644.228 76.3787 660.389 94.2945 660.389 115.523C660.406 136.717 644.228 152.88 622.996 152.88Z" stroke="#fff" stroke-miterlimit="10"/><path d="M167.927 178.124V165.484V114.752C167.927 93.5407 185.123 76.3788 206.337 76.3788H216.427V51.4159L206.337 51.3633C171.454 51.3633 142.904 79.6394 142.904 114.735V165.484V178.124H167.927V178.124Z" stroke="#fff" stroke-miterlimit="10"/><path d="M310.375 76.3787H299.215H281.281V165.502V178.141H256.259V165.502V76.3787H238.063H229.745V51.4508L236.466 51.4859C236.992 51.4158 237.519 51.3807 238.063 51.3807H256.259V0.876465H281.281V51.3807H299.215H310.375V76.3787Z" stroke="#fff" stroke-miterlimit="10"/><path d="M728.261 51.1178V64.0901C738.947 55.9561 752.266 51.1178 766.672 51.1178C801.556 51.1178 830.105 79.3939 830.105 114.489V165.239V178.123H805.083V165.239V114.489C805.083 93.2777 787.904 76.1157 766.672 76.1157C745.44 76.1157 728.261 93.2952 728.261 114.489V165.239V178.123H703.239V165.239V114.489C703.239 111.544 703.239 105.864 703.239 105.864C703.239 105.864 703.239 103.322 703.239 101.99V64.1251V51.1178H728.261V51.1178Z" stroke="#fff" stroke-miterlimit="10"/></svg>'}},[[389,1,0]]]);
