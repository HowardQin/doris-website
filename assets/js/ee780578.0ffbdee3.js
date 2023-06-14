"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[99984],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,p=d["".concat(s,".").concat(m)]||d[m]||h[m]||l;return a?n.createElement(p,r(r({ref:t},u),{},{components:a})):n.createElement(p,r({ref:t},u))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const l={title:"Schema Change",language:"en"},r=void 0,i={unversionedId:"advanced/alter-table/schema-change",id:"version-1.2/advanced/alter-table/schema-change",title:"Schema Change",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/advanced/alter-table/schema-change.md",sourceDirName:"advanced/alter-table",slug:"/advanced/alter-table/schema-change",permalink:"/docs/1.2/advanced/alter-table/schema-change",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Schema Change",language:"en"},sidebar:"docs",previous:{title:"Sequence Column",permalink:"/docs/1.2/data-operate/update-delete/sequence-column-manual"},next:{title:"Replace Table",permalink:"/docs/1.2/advanced/alter-table/replace-table"}},s={},c=[{value:"Glossary",id:"glossary",level:2},{value:"Basic Principles",id:"basic-principles",level:2},{value:"Create Job",id:"create-job",level:2},{value:"View Job",id:"view-job",level:2},{value:"Cancel Job",id:"cancel-job",level:2},{value:"Best Practice",id:"best-practice",level:2},{value:"Modify Key column",id:"modify-key-column",level:3},{value:"Notice",id:"notice",level:2},{value:"FAQ",id:"faq",level:2},{value:"Configurations",id:"configurations",level:2},{value:"FE Configurations",id:"fe-configurations",level:3},{value:"BE Configurations",id:"be-configurations",level:3},{value:"More Help",id:"more-help",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"schema-change"},"Schema Change"),(0,o.kt)("p",null,"Users can modify the schema of existing tables through the Schema Change operation. Doris currently supports the following modifications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add and delete columns"),(0,o.kt)("li",{parentName:"ul"},"Modify column type"),(0,o.kt)("li",{parentName:"ul"},"Adjust column order"),(0,o.kt)("li",{parentName:"ul"},"Add and modify Bloom Filter"),(0,o.kt)("li",{parentName:"ul"},"Add and delete bitmap index")),(0,o.kt)("p",null,"This document mainly describes how to create a Schema Change job, as well as some considerations and frequently asked questions about Schema Change."),(0,o.kt)("h2",{id:"glossary"},"Glossary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Base Table: When each table is created, it corresponds to a base table. The base table stores the complete data of this table. Rollups are usually created based on the data in the base table (and can also be created from other rollups)."),(0,o.kt)("li",{parentName:"ul"},"Index: Materialized index. Rollup or Base Table are both called materialized indexes."),(0,o.kt)("li",{parentName:"ul"},"Transaction: Each import task is a transaction, and each transaction has a unique incrementing Transaction ID."),(0,o.kt)("li",{parentName:"ul"},"Rollup: Roll-up tables based on base tables or other rollups.")),(0,o.kt)("h2",{id:"basic-principles"},"Basic Principles"),(0,o.kt)("p",null,"The basic process of executing a Schema Change is to generate a copy of the index data of the new schema from the data of the original index. Among them, two parts of data conversion are required. One is the conversion of existing historical data, and the other is the conversion of newly arrived imported data during the execution of Schema Change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+----------+\n| Load Job |\n+----+-----+\n     |\n     | Load job generates both origin and new index data\n     |\n     |      +------------------+ +---------------+\n     |      | Origin Index     | | Origin Index  |\n     +------\x3e New Incoming Data| | History Data  |\n     |      +------------------+ +------+--------+\n     |                                  |\n     |                                  | Convert history data\n     |                                  |\n     |      +------------------+ +------v--------+\n     |      | New Index        | | New Index     |\n     +------\x3e New Incoming Data| | History Data  |\n            +------------------+ +---------------+\n")),(0,o.kt)("p",null,"Before starting the conversion of historical data, Doris will obtain a latest transaction ID. And wait for all import transactions before this Transaction ID to complete. This Transaction ID becomes a watershed. This means that Doris guarantees that all import tasks after the watershed will generate data for both the original Index and the new Index. In this way, when the historical data conversion is completed, the data in the new Index can be guaranteed to be complete."),(0,o.kt)("h2",{id:"create-job"},"Create Job"),(0,o.kt)("p",null,"The specific syntax for creating a Schema Change can be found in the help ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"},"ALTER TABLE COLUMN")," for the description of the Schema Change section ."),(0,o.kt)("p",null,"The creation of Schema Change is an asynchronous process. After the job is submitted successfully, the user needs to view the job progress through the ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW ALTER TABLE COLUMN")," command."),(0,o.kt)("h2",{id:"view-job"},"View Job"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SHOW ALTER TABLE COLUMN")," You can view the Schema Change jobs that are currently executing or completed. When multiple indexes are involved in a Schema Change job, the command displays multiple lines, each corresponding to an index. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW ALTER TABLE COLUMN\\G;\n*************************** 1. row ***************************\n        JobId: 20021\n    TableName: tbl1\n   CreateTime: 2019-08-05 23:03:13\n   FinishTime: 2019-08-05 23:03:42\n    IndexName: tbl1\n      IndexId: 20022\nOriginIndexId: 20017\nSchemaVersion: 2:792557838\nTransactionId: 10023\n        State: FINISHED\n          Msg: \n     Progress: NULL\n      Timeout: 86400\n1 row in set (0.00 sec)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JobId: A unique ID for each Schema Change job."),(0,o.kt)("li",{parentName:"ul"},"TableName: The table name of the base table corresponding to Schema Change."),(0,o.kt)("li",{parentName:"ul"},"CreateTime: Job creation time."),(0,o.kt)("li",{parentName:"ul"},'FinishedTime: The end time of the job. If it is not finished, "N/A" is displayed.'),(0,o.kt)("li",{parentName:"ul"},"IndexName: The name of an Index involved in this modification."),(0,o.kt)("li",{parentName:"ul"},"IndexId: The unique ID of the new Index."),(0,o.kt)("li",{parentName:"ul"},"OriginIndexId: The unique ID of the old Index."),(0,o.kt)("li",{parentName:"ul"},"SchemaVersion: Displayed in M: N format. M is the version of this Schema Change, and N is the corresponding hash value. With each Schema Change, the version is incremented."),(0,o.kt)("li",{parentName:"ul"},"TransactionId: the watershed transaction ID of the conversion history data."),(0,o.kt)("li",{parentName:"ul"},"State: The phase of the operation.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"PENDING: The job is waiting in the queue to be scheduled."),(0,o.kt)("li",{parentName:"ul"},"WAITING_TXN: Wait for the import task before the watershed transaction ID to complete."),(0,o.kt)("li",{parentName:"ul"},"RUNNING: Historical data conversion."),(0,o.kt)("li",{parentName:"ul"},"FINISHED: The operation was successful."),(0,o.kt)("li",{parentName:"ul"},"CANCELLED: The job failed."))),(0,o.kt)("li",{parentName:"ul"},"Msg: If the job fails, a failure message is displayed here."),(0,o.kt)("li",{parentName:"ul"},"Progress: operation progress. Progress is displayed only in the RUNNING state. Progress is displayed in M/N. Where N is the total number of copies involved in the Schema Change. M is the number of copies of historical data conversion completed."),(0,o.kt)("li",{parentName:"ul"},"Timeout: Job timeout time. Unit of second.")),(0,o.kt)("h2",{id:"cancel-job"},"Cancel Job"),(0,o.kt)("p",null,"In the case that the job status is not FINISHED or CANCELLED, you can cancel the Schema Change job with the following command:\n",(0,o.kt)("inlineCode",{parentName:"p"},"CANCEL ALTER TABLE COLUMN FROM tbl_name;")),(0,o.kt)("h2",{id:"best-practice"},"Best Practice"),(0,o.kt)("p",null,"Schema Change can make multiple changes to multiple indexes in one job. For example:\nSource Schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n+-----------+-------+------+------+------+---------+-------+\n")),(0,o.kt)("p",null,"You can add a row k4 to both rollup1 and rollup2 by adding the following k5 to rollup2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ALTER TABLE tbl1\nADD COLUMN k4 INT default "1" to rollup1,\nADD COLUMN k4 INT default "1" to rollup2,\nADD COLUMN k5 INT default "1" to rollup2;\n')),(0,o.kt)("p",null,"When completion, the Schema becomes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n+-----------+-------+------+------+------+---------+-------+\n")),(0,o.kt)("p",null,"As you can see, the base table tbl1 also automatically added k4, k5 columns. That is, columns added to any rollup are automatically added to the Base table."),(0,o.kt)("p",null,"At the same time, columns that already exist in the Base table are not allowed to be added to Rollup. If you need to do this, you can re-create a Rollup with the new columns and then delete the original Rollup."),(0,o.kt)("h3",{id:"modify-key-column"},"Modify Key column"),(0,o.kt)("p",null,"Modifying the Key column of a table is done through the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," keyword. Let's take a look at an example below."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This usage is only for the key column of the duplicate key table")),(0,o.kt)("p",null,"Source Schema :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"+-----------+-------+-------------+------+------+---------+-------+\n| IndexName | Field | Type        | Null | Key  | Default | Extra |\n+-----------+-------+-------------+------+------+---------+-------+\n| tbl1      | k1    | INT         | No   | true | N/A     |       |\n|           | k2    | INT         | No   | true | N/A     |       |\n|           | k3    | varchar(20) | No   | true | N/A     |       |\n|           | k4    | INT         | No   | false| N/A     |       |\n+-----------+-------+-------------+------+------+---------+-------+\n")),(0,o.kt)("p",null,"The modification statement is as follows, we will change the degree of the k3 column to 50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"alter table example_tbl modify column k3 varchar(50) key null comment 'to 50'\n")),(0,o.kt)("p",null,"When done, the Schema becomes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"+-----------+-------+-------------+------+------+---------+-------+\n| IndexName | Field | Type        | Null | Key  | Default | Extra |\n+-----------+-------+-------------+------+------+---------+-------+\n| tbl1      | k1    | INT         | No   | true | N/A     |       |\n|           | k2    | INT         | No   | true | N/A     |       |\n|           | k3    | varchar(50) | No   | true | N/A     |       |\n|           | k4    | INT         | No   | false| N/A     |       |\n+-----------+-------+-------------+------+------+---------+-------+\n")),(0,o.kt)("p",null,"Because the Schema Chanage job is an asynchronous operation, only one Schema chanage job can be performed on the same table at the same time. To check the operation status of the job, you can use the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE COLUMN\\G;\n")),(0,o.kt)("h2",{id:"notice"},"Notice"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Only one Schema Change job can be running on a table at a time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Schema Change operation does not block import and query operations.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The partition column and bucket column cannot be modified.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If there is a value column aggregated by REPLACE in the schema, the Key column is not allowed to be deleted."))),(0,o.kt)("p",null,"\xa0\xa0\xa0\xa0 If the Key column is deleted, Doris cannot determine the value of the REPLACE column."),(0,o.kt)("p",null,"\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0 All non-Key columns of the Unique data model table are REPLACE aggregated."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When adding a value column whose aggregation type is SUM or REPLACE, the default value of this column has no meaning to historical data.")),(0,o.kt)("p",null,"\xa0\xa0\xa0\xa0 Because the historical data has lost the detailed information, the default value cannot actually reflect the aggregated value."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When modifying the column type, fields other than Type need to be completed according to the information on the original column.")),(0,o.kt)("p",null,"\xa0\xa0\xa0\xa0 If you modify the column ",(0,o.kt)("inlineCode",{parentName:"p"},'k1 INT SUM NULL DEFAULT" 1 "')," as type BIGINT, you need to execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```ALTER TABLE tbl1 MODIFY COLUMN `k1` BIGINT SUM NULL DEFAULT "1"; ```\n')),(0,o.kt)("p",null,"   Note that in addition to the new column types, such as the aggregation mode, Nullable attributes, and default values must be completed according to the original information."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modifying column names, aggregation types, nullable attributes, default values, and column comments is not supported.")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the execution speed of Schema Change"),(0,o.kt)("p",{parentName:"li"},"  At present, the execution speed of Schema Change is estimated to be about 10MB / s according to the worst efficiency. To be conservative, users can set the timeout for jobs based on this rate.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Submit job error ",(0,o.kt)("inlineCode",{parentName:"p"},"Table xxx is not stable. ...")),(0,o.kt)("p",{parentName:"li"},"  Schema Change can only be started when the table data is complete and unbalanced. If some data shard copies of the table are incomplete, or if some copies are undergoing an equalization operation, the submission is rejected."),(0,o.kt)("p",{parentName:"li"},"  \xa0\xa0\xa0\xa0\nWhether the data shard copy is complete can be checked with the following command:\n",(0,o.kt)("inlineCode",{parentName:"p"},'ADMIN SHOW REPLICA STATUS FROM tbl WHERE STATUS != "OK";')),(0,o.kt)("p",{parentName:"li"},"  If a result is returned, there is a problem with the copy. These problems are usually fixed automatically by the system. You can also use the following commands to repair this table first:",(0,o.kt)("br",{parentName:"p"}),"\n","",(0,o.kt)("inlineCode",{parentName:"p"},"ADMIN REPAIR TABLE tbl1;")),(0,o.kt)("p",{parentName:"li"},"  You can check if there are running balancing tasks with the following command:"),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("inlineCode",{parentName:"p"},'SHOW PROC "/cluster_balance/pending_tablets";')),(0,o.kt)("p",{parentName:"li"},"  You can wait for the balancing task to complete, or temporarily disable the balancing operation with the following command:"),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("inlineCode",{parentName:"p"},'ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");'),"\n"))),(0,o.kt)("h2",{id:"configurations"},"Configurations"),(0,o.kt)("h3",{id:"fe-configurations"},"FE Configurations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"alter_table_timeout_second"),": The default timeout for the job is 86400 seconds.")),(0,o.kt)("h3",{id:"be-configurations"},"BE Configurations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"alter_tablet_worker_count"),": Number of threads used to perform historical data conversion on the BE side. The default is 3. If you want to speed up the Schema Change job, you can increase this parameter appropriately and restart the BE. But too many conversion threads can cause increased IO pressure and affect other operations. This thread is shared with the Rollup job.")),(0,o.kt)("h2",{id:"more-help"},"More Help"),(0,o.kt)("p",null,"For more detailed syntax and best practices used by Schema Change, see ",(0,o.kt)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN.md"},"ALTER TABLE COLUMN")," command manual, you can also enter ",(0,o.kt)("inlineCode",{parentName:"p"},"HELP ALTER TABLE COLUMN")," in the MySql client command line for more help information."))}h.isMDXComponent=!0}}]);