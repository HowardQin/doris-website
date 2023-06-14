"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Query Schema Action",language:"zh-CN"},l=void 0,o={unversionedId:"admin-manual/http-actions/fe/query-schema-action",id:"admin-manual/http-actions/fe/query-schema-action",title:"Query Schema Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/fe/query-schema-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/query-schema-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/query-schema-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Query Schema Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Query Detail Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/query-detail-action"},next:{title:"Query Stats Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/query-stats-action"}},c={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Example",id:"example",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-schema-action"},"Query Schema Action"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST /api/query_schema/<ns_name>/<db_name>\n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Query Schema Action \u53ef\u4ee5\u8fd4\u56de\u7ed9\u5b9a\u7684 SQL \u6709\u5173\u7684\u8868\u7684\u5efa\u8868\u8bed\u53e5\u3002\u53ef\u4ee5\u7528\u4e8e\u672c\u5730\u6d4b\u8bd5\u4e00\u4e9b\u67e5\u8be2\u573a\u666f\u3002\n\u8be5 API \u5728 1.2 \u7248\u672c\u4e2d\u53d1\u5e03\u3002"),(0,a.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<db_name>")),(0,a.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u5e93\u540d\u79f0\u3002\u8be5\u6570\u636e\u5e93\u4f1a\u88ab\u89c6\u4e3a\u5f53\u524dsession\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\uff0c\u5982\u679c\u5728 SQL \u4e2d\u7684\u8868\u540d\u6ca1\u6709\u9650\u5b9a\u6570\u636e\u5e93\u540d\u79f0\u7684\u8bdd\uff0c\u5219\u4f7f\u7528\u8be5\u6570\u636e\u5e93\u3002"))),(0,a.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"request-body"},"Request body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"text/plain\n\nsql\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sql \u5b57\u6bb5\u4e3a\u5177\u4f53\u7684 SQL")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\u96c6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'CREATE TABLE `tbl1` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k1`) BUCKETS 3\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2",\n"disable_auto_compaction" = "false"\n);\n\nCREATE TABLE `tbl2` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k1`) BUCKETS 3\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2",\n"disable_auto_compaction" = "false"\n);\n')))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u672c\u5730\u6587\u4ef6 1.sql \u4e2d\u5199\u5165 SQL"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"select tbl1.k2 from tbl1 join tbl2 on tbl1.k1 = tbl2.k1;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 curl \u547d\u4ee4\u83b7\u53d6\u5efa\u8868\u8bed\u53e5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"curl -X POST -H 'Content-Type: text/plain'  -uroot: http://127.0.0.1:8030/api/query_schema/internal/db1 -d@1.sql\n")))))}m.isMDXComponent=!0}}]);