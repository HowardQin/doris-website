"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[13567],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>O});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),d=a,O=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(O,o(o({ref:t},p),{},{components:r})):n.createElement(O,o({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43642:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={title:"SHOW-CREATE-LOAD",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-LOAD",id:"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-LOAD",title:"SHOW-CREATE-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-LOAD.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-CREATE-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-CREATE-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW"},next:{title:"SHOW-CREATE-REPOSITORY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-REPOSITORY"}},s={},i=[{value:"SHOW-CREATE-LOAD",id:"show-create-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-create-load"},"SHOW-CREATE-LOAD"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW CREATE LOAD"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5bfc\u5165\u4f5c\u4e1a\u7684\u521b\u5efa\u8bed\u53e5."),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE LOAD for load_name;\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      1.  `load_name`: \u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u540d\u79f0\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u9ed8\u8ba4db\u4e0b\u6307\u5b9a\u5bfc\u5165\u4f5c\u4e1a\u7684\u521b\u5efa\u8bed\u53e5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE LOAD for test_load\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, CREATE, LOAD\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);