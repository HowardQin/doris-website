"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[88957],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),i=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(r),g=o,d=u["".concat(c,".").concat(g)]||u[g]||f[g]||a;return r?t.createElement(d,l(l({ref:n},s),{},{components:r})):t.createElement(d,l({ref:n},s))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=r[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},65731:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var t=r(87462),o=(r(67294),r(3905));const a={title:"regexp_replace_one",language:"zh-CN"},l=void 0,p={unversionedId:"sql-manual/sql-functions/string-functions/regexp/regexp_replace_one",id:"version-1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace_one",title:"regexp_replace_one",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace_one.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/regexp_replace_one",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace_one",draft:!1,tags:[],version:"1.2",frontMatter:{title:"regexp_replace_one",language:"zh-CN"},sidebar:"docs",previous:{title:"regexp_replace",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace"},next:{title:"not regexp",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/regexp/not_regexp"}},c={},i=[{value:"regexp_replace_one",id:"regexp_replace_one",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:i},u="wrapper";function f(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"regexp_replace_one"},"regexp_replace_one"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR regexp_replace_one(VARCHAR str, VARCHAR pattern, VARCHAR repl)")),(0,o.kt)("p",null,"\u5bf9\u5b57\u7b26\u4e32 str \u8fdb\u884c\u6b63\u5219\u5339\u914d, \u5c06\u547d\u4e2d pattern \u7684\u90e8\u5206\u4f7f\u7528 repl \u6765\u8fdb\u884c\u66ff\u6362\uff0c\u4ec5\u66ff\u6362\u7b2c\u4e00\u4e2a\u5339\u914d\u9879\u3002"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT regexp_replace_one('a b c', \" \", \"-\");\n+-----------------------------------+\n| regexp_replace_one('a b c', ' ', '-') |\n+-----------------------------------+\n| a-b c                             |\n+-----------------------------------+\n\nmysql> SELECT regexp_replace_one('a b b','(b)','<\\\\1>');\n+----------------------------------------+\n| regexp_replace_one('a b b', '(b)', '<\\1>') |\n+----------------------------------------+\n| a <b> b                                |\n+----------------------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REGEXP_REPLACE_ONE,REGEXP,REPLACE,ONE\n")))}f.isMDXComponent=!0}}]);