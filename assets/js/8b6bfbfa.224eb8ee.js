"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[93380],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=l,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69587:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={title:"Multi Catalog",language:"en"},i=void 0,o={unversionedId:"lakehouse/multi-catalog/multi-catalog",id:"version-1.2/lakehouse/multi-catalog/multi-catalog",title:"Multi Catalog",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/lakehouse/multi-catalog/multi-catalog.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/",permalink:"/docs/1.2/lakehouse/multi-catalog/",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Multi Catalog",language:"en"},sidebar:"docs",previous:{title:"Doris Join optimization principle",permalink:"/docs/1.2/query-acceleration/join-optimization/doris-join-optimization"},next:{title:"Hive",permalink:"/docs/1.2/lakehouse/multi-catalog/hive"}},s={},p=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Examples",id:"examples",level:2},{value:"Connect to Hive",id:"connect-to-hive",level:3},{value:"Connect to Iceberg",id:"connect-to-iceberg",level:3},{value:"Connect to Hudi",id:"connect-to-hudi",level:3},{value:"Connect to Elasticsearch",id:"connect-to-elasticsearch",level:3},{value:"Connect to JDBC",id:"connect-to-jdbc",level:3},{value:"Column Type Mapping",id:"column-type-mapping",level:2},{value:"Privilege Management",id:"privilege-management",level:2},{value:"Database synchronizing management",id:"database-synchronizing-management",level:2},{value:"Metadata Update",id:"metadata-update",level:2},{value:"Manual Update",id:"manual-update",level:3},{value:"Automatic Update",id:"automatic-update",level:3},{value:"Hive Metastore",id:"hive-metastore",level:4},{value:"Timing Refresh",id:"timing-refresh",level:4},{value:"Example",id:"example",level:5}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"multi-catalog"},"Multi Catalog"),(0,l.kt)("version",{since:"1.2.0"},(0,l.kt)("p",null,"Multi-Catalog is a newly added feature in Doris 1.2.0. It allows Doris to interface with external catalogs more conveniently and thus increases the data lake analysis and federated query capabilities of Doris."),(0,l.kt)("p",null,"In older versions of Doris, user data is in a two-tiered structure: database and table. Thus, connections to external catalogs could only be done at the database or table level. For example, users could create a mapping to a table in an external catalog via ",(0,l.kt)("inlineCode",{parentName:"p"},"create external table"),", or to a database via ",(0,l.kt)("inlineCode",{parentName:"p"},"create external database")," . If there were large amounts of databases or tables in the external catalog, users would need to create mappings to them one by one, which could be a heavy workload."),(0,l.kt)("p",null,"With the advent of Multi-Catalog, Doris now has a new three-tiered metadata hierarchy (catalog -> database -> table), which means users can connect to external data at the catalog level. The currently supported external catalogs include:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Hive"),(0,l.kt)("li",{parentName:"ol"},"Iceberg"),(0,l.kt)("li",{parentName:"ol"},"Hudi"),(0,l.kt)("li",{parentName:"ol"},"Elasticsearch"),(0,l.kt)("li",{parentName:"ol"},"JDBC")),(0,l.kt)("p",null,"Multi-Catalog works as an additional and enhanced external table connection method. It helps users conduct multi-catalog federated queries quickly. ")),(0,l.kt)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Internal Catalog"),(0,l.kt)("p",{parentName:"li"},"Existing databases and tables in Doris are all under the Internal Catalog, which is the default catalog in Doris and cannot be modified or deleted.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"External Catalog"),(0,l.kt)("p",{parentName:"li"},"Users can create an External Catalog using the ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG/"},"CREATE CATALOG")," command, and view the existing Catalogs via the ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS/"},"SHOW CATALOGS")," command.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Switch Catalog"),(0,l.kt)("p",{parentName:"li"},"After login, you will enter the Internal Catalog by default. Then, you can view or switch to your target database via ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW DATABASES")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"USE DB")," . "),(0,l.kt)("p",{parentName:"li"},"Example of switching catalog:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"SWITCH internal;\nSWITCH hive_catalog;\n")),(0,l.kt)("p",{parentName:"li"},"After switching catalog, you can view or switch to your target database in that catalog via ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW DATABASES")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"USE DB")," . You can view and access data in External Catalogs the same way as doing that in the Internal Catalog."),(0,l.kt)("p",{parentName:"li"},"Doris only supports read-only access to data in External Catalogs currently. ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Delete Catalog"),(0,l.kt)("p",{parentName:"li"},"Databases and tables in External Catalogs are for read only, but External Catalogs are deletable via the ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-CATALOG/"},"DROP CATALOG")," command. (The Internal Catalog cannot be deleted.)"),(0,l.kt)("p",{parentName:"li"},"The deletion only means to remove the mapping in Doris to the corresponding catalog. It doesn't change the external catalog itself by all means.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Resource"),(0,l.kt)("p",{parentName:"li"},"Resource is a set of configurations. Users can create a Resource using the ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE/"},"CREATE RESOURCE")," command, and then apply this Resource for a newly created Catalog. One Resource can be reused for multiple Catalogs. "))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"connect-to-hive"},"Connect to Hive"),(0,l.kt)("p",null,"The followings are the instruction on how to connect to a Hive catalog using the Catalog feature."),(0,l.kt)("p",null,"For more information about Hive, please see ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.2/lakehouse/multi-catalog/hive"},"Hive"),"."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create Catalog"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004'\n);\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Syntax Help: ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG/"},"CREATE CATALOG")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"View Catalog"),(0,l.kt)("p",{parentName:"li"},"View existing Catalogs via the ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW CATALOGS")," command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"mysql> SHOW CATALOGS;\n+-----------+-------------+----------+\n| CatalogId | CatalogName | Type     |\n+-----------+-------------+----------+\n|     10024 | hive        | hms      |\n|         0 | internal    | internal |\n+-----------+-------------+----------+\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Syntax Help: ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS/"},"SHOW CATALOGS"))),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"You can view the CREATE CATALOG statement via ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-CATALOG/"},"SHOW CREATE CATALOG"),".")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"You can modify the Catalog PROPERTIES via ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG/"},"ALTER CATALOG"),"."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Switch Catalog"),(0,l.kt)("p",{parentName:"li"},"Switch to the Hive Catalog using the ",(0,l.kt)("inlineCode",{parentName:"p"},"SWITCH"),"  command, and view the databases in it:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"mysql> SWITCH hive;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SHOW DATABASES;\n+-----------+\n| Database  |\n+-----------+\n| default   |\n| random    |\n| ssb100    |\n| tpch1     |\n| tpch100   |\n| tpch1_orc |\n+-----------+\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Syntax Help: ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Utility-Statements/SWITCH/"},"SWITCH")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use the Catalog"),(0,l.kt)("p",{parentName:"li"},"After switching to the Hive Catalog, you can use the relevant features."),(0,l.kt)("p",{parentName:"li"},"For example, you can switch to Database tpch100, and view the tables in it:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"mysql> USE tpch100;\nDatabase changed\n\nmysql> SHOW TABLES;\n+-------------------+\n| Tables_in_tpch100 |\n+-------------------+\n| customer          |\n| lineitem          |\n| nation            |\n| orders            |\n| part              |\n| partsupp          |\n| region            |\n| supplier          |\n+-------------------+\n")),(0,l.kt)("p",{parentName:"li"},"You can view the schema of Table lineitem:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"mysql> DESC lineitem;\n+-----------------+---------------+------+------+---------+-------+\n| Field           | Type          | Null | Key  | Default | Extra |\n+-----------------+---------------+------+------+---------+-------+\n| l_shipdate      | DATE          | Yes  | true | NULL    |       |\n| l_orderkey      | BIGINT        | Yes  | true | NULL    |       |\n| l_linenumber    | INT           | Yes  | true | NULL    |       |\n| l_partkey       | INT           | Yes  | true | NULL    |       |\n| l_suppkey       | INT           | Yes  | true | NULL    |       |\n| l_quantity      | DECIMAL(15,2) | Yes  | true | NULL    |       |\n| l_extendedprice | DECIMAL(15,2) | Yes  | true | NULL    |       |\n| l_discount      | DECIMAL(15,2) | Yes  | true | NULL    |       |\n| l_tax           | DECIMAL(15,2) | Yes  | true | NULL    |       |\n| l_returnflag    | TEXT          | Yes  | true | NULL    |       |\n| l_linestatus    | TEXT          | Yes  | true | NULL    |       |\n| l_commitdate    | DATE          | Yes  | true | NULL    |       |\n| l_receiptdate   | DATE          | Yes  | true | NULL    |       |\n| l_shipinstruct  | TEXT          | Yes  | true | NULL    |       |\n| l_shipmode      | TEXT          | Yes  | true | NULL    |       |\n| l_comment       | TEXT          | Yes  | true | NULL    |       |\n+-----------------+---------------+------+------+---------+-------+\n")),(0,l.kt)("p",{parentName:"li"},"You can perform a query:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"mysql> SELECT l_shipdate, l_orderkey, l_partkey FROM lineitem limit 10;\n+------------+------------+-----------+\n| l_shipdate | l_orderkey | l_partkey |\n+------------+------------+-----------+\n| 1998-01-21 |   66374304 |    270146 |\n| 1997-11-17 |   66374304 |    340557 |\n| 1997-06-17 |   66374400 |   6839498 |\n| 1997-08-21 |   66374400 |  11436870 |\n| 1997-08-07 |   66374400 |  19473325 |\n| 1997-06-16 |   66374400 |   8157699 |\n| 1998-09-21 |   66374496 |  19892278 |\n| 1998-08-07 |   66374496 |   9509408 |\n| 1998-10-27 |   66374496 |   4608731 |\n| 1998-07-14 |   66374592 |  13555929 |\n+------------+------------+-----------+\n")),(0,l.kt)("p",{parentName:"li"},"Or you can conduct a join query:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"mysql> SELECT l.l_shipdate FROM hive.tpch100.lineitem l WHERE l.l_partkey IN (SELECT p_partkey FROM internal.db1.part) LIMIT 10;\n+------------+\n| l_shipdate |\n+------------+\n| 1993-02-16 |\n| 1995-06-26 |\n| 1995-08-19 |\n| 1992-07-23 |\n| 1998-05-23 |\n| 1997-07-12 |\n| 1994-03-06 |\n| 1996-02-07 |\n| 1997-06-01 |\n| 1996-08-23 |\n+------------+\n")),(0,l.kt)("p",{parentName:"li"},"The table is identified in the format of ",(0,l.kt)("inlineCode",{parentName:"p"},"catalog.database.table")," . For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"internal.db1.part"),"  in the above snippet."),(0,l.kt)("p",{parentName:"li"},"If the target table is in the current Database of the current Catalog,  ",(0,l.kt)("inlineCode",{parentName:"p"},"catalog")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"database")," in the format can be omitted."),(0,l.kt)("p",{parentName:"li"},"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," command to insert table data from the Hive Catalog into a table in the Internal Catalog. This is how you can ",(0,l.kt)("strong",{parentName:"p"},"import data from External Catalogs to the Internal Catalog"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"mysql> SWITCH internal;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> USE db1;\nDatabase changed\n\nmysql> INSERT INTO part SELECT * FROM hive.tpch100.part limit 1000;\nQuery OK, 1000 rows affected (0.28 sec)\n{'label':'insert_212f67420c6444d5_9bfc184bf2e7edb8', 'status':'VISIBLE', 'txnId':'4'}\n")))),(0,l.kt)("h3",{id:"connect-to-iceberg"},"Connect to Iceberg"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.2/lakehouse/multi-catalog/iceberg"},"Iceberg")),(0,l.kt)("h3",{id:"connect-to-hudi"},"Connect to Hudi"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.2/lakehouse/multi-catalog/hudi"},"Hudi")),(0,l.kt)("h3",{id:"connect-to-elasticsearch"},"Connect to Elasticsearch"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.2/lakehouse/multi-catalog/es"},"Elasticsearch")),(0,l.kt)("h3",{id:"connect-to-jdbc"},"Connect to JDBC"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.2/lakehouse/multi-catalog/jdbc"},"JDBC")),(0,l.kt)("h2",{id:"column-type-mapping"},"Column Type Mapping"),(0,l.kt)("p",null,"After you create a Catalog, Doris will automatically synchronize the databases and tables from the corresponding external catalog to it. The following shows how Doris maps different types of catalogs and tables."),(0,l.kt)("version",{since:"1.2.2"},(0,l.kt)("p",null,"As for types that cannot be mapped to a Doris column type, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"UNION")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"INTERVAL")," , Doris will map them to an UNSUPPORTED type. Here are examples of queries in a table containing UNSUPPORTED types:"),(0,l.kt)("p",null,"Suppose the table is of the following schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"k1 INT,\nk2 INT,\nk3 UNSUPPORTED,\nk4 INT\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"select * from table;                // Error: Unsupported type 'UNSUPPORTED_TYPE' in '`k3`\nselect * except(k3) from table;     // Query OK.\nselect k1, k3 from table;           // Error: Unsupported type 'UNSUPPORTED_TYPE' in '`k3`\nselect k1, k4 from table;           // Query OK.\n"))),(0,l.kt)("p",null,"You can find more details of the mapping of various data sources (Hive, Iceberg, Hudi, Elasticsearch, and JDBC) in the corresponding pages."),(0,l.kt)("h2",{id:"privilege-management"},"Privilege Management"),(0,l.kt)("p",null,"Access from Doris to databases and tables in an External Catalog is not under the privilege control of the external catalog itself, but is authorized by Doris."),(0,l.kt)("p",null,"Along with the new Multi-Catalog feature, we also added privilege management at the Catalog level (See ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/admin-manual/privilege-ldap/user-privilege/"},"Privilege Management")," for details)."),(0,l.kt)("h2",{id:"database-synchronizing-management"},"Database synchronizing management"),(0,l.kt)("p",null,"Setting ",(0,l.kt)("inlineCode",{parentName:"p"},"include_database_list")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"exclude_database_list")," in Catalog properties to specify databases to synchronize."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"include_database_list"),": Only synchronize the specified databases. split with ',', default value is '', means no filter takes effect, synchronizes all databases. db name is case sensitive."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"exclude_database_list"),": Specify databases that do not need to synchronize. split with ',', default value is '', means no filter takes effect, synchronizes all databases. db name is case sensitive."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When ",(0,l.kt)("inlineCode",{parentName:"p"},"include_database_list")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"exclude_database_list")," specify overlapping databases, ",(0,l.kt)("inlineCode",{parentName:"p"},"exclude_database_list")," would take effect with higher privilege over ",(0,l.kt)("inlineCode",{parentName:"p"},"include_database_list"),"."),(0,l.kt)("p",{parentName:"blockquote"},"To connect JDBC, these two properties should work with ",(0,l.kt)("inlineCode",{parentName:"p"},"only_specified_database"),", see ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.2/lakehouse/multi-catalog/jdbc"},"JDBC")," for more detail.")),(0,l.kt)("h2",{id:"metadata-update"},"Metadata Update"),(0,l.kt)("h3",{id:"manual-update"},"Manual Update"),(0,l.kt)("p",null,"By default, changes in metadata of external data sources, including addition or deletion of tables and columns, will not be synchronized into Doris."),(0,l.kt)("p",null,"Users need to manually update the metadata using the  ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Utility-Statements/REFRESH/"},"REFRESH CATALOG")," command."),(0,l.kt)("h3",{id:"automatic-update"},"Automatic Update"),(0,l.kt)("version",{since:"1.2.2"}),(0,l.kt)("h4",{id:"hive-metastore"},"Hive Metastore"),(0,l.kt)("p",null,"Currently, Doris only supports automatic update of metadata in Hive Metastore (HMS). It perceives changes in metadata by the FE node which regularly reads the notification events from HMS. The supported events are as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Event"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Corresponding Update Operation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"CREATE DATABASE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Create a database in the corresponding catalog.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DROP DATABASE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Delete a database in the corresponding catalog.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ALTER DATABASE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Such alterations mainly include changes in properties, comments, or storage location of databases. They do not affect Doris' queries in External Catalogs so they will not be synchronized.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"CREATE TABLE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Create a table in the corresponding database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DROP TABLE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Delete a table in the corresponding database, and invalidate the cache of that table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ALTER TABLE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If it is a renaming, delete the table of the old name, and then create a new table with the new name; otherwise, invalidate the cache of that table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ADD PARTITION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add a partition to the cached partition list of the corresponding table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DROP PARTITION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Delete a partition from the cached partition list of the corresponding table, and invalidate the cache of that partition.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ALTER PARTITION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If it is a renaming, delete the partition of the old name, and then create a new partition with the new name; otherwise, invalidate the cache of that partition.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"After data ingestion, changes in partition tables will follow the ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER PARTITION")," logic, while those in non-partition tables will follow the ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," logic."),(0,l.kt)("p",{parentName:"blockquote"},"If changes are conducted on the file system directly instead of through the HMS, the HMS will not generate an event. As a result, such changes will not be perceived by Doris.")),(0,l.kt)("p",null,"The automatic update feature involves the following parameters in fe.conf:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"enable_hms_events_incremental_sync"),": This specifies whether to enable automatic incremental synchronization for metadata, which is disabled by default. "),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"hms_events_polling_interval_ms"),": This specifies the interval between two readings, which is set to 10000 by default. (Unit: millisecond) "),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"hms_events_batch_size_per_rpc"),": This specifies the maximum number of events that are read at a time, which is set to 500 by default.")),(0,l.kt)("p",null,"To enable automatic update, you need to modify the hive-site.xml of HMS and then restart HMS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<property>\n    <name>hive.metastore.event.db.notification.api.auth</name>\n    <value>false</value>\n</property>\n<property>\n    <name>hive.metastore.dml.events</name>\n    <value>true</value>\n</property>\n<property>\n    <name>hive.metastore.transactional.event.listeners</name>\n    <value>org.apache.hive.hcatalog.listener.DbNotificationListener</value>\n</property>\n\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: To enable automatic update, whether for existing Catalogs or newly created Catalogs, all you need is to set ",(0,l.kt)("inlineCode",{parentName:"p"},"enable_hms_events_incremental_sync")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", and then restart the FE node. You don't need to manually update the metadata before or after the restart.")),(0,l.kt)("version",{since:"dev"},(0,l.kt)("h4",{id:"timing-refresh"},"Timing Refresh"),(0,l.kt)("p",null,"When creating a catalog, specify the refresh time parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata_refresh_interval_sec")," in the properties, in seconds. If this parameter is set when creating a catalog, the master node of FE will refresh the catalog regularly according to the parameter value. Three types are currently supported"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"hms: Hive MetaStore\n-es: Elasticsearch"),(0,l.kt)("li",{parentName:"ul"},"jdbc: Standard interface for database access (JDBC)")),(0,l.kt)("h5",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'-- Set the catalog refresh interval to 20 seconds\nCREATE CATALOG es PROPERTIES (\n     "type"="es",\n     "hosts"="http://127.0.0.1:9200",\n     "metadata_refresh_interval_sec"="20"\n);\n'))))}m.isMDXComponent=!0}}]);