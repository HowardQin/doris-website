"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[86419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},D=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),D=a,d=u["".concat(s,".").concat(D)]||u[D]||m[D]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=D;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}D.displayName="MDXCreateElement"},32797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"DROP-DATABASE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-DATABASE",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-DATABASE",title:"DROP-DATABASE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-DATABASE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-DATABASE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-DATABASE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DROP-DATABASE",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-ENCRYPT-KEY",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ENCRYPT-KEY"},next:{title:"DROP-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW"}},s={},c=[{value:"DROP-DATABASE",id:"drop-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"drop-database"},"DROP-DATABASE"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"DOPR DATABASE"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5220\u9664\u6570\u636e\u5e93\uff08database\uff09\n\u8bed\u6cd5\uff1a    "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE [IF EXISTS] db_name [FORCE];\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c DROP DATABASE \u4e00\u6bb5\u65f6\u95f4\u5185\uff0c\u53ef\u4ee5\u901a\u8fc7 RECOVER \u8bed\u53e5\u6062\u590d\u88ab\u5220\u9664\u7684\u6570\u636e\u5e93\u3002\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/RECOVER"},"RECOVER")," \u8bed\u53e5"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6267\u884c DROP DATABASE FORCE\uff0c\u5219\u7cfb\u7edf\u4e0d\u4f1a\u68c0\u67e5\u8be5\u6570\u636e\u5e93\u662f\u5426\u5b58\u5728\u672a\u5b8c\u6210\u7684\u4e8b\u52a1\uff0c\u6570\u636e\u5e93\u5c06\u76f4\u63a5\u88ab\u5220\u9664\u5e76\u4e14\u4e0d\u80fd\u88ab\u6062\u590d\uff0c\u4e00\u822c\u4e0d\u5efa\u8bae\u6267\u884c\u6b64\u64cd\u4f5c")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5220\u9664\u6570\u636e\u5e93 db_test"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE db_test;\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DROP, DATABASE\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);