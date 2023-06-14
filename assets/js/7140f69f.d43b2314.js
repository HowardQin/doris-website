"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[19092],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>S});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,S=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(S,i(i({ref:t},p),{},{components:a})):r.createElement(S,i({ref:t},p))}));function S(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},25845:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={title:"ADMIN-SET-REPLICA-STATUS",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS",id:"version-1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS",title:"ADMIN-SET-REPLICA-STATUS",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS",permalink:"/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ADMIN-SET-REPLICA-STATUS",language:"en"},sidebar:"docs",previous:{title:"UNINSTALL-PLUGIN",permalink:"/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/UNINSTALL-PLUGIN"},next:{title:"ADMIN-SHOW-REPLICA-DISTRIBUTION",permalink:"/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-DISTRIBUTION"}},s={},c=[{value:"ADMIN-SET-REPLICA-STATUS",id:"admin-set-replica-status",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"admin-set-replica-status"},"ADMIN-SET-REPLICA-STATUS"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"ADMIN SET REPLICA STATUS"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"This statement is used to set the state of the specified replica."),(0,n.kt)("p",null,"This command is currently only used to manually set the status of certain replicas to BAD or OK, allowing the system to automatically repair these replicas"),(0,n.kt)("p",null,"grammar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA STATUS\n        PROPERTIES ("key" = "value", ...);\n')),(0,n.kt)("p",null," The following properties are currently supported:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'"tablet_id": Required. Specify a Tablet Id.'),(0,n.kt)("li",{parentName:"ol"},'"backend_id": Required. Specify Backend Id.'),(0,n.kt)("li",{parentName:"ol"},'"status": Required. Specifies the state. Currently only "bad" or "ok" are supported')),(0,n.kt)("p",null,"If the specified replica does not exist, or the status is already bad, it will be ignored."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note:"),(0,n.kt)("p",{parentName:"blockquote"},"The copy set to Bad status may be deleted immediately, please proceed with caution.")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set the replica status of tablet 10003 on BE 10001 to bad."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "bad");\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set the replica status of tablet 10003 on BE 10001 to ok."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "ok");\n')))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ADMIN, SET, REPLICA, STATUS\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);