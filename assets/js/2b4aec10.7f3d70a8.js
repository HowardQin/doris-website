"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[76942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},47400:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Iceberg",language:"en"},l=void 0,i={unversionedId:"lakehouse/multi-catalog/iceberg",id:"version-1.2/lakehouse/multi-catalog/iceberg",title:"Iceberg",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/lakehouse/multi-catalog/iceberg.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/iceberg",permalink:"/docs/1.2/lakehouse/multi-catalog/iceberg",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Iceberg",language:"en"},sidebar:"docs",previous:{title:"Hive",permalink:"/docs/1.2/lakehouse/multi-catalog/hive"},next:{title:"Hudi",permalink:"/docs/1.2/lakehouse/multi-catalog/hudi"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Hive Metastore Catalog",id:"hive-metastore-catalog",level:3},{value:"Iceberg Native Catalog",id:"iceberg-native-catalog",level:3},{value:"Using Iceberg Hive Catalog",id:"using-iceberg-hive-catalog",level:4},{value:"Using Iceberg Glue Catalog",id:"using-iceberg-glue-catalog",level:4},{value:"Column Type Mapping",id:"column-type-mapping",level:2},{value:"Time Travel",id:"time-travel",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iceberg"},"Iceberg"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"When connecting to Iceberg, Doris:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Supports Iceberg V1/V2 table formats;"),(0,r.kt)("li",{parentName:"ol"},"Supports Position Delete but not Equality Delete for V2 format;")),(0,r.kt)("version",{since:"dev"},(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Supports Hive / Iceberg tables with data stored in GooseFS(GFS), which can be used the same way as normal Hive tables. Follow below steps to prepare doris environment\uff1a",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"put goosefs-x.x.x-client.jar in fe/lib/ and apache_hdfs_broker/lib/"),(0,r.kt)("li",{parentName:"ol"},"add extra properties 'fs.AbstractFileSystem.gfs.impl' = 'com.qcloud.cos.goosefs.hadoop.GooseFileSystem'\uff0c 'fs.gfs.impl' = 'com.qcloud.cos.goosefs.hadoop.FileSystem' when creating catalog"))))),(0,r.kt)("h2",{id:"create-catalog"},"Create Catalog"),(0,r.kt)("h3",{id:"hive-metastore-catalog"},"Hive Metastore Catalog"),(0,r.kt)("p",null,"Same as creating Hive Catalogs. A simple example is provided here. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/lakehouse/multi-catalog/hive"},"Hive")," for more information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.kt)("h3",{id:"iceberg-native-catalog"},"Iceberg Native Catalog"),(0,r.kt)("version",{since:"dev"},(0,r.kt)("p",null,"Access metadata with the iceberg API. The Hive, REST, Glue and other services can serve as the iceberg catalog.")),(0,r.kt)("h4",{id:"using-iceberg-hive-catalog"},"Using Iceberg Hive Catalog"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.kt)("h4",{id:"using-iceberg-glue-catalog"},"Using Iceberg Glue Catalog"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG glue PROPERTIES (\n"type"="iceberg",\n"iceberg.catalog.type" = "glue",\n"glue.endpoint" = "https://glue.us-east-1.amazonaws.com",\n"warehouse" = "s3://bucket/warehouse",\n"AWS_ENDPOINT" = "s3.us-east-1.amazonaws.com",\n"AWS_REGION" = "us-east-1",\n"AWS_ACCESS_KEY" = "ak",\n"AWS_SECRET_KEY" = "sk",\n"use_path_style" = "true"\n);\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"glue.endpoint"),": Glue Endpoint. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/glue.html"},"AWS Glue endpoints and quotas"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"warehouse"),": Glue Warehouse Location.  To determine the root path of the data warehouse in storage."),(0,r.kt)("p",null,"The other properties can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/docs/latest/aws/#glue-catalog"},"Iceberg Glue Catalog")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using Iceberg REST Catalog")),(0,r.kt)("p",null,"RESTful service as the server side. Implementing RESTCatalog interface of iceberg to obtain metadata."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='rest',\n    'uri' = 'http://172.21.0.1:8181',\n);\n")),(0,r.kt)("p",null,"If you want to use S3 storage, the following properties need to be set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"AWS_ACCESS_KEY" = "ak"\n"AWS_SECRET_KEY" = "sk"\n"AWS_REGION" = "region-name"\n"AWS_ENDPOINT" = "http://endpoint-uri"\n"AWS_CREDENTIALS_PROVIDER" = "provider-class-name" // Optional. The default credentials class is based on BasicAWSCredentials.\n')),(0,r.kt)("h2",{id:"column-type-mapping"},"Column Type Mapping"),(0,r.kt)("p",null,"Same as that in Hive Catalogs. See the relevant section in ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/lakehouse/multi-catalog/hive"},"Hive"),"."),(0,r.kt)("h2",{id:"time-travel"},"Time Travel"),(0,r.kt)("version",{since:"1.2.2"},(0,r.kt)("p",null,"Doris supports reading the specified Snapshot of Iceberg tables.")),(0,r.kt)("p",null,"Each write operation to an Iceberg table will generate a new Snapshot."),(0,r.kt)("p",null,"By default, a read request will only read the latest Snapshot."),(0,r.kt)("p",null,"You can read data of historical table versions using the  ",(0,r.kt)("inlineCode",{parentName:"p"},"FOR TIME AS OF"),"  or  ",(0,r.kt)("inlineCode",{parentName:"p"},"FOR VERSION AS OF"),"  statements based on the Snapshot ID or the timepoint the Snapshot is generated. For example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'SELECT * FROM iceberg_tbl FOR TIME AS OF "2022-10-07 17:20:37";')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM iceberg_tbl FOR VERSION AS OF 868895038966572;")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-functions/table-functions/iceberg_meta/"},"iceberg_meta")," table function to view the Snapshot details of the specified table."))}g.isMDXComponent=!0}}]);