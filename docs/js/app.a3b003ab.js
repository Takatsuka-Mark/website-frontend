(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],u=0,f=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/website-frontend/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0ee0":function(e,t,a){},1:function(e,t){},"1fe8":function(e,t,a){e.exports=a.p+"img/error.fa59c422.png"},2:function(e,t){},"29ed":function(e,t,a){},"2dd9":function(e,t,a){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("5f5b"),i=a("0284"),s=a.n(i),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},l=[],c={name:"App",created:function(){var e=this.$router.history.current.path;"/"!==e&&"/app"!==e||this.$router.push("/app/resume")}},d=c,u=(a("c1a4"),a("2877")),f=Object(u["a"])(d,o,l,!1,null,null,null),p=f.exports,m=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{root:!0,sidebarClose:e.sidebarClose}},[a("Header"),a("NavBar"),a("div",{ref:"content",staticClass:"content animated fadeInUp"},[a("transition",{attrs:{name:"router-animation"}},[a("router-view")],1)],1)],1)},b=[],v=a("5530"),g=a("2f62"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-collapse",{staticClass:"sidebar-collapse",attrs:{id:"sidebar-collapse",visible:e.sidebarOpened}},[a("nav",{class:{sidebar:!0}},[a("header",{staticClass:"logo"},[a("router-link",{attrs:{to:"/app/about_me"}},[e._v("Mark "),a("span",{staticClass:"fw-semi-bold"},[e._v("Takatsuka")])])],1),a("ul",{staticClass:"nav"},[a("h5",{staticClass:"navTitle"},[e._v("ABOUT ME")]),a("nav-link",{attrs:{header:"Resume",link:"/app/resume","icon-name":"flaticon-user-3",index:"about_me","is-header":""}}),a("nav-link",{attrs:{header:"Overview",link:"/app/construction","icon-name":"flaticon-warning",index:"about_me","is-header":""}}),a("nav-link",{attrs:{header:"Employment",link:"/app/construction","icon-name":"flaticon-warning",index:"about_me","is-header":""}}),a("nav-link",{attrs:{header:"Education",link:"/app/construction","icon-name":"flaticon-warning",index:"about_me","is-header":""}}),a("nav-link",{attrs:{header:"Projects",link:"/app/construction","icon-name":"flaticon-warning",index:"about_me","is-header":""}}),a("nav-link",{attrs:{header:"Awards",link:"/app/construction","icon-name":"flaticon-warning",index:"about_me","is-header":""}}),a("nav-link",{attrs:{header:"Extra-Curriculars",link:"/app/construction","icon-name":"flaticon-warning",index:"about_me","is-header":""}}),a("h5",{staticClass:"navTitle"},[e._v("PROJECTS")]),a("nav-link",{attrs:{header:"Interpreter",link:"/app/construction","icon-name":"flaticon-warning",index:"about_me","is-header":""}}),a("nav-link",{attrs:{header:"Cluster Computing",link:"/app/construction","icon-name":"flaticon-warning",index:"about_me","is-header":""}}),a("nav-link",{attrs:{header:"HikeLine",link:"/app/construction","icon-name":"flaticon-warning",index:"about_me","is-header":""}}),a("nav-link",{attrs:{header:"Swarming",link:"/app/construction","icon-name":"flaticon-warning",index:"about_me","is-header":""}})],1)])])},C=[],w=(a("a15b"),a("ac1f"),a("1276"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isHeader?a("li",{class:{headerLink:!0,className:e.className}},[a("router-link",{staticClass:"sidebar-link",attrs:{to:e.link}},[a("span",{staticClass:"icon"},[a("i",{class:e.fullIconName})]),e._v(" "+e._s(e.header)+" ")])],1):e._e()}),y=[],k=(a("caad"),a("2532"),{name:"NavLink",props:{header:{type:String,default:""},link:{type:String,default:""},iconName:{type:String,default:""},index:{type:String,default:""},className:{type:String,default:""},activeItem:{type:String,default:""},isHeader:{type:Boolean,default:!1}},data:function(){return{headerLinkWasClicked:!0}},methods:Object(v["a"])(Object(v["a"])({},Object(g["b"])("layout",["changeSidebarActive"])),{},{togglePanelCollapse:function(e){this.changeSidebarActive(e),this.headerLinkWasClicked=!this.headerLinkWasClicked||!this.activeItem.includes(this.index)}}),computed:{fullIconName:function(){return"fi ".concat(this.iconName)},isActive:function(){return this.activeItem&&this.activeItem.includes(this.index)&&this.headerLinkWasClicked}}}),S=k,x=(a("7097"),Object(u["a"])(S,w,y,!1,null,"244494a8",null)),O=x.exports,I={name:"NavBar",components:{NavLink:O},methods:Object(v["a"])(Object(v["a"])({},Object(g["b"])("layout",["changeSidebarActive","switchSidebar"])),{},{setActiveByRoute:function(){var e=this.$route.fullPath.split("/");e.pop(),this.changeSidebarActive(e.join("/"))}}),created:function(){this.setActiveByRoute()},computed:Object(v["a"])({},Object(g["c"])("layout",{sidebarOpened:function(e){return!e.sidebarClose},activeItem:function(e){return e.sidebarActiveElement}}))},j=I,$=(a("91d8"),Object(u["a"])(j,_,C,!1,null,"03bdf17b",null)),E=$.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{staticClass:"app-header d-print-none",attrs:{toggleable:"md"}},[a("b-navbar-nav",{staticClass:"navbar-nav-mobile ml-auto"},[a("b-nav-item",{staticClass:"d-md-none",on:{click:e.switchSidebarMethod}},[a("i",{staticClass:"la la-navicon px-2"})])],1)],1)},A=[],P={name:"Header",data:function(){return{showNavbarAlert:!0}},computed:Object(v["a"])({},Object(g["c"])("layout",{sidebarClose:function(e){return e.sidebarClose},sidebarStatic:function(e){return e.sidebarStatic}})),methods:Object(v["a"])(Object(v["a"])({},Object(g["b"])("layout",["toggleSidebar","switchSidebar","changeSidebarActive"])),{},{switchSidebarMethod:function(){if(this.sidebarClose){this.switchSidebar(!1);var e=this.$route.fullPath.split("/");e.pop(),this.changeSidebarActive(e.join("/"))}else this.switchSidebar(!0),this.changeSidebarActive(null)}})},B=P,T=(a("6dd0"),Object(u["a"])(B,L,A,!1,null,null,null)),N=T.exports,M=(a("e87c"),{name:"Layout",components:{NavBar:E,Header:N},methods:Object(v["a"])({},Object(g["b"])("layout",["switchSidebar","changeSidebarActive"])),computed:Object(v["a"])({},Object(g["c"])("layout",{sidebarClose:function(e){return e.sidebarClose}})),created:function(){},mounted:function(){var e=this;this.$refs.content.addEventListener("animationend",(function(){e.$refs.content.classList.remove("animated"),e.$refs.content.classList.remove("fadeInUp")}))}}),H=M,W=(a("6adb"),Object(u["a"])(H,h,b,!1,null,null,null)),R=W.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"error-page"},[a("b-container",[a("div",{staticClass:"errorContainer mx-auto"},[a("h1",{staticClass:"errorCode"},[e._v("404")]),a("p",{staticClass:"errorInfo"},[e._v(" Oops, something went wrong! ")])])])],1)},z=[],U={name:"ErrorPage"},J=U,F=(a("7382"),Object(u["a"])(J,D,z,!1,null,"a82d8d8a",null)),Q=F.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-breadcrumb",[a("b-breadcrumb-item",[e._v("About Me")]),a("b-breadcrumb-item",{attrs:{active:""}},[e._v("Resume")])],1),e._m(0),a("b-row",[a("b-col",[a("Widget",[a("pdf",{staticStyle:{display:"inline-block",width:"100%"},attrs:{src:e.image},on:{click:function(t){return e.print()}}})],1)],1)],1)],1)},G=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"page-title"},[e._v(" Resume - "),a("span",{staticClass:"fw-semi-bold"},[e._v("A Quick Overview")])])}],K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{ref:"widget",class:{widget:!0,className:e.className,collapsed:"collapse"===e.state,fullscreened:"fullscreen"===e.state,loading:e.fetchingData}},[e.title&&"string"===typeof e.title&&!e.customHeader?a("h5",{staticClass:"title"},[e._v(e._s(e.title))]):e._e(),e.title&&e.customHeader?a("header",{staticClass:"title",domProps:{innerHTML:e._s(e.title)}}):e._e(),!e.customControls&&e.mainControls?a("div",{staticClass:"widgetControls widget-controls"},[e.settings?a("a",{attrs:{href:"#"}},[a("i",{staticClass:"la la-cog"})]):e._e(),e.settingsInverse?a("a",{staticClass:"bg-default mx-2",attrs:{href:"#"}},[a("i",{staticClass:"la la-cog text-white"})]):e._e(),e.refresh?a("a",{attrs:{href:"#",id:"reloadId-"+e.randomId},on:{click:function(t){return e.loadWidgster(t)}}},["string"===typeof e.refresh?a("strong",{staticClass:"text-gray-light"},[e._v(e._s(e.refresh))]):a("i",{staticClass:"la la-refresh"}),e.showTooltip?a("b-tooltip",{attrs:{placement:e.tooltipPlacement,target:"reloadId-"+e.randomId}},[e._v("Reload ")]):e._e()],1):e._e(),e.fullscreen&&"fullscreen"!==e.state?a("a",{attrs:{href:"#",id:"fullscreenId-"+e.randomId},on:{click:function(t){return e.changeState(t,"fullscreen")}}},[a("i",{staticClass:"la la-expand"}),e.showTooltip?a("b-tooltip",{attrs:{placement:e.tooltipPlacement,target:"fullscreenId-"+e.randomId}},[e._v("Fullscreen ")]):e._e()],1):e._e(),e.fullscreen&&"fullscreen"===e.state?a("a",{attrs:{href:"#",id:"restoreId-"+e.randomId},on:{click:function(t){return e.changeState(t,"default")}}},[a("i",{staticClass:"la la-compress"}),e.showTooltip?a("b-tooltip",{attrs:{placement:e.tooltipPlacement,target:"restoreId-"+e.randomId}},[e._v("Restore ")]):e._e()],1):e._e(),e.collapse&&"collapse"!==e.state?a("span",[a("a",{attrs:{href:"#",id:"collapseId-"+e.randomId},on:{click:function(t){return e.changeState(t,"collapse")}}},[a("i",{staticClass:"la la-angle-down"}),e.showTooltip?a("b-tooltip",{attrs:{placement:e.tooltipPlacement,target:"collapseId-"+e.randomId}},[e._v("Collapse ")]):e._e()],1)]):e._e(),e.collapse&&"collapse"===e.state?a("span",[a("a",{attrs:{href:"#",id:"expandId-"+e.randomId},on:{click:function(t){return e.changeState(t,"default")}}},[a("i",{staticClass:"la la-angle-up"}),e.showTooltip?a("b-tooltip",{attrs:{placement:e.tooltipPlacement,target:"expandId-"+e.randomId}},[e._v("Expand ")]):e._e()],1)]):e._e(),e.close?a("a",{attrs:{href:"#",id:"closeId-"+e.randomId},on:{click:function(t){return e.closeWidget(t)}}},["string"===typeof e.refresh?a("strong",{staticClass:"text-gray-light"},[e._v(e._s(e.close))]):a("i",{staticClass:"la la-remove"}),e.showTooltip?a("b-tooltip",{attrs:{placement:e.tooltipPlacement,target:"closeId-"+e.randomId}},[e._v("Close ")]):e._e()],1):e._e()]):e._e(),e.customControls?a("div",{ref:"customControlsRef",staticClass:"widgetControls widget-controls",domProps:{innerHTML:e._s(e.customControls)}}):e._e(),a("div",{ref:"widgetBodyRef",class:"widgetBody widget-body "+e.bodyClass,style:{display:"collapse"===e.state?"none":""}},[e.fetchingData&&e.showLoader?a("Loader",{class:"widget-loader",attrs:{size:40}}):e._t("default")],2)])},V=[],X=(a("a9e3"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"data-loader"},[a("i",{staticClass:"la la-spinner la-spin",style:{fontSize:e.size+"px"}})])}),Y=[],Z={name:"Loader",props:{size:{type:Number,default:21}}},ee=Z,te=(a("d833"),Object(u["a"])(ee,X,Y,!1,null,null,null)),ae=te.exports,ne={name:"Widget",data:function(){return{state:this.collapsed?"collapse":"default"}},props:{customHeader:{type:Boolean,default:!1},tooltipPlacement:{default:"top"},showTooltip:{type:Boolean,default:!1},close:{type:[Boolean,String],default:!1},fullscreen:{type:[Boolean,String],default:!1},collapse:{type:[Boolean,String],default:!1},settings:{type:[Boolean,String],default:!1},settingsInverse:{type:Boolean,default:!1},refresh:{type:[Boolean,String],default:!1},className:{default:""},title:{default:""},customControls:{default:null},bodyClass:{default:""},options:{default:function(){return{}}},fetchingData:{type:Boolean,default:!1},showLoader:{type:Boolean,default:!0},collapsed:{type:Boolean,default:!1},autoload:{type:[Boolean,Number],default:!1}},components:{Loader:ae},computed:{randomId:function(){return Math.floor(100*Math.random())},mainControls:function(){return!!(this.close||this.fullscreen||this.collapse||this.refresh||this.settings||this.settingsInverse)}},mounted:function(){var e=this;this.autoload&&this.$listeners&&this.$listeners.load&&(this.loadWidgster(),"number"===typeof this.autoload&&setInterval((function(){e.loadWidgster()}),this.autoload))},methods:{closeWidget:function(e){var t=this;e&&e.preventDefault();for(var a=this.$el.parentElement,n=a.classList.length,r=!1,i=0;i<n;i+=1)if(/col.*/.test(a.classList[i])){r=!0;break}var s=function(){r?a.remove():t.$el.remove()};this.$listeners&&this.$listeners.close?this.$listeners.close(s.bind(this)):s()},changeState:function(e,t){e&&e.preventDefault(),this.state=t},loadWidgster:function(e){e&&e.preventDefault(),this.$emit("load")}}},re=ne,ie=(a("8685"),Object(u["a"])(re,K,V,!1,null,null,null)),se=ie.exports,oe=a("858e"),le=oe["a"].createLoadingTask("Takatsuka_Resume.pdf"),ce={name:"resume",components:{Widget:se,pdf:oe["a"]},data:function(){return{image:le}}},de=ce,ue=Object(u["a"])(de,q,G,!1,null,"2ad4030f",null),fe=ue.exports,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"error-page"},[a("b-container",[a("div",{staticClass:"errorContainer mx-auto"},[a("img",{staticClass:"errorCode",attrs:{src:e.errorImg}}),a("p",{staticClass:"errorInfo"},[e._v(" This page is currently under construction!"),a("br"),e._v(" Check back in soon :) ")])])])],1)},me=[],he=a("1fe8"),be=a.n(he),ve={name:"Construction",data:function(){return{errorImg:be.a}}},ge=ve,_e=(a("5ce6"),Object(u["a"])(ge,pe,me,!1,null,"0dde6bde",null)),Ce=_e.exports;n["default"].use(m["a"]);var we=[{path:"/app",name:"Layout",component:R,children:[{path:"resume",name:"Resume",component:fe},{path:"construction",name:"Construction",component:Ce}]},{path:"*",name:"Error",component:Q}],ye=new m["a"]({mode:"hash",routes:we}),ke=ye,Se={namespaced:!0,state:{sidebarClose:!0,sidebarActiveElement:null},mutations:{switchSidebar:function(e,t){e.sidebarClose=t||!e.sidebarClose},changeSidebarActive:function(e,t){e.sidebarActiveElement=t}},actions:{switchSidebar:function(e,t){var a=e.commit;a("switchSidebar",t)},changeSidebarActive:function(e,t){var a=e.commit;a("changeSidebarActive",t)}}};n["default"].use(g["a"]);var xe=new g["a"].Store({state:{},mutations:{},actions:{},modules:{layout:Se}}),Oe=a("f309");n["default"].use(Oe["a"]);var Ie=new Oe["a"]({}),je={blue:"#1870DC",green:"#58D777",orange:"#f0af03",red:"#F45722",purple:"#474D84",dark:"#040620",teal:"#14d3d3",pink:"#e671b8",gray:"#d6dee5",default:"#595d78",textColor:"#b4b5bf",gridLineColor:"#040620"},$e={colors:Object(v["a"])(Object(v["a"])({},je),{},{white:"#ffffff"})},Ee={data:function(){return{appConfig:{colors:$e.colors}}},methods:{decodeHtml:function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}}};n["default"].use(r["a"]),n["default"].use(s.a,{id:"UA-177900416-1",router:ke}),n["default"].config.productionTip=!1,n["default"].mixin(Ee),new n["default"]({router:ke,store:xe,vuetify:Ie,render:function(e){return e(p)}}).$mount("#app")},"5ce6":function(e,t,a){"use strict";var n=a("d8ab"),r=a.n(n);r.a},"6adb":function(e,t,a){"use strict";var n=a("8680"),r=a.n(n);r.a},"6dd0":function(e,t,a){"use strict";var n=a("29ed"),r=a.n(n);r.a},7097:function(e,t,a){"use strict";var n=a("becf"),r=a.n(n);r.a},7382:function(e,t,a){"use strict";var n=a("e54d"),r=a.n(n);r.a},8680:function(e,t,a){},8685:function(e,t,a){"use strict";var n=a("d296"),r=a.n(n);r.a},"91d8":function(e,t,a){"use strict";var n=a("9552"),r=a.n(n);r.a},9552:function(e,t,a){},becf:function(e,t,a){},c1a4:function(e,t,a){"use strict";var n=a("2dd9"),r=a.n(n);r.a},d296:function(e,t,a){},d833:function(e,t,a){"use strict";var n=a("0ee0"),r=a.n(n);r.a},d8ab:function(e,t,a){},e54d:function(e,t,a){},e87c:function(e,t,a){}});
//# sourceMappingURL=app.a3b003ab.js.map