"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[14431],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29974:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"CREATE-FILE",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE",title:"CREATE-FILE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-FILE",language:"en"},sidebar:"docs",previous:{title:"CREATE-DATABASE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE"},next:{title:"CREATE-INDEX",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX"}},o={},c=[{value:"CREATE-FILE",id:"create-file",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-file"},"CREATE-FILE"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CREATE FILE"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to create and upload a file to the Doris cluster.\nThis function is usually used to manage files that need to be used in some other commands, such as certificates, public and private keys, and so on."),(0,r.kt)("p",null,"This command can only be executed by users with ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," privileges.\nA certain file belongs to a certain database. This file can be used by any user with access rights to database."),(0,r.kt)("p",null,"A single file size is limited to 1MB.\nA Doris cluster can upload up to 100 files."),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FILE "file_name" [IN database]\n        [properties]\n')),(0,r.kt)("p",null,"illustrate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"file_name: custom file name."),(0,r.kt)("li",{parentName:"ul"},"database: The file belongs to a certain db, if not specified, the db of the current session is used."),(0,r.kt)("li",{parentName:"ul"},"properties supports the following parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"url: Required. Specifies the download path for a file. Currently only unauthenticated http download paths are supported. After the command executes successfully, the file will be saved in doris and the url will no longer be needed."),(0,r.kt)("li",{parentName:"ul"},"catalog: Required. The classification name of the file can be customized. However, in some commands, files in the specified catalog are looked up. For example, in the routine import, when the data source is kafka, the file under the catalog name kafka will be searched."),(0,r.kt)("li",{parentName:"ul"},"md5: optional. md5 of the file. If specified, verification will be performed after the file is downloaded.")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a file ca.pem , classified as kafka"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FILE "ca.pem"\nPROPERTIES\n(\n    "url" = "https://test.bj.bcebos.com/kafka-key/ca.pem",\n    "catalog" = "kafka"\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a file client.key, classified as my_catalog"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FILE "client.key"\nIN my_database\nPROPERTIES\n(\n    "url" = "https://test.bj.bcebos.com/kafka-key/client.key",\n    "catalog" = "my_catalog",\n    "md5" = "b5bb901bf10f99205b39a46ac3557dd9"\n);\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"CREATE, FILE\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This command can only be executed by users with amdin privileges. A certain file belongs to a certain database. This file can be used by any user with access rights to database.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"File size and quantity restrictions."),(0,r.kt)("p",{parentName:"li"},"This function is mainly used to manage some small files such as certificates. So a single file size is limited to 1MB. A Doris cluster can upload up to 100 files."))))}m.isMDXComponent=!0}}]);