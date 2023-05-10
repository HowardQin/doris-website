"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[2887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"File Analysis",language:"en"},i=void 0,s={unversionedId:"lakehouse/file",id:"lakehouse/file",title:"File Analysis",description:"\x3c!--",source:"@site/docs/lakehouse/file.md",sourceDirName:"lakehouse",slug:"/lakehouse/file",permalink:"/docs/dev/lakehouse/file",draft:!1,tags:[],version:"current",frontMatter:{title:"File Analysis",language:"en"},sidebar:"docs",previous:{title:"Hive External Table",permalink:"/docs/dev/lakehouse/external-table/hive"},next:{title:"File Cache",permalink:"/docs/dev/lakehouse/filecache"}},o={},u=[{value:"Usage",id:"usage",level:2},{value:"Automatic Column Type Inference",id:"automatic-column-type-inference",level:3},{value:"Query and Analysis",id:"query-and-analysis",level:3},{value:"Data Ingestion",id:"data-ingestion",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file-analysis"},"File Analysis"),(0,r.kt)("version",{since:"1.2.0"},(0,r.kt)("p",null,"With the Table Value Function feature, Doris is able to query files in object storage or HDFS as simply as querying Tables. In addition, it supports automatic column type inference.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"For more usage details, please see the documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/sql-manual/sql-functions/table-functions/s3/"},"S3"),": supports file analysis on object storage compatible with S3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/sql-manual/sql-functions/table-functions/hdfs/"},"HDFS"),": supports file analysis on HDFS")),(0,r.kt)("p",null,"The followings illustrate how file analysis is conducted with the example of S3 Table Value Function."),(0,r.kt)("h3",{id:"automatic-column-type-inference"},"Automatic Column Type Inference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'MySQL [(none)]> DESC FUNCTION s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "ACCESS_KEY"= "minioadmin",\n    "SECRET_KEY" = "minioadmin",\n    "Format" = "parquet",\n    "use_path_style"="true");\n+---------------+--------------+------+-------+---------+-------+\n| Field         | Type         | Null | Key   | Default | Extra |\n+---------------+--------------+------+-------+---------+-------+\n| p_partkey     | INT          | Yes  | false | NULL    | NONE  |\n| p_name        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_mfgr        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_brand       | TEXT         | Yes  | false | NULL    | NONE  |\n| p_type        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_size        | INT          | Yes  | false | NULL    | NONE  |\n| p_container   | TEXT         | Yes  | false | NULL    | NONE  |\n| p_retailprice | DECIMAL(9,0) | Yes  | false | NULL    | NONE  |\n| p_comment     | TEXT         | Yes  | false | NULL    | NONE  |\n+---------------+--------------+------+-------+---------+-------+\n')),(0,r.kt)("p",null,"An S3 Table Value Function is defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "ACCESS_KEY"= "minioadmin",\n    "SECRET_KEY" = "minioadmin",\n    "Format" = "parquet",\n    "use_path_style"="true")\n')),(0,r.kt)("p",null,"It specifies the file path, connection, and authentication."),(0,r.kt)("p",null,"After defining, you can view the schema of this file using the ",(0,r.kt)("inlineCode",{parentName:"p"},"DESC FUNCTION")," statement."),(0,r.kt)("p",null,"As can be seen, Doris is able to automatically infer column types based on the metadata of the Parquet file."),(0,r.kt)("p",null,"Besides Parquet, Doris supports analysis and auto column type inference of ORC, CSV, and Json files."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CSV Schema")),(0,r.kt)("version",{since:"dev"}),(0,r.kt)("p",null,"By default, for CSV format files, all columns are of type String. Column names and column types can be specified individually via the ",(0,r.kt)("inlineCode",{parentName:"p"},"csv_schema")," attribute. Doris will use the specified column type for file reading. The format is as follows:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"name1:type1;name2:type2;...")),(0,r.kt)("p",null,"For columns with mismatched formats (such as string in the file and int defined by the user), or missing columns (such as 4 columns in the file and 5 columns defined by the user), these columns will return null."),(0,r.kt)("p",null,"Currently supported column types are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"mapping type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,r.kt)("td",{parentName:"tr",align:null},"tinyint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"smallint"),(0,r.kt)("td",{parentName:"tr",align:null},"smallint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"largeint"),(0,r.kt)("td",{parentName:"tr",align:null},"largeint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"double")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimal(p,s)"),(0,r.kt)("td",{parentName:"tr",align:null},"decimalv3(p,s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"datev2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"datetimev2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"varchar"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"s3 (\n    'URI' = 'https://bucket1/inventory.dat',\n    'ACCESS_KEY'= 'ak',\n    'SECRET_KEY' = 'sk',\n    'FORMAT' = 'csv',\n    'column_separator' = '|',\n    'csv_schema' = 'k1:int;k2:int;k3:int;k4:decimal(38,10)',\n    'use_path_style'='true'\n)\n")),(0,r.kt)("h3",{id:"query-and-analysis"},"Query and Analysis"),(0,r.kt)("p",null,"You can conduct queries and analysis on this Parquet file using any SQL statements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'SELECT * FROM s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "ACCESS_KEY"= "minioadmin",\n    "SECRET_KEY" = "minioadmin",\n    "Format" = "parquet",\n    "use_path_style"="true")\nLIMIT 5;\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n| p_partkey | p_name                                   | p_mfgr         | p_brand  | p_type                  | p_size | p_container | p_retailprice | p_comment           |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n|         1 | goldenrod lavender spring chocolate lace | Manufacturer#1 | Brand#13 | PROMO BURNISHED COPPER  |      7 | JUMBO PKG   |           901 | ly. slyly ironi     |\n|         2 | blush thistle blue yellow saddle         | Manufacturer#1 | Brand#13 | LARGE BRUSHED BRASS     |      1 | LG CASE     |           902 | lar accounts amo    |\n|         3 | spring green yellow purple cornsilk      | Manufacturer#4 | Brand#42 | STANDARD POLISHED BRASS |     21 | WRAP CASE   |           903 | egular deposits hag |\n|         4 | cornflower chocolate smoke green pink    | Manufacturer#3 | Brand#34 | SMALL PLATED BRASS      |     14 | MED DRUM    |           904 | p furiously r       |\n|         5 | forest brown coral puff cream            | Manufacturer#3 | Brand#32 | STANDARD POLISHED TIN   |     15 | SM PKG      |           905 |  wake carefully     |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n')),(0,r.kt)("p",null,"You can put the Table Value Function anywhere that you used to put Table in the SQL, such as in the WITH or FROM clause in CTE. In this way, you can treat the file as a normal table and conduct analysis conveniently."),(0,r.kt)("version",{since:"dev"}),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u7528\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE VIEW")," \u8bed\u53e5\u4e3a Table Value Function \u521b\u5efa\u4e00\u4e2a\u903b\u8f91\u89c6\u56fe\u3002\u8fd9\u6837\uff0c\u4f60\u53ef\u4ee5\u60f3\u5176\u4ed6\u89c6\u56fe\u4e00\u6837\uff0c\u5bf9\u8fd9\u4e2a Table Value Function \u8fdb\u884c\u8bbf\u95ee\u3001\u6743\u9650\u7ba1\u7406\u7b49\u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u8ba9\u5176\u4ed6\u7528\u6237\u8bbf\u95ee\u8fd9\u4e2a Table Value Function\u3002\nYou can also create a logic view by using ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE VIEW")," statement for a Table Value Function. So that you can query this view, grant priv on this view or allow other user to access this Table Value Function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'CREATE VIEW v1 AS \nSELECT * FROM s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "ACCESS_KEY"= "minioadmin",\n    "SECRET_KEY" = "minioadmin",\n    "Format" = "parquet",\n    "use_path_style"="true");\n\nDESC v1;\n\nSELECT * FROM v1;\n\nGRANT SELECT_PRIV ON db1.v1 TO user1;\n')),(0,r.kt)("h3",{id:"data-ingestion"},"Data Ingestion"),(0,r.kt)("p",null,"Users can ingest files into Doris tables via  ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO SELECT"),"  for faster file analysis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// 1. Create Doris internal table\nCREATE TABLE IF NOT EXISTS test_table\n(\n    id int,\n    name varchar(50),\n    age int\n)\nDISTRIBUTED BY HASH(id) BUCKETS 4\nPROPERTIES("replication_num" = "1");\n\n// 2. Insert data using S3 Table Value Function\nINSERT INTO test_table (id,name,age)\nSELECT cast(id as INT) as id, name, cast (age as INT) as age\nFROM s3(\n    "uri" = "${uri}",\n    "ACCESS_KEY"= "${ak}",\n    "SECRET_KEY" = "${sk}",\n    "format" = "${format}",\n    "strip_outer_array" = "true",\n    "read_json_by_line" = "true",\n    "use_path_style" = "true");\n')))}m.isMDXComponent=!0}}]);