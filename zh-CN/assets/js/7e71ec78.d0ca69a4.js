"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[46979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Table Row Count Action",language:"zh-CN"},l=void 0,i={unversionedId:"admin-manual/http-actions/fe/table-row-count-action",id:"version-1.2/admin-manual/http-actions/fe/table-row-count-action",title:"Table Row Count Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/http-actions/fe/table-row-count-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/table-row-count-action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/table-row-count-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Table Row Count Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Table Query Plan Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/table-query-plan-action"},next:{title:"Table Schema Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/table-schema-action"}},p={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table-row-count-action"},"Table Row Count Action"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/<db>/<table>/_count")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u6307\u5b9a\u8868\u7684\u884c\u6570\u7edf\u8ba1\u4fe1\u606f\u3002\u8be5\u63a5\u53e3\u76ee\u524d\u7528\u4e8e Spark-Doris-Connector \u4e2d\uff0cSpark \u83b7\u53d6 Doris \u7684\u8868\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<db>")),(0,r.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u5e93")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<table>")),(0,r.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u8868"))),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "size": 1,\n        "status": 200\n    },\n    "count": 0\n}\n')),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"data.size")," \u5b57\u6bb5\u8868\u793a\u6307\u5b9a\u8868\u7684\u884c\u6570\u3002"),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u5b9a\u8868\u7684\u884c\u6570\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/db1/tbl1/_count\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "size": 1,\n        "status": 200\n    },\n    "count": 0\n}\n')))))}m.isMDXComponent=!0}}]);