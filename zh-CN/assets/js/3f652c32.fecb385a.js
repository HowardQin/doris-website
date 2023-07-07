"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52856],{3905:(r,e,n)=>{n.d(e,{Zo:()=>y,kt:()=>p});var t=n(67294);function a(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function i(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function l(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function s(r,e){if(null==r)return{};var n,t,a=function(r,e){if(null==r)return{};var n,t,a={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(a[n]=r[n])}return a}var o=t.createContext({}),c=function(r){var e=t.useContext(o),n=e;return r&&(n="function"==typeof r?r(e):l(l({},e),r)),n},y=function(r){var e=c(r.components);return t.createElement(o.Provider,{value:e},r.children)},u="mdxType",d={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(r,e){var n=r.components,a=r.mdxType,i=r.originalType,o=r.parentName,y=s(r,["components","mdxType","originalType","parentName"]),u=c(n),f=a,p=u["".concat(o,".").concat(f)]||u[f]||d[f]||i;return n?t.createElement(p,l(l({ref:e},y),{},{components:n})):t.createElement(p,l({ref:e},y))}));function p(r,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var i=n.length,l=new Array(i);l[0]=f;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=r,s[u]="string"==typeof r?r:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9410:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const i={title:"array_first_index",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/array-functions/array_first_index",id:"sql-manual/sql-functions/array-functions/array_first_index",title:"array_first_index",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array_first_index.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_first_index",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_first_index",draft:!1,tags:[],version:"current",frontMatter:{title:"array_first_index",language:"zh-CN"},sidebar:"docs",previous:{title:"array_exists",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_exists"},next:{title:"array_last_index",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_last_index"}},o={},c=[{value:"array_first_index",id:"array_first_index",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:c},u="wrapper";function d(r){let{components:e,...n}=r;return(0,a.kt)(u,(0,t.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_first_index"},"array_first_index"),(0,a.kt)("version",{since:"2.0"},(0,a.kt)("p",null,"array_first_index")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY<T> array_first_index(lambda, ARRAY<T> array1, ...)")),(0,a.kt)("p",null,"\u4f7f\u7528lambda\u8868\u8fbe\u5f0f\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\uff0c\u5bf9\u5176\u4ed6\u8f93\u5165ARRAY\u53c2\u6570\u7684\u5185\u90e8\u6570\u636e\u8fdb\u884c\u76f8\u5e94\u7684\u8868\u8fbe\u5f0f\u8ba1\u7b97\u3002 \u8fd4\u56de\u7b2c\u4e00\u4e2a\u4f7f\u5f97 ",(0,a.kt)("inlineCode",{parentName:"p"},"lambda(array1[i], ...)")," \u8fd4\u56de\u503c\u4e0d\u4e3a 0 \u7684\u7d22\u5f15\u3002\u5982\u679c\u6ca1\u627e\u5230\u6ee1\u8db3\u6b64\u6761\u4ef6\u7684\u7d22\u5f15\uff0c\u5219\u8fd4\u56de 0\u3002"),(0,a.kt)("p",null,"\u5728lambda\u8868\u8fbe\u5f0f\u4e2d\u8f93\u5165\u7684\u53c2\u6570\u4e3a1\u4e2a\u6216\u591a\u4e2a\uff0c\u6240\u6709\u8f93\u5165\u7684array\u7684\u5143\u7d20\u6570\u91cf\u5fc5\u987b\u4e00\u81f4\u3002\u5728lambda\u4e2d\u53ef\u4ee5\u6267\u884c\u5408\u6cd5\u7684\u6807\u91cf\u51fd\u6570\uff0c\u4e0d\u652f\u6301\u805a\u5408\u51fd\u6570\u7b49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"array_first_index(x->x>1, array1);\narray_first_index(x->(x%2 = 0), array1);\narray_first_index(x->(abs(x)-1), array1);\narray_first_index((x,y)->(x = y), array1, array2);\n")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select array_first_index(x->x+1>3, [2, 3, 4]);\n+-------------------------------------------------------------------+\n| array_first_index(array_map([x] -> x(0) + 1 > 3, ARRAY(2, 3, 4))) |\n+-------------------------------------------------------------------+\n|                                                                 2 |\n+-------------------------------------------------------------------+\n\nmysql> select array_first_index(x -> x is null, [null, 1, 2]);\n+----------------------------------------------------------------------+\n| array_first_index(array_map([x] -> x(0) IS NULL, ARRAY(NULL, 1, 2))) |\n+----------------------------------------------------------------------+\n|                                                                    1 |\n+----------------------------------------------------------------------+\n\nmysql> select array_first_index(x->power(x,2)>10, [1, 2, 3, 4]);\n+---------------------------------------------------------------------------------+\n| array_first_index(array_map([x] -> power(x(0), 2.0) > 10.0, ARRAY(1, 2, 3, 4))) |\n+---------------------------------------------------------------------------------+\n|                                                                               4 |\n+---------------------------------------------------------------------------------+\n\nmysql> select col2, col3, array_first_index((x,y)->x>y, col2, col3) from array_test;\n+--------------+--------------+---------------------------------------------------------------------+\n| col2         | col3         | array_first_index(array_map([x, y] -> x(0) > y(1), `col2`, `col3`)) |\n+--------------+--------------+---------------------------------------------------------------------+\n| [1, 2, 3]    | [3, 4, 5]    |                                                                   0 |\n| [1, NULL, 2] | [NULL, 3, 1] |                                                                   3 |\n| [1, 2, 3]    | [9, 8, 7]    |                                                                   0 |\n| NULL         | NULL         |                                                                   0 |\n+--------------+--------------+---------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,FIRST_INDEX,ARRAY_FIRST_INDEX"))}d.isMDXComponent=!0}}]);