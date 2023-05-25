"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[96264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"Statement Execution Action",language:"zh-CN"},o=void 0,l={unversionedId:"admin-manual/http-actions/fe/statement-execution-action",id:"admin-manual/http-actions/fe/statement-execution-action",title:"Statement Execution Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/fe/statement-execution-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/statement-execution-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/statement-execution-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Statement Execution Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Show Runtime Info Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/show-runtime-info-action"},next:{title:"Table Query Plan Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/table-query-plan-action"}},c={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:3}],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"statement-execution-action"},"Statement Execution Action"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /api/query/<ns_name>/<db_name>\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Statement Execution Action \u7528\u4e8e\u6267\u884c\u8bed\u53e5\u5e76\u8fd4\u56de\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<db_name>")),(0,r.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u5e93\u540d\u79f0\u3002\u8be5\u6570\u636e\u5e93\u4f1a\u88ab\u89c6\u4e3a\u5f53\u524dsession\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\uff0c\u5982\u679c\u5728 SQL \u4e2d\u7684\u8868\u540d\u6ca1\u6709\u9650\u5b9a\u6570\u636e\u5e93\u540d\u79f0\u7684\u8bdd\uff0c\u5219\u4f7f\u7528\u8be5\u6570\u636e\u5e93\u3002"))),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "stmt" : "select * from tbl1"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sql \u5b57\u6bb5\u4e3a\u5177\u4f53\u7684 SQL")),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\u96c6"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "type": "result_set",\n        "data": [\n            [1],\n            [2]\n        ],\n        "meta": [{\n            "name": "k1",\n            "type": "INT"\n        }],\n        "status": {},\n        "time": 10\n    },\n    "count": 0\n}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"type \u5b57\u6bb5\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"result_set")," \u8868\u793a\u8fd4\u56de\u7ed3\u679c\u96c6\u3002\u9700\u8981\u6839\u636e meta \u548c data \u5b57\u6bb5\u83b7\u53d6\u5e76\u5c55\u793a\u7ed3\u679c\u3002meta \u5b57\u6bb5\u63cf\u8ff0\u8fd4\u56de\u7684\u5217\u4fe1\u606f\u3002data \u5b57\u6bb5\u8fd4\u56de\u7ed3\u679c\u884c\u3002\u5176\u4e2d\u6bcf\u4e00\u884c\u7684\u4e2d\u7684\u5217\u7c7b\u578b\uff0c\u9700\u8981\u901a\u8fc7 meta \u5b57\u6bb5\u5185\u5bb9\u5224\u65ad\u3002status \u5b57\u6bb5\u8fd4\u56de MySQL \u7684\u4e00\u4e9b\u4fe1\u606f\uff0c\u5982\u544a\u8b66\u884c\u6570\uff0c\u72b6\u6001\u7801\u7b49\u3002time \u5b57\u6bb5\u8fd4\u56de\u8bed\u53e5\u6267\u884c\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u6267\u884c\u7ed3\u679c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "type": "exec_status",\n        "status": {},\n        "time": 10\n    },\n    "count": 0\n}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"type \u5b57\u6bb5\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"exec_status")," \u8868\u793a\u8fd4\u56de\u6267\u884c\u7ed3\u679c\u3002\u76ee\u524d\u6536\u5230\u8be5\u8fd4\u56de\u7ed3\u679c\uff0c\u5219\u90fd\u8868\u793a\u8bed\u53e5\u6267\u884c\u6210\u529f\u3002")))))}m.isMDXComponent=!0}}]);