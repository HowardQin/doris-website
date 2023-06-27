"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[84615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),a=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=a(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=a(n),d=l,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(f,c(c({ref:t},i),{},{components:n})):r.createElement(f,c({ref:t},i))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,c=new Array(s);c[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[m]="string"==typeof e?e:l,c[1]=u;for(var a=2;a<s;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var r=n(87462),l=(n(67294),n(3905));const s={title:"struct_element",language:"zh-CN"},c=void 0,u={unversionedId:"sql-manual/sql-functions/struct-functions/struct_element",id:"sql-manual/sql-functions/struct-functions/struct_element",title:"struct_element",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/struct-functions/struct_element.md",sourceDirName:"sql-manual/sql-functions/struct-functions",slug:"/sql-manual/sql-functions/struct-functions/struct_element",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/struct-functions/struct_element",draft:!1,tags:[],version:"current",frontMatter:{title:"struct_element",language:"zh-CN"},sidebar:"docs",previous:{title:"named_struct",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/struct-functions/named_struct"},next:{title:"STATE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/state"}},o={},a=[{value:"struct_element",id:"struct_element",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:a},m="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"struct_element"},"struct_element"),(0,l.kt)("version",{since:"2.0"},(0,l.kt)("p",null,"struct_element")),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("p",null,"\u8fd4\u56destruct\u6570\u636e\u5217\u5185\u7684\u67d0\u4e00field"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"struct_element(struct, n/s)\n")),(0,l.kt)("h4",{id:"arguments"},"Arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"struct - \u8f93\u5165\u7684struct\u5217\uff0c\u5982\u679c\u662fnull\uff0c\u5219\u8fd4\u56denull\nn - field\u7684\u4f4d\u7f6e\uff0c\u8d77\u59cb\u4f4d\u7f6e\u4ece1\u5f00\u59cb\uff0c\u4ec5\u652f\u6301\u5e38\u91cf\ns - field\u7684\u540d\u5b57\uff0c\u4ec5\u652f\u6301\u5e38\u91cf\n")),(0,l.kt)("h4",{id:"returned-value"},"Returned value"),(0,l.kt)("p",null,"\u8fd4\u56de\u6307\u5b9a\u7684field\u5217\uff0c\u7c7b\u578b\u4e3a\u4efb\u610f\u7c7b\u578b"),(0,l.kt)("h3",{id:"notice"},"notice"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u53ea\u652f\u6301\u5728\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528\u3002")),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select struct_element(named_struct('f1', 1, 'f2', 'a'), 'f2');\n+--------------------------------------------------------+\n| struct_element(named_struct('f1', 1, 'f2', 'a'), 'f2') |\n+--------------------------------------------------------+\n| a                                                      |\n+--------------------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> select struct_element(named_struct('f1', 1, 'f2', 'a'), 1);\n+-----------------------------------------------------+\n| struct_element(named_struct('f1', 1, 'f2', 'a'), 1) |\n+-----------------------------------------------------+\n|                                                   1 |\n+-----------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select struct_col, struct_element(struct_col, 'f1') from test_struct;\n+-------------------------------------------------+-------------------------------------+\n| struct_col                                      | struct_element(`struct_col `, 'f1') |\n+-------------------------------------------------+-------------------------------------+\n| {1, 2, 3, 4, 5}                                 |                                   1 |\n| {1, 1000, 10000000, 100000000000, 100000000000} |                                   1 |\n| {5, 4, 3, 2, 1}                                 |                                   5 |\n| NULL                                            |                                NULL |\n| {1, NULL, 3, NULL, 5}                           |                                   1 |\n+-------------------------------------------------+-------------------------------------+\n9 rows in set (0.01 sec)\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("p",null,"STRUCT, ELEMENT, STRUCT_ELEMENT"))}p.isMDXComponent=!0}}]);