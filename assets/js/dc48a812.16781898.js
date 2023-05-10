"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[51992],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[d]="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76514:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=t(87462),a=(t(67294),t(3905));const i={title:"Query Profile Action",language:"en"},l=void 0,p={unversionedId:"admin-manual/http-actions/fe/query-profile-action",id:"version-1.2/admin-manual/http-actions/fe/query-profile-action",title:"Query Profile Action",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/http-actions/fe/query-profile-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/query-profile-action",permalink:"/docs/1.2/admin-manual/http-actions/fe/query-profile-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Query Profile Action",language:"en"},sidebar:"docs",previous:{title:"Node Action",permalink:"/docs/1.2/admin-manual/http-actions/fe/node-action"},next:{title:"Backends Action",permalink:"/docs/1.2/admin-manual/http-actions/fe/backends-action"}},s={},o=[{value:"Request",id:"request",level:2},{value:"Get the query information",id:"get-the-query-information",level:2},{value:"Description",id:"description",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3},{value:"Get Query Id By Trace Id",id:"get-query-id-by-trace-id",level:2},{value:"Description",id:"description-1",level:3},{value:"Path parameters",id:"path-parameters",level:3},{value:"Query parameters",id:"query-parameters-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Get the sql and text profile for the specified query",id:"get-the-sql-and-text-profile-for-the-specified-query",level:2},{value:"Description",id:"description-2",level:3},{value:"Path parameters",id:"path-parameters-1",level:3},{value:"Query parameters",id:"query-parameters-2",level:3},{value:"Response",id:"response-2",level:3},{value:"Get the specified query fragment and instance information",id:"get-the-specified-query-fragment-and-instance-information",level:2},{value:"Description",id:"description-3",level:3},{value:"Path parameters",id:"path-parameters-2",level:3},{value:"Query parameters",id:"query-parameters-3",level:3},{value:"Response",id:"response-3",level:3},{value:"Get the specified query id tree profile information",id:"get-the-specified-query-id-tree-profile-information",level:2},{value:"Description",id:"description-4",level:3},{value:"Path parameters",id:"path-parameters-3",level:3},{value:"Query parameters",id:"query-parameters-4",level:3},{value:"Response",id:"response-4",level:3},{value:"Current running queries",id:"current-running-queries",level:2},{value:"Description",id:"description-5",level:3},{value:"Path parameters",id:"path-parameters-4",level:3},{value:"Query parameters",id:"query-parameters-5",level:3},{value:"Response",id:"response-5",level:3},{value:"Cancel query",id:"cancel-query",level:2},{value:"Description",id:"description-6",level:3},{value:"Path parameters",id:"path-parameters-5",level:3},{value:"Query parameters",id:"query-parameters-6",level:3},{value:"Response",id:"response-6",level:3}],u={toc:o},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-profile-action"},"Query Profile Action"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/query_info")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/trace/{trace_id}")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/sql/{query_id}")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/text/{query_id}")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/graph/{query_id}")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/json/{query_id}")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/fragments/{query_id}")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/current_queries")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/kill/{query_id}")),(0,a.kt)("h2",{id:"get-the-query-information"},"Get the query information"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/query_info")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"Gets information about select queries for all fe nodes in the cluster."),(0,a.kt)("h3",{id:"query-parameters"},"Query parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"query_id")),(0,a.kt)("p",{parentName:"li"},"  Optional, specifies the query ID of the query to be returned, default returns information for all queries.\n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"search")),(0,a.kt)("p",{parentName:"li"},"  Optional, specifies that query information containing strings is returned, currently only string matches are performed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"is_all_node")),(0,a.kt)("p",{parentName:"li"},"  Optional, if true, returns query information for all fe nodes, if false, returns query information for the current fe node. The default is true."))),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Query ID",\n            "FE\u8282\u70b9",\n            "\u67e5\u8be2\u7528\u6237",\n            "\u6267\u884c\u6570\u636e\u5e93",\n            "Sql",\n            "\u67e5\u8be2\u7c7b\u578b",\n            "\u5f00\u59cb\u65f6\u95f4",\n            "\u7ed3\u675f\u65f6\u95f4",\n            "\u6267\u884c\u65f6\u957f",\n            "\u72b6\u6001"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,a.kt)("version",{since:"1.2"},(0,a.kt)("p",null,"Admin \u548c Root \u7528\u6237\u53ef\u4ee5\u67e5\u770b\u6240\u6709 Query\u3002\u666e\u901a\u7528\u6237\u4ec5\u80fd\u67e5\u770b\u81ea\u5df1\u53d1\u9001\u7684 Query\u3002")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'GET /rest/v2/manager/query/query_info\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Query ID",\n            "FE\u8282\u70b9",\n            "\u67e5\u8be2\u7528\u6237",\n            "\u6267\u884c\u6570\u636e\u5e93",\n            "Sql",\n            "\u67e5\u8be2\u7c7b\u578b",\n            "\u5f00\u59cb\u65f6\u95f4",\n            "\u7ed3\u675f\u65f6\u95f4",\n            "\u6267\u884c\u65f6\u957f",\n            "\u72b6\u6001"\n        ],\n        "rows": [\n            [\n                "d7c93d9275334c35-9e6ac5f295a7134b",\n                "127.0.0.1:8030",\n                "root",\n                "default_cluster:testdb",\n                "select c.id, c.name, p.age, p.phone, c.date, c.cost from cost c join people p on c.id = p.id where p.age > 20 order by c.id",\n                "Query",\n                "2021-07-29 16:59:12",\n                "2021-07-29 16:59:12",\n                "109ms",\n                "EOF"\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,a.kt)("h2",{id:"get-query-id-by-trace-id"},"Get Query Id By Trace Id"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/trace_id/{trace_id}")),(0,a.kt)("h3",{id:"description-1"},"Description"),(0,a.kt)("p",null,"Get query id by trance id."),(0,a.kt)("p",null,"Before executing a Query, set a unique trace id:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'set session_context="trace_id:your_trace_id";')),(0,a.kt)("p",null,"After executing the Query within the same Session, the query id can be obtained through the trace id."),(0,a.kt)("h3",{id:"path-parameters"},"Path parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"{trace_id}")),(0,a.kt)("p",{parentName:"li"},"  User specific trace id."))),(0,a.kt)("h3",{id:"query-parameters-1"},"Query parameters"),(0,a.kt)("h3",{id:"response-1"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "success", \n    "code": 0, \n    "data": "fb1d9737de914af1-a498d5c5dec638d3", \n    "count": 0\n}\n')),(0,a.kt)("version",{since:"1.2"},(0,a.kt)("p",null,"Admin and Root user can view all queries. Ordinary users can only view the Query sent by themselves. If the specified trace id does not exist or has no permission, it will return Bad Request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "Bad Request", \n    "code": 403, \n    "data": "error messages",\n    "count": 0\n}\n'))),(0,a.kt)("h2",{id:"get-the-sql-and-text-profile-for-the-specified-query"},"Get the sql and text profile for the specified query"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/sql/{query_id}")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/text/{query_id}")),(0,a.kt)("h3",{id:"description-2"},"Description"),(0,a.kt)("p",null,"Get the sql and profile text for the specified query id."),(0,a.kt)("h3",{id:"path-parameters-1"},"Path parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"query_id")),(0,a.kt)("p",{parentName:"li"},"  The query id."))),(0,a.kt)("h3",{id:"query-parameters-2"},"Query parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"is_all_node")),(0,a.kt)("p",{parentName:"li"},"  Optional, if true then query for the specified query id in all fe nodes, if false then query for the specified query id in the currently connected fe nodes. The default is true."))),(0,a.kt)("h3",{id:"response-2"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "sql": ""\n    },\n    "count": 0\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "profile": ""\n    },\n    "count": 0\n}\n')),(0,a.kt)("version",{since:"1.2"},(0,a.kt)("p",null,"Admin and Root user can view all queries. Ordinary users can only view the Query sent by themselves. If the specified trace id does not exist or has no permission, it will return Bad Request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "Bad Request", \n    "code": 403, \n    "data": "error messages",\n    "count": 0\n}\n'))),"### Examples",(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"get sql."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'GET /rest/v2/manager/query/sql/d7c93d9275334c35-9e6ac5f295a7134b\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "sql": "select c.id, c.name, p.age, p.phone, c.date, c.cost from cost c join people p on c.id = p.id where p.age > 20 order by c.id"\n    },\n    "count": 0\n}\n')))),(0,a.kt)("h2",{id:"get-the-specified-query-fragment-and-instance-information"},"Get the specified query fragment and instance information"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/fragments/{query_id}")),(0,a.kt)("h3",{id:"description-3"},"Description"),(0,a.kt)("p",null,"Get the fragment name, instance id and execution time for the specified query id."),(0,a.kt)("h3",{id:"path-parameters-2"},"Path parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"query_id")),(0,a.kt)("p",{parentName:"li"},"  The query id."))),(0,a.kt)("h3",{id:"query-parameters-3"},"Query parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"is_all_node")),(0,a.kt)("p",{parentName:"li"},"  Optional, if true then query for the specified query id in all fe nodes, if false then query for the specified query id in the currently connected fe nodes. The default is true."))),(0,a.kt)("h3",{id:"response-3"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        {\n            "fragment_id": "",\n            "time": "",\n            "instance_id": {\n                "": ""\n            }\n        }\n    ],\n    "count": 0\n}\n')),(0,a.kt)("version",{since:"1.2"},(0,a.kt)("p",null,"Admin and Root user can view all queries. Ordinary users can only view the Query sent by themselves. If the specified trace id does not exist or has no permission, it will return Bad Request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "Bad Request", \n    "code": 403, \n    "data": "error messages",\n    "count": 0\n}\n'))),"### Examples",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```\nGET /rest/v2/manager/query/profile/fragments/d7c93d9275334c35-9e6ac5f295a7134b\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        {\n            "fragment_id": "0",\n            "time": "36.169ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134e": "36.169ms"\n            }\n        },\n        {\n            "fragment_id": "1",\n            "time": "20.710ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134c": "20.710ms"\n            }\n        },\n        {\n            "fragment_id": "2",\n            "time": "7.83ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134d": "7.83ms"\n            }\n        }\n    ],\n    "count": 0\n}\n```\n')),(0,a.kt)("h2",{id:"get-the-specified-query-id-tree-profile-information"},"Get the specified query id tree profile information"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/graph/{query_id}")),(0,a.kt)("h3",{id:"description-4"},"Description"),(0,a.kt)("p",null,"Get the tree profile information of the specified query id, same as ",(0,a.kt)("inlineCode",{parentName:"p"},"show query profile")," command."),(0,a.kt)("h3",{id:"path-parameters-3"},"Path parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"query_id")),(0,a.kt)("p",{parentName:"li"},"  The query id."))),(0,a.kt)("h3",{id:"query-parameters-4"},"Query parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"fragment_id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"instance_id")),(0,a.kt)("p",{parentName:"li"},"  Optional, both parameters must be specified or not.",(0,a.kt)("br",{parentName:"p"}),"\n","If both are not specified, a simple tree of profiles is returned, equivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"show query profile '/query_id'"),";",(0,a.kt)("br",{parentName:"p"}),"\n","If both are specified, a detailed profile tree is returned, which is equivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"show query profile '/query_id/fragment_id/instance_id'"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"is_all_node")),(0,a.kt)("p",{parentName:"li"},"  Optional, if true then query information about the specified query id in all fe nodes, if false then query information about the specified query id in the currently connected fe nodes. The default is true."))),(0,a.kt)("h3",{id:"response-4"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "graph":""\n    },\n    "count": 0\n}\n')),(0,a.kt)("version",{since:"1.2"},(0,a.kt)("p",null,"Admin and Root user can view all queries. Ordinary users can only view the Query sent by themselves. If the specified trace id does not exist or has no permission, it will return Bad Request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "Bad Request", \n    "code": 403, \n    "data": "error messages",\n    "count": 0\n}\n'))),(0,a.kt)("h2",{id:"current-running-queries"},"Current running queries"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/current_queries")),(0,a.kt)("h3",{id:"description-5"},"Description"),(0,a.kt)("p",null,"Same as ",(0,a.kt)("inlineCode",{parentName:"p"},'show proc "/current_query_stmts"'),", return current running queries."),(0,a.kt)("h3",{id:"path-parameters-4"},"Path parameters"),(0,a.kt)("h3",{id:"query-parameters-5"},"Query parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"is_all_node")),(0,a.kt)("p",{parentName:"li"},"  Optional. Return current running queries from all FE if set to true. Default is true."))),(0,a.kt)("h3",{id:"response-5"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "columnNames": ["Frontend", "QueryId", "ConnectionId", "Database", "User", "ExecTime", "SqlHash", "Statement"],\n        "rows": [\n            ["172.19.0.3", "108e47ab438a4560-ab1651d16c036491", "2", "", "root", "6074", "1a35f62f4b14b9d7961b057b77c3102f", "select sleep(60)"],\n            ["172.19.0.11", "3606cad4e34b49c6-867bf6862cacc645", "3", "", "root", "9306", "1a35f62f4b14b9d7961b057b77c3102f", "select sleep(60)"]\n        ]\n    },\n    "count": 0\n}\n')),(0,a.kt)("h2",{id:"cancel-query"},"Cancel query"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/query/kill/{query_id}")),(0,a.kt)("h3",{id:"description-6"},"Description"),(0,a.kt)("p",null,"Cancel query of specified connection."),(0,a.kt)("h3",{id:"path-parameters-5"},"Path parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"{query_id}")),(0,a.kt)("p",{parentName:"li"},"  query id. You can get query id by ",(0,a.kt)("inlineCode",{parentName:"p"},"trance_id")," api."))),(0,a.kt)("h3",{id:"query-parameters-6"},"Query parameters"),(0,a.kt)("h3",{id:"response-6"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')))}c.isMDXComponent=!0}}]);