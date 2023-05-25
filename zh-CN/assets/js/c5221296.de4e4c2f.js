"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[4206],{3905:(r,a,n)=>{n.d(a,{Zo:()=>i,kt:()=>u});var e=n(67294);function t(r,a,n){return a in r?Object.defineProperty(r,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[a]=n,r}function y(r,a){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.push.apply(n,e)}return n}function s(r){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?y(Object(n),!0).forEach((function(a){t(r,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))}))}return r}function c(r,a){if(null==r)return{};var n,e,t=function(r,a){if(null==r)return{};var n,e,t={},y=Object.keys(r);for(e=0;e<y.length;e++)n=y[e],a.indexOf(n)>=0||(t[n]=r[n]);return t}(r,a);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(r);for(e=0;e<y.length;e++)n=y[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}var o=e.createContext({}),l=function(r){var a=e.useContext(o),n=a;return r&&(n="function"==typeof r?r(a):s(s({},a),r)),n},i=function(r){var a=l(r.components);return e.createElement(o.Provider,{value:a},r.children)},p="mdxType",m={inlineCode:"code",wrapper:function(r){var a=r.children;return e.createElement(e.Fragment,{},a)}},_=e.forwardRef((function(r,a){var n=r.components,t=r.mdxType,y=r.originalType,o=r.parentName,i=c(r,["components","mdxType","originalType","parentName"]),p=l(n),_=t,u=p["".concat(o,".").concat(_)]||p[_]||m[_]||y;return n?e.createElement(u,s(s({ref:a},i),{},{components:n})):e.createElement(u,s({ref:a},i))}));function u(r,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof r||t){var y=n.length,s=new Array(y);s[0]=_;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=r,c[p]="string"==typeof r?r:t,s[1]=c;for(var l=2;l<y;l++)s[l]=n[l];return e.createElement.apply(null,s)}return e.createElement.apply(null,n)}_.displayName="MDXCreateElement"},33616:(r,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>y,metadata:()=>c,toc:()=>l});var e=n(87462),t=(n(67294),n(3905));const y={title:"array_map",language:"zh-CN"},s=void 0,c={unversionedId:"sql-manual/sql-functions/array-functions/array_map",id:"sql-manual/sql-functions/array-functions/array_map",title:"array_map",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array_map.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_map",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_map",draft:!1,tags:[],version:"current",frontMatter:{title:"array_map",language:"zh-CN"},sidebar:"docs",previous:{title:"array_min",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_min"},next:{title:"array_filter",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_filter"}},o={},l=[{value:"array_map",id:"array_map",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:l},p="wrapper";function m(r){let{components:a,...n}=r;return(0,t.kt)(p,(0,e.Z)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"array_map"},"array_map"),(0,t.kt)("version",{since:"dev"},(0,t.kt)("p",null,"array_map(lambda,array1,array2....)")),(0,t.kt)("h3",{id:"description"},"description"),(0,t.kt)("h4",{id:"syntax"},"Syntax"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"ARRAY<T> array_map(lambda, ARRAY<T> array1, ARRAY<T> array2)")),(0,t.kt)("p",null,"\u4f7f\u7528\u4e00\u4e2alambda\u8868\u8fbe\u5f0f\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\uff0c\u5bf9\u5176\u4ed6\u7684\u8f93\u5165ARRAY\u53c2\u6570\u7684\u5185\u90e8\u6570\u636e\u505a\u5bf9\u5e94\u8868\u8fbe\u5f0f\u8ba1\u7b97\u3002\n\u5728lambda\u8868\u8fbe\u5f0f\u4e2d\u8f93\u5165\u7684\u53c2\u6570\u4e3a1\u4e2a\u6216\u591a\u4e2a\uff0c\u5fc5\u987b\u548c\u540e\u9762\u7684\u8f93\u5165array\u5217\u6570\u91cf\u4e00\u81f4\u3002\n\u5728lambda\u4e2d\u53ef\u4ee5\u6267\u884c\u5408\u6cd5\u7684\u6807\u91cf\u51fd\u6570\uff0c\u4e0d\u652f\u6301\u805a\u5408\u51fd\u6570\u7b49\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"array_map(x->x, array1);\narray_map(x->(x+2), array1);\narray_map(x->(abs(x)-2), array1);\n\narray_map((x,y)->(x = y), array1, array2);\narray_map((x,y)->(power(x,2)+y), array1, array2);\narray_map((x,y,z)->(abs(x)+y*z), array1, array2, array3);\n")),(0,t.kt)("h3",{id:"example"},"example"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"\nmysql [test]>select *, array_map(x->x,[1,2,3]) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0), ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 2, 3]                              |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 2, 3]                              |\n|    3 | [1]             | [-100]                  | [1, 2, 3]                              |\n|    4 | NULL            | NULL                    | [1, 2, 3]                              |\n+------+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *, array_map(x->x+2,[1,2,3]) from array_test2 order by id;\n+------+-----------------+-------------------------+--------------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) + 2, ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+--------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [3, 4, 5]                                  |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [3, 4, 5]                                  |\n|    3 | [1]             | [-100]                  | [3, 4, 5]                                  |\n|    4 | NULL            | NULL                    | [3, 4, 5]                                  |\n+------+-----------------+-------------------------+--------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_map(x->x,[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------+\n| c_array1        | c_array2                | array_map([x] -> x(0), ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 2, 3]                              |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 2, 3]                              |\n| [1]             | [-100]                  | [1, 2, 3]                              |\n| NULL            | NULL                    | [1, 2, 3]                              |\n+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.01 sec)\n\nmysql [test]>select c_array1, c_array2, array_map(x->power(x,2),[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------+\n| c_array1        | c_array2                | array_map([x] -> power(x(0), 2.0), ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 4, 9]                                          |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 4, 9]                                          |\n| [1]             | [-100]                  | [1, 4, 9]                                          |\n| NULL            | NULL                    | [1, 4, 9]                                          |\n+-----------------+-------------------------+----------------------------------------------------+\n\nmysql [test]>select c_array1, c_array2, array_map((x,y)->x+y,c_array1,c_array2) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------------+\n| c_array1        | c_array2                | array_map([x, y] -> x(0) + y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+----------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [11, 22, -37, 84, -95]                                   |\n| [6, 7, 8]       | [10, 12, 13]            | [16, 19, 21]                                             |\n| [1]             | [-100]                  | [-99]                                                    |\n| NULL            | NULL                    | NULL                                                     |\n+-----------------+-------------------------+----------------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_map((x,y)->power(x,2)+y,c_array1, c_array2) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| c_array1        | c_array2                | array_map([x, y] -> power(x(0), 2.0) + y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [11, 24, -31, 96, -75]                                               |\n| [6, 7, 8]       | [10, 12, 13]            | [46, 61, 77]                                                         |\n| [1]             | [-100]                  | [-99]                                                                |\n| NULL            | NULL                    | NULL                                                                 |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n4 rows in set (0.03 sec)\n\nmysql [test]>select *,array_map(x->x=3,c_array1) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) = 3, `c_array1`) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 0]                        |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                              |\n|    3 | [1]             | [-100]                  | [0]                                    |\n|    4 | NULL            | NULL                    | NULL                                   |\n+------+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *,array_map(x->x>3,c_array1) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) > 3, `c_array1`) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 0, 1, 1]                        |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                              |\n|    3 | [1]             | [-100]                  | [0]                                    |\n|    4 | NULL            | NULL                    | NULL                                   |\n+------+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *,array_map((x,y)->x>y,c_array1,c_array2) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x, y] -> x(0) > y(1), `c_array1`, `c_array2`) |\n+------+-----------------+-------------------------+----------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 1]                                          |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                                                |\n|    3 | [1]             | [-100]                  | [1]                                                      |\n|    4 | NULL            | NULL                    | NULL                                                     |\n+------+-----------------+-------------------------+----------------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select array_map(x->cast(x as string), c_array1) from test_array_map_function;\n+-----------------+-------------------------------------------------------+\n| c_array1        | array_map([x] -> CAST(x(0) AS CHARACTER), `c_array1`) |\n+-----------------+-------------------------------------------------------+\n| [1, 2, 3, 4, 5] | ['1', '2', '3', '4', '5']                             |\n| [6, 7, 8]       | ['6', '7', '8']                                       |\n| []              | []                                                    |\n| NULL            | NULL                                                  |\n+-----------------+-------------------------------------------------------+\n4 rows in set (0.01 sec)\n\n")),(0,t.kt)("h3",{id:"keywords"},"keywords"),(0,t.kt)("p",null,"ARRAY,MAP,ARRAY_MAP"))}m.isMDXComponent=!0}}]);