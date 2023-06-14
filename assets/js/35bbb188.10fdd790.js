"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[1758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW DATA SKEW",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW",title:"SHOW DATA SKEW",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW DATA SKEW",language:"en"},sidebar:"docs",previous:{title:"SHOW-DATABASES",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES"},next:{title:"SHOW-DATABASE-ID",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-DATABASE-ID"}},s={},c=[{value:"SHOW-DATA-SKEW",id:"show-data-skew",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-data-skew"},"SHOW-DATA-SKEW"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW DATA SKEW"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"This statement is used to view the data skew of a table or a partition.\n\ngrammar:\n\n    SHOW DATA SKEW FROM [db_name.]tbl_name [PARTITION (p1)];\n\nDescription:\n\n    1. Only one partition must be specified. For non-partitioned tables, the partition name is the same as the table name.\n    2. The result will show row count and data volume of each bucket under the specified partition, and the proportion of the data volume of each bucket in the total data volume.\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. View the data skew of the table\n\n    SHOW DATA SKEW FROM db1.test PARTITION(p1);\n")),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, DATA, SKEW\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);