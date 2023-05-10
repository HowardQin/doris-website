"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[68602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=l,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const o={title:"now",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/now",id:"sql-manual/sql-functions/date-time-functions/now",title:"now",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/now.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/now",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/now",draft:!1,tags:[],version:"current",frontMatter:{title:"now",language:"zh-CN"},sidebar:"docs",previous:{title:"localtime,localtimestamp",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/localtime"},next:{title:"year",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/year"}},c={},s=[{value:"now",id:"now",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"example",id:"example-1",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"now"},"now"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATETIME NOW()")),(0,l.kt)("p",null,"\u83b7\u5f97\u5f53\u524d\u7684\u65f6\u95f4\uff0c\u4ee5Datetime\u7c7b\u578b\u8fd4\u56de"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select now();\n+---------------------+\n| now()               |\n+---------------------+\n| 2019-05-27 15:58:25 |\n+---------------------+\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATETIMEV2 NOW(INT precision)")),(0,l.kt)("p",null,"\u83b7\u5f97\u5f53\u524d\u7684\u65f6\u95f4\uff0c\u4ee5DatetimeV2\u7c7b\u578b\u8fd4\u56de\nprecision\u4ee3\u8868\u4e86\u7528\u6237\u60f3\u8981\u7684\u79d2\u7cbe\u5ea6\uff0c\u5f53\u524d\u7cbe\u5ea6\u6700\u591a\u652f\u6301\u5230\u5fae\u79d2\uff0c\u5373precision\u53d6\u503c\u8303\u56f4\u4e3a","[0, 6]","\u3002"),(0,l.kt)("h3",{id:"example-1"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select now(3);\n+-------------------------+\n| now(3)                  |\n+-------------------------+\n| 2022-09-06 16:13:30.078 |\n+-------------------------+\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f53\u524d\u53ea\u6709DatetimeV2\u6570\u636e\u7c7b\u578b\u53ef\u652f\u6301\u79d2\u7cbe\u5ea6"),(0,l.kt)("li",{parentName:"ol"},"\u53d7\u9650\u4e8eJDK\u5b9e\u73b0\uff0c\u5982\u679c\u7528\u6237\u4f7f\u7528JDK8\u6784\u5efaFE\uff0c\u5219\u7cbe\u5ea6\u6700\u591a\u652f\u6301\u5230\u6beb\u79d2\uff08\u5c0f\u6570\u70b9\u540e\u4e09\u4f4d\uff09\uff0c\u66f4\u5927\u7684\u7cbe\u5ea6\u4f4d\u5c06\u5168\u90e8\u586b\u51450\u3002\u5982\u679c\u7528\u6237\u6709\u66f4\u9ad8\u7cbe\u5ea6\u9700\u6c42\uff0c\u8bf7\u4f7f\u7528JDK11\u3002")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NOW\n")))}m.isMDXComponent=!0}}]);