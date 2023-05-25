"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[10654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?l.createElement(f,a(a({ref:t},p),{},{components:n})):l.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var l=n(87462),r=(n(67294),n(3905));const o={title:"multi_search_all_positions",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/search/multi_search_all_positions",id:"version-1.2/sql-manual/sql-functions/string-functions/search/multi_search_all_positions",title:"multi_search_all_positions",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/search/multi_search_all_positions.md",sourceDirName:"sql-manual/sql-functions/string-functions/search",slug:"/sql-manual/sql-functions/string-functions/search/multi_search_all_positions",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/search/multi_search_all_positions",draft:!1,tags:[],version:"1.2",frontMatter:{title:"multi_search_all_positions",language:"zh-CN"},sidebar:"docs",previous:{title:"mask_last_n",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/mask/mask_last_n"},next:{title:"multi_match_any",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/search/multi_match_any"}},s={},c=[{value:"multi_search_all_positions",id:"multi_search_all_positions",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"multi_search_all_positions"},"multi_search_all_positions"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ARRAY<INT> multi_search_all_positions(VARCHAR haystack, ARRAY<VARCHAR> needles)")),(0,r.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"ARRAY"),"\uff0c\u5176\u4e2d\u7b2c ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u4e2a\u5143\u7d20\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"needles")," \u4e2d\u7b2c ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u4e2a\u5143\u7d20 ",(0,r.kt)("inlineCode",{parentName:"p"},"needle"),"\uff0c\u5728\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"haystack")," \u4e2d",(0,r.kt)("strong",{parentName:"p"},"\u9996\u6b21"),"\u51fa\u73b0\u7684\u4f4d\u7f6e\u3002\u4f4d\u7f6e\u4ece1\u5f00\u59cb\u8ba1\u6570\uff0c0\u4ee3\u8868\u672a\u627e\u5230\u8be5\u5143\u7d20\u3002",(0,r.kt)("strong",{parentName:"p"},"\u5927\u5c0f\u5199\u654f\u611f"),"\u3002"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select multi_search_all_positions('Hello, World!', ['hello', '!', 'world']);\n+----------------------------------------------------------------------+\n| multi_search_all_positions('Hello, World!', ['hello', '!', 'world']) |\n+----------------------------------------------------------------------+\n| [0,13,0]                                                             |\n+----------------------------------------------------------------------+\n\nselect multi_search_all_positions(\"Hello, World!\", ['hello', '!', 'world', 'Hello', 'World']);\n+---------------------------------------------------------------------------------------------+\n| multi_search_all_positions('Hello, World!', ARRAY('hello', '!', 'world', 'Hello', 'World')) |\n+---------------------------------------------------------------------------------------------+\n| [0, 13, 0, 1, 8]                                                                            |\n+---------------------------------------------------------------------------------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MULTI_SEARCH,SEARCH,POSITIONS\n")))}m.isMDXComponent=!0}}]);