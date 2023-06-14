"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75496],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(a),u=l,k=s["".concat(o,".").concat(u)]||s[u]||c[u]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82930:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const r={title:"\u6587\u4ef6\u7ba1\u7406\u5668",language:"zh-CN"},i=void 0,p={unversionedId:"advanced/small-file-mgr",id:"advanced/small-file-mgr",title:"\u6587\u4ef6\u7ba1\u7406\u5668",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/small-file-mgr.md",sourceDirName:"advanced",slug:"/advanced/small-file-mgr",permalink:"/zh-CN/docs/dev/advanced/small-file-mgr",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6587\u4ef6\u7ba1\u7406\u5668",language:"zh-CN"},sidebar:"docs",previous:{title:"\u65f6\u533a",permalink:"/zh-CN/docs/dev/advanced/time-zone"},next:{title:"\u51b7\u70ed\u5206\u5c42",permalink:"/zh-CN/docs/dev/advanced/cold_hot_separation"}},o={},m=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5177\u4f53\u64cd\u4f5c",id:"\u5177\u4f53\u64cd\u4f5c",level:2},{value:"CREATE FILE",id:"create-file",level:3},{value:"SHOW FILE",id:"show-file",level:3},{value:"DROP FILE",id:"drop-file",level:3},{value:"\u5b9e\u73b0\u7ec6\u8282",id:"\u5b9e\u73b0\u7ec6\u8282",level:2},{value:"\u521b\u5efa\u548c\u5220\u9664\u6587\u4ef6",id:"\u521b\u5efa\u548c\u5220\u9664\u6587\u4ef6",level:3},{value:"\u6587\u4ef6\u7684\u4f7f\u7528",id:"\u6587\u4ef6\u7684\u4f7f\u7528",level:3},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u76f8\u5173\u914d\u7f6e",id:"\u76f8\u5173\u914d\u7f6e",level:2},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],d={toc:m},s="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6587\u4ef6\u7ba1\u7406\u5668"},"\u6587\u4ef6\u7ba1\u7406\u5668"),(0,l.kt)("p",null,"Doris \u4e2d\u7684\u4e00\u4e9b\u529f\u80fd\u9700\u8981\u4f7f\u7528\u4e00\u4e9b\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u6587\u4ef6\u3002\u6bd4\u5982\u7528\u4e8e\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90\u7684\u516c\u94a5\u3001\u5bc6\u94a5\u6587\u4ef6\u3001\u8bc1\u4e66\u6587\u4ef6\u7b49\u7b49\u3002\u6587\u4ef6\u7ba1\u7406\u5668\u63d0\u4f9b\u8fd9\u6837\u4e00\u4e2a\u529f\u80fd\uff0c\u80fd\u591f\u8ba9\u7528\u6237\u9884\u5148\u4e0a\u4f20\u8fd9\u4e9b\u6587\u4ef6\u5e76\u4fdd\u5b58\u5728 Doris \u7cfb\u7edf\u4e2d\uff0c\u7136\u540e\u53ef\u4ee5\u5728\u5176\u4ed6\u547d\u4ee4\u4e2d\u5f15\u7528\u6216\u8bbf\u95ee\u3002"),(0,l.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BDBJE\uff1aOracle Berkeley DB Java Edition\u3002FE \u4e2d\u7528\u4e8e\u6301\u4e45\u5316\u5143\u6570\u636e\u7684\u5206\u5e03\u5f0f\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u3002"),(0,l.kt)("li",{parentName:"ul"},"SmallFileMgr\uff1a\u6587\u4ef6\u7ba1\u7406\u5668\u3002\u8d1f\u8d23\u521b\u5efa\u5e76\u7ef4\u62a4\u7528\u6237\u7684\u6587\u4ef6\u3002")),(0,l.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,l.kt)("p",null,"\u6587\u4ef6\u662f\u6307\u7528\u6237\u521b\u5efa\u5e76\u4fdd\u5b58\u5728 Doris \u4e2d\u7684\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u6587\u4ef6\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u540d\u79f0\uff08database\uff09"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u5206\u7c7b\uff08catalog\uff09")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6587\u4ef6\u540d\uff08file_name\uff09")," \u5171\u540c\u5b9a\u4f4d\u3002\u540c\u65f6\u6bcf\u4e2a\u6587\u4ef6\u4e5f\u6709\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684 id\uff08file_id\uff09\uff0c\u4f5c\u4e3a\u7cfb\u7edf\u5185\u7684\u6807\u8bc6\u3002"),(0,l.kt)("p",null,"\u6587\u4ef6\u7684\u521b\u5efa\u548c\u5220\u9664\u53ea\u80fd\u7531\u62e5\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"admin")," \u6743\u9650\u7684\u7528\u6237\u8fdb\u884c\u64cd\u4f5c\u3002\u4e00\u4e2a\u6587\u4ef6\u96b6\u5c5e\u4e8e\u4e00\u4e2a\u6570\u636e\u5e93\u3002\u5bf9\u67d0\u4e00\u6570\u636e\u5e93\u62e5\u6709\u8bbf\u95ee\u6743\u9650\uff08\u67e5\u8be2\u3001\u5bfc\u5165\u3001\u4fee\u6539\u7b49\u7b49\uff09\u7684\u7528\u6237\u90fd\u53ef\u4ee5\u4f7f\u7528\u8be5\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u7684\u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u5177\u4f53\u64cd\u4f5c"},"\u5177\u4f53\u64cd\u4f5c"),(0,l.kt)("p",null,"\u6587\u4ef6\u7ba1\u7406\u4e3b\u8981\u6709\u4e09\u4e2a\u547d\u4ee4\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE FILE"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW FILE")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"DROP FILE"),"\uff0c\u5206\u522b\u4e3a\u521b\u5efa\u3001\u67e5\u770b\u548c\u5220\u9664\u6587\u4ef6\u3002\u8fd9\u4e09\u4e2a\u547d\u4ee4\u7684\u5177\u4f53\u8bed\u6cd5\u53ef\u4ee5\u901a\u8fc7\u8fde\u63a5\u5230 Doris \u540e\uff0c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"HELP cmd;")," \u7684\u65b9\u5f0f\u67e5\u770b\u5e2e\u52a9\u3002"),(0,l.kt)("h3",{id:"create-file"},"CREATE FILE"),(0,l.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u5e76\u4e0a\u4f20\u4e00\u4e2a\u6587\u4ef6\u5230 Doris \u96c6\u7fa4\uff0c\u5177\u4f53\u64cd\u4f5c\u53ef\u67e5\u770b ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"},"CREATE FILE")," \u3002"),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'1. \u521b\u5efa\u6587\u4ef6 ca.pem \uff0c\u5206\u7c7b\u4e3a kafka\n\n    CREATE FILE "ca.pem"\n    PROPERTIES\n    (\n        "url" = "https://test.bj.bcebos.com/kafka-key/ca.pem",\n        "catalog" = "kafka"\n    );\n\n2. \u521b\u5efa\u6587\u4ef6 client.key\uff0c\u5206\u7c7b\u4e3a my_catalog\n\n    CREATE FILE "client.key"\n    IN my_database\n    PROPERTIES\n    (\n        "url" = "https://test.bj.bcebos.com/kafka-key/client.key",\n        "catalog" = "my_catalog",\n        "md5" = "b5bb901bf10f99205b39a46ac3557dd9"\n    );\n')),(0,l.kt)("h3",{id:"show-file"},"SHOW FILE"),(0,l.kt)("p",null,"\u8be5\u8bed\u53e5\u53ef\u4ee5\u67e5\u770b\u5df2\u7ecf\u521b\u5efa\u6210\u529f\u7684\u6587\u4ef6\uff0c\u5177\u4f53\u64cd\u4f5c\u53ef\u67e5\u770b ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-FILE"},"SHOW FILE"),"\u3002"),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"1. \u67e5\u770b\u6570\u636e\u5e93 my_database \u4e2d\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6\n\n    SHOW FILE FROM my_database;\n")),(0,l.kt)("h3",{id:"drop-file"},"DROP FILE"),(0,l.kt)("p",null,"\u8be5\u8bed\u53e5\u53ef\u4ee5\u67e5\u770b\u53ef\u4ee5\u5220\u9664\u4e00\u4e2a\u5df2\u7ecf\u521b\u5efa\u7684\u6587\u4ef6\uff0c\u5177\u4f53\u64cd\u4f5c\u53ef\u67e5\u770b ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FILE"},"DROP FILE"),"\u3002"),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'1. \u5220\u9664\u6587\u4ef6 ca.pem\n\n    DROP FILE "ca.pem" properties("catalog" = "kafka");\n')),(0,l.kt)("h2",{id:"\u5b9e\u73b0\u7ec6\u8282"},"\u5b9e\u73b0\u7ec6\u8282"),(0,l.kt)("h3",{id:"\u521b\u5efa\u548c\u5220\u9664\u6587\u4ef6"},"\u521b\u5efa\u548c\u5220\u9664\u6587\u4ef6"),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE FILE")," \u547d\u4ee4\u540e\uff0cFE \u4f1a\u4ece\u7ed9\u5b9a\u7684 URL \u4e0b\u8f7d\u6587\u4ef6\u3002\u5e76\u5c06\u6587\u4ef6\u7684\u5185\u5bb9\u4ee5 Base64 \u7f16\u7801\u7684\u5f62\u5f0f\u76f4\u63a5\u4fdd\u5b58\u5728 FE \u7684\u5185\u5b58\u4e2d\u3002\u540c\u65f6\u4f1a\u5c06\u6587\u4ef6\u5185\u5bb9\u4ee5\u53ca\u6587\u4ef6\u76f8\u5173\u7684\u5143\u4fe1\u606f\u6301\u4e45\u5316\u5728 BDBJE \u4e2d\u3002\u6240\u6709\u88ab\u521b\u5efa\u7684\u6587\u4ef6\uff0c\u5176\u5143\u4fe1\u606f\u548c\u6587\u4ef6\u5185\u5bb9\u90fd\u4f1a\u5e38\u9a7b\u4e8e FE \u7684\u5185\u5b58\u4e2d\u3002\u5982\u679c FE \u5b95\u673a\u91cd\u542f\uff0c\u4e5f\u4f1a\u4ece BDBJE \u4e2d\u52a0\u8f7d\u5143\u4fe1\u606f\u548c\u6587\u4ef6\u5185\u5bb9\u5230\u5185\u5b58\u4e2d\u3002\u5f53\u6587\u4ef6\u88ab\u5220\u9664\u65f6\uff0c\u4f1a\u76f4\u63a5\u4ece FE \u5185\u5b58\u4e2d\u5220\u9664\u76f8\u5173\u4fe1\u606f\uff0c\u540c\u65f6\u4e5f\u4ece BDBJE \u4e2d\u5220\u9664\u6301\u4e45\u5316\u7684\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"\u6587\u4ef6\u7684\u4f7f\u7528"},"\u6587\u4ef6\u7684\u4f7f\u7528"),(0,l.kt)("p",null,"\u5982\u679c\u662f FE \u7aef\u9700\u8981\u4f7f\u7528\u521b\u5efa\u7684\u6587\u4ef6\uff0c\u5219 SmallFileMgr \u4f1a\u76f4\u63a5\u5c06 FE \u5185\u5b58\u4e2d\u7684\u6570\u636e\u4fdd\u5b58\u4e3a\u672c\u5730\u6587\u4ef6\uff0c\u5b58\u50a8\u5728\u6307\u5b9a\u7684\u76ee\u5f55\u4e2d\uff0c\u5e76\u8fd4\u56de\u672c\u5730\u7684\u6587\u4ef6\u8def\u5f84\u4f9b\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u662f BE \u7aef\u9700\u8981\u4f7f\u7528\u521b\u5efa\u7684\u6587\u4ef6\uff0cBE \u4f1a\u901a\u8fc7 FE \u7684 http \u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/get_small_file")," \u5c06\u6587\u4ef6\u5185\u5bb9\u4e0b\u8f7d\u5230 BE \u4e0a\u6307\u5b9a\u7684\u76ee\u5f55\u4e2d\uff0c\u4f9b\u4f7f\u7528\u3002\u540c\u65f6\uff0cBE \u4e5f\u4f1a\u5728\u5185\u5b58\u4e2d\u8bb0\u5f55\u5f53\u524d\u5df2\u7ecf\u4e0b\u8f7d\u8fc7\u7684\u6587\u4ef6\u7684\u4fe1\u606f\u3002\u5f53 BE \u8bf7\u6c42\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u4f1a\u5148\u67e5\u770b\u672c\u5730\u6587\u4ef6\u662f\u5426\u5b58\u5728\u5e76\u6821\u9a8c\u3002\u5982\u679c\u6821\u9a8c\u901a\u8fc7\uff0c\u5219\u76f4\u63a5\u8fd4\u56de\u672c\u5730\u6587\u4ef6\u8def\u5f84\u3002\u5982\u679c\u6821\u9a8c\u5931\u8d25\uff0c\u5219\u4f1a\u5220\u9664\u672c\u5730\u6587\u4ef6\uff0c\u91cd\u65b0\u4ece FE \u4e0b\u8f7d\u3002\u5f53 BE \u91cd\u542f\u65f6\uff0c\u4f1a\u9884\u5148\u52a0\u8f7d\u672c\u5730\u7684\u6587\u4ef6\u5230\u5185\u5b58\u4e2d\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,l.kt)("p",null,"\u56e0\u4e3a\u6587\u4ef6\u5143\u4fe1\u606f\u548c\u5185\u5bb9\u90fd\u5b58\u50a8\u4e8e FE \u7684\u5185\u5b58\u4e2d\u3002\u6240\u4ee5\u9ed8\u8ba4\u4ec5\u652f\u6301\u4e0a\u4f20\u5927\u5c0f\u5728 1MB \u4ee5\u5185\u7684\u6587\u4ef6\u3002\u5e76\u4e14\u603b\u6587\u4ef6\u6570\u91cf\u9650\u5236\u4e3a 100 \u4e2a\u3002\u53ef\u4ee5\u901a\u8fc7\u4e0b\u4e00\u5c0f\u8282\u4ecb\u7ecd\u7684\u914d\u7f6e\u9879\u8fdb\u884c\u4fee\u6539\u3002"),(0,l.kt)("h2",{id:"\u76f8\u5173\u914d\u7f6e"},"\u76f8\u5173\u914d\u7f6e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"FE \u914d\u7f6e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"small_file_dir"),"\uff1a\u7528\u4e8e\u5b58\u653e\u4e0a\u4f20\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a FE \u8fd0\u884c\u76ee\u5f55\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"small_files/")," \u76ee\u5f55\u4e0b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_small_file_size_bytes"),"\uff1a\u5355\u4e2a\u6587\u4ef6\u5927\u5c0f\u9650\u5236\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\u3002\u9ed8\u8ba4\u4e3a 1MB\u3002\u5927\u4e8e\u8be5\u914d\u7f6e\u7684\u6587\u4ef6\u521b\u5efa\u5c06\u4f1a\u88ab\u62d2\u7edd\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_small_file_number"),"\uff1a\u4e00\u4e2a Doris \u96c6\u7fa4\u652f\u6301\u7684\u603b\u6587\u4ef6\u6570\u91cf\u3002\u9ed8\u8ba4\u4e3a 100\u3002\u5f53\u521b\u5efa\u7684\u6587\u4ef6\u6570\u8d85\u8fc7\u8fd9\u4e2a\u503c\u540e\uff0c\u540e\u7eed\u7684\u521b\u5efa\u5c06\u4f1a\u88ab\u62d2\u7edd\u3002")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u9700\u8981\u4e0a\u4f20\u66f4\u591a\u6587\u4ef6\u6216\u63d0\u9ad8\u5355\u4e2a\u6587\u4ef6\u7684\u5927\u5c0f\u9650\u5236\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"ADMIN SET CONFIG")," \u547d\u4ee4\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"max_small_file_size_bytes")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"max_small_file_number")," \u53c2\u6570\u3002\u4f46\u6587\u4ef6\u6570\u91cf\u548c\u5927\u5c0f\u7684\u589e\u52a0\uff0c\u4f1a\u5bfc\u81f4 FE \u5185\u5b58\u4f7f\u7528\u91cf\u7684\u589e\u52a0\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"BE \u914d\u7f6e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"small_file_dir"),"\uff1a\u7528\u4e8e\u5b58\u653e\u4ece FE \u4e0b\u8f7d\u7684\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a BE \u8fd0\u884c\u76ee\u5f55\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"lib/small_files/")," \u76ee\u5f55\u4e0b\u3002")))),(0,l.kt)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,l.kt)("p",null,"\u5173\u4e8e\u6587\u4ef6\u7ba1\u7406\u5668\u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"},"CREATE FILE")," \u3001",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FILE"},"DROP FILE")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-FILE"},"SHOW FILE")," \u547d\u4ee4\u624b\u518c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 MySql \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"HELP CREATE FILE")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"HELP DROP FILE"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"HELP SHOW FILE"),"  \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"))}c.isMDXComponent=!0}}]);