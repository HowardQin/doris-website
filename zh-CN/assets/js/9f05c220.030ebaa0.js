"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[64827],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(a),d=r,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1471:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Paimon",language:"zh-CN"},l=void 0,i={unversionedId:"lakehouse/multi-catalog/paimon",id:"lakehouse/multi-catalog/paimon",title:"Paimon",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/multi-catalog/paimon.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/paimon",permalink:"/zh-CN/docs/dev/lakehouse/multi-catalog/paimon",draft:!1,tags:[],version:"current",frontMatter:{title:"Paimon",language:"zh-CN"},sidebar:"docs",previous:{title:"Iceberg",permalink:"/zh-CN/docs/dev/lakehouse/multi-catalog/iceberg"},next:{title:"Hudi",permalink:"/zh-CN/docs/dev/lakehouse/multi-catalog/hudi"}},c={},u=[{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u521b\u5efa Catalog",id:"\u521b\u5efa-catalog",level:2},{value:"\u57fa\u4e8ePaimon API\u521b\u5efaCatalog",id:"\u57fa\u4e8epaimon-api\u521b\u5efacatalog",level:3},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"paimon"},"Paimon"),(0,r.kt)("version",{since:"dev"}),(0,r.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u76ee\u524d\u53ea\u652f\u6301\u7b80\u5355\u5b57\u6bb5\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u76ee\u524d\u4ec5\u652f\u6301 Hive Metastore \u7c7b\u578b\u7684 Catalog\u3002\u6240\u4ee5\u4f7f\u7528\u65b9\u5f0f\u548c Hive Catalog \u57fa\u672c\u4e00\u81f4\u3002\u540e\u7eed\u7248\u672c\u5c06\u652f\u6301\u5176\u4ed6\u7c7b\u578b\u7684 Catalog\u3002")),(0,r.kt)("h2",{id:"\u521b\u5efa-catalog"},"\u521b\u5efa Catalog"),(0,r.kt)("h3",{id:"\u57fa\u4e8epaimon-api\u521b\u5efacatalog"},"\u57fa\u4e8ePaimon API\u521b\u5efaCatalog"),(0,r.kt)("p",null,"\u4f7f\u7528Paimon API\u8bbf\u95ee\u5143\u6570\u636e\u7684\u65b9\u5f0f\uff0c\u76ee\u524d\u53ea\u652f\u6301Hive\u670d\u52a1\u4f5c\u4e3aPaimon\u7684Catalog\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hive Metastore \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon` PROPERTIES (\n    "type" = "paimon",\n    "hive.metastore.uris" = "thrift://172.16.65.15:7004",\n    "dfs.ha.namenodes.HDFS1006531" = "nn2,nn1",\n    "dfs.namenode.rpc-address.HDFS1006531.nn2" = "172.16.65.115:4007",\n    "dfs.namenode.rpc-address.HDFS1006531.nn1" = "172.16.65.15:4007",\n    "dfs.nameservices" = "HDFS1006531",\n    "hadoop.username" = "hadoop",\n    "warehouse" = "hdfs://HDFS1006531/data/paimon",\n    "dfs.client.failover.proxy.provider.HDFS1006531" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')),(0,r.kt)("h2",{id:"\u5217\u7c7b\u578b\u6620\u5c04"},"\u5217\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("p",null,"\u548c Hive Catalog \u57fa\u672c\u4e00\u81f4\uff0c\u53ef\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/lakehouse/multi-catalog/hive"},"Hive Catalog")," \u4e2d ",(0,r.kt)("strong",{parentName:"p"},"\u5217\u7c7b\u578b\u6620\u5c04")," \u4e00\u8282\u3002"))}m.isMDXComponent=!0}}]);