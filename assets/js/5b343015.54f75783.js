"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[84356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Hive",language:"en"},o=void 0,l={unversionedId:"lakehouse/multi-catalog/hive",id:"lakehouse/multi-catalog/hive",title:"Hive",description:"\x3c!--",source:"@site/docs/lakehouse/multi-catalog/hive.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/hive",permalink:"/docs/dev/lakehouse/multi-catalog/hive",draft:!1,tags:[],version:"current",frontMatter:{title:"Hive",language:"en"},sidebar:"docs",previous:{title:"Multi Catalog",permalink:"/docs/dev/lakehouse/multi-catalog/"},next:{title:"Iceberg",permalink:"/docs/dev/lakehouse/multi-catalog/iceberg"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Hive Versions",id:"hive-versions",level:3},{value:"Column Type Mapping",id:"column-type-mapping",level:2},{value:"Use Ranger for permission verification",id:"use-ranger-for-permission-verification",level:2},{value:"Environment configuration",id:"environment-configuration",level:3},{value:"Best Practices",id:"best-practices",level:3}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hive"},"Hive"),(0,r.kt)("p",null,"Once Doris is connected to Hive Metastore or made compatible with Hive Metastore metadata service, it can access databases and tables in Hive and conduct queries."),(0,r.kt)("p",null,"Besides Hive, many other systems, such as Iceberg and Hudi, use Hive Metastore to keep their metadata. Thus, Doris can also access these systems via Hive Catalog. "),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"When connnecting to Hive, Doris:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Supports Hive version 1/2/3;"),(0,r.kt)("li",{parentName:"ol"},"Supports both Managed Table and External Table;"),(0,r.kt)("li",{parentName:"ol"},"Can identify metadata of Hive, Iceberg, and Hudi stored in Hive Metastore;"),(0,r.kt)("li",{parentName:"ol"},"Supports Hive tables with data stored in JuiceFS, which can be used the same way as normal Hive tables (put ",(0,r.kt)("inlineCode",{parentName:"li"},"juicefs-hadoop-x.x.x.jar")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"fe/lib/")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"apache_hdfs_broker/lib/"),")."),(0,r.kt)("li",{parentName:"ol"},"Supports Hive tables with data stored in CHDFS, which can be used the same way as normal Hive tables. Follow below steps to prepare doris environment\uff1a",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"put chdfs_hadoop_plugin_network-x.x.jar in fe/lib/ and apache_hdfs_broker/lib/"),(0,r.kt)("li",{parentName:"ol"},"copy core-site.xml and hdfs-site.xml from hive cluster to fe/conf/ and apache_hdfs_broker/conf")))),(0,r.kt)("version",{since:"dev"},(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Supports Hive / Iceberg tables with data stored in GooseFS(GFS), which can be used the same way as normal Hive tables. Follow below steps to prepare doris environment\uff1a",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"put goosefs-x.x.x-client.jar in fe/lib/ and apache_hdfs_broker/lib/"),(0,r.kt)("li",{parentName:"ol"},"add extra properties 'fs.AbstractFileSystem.gfs.impl' = 'com.qcloud.cos.goosefs.hadoop.GooseFileSystem'\uff0c 'fs.gfs.impl' = 'com.qcloud.cos.goosefs.hadoop.FileSystem' when creating catalog"))))),(0,r.kt)("h2",{id:"create-catalog"},"Create Catalog"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.kt)("p",null," In addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"hive.metastore.uris")," , which are required, you can specify other parameters regarding the connection."),(0,r.kt)("p",null,"For example, to specify HDFS HA:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.kt)("p",null,"To specify HDFS HA and Kerberos authentication information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hive.metastore.sasl.enabled' = 'true',\n    'hive.metastore.kerberos.principal' = 'your-hms-principal',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n    'hadoop.security.authentication' = 'kerberos',\n    'hadoop.kerberos.keytab' = '/your-keytab-filepath/your.keytab',   \n    'hadoop.kerberos.principal' = 'your-principal@YOUR.COM',\n    'yarn.resourcemanager.principal' = 'your-rm-principal'\n);\n")),(0,r.kt)("p",null,"Remember ",(0,r.kt)("inlineCode",{parentName:"p"},"krb5.conf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"keytab")," file should be placed at all ",(0,r.kt)("inlineCode",{parentName:"p"},"BE")," nodes and ",(0,r.kt)("inlineCode",{parentName:"p"},"FE")," nodes. The location of ",(0,r.kt)("inlineCode",{parentName:"p"},"keytab")," file should be equal to the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop.kerberos.keytab"),".\nAs default, ",(0,r.kt)("inlineCode",{parentName:"p"},"krb5.conf")," should be placed at ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/krb5.conf"),"."),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"hive.metastore.kerberos.principal")," should be same with the same name property used by HMS you are connecting to, which can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"hive-site.xml"),"."),(0,r.kt)("p",null,"To provide Hadoop KMS encrypted transmission information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'dfs.encryption.key.provider.uri' = 'kms://http@kms_host:kms_port/kms'\n);\n")),(0,r.kt)("p",null,"Or to connect to Hive data stored on JuiceFS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'root',\n    'fs.jfs.impl' = 'io.juicefs.JuiceFileSystem',\n    'fs.AbstractFileSystem.jfs.impl' = 'io.juicefs.JuiceFS',\n    'juicefs.meta' = 'xxx'\n);\n")),(0,r.kt)("p",null,"Or to connect to Glue and data stored on S3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.type" = "glue",\n    "aws.region" = "us-east-1",\n    "aws.glue.access-key" = "ak",\n    "aws.glue.secret-key" = "sk",\n    "AWS_ENDPOINT" = "s3.us-east-1.amazonaws.com",\n    "AWS_REGION" = "us-east-1",\n    "AWS_ACCESS_KEY" = "ak",\n    "AWS_SECRET_KEY" = "sk",\n    "use_path_style" = "true"\n);\n')),(0,r.kt)("p",null,"In Doris 1.2.1 and newer, you can create a Resource that contains all these parameters, and reuse the Resource when creating new Catalogs. Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"# 1. Create Resource\nCREATE RESOURCE hms_resource PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n    \n# 2. Create Catalog and use an existing Resource. The key and value information in the followings will overwrite the corresponding information in the Resource.\nCREATE CATALOG hive WITH RESOURCE hms_resource PROPERTIES(\n    'key' = 'value'\n);\n")),(0,r.kt)("version",{since:"dev"}),(0,r.kt)("p",null,"You can use the config ",(0,r.kt)("inlineCode",{parentName:"p"},"file.meta.cache.ttl-second")," to set TTL(Time-to-Live) config of File Cache, so that the stale file info will be invalidated automatically after expiring. The unit of time is second."),(0,r.kt)("p",null,"You can also set file_meta_cache_ttl_second to 0 to disable file cache.Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n    'file.meta.cache.ttl-second' = '60'\n);\n")),(0,r.kt)("p",null,"You can also put the ",(0,r.kt)("inlineCode",{parentName:"p"},"hive-site.xml")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf"),"  directories of FE and BE. This will enable Doris to automatically read information from ",(0,r.kt)("inlineCode",{parentName:"p"},"hive-site.xml"),". The relevant information will be overwritten based on the following rules :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Information in Resource will overwrite that in  ",(0,r.kt)("inlineCode",{parentName:"li"},"hive-site.xml"),". "),(0,r.kt)("li",{parentName:"ul"},"Information in ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE CATALOG PROPERTIES")," will overwrite that in Resource.")),(0,r.kt)("h3",{id:"hive-versions"},"Hive Versions"),(0,r.kt)("p",null,"Doris can access Hive Metastore in all Hive versions. By default, Doris uses the interface compatible with Hive 2.3 to access Hive Metastore. You can specify a certain Hive version when creating Catalogs, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hive.version' = '1.1.0'\n);\n")),(0,r.kt)("h2",{id:"column-type-mapping"},"Column Type Mapping"),(0,r.kt)("p",null,"This is applicable for Hive/Iceberge/Hudi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HMS Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,r.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"smallint"),(0,r.kt)("td",{parentName:"tr",align:null},"smallint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"varchar"),(0,r.kt)("td",{parentName:"tr",align:null},"varchar"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array<type>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array<type>")),(0,r.kt)("td",{parentName:"tr",align:null},"Support nested array, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"array<array<int>>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map<KeyType, ValueType>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map<KeyType, ValueType>")),(0,r.kt)("td",{parentName:"tr",align:null},"Not support nested map. KeyType and ValueType should be primitive types.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"struct<col1: Type1, col2: Type2, ...>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"struct<col1: Type1, col2: Type2, ...>")),(0,r.kt)("td",{parentName:"tr",align:null},"Not support nested struct. Type1, Type2, ... should be primitive types.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other"),(0,r.kt)("td",{parentName:"tr",align:null},"unsupported"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"use-ranger-for-permission-verification"},"Use Ranger for permission verification"),(0,r.kt)("version",{since:"dev"},(0,r.kt)("p",null,"Apache Ranger is a security framework for monitoring, enabling services, and managing comprehensive data security access on the Hadoop platform."),(0,r.kt)("p",null,"Currently, Doris supports Ranger's library, table, and column permissions, but does not support encryption, row permissions, and so on.")),(0,r.kt)("h3",{id:"environment-configuration"},"Environment configuration"),(0,r.kt)("p",null,"Connecting to Hive Metastore with Ranger permission verification enabled requires additional configuration&configuration environment:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When creating a catalog, add:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'"access_controller.properties.ranger.service.name" = "hive",\n"access_controller.class" = "org.apache.doris.catalog.authorizer.RangerHiveAccessControllerFactory",\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure all FE environments:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the configuration files ranger-live-audit.xml, ranger-live-security.xml, ranger-policymgr-ssl.xml under the HMS conf directory to<doris_ Home>/conf directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the properties of ranger-live-security.xml. The reference configuration is as follows:"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n<configuration>\n    #The directory for caching permission data, needs to be writable\n    <property>\n        <name>ranger.plugin.hive.policy.cache.dir</name>\n        <value>/mnt/datadisk0/zhangdong/rangerdata</value>\n    </property>\n    #The time interval for periodically pulling permission data\n    <property>\n        <name>ranger.plugin.hive.policy.pollIntervalMs</name>\n        <value>30000</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.client.connection.timeoutMs</name>\n        <value>60000</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.client.read.timeoutMs</name>\n        <value>60000</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.ssl.config.file</name>\n        <value></value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.url</name>\n        <value>http://172.21.0.32:6080</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.source.impl</name>\n        <value>org.apache.ranger.admin.client.RangerAdminRESTClient</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.service.name</name>\n        <value>hive</value>\n    </property>\n\n    <property>\n        <name>xasecure.hive.update.xapolicies.on.grant.revoke</name>\n        <value>true</value>\n    </property>\n\n</configuration>\n')),(0,r.kt)("ol",{parentName:"li",start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To obtain the log of Ranger authentication itself, you can click<doris_ Add the configuration file log4j.properties under the home>/conf directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart FE."))))),(0,r.kt)("h3",{id:"best-practices"},"Best Practices"),(0,r.kt)("p",null,"1.Create user user1 on the ranger side and authorize the query permission of db1.table1.col1 "),(0,r.kt)("p",null,"2.Create the role role1 on the ranger side and authorize the query permission of db1.table1.col2"),(0,r.kt)("p",null,"3.Create user user1 with the same name in Doris, and user1 will directly have the query permission of db1.table1.col1"),(0,r.kt)("p",null,"4.Create the role role1 with the same name in Doris and assign role1 to user1. User1 will have query permissions for both db1.table1.col1 and col2"))}c.isMDXComponent=!0}}]);