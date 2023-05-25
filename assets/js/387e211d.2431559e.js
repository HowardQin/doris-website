"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[45848],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(r),c=o,b=u["".concat(i,".").concat(c)]||u[c]||m[c]||n;return r?a.createElement(b,l(l({ref:t},d),{},{components:r})):a.createElement(b,l({ref:t},d))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},15366:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const n={title:"Use mysqldump data to export table structure or data",language:"en"},l=void 0,p={unversionedId:"data-operate/export/export_with_mysql_dump",id:"version-1.2/data-operate/export/export_with_mysql_dump",title:"Use mysqldump data to export table structure or data",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/data-operate/export/export_with_mysql_dump.md",sourceDirName:"data-operate/export",slug:"/data-operate/export/export_with_mysql_dump",permalink:"/docs/1.2/data-operate/export/export_with_mysql_dump",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Use mysqldump data to export table structure or data",language:"en"},sidebar:"docs",previous:{title:"Export Query Result",permalink:"/docs/1.2/data-operate/export/outfile"},next:{title:"Batch Delete",permalink:"/docs/1.2/data-operate/update-delete/batch-delete-manual"}},i={},s=[{value:"Example",id:"example",level:2},{value:"Export",id:"export",level:3},{value:"Import",id:"import",level:3},{value:"Notice",id:"notice",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-mysqldump-data-to-export-table-structure-or-data"},"Use mysqldump data to export table structure or data"),(0,o.kt)("p",null,"Doris has supported exporting data or table structures through the ",(0,o.kt)("inlineCode",{parentName:"p"},"mysqldump")," tool after version 0.15"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"export"},"Export"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Export the table1 table in the test database: ",(0,o.kt)("inlineCode",{parentName:"li"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1")),(0,o.kt)("li",{parentName:"ol"},"Export the table1 table structure in the test database: ",(0,o.kt)("inlineCode",{parentName:"li"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1 --no-data")),(0,o.kt)("li",{parentName:"ol"},"Export all tables in the test1, test2 database: ",(0,o.kt)("inlineCode",{parentName:"li"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test1 test2")),(0,o.kt)("li",{parentName:"ol"},"Export all databases and tables ",(0,o.kt)("inlineCode",{parentName:"li"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --all-databases"),"\nFor more usage parameters, please refer to the manual of ",(0,o.kt)("inlineCode",{parentName:"li"},"mysqldump"))),(0,o.kt)("h3",{id:"import"},"Import"),(0,o.kt)("p",null,"The results exported by ",(0,o.kt)("inlineCode",{parentName:"p"},"mysqldump")," can be redirected to a file, which can then be imported into Doris through the source command ",(0,o.kt)("inlineCode",{parentName:"p"},"source filename.sql")),(0,o.kt)("h2",{id:"notice"},"Notice"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Since there is no concept of tablespace in mysql in Doris, add the ",(0,o.kt)("inlineCode",{parentName:"li"},"--no-tablespaces")," parameter when using ",(0,o.kt)("inlineCode",{parentName:"li"},"mysqldump")),(0,o.kt)("li",{parentName:"ol"},"Using mysqldump to export data and table structure is only used for development and testing or when the amount of data is small. Do not use it in a production environment with a large amount of data.")))}m.isMDXComponent=!0}}]);