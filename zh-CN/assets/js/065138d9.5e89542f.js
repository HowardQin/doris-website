"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[89480],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||n;return a?l.createElement(k,i(i({ref:t},s),{},{components:a})):l.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var l=a(87462),r=(a(67294),a(3905));const n={title:"\u6700\u4f73\u5b9e\u8df5",language:"zh-CN"},i=void 0,o={unversionedId:"data-table/best-practice",id:"data-table/best-practice",title:"\u6700\u4f73\u5b9e\u8df5",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-table/best-practice.md",sourceDirName:"data-table",slug:"/data-table/best-practice",permalink:"/zh-CN/docs/dev/data-table/best-practice",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6700\u4f73\u5b9e\u8df5",language:"zh-CN"},sidebar:"docs",previous:{title:"Rollup\u4e0e\u67e5\u8be2",permalink:"/zh-CN/docs/dev/data-table/hit-the-rollup"},next:{title:"\u52a8\u6001 Schema \u8868",permalink:"/zh-CN/docs/dev/data-table/dynamic-schema-table"}},u={},p=[{value:"\u5efa\u8868",id:"\u5efa\u8868",level:2},{value:"\u6570\u636e\u6a21\u578b\u9009\u62e9",id:"\u6570\u636e\u6a21\u578b\u9009\u62e9",level:3},{value:"AGGREGATE KEY",id:"aggregate-key",level:4},{value:"UNIQUE KEY",id:"unique-key",level:4},{value:"DUPLICATE KEY",id:"duplicate-key",level:4},{value:"\u5927\u5bbd\u8868\u4e0e Star Schema",id:"\u5927\u5bbd\u8868\u4e0e-star-schema",level:3},{value:"\u5206\u533a\u548c\u5206\u6876",id:"\u5206\u533a\u548c\u5206\u6876",level:3},{value:"\u5206\u533a(partition)",id:"\u5206\u533apartition",level:4},{value:"RANGE\u5206\u533a",id:"range\u5206\u533a",level:5},{value:"LIST\u5206\u533a",id:"list\u5206\u533a",level:5},{value:"HASH\u5206\u6876(bucket)",id:"hash\u5206\u6876bucket",level:4},{value:"\u7a00\u758f\u7d22\u5f15\u548c Bloom Filter",id:"\u7a00\u758f\u7d22\u5f15\u548c-bloom-filter",level:3},{value:"Rollup",id:"rollup",level:3},{value:"Base Table \u4e2d\u6570\u636e\u805a\u5408\u5ea6\u4e0d\u9ad8\u3002",id:"base-table-\u4e2d\u6570\u636e\u805a\u5408\u5ea6\u4e0d\u9ad8",level:4},{value:"Base Table \u4e2d\u7684\u524d\u7f00\u7d22\u5f15\u65e0\u6cd5\u547d\u4e2d",id:"base-table-\u4e2d\u7684\u524d\u7f00\u7d22\u5f15\u65e0\u6cd5\u547d\u4e2d",level:4},{value:"Schema Change",id:"schema-change",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("h2",{id:"\u5efa\u8868"},"\u5efa\u8868"),(0,r.kt)("h3",{id:"\u6570\u636e\u6a21\u578b\u9009\u62e9"},"\u6570\u636e\u6a21\u578b\u9009\u62e9"),(0,r.kt)("p",null,"Doris \u6570\u636e\u6a21\u578b\u4e0a\u76ee\u524d\u5206\u4e3a\u4e09\u7c7b: AGGREGATE KEY, UNIQUE KEY, DUPLICATE KEY\u3002\u4e09\u79cd\u6a21\u578b\u4e2d\u6570\u636e\u90fd\u662f\u6309KEY\u8fdb\u884c\u6392\u5e8f\u3002"),(0,r.kt)("h4",{id:"aggregate-key"},"AGGREGATE KEY"),(0,r.kt)("p",null,"AGGREGATE KEY\u76f8\u540c\u65f6\uff0c\u65b0\u65e7\u8bb0\u5f55\u8fdb\u884c\u805a\u5408\uff0c\u76ee\u524d\u652f\u6301\u7684\u805a\u5408\u51fd\u6570\u6709SUM, MIN, MAX, REPLACE\u3002"),(0,r.kt)("p",null,"AGGREGATE KEY\u6a21\u578b\u53ef\u4ee5\u63d0\u524d\u805a\u5408\u6570\u636e, \u9002\u5408\u62a5\u8868\u548c\u591a\u7ef4\u5206\u6790\u4e1a\u52a1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE site_visit\n(\n    siteid      INT,\n    city        SMALLINT,\n    username    VARCHAR(32),\n    pv BIGINT   SUM DEFAULT '0'\n)\nAGGREGATE KEY(siteid, city, username)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10;\n")),(0,r.kt)("h4",{id:"unique-key"},"UNIQUE KEY"),(0,r.kt)("p",null,"UNIQUE KEY \u76f8\u540c\u65f6\uff0c\u65b0\u8bb0\u5f55\u8986\u76d6\u65e7\u8bb0\u5f55\u3002\u57281.2\u7248\u672c\u4e4b\u524d\uff0cUNIQUE KEY \u5b9e\u73b0\u4e0a\u548c AGGREGATE KEY \u7684 REPLACE \u805a\u5408\u65b9\u6cd5\u4e00\u6837\uff0c\u4e8c\u8005\u672c\u8d28\u4e0a\u76f8\u540c\uff0c\u81ea1.2\u7248\u672c\u6211\u4eec\u7ed9UNIQUE KEY\u5f15\u5165\u4e86merge on write\u5b9e\u73b0\uff0c\u8be5\u5b9e\u73b0\u6709\u66f4\u597d\u7684\u805a\u5408\u67e5\u8be2\u6027\u80fd\u3002\u9002\u7528\u4e8e\u6709\u66f4\u65b0\u9700\u6c42\u7684\u5206\u6790\u4e1a\u52a1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sales_order\n(\n    orderid     BIGINT,\n    status      TINYINT,\n    username    VARCHAR(32),\n    amount      BIGINT DEFAULT '0'\n)\nUNIQUE KEY(orderid)\nDISTRIBUTED BY HASH(orderid) BUCKETS 10;\n")),(0,r.kt)("h4",{id:"duplicate-key"},"DUPLICATE KEY"),(0,r.kt)("p",null,"\u53ea\u6307\u5b9a\u6392\u5e8f\u5217\uff0c\u76f8\u540c\u7684\u884c\u4e0d\u4f1a\u5408\u5e76\u3002\u9002\u7528\u4e8e\u6570\u636e\u65e0\u9700\u63d0\u524d\u805a\u5408\u7684\u5206\u6790\u4e1a\u52a1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE session_data\n(\n    visitorid   SMALLINT,\n    sessionid   BIGINT,\n    visittime   DATETIME,\n    city        CHAR(20),\n    province    CHAR(20),\n    ip          varchar(32),\n    brower      CHAR(20),\n    url         VARCHAR(1024)\n)\nDUPLICATE KEY(visitorid, sessionid)\nDISTRIBUTED BY HASH(sessionid, visitorid) BUCKETS 10;\n")),(0,r.kt)("h3",{id:"\u5927\u5bbd\u8868\u4e0e-star-schema"},"\u5927\u5bbd\u8868\u4e0e Star Schema"),(0,r.kt)("p",null,"\u4e1a\u52a1\u65b9\u5efa\u8868\u65f6, \u4e3a\u4e86\u548c\u524d\u7aef\u4e1a\u52a1\u9002\u914d, \u5f80\u5f80\u4e0d\u5bf9\u7ef4\u5ea6\u4fe1\u606f\u548c\u6307\u6807\u4fe1\u606f\u52a0\u4ee5\u533a\u5206, \u800c\u5c06 Schema \u5b9a\u4e49\u6210\u5927\u5bbd\u8868\uff0c\u8fd9\u79cd\u64cd\u4f5c\u5bf9\u4e8e\u6570\u636e\u5e93\u5176\u5b9e\u4e0d\u662f\u90a3\u4e48\u53cb\u597d\uff0c\u6211\u4eec\u66f4\u5efa\u8bae\u7528\u6237\u91c7\u7528\u661f\u578b\u6a21\u578b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Schema \u4e2d\u5b57\u6bb5\u6570\u6bd4\u8f83\u591a, \u805a\u5408\u6a21\u578b\u4e2d\u53ef\u80fd key \u5217\u6bd4\u8f83\u591a, \u5bfc\u5165\u8fc7\u7a0b\u4e2d\u9700\u8981\u6392\u5e8f\u7684\u5217\u4f1a\u589e\u52a0\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7ef4\u5ea6\u4fe1\u606f\u66f4\u65b0\u4f1a\u53cd\u5e94\u5230\u6574\u5f20\u8868\u4e2d\uff0c\u800c\u66f4\u65b0\u7684\u9891\u7387\u76f4\u63a5\u5f71\u54cd\u67e5\u8be2\u7684\u6548\u7387\u3002")),(0,r.kt)("p",null,"\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u5efa\u8bae\u7528\u6237\u5c3d\u91cf\u4f7f\u7528 Star Schema \u533a\u5206\u7ef4\u5ea6\u8868\u548c\u6307\u6807\u8868\u3002\u9891\u7e41\u66f4\u65b0\u7684\u7ef4\u5ea6\u8868\u4e5f\u53ef\u4ee5\u653e\u5728 MySQL \u5916\u90e8\u8868\u4e2d\u3002\u800c\u5982\u679c\u53ea\u6709\u5c11\u91cf\u66f4\u65b0, \u53ef\u4ee5\u76f4\u63a5\u653e\u5728 Doris \u4e2d\u3002\u5728 Doris \u4e2d\u5b58\u50a8\u7ef4\u5ea6\u8868\u65f6\uff0c\u53ef\u5bf9\u7ef4\u5ea6\u8868\u8bbe\u7f6e\u66f4\u591a\u7684\u526f\u672c\uff0c\u63d0\u5347 Join \u7684\u6027\u80fd\u3002"),(0,r.kt)("h3",{id:"\u5206\u533a\u548c\u5206\u6876"},"\u5206\u533a\u548c\u5206\u6876"),(0,r.kt)("p",null,"Doris \u652f\u6301\u4e24\u7ea7\u5206\u533a\u5b58\u50a8, \u7b2c\u4e00\u5c42\u4e3a\u5206\u533a(partition)\uff0c\u76ee\u524d\u652f\u6301 RANGE \u5206\u533a\u548c LIST \u5206\u533a\u4e24\u79cd\u7c7b\u578b, \u7b2c\u4e8c\u5c42\u4e3a HASH \u5206\u6876(bucket)\u3002"),(0,r.kt)("h4",{id:"\u5206\u533apartition"},"\u5206\u533a(partition)"),(0,r.kt)("p",null,"\u5206\u533a\u7528\u4e8e\u5c06\u6570\u636e\u5212\u5206\u6210\u4e0d\u540c\u533a\u95f4, \u903b\u8f91\u4e0a\u53ef\u4ee5\u7406\u89e3\u4e3a\u5c06\u539f\u59cb\u8868\u5212\u5206\u6210\u4e86\u591a\u4e2a\u5b50\u8868\u3002\u53ef\u4ee5\u65b9\u4fbf\u7684\u6309\u5206\u533a\u5bf9\u6570\u636e\u8fdb\u884c\u7ba1\u7406\uff0c\u4f8b\u5982\uff0c\u5220\u9664\u6570\u636e\u65f6\uff0c\u66f4\u52a0\u8fc5\u901f\u3002"),(0,r.kt)("h5",{id:"range\u5206\u533a"},"RANGE\u5206\u533a"),(0,r.kt)("p",null,"\u4e1a\u52a1\u4e0a\uff0c\u591a\u6570\u7528\u6237\u4f1a\u9009\u62e9\u91c7\u7528\u6309\u65f6\u95f4\u8fdb\u884cpartition, \u8ba9\u65f6\u95f4\u8fdb\u884cpartition\u6709\u4ee5\u4e0b\u597d\u5904\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u533a\u5206\u51b7\u70ed\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e0aDoris\u5206\u7ea7\u5b58\u50a8(SSD + SATA)\u7684\u529f\u80fd")),(0,r.kt)("h5",{id:"list\u5206\u533a"},"LIST\u5206\u533a"),(0,r.kt)("p",null,"\u4e1a\u52a1\u4e0a\uff0c\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u57ce\u5e02\u6216\u8005\u5176\u4ed6\u679a\u4e3e\u503c\u8fdb\u884cpartition\u3002"),(0,r.kt)("h4",{id:"hash\u5206\u6876bucket"},"HASH\u5206\u6876(bucket)"),(0,r.kt)("p",null,"\u6839\u636ehash\u503c\u5c06\u6570\u636e\u5212\u5206\u6210\u4e0d\u540c\u7684 bucket\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u91c7\u7528\u533a\u5206\u5ea6\u5927\u7684\u5217\u505a\u5206\u6876, \u907f\u514d\u51fa\u73b0\u6570\u636e\u503e\u659c"),(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u65b9\u4fbf\u6570\u636e\u6062\u590d, \u5efa\u8bae\u5355\u4e2a bucket \u7684 size \u4e0d\u8981\u592a\u5927, \u4fdd\u6301\u5728 10GB \u4ee5\u5185, \u6240\u4ee5\u5efa\u8868\u6216\u589e\u52a0 partition \u65f6\u8bf7\u5408\u7406\u8003\u8651 bucket \u6570\u76ee, \u5176\u4e2d\u4e0d\u540c partition \u53ef\u6307\u5b9a\u4e0d\u540c\u7684 buckets \u6570\u3002")),(0,r.kt)("h3",{id:"\u7a00\u758f\u7d22\u5f15\u548c-bloom-filter"},"\u7a00\u758f\u7d22\u5f15\u548c Bloom Filter"),(0,r.kt)("p",null,"Doris\u5bf9\u6570\u636e\u8fdb\u884c\u6709\u5e8f\u5b58\u50a8, \u5728\u6570\u636e\u6709\u5e8f\u7684\u57fa\u7840\u4e0a\u4e3a\u5176\u5efa\u7acb\u7a00\u758f\u7d22\u5f15,\u7d22\u5f15\u7c92\u5ea6\u4e3a block(1024\u884c)\u3002"),(0,r.kt)("p",null,"\u7a00\u758f\u7d22\u5f15\u9009\u53d6 schema \u4e2d\u56fa\u5b9a\u957f\u5ea6\u7684\u524d\u7f00\u4f5c\u4e3a\u7d22\u5f15\u5185\u5bb9, \u76ee\u524d Doris \u9009\u53d6 36 \u4e2a\u5b57\u8282\u7684\u524d\u7f00\u4f5c\u4e3a\u7d22\u5f15\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8868\u65f6\u5efa\u8bae\u5c06\u67e5\u8be2\u4e2d\u5e38\u89c1\u7684\u8fc7\u6ee4\u5b57\u6bb5\u653e\u5728 Schema \u7684\u524d\u9762, \u533a\u5206\u5ea6\u8d8a\u5927\uff0c\u9891\u6b21\u8d8a\u9ad8\u7684\u67e5\u8be2\u5b57\u6bb5\u8d8a\u5f80\u524d\u653e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u5176\u4e2d\u6709\u4e00\u4e2a\u7279\u6b8a\u7684\u5730\u65b9,\u5c31\u662f varchar \u7c7b\u578b\u7684\u5b57\u6bb5\u3002varchar \u7c7b\u578b\u5b57\u6bb5\u53ea\u80fd\u4f5c\u4e3a\u7a00\u758f\u7d22\u5f15\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u6bb5\u3002\u7d22\u5f15\u4f1a\u5728 varchar \u5904\u622a\u65ad, \u56e0\u6b64 varchar \u5982\u679c\u51fa\u73b0\u5728\u524d\u9762\uff0c\u53ef\u80fd\u7d22\u5f15\u7684\u957f\u5ea6\u53ef\u80fd\u4e0d\u8db3 36 \u4e2a\u5b57\u8282\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/data-table/data-model"},"\u6570\u636e\u6a21\u578b"),"\u3001",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/data-table/hit-the-rollup"},"ROLLUP \u53ca\u67e5\u8be2"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9664\u7a00\u758f\u7d22\u5f15\u4e4b\u5916, Doris\u8fd8\u63d0\u4f9bbloomfilter\u7d22\u5f15, bloomfilter\u7d22\u5f15\u5bf9\u533a\u5206\u5ea6\u6bd4\u8f83\u5927\u7684\u5217\u8fc7\u6ee4\u6548\u679c\u660e\u663e\u3002 \u5982\u679c\u8003\u8651\u5230varchar\u4e0d\u80fd\u653e\u5728\u7a00\u758f\u7d22\u5f15\u4e2d, \u53ef\u4ee5\u5efa\u7acbbloomfilter\u7d22\u5f15\u3002")),(0,r.kt)("h3",{id:"rollup"},"Rollup"),(0,r.kt)("p",null,"Rollup \u672c\u8d28\u4e0a\u53ef\u4ee5\u7406\u89e3\u4e3a\u539f\u59cb\u8868(Base Table)\u7684\u4e00\u4e2a\u7269\u5316\u7d22\u5f15\u3002\u5efa\u7acb Rollup \u65f6\u53ef\u53ea\u9009\u53d6 Base Table \u4e2d\u7684\u90e8\u5206\u5217\u4f5c\u4e3a Schema\u3002Schema \u4e2d\u7684\u5b57\u6bb5\u987a\u5e8f\u4e5f\u53ef\u4e0e Base Table \u4e0d\u540c\u3002"),(0,r.kt)("p",null,"\u4e0b\u5217\u60c5\u5f62\u53ef\u4ee5\u8003\u8651\u5efa\u7acb Rollup\uff1a"),(0,r.kt)("h4",{id:"base-table-\u4e2d\u6570\u636e\u805a\u5408\u5ea6\u4e0d\u9ad8"},"Base Table \u4e2d\u6570\u636e\u805a\u5408\u5ea6\u4e0d\u9ad8\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u822c\u662f\u56e0 Base Table \u6709\u533a\u5206\u5ea6\u6bd4\u8f83\u5927\u7684\u5b57\u6bb5\u800c\u5bfc\u81f4\u3002\u6b64\u65f6\u53ef\u4ee5\u8003\u8651\u9009\u53d6\u90e8\u5206\u5217\uff0c\u5efa\u7acb Rollup\u3002"),(0,r.kt)("p",null,"\u5982\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"site_visit")," \u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"site_visit(siteid, city, username, pv)\n")),(0,r.kt)("p",null,"siteid \u53ef\u80fd\u5bfc\u81f4\u6570\u636e\u805a\u5408\u5ea6\u4e0d\u9ad8\uff0c\u5982\u679c\u4e1a\u52a1\u65b9\u7ecf\u5e38\u6839\u636e\u57ce\u5e02\u7edf\u8ba1pv\u9700\u6c42\uff0c\u53ef\u4ee5\u5efa\u7acb\u4e00\u4e2a\u53ea\u6709 city, pv \u7684 Rollup\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE site_visit ADD ROLLUP rollup_city(city, pv);\n")),(0,r.kt)("h4",{id:"base-table-\u4e2d\u7684\u524d\u7f00\u7d22\u5f15\u65e0\u6cd5\u547d\u4e2d"},"Base Table \u4e2d\u7684\u524d\u7f00\u7d22\u5f15\u65e0\u6cd5\u547d\u4e2d"),(0,r.kt)("p",null,"\u8fd9\u4e00\u822c\u662f Base Table \u7684\u5efa\u8868\u65b9\u5f0f\u65e0\u6cd5\u8986\u76d6\u6240\u6709\u7684\u67e5\u8be2\u6a21\u5f0f\u3002\u6b64\u65f6\u53ef\u4ee5\u8003\u8651\u8c03\u6574\u5217\u987a\u5e8f\uff0c\u5efa\u7acb Rollup\u3002"),(0,r.kt)("p",null,"\u5982\u5bf9\u4e8e session_data \u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"session_data(visitorid, sessionid, visittime, city, province, ip, brower, url)\n")),(0,r.kt)("p",null,"\u5982\u679c\u9664\u4e86\u901a\u8fc7 visitorid \u5206\u6790\u8bbf\u95ee\u60c5\u51b5\u5916\uff0c\u8fd8\u6709\u901a\u8fc7 brower, province \u5206\u6790\u7684\u60c5\u5f62\uff0c\u53ef\u4ee5\u5355\u72ec\u5efa\u7acb Rollup\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE session_data ADD ROLLUP rollup_brower(brower,province,ip,url) DUPLICATE KEY(brower,province);\n")),(0,r.kt)("h2",{id:"schema-change"},"Schema Change"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Schema Change \u64cd\u4f5c\u6765\u4fee\u6539\u5df2\u5b58\u5728\u8868\u7684 Schema\u3002\u76ee\u524d Doris \u652f\u6301\u4ee5\u4e0b\u51e0\u79cd\u4fee\u6539:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0\u3001\u5220\u9664\u5217"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539\u5217\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u8c03\u6574\u5217\u987a\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0\u3001\u4fee\u6539 Bloom Filter"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0\u3001\u5220\u9664 bitmap index")),(0,r.kt)("p",null,"\u5177\u4f53\u8bf7\u53c2\u7167 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/advanced/alter-table/schema-change"},"Schema \u53d8\u66f4")))}d.isMDXComponent=!0}}]);