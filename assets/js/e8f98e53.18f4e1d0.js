"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[32859],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(t),g=a,m=p["".concat(c,".").concat(g)]||p[g]||f[g]||o;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},24911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const o={title:"GROUP_CONCAT",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/group_concat",id:"version-1.2/sql-manual/sql-functions/aggregate-functions/group_concat",title:"GROUP_CONCAT",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/aggregate-functions/group_concat.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/group_concat",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/group_concat",draft:!1,tags:[],version:"1.2",frontMatter:{title:"GROUP_CONCAT",language:"en"},sidebar:"docs",previous:{title:"STDDEV,STDDEV_POP",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/stddev"},next:{title:"COLLECT_LIST",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/collect_list"}},c={},i=[{value:"GROUP_CONCAT",id:"group_concat",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3}],u={toc:i},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"group_concat"},"GROUP_CONCAT"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR GROUP_CONCAT([DISTINCT] VARCHAR str[, VARCHAR sep]) [ORDER BY { col_name | expr} [ASC | DESC])")),(0,a.kt)("p",null,"This function is an aggregation function similar to sum (), and group_concat links multiple rows of results in the result set to a string. The second parameter, sep, is a connection symbol between strings, which can be omitted. This function usually needs to be used with group by statements."),(0,a.kt)("version",{since:"1.2"}),"Support Order By for sorting multi-row results, sorting and aggregation columns can be different.",(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select value from test;\n+-------+\n| value |\n+-------+\n| a     |\n| b     |\n| c     |\n| c     |\n+-------+\n\nmysql> select GROUP_CONCAT(value) from test;\n+-----------------------+\n| GROUP_CONCAT(`value`) |\n+-----------------------+\n| a, b, c, c              |\n+-----------------------+\n\nmysql> select GROUP_CONCAT(value, \" \") from test;\n+----------------------------+\n| GROUP_CONCAT(`value`, ' ') |\n+----------------------------+\n| a b c c                     |\n+----------------------------+\n\nmysql> select GROUP_CONCAT(DISTINCT value) from test;\n+-----------------------+\n| GROUP_CONCAT(`value`) |\n+-----------------------+\n| a, b, c               |\n+-----------------------+\n\nmysql> select GROUP_CONCAT(value, NULL) from test;\n+----------------------------+\n| GROUP_CONCAT(`value`, NULL)|\n+----------------------------+\n| NULL                       |\n+----------------------------+\n\nSELECT abs(k3), group_concat(distinct cast(abs(k2) as varchar) order by abs(k1), k5) FROM bigtable group by abs(k3) order by abs(k3);     +------------+-------------------------------------------------------------------------------+\n| abs(`k3`)  | group_concat(DISTINCT CAST(abs(`k2`) AS CHARACTER), ORDER BY abs(`k1`), `k5`) |\n+------------+-------------------------------------------------------------------------------+\n|        103 | 255                                                                           |\n|       1001 | 1989, 1986                                                                    |\n|       1002 | 1989, 32767                                                                   |\n|       3021 | 1991, 32767, 1992                                                             |\n|       5014 | 1985, 1991                                                                    |\n|      25699 | 1989                                                                          |\n| 2147483647 | 255, 1991, 32767, 32767                                                       |\n+------------+-------------------------------------------------------------------------------+\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"### keywords\nGROUP_CONCAT,GROUP,CONCAT\n")))}f.isMDXComponent=!0}}]);