"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[99598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"SYNC",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Utility-Statements/SYNC",id:"version-1.2/sql-manual/sql-reference/Utility-Statements/SYNC",title:"SYNC",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Utility-Statements/SYNC.md",sourceDirName:"sql-manual/sql-reference/Utility-Statements",slug:"/sql-manual/sql-reference/Utility-Statements/SYNC",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Utility-Statements/SYNC",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SYNC",language:"zh-CN"},sidebar:"docs",previous:{title:"REFRESH",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Utility-Statements/REFRESH"},next:{title:"\u96c6\u7fa4\u5347\u7ea7",permalink:"/zh-CN/docs/1.2/admin-manual/cluster-management/upgrade"}},c={},s=[{value:"SYNC",id:"sync",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sync"},"SYNC"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SYNC"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u7528\u4e8efe\u975emaster\u8282\u70b9\u540c\u6b65\u5143\u6570\u636e\u3002doris\u53ea\u6709master\u8282\u70b9\u624d\u80fd\u5199fe\u5143\u6570\u636e\uff0c\u5176\u4ed6fe\u8282\u70b9\u5199\u5143\u6570\u636e\u7684\u64cd\u4f5c\u90fd\u4f1a\u8f6c\u53d1\u5230master\u8282\u70b9\u3002\u5728master\u5b8c\u6210\u5143\u6570\u636e\u5199\u5165\u64cd\u4f5c\u540e\uff0c\u975emaster\u8282\u70b9replay\u5143\u6570\u636e\u4f1a\u6709\u77ed\u6682\u7684\u5ef6\u8fdf\uff0c\u53ef\u4ee5\u4f7f\u7528\u8be5\u8bed\u53e5\u540c\u6b65\u5143\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SYNC;\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u540c\u6b65\u5143\u6570\u636e"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SYNC;\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SYNC\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);