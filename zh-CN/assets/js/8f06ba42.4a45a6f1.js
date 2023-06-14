"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[49585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>S});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,S=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(S,l(l({ref:t},p),{},{components:n})):r.createElement(S,l({ref:t},p))}));function S(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW-DATA-SKEW",language:"zh-CN"},l=void 0,c={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW",id:"sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW",title:"SHOW-DATA-SKEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-DATA-SKEW",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-DATABASES",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES"},next:{title:"SHOW-DATABASE-ID",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-DATABASE-ID"}},i={},s=[{value:"SHOW-DATA-SKEW",id:"show-data-skew",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-data-skew"},"SHOW-DATA-SKEW"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW DATA SKEW"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b\u8868\u6216\u67d0\u4e2a\u5206\u533a\u7684\u6570\u636e\u503e\u659c\u60c5\u51b5\u3002\n\n\u8bed\u6cd5\uff1a\n\n    SHOW DATA SKEW FROM [db_name.]tbl_name PARTITION (partition_name);\n\n\u8bf4\u660e\uff1a\n\n    1. \u5fc5\u987b\u6307\u5b9a\u4e14\u4ec5\u6307\u5b9a\u4e00\u4e2a\u5206\u533a\u3002\u5bf9\u4e8e\u975e\u5206\u533a\u8868\uff0c\u5206\u533a\u540d\u79f0\u540c\u8868\u540d\u3002\n    2. \u7ed3\u679c\u5c06\u5c55\u793a\u6307\u5b9a\u5206\u533a\u4e0b\uff0c\u5404\u4e2a\u5206\u6876\u7684\u6570\u636e\u884c\u6570\uff0c\u6570\u636e\u91cf\uff0c\u4ee5\u53ca\u6bcf\u4e2a\u5206\u6876\u6570\u636e\u91cf\u5728\u603b\u6570\u636e\u91cf\u4e2d\u7684\u5360\u6bd4\u3002\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u67e5\u770b\u8868\u7684\u6570\u636e\u503e\u659c\u60c5\u51b5\n\n    SHOW DATA SKEW FROM db1.test PARTITION(p1);\n")),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW,DATA,SKEW\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);