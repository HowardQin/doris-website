"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[64068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"microseconds_add",language:"zh-CN"},i=void 0,c={unversionedId:"sql-manual/sql-functions/date-time-functions/microseconds_add",id:"sql-manual/sql-functions/date-time-functions/microseconds_add",title:"microseconds_add",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/microseconds_add.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/microseconds_add",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/microseconds_add",draft:!1,tags:[],version:"current",frontMatter:{title:"microseconds_add",language:"zh-CN"},sidebar:"docs",previous:{title:"datediff",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/datediff"},next:{title:"minutes_add",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/minutes_add"}},s={},l=[{value:"microseconds_add",id:"microseconds_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"microseconds_add"},"microseconds_add"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DATETIMEV2 microseconds_add(DATETIMEV2 basetime, INT delta)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"basetime: DATETIMEV2 \u7c7b\u578b\u8d77\u59cb\u65f6\u95f4"),(0,o.kt)("li",{parentName:"ul"},"delta: \u4ece basetime \u8d77\u9700\u8981\u76f8\u52a0\u7684\u5fae\u79d2\u6570"),(0,o.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7c7b\u578b\u4e3a DATETIMEV2")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select now(3), microseconds_add(now(3), 100000);\n+-------------------------+----------------------------------+\n| now(3)                  | microseconds_add(now(3), 100000) |\n+-------------------------+----------------------------------+\n| 2023-02-21 11:35:56.556 | 2023-02-21 11:35:56.656          |\n+-------------------------+----------------------------------+\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"now(3)")," \u8fd4\u56de\u7cbe\u5ea6\u4f4d\u6570 3 \u7684 DATETIMEV2 \u7c7b\u578b\u5f53\u524d\u65f6\u95f4\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"microseconds_add(now(3), 100000)")," \u8fd4\u56de\u5f53\u524d\u65f6\u95f4\u52a0\u4e0a 100000 \u5fae\u79d2\u540e\u7684 DATETIMEV2 \u7c7b\u578b\u65f6\u95f4"),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"microseconds_add\n")))}p.isMDXComponent=!0}}]);