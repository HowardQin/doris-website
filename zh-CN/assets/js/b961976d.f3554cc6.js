"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[14217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Bootstrap Action",language:"zh-CN"},i=void 0,p={unversionedId:"admin-manual/http-actions/fe/bootstrap-action",id:"admin-manual/http-actions/fe/bootstrap-action",title:"Bootstrap Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/fe/bootstrap-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/bootstrap-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/bootstrap-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Bootstrap Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Backends Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/backends-action"},next:{title:"Cancel Load Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/cancel-load-action"}},l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bootstrap-action"},"Bootstrap Action"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/bootstrap")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"\u7528\u4e8e\u5224\u65adFE\u662f\u5426\u542f\u52a8\u5b8c\u6210\u3002\u5f53\u4e0d\u63d0\u4f9b\u4efb\u4f55\u53c2\u6570\u65f6\uff0c\u4ec5\u8fd4\u56de\u662f\u5426\u542f\u52a8\u6210\u529f\u3002\u5982\u679c\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_id"),"\uff0c\u5219\u8fd4\u56de\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cluster_id")),(0,r.kt)("p",{parentName:"li"},"  \u96c6\u7fa4id\u3002\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"doris-meta/image/VERSION")," \u6587\u4ef6\u4e2d\u67e5\u770b\u3002\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"token")),(0,r.kt)("p",{parentName:"li"},"  \u96c6\u7fa4token\u3002\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"doris-meta/image/VERSION")," \u6587\u4ef6\u4e2d\u67e5\u770b\u3002"))),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u63d0\u4f9b\u53c2\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')),(0,r.kt)("p",{parentName:"li"},"  code \u4e3a 0 \u8868\u793aFE\u8282\u70b9\u542f\u52a8\u6210\u529f\u3002\u975e 0 \u7684\u9519\u8bef\u7801\u8868\u793a\u5176\u4ed6\u9519\u8bef\u3002\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_id")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "queryPort": 9030,\n        "rpcPort": 9020,\n        "maxReplayedJournal": 17287\n    },\n    "count": 0\n}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queryPort")," \u662f FE \u8282\u70b9\u7684 MySQL \u534f\u8bae\u7aef\u53e3\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rpcPort")," \u662f FE \u8282\u70b9\u7684 thrift RPC \u7aef\u53e3\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxReplayedJournal")," \u8868\u793a FE \u8282\u70b9\u5f53\u524d\u56de\u653e\u7684\u6700\u5927\u5143\u6570\u636e\u65e5\u5fd7id\u3002")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u63d0\u4f9b\u53c2\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/bootstrap\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_id")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/bootstrap?cluster_id=935437471&token=ad87f6dd-c93f-4880-bcdb-8ca8c9ab3031\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "queryPort": 9030,\n        "rpcPort": 9020,\n        "maxReplayedJournal": 17287\n    },\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);