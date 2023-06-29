"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[40794],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(a),k=r,N=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(N,i(i({ref:e},d),{},{components:a})):n.createElement(N,i({ref:e},d))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},10551:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Spark Doris Connector",language:"en"},i=void 0,o={unversionedId:"ecosystem/spark-doris-connector",id:"ecosystem/spark-doris-connector",title:"Spark Doris Connector",description:"\x3c!--",source:"@site/docs/ecosystem/spark-doris-connector.md",sourceDirName:"ecosystem",slug:"/ecosystem/spark-doris-connector",permalink:"/docs/dev/ecosystem/spark-doris-connector",draft:!1,tags:[],version:"current",frontMatter:{title:"Spark Doris Connector",language:"en"},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/dev/lakehouse/faq"},next:{title:"Flink Doris Connector",permalink:"/docs/dev/ecosystem/flink-doris-connector"}},p={},s=[{value:"Version Compatibility",id:"version-compatibility",level:2},{value:"Build and Install",id:"build-and-install",level:2},{value:"Using Maven",id:"using-maven",level:2},{value:"Example",id:"example",level:2},{value:"Read",id:"read",level:3},{value:"SQL",id:"sql",level:4},{value:"DataFrame",id:"dataframe",level:4},{value:"RDD",id:"rdd",level:4},{value:"pySpark",id:"pyspark",level:4},{value:"Write",id:"write",level:3},{value:"SQL",id:"sql-1",level:4},{value:"DataFrame(batch/stream)",id:"dataframebatchstream",level:4},{value:"Configuration",id:"configuration",level:2},{value:"General",id:"general",level:3},{value:"SQL &amp; Dataframe Configuration",id:"sql--dataframe-configuration",level:3},{value:"RDD Configuration",id:"rdd-configuration",level:3},{value:"Doris &amp; Spark Column Type Mapping",id:"doris--spark-column-type-mapping",level:2}],d={toc:s},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spark-doris-connector"},"Spark Doris Connector"),(0,r.kt)("p",null,"Spark Doris Connector can support reading data stored in Doris and writing data to Doris through Spark."),(0,r.kt)("p",null,"Github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris-spark-connector"},"https://github.com/apache/doris-spark-connector")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support reading data from ",(0,r.kt)("inlineCode",{parentName:"li"},"Doris"),"."),(0,r.kt)("li",{parentName:"ul"},"Support ",(0,r.kt)("inlineCode",{parentName:"li"},"Spark DataFrame")," batch/stream writing data to ",(0,r.kt)("inlineCode",{parentName:"li"},"Doris")),(0,r.kt)("li",{parentName:"ul"},"You can map the ",(0,r.kt)("inlineCode",{parentName:"li"},"Doris")," table to",(0,r.kt)("inlineCode",{parentName:"li"}," DataFrame")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"RDD"),", it is recommended to use",(0,r.kt)("inlineCode",{parentName:"li"}," DataFrame"),"."),(0,r.kt)("li",{parentName:"ul"},"Support the completion of data filtering on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Doris")," side to reduce the amount of data transmission.")),(0,r.kt)("h2",{id:"version-compatibility"},"Version Compatibility"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Connector"),(0,r.kt)("th",{parentName:"tr",align:null},"Spark"),(0,r.kt)("th",{parentName:"tr",align:null},"Doris"),(0,r.kt)("th",{parentName:"tr",align:null},"Java"),(0,r.kt)("th",{parentName:"tr",align:null},"Scala"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.2, 3.1, 2.3"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0 +"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"2.12, 2.11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.2, 3.1, 2.3"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0 +"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"2.12, 2.11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"3.1, 2.3"),(0,r.kt)("td",{parentName:"tr",align:null},"0.12 - 0.15"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"2.12, 2.11")))),(0,r.kt)("h2",{id:"build-and-install"},"Build and Install"),(0,r.kt)("p",null,"Ready to work"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_env.sh.tpl")," file and rename it to ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_env.sh"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute following command in source dir:\n",(0,r.kt)("inlineCode",{parentName:"p"},"sh build.sh"),"\nFollow the prompts to enter the Scala and Spark versions you need to start compiling."))),(0,r.kt)("p",null,"After the compilation is successful, the target jar package will be generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," directory, such\nas: ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-doris-connector-3.1_2.12-1.2.0-SNAPSHOT.jar"),".\nCopy this file to ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassPath")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Spark")," to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Spark-Doris-Connector"),". For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Spark")," running in ",(0,r.kt)("inlineCode",{parentName:"p"},"Local")," mode,\nput this file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"jars/")," folder. ",(0,r.kt)("inlineCode",{parentName:"p"},"Spark")," running in ",(0,r.kt)("inlineCode",{parentName:"p"},"Yarn")," cluster mode, put this file in the pre-deployment\npackage."),(0,r.kt)("p",null,"For example upload ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-doris-connector-3.1_2.12-1.2.0-SNAPSHOT.jar")," to hdfs and add hdfs file path in\nspark.yarn.jars."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Upload ",(0,r.kt)("inlineCode",{parentName:"li"},"spark-doris-connector-3.1_2.12-1.2.0-SNAPSHOT.jar")," Jar to hdfs.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hdfs dfs -mkdir /spark-jars/\nhdfs dfs -put /your_local_path/spark-doris-connector-3.1_2.12-1.2.0-SNAPSHOT.jar /spark-jars/\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"spark-doris-connector-3.1_2.12-1.2.0-SNAPSHOT.jar")," dependency in Cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spark.yarn.jars=hdfs:///spark-jars/spark-doris-connector-3.1_2.12-1.2.0-SNAPSHOT.jar\n")),(0,r.kt)("h2",{id:"using-maven"},"Using Maven"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.doris</groupId>\n    <artifactId>spark-doris-connector-3.1_2.12</artifactId>\n    <version>1.2.0</version>\n</dependency>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("p",null,"Please replace the Connector version according to the different Spark and Scala versions."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"read"},"Read"),(0,r.kt)("h4",{id:"sql"},"SQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE\nTEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n  "table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n  "fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n  "user"="$YOUR_DORIS_USERNAME",\n  "password"="$YOUR_DORIS_PASSWORD"\n);\n\nSELECT *\nFROM spark_doris;\n')),(0,r.kt)("h4",{id:"dataframe"},"DataFrame"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val dorisSparkDF = spark.read.format("doris")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n  .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  .load()\n\ndorisSparkDF.show(5)\n')),(0,r.kt)("h4",{id:"rdd"},"RDD"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.doris.spark._\n\nval dorisSparkRDD = sc.dorisRDD(\n  tableIdentifier = Some("$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME"),\n  cfg = Some(Map(\n    "doris.fenodes" -> "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n    "doris.request.auth.user" -> "$YOUR_DORIS_USERNAME",\n    "doris.request.auth.password" -> "$YOUR_DORIS_PASSWORD"\n  ))\n)\n\ndorisSparkRDD.collect()\n')),(0,r.kt)("h4",{id:"pyspark"},"pySpark"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'dorisSparkDF = spark.read.format("doris")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n  .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  .load()\n// show 5 lines data \ndorisSparkDF.show(5)\n')),(0,r.kt)("h3",{id:"write"},"Write"),(0,r.kt)("h4",{id:"sql-1"},"SQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE\nTEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n  "table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n  "fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n  "user"="$YOUR_DORIS_USERNAME",\n  "password"="$YOUR_DORIS_PASSWORD"\n);\n\nINSERT INTO spark_doris\nVALUES ("VALUE1", "VALUE2", ...);\n#\nor\nINSERT INTO spark_doris\nSELECT *\nFROM YOUR_TABLE\n')),(0,r.kt)("h4",{id:"dataframebatchstream"},"DataFrame(batch/stream)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'## batch sink\nval mockDataDF = List(\n  (3, "440403001005", "21.cn"),\n  (1, "4404030013005", "22.cn"),\n  (33, null, "23.cn")\n).toDF("id", "mi_code", "mi_name")\nmockDataDF.show(5)\n\nmockDataDF.write.format("doris")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n  .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  //other options\n  //specify the fields to write\n  .option("doris.write.fields", "$YOUR_FIELDS_TO_WRITE")\n  .save()\n\n## stream sink(StructuredStreaming)\nval kafkaSource = spark.readStream\n  .option("kafka.bootstrap.servers", "$YOUR_KAFKA_SERVERS")\n  .option("startingOffsets", "latest")\n  .option("subscribe", "$YOUR_KAFKA_TOPICS")\n  .format("kafka")\n  .load()\nkafkaSource.selectExpr("CAST(key AS STRING)", "CAST(value as STRING)")\n  .writeStream\n  .format("doris")\n  .option("checkpointLocation", "$YOUR_CHECKPOINT_LOCATION")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n  .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  //other options\n  //specify the fields to write\n  .option("doris.write.fields", "$YOUR_FIELDS_TO_WRITE")\n  .start()\n  .awaitTermination()\n')),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"general"},"General"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.fenodes"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris FE http address, support multiple addresses, separated by commas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.table.identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris table identifier, eg, db1.tbl1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.retries"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of retries to send requests to Doris")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.connect.timeout.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection timeout for sending requests to Doris")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.read.timeout.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null},"Read timeout for sending request to Doris")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.query.timeout.s"),(0,r.kt)("td",{parentName:"tr",align:null},"3600"),(0,r.kt)("td",{parentName:"tr",align:null},"Query the timeout time of doris, the default is 1 hour, -1 means no timeout limit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.tablet.size"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer.MAX_VALUE"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of Doris Tablets corresponding to an RDD Partition. The smaller this value is set, the more partitions will be generated. This will increase the parallelism on the Spark side, but at the same time will cause greater pressure on Doris.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.read.field"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"List of column names in the Doris table, separated by commas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.batch.size"),(0,r.kt)("td",{parentName:"tr",align:null},"1024"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of rows to read data from BE at one time. Increasing this value can reduce the number of connections between Spark and Doris. Thereby reducing the extra time overhead caused by network delay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.exec.mem.limit"),(0,r.kt)("td",{parentName:"tr",align:null},"2147483648"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory limit for a single query. The default is 2GB, in bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.deserialize.arrow.async"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to support asynchronous conversion of Arrow format to RowBatch required for spark-doris-connector iteration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.deserialize.queue.size"),(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"Asynchronous conversion of the internal processing queue in Arrow format takes effect when doris.deserialize.arrow.async is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.write.fields"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the fields (or the order of the fields) to write to the Doris table, fileds separated by commas.",(0,r.kt)("br",null),"By default, all fields are written in the order of Doris table fields.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.batch.size"),(0,r.kt)("td",{parentName:"tr",align:null},"10000"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of lines in a single write BE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of retries after writing BE failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.properties.*"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"The stream load parameters.",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," eg:",(0,r.kt)("br",null)," sink.properties.column_separator' = ','",(0,r.kt)("br",null)," ",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.sink.task.partition.size"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of partitions corresponding to the Writing task. After filtering and other operations, the number of partitions written in Spark RDD may be large, but the number of records corresponding to each Partition is relatively small, resulting in increased writing frequency and waste of computing resources. The smaller this value is set, the less Doris write frequency and less Doris merge pressure. It is generally used with doris.sink.task.use.repartition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.sink.task.use.repartition"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use repartition mode to control the number of partitions written by Doris. The default value is false, and coalesce is used (note: if there is no Spark action before the write, the whole computation will be less parallel). If it is set to true, then repartition is used (note: you can set the final number of partitions at the cost of shuffle).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.sink.batch.interval.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"The interval time of each batch sink, unit ms.")))),(0,r.kt)("h3",{id:"sql--dataframe-configuration"},"SQL & Dataframe Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.filter.query.in.max.count"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"In the predicate pushdown, the maximum number of elements in the in expression value list. If this number is exceeded, the in-expression conditional filtering is processed on the Spark side.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.ignore-type"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"In a temporary view, specify the field types to ignore when reading the schema. ",(0,r.kt)("br",null)," eg: when 'doris.ignore-type'='bitmap,hll'")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note: In Spark SQL, when writing data through insert into, if the target table of doris contains ",(0,r.kt)("inlineCode",{parentName:"li"},"BITMAP")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"HLL")," type data, you need to set the parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"doris.ignore-type")," to the corresponding type, and set ",(0,r.kt)("inlineCode",{parentName:"li"},"doris.write.fields")," maps the corresponding columns, the usage is as follows:",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"BITMAP")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n"table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n"fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n"user"="$YOUR_DORIS_USERNAME",\n"password"="$YOUR_DORIS_PASSWORD"\n"doris.ignore-type"="bitmap",\n"doris.write.fields"="col1,col2,col3,bitmap_col2=to_bitmap(col2),bitmap_col3=bitmap_hash(col3)"\n);\n')),(0,r.kt)("ol",{parentName:"blockquote",start:2},(0,r.kt)("li",{parentName:"ol"},"HLL")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n"table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n"fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n"user"="$YOUR_DORIS_USERNAME",\n"password"="$YOUR_DORIS_PASSWORD"\n"doris.ignore-type"="hll",\n"doris.write.fields"="col1,hll_col1=hll_hash(col1)"\n);\n'))))),(0,r.kt)("h3",{id:"rdd-configuration"},"RDD Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.auth.user"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.auth.password"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.filter.query"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter expression of the query, which is transparently transmitted to Doris. Doris uses this expression to complete source-side data filtering.")))),(0,r.kt)("h2",{id:"doris--spark-column-type-mapping"},"Doris & Spark Column Type Mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Spark Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NULL_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.NullType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.BooleanType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.ByteType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.ShortType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.IntegerType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.LongType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.FloatType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.DoubleType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.StringType",(0,r.kt)("sup",null,"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.StringType",(0,r.kt)("sup",null,"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.BinaryType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},"DecimalType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.StringType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMALV2"),(0,r.kt)("td",{parentName:"tr",align:null},"DecimalType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypes.DoubleType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HLL"),(0,r.kt)("td",{parentName:"tr",align:null},"Unsupported datatype")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note: In Connector, ",(0,r.kt)("inlineCode",{parentName:"li"},"DATE")," and",(0,r.kt)("inlineCode",{parentName:"li"}," DATETIME")," are mapped to ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),". Due to the processing logic of the Doris underlying\nstorage engine, when the time type is used directly, the time range covered cannot meet the demand. So use ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),"\ntype to directly return the corresponding time readable text.")))}u.isMDXComponent=!0}}]);