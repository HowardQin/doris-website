"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94329],{3905:(t,e,n)=>{n.d(e,{Zo:()=>a,kt:()=>m});var r=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},a=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,c=t.originalType,i=t.parentName,a=o(t,["components","mdxType","originalType","parentName"]),p=u(n),f=s,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||c;return n?r.createElement(m,l(l({ref:e},a),{},{components:n})):r.createElement(m,l({ref:e},a))}));function m(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var c=n.length,l=new Array(c);l[0]=f;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[p]="string"==typeof t?t:s,l[1]=o;for(var u=2;u<c;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86510:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=n(87462),s=(n(67294),n(3905));const c={title:"struct",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/struct-functions/struct",id:"sql-manual/sql-functions/struct-functions/struct",title:"struct",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/struct-functions/struct.md",sourceDirName:"sql-manual/sql-functions/struct-functions",slug:"/sql-manual/sql-functions/struct-functions/struct",permalink:"/docs/dev/sql-manual/sql-functions/struct-functions/struct",draft:!1,tags:[],version:"current",frontMatter:{title:"struct",language:"en"},sidebar:"docs",previous:{title:"not regexp",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/regexp/not_regexp"},next:{title:"named_struct",permalink:"/docs/dev/sql-manual/sql-functions/struct-functions/named_struct"}},i={},u=[{value:"struct()",id:"struct",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],a={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,s.kt)(p,(0,r.Z)({},a,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"struct"},"struct()"),(0,s.kt)("version",{since:"2.0.0"},(0,s.kt)("p",null,"struct()")),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"STRUCT<T1, T2, T3, ...> struct(T1, T2, T3, ...)")),(0,s.kt)("p",null,"construct an struct with variadic elements and return it, Tn could be column or literal"),(0,s.kt)("h3",{id:"notice"},"notice"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,s.kt)("h3",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mysql> select struct(1, 'a', \"abc\");\n+-----------------------+\n| struct(1, 'a', 'abc') |\n+-----------------------+\n| {1, 'a', 'abc'}       |\n+-----------------------+\n1 row in set (0.03 sec)\n\nmysql> select struct(null, 1, null);\n+-----------------------+\n| struct(NULL, 1, NULL) |\n+-----------------------+\n| {NULL, 1, NULL}       |\n+-----------------------+\n1 row in set (0.02 sec)\n\nmysql> select struct(cast('2023-03-16' as datetime));\n+----------------------------------------+\n| struct(CAST('2023-03-16' AS DATETIME)) |\n+----------------------------------------+\n| {2023-03-16 00:00:00}                  |\n+----------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select struct(k1, k2, null) from test_tb;\n+--------------------------+\n| struct(`k1`, `k2`, NULL) |\n+--------------------------+\n| {1, 'a', NULL}           |\n+--------------------------+\n1 row in set (0.04 sec)\n")),(0,s.kt)("h3",{id:"keywords"},"keywords"),(0,s.kt)("p",null,"STRUCT,CONSTRUCTOR"))}d.isMDXComponent=!0}}]);