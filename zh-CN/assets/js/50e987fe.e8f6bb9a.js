"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[25380],{3905:(e,t,a)=>{a.d(t,{Zo:()=>N,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},N=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,N=o(e,["components","mdxType","originalType","parentName"]),s=d(a),k=r,c=s["".concat(p,".").concat(k)]||s[k]||m[k]||i;return a?n.createElement(c,l(l({ref:t},N),{},{components:a})):n.createElement(c,l({ref:t},N))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},53430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Hive \u5916\u8868",language:"zh-CN"},l=void 0,o={unversionedId:"lakehouse/external-table/hive",id:"lakehouse/external-table/hive",title:"Hive \u5916\u8868",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/external-table/hive.md",sourceDirName:"lakehouse/external-table",slug:"/lakehouse/external-table/hive",permalink:"/zh-CN/docs/dev/lakehouse/external-table/hive",draft:!1,tags:[],version:"current",frontMatter:{title:"Hive \u5916\u8868",language:"zh-CN"},sidebar:"docs",previous:{title:"ODBC \u5916\u8868",permalink:"/zh-CN/docs/dev/lakehouse/external-table/odbc"},next:{title:"\u6587\u4ef6\u5206\u6790",permalink:"/zh-CN/docs/dev/lakehouse/file"}},p={},d=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"Doris \u76f8\u5173",id:"doris-\u76f8\u5173",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"Doris \u4e2d\u521b\u5efa Hive \u7684\u5916\u8868",id:"doris-\u4e2d\u521b\u5efa-hive-\u7684\u5916\u8868",level:3},{value:"\u53c2\u6570\u8bf4\u660e\uff1a",id:"\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u7c7b\u578b\u5339\u914d",id:"\u7c7b\u578b\u5339\u914d",level:2},{value:"\u67e5\u8be2\u7528\u6cd5",id:"\u67e5\u8be2\u7528\u6cd5",level:3}],N={toc:d},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hive-\u5916\u8868"},"Hive \u5916\u8868"),(0,r.kt)("version",{deprecated:"1.2.0"},(0,r.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/lakehouse/multi-catalog/hive"},"Hive Catalog")," \u8bbf\u95ee Hive\uff0c1.2.0\u7248\u672c\u540e\u5c06\u4e0d\u518d\u7ef4\u62a4\u8be5\u529f\u80fd\u3002")),(0,r.kt)("p",null,"Hive External Table of Doris \u63d0\u4f9b\u4e86 Doris \u76f4\u63a5\u8bbf\u95ee Hive \u5916\u90e8\u8868\u7684\u80fd\u529b\uff0c\u5916\u90e8\u8868\u7701\u53bb\u4e86\u7e41\u7410\u7684\u6570\u636e\u5bfc\u5165\u5de5\u4f5c\uff0c\u5e76\u501f\u52a9 Doris \u672c\u8eab\u7684 OLAP \u7684\u80fd\u529b\u6765\u89e3\u51b3 Hive \u8868\u7684\u6570\u636e\u5206\u6790\u95ee\u9898\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u652f\u6301 Hive \u6570\u636e\u6e90\u63a5\u5165Doris"),(0,r.kt)("li",{parentName:"ol"},"\u652f\u6301 Doris \u4e0e Hive \u6570\u636e\u6e90\u4e2d\u7684\u8868\u8054\u5408\u67e5\u8be2\uff0c\u8fdb\u884c\u66f4\u52a0\u590d\u6742\u7684\u5206\u6790\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ol"},"\u652f\u6301 \u8bbf\u95ee\u5f00\u542f kerberos \u7684 Hive \u6570\u636e\u6e90"),(0,r.kt)("li",{parentName:"ol"},"\u652f\u6301 \u8bbf\u95ee\u6570\u636e\u5b58\u50a8\u5728\u817e\u8baf CHDFS \u4e0a\u7684 Hive \u6570\u636e\u6e90")),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u8be5\u529f\u80fd\u7684\u4f7f\u7528\u65b9\u5f0f\u548c\u6ce8\u610f\u4e8b\u9879\u7b49\u3002"),(0,r.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,r.kt)("h3",{id:"doris-\u76f8\u5173"},"Doris \u76f8\u5173"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FE\uff1aFrontend\uff0cDoris \u7684\u524d\u7aef\u8282\u70b9,\u8d1f\u8d23\u5143\u6570\u636e\u7ba1\u7406\u548c\u8bf7\u6c42\u63a5\u5165"),(0,r.kt)("li",{parentName:"ul"},"BE\uff1aBackend\uff0cDoris \u7684\u540e\u7aef\u8282\u70b9,\u8d1f\u8d23\u67e5\u8be2\u6267\u884c\u548c\u6570\u636e\u5b58\u50a8")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("h3",{id:"doris-\u4e2d\u521b\u5efa-hive-\u7684\u5916\u8868"},"Doris \u4e2d\u521b\u5efa Hive \u7684\u5916\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u8bed\u6cd5\nCREATE [EXTERNAL] TABLE table_name (\n  col_name col_type [NULL | NOT NULL] [COMMENT \"comment\"]\n) ENGINE=HIVE\n[COMMENT \"comment\"]\nPROPERTIES (\n  'property_name'='property_value',\n  ...\n);\n\n-- \u4f8b\u5b501\uff1a\u521b\u5efa Hive \u96c6\u7fa4\u4e2d hive_db \u4e0b\u7684 hive_table \u8868\nCREATE TABLE `t_hive` (\n  `k1` int NOT NULL COMMENT \"\",\n  `k2` char(10) NOT NULL COMMENT \"\",\n  `k3` datetime NOT NULL COMMENT \"\",\n  `k5` varchar(20) NOT NULL COMMENT \"\",\n  `k6` double NOT NULL COMMENT \"\"\n) ENGINE=HIVE\nCOMMENT \"HIVE\"\nPROPERTIES (\n'hive.metastore.uris' = 'thrift://192.168.0.1:9083',\n'database' = 'hive_db',\n'table' = 'hive_table'\n);\n\n-- \u4f8b\u5b502\uff1a\u521b\u5efa Hive \u96c6\u7fa4\u4e2d hive_db \u4e0b\u7684 hive_table \u8868,HDFS\u4f7f\u7528HA\u914d\u7f6e\nCREATE TABLE `t_hive` (\n  `k1` int NOT NULL COMMENT \"\",\n  `k2` char(10) NOT NULL COMMENT \"\",\n  `k3` datetime NOT NULL COMMENT \"\",\n  `k5` varchar(20) NOT NULL COMMENT \"\",\n  `k6` double NOT NULL COMMENT \"\"\n) ENGINE=HIVE\nCOMMENT \"HIVE\"\nPROPERTIES (\n'hive.metastore.uris' = 'thrift://192.168.0.1:9083',\n'database' = 'hive_db',\n'table' = 'hive_table',\n'dfs.nameservices'='hacluster',\n'dfs.ha.namenodes.hacluster'='n1,n2',\n'dfs.namenode.rpc-address.hacluster.n1'='192.168.0.1:8020',\n'dfs.namenode.rpc-address.hacluster.n2'='192.168.0.2:8020',\n'dfs.client.failover.proxy.provider.hacluster'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n\n-- \u4f8b\u5b503\uff1a\u521b\u5efa Hive \u96c6\u7fa4\u4e2d hive_db \u4e0b\u7684 hive_table \u8868, HDFS\u4f7f\u7528HA\u914d\u7f6e\u5e76\u5f00\u542fkerberos\u8ba4\u8bc1\u65b9\u5f0f\nCREATE TABLE `t_hive` (\n  `k1` int NOT NULL COMMENT \"\",\n  `k2` char(10) NOT NULL COMMENT \"\",\n  `k3` datetime NOT NULL COMMENT \"\",\n  `k5` varchar(20) NOT NULL COMMENT \"\",\n  `k6` double NOT NULL COMMENT \"\"\n) ENGINE=HIVE\nCOMMENT \"HIVE\"\nPROPERTIES (\n'hive.metastore.uris' = 'thrift://192.168.0.1:9083',\n'database' = 'hive_db',\n'table' = 'hive_table',\n'dfs.nameservices'='hacluster',\n'dfs.ha.namenodes.hacluster'='n1,n2',\n'dfs.namenode.rpc-address.hacluster.n1'='192.168.0.1:8020',\n'dfs.namenode.rpc-address.hacluster.n2'='192.168.0.2:8020',\n'dfs.client.failover.proxy.provider.hacluster'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n'dfs.namenode.kerberos.principal'='hadoop/_HOST@REALM.COM'\n'hadoop.security.authentication'='kerberos',\n'hadoop.kerberos.principal'='doris_test@REALM.COM',\n'hadoop.kerberos.keytab'='/path/to/doris_test.keytab'\n);\n\n-- \u4f8b\u5b504\uff1a\u521b\u5efa Hive \u96c6\u7fa4\u4e2d hive_db \u4e0b\u7684 hive_table \u8868, Hive\u6570\u636e\u5b58\u50a8\u5728S3\u4e0a\nCREATE TABLE `t_hive` (\n  `k1` int NOT NULL COMMENT \"\",\n  `k2` char(10) NOT NULL COMMENT \"\",\n  `k3` datetime NOT NULL COMMENT \"\",\n  `k5` varchar(20) NOT NULL COMMENT \"\",\n  `k6` double NOT NULL COMMENT \"\"\n) ENGINE=HIVE\nCOMMENT \"HIVE\"\nPROPERTIES (\n'hive.metastore.uris' = 'thrift://192.168.0.1:9083',\n'database' = 'hive_db',\n'table' = 'hive_table',\n'AWS_ACCESS_KEY' = 'your_access_key',\n'AWS_SECRET_KEY' = 'your_secret_key',\n'AWS_ENDPOINT' = 's3.us-east-1.amazonaws.com',\n'AWS_REGION' = 'us-east-1'\n);\n\n")),(0,r.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5916\u8868\u5217"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5217\u540d\u8981\u4e8e Hive \u8868\u4e00\u4e00\u5bf9\u5e94"),(0,r.kt)("li",{parentName:"ul"},"\u5217\u7684\u987a\u5e8f\u9700\u8981\u4e0e Hive \u8868\u4e00\u81f4"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u5305\u542b Hive \u8868\u4e2d\u7684\u5168\u90e8\u5217"),(0,r.kt)("li",{parentName:"ul"},"Hive \u8868\u5206\u533a\u5217\u65e0\u9700\u6307\u5b9a\uff0c\u4e0e\u666e\u901a\u5217\u4e00\u6837\u5b9a\u4e49\u5373\u53ef\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ENGINE \u9700\u8981\u6307\u5b9a\u4e3a HIVE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PROPERTIES \u5c5e\u6027\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hive.metastore.uris"),"\uff1aHive Metastore \u670d\u52a1\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"database"),"\uff1a\u6302\u8f7d Hive \u5bf9\u5e94\u7684\u6570\u636e\u5e93\u540d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"table"),"\uff1a\u6302\u8f7d Hive \u5bf9\u5e94\u7684\u8868\u540d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hadoop.username"),": \u8bbf\u95eehdfs\u7528\u6237\u540d,\u5f53\u8ba4\u8bc1\u4e3asimple\u65f6\u9700\u8981"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dfs.nameservices"),"\uff1aname service\u540d\u79f0\uff0c\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4"),(0,r.kt)("li",{parentName:"ul"},"`dfs.ha.namenodes.","[nameservice ID]","\uff1anamenode\u7684id\u5217\u8868,\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dfs.namenode.rpc-address.[nameservice ID].[name node ID]"),"\uff1aName node\u7684rpc\u5730\u5740\uff0c\u6570\u91cf\u4e0enamenode\u6570\u91cf\u76f8\u540c\uff0c\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dfs.client.failover.proxy.provider.[nameservice ID] "),'\uff1aHDFS\u5ba2\u6237\u7aef\u8fde\u63a5\u6d3b\u8dc3namenode\u7684java\u7c7b\uff0c\u901a\u5e38\u662f"org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bbf\u95ee\u5f00\u542fkerberos\u7684Hive\u6570\u636e\u6e90\uff0c\u9700\u8981\u4e3aHive\u5916\u8868\u989d\u5916\u914d\u7f6e\u5982\u4e0b PROPERTIES \u5c5e\u6027\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hadoop.security.authentication"),"\uff1a\u8ba4\u8bc1\u65b9\u5f0f\u8bf7\u8bbe\u7f6e\u4e3a kerberos\uff0c\u9ed8\u8ba4\u4e3asimple"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dfs.namenode.kerberos.principal"),"\uff1aHDFS namenode \u670d\u52a1\u7684Kerberos \u4e3b\u4f53"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hadoop.kerberos.principal"),"\uff1a\u8bbe\u7f6e Doris \u8fde\u63a5 HDFS \u65f6\u4f7f\u7528\u7684 Kerberos \u4e3b\u4f53"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hadoop.kerberos.keytab"),"\uff1a\u8bbe\u7f6e keytab \u672c\u5730\u6587\u4ef6\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY"),": AWS\u8d26\u6237\u7684access key id."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_KEY"),": AWS\u8d26\u6237\u7684secret access key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AWS_ENDPOINT"),": S3 endpoint. \u4f8b\u5982\uff1as3.us-east-1.amazonaws.com"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AWS_REGION"),": AWS\u533a\u57df. \u4f8b\u5982\uff1aus-east-1")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u82e5\u8981\u4f7f Doris \u8bbf\u95ee\u5f00\u542fkerberos\u8ba4\u8bc1\u65b9\u5f0f\u7684hadoop\u96c6\u7fa4\uff0c\u9700\u8981\u5728 Doris \u96c6\u7fa4\u6240\u6709\u8fd0\u884c\u8282\u70b9\u4e0a\u90e8\u7f72 Kerberos \u5ba2\u6237\u7aef kinit\uff0c\u5e76\u914d\u7f6e krb5.conf\uff0c\u586b\u5199KDC \u670d\u52a1\u4fe1\u606f\u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},"PROPERTIES \u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"li"},"hadoop.kerberos.keytab")," \u7684\u503c\u9700\u8981\u6307\u5b9a keytab \u672c\u5730\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\uff0c\u5e76\u5141\u8bb8 Doris \u8fdb\u7a0b\u8bbf\u95ee\u8be5\u672c\u5730\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5173\u4e8eHDFS\u96c6\u7fa4\u7684\u914d\u7f6e\u53ef\u4ee5\u5199\u5165hdfs-site.xml\u6587\u4ef6\u4e2d\uff0c\u8be5\u914d\u7f6e\u6587\u4ef6\u5728fe\u548cbe\u7684conf\u76ee\u5f55\u4e0b\uff0c\u7528\u6237\u521b\u5efaHive\u8868\u65f6\uff0c\u4e0d\u9700\u8981\u518d\u586b\u5199HDFS\u96c6\u7fa4\u914d\u7f6e\u7684\u76f8\u5173\u4fe1\u606f\u3002")),(0,r.kt)("h2",{id:"\u7c7b\u578b\u5339\u914d"},"\u7c7b\u578b\u5339\u914d"),(0,r.kt)("p",null,"\u652f\u6301\u7684 Hive \u5217\u7c7b\u578b\u4e0e Doris \u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\u8868\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Hive"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Doris"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,r.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5f53\u524d\u4ec5\u652f\u6301UTF8\u7f16\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,r.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5f53\u524d\u4ec5\u652f\u6301UTF8\u7f16\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,r.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Timestamp \u8f6c\u6210 Datetime \u4f1a\u635f\u5931\u7cbe\u5ea6")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hive \u8868 Schema \u53d8\u66f4",(0,r.kt)("strong",{parentName:"li"},"\u4e0d\u4f1a\u81ea\u52a8\u540c\u6b65"),"\uff0c\u9700\u8981\u5728 Doris \u4e2d\u91cd\u5efa Hive \u5916\u8868\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u524d Hive \u7684\u5b58\u50a8\u683c\u5f0f\u4ec5\u652f\u6301 Text\uff0cParquet \u548c ORC \u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u524d\u9ed8\u8ba4\u652f\u6301\u7684 Hive \u7248\u672c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"2.3.7\u30013.1.2"),"\uff0c\u672a\u5728\u5176\u4ed6\u7248\u672c\u8fdb\u884c\u6d4b\u8bd5\u3002\u540e\u7eed\u540e\u652f\u6301\u66f4\u591a\u7248\u672c\u3002")),(0,r.kt)("h3",{id:"\u67e5\u8be2\u7528\u6cd5"},"\u67e5\u8be2\u7528\u6cd5"),(0,r.kt)("p",null,"\u5b8c\u6210\u5728 Doris \u4e2d\u5efa\u7acb Hive \u5916\u8868\u540e\uff0c\u9664\u4e86\u65e0\u6cd5\u4f7f\u7528 Doris \u4e2d\u7684\u6570\u636e\u6a21\u578b(rollup\u3001\u9884\u805a\u5408\u3001\u7269\u5316\u89c6\u56fe\u7b49)\u5916\uff0c\u4e0e\u666e\u901a\u7684 Doris OLAP \u8868\u5e76\u65e0\u533a\u522b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from t_hive where k1 > 1000 and k3 ='term' or k4 like '%doris';\n")))}m.isMDXComponent=!0}}]);