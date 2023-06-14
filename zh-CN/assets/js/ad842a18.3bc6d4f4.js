"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51158],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||l;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56198:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"Iceberg",language:"zh-CN"},o=void 0,i={unversionedId:"lakehouse/multi-catalog/iceberg",id:"version-1.2/lakehouse/multi-catalog/iceberg",title:"Iceberg",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/lakehouse/multi-catalog/iceberg.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/iceberg",permalink:"/zh-CN/docs/1.2/lakehouse/multi-catalog/iceberg",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Iceberg",language:"zh-CN"},sidebar:"docs",previous:{title:"Hive",permalink:"/zh-CN/docs/1.2/lakehouse/multi-catalog/hive"},next:{title:"Hudi",permalink:"/zh-CN/docs/1.2/lakehouse/multi-catalog/hudi"}},s={},c=[{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u521b\u5efa Catalog",id:"\u521b\u5efa-catalog",level:2},{value:"\u57fa\u4e8eHive Metastore\u521b\u5efaCatalog",id:"\u57fa\u4e8ehive-metastore\u521b\u5efacatalog",level:3},{value:"\u57fa\u4e8eIceberg API\u521b\u5efaCatalog",id:"\u57fa\u4e8eiceberg-api\u521b\u5efacatalog",level:3},{value:"Hive Metastore\u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1",id:"hive-metastore\u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1",level:4},{value:"Glue Catalog\u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1",id:"glue-catalog\u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1",level:4},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:2},{value:"Time Travel",id:"time-travel",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iceberg"},"Iceberg"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u652f\u6301 Iceberg V1/V2 \u8868\u683c\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ol"},"V2 \u683c\u5f0f\u4ec5\u652f\u6301 Position Delete \u65b9\u5f0f\uff0c\u4e0d\u652f\u6301 Equality Delete\u3002")),(0,r.kt)("version",{since:"dev"},(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u652f\u6301\u6570\u636e\u5b58\u5728\u5728 GooseFS(GFS) \u4e0a\u7684 iceberg\u8868\u3002\u9700\u914d\u7f6e\u73af\u5883\uff1a",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u628agoosefs-x.x.x-client.jar \u653e\u5728 fe/lib/ \u548c apache_hdfs_broker/lib/ \u4e0b"),(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa catalog \u65f6\u589e\u52a0\u5c5e\u6027\uff1a'fs.AbstractFileSystem.gfs.impl' = 'com.qcloud.cos.goosefs.hadoop.GooseFileSystem'\uff0c 'fs.gfs.impl' = 'com.qcloud.cos.goosefs.hadoop.FileSystem'"))))),(0,r.kt)("h2",{id:"\u521b\u5efa-catalog"},"\u521b\u5efa Catalog"),(0,r.kt)("h3",{id:"\u57fa\u4e8ehive-metastore\u521b\u5efacatalog"},"\u57fa\u4e8eHive Metastore\u521b\u5efaCatalog"),(0,r.kt)("p",null,"\u548c Hive Catalog \u57fa\u672c\u4e00\u81f4\uff0c\u8fd9\u91cc\u4ec5\u7ed9\u51fa\u7b80\u5355\u793a\u4f8b\u3002\u5176\u4ed6\u793a\u4f8b\u53ef\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/lakehouse/multi-catalog/hive"},"Hive Catalog"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.kt)("h3",{id:"\u57fa\u4e8eiceberg-api\u521b\u5efacatalog"},"\u57fa\u4e8eIceberg API\u521b\u5efaCatalog"),(0,r.kt)("version",{since:"dev"},(0,r.kt)("p",null,"\u4f7f\u7528Iceberg API\u8bbf\u95ee\u5143\u6570\u636e\u7684\u65b9\u5f0f\uff0c\u652f\u6301Hive\u3001REST\u3001Glue\u7b49\u670d\u52a1\u4f5c\u4e3aIceberg\u7684Catalog\u3002")),(0,r.kt)("h4",{id:"hive-metastore\u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1"},"Hive Metastore\u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.kt)("h4",{id:"glue-catalog\u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1"},"Glue Catalog\u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG glue PROPERTIES (\n"type"="iceberg",\n"iceberg.catalog.type" = "glue",\n"glue.endpoint" = "https://glue.us-east-1.amazonaws.com",\n"warehouse" = "s3://bucket/warehouse",\n"AWS_ENDPOINT" = "s3.us-east-1.amazonaws.com",\n"AWS_REGION" = "us-east-1",\n"AWS_ACCESS_KEY" = "ak",\n"AWS_SECRET_KEY" = "sk",\n"use_path_style" = "true"\n);\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"glue.endpoint"),": Glue Endpoint. \u53c2\u9605\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/glue.html"},"AWS Glue endpoints and quotas"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"warehouse"),": Glue Warehouse Location. Glue Catalog\u7684\u6839\u8def\u5f84\uff0c\u7528\u4e8e\u6307\u5b9a\u6570\u636e\u5b58\u653e\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5c5e\u6027\u8be6\u60c5\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/docs/latest/aws/#glue-catalog"},"Iceberg Glue Catalog")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"REST Catalog\u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1")),(0,r.kt)("p",null,"\u8be5\u65b9\u5f0f\u9700\u8981\u9884\u5148\u63d0\u4f9bREST\u670d\u52a1\uff0c\u7528\u6237\u9700\u5b9e\u73b0\u83b7\u53d6Iceberg\u5143\u6570\u636e\u7684REST\u63a5\u53e3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='rest',\n    'uri' = 'http://172.21.0.1:8181',\n);\n")),(0,r.kt)("p",null,"\u82e5\u6570\u636e\u5b58\u653e\u5728S3\u4e0a\uff0cproperties\u4e2d\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"AWS_ACCESS_KEY" = "ak"\n"AWS_SECRET_KEY" = "sk"\n"AWS_REGION" = "region-name"\n"AWS_ENDPOINT" = "http://endpoint-uri"\n"AWS_CREDENTIALS_PROVIDER" = "provider-class-name" // \u53ef\u9009\uff0c\u9ed8\u8ba4\u51ed\u8bc1\u7c7b\u57fa\u4e8eBasicAWSCredentials\u5b9e\u73b0\u3002\n')),(0,r.kt)("h2",{id:"\u5217\u7c7b\u578b\u6620\u5c04"},"\u5217\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("p",null,"\u548c Hive Catalog \u4e00\u81f4\uff0c\u53ef\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/lakehouse/multi-catalog/hive"},"Hive Catalog")," \u4e2d ",(0,r.kt)("strong",{parentName:"p"},"\u5217\u7c7b\u578b\u6620\u5c04")," \u4e00\u8282\u3002"),(0,r.kt)("h2",{id:"time-travel"},"Time Travel"),(0,r.kt)("version",{since:"1.2.2"},(0,r.kt)("p",null,"\u652f\u6301\u8bfb\u53d6 Iceberg \u8868\u6307\u5b9a\u7684 Snapshot\u3002")),(0,r.kt)("p",null,"\u6bcf\u4e00\u6b21\u5bf9iceberg\u8868\u7684\u5199\u64cd\u4f5c\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u5feb\u7167\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8bfb\u53d6\u8bf7\u6c42\u53ea\u4f1a\u8bfb\u53d6\u6700\u65b0\u7248\u672c\u7684\u5feb\u7167\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"FOR TIME AS OF")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"FOR VERSION AS OF")," \u8bed\u53e5\uff0c\u6839\u636e\u5feb\u7167 ID \u6216\u8005\u5feb\u7167\u4ea7\u751f\u7684\u65f6\u95f4\u8bfb\u53d6\u5386\u53f2\u7248\u672c\u7684\u6570\u636e\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'SELECT * FROM iceberg_tbl FOR TIME AS OF "2022-10-07 17:20:37";')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM iceberg_tbl FOR VERSION AS OF 868895038966572;")),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-functions/table-functions/iceberg_meta"},"iceberg_meta")," \u8868\u51fd\u6570\u67e5\u8be2\u6307\u5b9a\u8868\u7684 snapshot \u4fe1\u606f\u3002"))}g.isMDXComponent=!0}}]);