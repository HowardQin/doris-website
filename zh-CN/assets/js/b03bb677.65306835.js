"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[85888],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},N="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),N=s(a),u=r,k=N["".concat(p,".").concat(u)]||N[u]||c[u]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[N]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82729:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"MYSQL-LOAD",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD",title:"MYSQL-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD",draft:!1,tags:[],version:"1.2",frontMatter:{title:"MYSQL-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"STREAM-LOAD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},next:{title:"INSERT",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"}},p={},s=[{value:"MYSQL-LOAD",id:"mysql-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"PROPERTIES",id:"properties",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],m={toc:s},N="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(N,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mysql-load"},"MYSQL-LOAD"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("version",{since:"dev"},"MYSQL LOAD"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"mysql-load: \u4f7f\u7528MySql\u5ba2\u6237\u7aef\u5bfc\u5165\u672c\u5730\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"LOAD DATA\n[LOCAL]\nINFILE 'file_name'\nINTO TABLE tbl_name\n[PARTITION (partition_name [, partition_name] ...)]\n[COLUMNS TERMINATED BY 'string']\n[LINES TERMINATED BY 'string']\n[IGNORE number {LINES | ROWS}]\n[(col_name_or_user_var [, col_name_or_user_var] ...)]\n[SET (col_name={expr | DEFAULT} [, col_name={expr | DEFAULT}] ...)]\n[PROPERTIES (key1 = value1 [, key2=value2]) ]\n")),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5411\u6307\u5b9a\u7684 table \u5bfc\u5165\u6570\u636e\uff0c\u4e0e\u666e\u901aLoad\u533a\u522b\u662f\uff0c\u8fd9\u79cd\u5bfc\u5165\u65b9\u5f0f\u662f\u540c\u6b65\u5bfc\u5165\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u5bfc\u5165\u65b9\u5f0f\u4ecd\u7136\u80fd\u591f\u4fdd\u8bc1\u4e00\u6279\u5bfc\u5165\u4efb\u52a1\u7684\u539f\u5b50\u6027\uff0c\u8981\u4e48\u5168\u90e8\u6570\u636e\u5bfc\u5165\u6210\u529f\uff0c\u8981\u4e48\u5168\u90e8\u5931\u8d25\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"MySQL Load\u4ee5\u8bed\u6cd5",(0,r.kt)("inlineCode",{parentName:"li"},"LOAD DATA"),"\u5f00\u5934, \u65e0\u987b\u6307\u5b9aLABEL"),(0,r.kt)("li",{parentName:"ol"},"\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"li"},"LOCAL"),"\u8868\u793a\u8bfb\u53d6\u5ba2\u6237\u7aef\u6587\u4ef6.\u4e0d\u6307\u5b9a\u8868\u793a\u8bfb\u53d6FE\u670d\u52a1\u7aef\u672c\u5730\u6587\u4ef6. \u5bfc\u5165FE\u672c\u5730\u6587\u4ef6\u7684\u529f\u80fd\u9ed8\u8ba4\u662f\u5173\u95ed\u7684, \u9700\u8981\u5728FE\u8282\u70b9\u4e0a\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"mysql_load_server_secure_path"),"\u6765\u6307\u5b9a\u5b89\u5168\u8def\u5f84, \u624d\u80fd\u6253\u5f00\u8be5\u529f\u80fd."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"INFILE"),"\u5185\u586b\u5199\u672c\u5730\u6587\u4ef6\u8def\u5f84, \u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84, \u4e5f\u53ef\u4ee5\u662f\u7edd\u5bf9\u8def\u5f84.\u76ee\u524d\u53ea\u652f\u6301\u5355\u4e2a\u6587\u4ef6, \u4e0d\u652f\u6301\u591a\u4e2a\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"INTO TABLE"),"\u7684\u8868\u540d\u53ef\u4ee5\u6307\u5b9a\u6570\u636e\u5e93\u540d, \u5982\u6848\u4f8b\u6240\u793a. \u4e5f\u53ef\u4ee5\u7701\u7565, \u5219\u4f1a\u4f7f\u7528\u5f53\u524d\u7528\u6237\u6240\u5728\u7684\u6570\u636e\u5e93."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"PARTITION"),"\u8bed\u6cd5\u652f\u6301\u6307\u5b9a\u5206\u533a\u5bfc\u5165"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"COLUMNS TERMINATED BY"),"\u6307\u5b9a\u5217\u5206\u9694\u7b26"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"LINES TERMINATED BY"),"\u6307\u5b9a\u884c\u5206\u9694\u7b26"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"IGNORE num LINES"),"\u7528\u6237\u8df3\u8fc7CSV\u7684\u8868\u5934, \u53ef\u4ee5\u8df3\u8fc7\u4efb\u610f\u884c\u6570. \u8be5\u8bed\u6cd5\u4e5f\u53ef\u4ee5\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"IGNORE num ROWS"),"\u4ee3\u66ff"),(0,r.kt)("li",{parentName:"ol"},"\u5217\u6620\u5c04\u8bed\u6cd5, \u5177\u4f53\u53c2\u6570\u8be6\u89c1",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/data-operate/import/import-way/mysql-load-manual"},"\u5bfc\u5165\u7684\u6570\u636e\u8f6c\u6362")," \u7684\u5217\u6620\u5c04\u7ae0\u8282"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"PROPERTIES"),"\u53c2\u6570\u914d\u7f6e, \u8be6\u89c1\u4e0b\u6587")),(0,r.kt)("h3",{id:"properties"},"PROPERTIES"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"max_filter_ratio\uff1a\u6700\u5927\u5bb9\u5fcd\u53ef\u8fc7\u6ee4\uff08\u6570\u636e\u4e0d\u89c4\u8303\u7b49\u539f\u56e0\uff09\u7684\u6570\u636e\u6bd4\u4f8b\u3002\u9ed8\u8ba4\u96f6\u5bb9\u5fcd\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"timeout: \u6307\u5b9a\u5bfc\u5165\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u5355\u4f4d\u79d2\u3002\u9ed8\u8ba4\u662f 600 \u79d2\u3002\u53ef\u8bbe\u7f6e\u8303\u56f4\u4e3a 1 \u79d2 ~ 259200 \u79d2\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"strict_mode: \u7528\u6237\u6307\u5b9a\u6b64\u6b21\u5bfc\u5165\u662f\u5426\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u4e3a\u5173\u95ed\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"timezone: \u6307\u5b9a\u672c\u6b21\u5bfc\u5165\u6240\u4f7f\u7528\u7684\u65f6\u533a\u3002\u9ed8\u8ba4\u4e3a\u4e1c\u516b\u533a\u3002\u8be5\u53c2\u6570\u4f1a\u5f71\u54cd\u6240\u6709\u5bfc\u5165\u6d89\u53ca\u7684\u548c\u65f6\u533a\u6709\u5173\u7684\u51fd\u6570\u7ed3\u679c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"exec_mem_limit: \u5bfc\u5165\u5185\u5b58\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a 2GB\u3002\u5355\u4f4d\u4e3a\u5b57\u8282\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"trim_double_quotes: \u5e03\u5c14\u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\u4e3a false\uff0c\u4e3a true \u65f6\u8868\u793a\u88c1\u526a\u6389\u5bfc\u5165\u6587\u4ef6\u6bcf\u4e2a\u5b57\u6bb5\u6700\u5916\u5c42\u7684\u53cc\u5f15\u53f7\u3002"))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5ba2\u6237\u7aef\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\u3002\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\u4e3a 100 \u79d2"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timeout"="100")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u670d\u52a1\u7aef\u672c\u5730\u6587\u4ef6'/root/testData'(\u9700\u8bbe\u7f6eFE\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"mysql_load_server_secure_path"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"/root"),")\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\u3002\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\u4e3a 100 \u79d2"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA\nINFILE \'/root/testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timeout"="100")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5ba2\u6237\u7aef\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868, \u5141\u8bb820%\u7684\u9519\u8bef\u7387"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("max_filter_ratio"="0.2")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5ba2\u6237\u7aef\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868, \u5141\u8bb820%\u7684\u9519\u8bef\u7387\uff0c\u5e76\u4e14\u6307\u5b9a\u6587\u4ef6\u7684\u5217\u540d"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\n(k2, k1, v1)\nPROPERTIES ("max_filter_ratio"="0.2")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\u4e2d\u7684p1, p2\u5206\u533a, \u5141\u8bb820%\u7684\u9519\u8bef\u7387\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPARTITION (p1, p2)\nPROPERTIES ("max_filter_ratio"="0.2")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u672c\u5730\u884c\u5206\u9694\u7b26\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"0102"),",\u5217\u5206\u9694\u7b26\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"0304"),"\u7684CSV\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\u4e2d\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nCOLUMNS TERMINATED BY '0304'\nLINES TERMINATED BY '0102'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\u4e2d\u7684p1, p2\u5206\u533a, \u5e76\u8df3\u8fc7\u524d\u97623\u884c\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nPARTITION (p1, p2)\nIGNORE 1 LINES\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u6570\u636e\u8fdb\u884c\u4e25\u683c\u6a21\u5f0f\u8fc7\u6ee4\uff0c\u5e76\u8bbe\u7f6e\u65f6\u533a\u4e3a Africa/Abidjan"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("strict_mode"="true", "timezone"="Africa/Abidjan")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u6570\u636e\u8fdb\u884c\u9650\u5236\u5bfc\u5165\u5185\u5b58\u4e3a10GB, \u5e76\u572810\u5206\u949f\u8d85\u65f6"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("exec_mem_limit"="10737418240", "timeout"="600")\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MYSQL, LOAD\n")))}c.isMDXComponent=!0}}]);