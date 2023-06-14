"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3621],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>m});var a=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=a.createContext({}),i=function(e){var r=a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d=function(e){var r=i(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",E={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(n),u=t,m=p["".concat(l,".").concat(u)]||p[u]||E[u]||s;return n?a.createElement(m,o(o({ref:r},d),{},{components:n})):a.createElement(m,o({ref:r},d))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,o=new Array(s);o[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:t,o[1]=c;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58588:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>E,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var a=n(87462),t=(n(67294),n(3905));const s={title:"CREATE-CATALOG",language:"en"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG",title:"CREATE-CATALOG",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-CATALOG",language:"en"},sidebar:"docs",previous:{title:"CREATE-FUNCTION",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION"},next:{title:"DROP-INDEX",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-INDEX"}},l={},i=[{value:"CREATE-CATALOG",id:"create-catalog",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Create catalog",id:"create-catalog-1",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],d={toc:i},p="wrapper";function E(e){let{components:r,...n}=e;return(0,t.kt)(p,(0,a.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"create-catalog"},"CREATE-CATALOG"),(0,t.kt)("h3",{id:"name"},"Name"),(0,t.kt)("p",null,"CREATE CATALOG"),(0,t.kt)("h3",{id:"description"},"Description"),(0,t.kt)("p",null,"This statement is used to create an external catalog"),(0,t.kt)("p",null,"Syntax:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG [IF NOT EXISTS] catalog_name\n    [WITH RESOURCE resource_name]\n    [PROPERTIES ("key"="value", ...)];\n')),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"RESOURCE")," can be created from ",(0,t.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE"},"CREATE RESOURCE"),", current supports\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"hms\uff1aHive MetaStore"),(0,t.kt)("li",{parentName:"ul"},"es\uff1aElasticsearch"),(0,t.kt)("li",{parentName:"ul"},"jdbc: Standard interface for database access (JDBC), currently supports MySQL and PostgreSQL")),(0,t.kt)("h3",{id:"create-catalog-1"},"Create catalog"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Create catalog through resource")),(0,t.kt)("p",null,"In later versions of ",(0,t.kt)("inlineCode",{parentName:"p"},"1.2.0"),", it is recommended to create a catalog through resource."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE RESOURCE catalog_resource PROPERTIES (\n    'type'='hms|es|jdbc',\n    ...\n);\nCREATE CATALOG catalog_name WITH RESOURCE catalog_resource PROPERTIES (\n    'key' = 'value'\n);\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Create catalog through properties")),(0,t.kt)("p",null,"Version ",(0,t.kt)("inlineCode",{parentName:"p"},"1.2.0")," creates a catalog through properties."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG catalog_name PROPERTIES (\n    'type'='hms|es|jdbc',\n    ...\n);\n")),(0,t.kt)("h3",{id:"example"},"Example"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Create catalog hive"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"-- 1.2.0+ Version\nCREATE RESOURCE hms_resource PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://127.0.0.1:7004',\n    'dfs.nameservices'='HANN',\n    'dfs.ha.namenodes.HANN'='nn1,nn2',\n    'dfs.namenode.rpc-address.HANN.nn1'='nn1_host:rpc_port',\n    'dfs.namenode.rpc-address.HANN.nn2'='nn2_host:rpc_port',\n    'dfs.client.failover.proxy.provider.HANN'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\nCREATE CATALOG hive WITH RESOURCE hms_resource;\n\n-- 1.2.0 Version\nCREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://127.0.0.1:7004',\n    'dfs.nameservices'='HANN',\n    'dfs.ha.namenodes.HANN'='nn1,nn2',\n    'dfs.namenode.rpc-address.HANN.nn1'='nn1_host:rpc_port',\n    'dfs.namenode.rpc-address.HANN.nn2'='nn2_host:rpc_port',\n    'dfs.client.failover.proxy.provider.HANN'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Create catalog es"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-sql"},'-- 1.2.0+ Version\nCREATE RESOURCE es_resource PROPERTIES (\n    "type"="es",\n    "hosts"="http://127.0.0.1:9200"\n);\nCREATE CATALOG es WITH RESOURCE es_resource;\n\n-- 1.2.0 Version\nCREATE CATALOG es PROPERTIES (\n    "type"="es",\n    "hosts"="http://127.0.0.1:9200"\n);\n'))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Create catalog jdbc\n",(0,t.kt)("strong",{parentName:"p"},"mysql")),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-sql"},'-- 1.2.0+ Version\n-- The first way \nCREATE RESOURCE mysql_resource PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="123456",\n    "jdbc_url" = "jdbc:mysql://127.0.0.1:3316/doris_test?useSSL=false",\n    "driver_url" = "https://doris-community-test-1308700295.cos.ap-hongkong.myqcloud.com/jdbc_driver/mysql-connector-java-8.0.25.jar",\n    "driver_class" = "com.mysql.cj.jdbc.Driver"\n);\nCREATE CATALOG jdbc WITH RESOURCE mysql_resource;\n\n-- The second way\nCREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="123456",\n    "jdbc_url" = "jdbc:mysql://127.0.0.1:3316/doris_test?useSSL=false",\n    "driver_url" = "https://doris-community-test-1308700295.cos.ap-hongkong.myqcloud.com/jdbc_driver/mysql-connector-java-8.0.25.jar",\n    "driver_class" = "com.mysql.cj.jdbc.Driver"\n);\n\n-- 1.2.0 Version\nCREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "jdbc.user"="root",\n    "jdbc.password"="123456",\n    "jdbc.jdbc_url" = "jdbc:mysql://127.0.0.1:3316/doris_test?useSSL=false",\n    "jdbc.driver_url" = "https://doris-community-test-1308700295.cos.ap-hongkong.myqcloud.com/jdbc_driver/mysql-connector-java-8.0.25.jar",\n    "jdbc.driver_class" = "com.mysql.cj.jdbc.Driver"\n);\n')),(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"postgresql")),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-sql"},'-- The first way\nCREATE RESOURCE pg_resource PROPERTIES (\n    "type"="jdbc",\n    "user"="postgres",\n    "password"="123456",\n    "jdbc_url" = "jdbc:postgresql://127.0.0.1:5432/demo",\n    "driver_url" = "file:///path/to/postgresql-42.5.1.jar",\n    "driver_class" = "org.postgresql.Driver"\n);\nCREATE CATALOG jdbc WITH RESOURCE pg_resource;\n\n-- The second way\nCREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "user"="postgres",\n    "password"="123456",\n    "jdbc_url" = "jdbc:postgresql://127.0.0.1:5432/demo",\n    "driver_url" = "file:///path/to/postgresql-42.5.1.jar",\n    "driver_class" = "org.postgresql.Driver"\n);\n')),(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"clickhouse")),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-sql"},'-- The first way\nCREATE RESOURCE clickhouse_resource PROPERTIES (\n    "type"="jdbc",\n    "user"="default",\n    "password"="123456",\n    "jdbc_url" = "jdbc:clickhouse://127.0.0.1:8123/demo",\n    "driver_url" = "file:///path/to/clickhouse-jdbc-0.3.2-patch11-all.jar",\n    "driver_class" = "com.clickhouse.jdbc.ClickHouseDriver"\n)\nCREATE CATALOG jdbc WITH RESOURCE clickhouse_resource;\n\n-- The second way\nCREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "user"="default",\n    "password"="123456",\n    "jdbc_url" = "jdbc:clickhouse://127.0.0.1:8123/demo",\n    "driver_url" = "file:///path/to/clickhouse-jdbc-0.3.2-patch11-all.jar",\n    "driver_class" = "com.clickhouse.jdbc.ClickHouseDriver"\n)\n')),(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"oracle")),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-sql"},'-- The first way\nCREATE RESOURCE oracle_resource PROPERTIES (\n    "type"="jdbc",\n    "user"="doris",\n    "password"="123456",\n    "jdbc_url" = "jdbc:oracle:thin:@127.0.0.1:1521:helowin",\n    "driver_url" = "file:///path/to/ojdbc6.jar",\n    "driver_class" = "oracle.jdbc.driver.OracleDriver"\n);\nCREATE CATALOG jdbc WITH RESOURCE oracle_resource;\n\n-- The second way\nCREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "user"="doris",\n    "password"="123456",\n    "jdbc_url" = "jdbc:oracle:thin:@127.0.0.1:1521:helowin",\n    "driver_url" = "file:///path/to/ojdbc6.jar",\n    "driver_class" = "oracle.jdbc.driver.OracleDriver"\n);  \n')),(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"SQLServer")),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-sql"},'-- The first way\nCREATE RESOURCE sqlserver_resource PROPERTIES (\n    "type"="jdbc",\n    "user"="SA",\n    "password"="Doris123456",\n    "jdbc_url" = "jdbc:sqlserver://localhost:1433;DataBaseName=doris_test",\n    "driver_url" = "file:///path/to/mssql-jdbc-11.2.3.jre8.jar",\n    "driver_class" = "com.microsoft.sqlserver.jdbc.SQLServerDriver"\n);\nCREATE CATALOG sqlserver_catalog WITH RESOURCE sqlserver_resource;\n\n-- The second way\nCREATE CATALOG sqlserver_catalog PROPERTIES (\n    "type"="jdbc",\n    "user"="SA",\n    "password"="Doris123456",\n    "jdbc_url" = "jdbc:sqlserver://localhost:1433;DataBaseName=doris_test",\n    "driver_url" = "file:///path/to/mssql-jdbc-11.2.3.jre8.jar",\n    "driver_class" = "com.microsoft.sqlserver.jdbc.SQLServerDriver"\n);  \n')),(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"SAP HANA")),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-sql"},'-- The first way\nCREATE RESOURCE saphana_resource PROPERTIES (\n    "type"="jdbc",\n    "user"="SYSTEM",\n    "password"="SAPHANA",\n    "jdbc_url" = "jdbc:sap://localhost:31515/TEST",\n    "driver_url" = "file:///path/to/ngdbc.jar",\n    "driver_class" = "com.sap.db.jdbc.Driver"\n);\nCREATE CATALOG saphana_catalog WITH RESOURCE saphana_resource;\n\n-- The second way\nCREATE CATALOG saphana_catalog PROPERTIES (\n    "type"="jdbc",\n    "user"="SYSTEM",\n    "password"="SAPHANA",\n    "jdbc_url" = "jdbc:sap://localhost:31515/TEST",\n    "driver_url" = "file:///path/to/ngdbc.jar",\n    "driver_class" = "com.sap.db.jdbc.Driver"\n);\n')),(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Trino")),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-sql"},'-- The first way\nCREATE EXTERNAL RESOURCE trino_resource PROPERTIES (\n    "type"="jdbc",\n    "user"="hadoop",\n    "password"="",\n    "jdbc_url" = "jdbc:trino://localhost:8080/hive",\n    "driver_url" = "file:///path/to/trino-jdbc-389.jar",\n    "driver_class" = "io.trino.jdbc.TrinoDriver"\n);\nCREATE CATALOG trino_catalog WITH RESOURCE trino_resource;\n\n-- The second way\nCREATE CATALOG trino_catalog PROPERTIES (\n    "type"="jdbc",\n    "user"="hadoop",\n    "password"="",\n    "jdbc_url" = "jdbc:trino://localhost:8080/hive",\n    "driver_url" = "file:///path/to/trino-jdbc-389.jar",\n    "driver_class" = "io.trino.jdbc.TrinoDriver"\n);\n')),(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"OceanBase")),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-sql"},'-- The first way\nCREATE EXTERNAL RESOURCE oceanbase_resource PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="",\n    "jdbc_url" = "jdbc:oceanbase://localhost:2881/demo",\n    "driver_url" = "file:///path/to/oceanbase-client-2.4.2.jar",\n    "driver_class" = "com.oceanbase.jdbc.Driver",\n   "oceanbase_mode" = "mysql" or "oracle"\n);\nCREATE CATALOG oceanbase_catalog WITH RESOURCE oceanbase_resource;\n\n-- The second way\nCREATE CATALOG oceanbase_catalog PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="",\n    "jdbc_url" = "jdbc:oceanbase://localhost:2881/demo",\n    "driver_url" = "file:///path/to/oceanbase-client-2.4.2.jar",\n    "driver_class" = "com.oceanbase.jdbc.Driver",\n       "oceanbase_mode" = "mysql" or "oracle"\n);\n')))),(0,t.kt)("h3",{id:"keywords"},"Keywords"),(0,t.kt)("p",null,"CREATE, CATALOG"),(0,t.kt)("h3",{id:"best-practice"},"Best Practice"))}E.isMDXComponent=!0}}]);