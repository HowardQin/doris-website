"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},43845:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"FAQ",language:"en"},i=void 0,l={unversionedId:"lakehouse/faq",id:"lakehouse/faq",title:"FAQ",description:"\x3c!--",source:"@site/docs/lakehouse/faq.md",sourceDirName:"lakehouse",slug:"/lakehouse/faq",permalink:"/docs/dev/lakehouse/faq",draft:!1,tags:[],version:"current",frontMatter:{title:"FAQ",language:"en"},sidebar:"docs",previous:{title:"File Cache",permalink:"/docs/dev/lakehouse/filecache"},next:{title:"File system benchmark tools",permalink:"/docs/dev/lakehouse/fs_benchmark_tool"}},p={},s=[],c={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What to do with errors such as  ",(0,r.kt)("inlineCode",{parentName:"p"},"failed to get schema")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage schema reading not supported"),"  when accessing Icerberg tables via Hive Metastore?"),(0,r.kt)("p",{parentName:"li"},"To fix this, please place the Jar file package of ",(0,r.kt)("inlineCode",{parentName:"p"},"iceberg")," runtime in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/")," directory of Hive."),(0,r.kt)("p",{parentName:"li"},"And configure as follows in  ",(0,r.kt)("inlineCode",{parentName:"p"},"hive-site.xml")," :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"metastore.storage.schema.reader.impl=org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader\n")),(0,r.kt)("p",{parentName:"li"},"After configuring, please restart Hive Metastore.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What to do with the ",(0,r.kt)("inlineCode",{parentName:"p"},"GSS initiate failed")," error when connecting to Hive Metastore with Kerberos authentication?"),(0,r.kt)("p",{parentName:"li"},"Usually it is caused by incorrect Kerberos authentication information, you can troubleshoot by the following steps:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In versions before  1.2.1, the libhdfs3 library that Doris depends on does not enable gsasl. Please update to a version later than 1.2.2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm that the correct keytab and principal are set for each component, and confirm that the keytab file exists on all FE and BE nodes."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"hadoop.kerberos.keytab"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"hadoop.kerberos.principal"),": for Hadoop HDFS"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"hive.metastore.kerberos.principal"),": for hive metastore."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Try to replace the IP in the principal with a domain name (do not use the default ",(0,r.kt)("inlineCode",{parentName:"p"},"_HOST")," placeholder)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm that the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/krb5.conf")," file exists on all FE and BE nodes.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What to do with the",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang.VerifyError: xxx")," error when accessing HDFS 3.x?"),(0,r.kt)("p",{parentName:"li"},"Doris 1.2.1 and the older versions rely on Hadoop 2.8. Please update Hadoop to 2.10.2 or update Doris to 1.2.2 or newer.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An error is reported when using KMS to access HDFS: ",(0,r.kt)("inlineCode",{parentName:"p"},"java.security.InvalidKeyException: Illegal key size")),(0,r.kt)("p",{parentName:"li"},"Upgrade the JDK version to a version >= Java 8 u162. Or download and install the JCE Unlimited Strength Jurisdiction Policy Files corresponding to the JDK.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When querying a table in ORC format, FE reports an error ",(0,r.kt)("inlineCode",{parentName:"p"},"Could not obtain block")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Caused by: java.lang.NoSuchFieldError: types")),(0,r.kt)("p",{parentName:"li"},"For ORC files, by default, FE will access HDFS to obtain file information and split files. In some cases, FE may not be able to access HDFS. It can be solved by adding the following parameters:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'"hive.exec.orc.split.strategy" = "BI"')),(0,r.kt)("p",{parentName:"li"},"Other options: HYBRID (default), ETL.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An error is reported when connecting to SQLServer through JDBC Catalog: ",(0,r.kt)("inlineCode",{parentName:"p"},"unable to find valid certification path to requested target")),(0,r.kt)("p",{parentName:"li"},"Please add ",(0,r.kt)("inlineCode",{parentName:"p"},"trustServerCertificate=true")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc_url"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When connecting to the MySQL database through the JDBC Catalog, the Chinese characters are garbled, or the Chinese character condition query is incorrect"),(0,r.kt)("p",{parentName:"li"},"Please add ",(0,r.kt)("inlineCode",{parentName:"p"},"useUnicode=true&characterEncoding=utf-8")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc_url")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: After version 1.2.3, these parameters will be automatically added when using JDBC Catalog to connect to the MySQL database."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An error is reported when connecting to the MySQL database through the JDBC Catalog: ",(0,r.kt)("inlineCode",{parentName:"p"},"Establishing SSL connection without server's identity verification is not recommended")),(0,r.kt)("p",{parentName:"li"},"Please add ",(0,r.kt)("inlineCode",{parentName:"p"},"useSSL=true")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc_url"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An error is reported when connecting Hive Catalog: ",(0,r.kt)("inlineCode",{parentName:"p"},"Caused by: java.lang.NullPointerException")),(0,r.kt)("p",{parentName:"li"},"If there is stack trace in fe.log:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Caused by: java.lang.NullPointerException\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.getFilteredObjects(AuthorizationMetaStoreFilterHook.java:78) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.filterDatabases(AuthorizationMetaStoreFilterHook.java:55) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1548) ~[doris-fe.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1542) ~[doris-fe.jar:3.1.3]\n    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:1.8.0_181]\n")),(0,r.kt)("p",{parentName:"li"},"Try adding ",(0,r.kt)("inlineCode",{parentName:"p"},'"metastore.filter.hook" = "org.apache.hadoop.hive.metastore.DefaultMetaStoreFilterHookImpl"')," in ",(0,r.kt)("inlineCode",{parentName:"p"},"create catalog")," statement.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An error is reported when connecting to the Hive database through the Hive Catalog: ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteException: SIMPLE authentication is not enabled. Available: [TOKEN, KERBEROS]")),(0,r.kt)("p",{parentName:"li"},"If both ",(0,r.kt)("inlineCode",{parentName:"p"},"show databases")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"show tables")," are OK, and the above error occurs when querying, we need to perform the following two operations:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Core-site.xml and hdfs-site.xml need to be placed in the fe/conf and be/conf directories"),(0,r.kt)("li",{parentName:"ul"},"The BE node executes the kinit of Kerberos, restarts the BE, and then executes the query."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"show tables")," is normal after creating the Hive Catalog, but the query report ",(0,r.kt)("inlineCode",{parentName:"p"},"java.net.UnknownHostException: xxxxx")),(0,r.kt)("p",{parentName:"li"},"Add a property in CATALOG:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"'fs.defaultFS' = 'hdfs://<your_nameservice_or_actually_HDFS_IP_and_port>'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The values of the partition fields in the hudi table can be found on hive, but they cannot be found on doris."),(0,r.kt)("p",{parentName:"li"},"Doris and hive currently query hudi differently. Doris needs to add partition fields to the avsc file of the hudi table structure. If not added, it will cause Doris to query partition_ Val is empty (even if home. datasource. live_sync. partition_fields=partition_val is set)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "type": "record",\n    "name": "record",\n    "fields": [{\n        "name": "partition_val",\n        "type": [\n            "null",\n            "string"\n            ],\n        "doc": "Preset partition field, empty string when not partitioned",\n        "default": null\n        },\n        {\n        "name": "name",\n        "type": "string",\n        "doc": "\u540d\u79f0"\n        },\n        {\n        "name": "create_time",\n        "type": "string",\n        "doc": "\u521b\u5efa\u65f6\u95f4"\n        }\n    ]\n}\n')))))}m.isMDXComponent=!0}}]);