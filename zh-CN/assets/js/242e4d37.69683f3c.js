"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[16426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Config Action",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/config-action",id:"version-1.2/admin-manual/http-actions/fe/config-action",title:"Config Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/http-actions/fe/config-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/config-action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/config-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Config Action",language:"zh-CN"},sidebar:"docs",previous:{title:"\u591a\u79df\u6237\u548c\u8d44\u6e90\u5212\u5206",permalink:"/zh-CN/docs/1.2/admin-manual/multi-tenant"},next:{title:"HA Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/ha-action"}},c={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"config-action"},"Config Action"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /rest/v1/config/fe/\n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Config Action \u7528\u4e8e\u83b7\u53d6\u5f53\u524d FE \u7684\u914d\u7f6e\u4fe1\u606f"),(0,a.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"conf_item")),(0,a.kt)("p",{parentName:"li"},"  \u53ef\u9009\u53c2\u6570\u3002\u8fd4\u56de FE \u7684\u914d\u7f6e\u4fe1\u606f\u4e2d\u7684\u6307\u5b9a\u9879\u3002"))),(0,a.kt)("h2",{id:"request-body"},"Request body"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": ["Name", "Value"],\n        "rows": [{\n            "Value": "DAY",\n            "Name": "sys_log_roll_interval"\n        }, {\n            "Value": "23",\n            "Name": "consistency_check_start_time"\n        }, {\n            "Value": "4096",\n            "Name": "max_mysql_service_task_threads_num"\n        }, {\n            "Value": "1000",\n            "Name": "max_unfinished_load_job"\n        }, {\n            "Value": "100",\n            "Name": "max_routine_load_job_num"\n        }, {\n            "Value": "SYNC",\n            "Name": "master_sync_policy"\n        }]\n    },\n    "count": 0\n}\n')),(0,a.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u540c ",(0,a.kt)("inlineCode",{parentName:"p"},"System Action"),"\u3002\u662f\u4e00\u4e2a\u8868\u683c\u7684\u63cf\u8ff0\u3002"))}m.isMDXComponent=!0}}]);