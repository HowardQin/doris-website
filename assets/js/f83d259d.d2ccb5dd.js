"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[35333],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"High-concurrency point query",language:"en"},i=void 0,l={unversionedId:"query-acceleration/hight-concurrent-point-query",id:"version-1.2/query-acceleration/hight-concurrent-point-query",title:"High-concurrency point query",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/query-acceleration/hight-concurrent-point-query.md",sourceDirName:"query-acceleration",slug:"/query-acceleration/hight-concurrent-point-query",permalink:"/docs/1.2/query-acceleration/hight-concurrent-point-query",draft:!1,tags:[],version:"1.2",frontMatter:{title:"High-concurrency point query",language:"en"},sidebar:"docs",previous:{title:"Nereids-The Brand New Planner",permalink:"/docs/1.2/query-acceleration/nereids"},next:{title:"Materialized view",permalink:"/docs/1.2/query-acceleration/materialized-view"}},c={},u=[{value:"Background",id:"background",level:2},{value:"Row Store format",id:"row-store-format",level:2},{value:"Accelerate point query for unique model",id:"accelerate-point-query-for-unique-model",level:2},{value:"Using <code>PreparedStatement</code>",id:"using-preparedstatement",level:2},{value:"Enable row cache",id:"enable-row-cache",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"high-concurrency-point-query"},"High-concurrency point query"),(0,a.kt)("version",{since:"2.0.0"}),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"Doris is built on a columnar storage format engine. In high-concurrency service scenarios, users always want to retrieve entire rows of data from the system. However, when tables are wide, the columnar format greatly amplifies random read IO. Doris query engine and planner are too heavy for some simple queries, such as point queries. A short path needs to be planned in the FE's query plan to handle such queries. FE is the access layer service for SQL queries, written in Java. Parsing and analyzing SQL also leads to high CPU overhead for high-concurrency queries. To solve these problems, we have introduced row storage, short query path, and PreparedStatement in Doris. Below is a guide to enable these optimizations."),(0,a.kt)("h2",{id:"row-store-format"},"Row Store format"),(0,a.kt)("p",null,"We support a row format for olap table to reduce point lookup io cost,\nbut to enable this format, you need to spend more disk space for row format store.\nCurrently, we store row in an extra column called ",(0,a.kt)("inlineCode",{parentName:"p"},"row column")," for simplicity.Row store is disabled by default,\nusers can enable it by adding the following property when create table"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"store_row_column" = "true"\n')),(0,a.kt)("h2",{id:"accelerate-point-query-for-unique-model"},"Accelerate point query for unique model"),(0,a.kt)("p",null,"The above row storage is used to enable the Merge-On-Write strategy under the Unique model to reduce the IO overhead during enumeration. When ",(0,a.kt)("inlineCode",{parentName:"p"},"enable_unique_key_merge_on_write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"store_row_column")," are enabled when creating a Unique table, the query of the primary key will take a short path to optimize SQL execution, and only one RPC is required to complete the query. The following is an example of enabling the Merge-On-Write strategy under the Unique model by combining the query and row existence:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `tbl_point_query` (\n    `key` int(11) NULL,\n    `v1` decimal(27, 9) NULL,\n    `v2` varchar(30) NULL,\n    `v3` varchar(30) NULL,\n    `v4` date NULL,\n    `v5` datetime NULL,\n    `v6` float NULL,\n    `v7` datev2 NULL\n) ENGINE=OLAP\nUNIQUE KEY(`key`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`key)` BUCKETS 1\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1",\n    "enable_unique_key_merge_on_write" = "true",\n    "light_schema_change" = "true",\n    "store_row_column" = "true"\n);\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"enable_unique_key_merge_on_write")," should be enabled, since we need primary key for quick point lookup in storage engine"),(0,a.kt)("li",{parentName:"ol"},"when condition only contains primary key like ",(0,a.kt)("inlineCode",{parentName:"li"},"select * from tbl_point_query where key = 123"),", such query will go through the short fast path"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"light_schema_change")," should also been enabled since we rely on ",(0,a.kt)("inlineCode",{parentName:"li"},"column unique id")," of each column when doing a point query.")),(0,a.kt)("h2",{id:"using-preparedstatement"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"PreparedStatement")),(0,a.kt)("p",null,"In order to reduce CPU cost for parsing query SQL and SQL expressions, we provide ",(0,a.kt)("inlineCode",{parentName:"p"},"PreparedStatement")," feature in FE fully compatible with mysql protocol (currently only support point queries like above mentioned).Enable it will pre caculate PreparedStatement SQL and expresions and caches it in a session level memory buffer and will be reused later on.We could improve 4x+ performance by using ",(0,a.kt)("inlineCode",{parentName:"p"},"PreparedStatement")," when CPU became hotspot doing such queries.Bellow is an JDBC example of using ",(0,a.kt)("inlineCode",{parentName:"p"},"PreparedStatement"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setup JDBC url and enable server side prepared statement")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"url = jdbc:mysql://127.0.0.1:9030/ycsb?useServerPrepStmts=true\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Using ",(0,a.kt)("inlineCode",{parentName:"li"},"PreparedStatement"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// use `?` for placement holders, readStatement should be reused\nPreparedStatement readStatement = conn.prepareStatement("select * from tbl_point_query where key = ?");\n...\nreadStatement.setInt(1234);\nResultSet resultSet = readStatement.executeQuery();\n...\nreadStatement.setInt(1235);\nresultSet = readStatement.executeQuery();\n...\n')),(0,a.kt)("h2",{id:"enable-row-cache"},"Enable row cache"),(0,a.kt)("p",null,"Doris has a page-level cache that stores data for a specific column in each page. Therefore, the page cache is a column-based cache. For the row storage mentioned earlier, a row contains data for multiple columns, and the cache may be evicted by large queries, which can reduce the hit rate. To increase the hit rate of the row cache, a separate row cache is introduced, which reuses the LRU cache mechanism in Doris to ensure memory usage. You can enable it by specifying the following BE configuration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"disable_storage_row_cache")," : Whether to enable the row cache. It is not enabled by default."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"row_cache_mem_limit")," : Specifies the percentage of memory occupied by the row cache. The default is 20% of memory.")))}d.isMDXComponent=!0}}]);