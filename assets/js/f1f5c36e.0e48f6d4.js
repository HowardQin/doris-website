"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[74238],{3905:(e,r,a)=>{a.d(r,{Zo:()=>f,kt:()=>d});var n=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var u=n.createContext({}),c=function(e){var r=n.useContext(u),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},f=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},i="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),i=c(a),p=t,d=i["".concat(u,".").concat(p)]||i[p]||y[p]||l;return a?n.createElement(d,s(s({ref:r},f),{},{components:a})):n.createElement(d,s({ref:r},f))}));function d(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,s=new Array(l);s[0]=p;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[i]="string"==typeof e?e:t,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37938:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),t=(a(67294),a(3905));const l={title:"array_shuffle",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_shuffle",id:"sql-manual/sql-functions/array-functions/array_shuffle",title:"array_shuffle",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/array-functions/array_shuffle.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_shuffle",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_shuffle",draft:!1,tags:[],version:"current",frontMatter:{title:"array_shuffle",language:"en"},sidebar:"docs",previous:{title:"array_zip",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_zip"},next:{title:"array_cum_sum",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_cum_sum"}},u={},c=[{value:"array_shuffle",id:"array_shuffle",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],f={toc:c},i="wrapper";function y(e){let{components:r,...a}=e;return(0,t.kt)(i,(0,n.Z)({},f,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"array_shuffle"},"array_shuffle"),(0,t.kt)("version",{since:"2.0"},(0,t.kt)("p",null,"array_shuffle\nshuffle")),(0,t.kt)("h3",{id:"description"},"description"),(0,t.kt)("h4",{id:"syntax"},"Syntax"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"ARRAY<T> array_shuffle(ARRAY<T> array1, [INT seed])\nARRAY<T> shuffle(ARRAY<T> array1, [INT seed])\n")),(0,t.kt)("p",null,"Randomly arrange the elements in the array. Among them, the parameter array1 is the array to be randomly arranged, and the optional parameter seed is to set the initial value used by the pseudo-random number generator to generate pseudo-random numbers.\nShuffle has the same function as array_shuffle."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"array_shuffle(array1);\narray_shuffle(array1, 0);\nshuffle(array1);\nshuffle(array1, 0);\n")),(0,t.kt)("h3",{id:"example"},"example"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"\nmysql [test]> select c_array1, array_shuffle(c_array1) from array_test; \n+-----------------------+---------------------------+\n| c_array1              | array_shuffle(`c_array1`) |\n+-----------------------+---------------------------+\n| [1, 2, 3, 4, 5, NULL] | [2, NULL, 5, 3, 4, 1]     |\n| [6, 7, 8, NULL]       | [7, NULL, 8, 6]           |\n| [1, NULL]             | [1, NULL]                 |\n| NULL                  | NULL                      |\n+-----------------------+---------------------------+\n4 rows in set (0.01 sec)\n\nMySQL [test]> select c_array1, array_shuffle(c_array1, 0) from array_test; \n+-----------------------+------------------------------+\n| c_array1              | array_shuffle(`c_array1`, 0) |\n+-----------------------+------------------------------+\n| [1, 2, 3, 4, 5, NULL] | [1, 3, 2, NULL, 4, 5]        |\n| [6, 7, 8, NULL]       | [6, 8, 7, NULL]              |\n| [1, NULL]             | [1, NULL]                    |\n| NULL                  | NULL                         |\n+-----------------------+------------------------------+\n4 rows in set (0.01 sec)\n\n")),(0,t.kt)("h3",{id:"keywords"},"keywords"),(0,t.kt)("p",null,"ARRAY,ARRAY_SHUFFLE,SHUFFLE"))}y.isMDXComponent=!0}}]);