"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[12523],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},O=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(r),O=a,d=p["".concat(c,".").concat(O)]||p[O]||m[O]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=O;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}O.displayName="MDXCreateElement"},33709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={title:"SHOW-SQL-BLOCK-RULE",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",id:"sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",title:"SHOW-SQL-BLOCK-RULE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-SQL-BLOCK-RULE",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-SNAPSHOT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT"},next:{title:"SHOW-ROUTINE-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD"}},c={},i=[{value:"SHOW-SQL-BLOCK-RULE",id:"show-sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:i},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-sql-block-rule"},"SHOW-SQL-BLOCK-RULE"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW SQL  BLOCK RULE"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u67e5\u770b\u5df2\u914d\u7f6e\u7684SQL\u963b\u6b62\u89c4\u5219\uff0c\u4e0d\u6307\u5b9a\u89c4\u5219\u540d\u5219\u4e3a\u67e5\u770b\u6240\u6709\u89c4\u5219\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW SQL_BLOCK_RULE [FOR RULE_NAME];\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u67e5\u770b\u6240\u6709\u89c4\u5219\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW SQL_BLOCK_RULE;\n+------------+------------------------+---------+--------------+-----------+-------------+--------+--------+\n| Name       | Sql                    | SqlHash | PartitionNum | TabletNum | Cardinality | Global | Enable |\n+------------+------------------------+---------+--------------+-----------+-------------+--------+--------+\n| test_rule  | select * from order_analysis | NULL    | 0            | 0         | 0           | true   | true   |\n| test_rule2 | NULL                   | NULL    | 30           | 0         | 10000000000 | false  | true   |\n+------------+------------------------+---------+--------------+-----------+-------------+--------+--------+\n2 rows in set (0.01 sec)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6307\u5b9a\u89c4\u5219\u540d\u67e5\u8be2"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW SQL_BLOCK_RULE FOR test_rule2;\n+------------+------+---------+--------------+-----------+-------------+--------+--------+\n| Name       | Sql  | SqlHash | PartitionNum | TabletNum | Cardinality | Global | Enable |\n+------------+------+---------+--------------+-----------+-------------+--------+--------+\n| test_rule2 | NULL | NULL    | 30           | 0         | 10000000000 | false  | true   |\n+------------+------+---------+--------------+-----------+-------------+--------+--------+\n1 row in set (0.00 sec)\n\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, SQL_BLOCK_RULE\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);