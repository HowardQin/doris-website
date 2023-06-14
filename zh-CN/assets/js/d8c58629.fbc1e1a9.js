"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[59919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"HA Action",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/ha-action",id:"version-1.2/admin-manual/http-actions/fe/ha-action",title:"HA Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/http-actions/fe/ha-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/ha-action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/ha-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"HA Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Config Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/config-action"},next:{title:"Hardware Info Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/hardware-info-action"}},c={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ha-action"},"HA Action"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /rest/v1/ha\n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"HA Action \u7528\u4e8e\u83b7\u53d6 FE \u96c6\u7fa4\u7684\u9ad8\u53ef\u7528\u7ec4\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"request-body"},"Request body"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "Observernodes": [],\n        "CurrentJournalId": [{\n            "Value": 433648,\n            "Name": "FrontendRole"\n        }],\n        "Electablenodes": [{\n            "Value": "host1",\n            "Name": "host1"\n        }],\n        "allowedFrontends": [{\n            "Value": "name: 192.168.1.1_9213_1597652404352, role: FOLLOWER, 192.168.1.1:9213",\n            "Name": "192.168.1.1_9213_1597652404352"\n        }],\n        "removedFronteds": [],\n        "CanRead": [{\n            "Value": true,\n            "Name": "Status"\n        }],\n        "databaseNames": [{\n            "Value": "433436 ",\n            "Name": "DatabaseNames"\n        }],\n        "FrontendRole": [{\n            "Value": "MASTER",\n            "Name": "FrontendRole"\n        }],\n        "CheckpointInfo": [{\n            "Value": 433435,\n            "Name": "Version"\n        }, {\n            "Value": "2020-09-03T02:07:37.000+0000",\n            "Name": "lastCheckPointTime"\n        }]\n    },\n    "count": 0\n}\n')))}d.isMDXComponent=!0}}]);