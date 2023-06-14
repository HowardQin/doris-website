"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[79881],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=r.createContext({}),o=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,p=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),u=o(n),d=l,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,s(s({ref:e},c),{},{components:n})):r.createElement(m,s({ref:e},c))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a[u]="string"==typeof t?t:l,s[1]=a;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71011:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var r=n(87462),l=(n(67294),n(3905));const i={title:"split_part",language:"zh-CN"},s=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/split_part",id:"version-1.2/sql-manual/sql-functions/string-functions/split_part",title:"split_part",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/split_part.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/split_part",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/split_part",draft:!1,tags:[],version:"1.2",frontMatter:{title:"split_part",language:"zh-CN"},sidebar:"docs",previous:{title:"strright",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/strright"},next:{title:"split_by_string",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/split_by_string"}},p={},o=[{value:"split_part",id:"split_part",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:o},u="wrapper";function f(t){let{components:e,...n}=t;return(0,l.kt)(u,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"split_part"},"split_part"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR split_part(VARCHAR content, VARCHAR delimiter, INT field)")),(0,l.kt)("p",null,"\u6839\u636e\u5206\u5272\u7b26\u62c6\u5206\u5b57\u7b26\u4e32, \u8fd4\u56de\u6307\u5b9a\u7684\u5206\u5272\u90e8\u5206(\u4ece\u4e00\u6216\u8d1f\u4e00\u5f00\u59cb\u8ba1\u6570)\u3002field\u5b57\u6bb5\u652f\u6301\u8d1f\u6570\uff0c\u4ee3\u8868\u4ece\u53f3\u5f80\u5de6\u5012\u7740\u622a\u53d6\u5e76\u53d6\u6570\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"delimiter")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"field")," \u53c2\u6570\u9700\u8981\u662f\u5e38\u91cf, \u4e0d\u652f\u6301\u53d8\u91cf\u3002"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select split_part(\"hello world\", \" \", 1);\n+----------------------------------+\n| split_part('hello world', ' ', 1) |\n+----------------------------------+\n| hello                            |\n+----------------------------------+\n\n\nmysql> select split_part(\"hello world\", \" \", 2);\n+----------------------------------+\n| split_part('hello world', ' ', 2) |\n+----------------------------------+\n| world                             |\n+----------------------------------+\n\nmysql> select split_part(\"2019\u5e747\u67088\u53f7\", \"\u6708\", 1);\n+-----------------------------------------+\n| split_part('2019\u5e747\u67088\u53f7', '\u6708', 1)     |\n+-----------------------------------------+\n| 2019\u5e747                                 |\n+-----------------------------------------+\n\nmysql> select split_part(\"abca\", \"a\", 1);\n+----------------------------+\n| split_part('abca', 'a', 1) |\n+----------------------------+\n|                            |\n+----------------------------+\n\nmysql> select split_part(\"prefix_string\", \"_\", -1);\n+--------------------------------------+\n| split_part('prefix_string', '_', -1) |\n+--------------------------------------+\n| string                               |\n+--------------------------------------+\n\nmysql> select split_part(\"prefix_string\", \"_\", -2);\n+--------------------------------------+\n| split_part('prefix_string', '_', -2) |\n+--------------------------------------+\n| prefix                               |\n+--------------------------------------+\n\nmysql> select split_part(\"abc##123###234\", \"##\", -1);\n+----------------------------------------+\n| split_part('abc##123###234', '##', -1) |\n+----------------------------------------+\n| 234                                    |\n+----------------------------------------+\n\nmysql> select split_part(\"abc##123###234\", \"##\", -2);\n+----------------------------------------+\n| split_part('abc##123###234', '##', -2) |\n+----------------------------------------+\n| 123#                                   |\n+----------------------------------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SPLIT_PART,SPLIT,PART\n")))}f.isMDXComponent=!0}}]);