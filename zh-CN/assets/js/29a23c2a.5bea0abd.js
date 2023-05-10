"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[43646],{3905:(r,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>x});var n=a(67294);function t(r,e,a){return e in r?Object.defineProperty(r,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[e]=a,r}function s(r,e){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.push.apply(a,n)}return a}function i(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){t(r,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}))}return r}function l(r,e){if(null==r)return{};var a,n,t=function(r,e){if(null==r)return{};var a,n,t={},s=Object.keys(r);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(t[a]=r[a]);return t}(r,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(r,a)&&(t[a]=r[a])}return t}var o=n.createContext({}),y=function(r){var e=n.useContext(o),a=e;return r&&(a="function"==typeof r?r(e):i(i({},e),r)),a},c=function(r){var e=y(r.components);return n.createElement(o.Provider,{value:e},r.children)},u="mdxType",p={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(r,e){var a=r.components,t=r.mdxType,s=r.originalType,o=r.parentName,c=l(r,["components","mdxType","originalType","parentName"]),u=y(a),d=t,x=u["".concat(o,".").concat(d)]||u[d]||p[d]||s;return a?n.createElement(x,i(i({ref:e},c),{},{components:a})):n.createElement(x,i({ref:e},c))}));function x(r,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof r||t){var s=a.length,i=new Array(s);i[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=r,l[u]="string"==typeof r?r:t,i[1]=l;for(var y=2;y<s;y++)i[y]=a[y];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18875:(r,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>y});var n=a(87462),t=(a(67294),a(3905));const s={title:"array_exists",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array_exists",id:"version-1.2/sql-manual/sql-functions/array-functions/array_exists",title:"array_exists",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/array_exists.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_exists",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_exists",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_exists",language:"zh-CN"},sidebar:"docs",previous:{title:"array_cum_sum",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_cum_sum"},next:{title:"array_first_index",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_first_index"}},o={},y=[{value:"array_exists",id:"array_exists",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:y},u="wrapper";function p(r){let{components:e,...a}=r;return(0,t.kt)(u,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"array_exists"},"array_exists"),(0,t.kt)("version",{since:"2.0"},(0,t.kt)("p",null,"array_exists(lambda,array1,array2....)\narray_exists(array1)")),(0,t.kt)("h3",{id:"description"},"description"),(0,t.kt)("h4",{id:"syntax"},"Syntax"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"BOOLEAN array_exists(lambda, ARRAY<T> arr1, ARRAY<T> arr2, ... )\nBOOLEAN array_exists(ARRAY<T> arr)\n")),(0,t.kt)("p",null,"\u4f7f\u7528\u4e00\u4e2a\u53ef\u9009lambda\u8868\u8fbe\u5f0f\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\uff0c\u5bf9\u5176\u4ed6\u7684\u8f93\u5165ARRAY\u53c2\u6570\u7684\u5185\u90e8\u6570\u636e\u505a\u5bf9\u5e94\u8868\u8fbe\u5f0f\u8ba1\u7b97\u3002\u5f53\u8ba1\u7b97\u8fd4\u56de\u975e0\u65f6\uff0c\u8fd4\u56de1\uff1b\u5426\u5219\u8fd4\u56de0\u3002\n\u5728lambda\u8868\u8fbe\u5f0f\u4e2d\u8f93\u5165\u7684\u53c2\u6570\u4e3a1\u4e2a\u6216\u591a\u4e2a\uff0c\u5fc5\u987b\u548c\u540e\u9762\u7684\u8f93\u5165array\u5217\u6570\u91cf\u4e00\u81f4\u3002\u5728lambda\u4e2d\u53ef\u4ee5\u6267\u884c\u5408\u6cd5\u7684\u6807\u91cf\u51fd\u6570\uff0c\u4e0d\u652f\u6301\u805a\u5408\u51fd\u6570\u7b49\u3002\n\u5728\u6ca1\u6709\u4f7f\u7528lambda\u4f5c\u4e3a\u53c2\u6570\u65f6\uff0carray1\u4f5c\u4e3a\u8ba1\u7b97\u7ed3\u679c\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"array_exists(x->x, array1);\narray_exists(x->(x%2 = 0), array1);\narray_exists(x->(abs(x)-1), array1);\narray_exists((x,y)->(x = y), array1, array2);\narray_exists(array1);\n")),(0,t.kt)("h3",{id:"example"},"example"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"\nmysql [test]>select *, array_exists(x->x>1,[1,2,3]) from array_test2 order by id;\n+------+-----------------+-------------------------+-----------------------------------------------+\n| id   | c_array1        | c_array2                | array_exists([x] -> x(0) > 1, ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+-----------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 1, 1]                                     |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 1, 1]                                     |\n|    3 | [1]             | [-100]                  | [0, 1, 1]                                     |\n|    4 | NULL            | NULL                    | [0, 1, 1]                                     |\n+------+-----------------+-------------------------+-----------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_exists(x->x%2=0,[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+---------------------------------------------------+\n| c_array1        | c_array2                | array_exists([x] -> x(0) % 2 = 0, ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+---------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 1, 0]                                         |\n| [6, 7, 8]       | [10, 12, 13]            | [0, 1, 0]                                         |\n| [1]             | [-100]                  | [0, 1, 0]                                         |\n| NULL            | NULL                    | [0, 1, 0]                                         |\n+-----------------+-------------------------+---------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_exists(x->abs(x)-1,[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------+\n| c_array1        | c_array2                | array_exists([x] -> abs(x(0)) - 1, ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 1, 1, 1, 1]                                    |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                                          |\n| [1, NULL]       | [-100]                  | [0, NULL]                                          |\n| NULL            | NULL                    | NULL                                               |\n+-----------------+-------------------------+----------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_exists((x,y)->x>y,c_array1,c_array2) from array_test2 order by id;\n+-----------------+-------------------------+-------------------------------------------------------------+\n| c_array1        | c_array2                | array_exists([x, y] -> x(0) > y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+-------------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 1]                                             |\n| [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                                                   |\n| [1]             | [-100]                  | [1]                                                         |\n| NULL            | NULL                    | NULL                                                        |\n+-----------------+-------------------------+-------------------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *, array_exists(c_array1) from array_test2 order by id;\n+------+-----------------+-------------------------+--------------------------+\n| id   | c_array1        | c_array2                | array_exists(`c_array1`) |\n+------+-----------------+-------------------------+--------------------------+\n|    1 | [1, 2, 3, 0, 5] | [10, 20, -40, 80, -100] | [1, 1, 1, 0, 1]          |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                |\n|    3 | [0, NULL]       | [-100]                  | [0, NULL]                |\n|    4 | NULL            | NULL                    | NULL                     |\n+------+-----------------+-------------------------+--------------------------+\n4 rows in set (0.02 sec)\n\n")),(0,t.kt)("h3",{id:"keywords"},"keywords"),(0,t.kt)("p",null,"ARRAY,ARRAY_EXISTS"))}p.isMDXComponent=!0}}]);