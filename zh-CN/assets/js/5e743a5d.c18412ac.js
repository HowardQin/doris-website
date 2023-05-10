"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[12894],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>N});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,N=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return a?r.createElement(N,o(o({ref:t},s),{},{components:a})):r.createElement(N,o({ref:t},s))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u901a\u8fc7\u5916\u90e8\u8868\u540c\u6b65\u6570\u636e",language:"zh-CN"},o=void 0,p={unversionedId:"data-operate/import/import-scenes/external-table-load",id:"data-operate/import/import-scenes/external-table-load",title:"\u901a\u8fc7\u5916\u90e8\u8868\u540c\u6b65\u6570\u636e",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/import/import-scenes/external-table-load.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/external-table-load",permalink:"/zh-CN/docs/dev/data-operate/import/import-scenes/external-table-load",draft:!1,tags:[],version:"current",frontMatter:{title:"\u901a\u8fc7\u5916\u90e8\u8868\u540c\u6b65\u6570\u636e",language:"zh-CN"},sidebar:"docs",previous:{title:"\u8ba2\u9605Kafka\u65e5\u5fd7",permalink:"/zh-CN/docs/dev/data-operate/import/import-scenes/kafka-load"},next:{title:"\u4f7f\u7528 Insert \u65b9\u5f0f\u540c\u6b65\u6570\u636e",permalink:"/zh-CN/docs/dev/data-operate/import/import-scenes/jdbc-load"}},i={},c=[{value:"\u521b\u5efa\u5916\u90e8\u8868",id:"\u521b\u5efa\u5916\u90e8\u8868",level:2},{value:"\u5bfc\u5165\u6570\u636e",id:"\u5bfc\u5165\u6570\u636e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],s={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u901a\u8fc7\u5916\u90e8\u8868\u540c\u6b65\u6570\u636e"},"\u901a\u8fc7\u5916\u90e8\u8868\u540c\u6b65\u6570\u636e"),(0,n.kt)("p",null,"Doris \u53ef\u4ee5\u521b\u5efa\u5916\u90e8\u8868\u3002\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 SELECT \u8bed\u53e5\u76f4\u63a5\u67e5\u8be2\u5916\u90e8\u8868\u7684\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"INSERT INTO SELECT")," \u7684\u65b9\u5f0f\u5bfc\u5165\u5916\u90e8\u8868\u7684\u6570\u636e\u3002"),(0,n.kt)("p",null,"Doris \u5916\u90e8\u8868\u76ee\u524d\u652f\u6301\u7684\u6570\u636e\u6e90\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MySQL"),(0,n.kt)("li",{parentName:"ul"},"Oracle"),(0,n.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,n.kt)("li",{parentName:"ul"},"SQLServer"),(0,n.kt)("li",{parentName:"ul"},"Hive "),(0,n.kt)("li",{parentName:"ul"},"Iceberg"),(0,n.kt)("li",{parentName:"ul"},"ElasticSearch")),(0,n.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa\u901a\u8fc7 ODBC \u534f\u8bae\u8bbf\u95ee\u7684\u5916\u90e8\u8868\uff0c\u4ee5\u53ca\u5982\u4f55\u5bfc\u5165\u8fd9\u4e9b\u5916\u90e8\u8868\u7684\u6570\u636e\u3002"),(0,n.kt)("h2",{id:"\u521b\u5efa\u5916\u90e8\u8868"},"\u521b\u5efa\u5916\u90e8\u8868"),(0,n.kt)("p",null,"\u521b\u5efa ODBC \u5916\u90e8\u8868\u7684\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-EXTERNAL-TABLE"},"CREATE EXTERNAL TABLE")," \u8bed\u6cd5\u5e2e\u52a9\u624b\u518c\u3002"),(0,n.kt)("p",null,"\u8fd9\u91cc\u4ec5\u901a\u8fc7\u793a\u4f8b\u8bf4\u660e\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa ODBC Resource"),(0,n.kt)("p",{parentName:"li"},"ODBC Resource \u7684\u76ee\u7684\u662f\u7528\u4e8e\u7edf\u4e00\u7ba1\u7406\u5916\u90e8\u8868\u7684\u8fde\u63a5\u4fe1\u606f\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE `oracle_test_odbc`\nPROPERTIES (\n    "type" = "odbc_catalog",\n    "host" = "192.168.0.10",\n    "port" = "8086",\n    "user" = "oracle",\n    "password" = "oracle",\n    "database" = "oracle",\n    "odbc_type" = "oracle",\n    "driver" = "Oracle"\n);\n')))),(0,n.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"oracle_test_odbc")," \u7684 Resource\uff0c\u5176\u7c7b\u578b\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"odbc_catalog"),"\uff0c\u8868\u793a\u8fd9\u662f\u4e00\u4e2a\u7528\u4e8e\u5b58\u50a8 ODBC \u4fe1\u606f\u7684 Resource\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"odbc_type")," \u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"oracle"),"\uff0c\u8868\u793a\u8fd9\u4e2a OBDC Resource \u662f\u7528\u4e8e\u8fde\u63a5 Oracle \u6570\u636e\u5e93\u7684\u3002\u5173\u4e8e\u5176\u4ed6\u7c7b\u578b\u7684\u8d44\u6e90\uff0c\u5177\u4f53\u53ef\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/advanced/resource"},"\u8d44\u6e90\u7ba1\u7406")," \u6587\u6863\u3002"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5916\u90e8\u8868")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL TABLE `ext_oracle_demo` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n) ENGINE=ODBC\nCOMMENT "ODBC"\nPROPERTIES (\n    "odbc_catalog_resource" = "oracle_test_odbc",\n    "database" = "oracle",\n    "table" = "baseall"\n);\n')),(0,n.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u521b\u5efa\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"ext_oracle_demo")," \u5916\u90e8\u8868\uff0c\u5e76\u5f15\u7528\u4e86\u4e4b\u524d\u521b\u5efa\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"oracle_test_odbc")," Resource"),(0,n.kt)("h2",{id:"\u5bfc\u5165\u6570\u636e"},"\u5bfc\u5165\u6570\u636e"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa Doris \u8868"),(0,n.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u6211\u4eec\u521b\u5efa\u4e00\u5f20 Doris \u7684\u8868\uff0c\u5217\u4fe1\u606f\u548c\u4e0a\u4e00\u6b65\u521b\u5efa\u7684\u5916\u90e8\u8868 ",(0,n.kt)("inlineCode",{parentName:"p"},"ext_oracle_demo")," \u4e00\u6837\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `doris_oralce_tbl` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n)\nCOMMENT "Doris Table"\nDISTRIBUTED BY HASH(k1) BUCKETS 2\nPROPERTIES (\n    "replication_num" = "1"\n);\n')),(0,n.kt)("p",{parentName:"li"},"\u5173\u4e8e\u521b\u5efa Doris \u8868\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE-TABLE")," \u8bed\u6cd5\u5e2e\u52a9\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5bfc\u5165\u6570\u636e (\u4ece ",(0,n.kt)("inlineCode",{parentName:"p"},"ext_oracle_demo"),"\u8868 \u5bfc\u5165\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"doris_oralce_tbl")," \u8868)"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO doris_oralce_tbl SELECT k1,k2,k3 FROM ext_oracle_demo limit 100;\n")),(0,n.kt)("p",null,"   INSERT \u547d\u4ee4\u662f\u540c\u6b65\u547d\u4ee4\uff0c\u8fd4\u56de\u6210\u529f\uff0c\u5373\u8868\u793a\u5bfc\u5165\u6210\u529f\u3002"),(0,n.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u4fdd\u8bc1\u5916\u90e8\u6570\u636e\u6e90\u4e0e Doris \u96c6\u7fa4\u662f\u53ef\u4ee5\u4e92\u901a\uff0c\u5305\u62ecBE\u8282\u70b9\u548c\u5916\u90e8\u6570\u636e\u6e90\u7684\u7f51\u7edc\u662f\u4e92\u901a\u7684\u3002"),(0,n.kt)("li",{parentName:"ul"},"ODBC \u5916\u90e8\u8868\u672c\u8d28\u4e0a\u662f\u901a\u8fc7\u5355\u4e00 ODBC \u5ba2\u6237\u7aef\u8bbf\u95ee\u6570\u636e\u6e90\uff0c\u56e0\u6b64\u5e76\u4e0d\u5408\u9002\u4e00\u6b21\u6027\u5bfc\u5165\u5927\u91cf\u7684\u6570\u636e\uff0c\u5efa\u8bae\u5206\u6279\u591a\u6b21\u5bfc\u5165\u3002")),(0,n.kt)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,n.kt)("p",null,"\u5173\u4e8e CREATE EXTERNAL TABLE \u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u548c\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-EXTERNAL-TABLE"},"CREATE EXTERNAL TABLE")," \u547d\u4ee4\u624b\u518c\u3002"))}m.isMDXComponent=!0}}]);