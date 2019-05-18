(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{300:function(e,t,a){__NEXT_REGISTER_PAGE("/about",function(){return e.exports=a(301),{page:e.exports.default}})},301:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),i=a(7),l=(u(a(43)),u(a(34))),r=u(a(3)),c=(u(a(12)),u(a(19))),s=u(a(62));function u(e){return e&&e.__esModule?e:{default:e}}function m(e){return(m="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=function(e){function t(e){var a,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=d(t).call(this,e),a=!o||"object"!==m(o)&&"function"!=typeof o?y(n):o,g(y(y(a)),"setValueDescriptionOffset",function(){var e=0;if(a.valueRows){for(var t=0;t<a.state.activeValue;t++)e+=a.valueRows[t].getBoundingClientRect().height;e+=a.valueRows[a.state.activeValue].getBoundingClientRect().height/2+10}i.TweenMax.set(a.valueDescription,{paddingTop:e})}),a.state={activeValue:0,teamExpand:{}},a.ASSET_PATH=r.default.ASSET_PATH+"images/about/",a}var a,n,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.Component),a=t,(n=[{key:"componentDidMount",value:function(){this.setValueDescriptionOffset()}},{key:"componentDidUpdate",value:function(){this.setValueDescriptionOffset()}},{key:"render",value:function(){var e=this,t=c.default.about.values[this.state.activeValue];return this.valueRows=[],o.default.createElement(l.default,{id:"About",ref:function(t){return e.Page=t}},o.default.createElement("div",{className:"ContentContainer intro"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-12 col-sm-7 col-lg-5"},o.default.createElement("h1",{className:"dark",style:{marginTop:0}},"Providing Families",o.default.createElement("br",null),"with Peace of Mind"),o.default.createElement("p",{className:"dark"},"We believe life is a gift. Hospall Private Homecare provides peace of mind to families with the health and care needs of their loved ones in King Township and the surrounding York and Simcoe regions. Our commitment is to maintain open lines of communication within our multi disciplinary team to ensure the care is being provided consistent to the client. Our word is our promise.")),o.default.createElement("div",{className:"col-sm-5 col-lg-6",style:{position:"relative"}},o.default.createElement("img",{src:this.ASSET_PATH+"elder-woman.jpg",alt:"Elder Woman",id:"about-main-image"}))),o.default.createElement("img",{src:this.ASSET_PATH+"elder-woman.jpg",alt:"Elder Woman",id:"about-main-image-mobile"})),o.default.createElement("div",{className:"row dark"},o.default.createElement("div",{className:"ContentContainer who-we-are"},o.default.createElement("div",{className:"col-12"},o.default.createElement("h3",{id:"who-we-are"},"Who We Are")),o.default.createElement("div",{className:"col-12 col-sm-5"},o.default.createElement("p",{className:"who-we-are"},"We are a team of registered & certified staff who are passionate about the patient population. Our Hospall team cares for patients like family. We strive to provide consistent, compassionate care to our clients. With a focus on elevating and enriching their dignity, health, and well-being and general quality of life."),o.default.createElement("p",null,"Hospall makes a difference with families – our testimonials provide insight into how our past and present patients and families feel about our care.")))),o.default.createElement("div",{className:"ContentContainer container-our-mission mobile-no-padding"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"offset-1 col-11 col-sm-5 col-md-5",id:"elder-man-image-container"},o.default.createElement("img",{src:this.ASSET_PATH+"elder-man.jpg",alt:"Elder Man",style:{maxWidth:"100%"}})),o.default.createElement("div",{className:"col-12 col-sm-6 offset-md-1 col-md-5 our-mission"},o.default.createElement("h3",{className:"dark"},"Our Mission"),o.default.createElement("h5",{className:"dark our-mission-h5"},"Our mission is to provide Consistent Compassionate Care to our clients with a focus on Elevating and Enriching Health and Wellbeing while maintaining their dignity."),o.default.createElement("p",{className:"dark"},"Our goal is to provide the highest quality of personalized private care for our clients and their family members in the comfort of their own home. We strive to help our clients lead safe, balanced lives while achieving peace of mind and body. Hospall encourages our clients to be physically, mentally, socially, and emotionally engaged. We believe we can help them retain better cognitive function, stay healthier, and live in-dependently longer within their own homes.")))),o.default.createElement("div",{className:"container-our-values"},o.default.createElement("div",{className:"ContentContainer mobile-no-padding"},o.default.createElement("div",{className:"row our-values"},o.default.createElement("div",{className:"col-12 col-sm-8 col-md-5",style:{padding:0}},o.default.createElement("h3",{className:"dark our-values-h3"},"Our Values"),o.default.createElement("p",{className:"dark"},"Our values serve as a compass for our actions and reflect how we interact with our clients. These differentiate Hospall from other home care providers. Our clients are the center of what we do, Hospall cares. We believe in:"))),o.default.createElement("div",{className:"row values-list"},o.default.createElement("div",{className:"col-12 col-sm-5"},c.default.about.values.map(function(a,n){var i=e.state.activeValue===n?"active":"",l=e.state.activeValue===n&&o.default.createElement("span",{className:"col-10 d-sm-none",style:{marginTop:10,padding:0}},t&&t.description.map(function(e,t){return o.default.createElement("p",{className:"dark",key:t},e)}));return o.default.createElement("div",{className:"row values-list-row",key:n,ref:function(t){return e.valueRows[n]=t}},o.default.createElement("div",{className:"col-5"},o.default.createElement("p",{className:"values-list-name ".concat(i),onClick:function(){return e.setState({activeValue:n})}},a.name)),o.default.createElement("div",{className:"offset-3 col-4 values-list-line d-none d-sm-inline"},o.default.createElement("span",{className:"values-list-line-span ".concat(i)})),l)})),o.default.createElement("div",{className:"offset-sm-1 col-sm-5 d-none d-sm-block",ref:function(t){return e.valueDescription=t}},o.default.createElement("p",{className:"dark"},c.default.about.values[this.state.activeValue].description[0]))))),o.default.createElement("div",{className:"ContentContainer",style:{paddingTop:0}},o.default.createElement("div",{className:"row"},o.default.createElement("h3",{className:"col-12 offset-lg-0 dark our-dedicated-team-h3"},"Our Team")),c.default.about.team.map(function(t,a){var n=e.state.teamExpand[a],i=n?t.bio:t.bio.slice(0,2);return o.default.createElement("div",{className:"row our-dedicated-team",key:a},o.default.createElement("div",{className:"col-sm-4 offset-lg-0 col-lg-3",style:{padding:0}},o.default.createElement("img",{src:e.ASSET_PATH+t.image,alt:"".concat(t.name," - ").concat(t.title),style:{width:"100%"}})),o.default.createElement("div",{className:"col-12 offset-md-1 col-md-7 offset-lg-1 col-lg-7 our-dedicated-team-details"},o.default.createElement("h4",{className:"our-dedicated-team-title"},"".concat(t.name,", ").concat(t.title)),i.map(function(e,t){return o.default.createElement("p",{className:"dark",key:t},e)}),t.bio.length>2&&o.default.createElement("p",{className:"cta dark",onClick:function(){return e.setState({teamExpand:g({},a,!n)})}},"Read ".concat(n?"Less":"More"))))})),o.default.createElement("div",{className:"ContentContainer mobile-no-padding tablet-no-padding"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"offset-1 col-10 col-sm-4 mb-5 mb-sm-0"},o.default.createElement("img",{src:this.ASSET_PATH+"canadian-home-care-association.jpg",alt:"Canadian Home Care Association",style:{maxWidth:"100%"}})),o.default.createElement("div",{className:"offset-1 col-10 col-sm-4 mt-5 mt-sm-0"},o.default.createElement("img",{src:this.ASSET_PATH+"home-care-ontario.png",alt:"Home Care Ontario",style:{maxWidth:"100%"}})))),o.default.createElement(s.default,null))}}])&&f(a.prototype,n),u&&f(a,u),t}();t.default=h},62:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),i=a(7),l=(s(a(53)),s(a(3))),r=(s(a(12)),s(a(64))),c=s(a(19));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){g(e,t,a[t])})}return e}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=function(e){function t(e){var a,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=d(t).call(this,e),a=!o||"object"!==u(o)&&"function"!=typeof o?y(n):o,g(y(y(a)),"setAnalyticSubmission",function(e){e&&a.setState({analyticsSubmitted:m({},a.state.analyticsSubmitted,g({},e,!0))})}),g(y(y(a)),"animateIn",function(){var e=new i.TimelineMax({paused:!0});e.staggerFromTo(a.AnimationElements,2,{autoAlpha:0,y:50},{autoAlpha:1,y:0,ease:Expo.easeOut},.25),e.play()}),g(y(y(a)),"getTestimonial",function(e){if(!a.animating){a.animating=!0;var t=a.state.current;e>0?t=a.state.current<a.data.length-1?t+1:0:e<0&&(t=a.state.current>0?t-1:a.data.length-1);var n=e>0?-1:1;i.TweenMax.staggerTo(a.TestimonialData.children,.5,{y:-10*n,autoAlpha:0,ease:Power3.easeInOut,onComplete:function(){a.setState(m({},a.state,{current:t})),i.TweenMax.staggerFromTo(a.TestimonialData.children,.5,{y:10*n},{y:0,autoAlpha:1,ease:Power3.easeInOut},.1),a.animating=!1}},.1)}}),a.state={analyticsSubmitted:{scroll:!1,form:!1},current:0},a.AnimationElements=[],a.animating=!1,a.ASSET_PATH=l.default.ASSET_PATH+"images/testimonials/",a.data=c.default.testimonials.widget&&c.default.testimonials.widget.length>0?c.default.testimonials.widget:[],a}var a,n,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.default.Component),a=t,(n=[{key:"componentDidMount",value:function(){i.TweenMax.to(this.container,.5,{autoAlpha:1}),i.TweenMax.set(this.AnimationElements,{autoAlpha:0}),this.animateIn()}},{key:"componentWillUnmount",value:function(){i.TweenMax.set(this.container,{autoAlpha:0})}},{key:"render",value:function(){var e=this;this.AnimationElements=[];var t=this.data[this.state.current];return o.default.createElement("div",{className:"section-testimonials",ref:function(t){return e.container=t}},t&&o.default.createElement(o.Fragment,null,o.default.createElement("div",{className:"row",style:{width:"100%"}},o.default.createElement("div",{className:"col-10 offset-1 testimonials-heading"},o.default.createElement("h1",null,"What Our Clients Are Saying"))),o.default.createElement("div",{className:"row testimonial"},o.default.createElement("div",{className:"col-10 offset-1 col-md-6 offset-md-3 testimonial-data-container",ref:function(t){return e.TestimonialData=t}},o.default.createElement("h4",null,t.name),o.default.createElement("p",{className:"mini",style:{fontStyle:"italic"}},t.relationship),o.default.createElement("p",null,'"',t.review,'"')),o.default.createElement("img",{className:"chevron left",src:r.default,alt:"chevron-left",onClick:this.getTestimonial.bind(this,-1),style:{transform:"rotateY(-180deg)"}}),o.default.createElement("img",{className:"chevron right",src:r.default,alt:"chevron-right",onClick:this.getTestimonial.bind(this,1)}))))}}])&&f(a.prototype,n),s&&f(a,s),t}();t.default=h},64:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE2LjIxOCAzLjc4MkMxNC40MjQgMS45ODggMTIuMDM4IDEgOS41IDFzLTQuOTIzLjk4OC02LjcxOCAyLjc4MlMwIDcuOTYyIDAgMTAuNDk5cy45ODggNC45MjMgMi43ODIgNi43MTggNC4xOCAyLjc4MiA2LjcxOCAyLjc4MiA0LjkyMy0uOTg4IDYuNzE4LTIuNzgyUzE5IDEzLjAzNyAxOSAxMC40OTlzLS45ODgtNC45MjMtMi43ODItNi43MTd6TTkuNSAxOUM0LjgxMyAxOSAxIDE1LjE4NyAxIDEwLjVTNC44MTMgMiA5LjUgMmM0LjY4NyAwIDguNSAzLjgxMyA4LjUgOC41UzE0LjE4NyAxOSA5LjUgMTl6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTguNSAxM2EuMjUuMjUgMCAwIDEtLjE3Ny0uNDI3bDIuMzIzLTIuMzIzLTIuMzIzLTIuMzIzYS4yNS4yNSAwIDAgMSAuMzU0LS4zNTNsMi41IDIuNWEuMjUuMjUgMCAwIDEgMCAuMzUzbC0yLjUgMi41QS4yNDkuMjQ5IDAgMCAxIDguNSAxM3oiLz48L3N2Zz4="}},[[300,1,0]]]);