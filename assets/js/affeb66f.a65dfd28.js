"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[55543],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Kafka Data Subscription",language:"en"},s=void 0,i={unversionedId:"data-operate/import/import-scenes/kafka-load",id:"version-1.2/data-operate/import/import-scenes/kafka-load",title:"Kafka Data Subscription",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/data-operate/import/import-scenes/kafka-load.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/kafka-load",permalink:"/docs/1.2/data-operate/import/import-scenes/kafka-load",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Kafka Data Subscription",language:"en"},sidebar:"docs",previous:{title:"External storage data import",permalink:"/docs/1.2/data-operate/import/import-scenes/external-storage-load"},next:{title:"Synchronize data through external table",permalink:"/docs/1.2/data-operate/import/import-scenes/external-table-load"}},l={},p=[{value:"Subscribe to Kafka messages",id:"subscribe-to-kafka-messages",level:2},{value:"Accessing SSL-authenticated Kafka clusters",id:"accessing-ssl-authenticated-kafka-clusters",level:3},{value:"Create a routine import job",id:"create-a-routine-import-job",level:3},{value:"View import job status",id:"view-import-job-status",level:3},{value:"Modify job properties",id:"modify-job-properties",level:3},{value:"Job Control",id:"job-control",level:3},{value:"more help",id:"more-help",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subscribe-to-kafka-logs"},"Subscribe to Kafka logs"),(0,r.kt)("p",null,"Users can directly subscribe to message data in Kafka by submitting routine import jobs to synchronize data in near real-time."),(0,r.kt)("p",null,"Doris itself can ensure that messages in Kafka are subscribed without loss or weight, that is, ",(0,r.kt)("inlineCode",{parentName:"p"},"Exactly-Once")," consumption semantics."),(0,r.kt)("h2",{id:"subscribe-to-kafka-messages"},"Subscribe to Kafka messages"),(0,r.kt)("p",null,"Subscribing to Kafka messages uses the Routine Load feature in Doris."),(0,r.kt)("p",null,"The user first needs to create a ",(0,r.kt)("strong",{parentName:"p"},"routine import job"),". The job will send a series of ",(0,r.kt)("strong",{parentName:"p"},"tasks")," continuously through routine scheduling, and each task will consume a certain number of messages in Kafka."),(0,r.kt)("p",null,"Please note the following usage restrictions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Support unauthenticated Kafka access and SSL-authenticated Kafka clusters."),(0,r.kt)("li",{parentName:"ol"},"The supported message formats are as follows:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"csv text format. Each message is a line, and the end of the line ",(0,r.kt)("strong",{parentName:"li"},"does not contain")," a newline."),(0,r.kt)("li",{parentName:"ul"},"Json format, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.2/data-operate/import/import-way/load-json-format"},"Import Json Format Data"),"."))),(0,r.kt)("li",{parentName:"ol"},"Only supports Kafka 0.10.0.0 (inclusive) and above.")),(0,r.kt)("h3",{id:"accessing-ssl-authenticated-kafka-clusters"},"Accessing SSL-authenticated Kafka clusters"),(0,r.kt)("p",null,"The routine import feature supports unauthenticated Kafka clusters, as well as SSL-authenticated Kafka clusters."),(0,r.kt)("p",null,"Accessing an SSL-authenticated Kafka cluster requires the user to provide a certificate file (ca.pem) for authenticating the Kafka Broker public key. If client authentication is also enabled in the Kafka cluster, the client's public key (client.pem), key file (client.key), and key password must also be provided. The files required here need to be uploaded to Doris through the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREAE FILE")," command, and the catalog name is ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka"),". The specific help of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE FILE")," command can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"},"CREATE FILE")," command manual . Here is an example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"upload files"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FILE "ca.pem" PROPERTIES("url" = "https://example_url/kafka-key/ca.pem", "catalog" = "kafka");\nCREATE FILE "client.key" PROPERTIES("url" = "https://example_urlkafka-key/client.key", "catalog" = "kafka");\nCREATE FILE "client.pem" PROPERTIES("url" = "https://example_url/kafka-key/client.pem", "catalog" = "kafka");\n')))),(0,r.kt)("p",null,"After the upload is complete, you can view the uploaded files through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-FILE"},"SHOW FILES")," command."),(0,r.kt)("h3",{id:"create-a-routine-import-job"},"Create a routine import job"),(0,r.kt)("p",null,"For specific commands to create routine import tasks, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},"ROUTINE LOAD")," command manual. Here is an example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Access the Kafka cluster without authentication"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD demo.my_first_routine_load_job ON test_1\nCOLUMNS TERMINATED BY ","\nPROPERTIES\n(\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "property.group.id" = "xxx",\n    "property.client.id" = "xxx",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_batch_interval/max_batch_rows/max_batch_size")," is used to control the running period of a subtask. The running period of a subtask is determined by the longest running time, the maximum number of rows consumed, and the maximum amount of data consumed."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Access an SSL-authenticated Kafka cluster"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD demo.my_first_routine_load_job ON test_1\nCOLUMNS TERMINATED BY ",",\nPROPERTIES\n(\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n)\nFROM KAFKA\n(\n   "kafka_broker_list"= "broker1:9091,broker2:9091",\n   "kafka_topic" = "my_topic",\n   "property.security.protocol" = "ssl",\n   "property.ssl.ca.location" = "FILE:ca.pem",\n   "property.ssl.certificate.location" = "FILE:client.pem",\n   "property.ssl.key.location" = "FILE:client.key",\n   "property.ssl.key.password" = "abcdefg"\n);\n')))),(0,r.kt)("h3",{id:"view-import-job-status"},"View import job status"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD"},"SHOW ROUTINE LOAD")," for specific commands and examples for checking the status of a ",(0,r.kt)("strong",{parentName:"p"},"job")," ) command documentation."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK"},"SHOW ROUTINE LOAD TASK")," command documentation."),(0,r.kt)("p",null,"Only the currently running tasks can be viewed, and the completed and unstarted tasks cannot be viewed."),(0,r.kt)("h3",{id:"modify-job-properties"},"Modify job properties"),(0,r.kt)("p",null,"The user can modify some properties of the job that has been created. For details, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD"},"ALTER ROUTINE LOAD")," command manual."),(0,r.kt)("h3",{id:"job-control"},"Job Control"),(0,r.kt)("p",null,"The user can control the stop, pause and restart of the job through the ",(0,r.kt)("inlineCode",{parentName:"p"},"STOP/PAUSE/RESUME")," three commands."),(0,r.kt)("p",null,"For specific commands, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD"},"STOP ROUTINE LOAD")," , ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD"},"PAUSE ROUTINE LOAD"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-ROUTINE-LOAD"},"RESUME ROUTINE LOAD")," command documentation."),(0,r.kt)("h2",{id:"more-help"},"more help"),(0,r.kt)("p",null,"For more detailed syntax and best practices for ROUTINE LOAD, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},"ROUTINE LOAD")," command manual."))}u.isMDXComponent=!0}}]);