"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[56679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Query Detail Action",language:"en"},o=void 0,l={unversionedId:"admin-manual/http-actions/fe/query-detail-action",id:"version-1.2/admin-manual/http-actions/fe/query-detail-action",title:"Query Detail Action",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/http-actions/fe/query-detail-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/query-detail-action",permalink:"/docs/1.2/admin-manual/http-actions/fe/query-detail-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Query Detail Action",language:"en"},sidebar:"docs",previous:{title:"Profile Action",permalink:"/docs/1.2/admin-manual/http-actions/fe/profile-action"},next:{title:"Query Schema Action",permalink:"/docs/1.2/admin-manual/http-actions/fe/query-schema-action"}},c={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query-detail-action"},"Query Detail Action"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/query_detail")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Used to obtain information about all queries after a specified time point"),(0,r.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"event_time")),(0,r.kt)("p",{parentName:"li"},"  At the specified time point (Unix timestamp, in milliseconds), obtain query information after that time point.\n"))),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "query_details": [{\n            "eventTime": 1596462699216,\n            "queryId": "f732084bc8e74f39-8313581c9c3c0b58",\n            "startTime": 1596462698969,\n            "endTime": 1596462699216,\n            "latency": 247,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select * from tbl1"\n        }, {\n            "eventTime": 1596463013929,\n            "queryId": "ed2d0d80855d47a5-8b518a0f1472f60c",\n            "startTime": 1596463013913,\n            "endTime": 1596463013929,\n            "latency": 16,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select k1 from tbl1"\n        }]\n    },\n    "count": 0\n}\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get query details after the specified time point."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/query_detail?event_time=1596462079958\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "query_details": [{\n            "eventTime": 1596462699216,\n            "queryId": "f732084bc8e74f39-8313581c9c3c0b58",\n            "startTime": 1596462698969,\n            "endTime": 1596462699216,\n            "latency": 247,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select * from tbl1"\n        }, {\n            "eventTime": 1596463013929,\n            "queryId": "ed2d0d80855d47a5-8b518a0f1472f60c",\n            "startTime": 1596463013913,\n            "endTime": 1596463013929,\n            "latency": 16,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select k1 from tbl1"\n        }]\n    },\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);