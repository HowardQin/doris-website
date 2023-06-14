"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,O=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(O,o(o({ref:t},c),{},{components:n})):r.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"SHOW-ROUTINE-LOAD-TASK",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK",title:"SHOW-ROUTINE-LOAD-TASK",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-ROUTINE-LOAD-TASK",language:"en"},sidebar:"docs",previous:{title:"SHOW-PROCEDURE",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-PROCEDURE"},next:{title:"SHOW-PROC",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-PROC"}},s={},u=[{value:"SHOW-ROUTINE-LOAD-TASK",id:"show-routine-load-task",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-routine-load-task"},"SHOW-ROUTINE-LOAD-TASK"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW ROUTINE LOAD TASK"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"View the currently running subtasks of a specified Routine Load job."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW ROUTINE LOAD TASK\nWHERE JobName = "job_name";\n')),(0,a.kt)("p",null,"The returned results are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'              TaskId: d67ce537f1be4b86-abf47530b79ab8e6\n               TxnId: 4\n           TxnStatus: UNKNOWN\n               JobId: 10280\n          CreateTime: 2020-12-12 20:29:48\n    ExecuteStartTime: 2020-12-12 20:29:48\n             Timeout: 20\n                BeId: 10002\nDataSourceProperties: {"0":19}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TaskId"),": The unique ID of the subtask."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TxnId"),": The import transaction ID corresponding to the subtask."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TxnStatus"),": The import transaction status corresponding to the subtask. Usually UNKNOWN. No real meaning."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JobId"),": The job ID corresponding to the subtask."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CreateTime"),": The creation time of the subtask."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExecuteStartTime"),": The time when the subtask is scheduled to be executed, usually later than the creation time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Timeout"),": Subtask timeout, usually twice the ",(0,a.kt)("inlineCode",{parentName:"li"},"MaxIntervalS")," set by the job."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BeId"),": The ID of the BE node executing this subtask."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DataSourceProperties"),": The starting offset of the Kafka Partition that the subtask is ready to consume. is a Json format string. Key is Partition Id. Value is the starting offset of consumption.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Display the subtask information of the routine import task named test1."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW ROUTINE LOAD TASK WHERE JobName = "test1";\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, ROUTINE, LOAD, TASK\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"),(0,a.kt)("p",null,"With this command, you can view how many subtasks are currently running in a Routine Load job, and which BE node is running on."))}m.isMDXComponent=!0}}]);