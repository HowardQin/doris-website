"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"SHOW-BACKUP",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-BACKUP",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP",title:"SHOW-BACKUP",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-BACKUP",language:"en"},sidebar:"docs",previous:{title:"SHOW-ALTER",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ALTER"},next:{title:"SHOW-BACKENDS",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS"}},s={},c=[{value:"SHOW-BACKUP",id:"show-backup",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"show-backup"},"SHOW-BACKUP"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"SHOW BACKUP"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to view BACKUP tasks"),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," SHOW BACKUP [FROM db_name]\n")),(0,r.kt)("p",null,"illustrate:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Only the most recent BACKUP task is saved in Doris."),(0,r.kt)("li",{parentName:"ol"},"The meaning of each column is as follows:\nJobId: Unique job id\nSnapshotName: The name of the backup\nDbName: belongs to the database\nState: current stage\nPENDING: The initial state after submitting the job\nSNAPSHOTING: Executing snapshot\nUPLOAD_SNAPSHOT: Snapshot completed, ready to upload\nUPLOADING: Snapshot uploading\nSAVE_META: Save job meta information to a local file\nUPLOAD_INFO: Upload job meta information\nFINISHED: The job was successful\nCANCELLED: Job failed\nBackupObjs: Backed up tables and partitions\nCreateTime: task submission time\nSnapshotFinishedTime: Snapshot completion time\nUploadFinishedTime: Snapshot upload completion time\nFinishedTime: Job finish time\nUnfinishedTasks: Displays unfinished subtask ids during SNAPSHOTING and UPLOADING stages\nStatus: If the job fails, display the failure message\nTimeout: Job timeout, in seconds")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the last BACKUP task under example_db."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," SHOW BACKUP FROM example_db;\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SHOW, BACKUP\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);