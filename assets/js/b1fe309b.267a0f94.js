"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[30401],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>y});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=d(a),c=n,y=s["".concat(p,".").concat(c)]||s[c]||u[c]||o;return a?r.createElement(y,l(l({ref:e},m),{},{components:a})):r.createElement(y,l({ref:e},m))}));function y(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},96391:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={title:"Import Overview",language:"en"},l=void 0,i={unversionedId:"data-operate/import/load-manual",id:"version-1.2/data-operate/import/load-manual",title:"Import Overview",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/data-operate/import/load-manual.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/load-manual",permalink:"/docs/1.2/data-operate/import/load-manual",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Import Overview",language:"en"},sidebar:"docs",previous:{title:"Bitmap Index",permalink:"/docs/1.2/data-table/index/bitmap-index"},next:{title:"Import local data",permalink:"/docs/1.2/data-operate/import/import-scenes/local-file-load"}},p={},d=[{value:"Supported data sources",id:"supported-data-sources",level:2},{value:"By scene",id:"by-scene",level:3},{value:"Divided by import method",id:"divided-by-import-method",level:3},{value:"Supported data formats",id:"supported-data-formats",level:2},{value:"import instructions",id:"import-instructions",level:2},{value:"Import atomicity guarantees",id:"import-atomicity-guarantees",level:2},{value:"Synchronous and asynchronous imports",id:"synchronous-and-asynchronous-imports",level:2},{value:"Import the data of array type",id:"import-the-data-of-array-type",level:2}],m={toc:d},s="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"import-overview"},"Import Overview"),(0,n.kt)("h2",{id:"supported-data-sources"},"Supported data sources"),(0,n.kt)("p",null,"Doris provides a variety of data import solutions, and you can choose different data import methods for different data sources."),(0,n.kt)("h3",{id:"by-scene"},"By scene"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data Source"),(0,n.kt)("th",{parentName:"tr",align:null},"Import Method"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Object Storage (s3), HDFS"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-scenes/external-storage-load"},"Import data using Broker"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Local file"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-scenes/local-file-load"},"Import local data"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-scenes/kafka-load"},"Subscribe to Kafka data"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mysql, PostgreSQL, Oracle, SQLServer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-scenes/external-table-load"},"Sync data via external table"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Import via JDBC"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-scenes/jdbc-load"},"Sync data using JDBC"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Import JSON format data"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-way/load-json-format"},"JSON format data import"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MySQL Binlog"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-way/binlog-load-manual"},"Binlog Load"))))),(0,n.kt)("h3",{id:"divided-by-import-method"},"Divided by import method"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Import method name"),(0,n.kt)("th",{parentName:"tr",align:null},"Use method"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Spark Load"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-way/spark-load-manual"},"Import external data via Spark"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Broker Load"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-way/broker-load-manual"},"Import external storage data via Broker"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Stream Load"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-way/stream-load-manual"},"Stream import data (local file and memory data)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Routine Load"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-way/routine-load-manual"},"Import Kafka data"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Binlog Load"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-way/binlog-load-manual"},"collect Mysql Binlog import data"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Insert Into"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-way/insert-into-manual"},"External table imports data through INSERT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"S3 Load"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-way/s3-load-manual"},"Object storage data import of S3 protocol"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MySql Load"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/1.2/data-operate/import/import-way/mysql-load-manual"},"Local data import of MySql protocol"))))),(0,n.kt)("h2",{id:"supported-data-formats"},"Supported data formats"),(0,n.kt)("p",null,"Different import methods support slightly different data formats."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Import Methods"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported Formats"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Broker Load"),(0,n.kt)("td",{parentName:"tr",align:null},"parquet, orc, csv, gzip")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Stream Load"),(0,n.kt)("td",{parentName:"tr",align:null},"csv, json, parquet, orc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Routine Load"),(0,n.kt)("td",{parentName:"tr",align:null},"csv, json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MySql Load"),(0,n.kt)("td",{parentName:"tr",align:null},"csv")))),(0,n.kt)("h2",{id:"import-instructions"},"import instructions"),(0,n.kt)("p",null,"The data import implementation of Apache Doris has the following common features, which are introduced here to help you better use the data import function"),(0,n.kt)("h2",{id:"import-atomicity-guarantees"},"Import atomicity guarantees"),(0,n.kt)("p",null,"Each import job of Doris, whether it is batch import using Broker Load or single import using INSERT statement, is a complete transaction operation. The import transaction can ensure that the data in a batch takes effect atomically, and there will be no partial data writing."),(0,n.kt)("p",null,"At the same time, an import job will have a Label. This Label is unique under a database (Database) and is used to uniquely identify an import job. Label can be specified by the user, and some import functions will also be automatically generated by the system."),(0,n.kt)("p",null,"Label is used to ensure that the corresponding import job can only be successfully imported once. A successfully imported Label, when used again, will be rejected with the error ",(0,n.kt)("inlineCode",{parentName:"p"},"Label already used"),". Through this mechanism, ",(0,n.kt)("inlineCode",{parentName:"p"},"At-Most-Once")," semantics can be implemented in Doris. If combined with the ",(0,n.kt)("inlineCode",{parentName:"p"},"At-Least-Once")," semantics of the upstream system, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Exactly-Once")," semantics of imported data can be achieved."),(0,n.kt)("p",null,"For best practices on atomicity guarantees, see Importing Transactions and Atomicity."),(0,n.kt)("h2",{id:"synchronous-and-asynchronous-imports"},"Synchronous and asynchronous imports"),(0,n.kt)("p",null,"Import methods are divided into synchronous and asynchronous. For the synchronous import method, the returned result indicates whether the import succeeds or fails. For the asynchronous import method, a successful return only means that the job was submitted successfully, not that the data was imported successfully. You need to use the corresponding command to check the running status of the import job."),(0,n.kt)("h2",{id:"import-the-data-of-array-type"},"Import the data of array type"),(0,n.kt)("p",null,"The array function can only be supported in vectorization scenarios, but non-vectorization scenarios are not supported.\nif you want to apply the array function to import data, you should enable vectorization engine. Then you need to cast the input parameter column into the array type according to the parameter of the array function. Finally, you can continue to use the array function."),(0,n.kt)("p",null,"For example, in the following import, you need to cast columns b14 and a13 into ",(0,n.kt)("inlineCode",{parentName:"p"},"array<string>")," type, and then use the ",(0,n.kt)("inlineCode",{parentName:"p"},"array_union")," function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL label_03_14_49_34_898986_19090452100 ( \n  DATA INFILE("hdfs://test.hdfs.com:9000/user/test/data/sys/load/array_test.data") \n  INTO TABLE `test_array_table` \n  COLUMNS TERMINATED BY "|" (`k1`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `a10`, `a11`, `a12`, `a13`, `b14`) \n  SET(a14=array_union(cast(b14 as array<string>), cast(a13 as array<string>))) WHERE size(a2) > 270) \n  WITH BROKER "hdfs" ("username"="test_array", "password"="") \n  PROPERTIES( "max_filter_ratio"="0.8" );\n')))}u.isMDXComponent=!0}}]);