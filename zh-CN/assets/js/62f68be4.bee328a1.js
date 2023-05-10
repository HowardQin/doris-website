"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[74618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u51b7\u70ed\u5206\u79bb",language:"zh-CN"},o=void 0,i={unversionedId:"advanced/cold_hot_separation",id:"advanced/cold_hot_separation",title:"\u51b7\u70ed\u5206\u79bb",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/cold_hot_separation.md",sourceDirName:"advanced",slug:"/advanced/cold_hot_separation",permalink:"/zh-CN/docs/dev/advanced/cold_hot_separation",draft:!1,tags:[],version:"current",frontMatter:{title:"\u51b7\u70ed\u5206\u79bb",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6587\u4ef6\u7ba1\u7406\u5668",permalink:"/zh-CN/docs/dev/advanced/small-file-mgr"},next:{title:"\u8ba1\u7b97\u8282\u70b9",permalink:"/zh-CN/docs/dev/advanced/compute_node"}},c={},p=[{value:"\u9700\u6c42\u573a\u666f",id:"\u9700\u6c42\u573a\u666f",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"Storage policy\u7684\u4f7f\u7528",id:"storage-policy\u7684\u4f7f\u7528",level:2},{value:"\u4e00\u4e9b\u9650\u5236",id:"\u4e00\u4e9b\u9650\u5236",level:3},{value:"\u51b7\u6570\u636e\u5360\u7528\u5bf9\u8c61\u5927\u5c0f",id:"\u51b7\u6570\u636e\u5360\u7528\u5bf9\u8c61\u5927\u5c0f",level:2},{value:"\u51b7\u6570\u636e\u7684cache",id:"\u51b7\u6570\u636e\u7684cache",level:2},{value:"\u672a\u5c3d\u4e8b\u9879",id:"\u672a\u5c3d\u4e8b\u9879",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"experimental-\u51b7\u70ed\u5206\u79bb"},"[Experimental]"," \u51b7\u70ed\u5206\u79bb"),(0,r.kt)("h2",{id:"\u9700\u6c42\u573a\u666f"},"\u9700\u6c42\u573a\u666f"),(0,r.kt)("p",null,"\u672a\u6765\u4e00\u4e2a\u5f88\u5927\u7684\u4f7f\u7528\u573a\u666f\u662f\u7c7b\u4f3c\u4e8ees\u65e5\u5fd7\u5b58\u50a8\uff0c\u65e5\u5fd7\u573a\u666f\u4e0b\u6570\u636e\u4f1a\u6309\u7167\u65e5\u671f\u6765\u5207\u5272\u6570\u636e\uff0c\u5f88\u591a\u6570\u636e\u662f\u51b7\u6570\u636e\uff0c\u67e5\u8be2\u5f88\u5c11\uff0c\u9700\u8981\u964d\u4f4e\u8fd9\u7c7b\u6570\u636e\u7684\u5b58\u50a8\u6210\u672c\u3002\u4ece\u8282\u7ea6\u5b58\u50a8\u6210\u672c\u89d2\u5ea6\u8003\u8651"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5404\u4e91\u5382\u5546\u666e\u901a\u4e91\u76d8\u7684\u4ef7\u683c\u90fd\u6bd4\u5bf9\u8c61\u5b58\u50a8\u8d35"),(0,r.kt)("li",{parentName:"ol"},"\u5728doris\u96c6\u7fa4\u5b9e\u9645\u7ebf\u4e0a\u4f7f\u7528\u4e2d\uff0c\u666e\u901a\u4e91\u76d8\u7684\u5229\u7528\u7387\u65e0\u6cd5\u8fbe\u5230100%"),(0,r.kt)("li",{parentName:"ol"},"\u4e91\u76d8\u4e0d\u662f\u6309\u9700\u4ed8\u8d39\uff0c\u800c\u5bf9\u8c61\u5b58\u50a8\u53ef\u4ee5\u505a\u5230\u6309\u9700\u4ed8\u8d39"),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u666e\u901a\u4e91\u76d8\u505a\u9ad8\u53ef\u7528\uff0c\u9700\u8981\u5b9e\u73b0\u591a\u526f\u672c\uff0c\u67d0\u526f\u672c\u5f02\u5e38\u8981\u505a\u526f\u672c\u8fc1\u79fb\u3002\u800c\u5c06\u6570\u636e\u653e\u5230\u5bf9\u8c61\u5b58\u50a8\u4e0a\u5219\u4e0d\u5b58\u5728\u6b64\u7c7b\u95ee\u9898\uff0c\u56e0\u4e3a\u5bf9\u8c61\u5b58\u50a8\u662f\u5171\u4eab\u7684\u3002")),(0,r.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u5728Partition\u7ea7\u522b\u4e0a\u8bbe\u7f6efreeze time\uff0c\u8868\u793a\u591a\u4e45\u8fd9\u4e2aPartition\u4f1a\u88abfreeze\uff0c\u5e76\u4e14\u5b9a\u4e49freeze\u4e4b\u540e\u5b58\u50a8\u7684remote storage\u7684\u4f4d\u7f6e\u3002\u5728be\u4e0adaemon\u7ebf\u7a0b\u4f1a\u5468\u671f\u6027\u7684\u5224\u65ad\u8868\u662f\u5426\u9700\u8981freeze\uff0c\u82e5freeze\u540e\u4f1a\u5c06\u6570\u636e\u4e0a\u4f20\u5230s3\u4e0a\u3002"),(0,r.kt)("p",null,"\u51b7\u70ed\u5206\u79bb\u652f\u6301\u6240\u6709doris\u529f\u80fd\uff0c\u53ea\u662f\u628a\u90e8\u5206\u6570\u636e\u653e\u5230\u5bf9\u8c61\u5b58\u50a8\u4e0a\uff0c\u4ee5\u8282\u7701\u6210\u672c\uff0c\u4e0d\u727a\u7272\u529f\u80fd\u3002\u56e0\u6b64\u6709\u5982\u4e0b\u7279\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u51b7\u6570\u636e\u653e\u5230\u5bf9\u8c61\u5b58\u50a8\u4e0a\uff0c\u7528\u6237\u65e0\u9700\u62c5\u5fc3\u6570\u636e\u4e00\u81f4\u6027\u548c\u6570\u636e\u5b89\u5168\u6027\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u7684freeze\u7b56\u7565\uff0c\u51b7\u5374\u8fdc\u7a0b\u5b58\u50a8property\u53ef\u4ee5\u5e94\u7528\u5230\u8868\u548cpartition\u7ea7\u522b"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u67e5\u8be2\u6570\u636e\uff0c\u65e0\u9700\u5173\u6ce8\u6570\u636e\u5206\u5e03\u4f4d\u7f6e\uff0c\u82e5\u6570\u636e\u4e0d\u5728\u672c\u5730\uff0c\u4f1a\u62c9\u53d6\u5bf9\u8c61\u4e0a\u7684\u6570\u636e\uff0c\u5e76cache\u5230be\u672c\u5730"),(0,r.kt)("li",{parentName:"ul"},"\u526f\u672cclone\u4f18\u5316\uff0c\u82e5\u5b58\u50a8\u6570\u636e\u5728\u5bf9\u8c61\u4e0a\uff0c\u5219\u526f\u672cclone\u7684\u65f6\u5019\u4e0d\u7528\u53bb\u62c9\u53d6\u5b58\u50a8\u6570\u636e\u5230\u672c\u5730"),(0,r.kt)("li",{parentName:"ul"},"\u8fdc\u7a0b\u5bf9\u8c61\u7a7a\u95f4\u56de\u6536recycler\uff0c\u82e5\u8868\u3001\u5206\u533a\u88ab\u5220\u9664\uff0c\u6216\u8005\u51b7\u70ed\u5206\u79bb\u8fc7\u7a0b\u4e2d\u5f02\u5e38\u60c5\u51b5\u4ea7\u751f\u7684\u7a7a\u95f4\u6d6a\u8d39\uff0c\u5219\u4f1a\u6709recycler\u7ebf\u7a0b\u5468\u671f\u6027\u7684\u56de\u6536\uff0c\u8282\u7ea6\u5b58\u50a8\u8d44\u6e90"),(0,r.kt)("li",{parentName:"ul"},"cache\u4f18\u5316\uff0c\u5c06\u8bbf\u95ee\u8fc7\u7684\u51b7\u6570\u636ecache\u5230be\u672c\u5730\uff0c\u8fbe\u5230\u975e\u51b7\u70ed\u5206\u79bb\u7684\u67e5\u8be2\u6027\u80fd"),(0,r.kt)("li",{parentName:"ul"},"be\u7ebf\u7a0b\u6c60\u4f18\u5316\uff0c\u533a\u5206\u6570\u636e\u6765\u6e90\u662f\u672c\u5730\u8fd8\u662f\u5bf9\u8c61\u5b58\u50a8\uff0c\u9632\u6b62\u8bfb\u53d6\u5bf9\u8c61\u5ef6\u65f6\u5f71\u54cd\u67e5\u8be2\u6027\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u5efa\u7684\u7269\u5316\u89c6\u56fe\u4e5f\u4f1a\u7ee7\u627f\u76f8\u540cpartition\u7684\u5b58\u50a8\u7b56\u7565")),(0,r.kt)("h2",{id:"storage-policy\u7684\u4f7f\u7528"},"Storage policy\u7684\u4f7f\u7528"),(0,r.kt)("p",null,"\u5b58\u50a8\u7b56\u7565\u662f\u4f7f\u7528\u51b7\u70ed\u5206\u79bb\u529f\u80fd\u7684\u5165\u53e3\uff0c\u7528\u6237\u53ea\u9700\u8981\u5728\u5efa\u8868\u6216\u4f7f\u7528doris\u8fc7\u7a0b\u4e2d\uff0c\u7ed9\u8868\u6216\u5206\u533a\u5173\u8054\u4e0astorage policy\uff0c\u5373\u53ef\u4ee5\u4f7f\u7528\u51b7\u70ed\u5206\u79bb\u7684\u529f\u80fd\u3002"),(0,r.kt)("version",{since:"dev"})," \u521b\u5efaS3 RESOURCE\u7684\u65f6\u5019\uff0c\u4f1a\u8fdb\u884cS3\u8fdc\u7aef\u7684\u94fe\u63a5\u6821\u9a8c\uff0c\u4ee5\u4fdd\u8bc1RESOURCE\u521b\u5efa\u7684\u6b63\u786e\u3002",(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u9700\u8981\u65b0\u589efe\u914d\u7f6e\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"enable_storage_policy=true")),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "AWS_ENDPOINT" = "bj.s3.com",\n    "AWS_REGION" = "bj",\n    "AWS_BUCKET" = "test-bucket",\n    "AWS_ROOT_PATH" = "path/to/root",\n    "AWS_ACCESS_KEY" = "bbb",\n    "AWS_SECRET_KEY" = "aaaa",\n    "AWS_MAX_CONNECTIONS" = "50",\n    "AWS_REQUEST_TIMEOUT_MS" = "3000",\n    "AWS_CONNECTION_TIMEOUT_MS" = "1000"\n);\n\nCREATE STORAGE POLICY test_policy\nPROPERTIES(\n    "storage_resource" = "remote_s3",\n    "cooldown_ttl" = "1d"\n);\n\nCREATE TABLE IF NOT EXISTS create_table_use_created_policy \n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048)\n)\nUNIQUE KEY(k1)\nDISTRIBUTED BY HASH (k1) BUCKETS 3\nPROPERTIES(\n    "storage_policy" = "test_policy"\n);\n')),(0,r.kt)("p",null,"\u6216\u8005\u5bf9\u4e00\u4e2a\u5df2\u5b58\u5728\u7684\u8868\uff0c\u5173\u8054storage policy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ALTER TABLE create_table_not_have_policy set ("storage_policy" = "test_policy");\n')),(0,r.kt)("p",null,"\u6216\u8005\u5bf9\u4e00\u4e2a\u5df2\u5b58\u5728\u7684partition\uff0c\u5173\u8054storage policy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ALTER TABLE create_table_partition MODIFY PARTITION (*) SET("storage_policy"="test_policy");\n')),(0,r.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u53c2\u8003docs\u76ee\u5f55\u4e0b",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE"},"resource"),"\u3001 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY"},"policy"),"\u3001 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"create table"),"\u3001 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"},"alter table"),"\u7b49\u6587\u6863\uff0c\u91cc\u9762\u6709\u8be6\u7ec6\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"\u4e00\u4e9b\u9650\u5236"},"\u4e00\u4e9b\u9650\u5236"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u8868\u6216\u5355partition\u53ea\u80fd\u5173\u8054\u4e00\u4e2astorage policy\uff0c\u5173\u8054\u540e\u4e0d\u80fddrop\u6389storage policy"),(0,r.kt)("li",{parentName:"ul"},"storage policy\u5173\u8054\u7684\u5bf9\u8c61\u4fe1\u606f\u4e0d\u652f\u6301\u4fee\u6539\u6570\u636e\u5b58\u50a8path\u7684\u4fe1\u606f\uff0c\u6bd4\u5982bucket\u3001endpoint\u3001root_path\u7b49\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"storage policy\u76ee\u524d\u53ea\u652f\u6301\u521b\u5efa\u548c\u4fee\u6539\uff0c\u4e0d\u652f\u6301\u5220\u9664")),(0,r.kt)("h2",{id:"\u51b7\u6570\u636e\u5360\u7528\u5bf9\u8c61\u5927\u5c0f"},"\u51b7\u6570\u636e\u5360\u7528\u5bf9\u8c61\u5927\u5c0f"),(0,r.kt)("p",null,"\u65b9\u5f0f\u4e00\uff1a\n\u901a\u8fc7show proc '/backends'\u53ef\u4ee5\u67e5\u770b\u5230\u6bcf\u4e2abe\u4e0a\u4f20\u5230\u5bf9\u8c61\u7684\u5927\u5c0f\uff0cRemoteUsedCapacity\u9879"),(0,r.kt)("p",null,"\u65b9\u5f0f\u4e8c\uff1a\n\u901a\u8fc7show tablets from tableName\u53ef\u4ee5\u67e5\u770b\u5230\u8868\u7684\u6bcf\u4e2atablet\u5360\u7528\u7684\u5bf9\u8c61\u5927\u5c0f\uff0cRemoteDataSize\u9879"),(0,r.kt)("h2",{id:"\u51b7\u6570\u636e\u7684cache"},"\u51b7\u6570\u636e\u7684cache"),(0,r.kt)("p",null,"\u4e0a\u6587\u63d0\u5230\u51b7\u6570\u636e\u4e3a\u4e86\u4f18\u5316\u67e5\u8be2\u7684\u6027\u80fd\u548c\u5bf9\u8c61\u5b58\u50a8\u8d44\u6e90\u8282\u7701\uff0c\u5f15\u5165\u4e86cache\u7684\u6982\u5ff5\u3002\u5728\u51b7\u5374\u540e\u9996\u6b21\u547d\u4e2d\uff0cDoris\u4f1a\u5c06\u5df2\u7ecf\u51b7\u5374\u7684\u6570\u636e\u53c8\u91cd\u65b0\u52a0\u8f7d\u5230be\u7684\u672c\u5730\u78c1\u76d8\uff0ccache\u6709\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cache\u5b9e\u9645\u5b58\u50a8\u4e8ebe\u78c1\u76d8\uff0c\u4e0d\u5360\u7528\u5185\u5b58\u7a7a\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"cache\u53ef\u4ee5\u9650\u5236\u81a8\u80c0\uff0c\u901a\u8fc7LRU\u8fdb\u884c\u6570\u636e\u7684\u6e05\u7406"),(0,r.kt)("li",{parentName:"ul"},"be\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"li"},"file_cache_alive_time_sec"),"\u53ef\u4ee5\u8bbe\u7f6ecache\u6570\u636e\u518d\u672a\u88ab\u8bbf\u95ee\u540e\u7684\u6700\u5927\u4fdd\u5b58\u65f6\u95f4\uff0c\u9ed8\u8ba4\u662f604800\uff0c\u5373\u4e00\u5468\u3002"),(0,r.kt)("li",{parentName:"ul"},"be\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"li"},"file_cache_max_size_per_disk")," \u53ef\u4ee5\u8bbe\u7f6ecache\u5360\u7528\u78c1\u76d8\u5927\u5c0f\uff0c\u4e00\u65e6\u8d85\u8fc7\u8fd9\u4e2a\u8bbe\u7f6e\uff0c\u4f1a\u5220\u9664\u6700\u4e45\u672a\u8bbf\u95eecache\uff0c\u9ed8\u8ba4\u662f0\uff0c\u5355\u4f4d\uff1a\u5b57\u8282\uff0c\u5373\u4e0d\u9650\u5236\u5927\u5c0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"be\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"li"},"file_cache_type")," \u53ef\u9009\u9879",(0,r.kt)("inlineCode",{parentName:"li"},"sub_file_cache"),"\uff08\u5207\u5206\u8fdc\u7aef\u6587\u4ef6\u8fdb\u884c\u672c\u5730\u7f13\u5b58\uff09\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"whole_file_cache"),'\uff08\u6574\u4e2a\u8fdc\u7aef\u6587\u4ef6\u8fdb\u884c\u672c\u5730\u7f13\u5b58\uff09\uff0c\u9ed8\u8ba4\u4e3a""\uff0c\u5373\u4e0d\u7f13\u5b58\u6587\u4ef6\uff0c\u9700\u8981\u7f13\u5b58\u7684\u65f6\u5019\u8bf7\u8bbe\u7f6e\u6b64\u53c2\u6570\u3002')),(0,r.kt)("h2",{id:"\u672a\u5c3d\u4e8b\u9879"},"\u672a\u5c3d\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u88abcooldown\u540e\uff0c\u53c8\u6709\u65b0\u6570\u636eupdate\u6216\u5bfc\u5165\u7b49\uff0ccompaction\u76ee\u524d\u6ca1\u6709\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u88abcooldown\u540e\uff0cschema change\u64cd\u4f5c\uff0c\u76ee\u524d\u4e0d\u652f\u6301")))}d.isMDXComponent=!0}}]);