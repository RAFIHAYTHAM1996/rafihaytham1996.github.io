(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1OyB":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},"1TCz":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=(n("HY8x"),n("ffb8")),i=n("1OyB"),l=n("vuIU"),s=n("md7G"),c=n("foSv"),u=n("JX7q"),f=n("Ji7U"),p=n("rePB"),d=n("nOHt"),y=n.n(d),h=n("pc+1"),m=n("zfzq"),C=n("K3yP"),v=n.n(C),b=r.a.createElement,g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r))),Object(p.a)(Object(u.a)(n),"onClickHandler",(function(e){y.a.push("/home")})),n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.color,n=e.style,a=void 0===n?{}:n,r=e.disabled;return b("span",{className:"Brand".concat(t?" ".concat(t):"").concat(r?"":" clickable"),style:a,onClick:r?null:this.onClickHandler},b(v.a,null))}}]),t}(a.Component);g.defaultProps={};var O=n("3CTq"),k=n("pUzf"),w=r.a.createElement,x=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={visible:!0},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.checkVisibility()}},{key:"componentDidUpdate",value:function(){this.checkVisibility()}},{key:"checkVisibility",value:function(){var e=!0;"/"===y.a.router.pathname&&(e=!1),e!==this.state.visible&&this.setState({visible:e})}},{key:"render",value:function(){return this.state.visible&&w("div",{className:"BackgroundPattern-container d-none d-lg-flex"},w("div",{className:"BackgroundPattern container"},w("div",{className:"offset-1 col-1"}),w("div",{className:"offset-3 offset-xl-2 col-1"}),w("div",{className:"offset-5 col-1"})))}}]),t}(a.Component),E=r.a.createElement,S=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(s.a)(this,Object(c.a)(t).call(this,e)),Object(p.a)(Object(u.a)(n),"onPopState",(function(){n.state.collapsed||n.toggleMenu("close")})),Object(p.a)(Object(u.a)(n),"toggleMenu",(function(e,t){if(!n.animOn){n.tl=new h.e({paused:!0,onComplete:function(){n.state.collapsed||(document.body.style.overflow="auto"),n.animOn=!1,n.setState({collapsed:!n.state.collapsed})}});var a=n.MenuBtn?n.MenuBtn.children:[];n.animOn=!0;var r=n.state.collapsed;e&&(r="open"===e),r?(document.body.style.overflow="hidden",n.subcontainer.style.display="block",n.tl.set(n.Menu,{overflow:"hidden"}),n.tl.set(n.linkContainer,{autoAlpha:1,display:"block"}),n.tl.to(a[1],.35*.7,{strokeDashoffset:68}),n.tl.to([a[0],a[2]],.35*.7,{strokeDashoffset:0,delay:-.35}),n.tl.to(a[0],.35*.7,{y:20}),n.tl.to(a[2],.35*.7,{y:-20,delay:.7*-.35}),n.tl.to(n.Menu,.35,{height:"100vh",backgroundColor:m.default.colors.secondary,ease:h.a.easeOut,delay:-.35}),n.tl.to(a[0],.35,{rotationZ:"-45deg",transformOrigin:"center center",ease:h.a.easeOut}),n.tl.to(a[2],.35,{rotationZ:"45deg",transformOrigin:"center center",ease:h.a.easeOut,delay:-.35}),n.tl.staggerFromTo(n.linkContainer.children,.35,{autoAlpha:0,y:-20},{autoAlpha:1,y:0,ease:h.a.easeOut},.1),n.tl.to(n.BrandA,.35,{autoAlpha:1,delay:1.5*-.35}),n.tl.set(n.Menu,{overflow:"auto"})):(n.tl.set(n.Menu,{overflow:"hidden"}),n.tl.to(n.BrandA,.35,{autoAlpha:0}),n.tl.to([a[0],a[2]],.35,{rotationZ:"0deg",transformOrigin:"center center",ease:h.a.easeIn,delay:-.35}),n.tl.staggerTo(n.linkContainer.children,.35,{autoAlpha:0,y:-10,ease:h.a.easeOut,delay:-.35},.1),n.tl.to(n.Menu,.35,{height:n.menuHeight||n.MENU_HEIGHT,ease:h.a.easeOut,delay:-.35}),n.tl.to(a[0],.35,{y:-1,delay:-.35}),n.tl.to(a[2],.35,{y:1}),n.tl.to(n.Menu,.35,{backgroundColor:"transparent",ease:h.a.easeOut}),n.tl.to(a[2],.35,{strokeDashoffset:20,ease:h.c.easeInOut,delay:1.5*-.35}),n.tl.to(a[1],.35,{strokeDashoffset:35,ease:h.c.easeInOut,delay:-.175}),n.tl.to(a[0],.35,{x:70,ease:h.c.easeIn,delay:-.7}),n.tl.set(a[0],{x:-70}),n.tl.to(a[0],.35,{x:0,ease:h.c.easeOut,onComplete:function(){n.tl.set(n.linkContainer,{autoAlpha:0,display:"none"}),n.subcontainer.style.display="none"}}),document.body.style.overflow="auto"),n.tl.play(),"function"==typeof t&&t()}})),Object(p.a)(Object(u.a)(n),"goTo",(function(e,t){e.preventDefault(),n.toggleMenu("close",(function(){return y.a.push(t)}))})),Object(p.a)(Object(u.a)(n),"getLink",(function(e,t){if(e){var a=e.path,r=e.desc,o=a.replace(/\-/g," "),i="/".concat("home"===a?"":a);!m.default.isServer()&&y.a.pathname.substr(1);return E("a",{className:"menu-link",href:i,onMouseOver:n.addClass.bind(Object(u.a)(n),n.subcontainer,"hover"),onMouseOut:n.removeClass.bind(Object(u.a)(n),n.subcontainer,"hover"),onClick:function(e){return n.goTo(e,i)}},E(k.b,{animation:k.a.TOP_BOTTOM},E("span",{className:"nav-link-content","data-title":o},o)),E("p",null,r))}})),Object(p.a)(Object(u.a)(n),"addClass",(function(e,t){e&&t&&(e.className.match(t)||(e.className+=" "+t))})),Object(p.a)(Object(u.a)(n),"removeClass",(function(e,t){e&&t&&e.className.match(t)&&(e.className=e.className.replace(" "+t,""))})),n.state={collapsed:!0,visible:!0},n.MIN_SCREEN_WIDTH=575,n.links=[],n.MENU_HEIGHT=85,n.menuHeight=0,n.animOn=!1,n.pages=[{path:"services",desc:"what we do"},{path:"projects",desc:"what we make"},{path:"contact",desc:"how to reach us"}],n.tl=new h.e,n.ASSET_PATH=m.default.ASSET_PATH+"images/",n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"checkVisibility",value:function(){var e=!0;"/"===y.a.router.pathname&&(e=!1),e!==this.state.visible&&this.setState({visible:e})}},{key:"componentDidMount",value:function(){window.addEventListener("popstate",this.onPopState),this.checkVisibility()}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.collapsed,n=e.visible;e.page;n&&t&&(this.menuHeight=this.Menu.getBoundingClientRect().height),this.checkVisibility()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("popstate",this.onPopState)}},{key:"render",value:function(){var e=this,t=this.state,n=t.visible,a=t.collapsed,r="".concat(a?"collapsed":"expanded").concat(this.animOn?" animating":"");return this.links=[],n&&E("nav",{id:"Menu",className:"navbar sticky-top",ref:function(t){return e.Menu=t}},!a&&E(x,null),E("div",{style:{position:"fixed",bottom:-200,right:-150,height:"120vh",width:"120vh",opacity:0,display:"none"},ref:function(t){return e.BrandA=t}},E(O.a,{color:"fill-none",size:"match-parent"})),E("div",{className:"custom-width"},E("span",{onClick:function(){return e.toggleMenu("close")}},E(g,{ref:function(t){return e.Logo=t},disabled:!1})),E("svg",{viewBox:"0 0 70 50",id:"hamburger-menu",className:r,ref:function(t){return e.MenuBtn=t},onClick:function(){return e.toggleMenu()}},E("line",{x1:69,y1:5,x2:1,y2:5}),E("line",{x1:69,y1:25,x2:1,y2:25}),E("line",{x1:69,y1:45,x2:1,y2:45}))),E("div",{className:"container subcontainer",ref:function(t){return e.subcontainer=t}},E("div",{className:"col-12 offset-lg-1 col-lg-10",ref:function(t){return e.linkContainer=t},style:{display:"none"}},this.pages.map((function(t,n){return E("div",{className:"row",key:n},e.getLink(t,n))})))))}}]),t}(a.Component);S.defaultProps={device:"desktop"};var T=S,M=n("z/o8"),j=n("6ppI"),P=n("6TKP"),_=n("yjZJ"),N=r.a.createElement;M.b.registerPlugin(P.CSSRulePlugin,_.ScrollToPlugin,j.ExpoScaleEase,j.RoughEase,j.SlowMo);t.default=function(e){var t=e.Component,n=e.pageProps;return N(a.Fragment,null,N(o.DefaultSeo,{titleTemplate:"Artezan %s",title:" ",description:"We are a full-service creative agency specializing in branding and web development.",canonical:m.default.host.replace("www.",""),openGraph:{description:"We are a full-service creative agency specializing in branding and web development.",type:"website",locale:"en_IE",url:m.default.host,site_name:"Artezan",images:[{url:"https://www.artezan.ca/assets/images/seo/brand.png",alt:"Artezan Digital Agency"}]},twitter:{cardType:"summary_large_image"}}),N(x,null),N(T,null),N(t,n))}},"3CTq":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("1OyB"),r=n("vuIU"),o=n("md7G"),i=n("foSv"),l=n("Ji7U"),s=n("q1tI"),c=n.n(s),u=n("MvwW"),f=n.n(u),p=c.a.createElement,d=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.color,n=e.size,a=e.className;return p("span",{className:"BrandA ".concat(t," size-").concat(n," ").concat(a)},p(f.a,null))}}]),t}(s.Component);d.defaultProps={color:"primary",className:"",size:"md"}},"6TKP":function(e,t,n){!function(e){"use strict";var t,n,a,r,o=function(){return"undefined"!==typeof window},i=function(){return t||o()&&(t=window.gsap)&&t.registerPlugin&&t},l=function(){return n||(s(),r||console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),n},s=function(e){t=e||i(),o()&&(a=document),t&&(r=t.plugins.css)&&(n=1)},c={version:"3.2.4",name:"cssRule",init:function(e,t,n,o,i){if(!l()||"undefined"===typeof e.cssText)return!1;var s=e._gsProxy=e._gsProxy||a.createElement("div");this.ss=e,this.style=s.style,s.style.cssText=e.cssText,r.prototype.init.call(this,s,t,n,o,i)},render:function(e,t){for(var n,a=t._pt,r=t.style,o=t.ss;a;)a.r(e,a.d),a=a.next;for(n=r.length;--n>-1;)o[r[n]]=r[r[n]]},getRule:function(e){l();var t,n,r,o,i=a.all?"rules":"cssRules",s=a.styleSheets,c=s.length,u=":"===e.charAt(0);for(e=(u?"":",")+e.split("::").join(":").toLowerCase()+",",u&&(o=[]);c--;){try{if(!(n=s[c][i]))continue;t=n.length}catch(f){console.warn(f);continue}for(;--t>-1;)if((r=n[t]).selectorText&&-1!==(","+r.selectorText.split("::").join(":").toLowerCase()+",").indexOf(e)){if(!u)return r.style;o.push(r.style)}}return o},register:s};i()&&t.registerPlugin(c),e.CSSRulePlugin=c,e.default=c,Object.defineProperty(e,"__esModule",{value:!0})}(t)},"6ppI":function(e,t,n){!function(e){"use strict";var t,n,a=function(){return t||"undefined"!==typeof window&&(t=window.gsap)&&t.registerPlugin&&t},r=function(e,t){return!!("undefined"===typeof e?t:e&&!~(e+"").indexOf("false"))},o=function(e){if(t=e||a()){n=t.registerEase;var r,o=t.parseEase(),i=function(e){return function(t){var n=.5+t/2;e.config=function(t){return e(2*(1-t)*t*n+t*t)}}};for(r in o)o[r].config||i(o[r]);for(r in n("slow",u),n("expoScale",f),n("rough",p),d)"version"!==r&&t.core.globals(r,d[r])}},i=function(e,t,n){var a=(e=Math.min(1,e||.7))<1?t||0===t?t:.7:0,o=(1-e)/2,i=o+e,l=r(n);return function(e){var t=e+(.5-e)*a;return e<o?l?1-(e=1-e/o)*e:t-(e=1-e/o)*e*e*e*t:e>i?l?1===e?0:1-(e=(e-i)/o)*e:t+(e-t)*(e=(e-i)/o)*e*e*e:l?1:t}},l=function(e,n,a){var r=Math.log(n/e),o=n-e;return a&&(a=t.parseEase(a)),function(t){return(e*Math.exp(r*(a?a(t):t))-e)/o}},s=function(e,t,n){this.t=e,this.v=t,n&&(this.next=n,n.prev=this,this.c=n.v-t,this.gap=n.t-e)},c=function(e){"object"!==typeof e&&(e={points:+e||20});for(var n,a,o,i,l,c,u,f=e.taper||"none",p=[],d=0,y=0|(+e.points||20),h=y,m=r(e.randomize,!0),C=r(e.clamp),v=t?t.parseEase(e.template):0,b=.4*(+e.strength||1);--h>-1;)n=m?Math.random():1/y*h,a=v?v(n):n,o="none"===f?b:"out"===f?(i=1-n)*i*b:"in"===f?n*n*b:n<.5?(i=2*n)*i*.5*b:(i=2*(1-n))*i*.5*b,m?a+=Math.random()*o-.5*o:h%2?a+=.5*o:a-=.5*o,C&&(a>1?a=1:a<0&&(a=0)),p[d++]={x:n,y:a};for(p.sort((function(e,t){return e.x-t.x})),c=new s(1,1,null),h=y;h--;)l=p[h],c=new s(l.x,l.y,c);return u=new s(0,0,c.t?c:c.next),function(e){var t=u;if(e>t.t){for(;t.next&&e>=t.t;)t=t.next;t=t.prev}else for(;t.prev&&e<=t.t;)t=t.prev;return u=t,t.v+(e-t.t)/t.gap*t.c}},u=i(.7);u.ease=u,u.config=i;var f=l(1,2);f.config=l;var p=c();p.ease=p,p.config=c;var d={SlowMo:u,RoughEase:p,ExpoScaleEase:f};for(var y in d)d[y].register=o,d[y].version="3.2.4";a()&&t.registerPlugin(u),e.EasePack=d,e.ExpoScaleEase=f,e.RoughEase=p,e.SlowMo=u,e.default=d,Object.defineProperty(e,"__esModule",{value:!0})}(t)},G6VD:function(e,t,n){var a=n("q1tI");function r(e){return a.createElement("svg",e,a.createElement("defs",null,[a.createElement("filter",{id:"line-filter-1",key:0},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0",numOctaves:"1",result:"warp",key:0}),a.createElement("feOffset",{dx:"-90",result:"warpOffset",key:1}),a.createElement("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"30",in:"SourceGraphic",in2:"warpOffset",key:2})]),a.createElement("filter",{id:"line-filter-2",key:1},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0",numOctaves:"10",result:"warp",key:0}),a.createElement("feOffset",{dx:"-90",result:"warpOffset",key:1}),a.createElement("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"60",in:"SourceGraphic",in2:"warpOffset",key:2})]),a.createElement("filter",{id:"line-filter-3",key:2},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0.15 0.02",numOctaves:"3",result:"warp",key:0}),a.createElement("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"0",in:"SourceGraphic",in2:"warp",key:1})]),a.createElement("filter",{id:"line-filter-4",key:3},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0",numOctaves:"5",result:"warp",key:0}),a.createElement("feOffset",{dx:"-90",result:"warpOffset",key:1}),a.createElement("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"35",in:"SourceGraphic",in2:"warpOffset",key:2})]),a.createElement("filter",{id:"line-filter-5",key:4},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0.01 0.7",numOctaves:"5",result:"warp",key:0}),a.createElement("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"0",in:"SourceGraphic",in2:"warp",key:1})]),a.createElement("filter",{id:"line-filter-6",key:5},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0.01 0.07",numOctaves:"5",seed:"2",result:"noise",key:0}),a.createElement("feDisplacementMap",{in:"SourceGraphic",in2:"warp",scale:"0",xChannelSelector:"R",yChannelSelector:"B",key:1})]),a.createElement("filter",{id:"line-filter-7",key:6},[a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0",numOctaves:"5",result:"warp",key:0}),a.createElement("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"90",in:"SourceGraphic",in2:"warp",key:1})])]))}r.defaultProps={style:{visibility:"hidden",display:"none"}},e.exports=r,r.default=r},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app",function(){return n("1TCz")}])},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},Ji7U:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return r}))},K3yP:function(e,t,n){var a=n("q1tI");function r(e){return a.createElement("svg",e,[a.createElement("path",{d:"M16.13 22.69V14.69C16.1635 13.6256 15.9826 12.5654 15.598 11.5724C15.2134 10.5793 14.633 9.67381 13.8912 8.90969C13.1495 8.14557 12.2616 7.53846 11.2805 7.1245C10.2993 6.71053 9.24492 6.49816 8.18001 6.50003C7.10394 6.49339 6.03726 6.70044 5.04182 7.10918C4.04638 7.51791 3.14199 8.12019 2.38108 8.8811C1.62017 9.64201 1.01789 10.5464 0.609155 11.5418C0.200422 12.5373 -0.00662759 13.604 1.08933e-05 14.68C-0.00855088 15.7483 0.198541 16.8073 0.608886 17.7936C1.01923 18.7799 1.62439 19.6733 2.38813 20.4202C3.15187 21.1671 4.05849 21.7523 5.05369 22.1406C6.0489 22.5289 7.11223 22.7124 8.18001 22.68C9.94086 22.7467 11.6621 22.1467 13 21V22.68L16.13 22.69ZM8.18001 19.46C7.53746 19.476 6.8981 19.3648 6.29863 19.133C5.69916 18.9011 5.15141 18.5531 4.68681 18.1089C4.22222 17.6648 3.84994 17.1332 3.59136 16.5448C3.33278 15.9564 3.19298 15.3226 3.18001 14.68C3.19812 13.3596 3.73072 12.0983 4.6645 11.1645C5.59829 10.2307 6.85956 9.69814 8.18001 9.68003C8.82262 9.69301 9.45634 9.8328 10.0448 10.0914C10.6332 10.35 11.1648 10.7222 11.6089 11.1868C12.0531 11.6514 12.4011 12.1992 12.6329 12.7987C12.8648 13.3981 12.9759 14.0375 12.96 14.68C12.9722 15.3111 12.857 15.9382 12.6211 16.5236C12.3852 17.1091 12.0335 17.6409 11.5872 18.0872C11.1409 18.5336 10.6091 18.8852 10.0236 19.1211C9.43815 19.357 8.81109 19.4723 8.18001 19.46Z",key:0}),a.createElement("path",{d:"M21.37 22.69V14.58C21.37 13.2778 21.8873 12.0289 22.8081 11.1081C23.729 10.1873 24.9778 9.66997 26.28 9.66997H27.57V6.46997H26.28C24.13 6.47262 22.0687 7.32791 20.5483 8.84826C19.028 10.3686 18.1727 12.4299 18.17 14.58V22.69H21.37Z",key:1}),a.createElement("path",{d:"M39.59 9.67H35.86V22.67H32.66V9.67H29.27V6.48H32.66V0H35.86V6.47H39.59V9.67Z",key:2}),a.createElement("path",{d:"M54.49 19.46H47.92C46.8949 19.4573 45.8962 19.1351 45.0628 18.5382C44.2293 17.9414 43.6027 17.0996 43.27 16.13H54.42C54.8382 16.1274 55.2386 15.9601 55.5343 15.6643C55.8301 15.3686 55.9974 14.9682 56 14.55C56.0162 13.4792 55.8172 12.416 55.4149 11.4236C55.0125 10.4311 54.415 9.52948 53.6578 8.77222C52.9005 8.01496 51.9989 7.41745 51.0064 7.01512C50.014 6.61278 48.9508 6.4138 47.88 6.42999C45.7238 6.42999 43.6559 7.28654 42.1312 8.81121C40.6066 10.3359 39.75 12.4038 39.75 14.56C39.75 16.7162 40.6066 18.7841 42.1312 20.3088C43.6559 21.8334 45.7238 22.69 47.88 22.69H54.45L54.49 19.46ZM43.27 12.93C43.609 11.9668 44.2381 11.1323 45.0708 10.5414C45.9035 9.95042 46.8989 9.63202 47.92 9.62999C48.9549 9.59219 49.9737 9.89435 50.8207 10.4903C51.6676 11.0862 52.2961 11.9431 52.61 12.93H43.27Z",key:3}),a.createElement("path",{d:"M70.15 22.66H58.53C58.2268 22.6617 57.9292 22.5782 57.6711 22.4191C57.413 22.26 57.2047 22.0317 57.07 21.76C56.9196 21.4832 56.8554 21.1677 56.8857 20.854C56.916 20.5404 57.0394 20.243 57.24 20L65.32 9.63004H56.89V6.43004H68.52C68.8289 6.41921 69.1341 6.49978 69.3973 6.66166C69.6606 6.82354 69.8703 7.05953 70 7.34004C70.1339 7.60505 70.1873 7.90349 70.1535 8.19849C70.1198 8.49349 70.0003 8.77215 69.81 9.00004L61.73 19.46H70.15V22.66Z",key:4}),a.createElement("path",{d:"M87.53 22.69V14.69C87.5623 13.6222 87.3788 12.5589 86.9905 11.5637C86.6022 10.5685 86.0171 9.66188 85.2702 8.89814C84.5232 8.1344 83.6299 7.52924 82.6435 7.1189C81.6572 6.70855 80.5982 6.50146 79.53 6.51002C78.4539 6.50338 77.3872 6.71043 76.3918 7.11916C75.3964 7.5279 74.492 8.13018 73.7311 8.89109C72.9701 9.652 72.3679 10.5564 71.9591 11.5518C71.5504 12.5473 71.3433 13.614 71.35 14.69C71.3414 15.7583 71.5485 16.8172 71.9589 17.8036C72.3692 18.7899 72.9744 19.6833 73.7381 20.4302C74.5018 21.1771 75.4085 21.7623 76.4037 22.1506C77.3989 22.5389 78.4622 22.7223 79.53 22.69C81.2956 22.7564 83.021 22.1527 84.36 21V22.68L87.53 22.69ZM79.53 19.46C78.8878 19.4746 78.249 19.3626 77.6501 19.1302C77.0512 18.8979 76.504 18.5498 76.0397 18.1059C75.5753 17.662 75.203 17.131 74.944 16.5432C74.685 15.9553 74.5443 15.3222 74.53 14.68C74.5506 13.3604 75.084 12.1005 76.0173 11.1673C76.9505 10.234 78.2103 9.70064 79.53 9.68002C80.1726 9.69299 80.8063 9.83279 81.3948 10.0914C81.9832 10.3499 82.5147 10.7222 82.9589 11.1868C83.403 11.6514 83.7511 12.1992 83.9829 12.7986C84.2148 13.3981 84.3259 14.0375 84.31 14.68C84.322 15.3068 84.2083 15.9297 83.9755 16.5118C83.7427 17.0939 83.3955 17.6234 82.9546 18.069C82.5136 18.5147 81.9878 18.8674 81.4082 19.1063C80.8285 19.3452 80.2069 19.4655 79.58 19.46H79.53Z",key:5}),a.createElement("path",{d:"M93 6.43005V8.09005C94.2029 7.18089 95.6355 6.62508 97.1368 6.48503C98.6381 6.34499 100.149 6.62626 101.499 7.29726C102.849 7.96826 103.986 9.00241 104.781 10.2836C105.576 11.5648 105.998 13.0422 106 14.5501V22.6901H102.8V14.5501C102.83 13.886 102.725 13.2227 102.492 12.6003C102.258 11.9778 101.901 11.4092 101.442 10.9286C100.982 10.4481 100.43 10.0656 99.8189 9.80432C99.2077 9.54302 98.5498 9.4083 97.885 9.4083C97.2203 9.4083 96.5624 9.54302 95.9511 9.80432C95.3398 10.0656 94.7879 10.4481 94.3285 10.9286C93.8692 11.4092 93.512 11.9778 93.2785 12.6003C93.045 13.2227 92.9401 13.886 92.97 14.5501V22.6901H89.77V6.43005H93Z",key:6})])}r.defaultProps={id:"brand-logo",width:"100%",height:"100%",viewBox:"0 0 106 23",fill:"none"},e.exports=r,r.default=r},MvwW:function(e,t,n){var a=n("q1tI");function r(e){return a.createElement("svg",e,a.createElement("g",{transform:"translate(3 -4)"},a.createElement("path",{d:"M16.13 22.69V14.69C16.1635 13.6256 15.9826 12.5654 15.598 11.5724C15.2134 10.5793 14.633 9.67381 13.8912 8.90969C13.1495 8.14557 12.2616 7.53846 11.2805 7.1245C10.2993 6.71053 9.24492 6.49816 8.18001 6.50003C7.10394 6.49339 6.03726 6.70044 5.04182 7.10918C4.04638 7.51791 3.14199 8.12019 2.38108 8.8811C1.62017 9.64201 1.01789 10.5464 0.609155 11.5418C0.200422 12.5373 -0.00662759 13.604 1.08933e-05 14.68C-0.00855088 15.7483 0.198541 16.8073 0.608886 17.7936C1.01923 18.7799 1.62439 19.6733 2.38813 20.4202C3.15187 21.1671 4.05849 21.7523 5.05369 22.1406C6.0489 22.5289 7.11223 22.7124 8.18001 22.68C9.94086 22.7467 11.6621 22.1467 13 21V22.68L16.13 22.69ZM8.18001 19.46C7.53746 19.476 6.8981 19.3648 6.29863 19.133C5.69916 18.9011 5.15141 18.5531 4.68681 18.1089C4.22222 17.6648 3.84994 17.1332 3.59136 16.5448C3.33278 15.9564 3.19298 15.3226 3.18001 14.68C3.19812 13.3596 3.73072 12.0983 4.6645 11.1645C5.59829 10.2307 6.85956 9.69814 8.18001 9.68003C8.82262 9.69301 9.45634 9.8328 10.0448 10.0914C10.6332 10.35 11.1648 10.7222 11.6089 11.1868C12.0531 11.6514 12.4011 12.1992 12.6329 12.7987C12.8648 13.3981 12.9759 14.0375 12.96 14.68C12.9722 15.3111 12.857 15.9382 12.6211 16.5236C12.3852 17.1091 12.0335 17.6409 11.5872 18.0872C11.1409 18.5336 10.6091 18.8852 10.0236 19.1211C9.43815 19.357 8.81109 19.4723 8.18001 19.46Z"})))}r.defaultProps={width:"100%",height:"100%",viewBox:"0 0 23 23",fill:"none"},e.exports=r,r.default=r},foSv:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},md7G:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}n.d(t,"a",(function(){return i}));var o=n("JX7q");function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},pUzf:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return C}));var a=n("1OyB"),r=n("vuIU"),o=n("md7G"),i=n("foSv"),l=n("JX7q"),s=n("Ji7U"),c=n("rePB"),u=n("q1tI"),f=n.n(u),p=n("pc+1"),d=n("G6VD"),y=n.n(d),h=f.a.createElement,m={TOP_BOTTOM:"TOP_BOTTOM",LEFT:"LEFT",BOTTOM:"BOTTOM"},C=function(e){function t(e){var n;return Object(a.a)(this,t),n=Object(o.a)(this,Object(i.a)(t).call(this,e)),Object(c.a)(Object(l.a)(n),"createTimeline",(function(){var e=new p.e({paused:!0,onStart:function(){n.LineDeco.style.filter="url(".concat("#line-filter-1",")")},onComplete:function(){n.LineDeco.style.filter="none"}}),t=document.querySelector("".concat("#line-filter-1"," > feTurbulence")),a={turbulence:0};return e.eventCallback("onUpdate",(function(){return t.setAttribute("baseFrequency",a.turbulence)})),e.to(a,{duration:.4,startAt:{turbulence:.09},turbulence:0}),e})),n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.tl=this.createTimeline(),this.LineFX.addEventListener("mouseenter",(function(){return e.tl.restart()})),this.LineFX.addEventListener("mouseleave",(function(){e.tl.progress(1),e.tl.kill()}))}},{key:"componentWillUnmount",value:function(){var e=this;this.LineFX.removeEventListener("mouseenter",(function(){return e.tl.restart()})),this.LineFX.removeEventListener("mouseleave",(function(){e.tl.progress(1),e.tl.kill()}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.alwaysOn,a=t.animation,r=t.children;return h(u.Fragment,null,h(y.a,null),h("span",{className:"LineFX ".concat(a," ").concat(n?"alwaysOn":""),ref:function(t){return e.LineFX=t}},h("span",{className:"LineFX--content"},r),h("span",{ref:function(t){return e.LineDeco=t},className:"LineFX--line-deco ".concat(a)})))}}]),t}(u.Component);C.defaultProps={alwaysOn:!1}},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},vuIU:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},yjZJ:function(e,t,n){!function(e){"use strict";var t,n,a,r,o,i,l,s=function(){return"undefined"!==typeof window},c=function(){return t||s()&&(t=window.gsap)&&t.registerPlugin&&t},u=function(e){return"string"===typeof e},f=function(e,t){var n="x"===t?"Width":"Height",i="scroll"+n,l="client"+n;return e===a||e===r||e===o?Math.max(r[i],o[i])-(a["inner"+n]||r[l]||o[l]):e[i]-e["offset"+n]},p=function(e,t){var n="scroll"+("x"===t?"Left":"Top");return e===a&&(null!=e.pageXOffset?n="page"+t.toUpperCase()+"Offset":e=null!=r[n]?r:o),function(){return e[n]}},d=function(e,t){var n=i(e)[0].getBoundingClientRect(),l=!t||t===a||t===o,s=l?{top:r.clientTop-(a.pageYOffset||r.scrollTop||o.scrollTop||0),left:r.clientLeft-(a.pageXOffset||r.scrollLeft||o.scrollLeft||0)}:t.getBoundingClientRect(),c={x:n.left-s.left,y:n.top-s.top};return!l&&t&&(c.x+=p(t,"x")(),c.y+=p(t,"y")()),c},y=function(e,t,n,a){return isNaN(e)||"object"===typeof e?u(e)&&"="===e.charAt(1)?parseFloat(e.substr(2))*("-"===e.charAt(0)?-1:1)+a:"max"===e?f(t,n):Math.min(f(t,n),d(e,t)[n]):parseFloat(e)},h=function(){t=c(),s()&&t&&document.body&&(a=window,o=document.body,r=document.documentElement,i=t.utils.toArray,t.config({autoKillThreshold:7}),l=t.config(),n=1)},m={version:"3.2.4",name:"scrollTo",rawVars:1,register:function(e){t=e,h()},init:function(e,t,r,o,i){n||h(),this.isWin=e===a,this.target=e,this.tween=r,"object"!==typeof t?u((t={y:t}).y)&&"max"!==t.y&&"="!==t.y.charAt(1)&&(t.x=t.y):t.nodeType&&(t={y:t,x:t}),this.vars=t,this.autoKill=!!t.autoKill,this.getX=p(e,"x"),this.getY=p(e,"y"),this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=t.x?(this.add(this,"x",this.x,y(t.x,e,"x",this.x)-(t.offsetX||0),o,i,Math.round),this._props.push("scrollTo_x")):this.skipX=1,null!=t.y?(this.add(this,"y",this.y,y(t.y,e,"y",this.y)-(t.offsetY||0),o,i,Math.round),this._props.push("scrollTo_y")):this.skipY=1},render:function(e,t){for(var n,r,o,i,s,c=t._pt,u=t.target,p=t.tween,d=t.autoKill,y=t.xPrev,h=t.yPrev,m=t.isWin;c;)c.r(e,c.d),c=c.next;n=m||!t.skipX?t.getX():y,o=(r=m||!t.skipY?t.getY():h)-h,i=n-y,s=l.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),d&&(!t.skipX&&(i>s||i<-s)&&n<f(u,"x")&&(t.skipX=1),!t.skipY&&(o>s||o<-s)&&r<f(u,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(p.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(p,t.vars.onAutoKillParams||[]))),m?a.scrollTo(t.skipX?n:t.x,t.skipY?r:t.y):(t.skipY||(u.scrollTop=t.y),t.skipX||(u.scrollLeft=t.x)),t.xPrev=t.x,t.yPrev=t.y},kill:function(e){var t="scrollTo"===e;(t||"scrollTo_x"===e)&&(this.skipX=1),(t||"scrollTo_y"===e)&&(this.skipY=1)}};m.max=f,m.getOffset=d,m.buildGetter=p,c()&&t.registerPlugin(m),e.ScrollToPlugin=m,e.default=m,Object.defineProperty(e,"__esModule",{value:!0})}(t)},zfzq:function(e,t,n){"use strict";n.r(t);var a={isLocal:!1,isDev:!1,isStaging:!1,isProduction:!0,ASSET_PATH:"assets/",GACode:"UA-120823644-4",isServer:function(){return!window.document},colors:{primary:"#536EC4",primaryLight:"#FFFFFF",secondary:"#1C1C1C",textPrimary:"#858585",textDark:"#2F2F2F",textLight:"#FFFFFF"},googleReCaptchaKey:"6LfjNKcUAAAAAFasdasasd6fSaFy8tnlMX7qsflRmy4tUkph",host:"https://www.artezan.ca/",shade:function(e,t){var n=parseInt(e.slice(1),16),a=t<0?0:255,r=t<0?-1*t:t,o=n>>16,i=n>>8&255,l=255&n;return"#"+(16777216+65536*(Math.round((a-o)*r)+o)+256*(Math.round((a-i)*r)+i)+(Math.round((a-l)*r)+l)).toString(16).slice(1)}};t.default=a}},[[0,0,1,10,2,5,6,7,24]]]);
