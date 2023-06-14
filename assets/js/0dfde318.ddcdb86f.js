"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"iceberg_meta",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/iceberg_meta",id:"version-1.2/sql-manual/sql-functions/table-functions/iceberg_meta",title:"iceberg_meta",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/table-functions/iceberg_meta.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/iceberg_meta",permalink:"/docs/1.2/sql-manual/sql-functions/table-functions/iceberg_meta",draft:!1,tags:[],version:"1.2",frontMatter:{title:"iceberg_meta",language:"en"},sidebar:"docs",previous:{title:"hdfs",permalink:"/docs/1.2/sql-manual/sql-functions/table-functions/hdfs"},next:{title:"backends",permalink:"/docs/1.2/sql-manual/sql-functions/table-functions/backends"}},o={},c=[{value:"iceberg_meta",id:"iceberg_meta",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Prac",id:"best-prac",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"iceberg_meta"},"iceberg_meta"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("version",{since:"1.2"},(0,r.kt)("p",null,"iceberg_meta")),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"iceberg_meta table-valued-function(tvf), Use for read iceberg metadata\uff0coperation history, snapshots of table, file metadata etc."),(0,r.kt)("h4",{id:"syntax"},"syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'iceberg_meta(\n  "table" = "ctl.db.tbl", \n  "query_type" = "snapshots"\n  ...\n  );\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"parameter description")),(0,r.kt)("p",null,"Each parameter in iceberg_meta tvf is a pair of ",(0,r.kt)("inlineCode",{parentName:"p"},'"key"="value"'),"."),(0,r.kt)("p",null,"Related parameters\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"table"),"\uff1a (required) Use iceberg table name the format ",(0,r.kt)("inlineCode",{parentName:"li"},"catlog.database.table"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_type"),"\uff1a (required) The type of iceberg metadata. Only ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshots")," is currently supported.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Read and access the iceberg tabular metadata for snapshots."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'select * from iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n\n')),(0,r.kt)("p",null,"Can be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"desc function")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'desc function iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n')),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iceberg_meta, table-valued-function, tvf\n")),(0,r.kt)("h3",{id:"best-prac"},"Best Prac"),(0,r.kt)("p",null,"Inspect the iceberg table snapshots :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots");\n+------------------------+----------------+---------------+-----------+-------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |\n+------------------------+----------------+---------------+-----------+-------------------+\n|  2022-09-20 11:14:29   |  64123452344   |       -1      |  append   | hdfs:/path/to/m1  |\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  |\n|  2022-09-21 21:44:11   |  51232845315   |  98865735822  | overwrite | hdfs:/path/to/m3  |\n+------------------------+----------------+---------------+-----------+-------------------+\n')),(0,r.kt)("p",null,"Filtered by snapshot_id :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots") \nwhere snapshot_id = 98865735822;\n+------------------------+----------------+---------------+-----------+-------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |\n+------------------------+----------------+---------------+-----------+-------------------+\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  |\n+------------------------+----------------+---------------+-----------+-------------------+\n')))}m.isMDXComponent=!0}}]);