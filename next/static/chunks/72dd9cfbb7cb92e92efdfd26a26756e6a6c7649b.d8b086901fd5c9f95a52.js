(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9cA8":function(e){e.exports=JSON.parse('{"services":[{"name":"content strategy","description":["We want to understand who you are, then build a solution that revolves around who you want to be. We offer content strategy and copywriting services for businesses looking for that extra edge.","Our projects take a content-first approach because we believe that information holds the highest importance. Content should always drive design, and not vice-versa."]},{"name":"brand identity","description":["It\u2019s a lot more than just a pretty logo. We believe in the importance of first impressions, because better brands mean better business.","We create fresh, full brand packages for a more cohesive identity. Even if your brand just needs an update, we promise every addition we make will strengthen your brand\u2019s story."]},{"name":"ux & ui design","description":["We ensure your clients, customers, and users are satisfied by delivering ideal experiences, catered to their specific needs and goals.","From information architecture and custom iconography, right down to the smallest micro-interactions, every aspect will be considered. We love finding common ground for beauty and logic."]},{"name":"development","description":["Using the latest technologies, we implement sophisticated systems that empower our clients. From automating processes to collecting analytical data, we do the heavy lifting so you can focus on what really matters.","With an emphasis on functionality and usability, and ensuring privacy and security are always a top priority, our products and applications are made to deliver."]},{"name":"marketing strategy","description":["We help brands get noticed. We\u2019ll work with you to develop a marketing strategy that will bring your brand to life.","From social media strategy to SEO optimization, and through the creation of both print and digital marketing content, we\u2019ll make sure everything you put out into the market is on-brand and drives success for your business."]}],"projects":[{"name":"Hospall Private Homecare","services":["content strategy","ux & ui design","web development","marketing strategy"],"thumbnail":"hospall/thumbnail.png","url":"hospall-private-homecare","case":[{"element":"h4","content":"Hospall needed assistance with a renewed brand strategy and online digital presence."},{"element":"p","content":"Hospall\u2019s website conversions were down, particularly on mobile devices. Navigational challenges, poor site functionality, complex UX and UI, and overall lack of responsive design were all contributing factors."},{"element":"p","content":"The client needed a website with:"},{"element":"ul","content":["Improved functionality and usability, including a fully responsive design","Simplified navigation to guide users to key sections of the website","SEO optimization","Social media integration"]},{"element":"img","content":{"src":"LINK TO IMAGE","alt":"ALT TEXT"}},{"element":"h4","content":"The current look of the website does not serve as a trust-creating asset for Hospall and does not establish a strong first impression."},{"element":"p","content":"The original website was created almost a decade ago. Since then only the content has changed, and it is managed with very limited resources. The design patterns are outdated."},{"element":"p","content":"The main goal of the redesign was to create a more positive user experience that reflects the users\u2019 needs better; an interface, which not only easy-to-use, but provides satisfactory usage and meaningful information about Hospall\u2019s service offerings."},{"element":"img","content":{"src":"LINK TO IMAGE","alt":"ALT TEXT"}},{"element":"p","content":"When Hospall noted that they were experiencing decreased website conversions, our evaluation of the company\u2019s website revealed issues with site navigation and functionality across all devices. To solve the problem, our team designed, developed, and implemented a brand new multi-page responsive website."},{"element":"p","content":"With optimal UI and UX across all devices, Hospall\u2019s new site focused on highlighting the functionalities potential clients would consider to be most important, accompanied by simplified navigation and IA, and refinement of Hospall\u2019s branding to meet business goals."},{"element":"h4","content":"SEO optimization and a new marketing stretegy helped drive a higher volume of traffic to the site."},{"element":"p","content":"As a result of these changes, Hospall saw an increase in organic traffic, an increase in mobile and tablet traffic, and higher satisfaction from new clients contacting Hospall with interest in their services."}]},{"name":"Metals & Alloys Centre","services":["branding","ux & ui design","web development"],"thumbnail":"mac/thumbnail.png","url":"metals-alloys-centre"},{"name":"King City Physiotherapy","services":["content strategy","ux & ui design","web development"],"thumbnail":"king-city-physiotherapy/thumbnail.png","url":"king-city-physiotherapy"}]}')},KQm4:function(e,t,n){"use strict";function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return i}))},MZFn:function(e,t,n){e.exports=function(){var e=function(){function t(e){return o.appendChild(e.dom),e}function n(e){for(var t=0;t<o.children.length;t++)o.children[t].style.display=t===e?"block":"none";i=e}var i=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",(function(e){e.preventDefault(),n(++i%o.children.length)}),!1);var r=(performance||Date).now(),a=r,s=0,l=t(new e.Panel("FPS","#0ff","#002")),c=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=t(new e.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:o,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){s++;var e=(performance||Date).now();if(c.update(e-r,200),e>a+1e3&&(l.update(1e3*s/(e-a),100),a=e,s=0,d)){var t=performance.memory;d.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){r=this.end()},domElement:o,setMode:n}};return e.Panel=function(e,t,n){var i=1/0,o=0,r=Math.round,a=r(window.devicePixelRatio||1),s=80*a,l=48*a,c=3*a,d=2*a,u=3*a,h=15*a,p=74*a,f=30*a,m=document.createElement("canvas");m.width=s,m.height=l,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*a+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,s,l),g.fillStyle=t,g.fillText(e,c,d),g.fillRect(u,h,p,f),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(u,h,p,f),{dom:m,update:function(l,y){i=Math.min(i,l),o=Math.max(o,l),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,s,h),g.fillStyle=t,g.fillText(r(l)+" "+e+" ("+r(i)+"-"+r(o)+")",c,d),g.drawImage(m,u+a,h,p-a,f,u,h,p-a,f),g.fillRect(u+p-a,h,a,f),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(u+p-a,h,a,r((1-l/y)*f))}}},e}()},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},lZCG:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return y}));var i=n("KQm4"),o=n("1OyB"),r=n("vuIU"),a=n("md7G"),s=n("foSv"),l=n("JX7q"),c=n("Ji7U"),d=n("rePB"),u=n("q1tI"),h=n.n(u),p=n("pc+1"),f=n("LvDl"),m=h.a.createElement,g={SLIDE_UP:"SLIDE_UP",SLIDE_UP_STAGGERED:"SLIDE_UP_STAGGERED",SLIDE_RIGHT:"SLIDE_RIGHT",SLIDE_RIGHT_STAGGERED:"SLIDE_RIGHT_STAGGERED"},y=function(e){function t(e){var n;switch(Object(o.a)(this,t),n=Object(a.a)(this,Object(s.a)(t).call(this,e)),Object(d.a)(Object(l.a)(n),"breakDownChildElements",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],o=n.props.delimiter,r=function(e,t){"string"===typeof e?t.push.apply(t,Object(i.a)(e.split(o))):t.push(e)};return e instanceof Array?e.forEach((function(e){return r(e,t)})):r(e,t),t})),n.state={contents:n.breakDownChildElements(e.children)},n.tl,n.style={},e.animation){case g.SLIDE_UP:case g.SLIDE_UP_STAGGERED:n.style={transform:"translateY(120%)"};break;case g.SLIDE_RIGHT:case g.SLIDE_RIGHT_STAGGERED:n.style={transform:"translateX(-120%)"}}return n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.animation,n=e.delay,i=e.play;switch(t&&(this.tl=new p.e({paused:!0,delay:"number"===typeof n?n:1})),t){case g.SLIDE_UP:this.tl.to(this.animated_content,.8,{y:0,ease:p.c.easeOut});break;case g.SLIDE_UP_STAGGERED:this.tl.staggerTo(this.animated_content,.8,{y:0,ease:p.c.easeOut},.05);break;case g.SLIDE_RIGHT:this.tl.to(this.animated_content,1,{x:0,ease:p.c.easeOut});break;case g.SLIDE_RIGHT_STAGGERED:this.tl.staggerTo(this.animated_content,1,{x:0,ease:p.c.easeOut},.05)}this.tl&&!1!==i&&this.tl.play()}},{key:"componentDidUpdate",value:function(e,t){!1===e.play&&!0===this.props.play&&this.tl.play();var n,i,o=this.breakDownChildElements(this.props.children);n=this.state.contents,i=o,Object(f.isEmpty)(Object(f.xorWith)(n,i,f.isEqual))||this.setState({contents:o})}},{key:"render",value:function(){var e=this,t=this.state.contents;return this.animated_content=[],m(u.Fragment,{ref:this.props.ref},t.map((function(n,i){return m("span",{className:"anim-text-mask",key:i},m("span",{className:"anim-text-content",style:e.style,ref:function(t){return e.animated_content[i]=t}},n),""!==n&&i!==t.length-1&&m("span",null,"\xa0"))})))}}]),t}(u.Component);y.defaultProps={delimiter:" "}},mhX8:function(e,t,n){var i=n("MZFn");e.exports=function(){var e=new i;e.domElement.style.cssText="position:fixed;right:0;bottom:100px;z-index:10000",document.body.appendChild(e.domElement);requestAnimationFrame((function t(){e.update(),requestAnimationFrame(t)}))}},ob4f:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var i=n("q1tI"),o=!0,r="Invariant failed";var a=function(e,t){if(!e){if(o)throw new Error(r);throw new Error(r+": "+(t||""))}};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=new Map,u=new Map,h=new Map,p=0;function f(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var i=n,o=i.root,r=i.rootMargin,s=i.threshold;if(d.has(e)&&a(!1),e){var l=function(e){return e?h.has(e)?h.get(e):(p+=1,h.set(e,p.toString()),h.get(e)+"_"):""}(o)+(r?s.toString()+"_"+r:s.toString()),c=u.get(l);c||(c=new IntersectionObserver(g,n),l&&u.set(l,c));var f={callback:t,element:e,inView:!1,observerId:l,observer:c,thresholds:c.thresholds||(Array.isArray(s)?s:[s])};return d.set(e,f),c.observe(e),f}}function m(e){if(e){var t=d.get(e);if(t){var n=t.observerId,i=t.observer,o=i.root;i.unobserve(e);var r=!1,a=!1;n&&d.forEach((function(t,i){i!==e&&(t.observerId===n&&(r=!0,a=!0),t.observer.root===o&&(a=!0))})),!a&&o&&h.delete(o),i&&!r&&i.disconnect(),d.delete(e)}}}function g(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,i=e.target,o=d.get(i);if(o&&n>=0){var r=o.thresholds.some((function(e){return o.inView?n>e:n>=e}));void 0!==t&&(r=r&&t),o.inView=r,o.callback(r,e)}}))}var y=function(e){var t,n;function o(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return s(c(t=e.call.apply(e,[this].concat(i))||this),"state",{inView:!1,entry:void 0}),s(c(t),"node",null),s(c(t),"handleNode",(function(e){t.node&&(m(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),s(c(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.componentDidMount=function(){this.node||a(!1)},r.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(m(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(m(this.node),this.node=null)},r.componentWillUnmount=function(){this.node&&(m(this.node),this.node=null)},r.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,i=e.rootMargin;f(this.node,this.handleChange,{threshold:t,root:n,rootMargin:i})}},r.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!==typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var o=this.props,r=o.children,a=o.as,s=o.tag,c=(o.triggerOnce,o.threshold,o.root,o.rootMargin,o.onChange,function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(i.createElement)(a||s||"div",l({ref:this.handleNode},c),r)},o}(i.Component);s(y,"displayName","InView"),s(y,"defaultProps",{threshold:0,triggerOnce:!1})},wOhW:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n("KQm4"),o=n("1OyB"),r=n("vuIU"),a=n("md7G"),s=n("foSv"),l=n("Ji7U"),c=n("q1tI"),d=n.n(c),u=(n("mhX8"),n("V+eO")),h=n.n(u),p=(n("zfzq"),n("D+K7")),f=d.a.createElement,m=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){h.a.init(),document.body.className=Object(i.a)(new Set([].concat(Object(i.a)(document.body.className.split(" ")),Object(i.a)(h.a.classes())))).join(" "),this.analytics=p.a.setup(),this.analytics.pageview(window.location.pathname)}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,i=t.children;t.menu,t.showMenu;return f("div",{id:n||"",className:"Page",ref:function(t){return e.transitionContainer=t},style:{width:"100%"}},i)}}]),t}(c.Component);m.defaultProps={id:"",children:[],className:"",menu:{}}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}e.exports=n}}]);
