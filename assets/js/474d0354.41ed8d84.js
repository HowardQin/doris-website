"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[61329],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),m=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(t),u=r,f=p["".concat(i,".").concat(u)]||p[u]||d[u]||l;return t?a.createElement(f,s(s({ref:n},c),{},{components:t})):a.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var m=2;m<l;m++)s[m]=t[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},12148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=t(87462),r=(t(67294),t(3905));const l={title:"SHOW-LOAD-PROFILE",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE",id:"sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE",title:"SHOW-LOAD-PROFILE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-LOAD-PROFILE",language:"en"},sidebar:"docs",previous:{title:"SHOW-LAST-INSERT",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT"},next:{title:"SHOW-LOAD-WARNINGS",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS"}},i={},m=[{value:"SHOW-LOAD-PROFILE",id:"show-load-profile",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:m},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"show-load-profile"},"SHOW-LOAD-PROFILE"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"SHOW LOAD PROFILE"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to view the Profile information of the import operation. This function requires the user to open the Profile settings. The versions before 0.15 perform the following settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET is_report_success=true;\n")),(0,r.kt)("p",null,"Versions 0.15 and later perform the following settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET [GLOBAL] enable_profile=true;\n")),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'show load profile "/";\n\nshow load profile "/[queryId]"\n\nshow load profile "/[queryId]/[TaskId]"\n\nshow load profile "/[queryId]/[TaskId]/[FragmentId]/"\n\nshow load profile "/[queryId]/[TaskId]/[FragmentId]/[InstanceId]"\n')),(0,r.kt)("p",null,"This command will list all currently saved import profiles. Each line corresponds to one import. where the QueryId column is the ID of the import job. This ID can also be viewed through the SHOW LOAD statement. We can select the QueryId corresponding to the Profile we want to see to see the specific situation"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List all Load Profiles"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/"\\G\n*************************** 1. row ***************************\n              JobId: 20010\n            QueryId: 980014623046410a-af5d36f23381017f\n               User: root\n          DefaultDb: default_cluster:test\n                SQL: LOAD LABEL xxx\n          QueryType: Load\n          StartTime: 2023-03-07 19:48:24\n            EndTime: 2023-03-07 19:50:45\n          TotalTime: 2m21s\n         QueryState: N/A\n            TraceId:\n       AnalysisTime: NULL\n           PlanTime: NULL\n       ScheduleTime: NULL\n    FetchResultTime: NULL\n    WriteResultTime: NULL\nWaitAndFetchResultTime: NULL\n*************************** 2. row ***************************\n              JobId: N/A\n            QueryId: 7cc2d0282a7a4391-8dd75030185134d8\n               User: root\n          DefaultDb: default_cluster:test\n                SQL: insert into xxx\n          QueryType: Load\n          StartTime: 2023-03-07 19:49:15\n            EndTime: 2023-03-07 19:49:15\n          TotalTime: 102ms\n         QueryState: OK\n            TraceId:\n       AnalysisTime: 825.277us\n           PlanTime: 4.126ms\n       ScheduleTime: N/A\n    FetchResultTime: 0ns\n    WriteResultTime: 0ns\nWaitAndFetchResultTime: N/A\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View an overview of the subtasks with imported jobs:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f";\n+-----------------------------------+------------+\n| TaskId                            | ActiveTime |\n+-----------------------------------+------------+\n| 980014623046410a-af5d36f23381017f | 3m14s      |\n+-----------------------------------+------------+\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the plan tree of the specified subtask"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f";\n\n                      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                      \u2502[-1: OlapTableSink]    \u2502\n                      \u2502Fragment: 0            \u2502\n                      \u2502MaxActiveTime: 86.541ms\u2502\n                      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                  \u2502\n                                  \u2502\n                        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                        \u2502[1: VEXCHANGE_NODE]\u2502\n                        \u2502Fragment: 0        \u2502\n                        \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n        \u2502                                 \u2502\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510              \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502[MemoryUsage]\u2502              \u2502[1: VDataStreamSender] \u2502\n \u2502Fragment: 0  \u2502              \u2502Fragment: 1            \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518              \u2502MaxActiveTime: 34.882ms\u2502\n                              \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                          \u2502\n                                          \u2502\n                            \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                            \u2502[0: VNewOlapScanNode(tbl1)]\u2502\n                            \u2502Fragment: 1                \u2502\n                            \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                        \u2502                         \u2502\n                 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510            \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                 \u2502[MemoryUsage]\u2502            \u2502[VScanner] \u2502\n                 \u2502Fragment: 1  \u2502            \u2502Fragment: 1\u2502\n                 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518            \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                          \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                                          \u2502                 \u2502\n                                 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                                 \u2502[SegmentIterator]\u2502 \u2502[MemoryUsage]\u2502\n                                 \u2502Fragment: 1      \u2502 \u2502Fragment: 1  \u2502\n                                 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n```sql\n\nThis will show the plan tree and fragment id on it\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the Instance overview of the specified subtask"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f/1"\\G\n+-----------------------------------+------------------+------------+\n| Instances                         | Host             | ActiveTime |\n+-----------------------------------+------------------+------------+\n| 980014623046410a-88e260f0c43031f2 | 10.81.85.89:9067 | 3m7s       |\n| 980014623046410a-88e260f0c43031f3 | 10.81.85.89:9067 | 3m6s       |\n| 980014623046410a-88e260f0c43031f4 | 10.81.85.89:9067 | 3m10s      |\n| 980014623046410a-88e260f0c43031f5 | 10.81.85.89:9067 | 3m14s      |\n+-----------------------------------+------------------+------------+\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Continue to view the detailed Profile of each operator on a specific Instance"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f/1/980014623046410a-88e260f0c43031f5"\\G\n\n*************************** 1. row ***************************\n\nInstance:\n\n      \u250c-----------------------------------------\u2510\n      \u2502[-1: OlapTableSink]                      \u2502\n      \u2502(Active: 2m17s, non-child: 70.91)        \u2502\n      \u2502  - Counters:                            \u2502\n      \u2502      - CloseWaitTime: 1m53s             \u2502\n      \u2502      - ConvertBatchTime: 0ns            \u2502\n      \u2502      - MaxAddBatchExecTime: 1m46s       \u2502\n      \u2502      - NonBlockingSendTime: 3m11s       \u2502\n      \u2502      - NumberBatchAdded: 782            \u2502\n      \u2502      - NumberNodeChannels: 1            \u2502\n      \u2502      - OpenTime: 743.822us              \u2502\n      \u2502      - RowsFiltered: 0                  \u2502\n      \u2502      - RowsRead: 1.599729M (1599729)    \u2502\n      \u2502      - RowsReturned: 1.599729M (1599729)\u2502\n      \u2502      - SendDataTime: 11s761ms           \u2502\n      \u2502      - TotalAddBatchExecTime: 1m46s     \u2502\n      \u2502      - ValidateDataTime: 9s802ms        \u2502\n      \u2514-----------------------------------------\u2518\n                           \u2502\n\u250c-----------------------------------------------------\u2510\n\u2502[0: BROKER_SCAN_NODE]                                \u2502\n\u2502(Active: 56s537ms, non-child: 29.06)                 \u2502\n\u2502  - Counters:                                        \u2502\n\u2502      - BytesDecompressed: 0.00                      \u2502\n\u2502      - BytesRead: 5.77 GB                           \u2502\n\u2502      - DecompressTime: 0ns                          \u2502\n\u2502      - FileReadTime: 34s263ms                       \u2502\n\u2502      - MaterializeTupleTime(*): 45s54ms             \u2502\n\u2502      - NumDiskAccess: 0                             \u2502\n\u2502      - PeakMemoryUsage: 33.03 MB                    \u2502\n\u2502      - RowsRead: 1.599729M (1599729)                \u2502\n\u2502      - RowsReturned: 1.599729M (1599729)            \u2502\n\u2502      - RowsReturnedRate: 28.295K sec                \u2502\n\u2502      - TotalRawReadTime(*): 1m20s                   \u2502\n\u2502      - TotalReadThroughput: 30.39858627319336 MB/sec\u2502\n\u2502      - WaitScannerTime: 56s528ms                    \u2502\n\u2514-----------------------------------------------------\u2518\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SHOW, LOAD, PROFILE\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);