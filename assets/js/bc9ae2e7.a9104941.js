"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[68244],{3905:(A,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function l(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var i=n.createContext({}),p=function(A){var e=n.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},s=function(A){var e=p(A.components);return n.createElement(i.Provider,{value:e},A.children)},c="mdxType",u={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,i=A.parentName,s=l(A,["components","mdxType","originalType","parentName"]),c=p(t),d=a,m=c["".concat(i,".").concat(d)]||c[d]||u[d]||r;return t?n.createElement(m,o(o({ref:e},s),{},{components:t})):n.createElement(m,o({ref:e},s))}));function m(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=A,l[c]="string"==typeof A?A:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15013:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const r={title:"Table Query Plan Action",language:"en"},o=void 0,l={unversionedId:"admin-manual/http-actions/fe/table-query-plan-action",id:"admin-manual/http-actions/fe/table-query-plan-action",title:"Table Query Plan Action",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/fe/table-query-plan-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/table-query-plan-action",permalink:"/docs/dev/admin-manual/http-actions/fe/table-query-plan-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Table Query Plan Action",language:"en"},sidebar:"docs",previous:{title:"Statement Execution Action",permalink:"/docs/dev/admin-manual/http-actions/fe/statement-execution-action"},next:{title:"Table Row Count Action",permalink:"/docs/dev/admin-manual/http-actions/fe/table-row-count-action"}},i={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p},c="wrapper";function u(A){let{components:e,...t}=A;return(0,a.kt)(c,(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"table-query-plan-action"},"Table Query Plan Action"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/<db>/<table>/_query_plan")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Given a SQL, it is used to obtain the query plan corresponding to the SQL."),(0,a.kt)("p",null,"This interface is currently used in Spark-Doris-Connector, Spark obtains Doris' query plan."),(0,a.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<db>")),(0,a.kt)("p",{parentName:"li"},"  Specify database\n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<table>")),(0,a.kt)("p",{parentName:"li"},"  Specify table"))),(0,a.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h2",{id:"request-body"},"Request body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "sql": "select * from db1.tbl1;"\n}\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "partitions": {\n            "10039": {\n                "routings": ["10.81.85.89:9062"],\n                "version": 2,\n                "versionHash": 982459448378619656,\n                "schemaHash": 1294206575\n            }\n        },\n        "opaqued_query_plan": "DAABDAACDwABDAAAAAEIAAEAAAAACAACAAAAAAgAAwAAAAAKAAT//////////w8ABQgAAAABAAAAAA8ABgIAAAABAAIACAAMABIIAAEAAAAADwACCwAAAAIAAAACazEAAAACazIPAAMIAAAAAgAAAAUAAAAFAgAEAQAAAA8ABAwAAAACDwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAAACAACAAAAAAAIABT/////CAAX/////wAADwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAABCAACAAAAAAAIABT/////CAAX/////wAADAAFCAABAAAABgwACAAADAAGCAABAAAAAA8AAgwAAAAAAAoABwAAAAAAAAAACgAIAAAAAAAAAAAADQACCgwAAAABAAAAAAAAJzcKAAEAAAAAAAAnNwoAAgAAAAAAAAACCgADDaJlqbrVdwgIAARNJAZvAAwAAw8AAQwAAAACCAABAAAAAAgAAgAAAAAMAAMPAAEMAAAAAQgAAQAAAAAMAAIIAAEAAAAFAAAACAAE/////wgABQAAAAQIAAYAAAAACAAHAAAAAAsACAAAAAJrMQgACQAAAAACAAoBAAgAAQAAAAEIAAIAAAAADAADDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABP////8IAAUAAAAICAAGAAAAAAgABwAAAAELAAgAAAACazIIAAkAAAABAgAKAQAPAAIMAAAAAQgAAQAAAAAIAAIAAAAMCAADAAAAAQoABAAAAAAAACc1CAAFAAAAAgAPAAMMAAAAAQoAAQAAAAAAACc1CAACAAAAAQgAAwAAAAIIAAQAAAAACwAHAAAABHRibDELAAgAAAAADAALCwABAAAABHRibDEAAAAMAAQKAAFfL5rpxl1I4goAArgs6f+h6eMxAAA=",\n        "status": 200\n    },\n    "count": 0\n}\n')),(0,a.kt)("p",null,"Among them, ",(0,a.kt)("inlineCode",{parentName:"p"},"opaqued_query_plan")," is the binary format of the query plan."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get the query plan of the specified SQL"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'POST /api/db1/tbl1/_query_plan\n{\n    "sql": "select * from db1.tbl1;"\n}\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "partitions": {\n            "10039": {\n                "routings": ["192.168.1.1:9060"],\n                "version": 2,\n                "versionHash": 982459448378619656,\n                "schemaHash": 1294206575\n            }\n        },\n        "opaqued_query_plan": "DAABDAACDwABD...",\n        "status": 200\n    },\n    "count": 0\n}\n')))))}u.isMDXComponent=!0}}]);