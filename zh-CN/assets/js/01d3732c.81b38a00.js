"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[89604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,O=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(O,o(o({ref:t},s),{},{components:n})):r.createElement(O,o({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={title:"SHOW-TABLETS",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-TABLETS",id:"sql-manual/sql-reference/Show-Statements/SHOW-TABLETS",title:"SHOW-TABLETS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-TABLETS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-OPEN-TABLES",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-OPEN-TABLES"},next:{title:"SHOW-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD"}},c={},i=[{value:"SHOW-TABLETS",id:"show-tablets",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-tablets"},"SHOW-TABLETS"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW TABLETS"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5217\u51fa\u6307\u5b9atable\u7684\u6240\u6709tablets\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff09"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLETS FROM [database.]table [PARTITIONS(p1,p2)]\n[WHERE where_condition]\n[ORDER BY col_name]\n[LIMIT [offset,] row_count]\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Syntax Description:"))),(0,a.kt)("p",null,"where_condition \u53ef\u4ee5\u4e3a\u4e0b\u5217\u6761\u4ef6\u4e4b\u4e00:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Version = version\nstate = "NORMAL|ROLLUP|CLONE|DECOMMISSION"\nBackendId = backend_id\nIndexName = rollup_name\n')),(0,a.kt)("p",null,"\u6216\u8005\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"AND"),"\u7ec4\u5408\u7684\u590d\u5408\u6761\u4ef6."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5217\u51fa\u6307\u5b9atable\u6240\u6709\u7684tablets"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLETS FROM example_db.table_name;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5217\u51fa\u6307\u5b9apartitions\u7684\u6240\u6709tablets"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLETS FROM example_db.table_name PARTITIONS(p1, p2);\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5217\u51fa\u67d0\u4e2abackend\u4e0a\u72b6\u6001\u4e3aDECOMMISSION\u7684tablets"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW TABLETS FROM example_db.table_name WHERE state="DECOMMISSION" AND BackendId=11003;\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, TABLETS\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);