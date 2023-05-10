"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[87692],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>T});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,T=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(T,l(l({ref:t},p),{},{components:r})):n.createElement(T,l({ref:t},p))}));function T(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"DATETIME",language:"zh-CN"},l=void 0,c={unversionedId:"sql-manual/sql-reference/Data-Types/DATETIME",id:"version-1.2/sql-manual/sql-reference/Data-Types/DATETIME",title:"DATETIME",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Types/DATETIME.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DATETIME",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DATETIME",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DATETIME",language:"zh-CN"},sidebar:"docs",previous:{title:"DATE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DATE"},next:{title:"DATEV2",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DATEV2"}},i={},s=[{value:"DATETIME",id:"datetime",level:2},{value:"description",id:"description",level:3},{value:"note",id:"note",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"datetime"},"DATETIME"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DATETIME\n\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u662f['0000-01-01 00:00:00', '9999-12-31 23:59:59'].\n\u6253\u5370\u7684\u5f62\u5f0f\u662f'yyyy-MM-dd HH:mm:ss'\n")),(0,a.kt)("h3",{id:"note"},"note"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u5982\u679c\u60a8\u4f7f\u75281.2\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u5f3a\u70c8\u63a8\u8350\u60a8\u4f7f\u7528DATETIMEV2\u7c7b\u578b\u66ff\u4ee3DATETIME\u7c7b\u578b\u3002\u76f8\u6bd4DATETIME\u7c7b\u578b\uff0cDATETIMEV2\u66f4\u52a0\u9ad8\u6548\uff0c\u5e76\u4e14\u652f\u6301\u4e86\u6700\u591a\u5230\u5fae\u79d2\u7684\u65f6\u95f4\u7cbe\u5ea6\u3002\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DATETIME\n")))}d.isMDXComponent=!0}}]);