"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94270],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>O});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,O=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(O,o(o({ref:t},s),{},{components:r})):n.createElement(O,o({ref:t},s))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79222:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"SHOW-ALTER",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-ALTER",id:"sql-manual/sql-reference/Show-Statements/SHOW-ALTER",title:"SHOW-ALTER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-ALTER.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-ALTER",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-ALTER",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW ALTER TABLE MATERIALIZED VIEW",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW"},next:{title:"SHOW-BACKUP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP"}},p={},c=[{value:"SHOW-ALTER",id:"show-alter",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-alter"},"SHOW-ALTER"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW ALTER"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5f53\u524d\u6b63\u5728\u8fdb\u884c\u7684\u5404\u7c7b\u4fee\u6539\u4efb\u52a1\u7684\u6267\u884c\u60c5\u51b5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER [CLUSTER | TABLE [COLUMN | ROLLUP] [FROM db_name]];\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"TABLE COLUMN\uff1a\u5c55\u793a\u4fee\u6539\u5217\u7684 ALTER \u4efb\u52a1"),(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301\u8bed\u6cd5","[WHERE TableName|CreateTime|FinishTime|State][ORDER BY]"," ","[LIMIT]"),(0,a.kt)("li",{parentName:"ol"},"TABLE ROLLUP\uff1a\u5c55\u793a\u521b\u5efa\u6216\u5220\u9664 ROLLUP index \u7684\u4efb\u52a1"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u6307\u5b9a db_name\uff0c\u4f7f\u7528\u5f53\u524d\u9ed8\u8ba4 db"),(0,a.kt)("li",{parentName:"ol"},"CLUSTER: \u5c55\u793a\u96c6\u7fa4\u64cd\u4f5c\u76f8\u5173\u4efb\u52a1\u60c5\u51b5\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff01\u5f85\u5b9e\u73b0...\uff09")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u9ed8\u8ba4 db \u7684\u6240\u6709\u4fee\u6539\u5217\u7684\u4efb\u52a1\u6267\u884c\u60c5\u51b5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE COLUMN;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u67d0\u4e2a\u8868\u6700\u8fd1\u4e00\u6b21\u4fee\u6539\u5217\u7684\u4efb\u52a1\u6267\u884c\u60c5\u51b5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW ALTER TABLE COLUMN WHERE TableName = "table1" ORDER BY CreateTime DESC LIMIT 1;\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9a db \u7684\u521b\u5efa\u6216\u5220\u9664 ROLLUP index \u7684\u4efb\u52a1\u6267\u884c\u60c5\u51b5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE ROLLUP FROM example_db;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u96c6\u7fa4\u64cd\u4f5c\u76f8\u5173\u4efb\u52a1\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff01\u5f85\u5b9e\u73b0...\uff09"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"SHOW ALTER CLUSTER;\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, ALTER\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);