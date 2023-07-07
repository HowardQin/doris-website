"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[87041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},N="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),N=m(n),s=r,d=N["".concat(o,".").concat(s)]||N[s]||c[s]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[N]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},24485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={title:"CREATE-FUNCTION",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",title:"CREATE-FUNCTION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-FUNCTION",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW"},next:{title:"CREATE-FILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"}},o={},m=[{value:"CREATE-FUNCTION",id:"create-function",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:m},N="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(N,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-function"},"CREATE-FUNCTION"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CREATE FUNCTION"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u6b64\u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u51fd\u6570\u3002\u6267\u884c\u6b64\u547d\u4ee4\u9700\u8981\u7528\u6237\u62e5\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"ADMIN")," \u6743\u9650\u3002"),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"function_name")," \u4e2d\u5305\u542b\u4e86\u6570\u636e\u5e93\u540d\u5b57\uff0c\u90a3\u4e48\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u51fd\u6570\u4f1a\u521b\u5efa\u5728\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u4e2d\uff0c\u5426\u5219\u8fd9\u4e2a\u51fd\u6570\u5c06\u4f1a\u521b\u5efa\u5728\u5f53\u524d\u4f1a\u8bdd\u6240\u5728\u7684\u6570\u636e\u5e93\u3002\u65b0\u51fd\u6570\u7684\u540d\u5b57\u4e0e\u53c2\u6570\u4e0d\u80fd\u591f\u4e0e\u5f53\u524d\u547d\u540d\u7a7a\u95f4\u4e2d\u5df2\u5b58\u5728\u7684\u51fd\u6570\u76f8\u540c\uff0c\u5426\u5219\u4f1a\u521b\u5efa\u5931\u8d25\u3002\u4f46\u662f\u53ea\u6709\u540d\u5b57\u76f8\u540c\uff0c\u53c2\u6570\u4e0d\u540c\u662f\u80fd\u591f\u521b\u5efa\u6210\u529f\u7684\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE [GLOBAL] [AGGREGATE] [ALIAS] FUNCTION function_name\n    (arg_type [, ...])\n    [RETURNS ret_type]\n    [INTERMEDIATE inter_type]\n    [WITH PARAMETER(param [,...]) AS origin_function]\n    [PROPERTIES ("key" = "value" [, ...]) ]\n')),(0,r.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GLOBAL"),": \u5982\u679c\u6709\u6b64\u9879\uff0c\u8868\u793a\u7684\u662f\u521b\u5efa\u7684\u51fd\u6570\u662f\u5168\u5c40\u8303\u56f4\u5185\u751f\u6548\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AGGREGATE"),": \u5982\u679c\u6709\u6b64\u9879\uff0c\u8868\u793a\u7684\u662f\u521b\u5efa\u7684\u51fd\u6570\u662f\u4e00\u4e2a\u805a\u5408\u51fd\u6570\u3002"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALIAS"),"\uff1a\u5982\u679c\u6709\u6b64\u9879\uff0c\u8868\u793a\u7684\u662f\u521b\u5efa\u7684\u51fd\u6570\u662f\u4e00\u4e2a\u522b\u540d\u51fd\u6570\u3002")),(0,r.kt)("p",null," \t\t\u5982\u679c\u6ca1\u6709\u4e0a\u8ff0\u4e24\u9879\uff0c\u8868\u793a\u521b\u5efa\u7684\u51fd\u6570\u662f\u4e00\u4e2a\u6807\u91cf\u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"function_name"),": \u8981\u521b\u5efa\u51fd\u6570\u7684\u540d\u5b57, \u53ef\u4ee5\u5305\u542b\u6570\u636e\u5e93\u7684\u540d\u5b57\u3002\u6bd4\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"db1.my_func"),"\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"arg_type"),": \u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\uff0c\u4e0e\u5efa\u8868\u65f6\u5b9a\u4e49\u7684\u7c7b\u578b\u4e00\u81f4\u3002\u53d8\u957f\u53c2\u6570\u65f6\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},", ..."),"\u6765\u8868\u793a\uff0c\u5982\u679c\u662f\u53d8\u957f\u7c7b\u578b\uff0c\u90a3\u4e48\u53d8\u957f\u90e8\u5206\u53c2\u6570\u7684\u7c7b\u578b\u4e0e\u6700\u540e\u4e00\u4e2a\u975e\u53d8\u957f\u53c2\u6570\u7c7b\u578b\u4e00\u81f4\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"ALIAS FUNCTION")," \u4e0d\u652f\u6301\u53d8\u957f\u53c2\u6570\uff0c\u4e14\u81f3\u5c11\u6709\u4e00\u4e2a\u53c2\u6570\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ret_type"),": \u5bf9\u521b\u5efa\u65b0\u7684\u51fd\u6570\u6765\u8bf4\uff0c\u662f\u5fc5\u586b\u9879\u3002\u5982\u679c\u662f\u7ed9\u5df2\u6709\u51fd\u6570\u53d6\u522b\u540d\u5219\u53ef\u4e0d\u7528\u586b\u5199\u8be5\u53c2\u6570\u3002"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inter_type"),": \u7528\u4e8e\u8868\u793a\u805a\u5408\u51fd\u6570\u4e2d\u95f4\u9636\u6bb5\u7684\u6570\u636e\u7c7b\u578b\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"param"),"\uff1a\u7528\u4e8e\u8868\u793a\u522b\u540d\u51fd\u6570\u7684\u53c2\u6570\uff0c\u81f3\u5c11\u5305\u542b\u4e00\u4e2a\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"origin_function"),"\uff1a\u7528\u4e8e\u8868\u793a\u522b\u540d\u51fd\u6570\u5bf9\u5e94\u7684\u539f\u59cb\u51fd\u6570\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"properties"),": \u7528\u4e8e\u8bbe\u5b9a\u51fd\u6570\u76f8\u5173\u5c5e\u6027\uff0c\u80fd\u591f\u8bbe\u7f6e\u7684\u5c5e\u6027\u5305\u62ec\uff1a\t"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"file"),": \u8868\u793a\u7684\u5305\u542b\u7528\u6237UDF\u7684jar\u5305\uff0c\u5f53\u5728\u591a\u673a\u73af\u5883\u65f6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528http\u7684\u65b9\u5f0f\u4e0b\u8f7djar\u5305\u3002\u8fd9\u4e2a\u53c2\u6570\u662f\u5fc5\u987b\u8bbe\u5b9a\u7684\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),": \u8868\u793a\u7684\u662f\u5305\u542bUDF\u7c7b\u7684\u7c7b\u540d\u3002\u8fd9\u4e2a\u53c2\u6570\u662f\u5fc5\u987b\u8bbe\u5b9a\u7684")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"type"),": \u8868\u793a\u7684 UDF \u8c03\u7528\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a Native\uff0c\u4f7f\u7528 Java UDF\u65f6\u4f20 JAVA_UDF\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"always_nullable"),"\uff1a\u8868\u793a\u7684 UDF \u8fd4\u56de\u7ed3\u679c\u4e2d\u662f\u5426\u6709\u53ef\u80fd\u51fa\u73b0NULL\u503c\uff0c\u662f\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3atrue\u3002"))))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49UDF\u51fd\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION java_udf_add_one(int) RETURNS int PROPERTIES (\n    "file"="file:///path/to/java-udf-demo-jar-with-dependencies.jar",\n    "symbol"="org.apache.doris.udf.AddOne",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n')))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49UDAF\u51fd\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE AGGREGATE FUNCTION simple_sum(INT) RETURNS INT PROPERTIES (\n    "file"="file:///pathTo/java-udaf.jar",\n    "symbol"="org.apache.doris.udf.demo.SimpleDemo",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u522b\u540d\u51fd\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ALIAS FUNCTION id_masking(INT) WITH PARAMETER(id)  AS CONCAT(LEFT(id, 3), '****', RIGHT(id, 4));\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5168\u5c40\u81ea\u5b9a\u4e49\u522b\u540d\u51fd\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE GLOBAL ALIAS FUNCTION id_masking(INT) WITH PARAMETER(id) AS CONCAT(LEFT(id, 3), '****', RIGHT(id, 4));\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE, FUNCTION\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);