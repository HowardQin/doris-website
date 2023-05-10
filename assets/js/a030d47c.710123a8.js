"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[32253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?l.createElement(m,a(a({ref:t},u),{},{components:n})):l.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const o={title:"COLLECT_LIST",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/collect_list",id:"sql-manual/sql-functions/aggregate-functions/collect_list",title:"COLLECT_LIST",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/aggregate-functions/collect_list.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/collect_list",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/collect_list",draft:!1,tags:[],version:"current",frontMatter:{title:"COLLECT_LIST",language:"en"},sidebar:"docs",previous:{title:"GROUP_CONCAT",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/group_concat"},next:{title:"MIN_BY",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/min_by"}},c={},s=[{value:"COLLECT_LIST",id:"collect_list",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"collect_list"},"COLLECT_LIST"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ARRAY<T> collect_list(expr)")),(0,r.kt)("p",null,"Returns an array consisting of all values in expr within the group, and ,with the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"max_size")," parameter limits the size of the resulting array to ",(0,r.kt)("inlineCode",{parentName:"p"},"max_size")," elements.The order of elements in the array is non-deterministic. NULL values are excluded.\nIt has an alias ",(0,r.kt)("inlineCode",{parentName:"p"},"group_array"),"."),(0,r.kt)("h3",{id:"notice"},"notice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Only supported in vectorized engine\n")),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select k1,k2,k3 from collect_list_test order by k1;\n+------+------------+-------+\n| k1   | k2         | k3    |\n+------+------------+-------+\n|    1 | 2023-01-01 | hello |\n|    2 | 2023-01-02 | NULL  |\n|    2 | 2023-01-02 | hello |\n|    3 | NULL       | world |\n|    3 | 2023-01-02 | hello |\n|    4 | 2023-01-02 | sql   |\n|    4 | 2023-01-03 | sql   |\n+------+------------+-------+\n\nmysql> select collect_list(k1),collect_list(k1,2) from collect_list_test;\n+-------------------------+--------------------------+\n| collect_list(`k1`)      | collect_list(`k1`,3)     |\n+-------------------------+--------------------------+\n| [1,2,2,3,3,4,4]         | [1,2,2]                  |\n+-------------------------+--------------------------+\n\nmysql> select k1,collect_list(k2),collect_list(k3,1) from collect_list_test group by k1 order by k1;\n+------+-------------------------+--------------------------+\n| k1   | collect_list(`k2`)      | collect_list(`k3`,1)     |\n+------+-------------------------+--------------------------+\n|    1 | [2023-01-01]            | [hello]                  |\n|    2 | [2023-01-02,2023-01-02] | [hello]                  |\n|    3 | [2023-01-02]            | [world]                  |\n|    4 | [2023-01-02,2023-01-03] | [sql]                    |\n+------+-------------------------+--------------------------+\n\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("p",null,"COLLECT_LIST,GROUP_ARRAY,COLLECT_SET,ARRAY"))}d.isMDXComponent=!0}}]);