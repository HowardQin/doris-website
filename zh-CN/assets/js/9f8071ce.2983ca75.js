"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[29888],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Meta Info Action",language:"zh-CN"},o=void 0,p={unversionedId:"admin-manual/http-actions/fe/meta-info-action-V2",id:"admin-manual/http-actions/fe/meta-info-action-V2",title:"Meta Info Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/fe/meta-info-action-V2.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/meta-info-action-V2",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/meta-info-action-V2",draft:!1,tags:[],version:"current",frontMatter:{title:"Meta Info Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Import Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/import-action"},next:{title:"Statistic Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/statistic-action"}},l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"meta-info-action"},"Meta Info Action"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/meta/namespaces/<ns>/databases"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/meta/namespaces/<ns>/databases/<db>/tables"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/meta/namespaces/<ns>/databases/<db>/tables/<tbl>/schema")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"\u83b7\u53d6\u96c6\u7fa4\u5185\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u5305\u62ec\u6570\u636e\u5e93\u5217\u8868\u3001\u8868\u5217\u8868\u4ee5\u53ca\u8868\u7ed3\u6784\u7b49\u3002"),(0,r.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ns")),(0,r.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u96c6\u7fa4\u540d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"db")),(0,r.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u5e93\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"tbl")),(0,r.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u8868\u3002"))),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg":"success",\n    "code":0,\n    "data":["\u6570\u636e\u5e93\u5217\u8868" / "\u6570\u636e\u8868\u5217\u8868" /"\u8868\u7ed3\u6784"],\n    "count":0\n}\n')))}m.isMDXComponent=!0}}]);