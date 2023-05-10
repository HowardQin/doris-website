"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[41716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={title:"SHOW-TYPECAST",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-TYPECAST",id:"sql-manual/sql-reference/Show-Statements/SHOW-TYPECAST",title:"SHOW-TYPECAST",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-TYPECAST.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-TYPECAST",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TYPECAST",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-TYPECAST",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-FUNCTIONS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-FUNCTIONS"},next:{title:"SHOW-FILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-FILE"}},s={},i=[{value:"SHOW-TYPECAST",id:"show-typecast",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-typecast"},"SHOW-TYPECAST"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW TYPECAST"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u67e5\u770b\u6570\u636e\u5e93\u4e0b\u6240\u6709\u7684\u7c7b\u578b\u8f6c\u6362\u3002\u5982\u679c\u7528\u6237\u6307\u5b9a\u4e86\u6570\u636e\u5e93\uff0c\u90a3\u4e48\u67e5\u770b\u5bf9\u5e94\u6570\u636e\u5e93\u7684\uff0c\u5426\u5219\u76f4\u63a5\u67e5\u8be2\u5f53\u524d\u4f1a\u8bdd\u6240\u5728\u6570\u636e\u5e93"),(0,a.kt)("p",null,"\u9700\u8981\u5bf9\u8fd9\u4e2a\u6570\u636e\u5e93\u62e5\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW")," \u6743\u9650"),(0,a.kt)("p",null,"\u8bed\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TYPE_CAST [IN|FROM db]\n")),(0,a.kt)("p",null," Parameters"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"db"),": database name to query")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show type_cast in testDb\\G\n**************************** 1. row ******************** ******\nOrigin Type: TIMEV2\n  Cast Type: TIMEV2\n**************************** 2. row ******************** ******\nOrigin Type: TIMEV2\n  Cast Type: TIMEV2\n**************************** 3. row ******************** ******\nOrigin Type: TIMEV2\n  Cast Type: TIMEV2\n\n3 rows in set (0.00 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, TYPECAST\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);