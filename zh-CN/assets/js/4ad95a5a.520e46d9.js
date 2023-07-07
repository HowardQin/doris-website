"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=l,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,c=new Array(o);c[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[p]="string"==typeof e?e:l,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const o={title:"COLLECT_SET",language:"zh-CN"},c=void 0,a={unversionedId:"sql-manual/sql-functions/aggregate-functions/collect_set",id:"sql-manual/sql-functions/aggregate-functions/collect_set",title:"COLLECT_SET",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/collect_set.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/collect_set",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/collect_set",draft:!1,tags:[],version:"current",frontMatter:{title:"COLLECT_SET",language:"zh-CN"},sidebar:"docs",previous:{title:"UNION",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/union"},next:{title:"MIN",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/min"}},i={},s=[{value:"COLLECT_SET",id:"collect_set",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"collect_set"},"COLLECT_SET"),(0,l.kt)("version",{since:"1.2.0"},(0,l.kt)("p",null,"COLLECT_SET")),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY<T> collect_set(expr[,max_size])")),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"expr"),"\u53bb\u91cd\u540e\u7684\u6570\u7ec4\u3002\u53ef\u9009\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"max_size"),"\uff0c\u901a\u8fc7\u8bbe\u7f6e\u8be5\u53c2\u6570\u80fd\u591f\u5c06\u7ed3\u679c\u6570\u7ec4\u7684\u5927\u5c0f\u9650\u5236\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"max_size")," \u4e2a\u5143\u7d20\u3002\n\u5f97\u5230\u7684\u7ed3\u679c\u6570\u7ec4\u4e2d\u4e0d\u5305\u542bNULL\u5143\u7d20\uff0c\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u987a\u5e8f\u4e0d\u56fa\u5b9a\u3002\u8be5\u51fd\u6570\u5177\u6709\u522b\u540d",(0,l.kt)("inlineCode",{parentName:"p"},"group_uniq_array"),"\u3002"),(0,l.kt)("h3",{id:"notice"},"notice"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528\n")),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select k1,k2,k3 from collect_set_test order by k1;\n+------+------------+-------+\n| k1   | k2         | k3    |\n+------+------------+-------+\n|    1 | 2023-01-01 | hello |\n|    2 | 2023-01-01 | NULL  |\n|    2 | 2023-01-02 | hello |\n|    3 | NULL       | world |\n|    3 | 2023-01-02 | hello |\n|    4 | 2023-01-02 | doris |\n|    4 | 2023-01-03 | sql   |\n+------+------------+-------+\n\nmysql> select collect_set(k1),collect_set(k1,2) from collect_set_test;\n+-------------------------+--------------------------+\n| collect_set(`k1`)       | collect_set(`k1`,2)      |\n+-------------------------+--------------------------+\n| [4,3,2,1]               | [1,2]                    |\n+----------------------------------------------------+\n\nmysql> select k1,collect_set(k2),collect_set(k3,1) from collect_set_test group by k1 order by k1;\n+------+-------------------------+--------------------------+\n| k1   | collect_set(`k2`)       | collect_set(`k3`,1)      |\n+------+-------------------------+--------------------------+\n|    1 | [2023-01-01]            | [hello]                  |\n|    2 | [2023-01-01,2023-01-02] | [hello]                  |\n|    3 | [2023-01-02]            | [world]                  |\n|    4 | [2023-01-02,2023-01-03] | [sql]                    |\n+------+-------------------------+--------------------------+\n\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("p",null,"COLLECT_SET,GROUP_UNIQ_ARRAY,COLLECT_LIST,ARRAY"))}d.isMDXComponent=!0}}]);