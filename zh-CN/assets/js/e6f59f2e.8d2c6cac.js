"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[41090],{3905:(e,n,t)=>{t.d(n,{Zo:()=>N,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},N=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,N=l(e,["components","mdxType","originalType","parentName"]),u=c(t),p=r,f=u["".concat(i,".").concat(p)]||u[p]||d[p]||s;return t?a.createElement(f,o(o({ref:n},N),{},{components:t})):a.createElement(f,o({ref:n},N))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},95109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const s={title:"backends",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/table-functions/backends",id:"version-1.2/sql-manual/sql-functions/table-functions/backends",title:"backends",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/table-functions/backends.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/backends",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/table-functions/backends",draft:!1,tags:[],version:"1.2",frontMatter:{title:"backends",language:"zh-CN"},sidebar:"docs",previous:{title:"iceberg_meta",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/table-functions/iceberg_meta"},next:{title:"resource_groups",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/table-functions/resource-group"}},i={},c=[{value:"<code>backends</code>",id:"backends",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],N={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"backends"},(0,r.kt)("inlineCode",{parentName:"h2"},"backends")),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("version",{since:"dev"},(0,r.kt)("p",null,"backends")),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210backends\u4e34\u65f6\u8868\uff0c\u53ef\u4ee5\u67e5\u770b\u5f53\u524ddoris\u96c6\u7fa4\u4e2d\u7684 BE \u8282\u70b9\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8efrom\u5b50\u53e5\u4e2d\u3002"),(0,r.kt)("h4",{id:"syntax"},"syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"backends()")),(0,r.kt)("p",null,"backends()\u8868\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> desc function backends();\n+-------------------------+--------+------+-------+---------+-------+\n| Field                   | Type   | Null | Key   | Default | Extra |\n+-------------------------+--------+------+-------+---------+-------+\n| BackendId               | BIGINT | No   | false | NULL    | NONE  |\n| Cluster                 | TEXT   | No   | false | NULL    | NONE  |\n| IP                      | TEXT   | No   | false | NULL    | NONE  |\n| HostName                | TEXT   | No   | false | NULL    | NONE  |\n| HeartbeatPort           | INT    | No   | false | NULL    | NONE  |\n| BePort                  | INT    | No   | false | NULL    | NONE  |\n| HttpPort                | INT    | No   | false | NULL    | NONE  |\n| BrpcPort                | INT    | No   | false | NULL    | NONE  |\n| LastStartTime           | TEXT   | No   | false | NULL    | NONE  |\n| LastHeartbeat           | TEXT   | No   | false | NULL    | NONE  |\n| Alive                   | TEXT   | No   | false | NULL    | NONE  |\n| SystemDecommissioned    | TEXT   | No   | false | NULL    | NONE  |\n| ClusterDecommissioned   | TEXT   | No   | false | NULL    | NONE  |\n| TabletNum               | BIGINT | No   | false | NULL    | NONE  |\n| DataUsedCapacity        | BIGINT | No   | false | NULL    | NONE  |\n| AvailCapacity           | BIGINT | No   | false | NULL    | NONE  |\n| TotalCapacity           | BIGINT | No   | false | NULL    | NONE  |\n| UsedPct                 | DOUBLE | No   | false | NULL    | NONE  |\n| MaxDiskUsedPct          | DOUBLE | No   | false | NULL    | NONE  |\n| RemoteUsedCapacity      | BIGINT | No   | false | NULL    | NONE  |\n| Tag                     | TEXT   | No   | false | NULL    | NONE  |\n| ErrMsg                  | TEXT   | No   | false | NULL    | NONE  |\n| Version                 | TEXT   | No   | false | NULL    | NONE  |\n| Status                  | TEXT   | No   | false | NULL    | NONE  |\n| HeartbeatFailureCounter | INT    | No   | false | NULL    | NONE  |\n| NodeRole                | TEXT   | No   | false | NULL    | NONE  |\n+-------------------------+--------+------+-------+---------+-------+\n26 rows in set (0.04 sec)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"backends()")," tvf\u5c55\u793a\u51fa\u6765\u7684\u4fe1\u606f\u57fa\u672c\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"show backends")," \u8bed\u53e5\u5c55\u793a\u51fa\u7684\u4fe1\u606f\u4e00\u81f4,\u4f46\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"backends()")," tvf\u7684\u5404\u4e2a\u5b57\u6bb5\u7c7b\u578b\u66f4\u52a0\u660e\u786e\uff0c\u4e14\u53ef\u4ee5\u5229\u7528tvf\u751f\u6210\u7684\u8868\u53bb\u505a\u8fc7\u6ee4\u3001join\u7b49\u64cd\u4f5c\u3002"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mysql> select * from backends()\\G\n*************************** 1. row ***************************\n              BackendId: 10022\n                Cluster: default_cluster\n                     IP: 10.16.10.14\n               HostName: 10.16.10.14\n          HeartbeatPort: 9159\n                 BePort: 9169\n               HttpPort: 8149\n               BrpcPort: 8169\n          LastStartTime: 2023-03-24 14:37:00\n          LastHeartbeat: 2023-03-27 20:25:35\n                  Alive: true\n   SystemDecommissioned: false\n  ClusterDecommissioned: false\n              TabletNum: 21\n       DataUsedCapacity: 0\n          AvailCapacity: 787460558849\n          TotalCapacity: 3169589592064\n                UsedPct: 75.155756416520319\n         MaxDiskUsedPct: 75.155756416551881\n     RemoteUsedCapacity: 0\n                    Tag: {"location" : "default"}\n                 ErrMsg:\n                Version: doris-0.0.0-trunk-8de51f96f3\n                 Status: {"lastSuccessReportTabletsTime":"2023-03-27 20:24:55","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: mix\n1 row in set (0.03 sec)\n')),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"backends\n")))}d.isMDXComponent=!0}}]);