"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[72181],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return a?o.createElement(h,r(r({ref:t},d),{},{components:a})):o.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19854:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const i={title:"Understanding Data Compaction in 3 Minutes",summary:"Think of your disks as a warehouse: The compaction mechanism is like a team of storekeepers who help put away the incoming data.",date:"2023-06-09",author:"Apache Doris",tags:["Tech Sharing"]},r=void 0,s={permalink:"/blog/Compaction",source:"@site/blog/Compaction.md",title:"Understanding Data Compaction in 3 Minutes",description:"\x3c!--",date:"2023-06-09T00:00:00.000Z",formattedDate:"June 9, 2023",tags:[{label:"Tech Sharing",permalink:"/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Understanding Data Compaction in 3 Minutes",summary:"Think of your disks as a warehouse: The compaction mechanism is like a team of storekeepers who help put away the incoming data.",date:"2023-06-09",author:"Apache Doris",tags:["Tech Sharing"]},prevItem:{title:"Say Goodbye to OOM Crashes",permalink:"/blog/Memory_Management"},nextItem:{title:"A/B Testing was a Handful, Until we Found the Replacement for Druid",permalink:"/blog/360"}},l={authorsImageUrls:[void 0]},c=[{value:"Trigger Strategies",id:"trigger-strategies",level:2},{value:"Active Trigger",id:"active-trigger",level:3},{value:"Passive Scan",id:"passive-scan",level:3},{value:"Tablet Dormancy",id:"tablet-dormancy",level:3},{value:"Execution",id:"execution",level:2},{value:"Vertical Compaction for Columnar Storage",id:"vertical-compaction-for-columnar-storage",level:3},{value:"Segment Compaction to Avoid &quot;Jams&quot;",id:"segment-compaction-to-avoid-jams",level:3},{value:"Ordered Data Compaction",id:"ordered-data-compaction",level:3},{value:"Engineering Optimizations",id:"engineering-optimizations",level:2},{value:"Zero-Copy",id:"zero-copy",level:3},{value:"Load-on-Demand",id:"load-on-demand",level:3},{value:"<strong>Idle Schedule</strong>",id:"idle-schedule",level:3},{value:"Parameter Optimizations",id:"parameter-optimizations",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"What is compaction in database? Think of your disks as a warehouse: The compaction mechanism is like a team of storekeepers (with genius organizing skills like Marie Kondo) who help put away the incoming data. "),(0,n.kt)("p",null,'In particular, the data (which is the inflowing cargo in this metaphor) comes in on a "conveyor belt", which does not allow cutting in line. This is how the ',(0,n.kt)("strong",{parentName:"p"},"LSM-Tree")," (Log Structured-Merge Tree) works: In data storage, data is written into ",(0,n.kt)("strong",{parentName:"p"},"MemTables")," in an append-only manner, and then the MemTables are flushed to disks to form files. (These files go by different names in different databases. In my community, we call them ",(0,n.kt)("strong",{parentName:"p"},"Rowsets"),"). Just like putting small boxes of cargo into a large container, compaction means merging multiple small rowset files into a big one, but it does much more than that. Like I said, the compaction mechanism is an organizing magician: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Although the items (data) in each box (rowset) are orderly arranged, the boxes themselves are not. Hence, one thing that the "storekeepers" do is to sort the boxes (rowsets) in a certain order so they can be quickly found once needed (quickening data reading).'),(0,n.kt)("li",{parentName:"ul"},'If an item needs to be discarded or replaced, since no line-jump is allowed on the conveyor belt (append-only), you can only put a "note" (together with the substitution item) at the end of the queue on the belt to remind the "storekeepers", who will later perform replacing or discarding for you.'),(0,n.kt)("li",{parentName:"ul"},'If needed, the "storekeepers" are even kind enough to pre-process the cargo for you (pre-aggregating data to reduce computation burden during data reading). ')),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(41123).Z,width:"1279",height:"670"})),(0,n.kt)("p",null,'As helpful as the "storekeepers" are, they can be troublemakers at times \u2014 that\'s why "team management" matters. For the compaction mechanism to work efficiently, you need wise planning and scheduling, or else you might need to deal with high memory and CPU usage, if not OOM in the backend or write error.'),(0,n.kt)("p",null,"Specifically, efficient compaction is added up by quick triggering of compaction tasks, controllable memory and CPU overheads, and easy parameter adjustment from the engineer's side. That begs the question: ",(0,n.kt)("strong",{parentName:"p"},"How"),"? In this post, I will show you our way, including how we trigger, execute, and fine-tune compaction for faster and less resource-hungry execution."),(0,n.kt)("h2",{id:"trigger-strategies"},"Trigger Strategies"),(0,n.kt)("p",null,"The overall objective here is to trigger compaction tasks timely with the least resource consumption possible."),(0,n.kt)("h3",{id:"active-trigger"},"Active Trigger"),(0,n.kt)("p",null,"The most intuitive way to ensure timely compaction is to scan for potential compaction tasks upon data ingestion. Every time a new data tablet version is generated, a compaction task is triggered immediately, so you will never have to worry about version buildup. But this only works for newly ingested data. This is called ",(0,n.kt)("strong",{parentName:"p"},"Cumulative Compaction"),", as opposed to ",(0,n.kt)("strong",{parentName:"p"},"Base Compaction"),", which is the compaction of existing data."),(0,n.kt)("h3",{id:"passive-scan"},"Passive Scan"),(0,n.kt)("p",null,"Base compaction is triggered by passive scan. Passive scan is a much heavier job than active trigger, because it scans all metadata in all data tablets in the node. After identifying all potential compaction tasks, the system starts compaction for the most urgent data tablet."),(0,n.kt)("h3",{id:"tablet-dormancy"},"Tablet Dormancy"),(0,n.kt)("p",null,"Frequent metadata scanning is a waste of CPU resources, so it is better to introduce domancy: For tablets that have been producing no compaction tasks for long, the system just stops looking at them for a while. If there is a sudden data-write on a dormant tablet, that will trigger cumulative compaction as mentioned above, so no worries, you won't miss anything."),(0,n.kt)("p",null,"The combination of these three strategies is an example of cost-effective planning."),(0,n.kt)("h2",{id:"execution"},"Execution"),(0,n.kt)("h3",{id:"vertical-compaction-for-columnar-storage"},"Vertical Compaction for Columnar Storage"),(0,n.kt)("p",null,"As columnar storage is the future for analytic databases, the execution of compaction should adapt to that. We call it vertical compaction. I illustrate this mechanism with the figure below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(58506).Z,width:"1536",height:"826"})),(0,n.kt)("p",null,"Hope all these tiny blocks and numbers don't make you dizzy. Actually, vertical compaction can be broken down into four simple steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Separate key columns and value columns"),". Split out all key columns from the input rowsets and put them into one group, and all value columns into N groups."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Merge the key columns"),". Heap sort is used in this step. The product here is a merged and ordered key column as well as a global sequence marker (",(0,n.kt)("strong",{parentName:"li"},"RowSources"),")."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Merge the value columns"),". The value columns are merged and organized based on the sequence in ",(0,n.kt)("strong",{parentName:"li"},"RowSources"),". "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Write the data"),". All columns are assembled together and form one big rowset.")),(0,n.kt)("p",null,"As a supporting technique for columnar storage, vertical compaction avoids the need to load all columns in every merging operation. That means it can vastly reduce memory usage compared to traditional row-oriented compaction."),(0,n.kt)("h3",{id:"segment-compaction-to-avoid-jams"},'Segment Compaction to Avoid "Jams"'),(0,n.kt)("p",null,"As described in the beginning, in data ingestion, data will first be piled in the memory until it reaches a certain size, and then flushed to disks and stored in the form of files. Therefore, if you have ingested one huge batch of data at a time, you will have a large number of newly generated files on the disks. That adds to the scanning burden during data reading, and thus slows down data queries. (Imagine that suddenly you have to look into 50 boxes instead of 5, to find the item you need. That's overwhelming.) In some databases, such explosion of files could even trigger a protection mechanism that suspends data ingestion."),(0,n.kt)("p",null,"Segment compaction is the way to avoid that. It allows you to compact data at the same time you ingest it, so that the system can ingest a larger data size quickly without generating too many files. "),(0,n.kt)("p",null,"This is a flow chart that explains how segment compaction works:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(20834).Z,width:"1030",height:"950"})),(0,n.kt)("p",null,"Segment compaction will be triggered once the number of newly generated files exceeds a certain limit (let's say, 10). It is executed asynchronously by a specialized merging thread. Every 10 files will be merged into one, and the original 10 files will be deleted. Segment compaction does not prolong the data ingestion process by much, but it can largely accelerate data queries."),(0,n.kt)("h3",{id:"ordered-data-compaction"},"Ordered Data Compaction"),(0,n.kt)("p",null,"Time series data analysis is an increasingly common analytic scenario. "),(0,n.kt)("p",null,'Time series data is "born orderly". It is already arranged chronologically, it is written at a regular pace, and every batch of it is of similar size. It is like the least-worried-about child in the family. Correspondingly, we have a tailored compaction method for it: ordered data compaction.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(79318).Z,width:"653",height:"443"})),(0,n.kt)("p",null,"Ordered data compaction is even simpler:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Upload"),": Jot down the Min/Max Keys of the input rowset files."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Check"),": Check if the rowset files are organized correctly based on the Min/Max Keys and the file size."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Merge"),": Hard link the input rowsets to the new rowset, and create metadata for the new rowset (including number of rows, file size, Min/Max Key, etc.)")),(0,n.kt)("p",null,"See? It is a super neat and lightweight workload, involving only file linking and metadata creation. Statistically, ",(0,n.kt)("strong",{parentName:"p"},"it just takes milliseconds to compact huge amounts of time series data but consumes nearly zero memory"),"."),(0,n.kt)("p",null,"So far, these are strategic and algorithmic optimizations for compaction, implemented by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/issues/19231"},"Apache Doris 2.0.0"),", a unified analytic database. Apart from these, we, as developers for the open source project, have fine-tuned it from an engineering perspective."),(0,n.kt)("h2",{id:"engineering-optimizations"},"Engineering Optimizations"),(0,n.kt)("h3",{id:"zero-copy"},"Zero-Copy"),(0,n.kt)("p",null,"In the backend nodes of Apache Doris, data goes through a few layers: Tablet -> Rowset -> Segment -> Column -> Page. The compaction process involves data transferring that consumes a lot of CPU resources. So we designed zero-copy compaction logic, which is realized by a data structure named BlockView. This brings another 5% increase in compaction efficiency."),(0,n.kt)("h3",{id:"load-on-demand"},"Load-on-Demand"),(0,n.kt)("p",null,"In most cases, the rowsets are not 100% orderless, so we can take advantage of such partial orderliness. For a group of ordered rowsets, Apache Doris only loads the first one and then starts merging. As the merging goes on, it gradually loads the rowset files it needs. This is how it decreases memory usage. "),(0,n.kt)("h3",{id:"idle-schedule"},(0,n.kt)("strong",{parentName:"h3"},"Idle Schedule")),(0,n.kt)("p",null,"According to our experience, base compaction tasks are often resource-intensive and time-consuming, so they can easily stand in the way of data queries. Doris 2.0.0 enables Idle Schedule, deprioritizing those base compaction tasks with huge data, long execution, and low compaction rate. "),(0,n.kt)("h2",{id:"parameter-optimizations"},"Parameter Optimizations"),(0,n.kt)("p",null,"Every data engineer has somehow been harassed by complicated parameters and configurations. To protect our users from this nightmare, we have provided a streamlined set of parameters with the best-performing default configurations in the general environment."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,'This is how we keep our "storekeepers" working efficiently and cost-effectively. If you wonder how these strategies and optimization work in real practice, we tested Apache Doris with ClickBench. It reaches a ',(0,n.kt)("strong",{parentName:"p"},"compaction speed of 300,000 row/s"),"; in high-concurrency scenarios, it maintains ",(0,n.kt)("strong",{parentName:"p"},"a stable compaction score of around 50"),". Also, we are planning to implement auto-tuning and increase observability for the compaction mechanism. If you are interested in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris"},"Apache Doris")," project and what we do, this is a group of visionary and passionate ",(0,n.kt)("a",{parentName:"p",href:"https://t.co/KcxAtAJZjZ"},"developers")," that you can talk to."))}p.isMDXComponent=!0},41123:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Compaction_1-ee87990e8968b1976f60ae8c76c1f224.png"},58506:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Compaction_2-a6a4e08e1d33d0c489208d8fb607abb9.png"},20834:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Compaction_3-6558067933ac6eb62900cd50b18f09fa.png"},79318:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Compaction_4-e2cea4ec600d74073084b6ecbd1e600f.png"}}]);