"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[95729],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>s});var l=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var k=l.createContext({}),u=function(t){var e=l.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=u(t.components);return l.createElement(k.Provider,{value:e},t.children)},m="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,k=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),m=u(a),d=n,s=m["".concat(k,".").concat(d)]||m[d]||N[d]||r;return a?l.createElement(s,i(i({ref:e},o),{},{components:a})):l.createElement(s,i({ref:e},o))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p[m]="string"==typeof t?t:n,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10915:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>i,default:()=>N,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=a(87462),n=(a(67294),a(3905));const r={title:"Apache Doris \u5728\u851a\u6765\u6c7d\u8f66\u7684\u5e94\u7528",summary:"\u851a\u6765\uff08\u7ebd\u7ea6\u8bc1\u5238\u4ea4\u6613\u6240\u4ee3\u7801\uff1aNIO\uff09\u662f\u8bbe\u8ba1\u9ad8\u7aef\u667a\u80fd\u7535\u52a8\u6c7d\u8f66\u5e02\u573a\u7684\u9886\u5148\u516c\u53f8. NIO \u6210\u7acb\u4e8e 2014 \u5e74 11 \u6708\uff0c\u8bbe\u8ba1\u3001\u5f00\u53d1\u3001\u8054\u5408\u5236\u9020\u548c\u9500\u552e\u9ad8\u7aef\u667a\u80fd\u7535\u52a8\u6c7d\u8f66\uff0c\u5e76\u4e0d\u65ad\u63a8\u52a8\u81ea\u52a8\u9a7e\u9a76\u3001\u6570\u5b57\u6280\u672f\u3001\u7535\u52a8\u52a8\u529b\u603b\u6210\u548c\u7535\u6c60\u9886\u57df\u7684\u521b\u65b0,Doris\u4f5c\u4e3a\u7edf\u4e00OLAP\u6570\u4ed3,Doris\u5728\u8fd0\u8425\u5e73\u53f0\u4e0a\u7684\u5b9e\u8df5",date:"2022-11-28",author:"\u5510\u6000\u4e1c",tags:["\u6700\u4f73\u5b9e\u8df5"]},i=void 0,p={permalink:"/zh-CN/blog/NIO",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/NIO.md",title:"Apache Doris \u5728\u851a\u6765\u6c7d\u8f66\u7684\u5e94\u7528",description:"\x3c!--",date:"2022-11-28T00:00:00.000Z",formattedDate:"2022\u5e7411\u670828\u65e5",tags:[{label:"\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/blog/tags/\u6700\u4f73\u5b9e\u8df5"}],hasTruncateMarker:!1,authors:[{name:"\u5510\u6000\u4e1c"}],frontMatter:{title:"Apache Doris \u5728\u851a\u6765\u6c7d\u8f66\u7684\u5e94\u7528",summary:"\u851a\u6765\uff08\u7ebd\u7ea6\u8bc1\u5238\u4ea4\u6613\u6240\u4ee3\u7801\uff1aNIO\uff09\u662f\u8bbe\u8ba1\u9ad8\u7aef\u667a\u80fd\u7535\u52a8\u6c7d\u8f66\u5e02\u573a\u7684\u9886\u5148\u516c\u53f8. NIO \u6210\u7acb\u4e8e 2014 \u5e74 11 \u6708\uff0c\u8bbe\u8ba1\u3001\u5f00\u53d1\u3001\u8054\u5408\u5236\u9020\u548c\u9500\u552e\u9ad8\u7aef\u667a\u80fd\u7535\u52a8\u6c7d\u8f66\uff0c\u5e76\u4e0d\u65ad\u63a8\u52a8\u81ea\u52a8\u9a7e\u9a76\u3001\u6570\u5b57\u6280\u672f\u3001\u7535\u52a8\u52a8\u529b\u603b\u6210\u548c\u7535\u6c60\u9886\u57df\u7684\u521b\u65b0,Doris\u4f5c\u4e3a\u7edf\u4e00OLAP\u6570\u4ed3,Doris\u5728\u8fd0\u8425\u5e73\u53f0\u4e0a\u7684\u5b9e\u8df5",date:"2022-11-28",author:"\u5510\u6000\u4e1c",tags:["\u6700\u4f73\u5b9e\u8df5"]},prevItem:{title:"Apache Doris \u52a9\u529b\u7f51\u6613\u4e25\u9009\u6253\u9020\u7cbe\u7ec6\u5316\u8fd0\u8425 DMP \u6807\u7b7e\u7cfb\u7edf",permalink:"/zh-CN/blog/Netease"},nextItem:{title:"Apache Doris 1.2 Star-Schema-Benchmark \u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",permalink:"/zh-CN/blog/ssb"}},k={authorsImageUrls:[void 0]},u=[{value:"\u851a\u6765",id:"\u851a\u6765",level:2},{value:"OLAP\u5728\u851a\u6765\u7684\u53d1\u5c55",id:"olap\u5728\u851a\u6765\u7684\u53d1\u5c55",level:2},{value:"1. 2017\u5e74\u5f15\u5165Apache Druid",id:"1-2017\u5e74\u5f15\u5165apache-druid",level:3},{value:"2. 2019\u5e74\u5f15\u5165TiDB",id:"2-2019\u5e74\u5f15\u5165tidb",level:3},{value:"3. 2021\u5e74\u5f15\u5165Doris",id:"3-2021\u5e74\u5f15\u5165doris",level:3},{value:"Doris\u4f5c\u4e3a\u7edf\u4e00OLAP\u6570\u4ed3",id:"doris\u4f5c\u4e3a\u7edf\u4e00olap\u6570\u4ed3",level:2},{value:"1. \u6570\u636e\u6e90",id:"1-\u6570\u636e\u6e90",level:3},{value:"2. \u6570\u636e\u63a5\u5165",id:"2-\u6570\u636e\u63a5\u5165",level:3},{value:"3. \u6570\u636e\u8ba1\u7b97",id:"3-\u6570\u636e\u8ba1\u7b97",level:3},{value:"4. \u6570\u636e\u4ed3\u5e93",id:"4-\u6570\u636e\u4ed3\u5e93",level:3},{value:"5. \u6570\u636e\u670d\u52a1",id:"5-\u6570\u636e\u670d\u52a1",level:3},{value:"6. \u6570\u636e\u5e94\u7528",id:"6-\u6570\u636e\u5e94\u7528",level:3},{value:"Doris\u5728\u8fd0\u8425\u5e73\u53f0\u4e0a\u7684\u5b9e\u8df5",id:"doris\u5728\u8fd0\u8425\u5e73\u53f0\u4e0a\u7684\u5b9e\u8df5",level:2},{value:"1. CDP Architecture",id:"1-cdp-architecture",level:3},{value:"2. CDP\u5b58\u50a8\u9009\u578b\u7684\u8003\u91cf\u70b9",id:"2-cdp\u5b58\u50a8\u9009\u578b\u7684\u8003\u91cf\u70b9",level:3},{value:"\u7ecf\u9a8c\u548c\u603b\u7ed3",id:"\u7ecf\u9a8c\u548c\u603b\u7ed3",level:2}],o={toc:u},m="wrapper";function N(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,l.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"apache-doris-\u5728\u851a\u6765\u6c7d\u8f66\u7684\u5e94\u7528"},"Apache Doris \u5728\u851a\u6765\u6c7d\u8f66\u7684\u5e94\u7528"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NIO",src:a(70579).Z,width:"900",height:"383"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5bfc\u8bfb\uff1a\u672c\u6b21\u5206\u4eab\u7684\u9898\u76ee\u662fApache Doris\u5728\u851a\u6765\u6c7d\u8f66\u7684\u5e94\u7528\uff0c\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u51e0\u5927\u90e8\u5206\uff1a"),(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"\u851a\u6765"),(0,n.kt)("li",{parentName:"ol"},"OLAP\u5728\u851a\u6765\u7684\u53d1\u5c55"),(0,n.kt)("li",{parentName:"ol"},"Doris\u4f5c\u4e3a\u7edf\u4e00OLAP\u6570\u4ed3"),(0,n.kt)("li",{parentName:"ol"},"Doris\u5728\u8fd0\u8425\u5e73\u53f0\u4e0a\u7684\u5b9e\u8df5"),(0,n.kt)("li",{parentName:"ol"},"\u7ecf\u9a8c\u603b\u7ed3"))),(0,n.kt)("p",null,"\u4f5c\u8005\uff1a\u5510\u6000\u4e1c\uff0c\u851a\u6765\u6c7d\u8f66 \u6570\u636e\u56e2\u961f\u8d1f\u8d23\u4eba"),(0,n.kt)("h2",{id:"\u851a\u6765"},"\u851a\u6765"),(0,n.kt)("p",null,"\u851a\u6765\uff08\u7ebd\u7ea6\u8bc1\u5238\u4ea4\u6613\u6240\u4ee3\u7801\uff1aNIO\uff09\u662f\u8bbe\u8ba1\u9ad8\u7aef\u667a\u80fd\u7535\u52a8\u6c7d\u8f66\u5e02\u573a\u7684\u9886\u5148\u516c\u53f8\u3002 NIO \u6210\u7acb\u4e8e 2014 \u5e74 11 \u6708\uff0c\u8bbe\u8ba1\u3001\u5f00\u53d1\u3001\u8054\u5408\u5236\u9020\u548c\u9500\u552e\u9ad8\u7aef\u667a\u80fd\u7535\u52a8\u6c7d\u8f66\uff0c\u5e76\u4e0d\u65ad\u63a8\u52a8\u81ea\u52a8\u9a7e\u9a76\u3001\u6570\u5b57\u6280\u672f\u3001\u7535\u52a8\u52a8\u529b\u603b\u6210\u548c\u7535\u6c60\u9886\u57df\u7684\u521b\u65b0\u3002"),(0,n.kt)("h2",{id:"olap\u5728\u851a\u6765\u7684\u53d1\u5c55"},"OLAP\u5728\u851a\u6765\u7684\u53d1\u5c55"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u6765\u4e00\u8d77\u56de\u987eOLAP\u5728\u851a\u6765\u6c7d\u8f66\u7684\u53d1\u5c55\u3002"),(0,n.kt)("h3",{id:"1-2017\u5e74\u5f15\u5165apache-druid"},"1. 2017\u5e74\u5f15\u5165Apache Druid"),(0,n.kt)("p",null,"\u5728\u5f53\u65f6\u53ef\u9009\u62e9\u7684OLAP\u5b58\u50a8\u548c\u67e5\u8be2\u5f15\u64ce\u5e76\u4e0d\u591a\uff0c\u6bd4\u8f83\u5e38\u89c1\u7684\u6709Apache Druid\u3001Apache Kylin\u3002\u6211\u4eec\u4f18\u5148\u5f15\u5165Druid\u7684\u539f\u56e0\u662f\u4ee5\u524d\u6709\u4f7f\u7528\u7ecf\u9a8c\uff0c\u800cKylin\u9884\u8ba1\u7b97\u867d\u7136\u5177\u6709\u6781\u9ad8\u7684\u67e5\u8be2\u6548\u7387\u4f18\u52bf\uff0c\u4f46\u662f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Kylin\u5e95\u5c42\u6700\u5408\u9002\u548c\u6700\u4f18\u7684\u5b58\u50a8\u662fHBase\uff0c\u4e4b\u524d\u516c\u53f8\u5e76\u672a\u5f15\u5165\uff0c\u4f1a\u989d\u5916\u589e\u52a0\u8fd0\u7ef4\u7684\u5de5\u4f5c\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Kylin\u5bf9\u5404\u79cd\u7ef4\u5ea6\u548c\u6307\u6807\u8fdb\u884c\u9884\u8ba1\u7b97\uff0c\u5982\u679c\u7ef4\u5ea6\u548c\u7ef4\u5ea6\u53d6\u503c\u975e\u5e38\u591a\uff0c\u4f1a\u6709\u7ef4\u5ea6\u7206\u70b8\u7684\u95ee\u9898\uff0c\u5bf9\u5b58\u50a8\u9020\u6210\u975e\u5e38\u5927\u7684\u538b\u529b\u3002"))),(0,n.kt)("p",null,"Druid\u7684\u4f18\u52bf\u5f88\u660e\u663e\uff0c\u652f\u6301\u5b9e\u65f6\u548c\u79bb\u7ebf\u6570\u636e\u63a5\u5165\uff0c\u5217\u5f0f\u5b58\u50a8\uff0c\u9ad8\u5e76\u53d1\uff0c\u67e5\u8be2\u6548\u7387\u975e\u5e38\u9ad8\u3002\u5176\u7f3a\u70b9\u4e5f\u6bd4\u8f83\u660e\u663e\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u672a\u4f7f\u7528\u6807\u51c6\u534f\u8bae\u4f8b\u5982JDBC\uff0c\u4f7f\u7528\u95e8\u69db\u9ad8"),(0,n.kt)("li",{parentName:"ul"},"Join\u7684\u652f\u6301\u8f83\u5f31"),(0,n.kt)("li",{parentName:"ul"},"\u7cbe\u786e\u53bb\u91cd\u7684\u6548\u7387\u4f4e\uff0c\u6027\u80fd\u4f1a\u968f\u4e4b\u4e0b\u964d\u3002\u6574\u4f53\u6027\u80fd\u8981\u5206\u573a\u666f\u53bb\u8003\u8651\uff0c\u8fd9\u4e5f\u662f\u6211\u4eec\u540e\u671f\u53bb\u9009\u578b\u5176\u4ed6OLAP\u7684\u539f\u56e0"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4\u6210\u672c\u9ad8\uff0c\u4e0d\u540c\u7684\u7ec4\u4ef6\u6709\u4e0d\u540c\u7684\u5b89\u88c5\u65b9\u5f0f\u548c\u4e0d\u540c\u7684\u4f9d\u8d56\uff1b\u6570\u636e\u5bfc\u5165\u8fd8\u8981\u8003\u8651\u548cHadoop\u96c6\u6210\u4ee5\u53caJAR\u5305\u7684\u4f9d\u8d56")),(0,n.kt)("h3",{id:"2-2019\u5e74\u5f15\u5165tidb"},"2. 2019\u5e74\u5f15\u5165TiDB"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TiDB\u662f\u4e00\u4e2aOLTP+OLAP\u7684\u6210\u719f\u5f15\u64ce\uff0c\u540c\u6837\u662f\u4f18\u70b9\u3001\u7f3a\u70b9\u5206\u660e\uff1a")),(0,n.kt)("p",null,"\u4f18\u52bf\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OLTP\u6570\u636e\u5e93\uff0c\u66f4\u65b0\u53cb\u597d\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u660e\u7ec6\u548c\u805a\u5408\uff0c\u6709\u6307\u6807\u8ba1\u7b97\u548c\u6570\u636e\u770b\u677f\u5c55\u793a\uff0c\u8fd8\u652f\u6301\u660e\u7ec6\u6570\u636e\u67e5\u8be2"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u6807\u51c6SQL\uff0c\u4f7f\u7528\u6210\u672c\u4f4e"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4\u6210\u672c\u4f4e")),(0,n.kt)("p",null,"\u52a3\u52bf\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b83\u4e0d\u662f\u4e00\u4e2a\u72ec\u7acb\u7684OLAP\u3002TiFlash\u4f9d\u8d56\u4e8eOLTP\uff0c\u4f1a\u589e\u52a0\u5b58\u50a8\u3002\u5176OLAP\u80fd\u529b\u7a0d\u663e\u4e0d\u8db3"),(0,n.kt)("li",{parentName:"ul"},"\u6574\u4f53\u6027\u80fd\u8981\u5206\u573a\u666f\u53bb\u8861\u91cf")),(0,n.kt)("h3",{id:"3-2021\u5e74\u5f15\u5165doris"},"3. 2021\u5e74\u5f15\u5165Doris"),(0,n.kt)("p",null,"\u81ea2021\u5e74\u8d77\uff0c\u6211\u4eec\u6b63\u5f0f\u5f15\u5165\u4e86Apache Doris\u3002\u5728\u7cfb\u7edf\u9009\u578b\u8fc7\u7a0b\u4e2d\uff0c\u4ea7\u54c1\u7684\u6027\u80fd\u3001SQL\u8bed\u6cd5\u3001\u7cfb\u7edf\u517c\u5bb9\u6027\u3001\u5b66\u4e60\u4ee5\u53ca\u8fd0\u7ef4\u6210\u672c\u7b49\u591a\u65b9\u9762\u56e0\u7d20\u662f\u6211\u4eec\u6700\u4e3a\u5173\u5fc3\u7684\u90e8\u5206\u3002\u7ecf\u8fc7\u6df1\u5165\u8c03\u7814\u3001\u5c42\u5c42\u5bf9\u6bd4\u4ee5\u4e0b\u51e0\u4e2a\u7cfb\u7edf\u540e\uff0c\u6211\u4eec\u5f97\u51fa\u4e86\u5982\u4e0b\u7ed3\u8bba\uff1a"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6211\u4eec\u91cd\u70b9\u5173\u6ce8\u7684Doris\uff0c\u5176\u4f18\u70b9\u5b8c\u5168\u6ee1\u8db3\u6211\u4eec\u7684\u8bc9\u6c42\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u9ad8\u5e76\u53d1\u67e5\u8be2\uff08\u6211\u4eec\u6700\u5173\u5fc3\u7684\u4e00\u70b9\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u540c\u65f6\u652f\u6301\u5b9e\u65f6\u548c\u79bb\u7ebf\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u660e\u7ec6\u548c\u805a\u5408"),(0,n.kt)("li",{parentName:"ul"},"Uniq\u6a21\u578b\u652f\u6301\u66f4\u65b0"),(0,n.kt)("li",{parentName:"ul"},"\u7269\u5316\u89c6\u56fe\u7684\u80fd\u529b\u80fd\u6781\u5927\u7684\u52a0\u901f\u67e5\u8be2\u6548\u7387"),(0,n.kt)("li",{parentName:"ul"},"\u517c\u5bb9MySQL\u534f\u8bae\uff0c\u6240\u4ee5\u5f00\u53d1\u548c\u4f7f\u7528\u6210\u672c\u6bd4\u8f83\u4f4e"),(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd\u5b8c\u5168\u6ee1\u8db3\u6211\u4eec\u7684\u8981\u6c42"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4\u6210\u672c\u6bd4\u8f83\u4f4e")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Clickhouse\uff0c\u6211\u4eec\u4e4b\u524d\u4e5f\u8c03\u7814\u8fc7\uff0c\u4e5f\u5c1d\u8bd5\u60f3\u53bb\u4f7f\u7528\u5b83\u3002\u5176\u5355\u673a\u6027\u80fd\u6781\u5f3a\uff0c\u4f46\u662f\u7f3a\u70b9\u660e\u663e:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6211\u4eec\u660e\u786e\u9700\u8981\u7684\u573a\u666f\u4e0b\uff0c\u5b83\u7684\u591a\u8868join\u652f\u6301\u7684\u7a0d\u5fae\u5dee\u4e00\u4e9b"),(0,n.kt)("li",{parentName:"ul"},"\u5e76\u53d1\u5ea6\u6bd4\u8f83\u4f4e"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4\u6210\u672c\u6781\u9ad8")),(0,n.kt)("p",null,"\u51ed\u501f\u591a\u79cd\u6027\u80fd\u4f18\u52bf\uff0cApache Doris\u6bd4\u8f83\u7406\u60f3\u5730\u66ff\u4ee3\u4e86Druid\u548cTiDB\u3002\u800cClickhouse\u5728\u6211\u4eec\u7684\u4e1a\u52a1\u4e0a\u5e76\u4e0d\u80fd\u5f88\u597d\u7684\u9002\u914d\uff0c\u8ba9\u6211\u4eec\u6700\u7ec8\u8d70\u5411\u4e86Apache Doris\u3002"),(0,n.kt)("h2",{id:"doris\u4f5c\u4e3a\u7edf\u4e00olap\u6570\u4ed3"},"Doris\u4f5c\u4e3a\u7edf\u4e00OLAP\u6570\u4ed3"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NIO",src:a(4685).Z,width:"1018",height:"669"})),(0,n.kt)("p",null,"\u8fd9\u5f20\u56fe\u57fa\u672c\u4e0a\u5c31\u662f\u4ece\u6570\u636e\u6e90\u5230\u6570\u636e\u63a5\u5165\u3001\u6570\u636e\u8ba1\u7b97\u3001\u6570\u636e\u4ed3\u5e93\u3001\u6570\u636e\u670d\u52a1\u4ee5\u53ca\u5e94\u7528\u3002"),(0,n.kt)("h3",{id:"1-\u6570\u636e\u6e90"},"1. \u6570\u636e\u6e90"),(0,n.kt)("p",null,"\u851a\u6765\u7684\u573a\u666f\u4e0b\uff0c\u6570\u636e\u6e90\u4e0d\u4ec5\u4ec5\u6307\u4e1a\u52a1\u7cfb\u7edf\u7684\u6570\u636e\uff0c\u8fd8\u6709\u57cb\u70b9\u6570\u636e\u3001\u8bbe\u5907\u6570\u636e\u3001\u8f66\u8f86\u6570\u636e\u7b49\u7b49\u3002\u6570\u636e\u4f1a\u901a\u8fc7\u4e00\u79cd\u63a5\u5165\u65b9\u5f0f\u63a5\u5165\u5230\u5927\u6570\u636e\u5e73\u53f0\u3002"),(0,n.kt)("h3",{id:"2-\u6570\u636e\u63a5\u5165"},"2. \u6570\u636e\u63a5\u5165"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e9b\u4e1a\u52a1\u7cfb\u7edf\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u5f00\u542fCDC\u6355\u6349\u53d8\u5316\u7684\u6570\u636e\uff0c\u7136\u540e\u8f6c\u6362\u6210\u4e00\u4e2a\u6570\u636e\u6d41\u5b58\u50a8\u5230Kafka\uff0c\u63a5\u7eed\u518d\u8fdb\u884c\u6d41\u5f0f\u7684\u8ba1\u7b97\u3002\u67d0\u4e9b\u53ea\u80fd\u901a\u8fc7\u6279\u91cf\u7684\u65b9\u5f0f\u7684\u6570\u636e\u4f1a\u76f4\u63a5\u8fdb\u5165\u5230\u6211\u4eec\u7684\u5206\u5e03\u5f0f\u5b58\u50a8\u3002"),(0,n.kt)("h3",{id:"3-\u6570\u636e\u8ba1\u7b97"},"3. \u6570\u636e\u8ba1\u7b97"),(0,n.kt)("p",null,"\u6211\u4eec\u6ca1\u6709\u91c7\u7528\u6d41\u6279\u4e00\u4f53\uff0c\u91c7\u7528\u7684\u662fLambda\u67b6\u6784\u3002\n\u6211\u4eec\u672c\u8eab\u7684\u4e1a\u52a1\u51b3\u5b9a\u4e86\u6211\u4eec\u7684Lambda\u67b6\u6784\u662f\u79bb\u7ebf\u548c\u5b9e\u65f6\u5206\u6210\u4e86\u4e24\u6761\u8def\u5f84\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u90e8\u5206\u6570\u636e\u662f\u6d41\u5f0f\u7684\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u90e8\u5206\u6570\u636e\u80fd\u591f\u5b58\u50a8\u5230\u6570\u636e\u6d41\u91cc\uff0c\u4e00\u4e9b\u5386\u53f2\u6570\u636e\u4e0d\u4f1a\u5b58\u50a8\u5230Kafka\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6709\u4e9b\u573a\u666f\u6570\u636e\u8981\u6c42\u9ad8\u7cbe\u51c6\u5ea6\u3002\u4e3a\u4e86\u4fdd\u8bc1\u6570\u636e\u7684\u51c6\u786e\u6027\uff0c\u4e00\u4e2a\u79bb\u7ebf\u7684pipeline\u5c06\u4f1a\u628a\u6574\u4e2a\u6570\u636e\u91cd\u65b0\u8ba1\u7b97\u548c\u5237\u65b0\u3002")),(0,n.kt)("h3",{id:"4-\u6570\u636e\u4ed3\u5e93"},"4. \u6570\u636e\u4ed3\u5e93"),(0,n.kt)("p",null,"\u6570\u636e\u8ba1\u7b97\u5230\u6570\u4ed3\uff0c\u8fd9\u4e24\u6761\u7ebf\u8def\u6211\u4eec\u6ca1\u6709\u91c7\u7528Flink\u6216Spark Doris Connector\u3002\u6211\u4eec\u7528Routine Load\u6765\u8fde\u63a5Apache Doris\u548cFlink\uff0c\u7528Broker Load\u8fde\u63a5Doris\u548cSpark\u3002 \u7531Spark\u6279\u91cf\u751f\u6210\u7684\u6570\u636e\uff0c\u4f1a\u5907\u4efd\u5230Hive\u4f9b\u5176\u4ed6\u573a\u666f\u4f7f\u7528\u3002\u8fd9\u6837\u6bcf\u8ba1\u7b97\u4e00\u6b21\uff0c\u5c31\u540c\u65f6\u4f9b\u591a\u4e2a\u573a\u666f\u53bb\u4f7f\u7528\uff0c\u5927\u5927\u63d0\u5347\u4e86\u6548\u7387\u3002Flink\u7684\u60c5\u51b5\u4e5f\u8bf8\u5982\u6b64\u7c7b\u3002"),(0,n.kt)("h3",{id:"5-\u6570\u636e\u670d\u52a1"},"5. \u6570\u636e\u670d\u52a1"),(0,n.kt)("p",null,"Doris\u540e\u9762\u662fOne Service\u3002\u901a\u8fc7\u6ce8\u518c\u6570\u636e\u6e90\u6216\u7075\u6d3b\u914d\u7f6e\u7684\u65b9\u5f0f\uff0c\u81ea\u52a8\u751f\u6210API\uff0c\u5bf9API\u8fdb\u884c\u6d41\u91cf\u7684\u63a7\u5236\u548c\u6743\u9650\u7684\u63a7\u5236\uff0c\u7075\u6d3b\u6027\u5927\u5927\u63d0\u9ad8\u3002\u5e76\u501f\u52a9\u4e8ek8s serverless\u65b9\u6848\uff0c\u6574\u4e2a\u670d\u52a1\u975e\u5e38\u7075\u6d3b\u548c\u4e30\u5bcc\u3002"),(0,n.kt)("h3",{id:"6-\u6570\u636e\u5e94\u7528"},"6. \u6570\u636e\u5e94\u7528"),(0,n.kt)("p",null,"\u5e94\u7528\u5c42\u4e2d\u6211\u4eec\u4e3b\u8981\u662f\u90e8\u7f72\u4e00\u4e9b\u62a5\u8868\u5e94\u7528\u548c\u5176\u4ed6\u7684\u4e00\u4e9b\u670d\u52a1\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u4e3b\u8981\u6709\u4e24\u7c7b\u4f7f\u7528\u573a\u666f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9762\u5411\u7528\u6237\uff0c\u7c7b\u4f3c\u4e8e\u4e92\u8054\u7f51\uff0c\u6211\u4eec\u6709\u5f88\u591a\u7528\u6237\u7684\u573a\u666f\uff0c\u5305\u62ec\u770b\u677f\u548c\u6307\u6807"),(0,n.kt)("li",{parentName:"ul"},"\u9762\u5411\u8f66\uff0c\u8f66\u7684\u6570\u636e\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u8fdb\u5165\u5230Doris\uff0c\u901a\u8fc7\u4e00\u5b9a\u7684\u805a\u5408\u4e4b\u540e\uff0cDoris\u6570\u636e\u4f53\u91cf\u5728\u51e0\u5341\u4ebf\u7ea7\u522b\u3002\u4f46\u603b\u4f53\u6027\u80fd\u4ecd\u7136\u53ef\u4ee5\u6ee1\u8db3\u6211\u4eec\u7684\u8981\u6c42\u3002")),(0,n.kt)("h2",{id:"doris\u5728\u8fd0\u8425\u5e73\u53f0\u4e0a\u7684\u5b9e\u8df5"},"Doris\u5728\u8fd0\u8425\u5e73\u53f0\u4e0a\u7684\u5b9e\u8df5"),(0,n.kt)("h3",{id:"1-cdp-architecture"},"1. CDP Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NIO",src:a(91997).Z,width:"1471",height:"422"})),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u6765\u4ecb\u7ecdDoris\u5728\u8fd0\u8425\u5e73\u53f0\u4e0a\u7684\u5b9e\u8df5\u3002\u8fd9\u662f\u6211\u4eec\u7684\u771f\u5b9e\u4f7f\u7528\u573a\u666f\u3002\u5982\u4eca\u4e92\u8054\u7f51\u516c\u53f8\u666e\u904d\u4f1a\u505a\u81ea\u5df1\u7684CDP\uff0c\u5b83\u4e00\u822c\u5305\u62ec\u51e0\u4e2a\u6a21\u5757\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6807\u7b7e\uff0c\u662f\u6700\u57fa\u7840\u7684\u90e8\u5206\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5708\u4eba\uff0c\u57fa\u4e8e\u6807\u7b7e\uff0c\u6309\u7167\u4e00\u5b9a\u903b\u8f91\u5c06\u4eba\u5708\u9009\u51fa\u6765\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6d1e\u5bdf\uff0c\u9488\u5bf9\u5708\u5b9a\u7684\u4eba\u7fa4\uff0c\u4e86\u89e3\u4eba\u7fa4\u5206\u5e03\u3001\u7279\u70b9\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u89e6\u8fbe\uff0c\u5229\u7528\u4f8b\u5982\u77ed\u4fe1\u3001\u7535\u8bdd\u3001\u58f0\u97f3\u3001APP\u901a\u77e5\u3001IM\u7b49\u65b9\u5f0f\u89e6\u8fbe\u5230\u7528\u6237\uff0c\u5e76\u914d\u5408\u6d41\u91cf\u63a7\u5236\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6548\u679c\u5206\u6790\uff0c\u63d0\u5347\u8fd0\u8425\u5e73\u53f0\u7684\u5b8c\u6574\u6027\uff0c\u6709\u52a8\u4f5c\u3001\u6709\u6548\u679c\u3001\u6709\u53cd\u9988\u3002")),(0,n.kt)("p",null,"Doris\u5728\u8fd9\u91cc\u9762\u8d77\u5230\u4e86\u6700\u91cd\u8981\u7684\u4f5c\u7528\uff0c\u5305\u62ec\uff1a\u6807\u7b7e\u5b58\u50a8\u3001\u4eba\u7fa4\u5b58\u50a8\u3001\u6548\u679c\u5206\u6790\u3002\n\u6807\u7b7e\u5206\u4e3a\u57fa\u7840\u6807\u7b7e\u548c\u7528\u6237\u884c\u4e3a\u7684\u57fa\u7840\u6570\u636e\uff0c\u5728\u6b64\u57fa\u7840\u4e4b\u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u7075\u6d3b\u81ea\u5b9a\u4e49\u5176\u4ed6\u6807\u7b7e\u3002\u4ece\u5b9e\u6548\u6027\u6765\u770b\uff0c\u6807\u7b7e\u8fd8\u5206\u4e3a\u5b9e\u65f6\u7684\u6807\u7b7e\u548c\u79bb\u7ebf\u7684\u6807\u7b7e\u3002"),(0,n.kt)("h3",{id:"2-cdp\u5b58\u50a8\u9009\u578b\u7684\u8003\u91cf\u70b9"},"2. CDP\u5b58\u50a8\u9009\u578b\u7684\u8003\u91cf\u70b9"),(0,n.kt)("p",null,"\u6211\u4eec\u4ece5\u4e2a\u7ef4\u5ea6\u53bb\u8003\u91cfCDP\u5b58\u50a8\u7684\u9009\u578b\u3002"),(0,n.kt)("p",null,"**(1) \u79bb\u7ebf\u548c\u5b9e\u65f6\u7edf\u4e00\n\u5982\u524d\u6240\u8ff0\u6807\u7b7e\u6709\u79bb\u7ebf\u6807\u7b7e\uff0c\u6709\u5b9e\u65f6\u6807\u7b7e\u3002\u76ee\u524d\u6211\u4eec\u662f\u51c6\u5b9e\u65f6\u7684\u573a\u666f\u3002\u5bf9\u4e8e\u6709\u4e9b\u6570\u636e\uff0c\u51c6\u5b9e\u65f6\u5df2\u8db3\u591f\u6ee1\u8db3\u6211\u4eec\u7684\u9700\u6c42\uff0c\u5927\u91cf\u7684\u6807\u7b7e\u8fd8\u662f\u79bb\u7ebf\u7684\u6807\u7b7e\uff0c\u91c7\u7528\u7684\u65b9\u5f0f\u5c31\u662fDoris\u7684Routine Load\u548cBroker Load\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u573a\u666f")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u9700\u6c42")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Apache Doris\u529f\u80fd\u70b9")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5b9e\u65f6\u6807\u7b7e"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5b9e\u65f6\u66f4\u65b0"),(0,n.kt)("td",{parentName:"tr",align:null},"Routine Load")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u6807\u7b7e"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9ad8\u6548\u5927\u6279\u91cf\u5bfc\u5165"),(0,n.kt)("td",{parentName:"tr",align:null},"Broker Load")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6d41\u6279\u7edf\u4e00"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b9e\u65f6\u5386\u9669\u6570\u636e\u5b58\u50a8\u7edf\u4e00"),(0,n.kt)("td",{parentName:"tr",align:null},"Routine Load \u548c Broker Load \u66f4\u65b0\u540c\u4e00\u5f20\u8868\u7684\u4e0d\u540c\u5217")))),(0,n.kt)("p",null,"\u53e6\u5916\u540c\u4e00\u5f20\u8868\u4e0a\uff0c\u4e0d\u540c\u5217\u66f4\u65b0\u7684\u9891\u7387\u4e5f\u662f\u4e0d\u4e00\u6837\u7684\u3002\u4f8b\u5982\u7528\u6237\u7684\u57fa\u7840\u6807\u7b7e\uff0c\u6211\u4eec\u5bf9\u7528\u6237\u7684\u8eab\u4efd\u9700\u8981\u5b9e\u65f6\u7684\u66f4\u65b0\uff0c\u56e0\u4e3a\u7528\u6237\u7684\u8eab\u4efd\u662f\u65f6\u523b\u53d8\u5316\u7684\u3002T+1\u7684\u66f4\u65b0\u4e0d\u80fd\u6ee1\u8db3\u6211\u4eec\u7684\u9700\u6c42\u3002\u6709\u4e9b\u6807\u7b7e\u79bb\u7ebf\uff0c\u4f8b\u5982\u7528\u6237\u7684\u6027\u522b\u3001\u5e74\u9f84\u7b49\u57fa\u7840\u6807\u7b7e\uff0cT+1\u66f4\u65b0\u8db3\u4ee5\u6ee1\u8db3\u6211\u4eec\u7684\u6807\u51c6\u3002\u57fa\u7840\u7528\u6237\u7684\u539f\u5b50\u6807\u7b7e\u653e\u5728\u4e00\u5f20\u8868\u4e2d\u5e26\u6765\u7684\u7ef4\u62a4\u6210\u672c\u5f88\u4f4e\u3002\u5f53\u540e\u671f\u81ea\u5b9a\u4e49\u6807\u7b7e\u65f6\uff0c\u8868\u7684\u6570\u91cf\u4f1a\u5927\u5927\u51cf\u5c11\uff0c\u8fd9\u6837\u5bf9\u4e8e\u6574\u4f53\u6027\u80fd\u7684\u63d0\u5347\u6709\u6781\u5927\u597d\u5904\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"(2) \u9ad8\u6548\u5708\u9009")),(0,n.kt)("p",null,"\u7528\u6237\u8fd0\u8425\u6709\u4e86\u6807\u7b7e\uff0c\u7b2c\u4e8c\u6b65\u5c31\u662f\u5708\u4eba\uff0c\u5708\u9009\u5c31\u662f\u6839\u636e\u6807\u7b7e\u7684\u4e0d\u540c\u7ec4\u5408\uff0c\u628a\u7b26\u5408\u6807\u7b7e\u6761\u4ef6\u7684\u6240\u6709\u4eba\u7b5b\u9009\u51fa\u6765\uff0c\u8fd9\u65f6\u4f1a\u6709\u4e0d\u540c\u6807\u7b7e\u6761\u4ef6\u7ec4\u5408\u7684\u67e5\u8be2\u3001\u8fd9\u4e2a\u67e5\u8be2\u5728Doris\u5f15\u5165\u5411\u91cf\u5316\u4e4b\u540e\u6709\u6bd4\u8f83\u660e\u663e\u7684\u63d0\u5347\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u573a\u666f")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u9700\u6c42")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Apache Doris\u529f\u80fd\u70b9")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u590d\u6742\u6761\u4ef6\u5708\u9009"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9ad8\u6548\u7684\u652f\u6301\u591a\u6761\u4ef6\u5708\u9009"),(0,n.kt)("td",{parentName:"tr",align:null},"SIMD\u7684\u4f18\u5316")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"(3) \u9ad8\u6548\u805a\u5408")),(0,n.kt)("p",null,"\u524d\u9762\u63d0\u5230\u7684\u7528\u6237\u6d1e\u5bdf\u6216\u7fa4\u4f53\u6d1e\u5bdf\u4ee5\u53ca\u6548\u679c\u5206\u6790\u7edf\u8ba1\uff0c\u9700\u8981\u5bf9\u6570\u636e\u505a\u7edf\u8ba1\u5206\u6790\uff0c\u5e76\u4e0d\u662f\u5355\u4e00\u7684\u6309\u7528\u6237ID\u83b7\u53d6\u6807\u7b7e\u7684\u8fd9\u79cd\u7b80\u5355\u573a\u666f\u3002\u5176\u8bfb\u53d6\u7684\u6570\u636e\u91cf\u548c\u67e5\u8be2\u6548\u7387\uff0c\u5bf9\u6211\u4eec\u8fd9\u4e2a\u6807\u7b7e\u7684\u5206\u5e03\u3001\u7fa4\u4f53\u7684\u5206\u5e03\u3001\u6548\u679c\u5206\u6790\u7684\u7edf\u8ba1\u90fd\u6709\u5f88\u5927\u7684\u5f71\u54cd\u3002\u5728\u8fd9\u91cc\uff0c\u4f53\u73b0\u5230\u7684Doris\u7684\u529f\u80fd\u7279\u70b9\u662f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u662f\u6570\u636e\u5206\u7247\uff0c\u6211\u4eec\u6309\u65f6\u95f4\u628a\u6570\u636e\u5206\u7247\uff0c\u5206\u6790\u7edf\u8ba1\u5c31\u4f1a\u6781\u5927\u7684\u51cf\u5c11\u6570\u636e\u91cf\uff0c\u53ef\u4ee5\u6781\u5927\u7684\u52a0\u901f\u67e5\u8be2\u548c\u5206\u6790\u7684\u6548\u7387\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u662f\u8282\u70b9\u805a\u5408\uff0c\u7136\u540e\u518d\u6536\u96c6\u505a\u7edf\u4e00\u7684\u805a\u5408\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u662f\u5411\u91cf\u5316\u52a0\u901f\uff0c\u5411\u91cf\u5316\u5f15\u64ce\u5bf9\u6027\u80fd\u63d0\u5347\u975e\u5e38\u663e\u8457\u3002")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u573a\u666f")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u9700\u6c42")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Apache Doris\u529f\u80fd\u70b9")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6807\u7b7e\u503c\u7684\u5206\u5e03"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5929\u90fd\u9700\u8981\u66f4\u65b0\u6240\u6709\u6807\u7b7e\uff0c\u9700\u8981\u5feb\u901f\u9ad8\u6548\u7edf\u8ba1"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5206\u7247\uff0c\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u548c\u8ba1\u7b97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4f53\u7684\u5206\u5e03"),(0,n.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b58\u7b97\u7edf\u4e00\uff0c\u6bcf\u4e2a\u8282\u70b9\u5148\u805a\u5408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6548\u679c\u5206\u6790\u7684\u7edf\u8ba1\u503c"),(0,n.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a"),(0,n.kt)("td",{parentName:"tr",align:null},"SIMD\u63d0\u901f")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"(4) \u591a\u8868\u5173\u8054")),(0,n.kt)("p",null,"\u6211\u4eec\u7684CDP\u53ef\u80fd\u548c\u4e1a\u5185\u5e38\u89c1\u7684CDP\u573a\u666f\u4e0d\u592a\u4e00\u6837\uff0c\u56e0\u4e3a\u6709\u4e9b\u573a\u666f\u7684CDP\u6807\u7b7e\u662f\u63d0\u524d\u9884\u4f30\u5b8c\u6210\u7684\uff0c\u4e0d\u5b58\u5728\u81ea\u5b9a\u4e49\u6807\u7b7e\u3002\u53ea\u505a\u539f\u5b50\u6807\u7b7e\uff0c\u6216\u8005\u8bf4\u7528\u6237\u57fa\u7840\u884c\u4e3a\u6570\u636e\u7684\u7edf\u8ba1\uff0c\u8fd9\u6837\u53ef\u4ee5\u628a\u7075\u6d3b\u6027\u7559\u7ed9\u4f7f\u7528CDP\u7684\u7528\u6237\uff0c\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u573a\u666f\u53bb\u81ea\u5b9a\u4e49\u6807\u7b7e\u3002\u5e95\u5c42\u7684\u6570\u636e\u662f\u5206\u6563\u5728\u4e0d\u540c\u7684\u6570\u636e\u5e93\u8868\u91cc\uff0c\u5982\u679c\u505a\u81ea\u5b9a\u4e49\u7684\u6807\u7b7e\u7684\u5efa\u8bbe\uff0c\u52bf\u5fc5\u9700\u8981\u505a\u8868\u7684\u5173\u8054\u3002\n\u6211\u4eec\u9009\u62e9Doris\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u539f\u56e0\uff0c\u5c31\u662f\u591a\u8868\u5173\u8054\u7684\u80fd\u529b\u3002\u901a\u8fc7\u6027\u80fd\u6d4b\u8bd5\uff0cDoris\u76ee\u524d\u80fd\u591f\u6ee1\u8db3\u6211\u4eec\u7684\u8981\u6c42\u3002\u800c\u4e14Doris\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u975e\u5e38\u5f3a\u5927\u7684\u80fd\u529b\u3002\u56e0\u4e3a\u6807\u7b7e\u662f\u52a8\u6001\u7684\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u573a\u666f")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u9700\u6c42")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Apache Doris\u529f\u80fd\u70b9")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4f53\u7684\u7279\u5f81\u5206\u5e03"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7edf\u8ba1\u7fa4\u4f53\u5728\u67d0\u4e2a\u7279\u5f81\u4e0b\u7684\u5206\u5e03"),(0,n.kt)("td",{parentName:"tr",align:null},"\u591a\u8868\u5173\u8054")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Single Tag"),(0,n.kt)("td",{parentName:"tr",align:null},"Display tags"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"(5) \u8054\u90a6\u67e5\u8be2")),(0,n.kt)("p",null,"\u7528\u6237\u89e6\u8fbe\u6210\u529f\u4e0e\u5426\u6211\u4eec\u4f1a\u8bb0\u5f55\u5230TiDB\u3002\u7528\u6237\u8fd0\u8425\u4e2d\u7684\u901a\u77e5\uff0c\u53ef\u80fd\u53ea\u5f71\u54cd\u7528\u6237\u4f53\u9a8c\uff0c\u5982\u679c\u6d89\u53ca\u5230\u94b1\u4f8b\u5982\u53d1\u653e\u79ef\u5206\u6216\u4f18\u60e0\u5238\uff0c\u4efb\u52a1\u6267\u884c\u5c31\u8981\u505a\u5230\u4e0d\u91cd\u4e0d\u6f0f\uff0c\u8fd9\u79cdOLTP\u573a\u666f\u7528TiDB\u6bd4\u8f83\u5408\u9002\u3002\n\u505a\u6548\u679c\u5206\u6790\uff0c\u9700\u8981\u4e86\u89e3\u8fd0\u8425\u8ba1\u5212\u6267\u884c\u5230\u4ec0\u4e48\u7a0b\u5ea6\uff0c\u662f\u5426\u8fbe\u6210\u76ee\u6807\uff0c\u5176\u5206\u5e03\u60c5\u51b5\u7b49\u7b49\u3002\u9700\u8981\u628a\u4efb\u52a1\u6267\u884c\u60c5\u51b5\u548c\u4eba\u7fa4\u5708\u9009\u76f8\u7ed3\u5408\u624d\u80fd\u8fdb\u884c\u5206\u6790\uff0c\u5c31\u4f1a\u7528\u5230Doris\u548cTiDB\u7684\u5173\u8054\uff0c\u5916\u8868\u5173\u8054\u8fdb\u884c\u67e5\u8be2\u3002\n\u6211\u4eec\u8bbe\u60f3\u6807\u7b7e\u4f53\u91cf\u6bd4\u8f83\u5c0f\uff0c\u4fdd\u5b58\u5230es\u53ef\u80fd\u6bd4\u8f83\u5408\u9002\uff0c\u7136\u800cES\u4e0d\u80fd\u6ee1\u8db3\u6211\u4eec\u7684\u9700\u6c42\uff0c\u540e\u9762\u4f1a\u89e3\u91ca\u5176\u539f\u56e0\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u573a\u666f")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u9700\u6c42")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Apache Doris\u529f\u80fd\u70b9")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6548\u679c\u5206\u6790\u5173\u8054\u4efb\u52a1\u6267\u884c\u660e\u7ec6"),(0,n.kt)("td",{parentName:"tr",align:null},"Doris\u6570\u636e\u5173\u8054TiDB\u6570\u636e"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5173\u8054\u5916\u8868\u8fdb\u884c\u67e5\u8be2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4eba\u7fa4\u6807\u7b7e\u5173\u8054\u884c\u4e3a\u805a\u5408\u6570\u636e"),(0,n.kt)("td",{parentName:"tr",align:null},"Doris\u6570\u636e\u5173\u8054Elasticsearch\u6570\u636e"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"\u7ecf\u9a8c\u548c\u603b\u7ed3"},"\u7ecf\u9a8c\u548c\u603b\u7ed3"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"bitmap"),". \u6211\u4eec\u7684\u4f53\u91cf\u65e0\u6cd5\u5145\u5206\u53d1\u6325\u5176\u6548\u7387\u3002\u5982\u679c\u4f53\u91cf\u8fbe\u5230\u4e00\u5b9a\u7a0b\u5ea6\uff0c\u7528bitmap\u4f1a\u6709\u5f88\u597d\u7684\u6027\u80fd\u63d0\u5347\u3002\u4f8b\u5982\u8ba1\u7b97UV\u573a\u666f\uff0cId\u5168\u96c6\u5927\u4e8e5000\u4e07\uff0c\u53ef\u4ee5\u8003\u8651bitmap\u805a\u5408\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ES\u5916\u8868\u3002\u5355\u8868\u67e5\u8be2\u4e0b\u6548\u7387\u6bd4\u8f83\u7406\u60f3\u3002")," ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5206\u6279\u66f4\u65b0\u5217"),". \u4e3a\u4e86\u51cf\u5c11\u8868\u7684\u6570\u91cf\u548c\u63d0\u5347join\u8868\u7684\u6027\u80fd\uff0c\u8bbe\u8ba1\u8868\u5c3d\u91cf\u7cbe\u7b80\u5c3d\u91cf\u805a\u5408\uff0c\u76f8\u540c\u7c7b\u578b\u7684\u4e8b\u5b9e\u90fd\u653e\u5728\u4e00\u8d77\u3002\u4f46\u76f8\u540c\u7c7b\u578b\u7684\u5b57\u6bb5\u53ef\u80fd\u66f4\u65b0\u9891\u7387\u4e0d\u540c\uff0c\u6709\u4e9b\u5b57\u6bb5\u9700\u8981\u5929\u7ea7\u66f4\u65b0\uff0c\u6709\u4e9b\u5b57\u6bb5\u53ef\u80fd\u9700\u8981\u5c0f\u65f6\u7ea7\u66f4\u65b0\uff0c\u5355\u72ec\u66f4\u65b0\u67d0\u4e00\u5217\u5c31\u662f\u4e00\u4e2a\u660e\u663e\u7684\u8bc9\u6c42\u3002Doris\u805a\u5408\u6a21\u578b\u5355\u72ec\u66f4\u65b0\u67d0\u4e9b\u5217\u7684\u89e3\u51b3\u65b9\u6848\u662f\u4f7f\u7528REPLACE_IF_NOT_NULL\u3002\u6ce8\u610f:\u7528null\u66ff\u6362\u539f\u6765\u7684\u975enull\u503c\u662f\u505a\u4e0d\u5230\u7684,\u53ef\u4ee5\u628a\u6240\u6709\u7684null\u66ff\u6362\u6210\u6709\u610f\u4e49\u7684\u9ed8\u8ba4\u503c\uff0c\u4f8b\u5982unknown\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5728\u7ebf\u670d\u52a1"),". Doris\u540c\u4e00\u4efd\u6570\u636e\u540c\u65f6\u670d\u52a1\u5728\u7ebf\u79bb\u7ebf\u573a\u666f\uff0c\u5bf9\u8d44\u6e90\u9694\u79bb\u7684\u8981\u6c42\u6bd4\u8f83\u9ad8\uff0c\u76ee\u524d\u8fd8\u5b58\u5728\u8fdb\u4e00\u6b65\u4f18\u5316\u7684\u7a7a\u95f4\u3002"))))}N.isMDXComponent=!0},70579:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/NIO_kv-7601d71a49c7ecd7fb42f03de600ae6c.png"},91997:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/cdp-3d65926e741a2837759b07514e914bbf.png"},4685:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/olap-96ad3bb86cebd92a200a0581f0418d3c.png"}}]);