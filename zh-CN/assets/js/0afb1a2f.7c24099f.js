"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[84149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={title:"locate",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/locate",id:"sql-manual/sql-functions/string-functions/locate",title:"locate",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/locate.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/locate",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/locate",draft:!1,tags:[],version:"current",frontMatter:{title:"locate",language:"zh-CN"},sidebar:"docs",previous:{title:"instr",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/instr"},next:{title:"field",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/field"}},c={},i=[{value:"locate",id:"locate",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"locate"},"locate"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"INT locate(VARCHAR substr, VARCHAR str[, INT pos])")),(0,o.kt)("p",null,"\u8fd4\u56de substr \u5728 str \u4e2d\u51fa\u73b0\u7684\u4f4d\u7f6e\uff08\u4ece1\u5f00\u59cb\u8ba1\u6570\uff09\u3002\u5982\u679c\u6307\u5b9a\u7b2c3\u4e2a\u53c2\u6570 pos\uff0c\u5219\u4ece str \u4ee5 pos \u4e0b\u6807\u5f00\u59cb\u7684\u5b57\u7b26\u4e32\u5904\u5f00\u59cb\u67e5\u627e substr \u51fa\u73b0\u7684\u4f4d\u7f6e\u3002\u5982\u679c\u6ca1\u6709\u627e\u5230\uff0c\u8fd4\u56de0"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT LOCATE('bar', 'foobarbar');\n+----------------------------+\n| locate('bar', 'foobarbar') |\n+----------------------------+\n|                          4 |\n+----------------------------+\n\nmysql> SELECT LOCATE('xbar', 'foobar');\n+--------------------------+\n| locate('xbar', 'foobar') |\n+--------------------------+\n|                        0 |\n+--------------------------+\n\nmysql> SELECT LOCATE('bar', 'foobarbar', 5);\n+-------------------------------+\n| locate('bar', 'foobarbar', 5) |\n+-------------------------------+\n|                             7 |\n+-------------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"LOCATE\n")))}f.isMDXComponent=!0}}]);