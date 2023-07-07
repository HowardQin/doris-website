"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67675],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),c=l,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,r[1]=i;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83270:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const o={title:"Batch Delete",language:"en"},r=void 0,i={unversionedId:"data-operate/update-delete/batch-delete-manual",id:"version-1.2/data-operate/update-delete/batch-delete-manual",title:"Batch Delete",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/data-operate/update-delete/batch-delete-manual.md",sourceDirName:"data-operate/update-delete",slug:"/data-operate/update-delete/batch-delete-manual",permalink:"/docs/1.2/data-operate/update-delete/batch-delete-manual",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Batch Delete",language:"en"},sidebar:"docs",previous:{title:"Use mysqldump data to export table structure or data",permalink:"/docs/1.2/data-operate/export/export_with_mysql_dump"},next:{title:"update",permalink:"/docs/1.2/data-operate/update-delete/update"}},s={},d=[{value:"Fundamental",id:"fundamental",level:2},{value:"Import",id:"import",level:3},{value:"Read",id:"read",level:3},{value:"Cumulative Compaction",id:"cumulative-compaction",level:3},{value:"Base Compaction",id:"base-compaction",level:3},{value:"Enable bulk delete support",id:"enable-bulk-delete-support",level:2},{value:"Syntax Description",id:"syntax-description",level:3},{value:"Stream Load",id:"stream-load",level:4},{value:"Broker Load",id:"broker-load",level:4},{value:"Routine Load",id:"routine-load",level:4},{value:"Note",id:"note",level:2},{value:"Usage example",id:"usage-example",level:2},{value:"Check if bulk delete support is enabled",id:"check-if-bulk-delete-support-is-enabled",level:3},{value:"Stream Load usage example",id:"stream-load-usage-example",level:3}],u={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"batch-delete"},"Batch Delete"),(0,l.kt)("p",null,"Currently, Doris supports multiple import methods such as ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.2/data-operate/import/import-way/broker-load-manual"},"broker load"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.2/data-operate/import/import-way/routine-load-manual"},"routine load"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.2/data-operate/import/import-way/stream-load-manual"},"stream load"),", etc. The data can only be deleted through the delete statement at present. When the delete statement is used to delete, a new data version will be generated every time delete is executed. Frequent deletion will seriously affect the query performance, and when using the delete method to delete, it is achieved by generating an empty rowset to record the deletion conditions. Each time you read, you must filter the deletion jump conditions. Also when there are many conditions, Performance affects. Compared with other systems, the implementation of greenplum is more like a traditional database product. Snowflake is implemented through the merge syntax."),(0,l.kt)("p",null,"For scenarios similar to the import of cdc data, insert and delete in the data data generally appear interspersed. In this scenario, our current import method is not enough, even if we can separate insert and delete, it can solve the import problem , But still cannot solve the problem of deletion. Use the batch delete function to solve the needs of these scenarios.\nThere are three ways to merge data import:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"APPEND: All data are appended to existing data"),(0,l.kt)("li",{parentName:"ol"},"DELETE: delete all rows with the same key column value as the imported data(When there is a ",(0,l.kt)("a",{parentName:"li",href:"/docs/1.2/data-operate/update-delete/sequence-column-manual"},(0,l.kt)("inlineCode",{parentName:"a"},"sequence"))," column in the table, the same primary key and the logic of the size of the sequence column must be satisfied at the same time to delete it correctly, see use case 4 below for details.)"),(0,l.kt)("li",{parentName:"ol"},"MERGE: APPEND or DELETE according to DELETE ON decision")),(0,l.kt)("h2",{id:"fundamental"},"Fundamental"),(0,l.kt)("p",null,"This is achieved by adding a hidden column ",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_DELETE_SIGN__"),", because we are only doing batch deletion on the unique model, so we only need to add a hidden column whose type is bool and the aggregate function is replace. In be, the various aggregation write processes are the same as normal columns, and there are two read schemes:"),(0,l.kt)("p",null,"Remove ",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_DELETE_SIGN__")," when fe encounters extensions such as *, and add the condition of ",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_DELETE_SIGN__ != true")," by default When be reads, a column is added for judgment, and the condition is used to determine whether to delete."),(0,l.kt)("h3",{id:"import"},"Import"),(0,l.kt)("p",null,"When importing, set the value of the hidden column to the value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE ON")," expression during fe parsing. The other aggregation behaviors are the same as the replace aggregation column."),(0,l.kt)("h3",{id:"read"},"Read"),(0,l.kt)("p",null,"When reading, add the condition of ",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_DELETE_SIGN__ != true")," to all olapScanNodes with hidden columns, be does not perceive this process and executes normally."),(0,l.kt)("h3",{id:"cumulative-compaction"},"Cumulative Compaction"),(0,l.kt)("p",null,"In Cumulative Compaction, hidden columns are treated as normal columns, and the compaction logic remains unchanged."),(0,l.kt)("h3",{id:"base-compaction"},"Base Compaction"),(0,l.kt)("p",null,"In Base Compaction, delete the rows marked for deletion to reduce the space occupied by data."),(0,l.kt)("h2",{id:"enable-bulk-delete-support"},"Enable bulk delete support"),(0,l.kt)("p",null,"There are two ways of enabling batch delete support:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"By adding ",(0,l.kt)("inlineCode",{parentName:"p"},"enable_batch_delete_by_default=true")," in the fe configuration file, all newly created tables after restarting fe support batch deletion, this option defaults to false")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"For tables that have not changed the above fe configuration or for existing tables that do not support the bulk delete function, you can use the following statement:\n",(0,l.kt)("inlineCode",{parentName:"p"},'ALTER TABLE tablename ENABLE FEATURE "BATCH_DELETE"')," to enable the batch delete."))),(0,l.kt)("p",null,"If you want to determine whether a table supports batch delete, you can set a session variable to display the hidden columns ",(0,l.kt)("inlineCode",{parentName:"p"},"SET show_hidden_columns=true"),", and then use ",(0,l.kt)("inlineCode",{parentName:"p"},"desc tablename"),", if there is a ",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_DELETE_SIGN__")," column in the output, it is supported, if not, it is not supported"),(0,l.kt)("h3",{id:"syntax-description"},"Syntax Description"),(0,l.kt)("p",null,"The syntax design of the import is mainly to add a column mapping that specifies the field of the delete marker column, and it is necessary to add a column to the imported data. The syntax of various import methods is as follows:"),(0,l.kt)("h4",{id:"stream-load"},"Stream Load"),(0,l.kt)("p",null,"The writing method of ",(0,l.kt)("inlineCode",{parentName:"p"},"Stream Load")," adds a field to set the delete label column in the columns field in the header. Example\n",(0,l.kt)("inlineCode",{parentName:"p"},'-H "columns: k1, k2, label_c3" -H "merge_type: [MERGE|APPEND|DELETE]" -H "delete: label_c3=1"')),(0,l.kt)("h4",{id:"broker-load"},"Broker Load"),(0,l.kt)("p",null,"The writing method of ",(0,l.kt)("inlineCode",{parentName:"p"},"Broker Load")," sets the field of the delete marker column at ",(0,l.kt)("inlineCode",{parentName:"p"},"PROPERTIES"),", the syntax is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL db1.label1\n(\n    [MERGE|APPEND|DELETE] DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file1")\n    INTO TABLE tbl1\n    COLUMNS TERMINATED BY ","\n    (tmp_c1,tmp_c2, label_c3)\n    SET\n    (\n        id=tmp_c2,\n        name=tmp_c1,\n    )\n    [DELETE ON label_c3=true]\n)\nWITH BROKER\'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n\n')),(0,l.kt)("h4",{id:"routine-load"},"Routine Load"),(0,l.kt)("p",null,"The writing method of ",(0,l.kt)("inlineCode",{parentName:"p"},"Routine Load")," adds a mapping to the ",(0,l.kt)("inlineCode",{parentName:"p"},"columns")," field. The mapping method is the same as above. The syntax is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'   CREATE ROUTINE LOAD example_db.test1 ON example_tbl\n    [WITH MERGE|APPEND|DELETE]\n    COLUMNS(k1, k2, k3, v1, v2, label),\n    WHERE k1> 100 and k2 like "%doris%"\n    [DELETE ON label=true]\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n')),(0,l.kt)("h2",{id:"note"},"Note"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Since import operations other than stream load may be executed out of order inside doris, if it is not stream load when importing using the ",(0,l.kt)("inlineCode",{parentName:"li"},"MERGE")," method, it needs to be used with load sequence. For the specific syntax, please refer to the ",(0,l.kt)("a",{parentName:"li",href:"/docs/1.2/data-operate/update-delete/sequence-column-manual"},"sequence")," column related documents"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"DELETE ON")," condition can only be used with MERGE."),(0,l.kt)("li",{parentName:"ol"},"if session variable ",(0,l.kt)("inlineCode",{parentName:"li"},"SET show_hidden_columns = true")," was executed before running import task to show whether table support batch delete feature, then execute ",(0,l.kt)("inlineCode",{parentName:"li"},"select count(*) from xxx")," statement in the same session after finishing ",(0,l.kt)("inlineCode",{parentName:"li"},"DELETE/MERGE")," import task, it will result in a unexpected result that the statement result set will include the deleted results. To avoid this problem you should execute ",(0,l.kt)("inlineCode",{parentName:"li"},"SET show_hidden_columns = false")," before select statement or open a new session to run the select statement.")),(0,l.kt)("h2",{id:"usage-example"},"Usage example"),(0,l.kt)("h3",{id:"check-if-bulk-delete-support-is-enabled"},"Check if bulk delete support is enabled"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SET show_hidden_columns=true;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> DESC test;\n+-----------------------+--------------+------+-------+---------+---------+\n| Field                 | Type         | Null | Key   | Default | Extra   |\n+-----------------------+--------------+------+-------+---------+---------+\n| name                  | VARCHAR(100) | No   | true  | NULL    |         |\n| gender                | VARCHAR(10)  | Yes  | false | NULL    | REPLACE |\n| age                   | INT          | Yes  | false | NULL    | REPLACE |\n| __DORIS_DELETE_SIGN__ | TINYINT      | No   | false | 0       | REPLACE |\n+-----------------------+--------------+------+-------+---------+---------+\n4 rows in set (0.00 sec)\n")),(0,l.kt)("h3",{id:"stream-load-usage-example"},"Stream Load usage example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Import data normally:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: APPEND" -T ~/table1_data http://127.0.0.1: 8130/api/test/table1/_stream_load\n')),(0,l.kt)("p",null,"The APPEND condition can be omitted, which has the same effect as the following statement:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -T ~/table1_data http://127.0.0.1:8130/api/test/table1 /_stream_load\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Delete all data with the same key as the imported data")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: DELETE" -T ~/table1_data http://127.0.0.1: 8130/api/test/table1/_stream_load\n')),(0,l.kt)("p",null,"Before load:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      3 |        2 | tom      |    2 |\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")),(0,l.kt)("p",null,"Load data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"3,2,tom,0\n")),(0,l.kt)("p",null,"After load:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Import the same row as the key column of the row with ",(0,l.kt)("inlineCode",{parentName:"li"},"site_id=1"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: MERGE" -H "delete: siteid=1" -T ~/ table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n')),(0,l.kt)("p",null,"Before load:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n|      1 |        1 | jim      |    2 |\n+--------+----------+----------+------+\n")),(0,l.kt)("p",null,"Load data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"2,1,grace,2\n3,2,tom,2\n1,1,jim,2\n")),(0,l.kt)("p",null,"After load:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      2 |        1 | grace    |    2 |\n|      3 |        2 | tom      |    2 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"When the table has the sequence column, delete all data with the same key as the imported data")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: name, gender, age" -H "function_column.sequence_col: age" -H "merge_type: DELETE"  -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n')),(0,l.kt)("p",null,"When the unique table has the sequence column, sequence column is used as the basis for the replacement order of the REPLACE aggregate function under the same key column, and the larger value can replace the smaller value.\nIf you want delete some data, the imported data must have the same key and the sequence column must be larger or equal than before."),(0,l.kt)("p",null,"for example, one table like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SET show_hidden_columns=true;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> DESC table1;\n+------------------------+--------------+------+-------+---------+---------+\n| Field                  | Type         | Null | Key   | Default | Extra   |\n+------------------------+--------------+------+-------+---------+---------+\n| name                   | VARCHAR(100) | No   | true  | NULL    |         |\n| gender                 | VARCHAR(10)  | Yes  | false | NULL    | REPLACE |\n| age                    | INT          | Yes  | false | NULL    | REPLACE |\n| __DORIS_DELETE_SIGN__  | TINYINT      | No   | false | 0       | REPLACE |\n| __DORIS_SEQUENCE_COL__ | INT          | Yes  | false | NULL    | REPLACE |\n+------------------------+--------------+------+-------+---------+---------+\n4 rows in set (0.00 sec)\n")),(0,l.kt)("p",null,"Before load:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+-------+--------+------+\n| name  | gender | age  |\n+-------+--------+------+\n| li    | male   |   10 |\n| wang  | male   |   14 |\n| zhang | male   |   12 |\n+-------+--------+------+\n")),(0,l.kt)("p",null,"If you load data like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"li,male,10\n")),(0,l.kt)("p",null,"After load:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+-------+--------+------+\n| name  | gender | age  |\n+-------+--------+------+\n| wang  | male   |   14 |\n| zhang | male   |   12 |\n+-------+--------+------+\n")),(0,l.kt)("p",null,"You will find that the data is deleted."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"li,male,10\n")),(0,l.kt)("p",null,"But if you load data like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"li,male,9\n")),(0,l.kt)("p",null,"After load:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+-------+--------+------+\n| name  | gender | age  |\n+-------+--------+------+\n| li    | male   |   10 |\n| wang  | male   |   14 |\n| zhang | male   |   12 |\n+-------+--------+------+\n")),(0,l.kt)("p",null,"You will find that the data is not deleted."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"li,male,10\n")),(0,l.kt)("p",null,"This is because in the underlying dependencies, it will first judge the case of the same key, display the row data with a large value in the sequence column, and then check whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_DELETE_SIGN__")," value of the row is 1. If it is 1, it will not be displayed. If it is 0, it will still be read out."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"When data is written and deleted at the same time in the imported data (such as in the Flink CDC scenario), using the sequence column can effectively ensure the consistency when the data arrives out of order, avoiding the deletion operation of an old version that arrives later, and accidentally deleting The new version of the data that arrives first.")))}m.isMDXComponent=!0}}]);