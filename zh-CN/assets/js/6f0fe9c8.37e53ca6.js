"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[20743],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,y=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"STRING",language:"zh-CN"},l=void 0,c={unversionedId:"sql-manual/sql-reference/Data-Types/STRING",id:"sql-manual/sql-reference/Data-Types/STRING",title:"STRING",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Types/STRING.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/STRING",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/STRING",draft:!1,tags:[],version:"current",frontMatter:{title:"STRING",language:"zh-CN"},sidebar:"docs",previous:{title:"VARCHAR",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/VARCHAR"},next:{title:"HLL(HyperLogLog)",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/HLL"}},i={},s=[{value:"STRING",id:"string",level:2},{value:"description",id:"description",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"string"},"STRING"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"STRING\n\u53d8\u957f\u5b57\u7b26\u4e32\uff0c\u6700\u5927\uff08\u9ed8\u8ba4\uff09\u652f\u63011048576 \u5b57\u8282\uff081MB\uff09\u3002String\u7c7b\u578b\u7684\u957f\u5ea6\u8fd8\u53d7 be \u914d\u7f6e  `string_type_length_soft_limit_bytes`(\u5b57\u7b26\u4e32\u7c7b\u578b\u957f\u5ea6\u7684\u8f6f\u9650\u5236), String\u7c7b\u578b\u53ea\u80fd\u7528\u5728value \u5217\uff0c\u4e0d\u80fd\u7528\u5728 key \u5217\u548c\u5206\u533a \u5206\u6876\u5217\n\n\u6ce8\u610f\uff1a\u53d8\u957f\u5b57\u7b26\u4e32\u662f\u4ee5UTF-8\u7f16\u7801\u5b58\u50a8\u7684\uff0c\u56e0\u6b64\u901a\u5e38\u82f1\u6587\u5b57\u7b26\u53601\u4e2a\u5b57\u8282\uff0c\u4e2d\u6587\u5b57\u7b26\u53603\u4e2a\u5b57\u8282\u3002\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"STRING\n")))}d.isMDXComponent=!0}}]);