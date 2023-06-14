"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73791],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>E});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,E=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(E,i(i({ref:t},p),{},{components:a})):n.createElement(E,i({ref:t},p))}));function E(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43600:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"REFRESH",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Utility-Statements/REFRESH",id:"sql-manual/sql-reference/Utility-Statements/REFRESH",title:"REFRESH",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Utility-Statements/REFRESH.md",sourceDirName:"sql-manual/sql-reference/Utility-Statements",slug:"/sql-manual/sql-reference/Utility-Statements/REFRESH",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Utility-Statements/REFRESH",draft:!1,tags:[],version:"current",frontMatter:{title:"REFRESH",language:"zh-CN"},sidebar:"docs",previous:{title:"SWITCH",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Utility-Statements/SWITCH"},next:{title:"SYNC",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Utility-Statements/SYNC"}},c={},s=[{value:"REFRESH",id:"refresh",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"refresh"},"REFRESH"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("version",{since:"1.2.0"},(0,r.kt)("p",null,"REFRESH")),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5237\u65b0\u6307\u5b9a Catalog/Database/Table \u7684\u5143\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"REFRESH CATALOG catalog_name;\nREFRESH DATABASE [catalog_name.]database_name;\nREFRESH TABLE [catalog_name.][database_name.]table_name;\n")),(0,r.kt)("p",null,"\u5237\u65b0Catalog\u7684\u540c\u65f6\uff0c\u4f1a\u5f3a\u5236\u4f7f\u5bf9\u8c61\u76f8\u5173\u7684 Cache \u5931\u6548\u3002"),(0,r.kt)("p",null,"\u5305\u62ecPartition Cache\u3001Schema Cache\u3001File Cache\u7b49\u3002"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5237\u65b0 hive catalog"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"REFRESH CATALOG hive;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5237\u65b0 database1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"REFRESH DATABASE ctl.database1;\nREFRESH DATABASE database1;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5237\u65b0 table1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"REFRESH TABLE ctl.db.table1;\nREFRESH TABLE db.table1;\nREFRESH TABLE table1;\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("p",null,"REFRESH, CATALOG, DATABASE, TABLE"),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);