"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77237],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Import Action",language:"zh-CN"},i=void 0,p={unversionedId:"admin-manual/http-actions/fe/import-action",id:"admin-manual/http-actions/fe/import-action",title:"Import Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/fe/import-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/import-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/import-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Import Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Upload Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/upload-action"},next:{title:"Meta Info Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/meta-info-action-V2"}},c={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],u={toc:l},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"import-action"},"Import Action"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/import/file_review")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u67e5\u770b\u683c\u5f0f\u4e3aCSV\u6216PARQUET\u7684\u6587\u4ef6\u5185\u5bb9\u3002"),(0,a.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"request-body"},"Request body"),(0,a.kt)("p",null,"TO DO"),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"TO DO"))}m.isMDXComponent=!0}}]);