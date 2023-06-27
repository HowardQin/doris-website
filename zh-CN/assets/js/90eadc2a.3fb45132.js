"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,c(c({ref:t},s),{},{components:n})):r.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58",language:"zh-CN"},c=void 0,i={unversionedId:"admin-manual/http-actions/be/check-rpc-channel",id:"admin-manual/http-actions/be/check-rpc-channel",title:"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/be/check-rpc-channel.md",sourceDirName:"admin-manual/http-actions/be",slug:"/admin-manual/http-actions/be/check-rpc-channel",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/be/check-rpc-channel",draft:!1,tags:[],version:"current",frontMatter:{title:"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58",language:"zh-CN"},sidebar:"docs",previous:{title:"Statistic Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/statistic-action"},next:{title:"\u91cd\u7f6e\u8fde\u63a5\u7f13\u5b58",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/be/reset-rpc-channel"}},p={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58"},"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/check_rpc_channel/{host_to_check}/{remot_brpc_port}/{payload_size}")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u529f\u80fd\u7528\u4e8e\u68c0\u67e5brpc\u7684\u8fde\u63a5\u7f13\u5b58\u3002"),(0,a.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"host_to_check")),(0,a.kt)("p",{parentName:"li"},"  \u9700\u8981\u67e5\u68c0\u7684IP\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"remot_brpc_port")),(0,a.kt)("p",{parentName:"li"},"  \u9700\u8981\u67e5\u68c0\u7684\u7aef\u53e3\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"payload_size")),(0,a.kt)("p",{parentName:"li"},"  \u8d1f\u8f7d\u5927\u5c0f\uff0c\u5355\u4f4dB\uff0c\u53d6\u503c\u8303\u56f41~1024000\u3002"))),(0,a.kt)("h2",{id:"request-body"},"Request body"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```\n{\n    "msg":"success",\n    "code":0,\n    "data": "open brpc connection to {host_to_check}:{remot_brpc_port} succcess.",\n    "count":0\n}\n```\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```\ncurl http://127.0.0.1:8040/api/be_version_info/127.0.0.1/8888/1024000\n```\n")))}m.isMDXComponent=!0}}]);