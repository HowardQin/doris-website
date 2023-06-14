"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[96854],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),o=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={title:"CLEAN-QUERY-STATS",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Utility-Statements/CLEAN-QUERY-STATS",id:"sql-manual/sql-reference/Utility-Statements/CLEAN-QUERY-STATS",title:"CLEAN-QUERY-STATS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Utility-Statements/CLEAN-QUERY-STATS.md",sourceDirName:"sql-manual/sql-reference/Utility-Statements",slug:"/sql-manual/sql-reference/Utility-Statements/CLEAN-QUERY-STATS",permalink:"/docs/dev/sql-manual/sql-reference/Utility-Statements/CLEAN-QUERY-STATS",draft:!1,tags:[],version:"current",frontMatter:{title:"CLEAN-QUERY-STATS",language:"en"},sidebar:"docs",previous:{title:"SYNC",permalink:"/docs/dev/sql-manual/sql-reference/Utility-Statements/SYNC"},next:{title:"Cluster upgrade",permalink:"/docs/dev/admin-manual/cluster-management/upgrade"}},c={},o=[{value:"CLEAN-QUERY-STATS",id:"clean-query-stats",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:o},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"clean-query-stats"},"CLEAN-QUERY-STATS"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("version",{since:"dev"},"CLEAN QUERY STATS"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"This statement is used to clear query statistics"),(0,n.kt)("p",null,"grammar\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CLEAN [ALL| DATABASE | TABLE] QUERY STATS [[FOR db_name]|[FROM|IN] table_name]];\n")),(0,n.kt)("p",null,"Remarks\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If ALL is specified, all query statistics are cleared, including database and table, admin privilege is needed"),(0,n.kt)("li",{parentName:"ol"},"If DATABASE is specified, the query statistics of the specified database are cleared, alter privilege for this database is needed"),(0,n.kt)("li",{parentName:"ol"},"If TABLE is specified, the query statistics of the specified table are cleared, alter privilege for this table is needed")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clear all statistics")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"clean all query stats;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clear the specified database statistics"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"clean database query stats for test_query_db;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clear the specified table statistics"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"clean table query stats from test_query_db.baseall;\n")))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CLEAN, QUERY, STATS\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);