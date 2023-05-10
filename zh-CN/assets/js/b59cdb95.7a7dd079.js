"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[34517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=i.createContext({}),u=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(m.Provider,{value:t},e.children)},s="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),c=l,k=s["".concat(m,".").concat(c)]||s[c]||N[c]||r;return n?i.createElement(k,a(a({ref:t},p),{},{components:n})):i.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[s]="string"==typeof e?e:l,a[1]=o;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>N,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=n(87462),l=(n(67294),n(3905));const r={title:"Runtime Filter",language:"zh-CN"},a=void 0,o={unversionedId:"query-acceleration/join-optimization/runtime-filter",id:"query-acceleration/join-optimization/runtime-filter",title:"Runtime Filter",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/join-optimization/runtime-filter.md",sourceDirName:"query-acceleration/join-optimization",slug:"/query-acceleration/join-optimization/runtime-filter",permalink:"/zh-CN/docs/dev/query-acceleration/join-optimization/runtime-filter",draft:!1,tags:[],version:"current",frontMatter:{title:"Runtime Filter",language:"zh-CN"},sidebar:"docs",previous:{title:"Colocation Join",permalink:"/zh-CN/docs/dev/query-acceleration/join-optimization/colocation-join"},next:{title:"Doris Join \u4f18\u5316\u539f\u7406",permalink:"/zh-CN/docs/dev/query-acceleration/join-optimization/doris-join-optimization"}},m={},u=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"Runtime Filter\u67e5\u8be2\u9009\u9879",id:"runtime-filter\u67e5\u8be2\u9009\u9879",level:3},{value:"1.runtime_filter_type",id:"1runtime_filter_type",level:4},{value:"2.runtime_filter_mode",id:"2runtime_filter_mode",level:4},{value:"3.runtime_filter_wait_time_ms",id:"3runtime_filter_wait_time_ms",level:4},{value:"4.runtime_filters_max_num",id:"4runtime_filters_max_num",level:4},{value:"5.Bloom Filter\u957f\u5ea6\u76f8\u5173\u53c2\u6570",id:"5bloom-filter\u957f\u5ea6\u76f8\u5173\u53c2\u6570",level:4},{value:"\u67e5\u770bquery\u751f\u6210\u7684Runtime Filter",id:"\u67e5\u770bquery\u751f\u6210\u7684runtime-filter",level:3},{value:"Runtime Filter\u7684\u89c4\u5212\u89c4\u5219",id:"runtime-filter\u7684\u89c4\u5212\u89c4\u5219",level:2}],p={toc:u},s="wrapper";function N(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"runtime-filter"},"Runtime Filter"),(0,l.kt)("p",null,"Runtime Filter \u662f\u5728 Doris 0.15 \u7248\u672c\u4e2d\u6b63\u5f0f\u52a0\u5165\u7684\u65b0\u529f\u80fd\u3002\u65e8\u5728\u4e3a\u67d0\u4e9b Join \u67e5\u8be2\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u751f\u6210\u8fc7\u6ee4\u6761\u4ef6\uff0c\u6765\u51cf\u5c11\u626b\u63cf\u7684\u6570\u636e\u91cf\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684I/O\u548c\u7f51\u7edc\u4f20\u8f93\uff0c\u4ece\u800c\u52a0\u901f\u67e5\u8be2\u3002"),(0,l.kt)("p",null,"\u5b83\u7684\u8bbe\u8ba1\u3001\u5b9e\u73b0\u548c\u6548\u679c\u53ef\u4ee5\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/issues/6116"},"ISSUE 6116"),"\u3002"),(0,l.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5de6\u8868\uff1aJoin\u67e5\u8be2\u65f6\uff0c\u5de6\u8fb9\u7684\u8868\u3002\u8fdb\u884cProbe\u64cd\u4f5c\u3002\u53ef\u88abJoin Reorder\u8c03\u6574\u987a\u5e8f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53f3\u8868\uff1aJoin\u67e5\u8be2\u65f6\uff0c\u53f3\u8fb9\u7684\u8868\u3002\u8fdb\u884cBuild\u64cd\u4f5c\u3002\u53ef\u88abJoin Reorder\u8c03\u6574\u987a\u5e8f\u3002"),(0,l.kt)("li",{parentName:"ul"},"Fragment\uff1aFE\u4f1a\u5c06\u5177\u4f53\u7684SQL\u8bed\u53e5\u7684\u6267\u884c\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684Fragment\u5e76\u4e0b\u53d1\u5230BE\u8fdb\u884c\u6267\u884c\u3002BE\u4e0a\u6267\u884c\u5bf9\u5e94Fragment\uff0c\u5e76\u5c06\u7ed3\u679c\u6c47\u805a\u8fd4\u56de\u7ed9FE\u3002"),(0,l.kt)("li",{parentName:"ul"},"Join on clause: ",(0,l.kt)("inlineCode",{parentName:"li"},"A join B on A.a=B.b"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"A.a=B.b"),"\uff0c\u5728\u67e5\u8be2\u89c4\u5212\u65f6\u57fa\u4e8e\u6b64\u751f\u6210join conjuncts\uff0c\u5305\u542bjoin Build\u548cProbe\u4f7f\u7528\u7684expr\uff0c\u5176\u4e2dBuild expr\u5728Runtime Filter\u4e2d\u79f0\u4e3asrc expr\uff0cProbe expr\u5728Runtime Filter\u4e2d\u79f0\u4e3atarget expr\u3002")),(0,l.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,l.kt)("p",null,"Runtime Filter\u5728\u67e5\u8be2\u89c4\u5212\u65f6\u751f\u6210\uff0c\u5728HashJoinNode\u4e2d\u6784\u5efa\uff0c\u5728ScanNode\u4e2d\u5e94\u7528\u3002"),(0,l.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5f53\u524d\u5b58\u5728T1\u8868\u4e0eT2\u8868\u7684Join\u67e5\u8be2\uff0c\u5b83\u7684Join\u65b9\u5f0f\u4e3aHashJoin\uff0cT1\u662f\u4e00\u5f20\u4e8b\u5b9e\u8868\uff0c\u6570\u636e\u884c\u6570\u4e3a100000\uff0cT2\u662f\u4e00\u5f20\u7ef4\u5ea6\u8868\uff0c\u6570\u636e\u884c\u6570\u4e3a2000\uff0cDoris join\u7684\u5b9e\u9645\u60c5\u51b5\u662f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"|          >      HashJoinNode     <\n|         |                         |\n|         | 100000                  | 2000\n|         |                         |\n|   OlapScanNode              OlapScanNode\n|         ^                         ^   \n|         | 100000                  | 2000\n|        T1                        T2\n|\n")),(0,l.kt)("p",null,"\u663e\u800c\u6613\u89c1\u5bf9T2\u626b\u63cf\u6570\u636e\u8981\u8fdc\u8fdc\u5feb\u4e8eT1\uff0c\u5982\u679c\u6211\u4eec\u4e3b\u52a8\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\u518d\u626b\u63cfT1\uff0c\u7b49T2\u5c06\u626b\u63cf\u7684\u6570\u636e\u8bb0\u5f55\u4ea4\u7ed9HashJoinNode\u540e\uff0cHashJoinNode\u6839\u636eT2\u7684\u6570\u636e\u8ba1\u7b97\u51fa\u4e00\u4e2a\u8fc7\u6ee4\u6761\u4ef6\uff0c\u6bd4\u5982T2\u6570\u636e\u7684\u6700\u5927\u548c\u6700\u5c0f\u503c\uff0c\u6216\u8005\u6784\u5efa\u4e00\u4e2aBloom Filter\uff0c\u63a5\u7740\u5c06\u8fd9\u4e2a\u8fc7\u6ee4\u6761\u4ef6\u53d1\u7ed9\u7b49\u5f85\u626b\u63cfT1\u7684ScanNode\uff0c\u540e\u8005\u5e94\u7528\u8fd9\u4e2a\u8fc7\u6ee4\u6761\u4ef6\uff0c\u5c06\u8fc7\u6ee4\u540e\u7684\u6570\u636e\u4ea4\u7ed9HashJoinNode\uff0c\u4ece\u800c\u51cf\u5c11probe hash table\u7684\u6b21\u6570\u548c\u7f51\u7edc\u5f00\u9500\uff0c\u8fd9\u4e2a\u8fc7\u6ee4\u6761\u4ef6\u5c31\u662fRuntime Filter\uff0c\u6548\u679c\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"|          >      HashJoinNode     <\n|         |                         |\n|         | 6000                    | 2000\n|         |                         |\n|   OlapScanNode              OlapScanNode\n|         ^                         ^   \n|         | 100000                  | 2000\n|        T1                        T2\n|\n")),(0,l.kt)("p",null,"\u5982\u679c\u80fd\u5c06\u8fc7\u6ee4\u6761\u4ef6\uff08Runtime Filter\uff09\u4e0b\u63a8\u5230\u5b58\u50a8\u5f15\u64ce\uff0c\u5219\u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u4ee5\u5229\u7528\u7d22\u5f15\u6765\u76f4\u63a5\u51cf\u5c11\u626b\u63cf\u7684\u6570\u636e\u91cf\uff0c\u4ece\u800c\u5927\u5927\u51cf\u5c11\u626b\u63cf\u8017\u65f6\uff0c\u6548\u679c\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"|          >      HashJoinNode     <\n|         |                         |\n|         | 6000                    | 2000\n|         |                         |\n|   OlapScanNode              OlapScanNode\n|         ^                         ^   \n|         | 6000                    | 2000\n|        T1                        T2\n|\n")),(0,l.kt)("p",null,"\u53ef\u89c1\uff0c\u548c\u8c13\u8bcd\u4e0b\u63a8\u3001\u5206\u533a\u88c1\u526a\u4e0d\u540c\uff0cRuntime Filter\u662f\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u751f\u6210\u7684\u8fc7\u6ee4\u6761\u4ef6\uff0c\u5373\u5728\u67e5\u8be2\u8fd0\u884c\u65f6\u89e3\u6790join on clause\u786e\u5b9a\u8fc7\u6ee4\u8868\u8fbe\u5f0f\uff0c\u5e76\u5c06\u8868\u8fbe\u5f0f\u5e7f\u64ad\u7ed9\u6b63\u5728\u8bfb\u53d6\u5de6\u8868\u7684ScanNode\uff0c\u4ece\u800c\u51cf\u5c11\u626b\u63cf\u7684\u6570\u636e\u91cf\uff0c\u8fdb\u800c\u51cf\u5c11probe hash table\u7684\u6b21\u6570\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684I/O\u548c\u7f51\u7edc\u4f20\u8f93\u3002"),(0,l.kt)("p",null,"Runtime Filter\u4e3b\u8981\u7528\u4e8e\u5927\u8868join\u5c0f\u8868\u7684\u4f18\u5316\uff0c\u5982\u679c\u5de6\u8868\u7684\u6570\u636e\u91cf\u592a\u5c0f\uff0c\u6216\u8005\u53f3\u8868\u7684\u6570\u636e\u91cf\u592a\u5927\uff0c\u5219Runtime Filter\u53ef\u80fd\u4e0d\u4f1a\u53d6\u5f97\u9884\u671f\u6548\u679c\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,l.kt)("h3",{id:"runtime-filter\u67e5\u8be2\u9009\u9879"},"Runtime Filter\u67e5\u8be2\u9009\u9879"),(0,l.kt)("p",null,"\u4e0eRuntime Filter\u76f8\u5173\u7684\u67e5\u8be2\u9009\u9879\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u90e8\u5206:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u67e5\u8be2\u9009\u9879\u662f\u8c03\u6574\u4f7f\u7528\u7684Runtime Filter\u7c7b\u578b\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ea\u9700\u8981\u8c03\u6574\u8fd9\u4e00\u4e2a\u9009\u9879\uff0c\u5176\u4ed6\u9009\u9879\u4fdd\u6301\u9ed8\u8ba4\u5373\u53ef\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"runtime_filter_type"),": \u5305\u62ecBloom Filter\u3001MinMax Filter\u3001IN predicate\u3001IN Or Bloom Filter\u3001Bitmap Filter\uff0c\u9ed8\u8ba4\u4f1a\u4f7f\u7528IN Or Bloom Filter\uff0c\u90e8\u5206\u60c5\u51b5\u4e0b\u540c\u65f6\u4f7f\u7528Bloom Filter\u3001MinMax Filter\u3001IN predicate\u65f6\u6027\u80fd\u66f4\u9ad8\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u67e5\u8be2\u9009\u9879\u901a\u5e38\u4ec5\u5728\u67d0\u4e9b\u7279\u5b9a\u573a\u666f\u4e0b\uff0c\u624d\u9700\u8fdb\u4e00\u6b65\u8c03\u6574\u4ee5\u8fbe\u5230\u6700\u4f18\u6548\u679c\u3002\u901a\u5e38\u53ea\u5728\u6027\u80fd\u6d4b\u8bd5\u540e\uff0c\u9488\u5bf9\u8d44\u6e90\u5bc6\u96c6\u578b\u3001\u8fd0\u884c\u8017\u65f6\u8db3\u591f\u957f\u4e14\u9891\u7387\u8db3\u591f\u9ad8\u7684\u67e5\u8be2\u8fdb\u884c\u4f18\u5316\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"runtime_filter_mode"),": \u7528\u4e8e\u8c03\u6574Runtime Filter\u7684\u4e0b\u63a8\u7b56\u7565\uff0c\u5305\u62ecOFF\u3001LOCAL\u3001GLOBAL\u4e09\u79cd\u7b56\u7565\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u4e3aGLOBAL\u7b56\u7565"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"runtime_filter_wait_time_ms"),": \u5de6\u8868\u7684ScanNode\u7b49\u5f85\u6bcf\u4e2aRuntime Filter\u7684\u65f6\u95f4\uff0c\u9ed8\u8ba41000ms"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"runtime_filters_max_num"),": \u6bcf\u4e2a\u67e5\u8be2\u53ef\u5e94\u7528\u7684Runtime Filter\u4e2dBloom Filter\u7684\u6700\u5927\u6570\u91cf\uff0c\u9ed8\u8ba410"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"runtime_bloom_filter_min_size"),": Runtime Filter\u4e2dBloom Filter\u7684\u6700\u5c0f\u957f\u5ea6\uff0c\u9ed8\u8ba41048576\uff081M\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"runtime_bloom_filter_max_size"),": Runtime Filter\u4e2dBloom Filter\u7684\u6700\u5927\u957f\u5ea6\uff0c\u9ed8\u8ba416777216\uff0816M\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"runtime_bloom_filter_size"),": Runtime Filter\u4e2dBloom Filter\u7684\u9ed8\u8ba4\u957f\u5ea6\uff0c\u9ed8\u8ba42097152\uff082M\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"runtime_filter_max_in_num"),": \u5982\u679cjoin\u53f3\u8868\u6570\u636e\u884c\u6570\u5927\u4e8e\u8fd9\u4e2a\u503c\uff0c\u6211\u4eec\u5c06\u4e0d\u751f\u6210IN predicate\uff0c\u9ed8\u8ba4102400")))),(0,l.kt)("p",null,"\u4e0b\u9762\u5bf9\u67e5\u8be2\u9009\u9879\u505a\u8fdb\u4e00\u6b65\u8bf4\u660e\u3002"),(0,l.kt)("h4",{id:"1runtime_filter_type"},"1.runtime_filter_type"),(0,l.kt)("p",null,"\u4f7f\u7528\u7684Runtime Filter\u7c7b\u578b\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7c7b\u578b"),": \u6570\u5b57(1, 2, 4, 8, 16)\u6216\u8005\u76f8\u5bf9\u5e94\u7684\u52a9\u8bb0\u7b26\u5b57\u7b26\u4e32(IN, BLOOM_FILTER, MIN_MAX, ",(0,l.kt)("inlineCode",{parentName:"p"},"IN_OR_BLOOM_FILTER"),", BITMAP_FILTER)\uff0c\u9ed8\u8ba48(",(0,l.kt)("inlineCode",{parentName:"p"},"IN_OR_BLOOM_FILTER"),")\uff0c\u4f7f\u7528\u591a\u4e2a\u65f6\u7528\u9017\u53f7\u5206\u9694\uff0c\u6ce8\u610f\u9700\u8981\u52a0\u5f15\u53f7\uff0c\u6216\u8005\u5c06\u4efb\u610f\u591a\u4e2a\u7c7b\u578b\u7684\u6570\u5b57\u76f8\u52a0\uff0c\u4f8b\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'set runtime_filter_type="BLOOM_FILTER,IN,MIN_MAX";\n')),(0,l.kt)("p",null,"\u7b49\u4ef7\u4e8e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set runtime_filter_type=7;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"IN or Bloom Filter"),": \u6839\u636e\u53f3\u8868\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u7684\u771f\u5b9e\u884c\u6570\uff0c\u7531\u7cfb\u7edf\u81ea\u52a8\u5224\u65ad\u4f7f\u7528 IN predicate \u8fd8\u662f Bloom Filter",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5728\u53f3\u8868\u6570\u636e\u884c\u6570\u5c11\u4e8e102400\u65f6\u4f1a\u4f7f\u7528IN predicate\uff08\u53ef\u901a\u8fc7session\u53d8\u91cf\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"runtime_filter_max_in_num"),"\u8c03\u6574\uff09\uff0c\u5426\u5219\u4f7f\u7528Bloom filter\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Bloom Filter"),": \u6709\u4e00\u5b9a\u7684\u8bef\u5224\u7387\uff0c\u5bfc\u81f4\u8fc7\u6ee4\u7684\u6570\u636e\u6bd4\u9884\u671f\u5c11\u4e00\u70b9\uff0c\u4f46\u4e0d\u4f1a\u5bfc\u81f4\u6700\u7ec8\u7ed3\u679c\u4e0d\u51c6\u786e\uff0c\u5728\u5927\u90e8\u5206\u60c5\u51b5\u4e0bBloom Filter\u90fd\u53ef\u4ee5\u63d0\u5347\u6027\u80fd\u6216\u5bf9\u6027\u80fd\u6ca1\u6709\u663e\u8457\u5f71\u54cd\uff0c\u4f46\u5728\u90e8\u5206\u60c5\u51b5\u4e0b\u4f1a\u5bfc\u81f4\u6027\u80fd\u964d\u4f4e\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Bloom Filter\u6784\u5efa\u548c\u5e94\u7528\u7684\u5f00\u9500\u8f83\u9ad8\uff0c\u6240\u4ee5\u5f53\u8fc7\u6ee4\u7387\u8f83\u4f4e\u65f6\uff0c\u6216\u8005\u5de6\u8868\u6570\u636e\u91cf\u8f83\u5c11\u65f6\uff0cBloom Filter\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6027\u80fd\u964d\u4f4e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u53ea\u6709\u5de6\u8868\u7684Key\u5217\u5e94\u7528Bloom Filter\u624d\u80fd\u4e0b\u63a8\u5230\u5b58\u50a8\u5f15\u64ce\uff0c\u800c\u6d4b\u8bd5\u7ed3\u679c\u663e\u793aBloom Filter\u4e0d\u4e0b\u63a8\u5230\u5b58\u50a8\u5f15\u64ce\u65f6\u5f80\u5f80\u4f1a\u5bfc\u81f4\u6027\u80fd\u964d\u4f4e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524dBloom Filter\u4ec5\u5728ScanNode\u4e0a\u4f7f\u7528\u8868\u8fbe\u5f0f\u8fc7\u6ee4\u65f6\u6709\u77ed\u8def(short-circuit)\u903b\u8f91\uff0c\u5373\u5f53\u5047\u9633\u6027\u7387\u8fc7\u9ad8\u65f6\uff0c\u4e0d\u7ee7\u7eed\u4f7f\u7528Bloom Filter\uff0c\u4f46\u5f53Bloom Filter\u4e0b\u63a8\u5230\u5b58\u50a8\u5f15\u64ce\u540e\u6ca1\u6709\u77ed\u8def\u903b\u8f91\uff0c\u6240\u4ee5\u5f53\u8fc7\u6ee4\u7387\u8f83\u4f4e\u65f6\u53ef\u80fd\u5bfc\u81f4\u6027\u80fd\u964d\u4f4e\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"MinMax Filter"),": \u5305\u542b\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\uff0c\u4ece\u800c\u8fc7\u6ee4\u5c0f\u4e8e\u6700\u5c0f\u503c\u548c\u5927\u4e8e\u6700\u5927\u503c\u7684\u6570\u636e\uff0cMinMax Filter\u7684\u8fc7\u6ee4\u6548\u679c\u4e0ejoin on clause\u4e2dKey\u5217\u7684\u7c7b\u578b\u548c\u5de6\u53f3\u8868\u6570\u636e\u5206\u5e03\u6709\u5173\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53join on clause\u4e2dKey\u5217\u7684\u7c7b\u578b\u4e3aint/bigint/double\u7b49\u65f6\uff0c\u6781\u7aef\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u5de6\u53f3\u8868\u7684\u6700\u5927\u6700\u5c0f\u503c\u76f8\u540c\u5219\u6ca1\u6709\u6548\u679c\uff0c\u53cd\u4e4b\u53f3\u8868\u6700\u5927\u503c\u5c0f\u4e8e\u5de6\u8868\u6700\u5c0f\u503c\uff0c\u6216\u53f3\u8868\u6700\u5c0f\u503c\u5927\u4e8e\u5de6\u8868\u6700\u5927\u503c\uff0c\u5219\u6548\u679c\u6700\u597d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53join on clause\u4e2dKey\u5217\u7684\u7c7b\u578b\u4e3avarchar\u7b49\u65f6\uff0c\u5e94\u7528MinMax Filter\u5f80\u5f80\u4f1a\u5bfc\u81f4\u6027\u80fd\u964d\u4f4e\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"IN predicate"),": \u6839\u636ejoin on clause\u4e2dKey\u5217\u5728\u53f3\u8868\u4e0a\u7684\u6240\u6709\u503c\u6784\u5efaIN predicate\uff0c\u4f7f\u7528\u6784\u5efa\u7684IN predicate\u5728\u5de6\u8868\u4e0a\u8fc7\u6ee4\uff0c\u76f8\u6bd4Bloom Filter\u6784\u5efa\u548c\u5e94\u7528\u7684\u5f00\u9500\u66f4\u4f4e\uff0c\u5728\u53f3\u8868\u6570\u636e\u91cf\u8f83\u5c11\u65f6\u5f80\u5f80\u6027\u80fd\u66f4\u9ad8\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524dIN predicate\u5df2\u5b9e\u73b0\u5408\u5e76\u65b9\u6cd5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u540c\u65f6\u6307\u5b9aIn predicate\u548c\u5176\u4ed6filter\uff0c\u5e76\u4e14in\u7684\u8fc7\u6ee4\u6570\u503c\u6ca1\u8fbe\u5230runtime_filter_max_in_num\u65f6\uff0c\u4f1a\u5c1d\u8bd5\u628a\u5176\u4ed6filter\u53bb\u9664\u6389\u3002\u539f\u56e0\u662fIn predicate\u662f\u7cbe\u786e\u7684\u8fc7\u6ee4\u6761\u4ef6\uff0c\u5373\u4f7f\u6ca1\u6709\u5176\u4ed6filter\u4e5f\u53ef\u4ee5\u9ad8\u6548\u8fc7\u6ee4\uff0c\u5982\u679c\u540c\u65f6\u4f7f\u7528\u5219\u5176\u4ed6filter\u4f1a\u505a\u65e0\u7528\u529f\u3002\u76ee\u524d\u4ec5\u5728Runtime filter\u7684\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u5904\u4e8e\u540c\u4e00\u4e2afragment\u65f6\u624d\u4f1a\u6709\u53bb\u9664\u975ein filter\u7684\u903b\u8f91\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Bitmap Filter"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53\u524d\u4ec5\u5f53",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Operators/in"},"in subquery"),"\u64cd\u4f5c\u4e2d\u7684\u5b50\u67e5\u8be2\u8fd4\u56debitmap\u5217\u65f6\u4f1a\u4f7f\u7528bitmap filter."),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u524d\u53ea\u5728\u4ec5\u5728\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u652f\u6301bitmap filter.")))),(0,l.kt)("h4",{id:"2runtime_filter_mode"},"2.runtime_filter_mode"),(0,l.kt)("p",null,"\u7528\u4e8e\u63a7\u5236Runtime Filter\u5728instance\u4e4b\u95f4\u4f20\u8f93\u7684\u8303\u56f4\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7c7b\u578b"),": \u6570\u5b57(0, 1, 2)\u6216\u8005\u76f8\u5bf9\u5e94\u7684\u52a9\u8bb0\u7b26\u5b57\u7b26\u4e32(OFF, LOCAL, GLOBAL)\uff0c\u9ed8\u8ba42(GLOBAL)\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879")),(0,l.kt)("p",null,"LOCAL\uff1a\u76f8\u5bf9\u4fdd\u5b88\uff0c\u6784\u5efa\u7684Runtime Filter\u53ea\u80fd\u5728\u540c\u4e00\u4e2ainstance\uff08\u67e5\u8be2\u6267\u884c\u7684\u6700\u5c0f\u5355\u5143\uff09\u4e0a\u540c\u4e00\u4e2aFragment\u4e2d\u4f7f\u7528\uff0c\u5373Runtime Filter\u751f\u4ea7\u8005\uff08\u6784\u5efaFilter\u7684HashJoinNode\uff09\u548c\u6d88\u8d39\u8005\uff08\u4f7f\u7528RuntimeFilter\u7684ScanNode\uff09\u5728\u540c\u4e00\u4e2aFragment\uff0c\u6bd4\u5982broadcast join\u7684\u4e00\u822c\u573a\u666f\uff1b"),(0,l.kt)("p",null,"GLOBAL\uff1a\u76f8\u5bf9\u6fc0\u8fdb\uff0c\u9664\u6ee1\u8db3LOCAL\u7b56\u7565\u7684\u573a\u666f\u5916\uff0c\u8fd8\u53ef\u4ee5\u5c06Runtime Filter\u5408\u5e76\u540e\u901a\u8fc7\u7f51\u7edc\u4f20\u8f93\u5230\u4e0d\u540cinstance\u4e0a\u7684\u4e0d\u540cFragment\u4e2d\u4f7f\u7528\uff0c\u6bd4\u5982Runtime Filter\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u5728\u4e0d\u540cFragment\uff0c\u6bd4\u5982shuffle join\u3002"),(0,l.kt)("p",null,"\u5927\u591a\u6570\u60c5\u51b5\u4e0bGLOBAL\u7b56\u7565\u53ef\u4ee5\u5728\u66f4\u5e7f\u6cdb\u7684\u573a\u666f\u5bf9\u67e5\u8be2\u8fdb\u884c\u4f18\u5316\uff0c\u4f46\u5728\u6709\u4e9bshuffle join\u4e2d\u751f\u6210\u548c\u5408\u5e76Runtime Filter\u7684\u5f00\u9500\u8d85\u8fc7\u7ed9\u67e5\u8be2\u5e26\u6765\u7684\u6027\u80fd\u4f18\u52bf\uff0c\u53ef\u4ee5\u8003\u8651\u66f4\u6539\u4e3aLOCAL\u7b56\u7565\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u4e2d\u6d89\u53ca\u7684join\u67e5\u8be2\u4e0d\u4f1a\u56e0\u4e3aRuntime Filter\u800c\u63d0\u9ad8\u6027\u80fd\uff0c\u60a8\u53ef\u4ee5\u5c06\u8bbe\u7f6e\u66f4\u6539\u4e3aOFF\uff0c\u4ece\u800c\u5b8c\u5168\u5173\u95ed\u8be5\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u5728\u4e0d\u540cFragment\u4e0a\u6784\u5efa\u548c\u5e94\u7528Runtime Filter\u65f6\uff0c\u9700\u8981\u5408\u5e76Runtime Filter\u7684\u539f\u56e0\u548c\u7b56\u7565\u53ef\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/issues/6116"},"ISSUE 6116(opens new window)")),(0,l.kt)("h4",{id:"3runtime_filter_wait_time_ms"},"3.runtime_filter_wait_time_ms"),(0,l.kt)("p",null,"Runtime Filter\u7684\u7b49\u5f85\u8017\u65f6\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7c7b\u578b"),": \u6574\u6570\uff0c\u9ed8\u8ba41000\uff0c\u5355\u4f4dms"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879")),(0,l.kt)("p",null,"\u5728\u5f00\u542fRuntime Filter\u540e\uff0c\u5de6\u8868\u7684ScanNode\u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u5206\u914d\u7ed9\u81ea\u5df1\u7684Runtime Filter\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\u518d\u626b\u63cf\u6570\u636e\uff0c\u5373\u5982\u679cScanNode\u88ab\u5206\u914d\u4e863\u4e2aRuntime Filter\uff0c\u90a3\u4e48\u5b83\u6700\u591a\u4f1a\u7b49\u5f853000ms\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3aRuntime Filter\u7684\u6784\u5efa\u548c\u5408\u5e76\u5747\u9700\u8981\u65f6\u95f4\uff0cScanNode\u4f1a\u5c1d\u8bd5\u5c06\u7b49\u5f85\u65f6\u95f4\u5185\u5230\u8fbe\u7684Runtime Filter\u4e0b\u63a8\u5230\u5b58\u50a8\u5f15\u64ce\uff0c\u5982\u679c\u8d85\u8fc7\u7b49\u5f85\u65f6\u95f4\u540e\uff0cScanNode\u4f1a\u4f7f\u7528\u5df2\u7ecf\u5230\u8fbe\u7684Runtime Filter\u76f4\u63a5\u5f00\u59cb\u626b\u63cf\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u5982\u679cRuntime Filter\u5728ScanNode\u5f00\u59cb\u626b\u63cf\u4e4b\u540e\u5230\u8fbe\uff0c\u5219ScanNode\u4e0d\u4f1a\u5c06\u8be5Runtime Filter\u4e0b\u63a8\u5230\u5b58\u50a8\u5f15\u64ce\uff0c\u800c\u662f\u5bf9\u5df2\u7ecf\u4ece\u5b58\u50a8\u5f15\u64ce\u626b\u63cf\u4e0a\u6765\u7684\u6570\u636e\uff0c\u5728ScanNode\u4e0a\u57fa\u4e8e\u8be5Runtime Filter\u4f7f\u7528\u8868\u8fbe\u5f0f\u8fc7\u6ee4\uff0c\u4e4b\u524d\u5df2\u7ecf\u626b\u63cf\u7684\u6570\u636e\u5219\u4e0d\u4f1a\u5e94\u7528\u8be5Runtime Filter\uff0c\u8fd9\u6837\u5f97\u5230\u7684\u4e2d\u95f4\u6570\u636e\u89c4\u6a21\u4f1a\u5927\u4e8e\u6700\u4f18\u89e3\uff0c\u4f46\u53ef\u4ee5\u907f\u514d\u4e25\u91cd\u7684\u88c2\u5316\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u6bd4\u8f83\u7e41\u5fd9\uff0c\u5e76\u4e14\u96c6\u7fa4\u4e0a\u6709\u8bb8\u591a\u8d44\u6e90\u5bc6\u96c6\u578b\u6216\u957f\u8017\u65f6\u7684\u67e5\u8be2\uff0c\u53ef\u4ee5\u8003\u8651\u589e\u52a0\u7b49\u5f85\u65f6\u95f4\uff0c\u4ee5\u907f\u514d\u590d\u6742\u67e5\u8be2\u9519\u8fc7\u4f18\u5316\u673a\u4f1a\u3002\u5982\u679c\u96c6\u7fa4\u8d1f\u8f7d\u8f83\u8f7b\uff0c\u5e76\u4e14\u96c6\u7fa4\u4e0a\u6709\u8bb8\u591a\u53ea\u9700\u8981\u51e0\u79d2\u7684\u5c0f\u67e5\u8be2\uff0c\u53ef\u4ee5\u8003\u8651\u51cf\u5c11\u7b49\u5f85\u65f6\u95f4\uff0c\u4ee5\u907f\u514d\u6bcf\u4e2a\u67e5\u8be2\u589e\u52a01s\u7684\u5ef6\u8fdf\u3002"),(0,l.kt)("h4",{id:"4runtime_filters_max_num"},"4.runtime_filters_max_num"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u67e5\u8be2\u751f\u6210\u7684Runtime Filter\u4e2dBloom Filter\u6570\u91cf\u7684\u4e0a\u9650\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7c7b\u578b"),": \u6574\u6570\uff0c\u9ed8\u8ba410"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879")," \u76ee\u524d\u4ec5\u5bf9Bloom Filter\u7684\u6570\u91cf\u8fdb\u884c\u9650\u5236\uff0c\u56e0\u4e3a\u76f8\u6bd4MinMax Filter\u548cIN predicate\uff0cBloom Filter\u6784\u5efa\u548c\u5e94\u7528\u7684\u4ee3\u4ef7\u66f4\u9ad8\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u751f\u6210\u7684Bloom Filter\u8d85\u8fc7\u5141\u8bb8\u7684\u6700\u5927\u6570\u91cf\uff0c\u5219\u4fdd\u7559\u9009\u62e9\u6027\u5927\u7684Bloom Filter\uff0c\u9009\u62e9\u6027\u5927\u610f\u5473\u7740\u9884\u671f\u53ef\u4ee5\u8fc7\u6ee4\u66f4\u591a\u7684\u884c\u3002\u8fd9\u4e2a\u8bbe\u7f6e\u53ef\u4ee5\u9632\u6b62Bloom Filter\u8017\u8d39\u8fc7\u591a\u7684\u5185\u5b58\u5f00\u9500\u800c\u5bfc\u81f4\u6f5c\u5728\u7684\u95ee\u9898\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u9009\u62e9\u6027=(HashJoinNode Cardinality / HashJoinNode left child Cardinality)\n-- \u56e0\u4e3a\u76ee\u524dFE\u62ff\u5230Cardinality\u4e0d\u51c6\uff0c\u6240\u4ee5\u8fd9\u91ccBloom Filter\u8ba1\u7b97\u7684\u9009\u62e9\u6027\u4e0e\u5b9e\u9645\u4e0d\u51c6\uff0c\u56e0\u6b64\u6700\u7ec8\u53ef\u80fd\u53ea\u662f\u968f\u673a\u4fdd\u7559\u4e86\u90e8\u5206Bloom Filter\u3002\n")),(0,l.kt)("p",null,"\u4ec5\u5728\u5bf9\u6d89\u53ca\u5927\u8868\u95f4join\u7684\u67d0\u4e9b\u957f\u8017\u65f6\u67e5\u8be2\u8fdb\u884c\u8c03\u4f18\u65f6\uff0c\u624d\u9700\u8981\u8c03\u6574\u6b64\u67e5\u8be2\u9009\u9879\u3002"),(0,l.kt)("h4",{id:"5bloom-filter\u957f\u5ea6\u76f8\u5173\u53c2\u6570"},"5.Bloom Filter\u957f\u5ea6\u76f8\u5173\u53c2\u6570"),(0,l.kt)("p",null,"\u5305\u62ec",(0,l.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_min_size"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_max_size"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_size"),"\uff0c\u7528\u4e8e\u786e\u5b9aRuntime Filter\u4f7f\u7528\u7684Bloom Filter\u6570\u636e\u7ed3\u6784\u7684\u5927\u5c0f\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7c7b\u578b"),": \u6574\u6570"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879")," \u56e0\u4e3a\u9700\u8981\u4fdd\u8bc1\u6bcf\u4e2aHashJoinNode\u6784\u5efa\u7684Bloom Filter\u957f\u5ea6\u76f8\u540c\u624d\u80fd\u5408\u5e76\uff0c\u6240\u4ee5\u76ee\u524d\u5728FE\u67e5\u8be2\u89c4\u5212\u65f6\u8ba1\u7b97Bloom Filter\u7684\u957f\u5ea6\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u80fd\u62ff\u5230join\u53f3\u8868\u7edf\u8ba1\u4fe1\u606f\u4e2d\u7684\u6570\u636e\u884c\u6570(Cardinality)\uff0c\u4f1a\u5c1d\u8bd5\u6839\u636eCardinality\u4f30\u8ba1Bloom Filter\u7684\u6700\u4f73\u5927\u5c0f\uff0c\u5e76\u56db\u820d\u4e94\u5165\u5230\u6700\u63a5\u8fd1\u76842\u7684\u5e42(\u4ee52\u4e3a\u5e95\u7684log\u503c)\u3002\u5982\u679c\u65e0\u6cd5\u62ff\u5230\u53f3\u8868\u7684Cardinality\uff0c\u5219\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684Bloom Filter\u957f\u5ea6",(0,l.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_size"),"\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_min_size"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_max_size"),"\u7528\u4e8e\u9650\u5236\u6700\u7ec8\u4f7f\u7528\u7684Bloom Filter\u957f\u5ea6\u6700\u5c0f\u548c\u6700\u5927\u503c\u3002"),(0,l.kt)("p",null,"\u66f4\u5927\u7684Bloom Filter\u5728\u5904\u7406\u9ad8\u57fa\u6570\u7684\u8f93\u5165\u96c6\u65f6\u66f4\u6709\u6548\uff0c\u4f46\u9700\u8981\u6d88\u8017\u66f4\u591a\u7684\u5185\u5b58\u3002\u5047\u5982\u67e5\u8be2\u4e2d\u9700\u8981\u8fc7\u6ee4\u9ad8\u57fa\u6570\u5217\uff08\u6bd4\u5982\u542b\u6709\u6570\u767e\u4e07\u4e2a\u4e0d\u540c\u7684\u53d6\u503c\uff09\uff0c\u53ef\u4ee5\u8003\u8651\u589e\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"runtime_bloom_filter_size"),"\u7684\u503c\u8fdb\u884c\u4e00\u4e9b\u57fa\u51c6\u6d4b\u8bd5\uff0c\u8fd9\u6709\u52a9\u4e8e\u4f7fBloom Filter\u8fc7\u6ee4\u7684\u66f4\u52a0\u7cbe\u51c6\uff0c\u4ece\u800c\u83b7\u5f97\u9884\u671f\u7684\u6027\u80fd\u63d0\u5347\u3002"),(0,l.kt)("p",null,"Bloom Filter\u7684\u6709\u6548\u6027\u53d6\u51b3\u4e8e\u67e5\u8be2\u7684\u6570\u636e\u5206\u5e03\uff0c\u56e0\u6b64\u901a\u5e38\u4ec5\u5bf9\u4e00\u4e9b\u7279\u5b9a\u67e5\u8be2\u989d\u5916\u8c03\u6574\u5176Bloom Filter\u957f\u5ea6\uff0c\u800c\u4e0d\u662f\u5168\u5c40\u4fee\u6539\uff0c\u4e00\u822c\u4ec5\u5728\u5bf9\u6d89\u53ca\u5927\u8868\u95f4join\u7684\u67d0\u4e9b\u957f\u8017\u65f6\u67e5\u8be2\u8fdb\u884c\u8c03\u4f18\u65f6\uff0c\u624d\u9700\u8981\u8c03\u6574\u6b64\u67e5\u8be2\u9009\u9879\u3002"),(0,l.kt)("h3",{id:"\u67e5\u770bquery\u751f\u6210\u7684runtime-filter"},"\u67e5\u770bquery\u751f\u6210\u7684Runtime Filter"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"explain"),"\u547d\u4ee4\u53ef\u4ee5\u663e\u793a\u7684\u67e5\u8be2\u8ba1\u5212\u4e2d\u5305\u62ec\u6bcf\u4e2aFragment\u4f7f\u7528\u7684join on clause\u4fe1\u606f\uff0c\u4ee5\u53caFragment\u751f\u6210\u548c\u4f7f\u7528Runtime Filter\u7684\u6ce8\u91ca\uff0c\u4ece\u800c\u786e\u8ba4\u662f\u5426\u5c06Runtime Filter\u5e94\u7528\u5230\u4e86\u671f\u671b\u7684join on clause\u4e0a\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210Runtime Filter\u7684Fragment\u5305\u542b\u7684\u6ce8\u91ca\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"runtime filters: filter_id[type] <- table.column"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528Runtime Filter\u7684Fragment\u5305\u542b\u7684\u6ce8\u91ca\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"runtime filters: filter_id[type] -> table.column"),"\u3002")),(0,l.kt)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u4e2d\u7684\u67e5\u8be2\u4f7f\u7528\u4e86\u4e00\u4e2aID\u4e3aRF000\u7684Runtime Filter\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE test (t1 INT) DISTRIBUTED BY HASH (t1) BUCKETS 2 PROPERTIES("replication_num" = "1");\nINSERT INTO test VALUES (1), (2), (3), (4);\n\nCREATE TABLE test2 (t2 INT) DISTRIBUTED BY HASH (t2) BUCKETS 2 PROPERTIES("replication_num" = "1");\nINSERT INTO test2 VALUES (3), (4), (5);\n\nEXPLAIN SELECT t1 FROM test JOIN test2 where test.t1 = test2.t2;\n+-------------------------------------------------------------------+\n| Explain String                                                    |\n+-------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                   |\n|  OUTPUT EXPRS:`t1`                                                |\n|                                                                   |\n|   4:EXCHANGE                                                      |\n|                                                                   |\n| PLAN FRAGMENT 1                                                   |\n|  OUTPUT EXPRS:                                                    |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:ssb`.`test`.`t1`  |\n|                                                                   |\n|   2:HASH JOIN                                                     |\n|   |  join op: INNER JOIN (BUCKET_SHUFFLE)                         |\n|   |  equal join conjunct: `test`.`t1` = `test2`.`t2`              |\n|   |  runtime filters: RF000[in] <- `test2`.`t2`                   |\n|   |                                                               |\n|   |----3:EXCHANGE                                                 |\n|   |                                                               |\n|   0:OlapScanNode                                                  |\n|      TABLE: test                                                  |\n|      runtime filters: RF000[in] -> `test`.`t1`                    |\n|                                                                   |\n| PLAN FRAGMENT 2                                                   |\n|  OUTPUT EXPRS:                                                    |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:ssb`.`test2`.`t2` |\n|                                                                   |\n|   1:OlapScanNode                                                  |\n|      TABLE: test2                                                 |\n+-------------------------------------------------------------------+\n-- \u4e0a\u9762`runtime filters`\u7684\u884c\u663e\u793a\u4e86`PLAN FRAGMENT 1`\u7684`2:HASH JOIN`\u751f\u6210\u4e86ID\u4e3aRF000\u7684IN predicate\uff0c\n-- \u5176\u4e2d`test2`.`t2`\u7684key values\u4ec5\u5728\u8fd0\u884c\u65f6\u53ef\u77e5\uff0c\n-- \u5728`0:OlapScanNode`\u4f7f\u7528\u4e86\u8be5IN predicate\u7528\u4e8e\u5728\u8bfb\u53d6`test`.`t1`\u65f6\u8fc7\u6ee4\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u3002\n\nSELECT t1 FROM test JOIN test2 where test.t1 = test2.t2; \n-- \u8fd4\u56de2\u884c\u7ed3\u679c[3, 4];\n\n-- \u901a\u8fc7query\u7684profile\uff08set enable_profile=true;\uff09\u53ef\u4ee5\u67e5\u770b\u67e5\u8be2\u5185\u90e8\u5de5\u4f5c\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\n-- \u5305\u62ec\u6bcf\u4e2aRuntime Filter\u662f\u5426\u4e0b\u63a8\u3001\u7b49\u5f85\u8017\u65f6\u3001\u4ee5\u53caOLAP_SCAN_NODE\u4eceprepare\u5230\u63a5\u6536\u5230Runtime Filter\u7684\u603b\u65f6\u957f\u3002\nRuntimeFilter:in:\n    -  HasPushDownToEngine:  true\n    -  AWaitTimeCost:  0ns\n    -  EffectTimeCost:  2.76ms\n\n-- \u6b64\u5916\uff0c\u5728profile\u7684OLAP_SCAN_NODE\u4e2d\u8fd8\u53ef\u4ee5\u67e5\u770bRuntime Filter\u4e0b\u63a8\u540e\u7684\u8fc7\u6ee4\u6548\u679c\u548c\u8017\u65f6\u3002\n    -  RowsVectorPredFiltered:  9.320008M  (9320008)\n    -  VectorPredEvalTime:  364.39ms\n')),(0,l.kt)("h2",{id:"runtime-filter\u7684\u89c4\u5212\u89c4\u5219"},"Runtime Filter\u7684\u89c4\u5212\u89c4\u5219"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u53ea\u652f\u6301\u5bf9join on clause\u4e2d\u7684\u7b49\u503c\u6761\u4ef6\u751f\u6210Runtime Filter\uff0c\u4e0d\u5305\u62ecNull-safe\u6761\u4ef6\uff0c\u56e0\u4e3a\u5176\u53ef\u80fd\u4f1a\u8fc7\u6ee4\u6389join\u5de6\u8868\u7684null\u503c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u5c06Runtime Filter\u4e0b\u63a8\u5230left outer\u3001full outer\u3001anti join\u7684\u5de6\u8868\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301src expr\u6216target expr\u662f\u5e38\u91cf\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301src expr\u548ctarget expr\u76f8\u7b49\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301src expr\u7684\u7c7b\u578b\u7b49\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"HLL"),"\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"li"},"BITMAP"),"\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u76ee\u524d\u4ec5\u652f\u6301\u5c06Runtime Filter\u4e0b\u63a8\u7ed9OlapScanNode\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301target expr\u5305\u542bNULL-checking\u8868\u8fbe\u5f0f\uff0c\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"COALESCE/IFNULL/CASE"),"\uff0c\u56e0\u4e3a\u5f53outer join\u4e0a\u5c42\u5176\u4ed6join\u7684join on clause\u5305\u542bNULL-checking\u8868\u8fbe\u5f0f\u5e76\u751f\u6210Runtime Filter\u65f6\uff0c\u5c06\u8fd9\u4e2aRuntime Filter\u4e0b\u63a8\u5230outer join\u7684\u5de6\u8868\u65f6\u53ef\u80fd\u5bfc\u81f4\u7ed3\u679c\u4e0d\u6b63\u786e\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301target expr\u4e2d\u7684\u5217\uff08slot\uff09\u65e0\u6cd5\u5728\u539f\u59cb\u8868\u4e2d\u627e\u5230\u67d0\u4e2a\u7b49\u4ef7\u5217\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u5217\u4f20\u5bfc\uff0c\u8fd9\u5305\u542b\u4e24\u79cd\u60c5\u51b5\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u662f\u4f8b\u5982join on clause\u5305\u542bA.k = B.k and B.k = C.k\u65f6\uff0c\u76ee\u524dC.k\u53ea\u53ef\u4ee5\u4e0b\u63a8\u7ed9B.k\uff0c\u800c\u4e0d\u53ef\u4ee5\u4e0b\u63a8\u7ed9A.k\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u662f\u4f8b\u5982join on clause\u5305\u542bA.a + B.b = C.c\uff0c\u5982\u679cA.a\u53ef\u4ee5\u5217\u4f20\u5bfc\u5230B.a\uff0c\u5373A.a\u548cB.a\u662f\u7b49\u4ef7\u7684\u5217\uff0c\u90a3\u4e48\u53ef\u4ee5\u7528B.a\u66ff\u6362A.a\uff0c\u7136\u540e\u53ef\u4ee5\u5c1d\u8bd5\u5c06Runtime Filter\u4e0b\u63a8\u7ed9B\uff08\u5982\u679cA.a\u548cB.a\u4e0d\u662f\u7b49\u4ef7\u5217\uff0c\u5219\u4e0d\u80fd\u4e0b\u63a8\u7ed9B\uff0c\u56e0\u4e3atarget expr\u5fc5\u987b\u4e0e\u552f\u4e00\u4e00\u4e2ajoin\u5de6\u8868\u7ed1\u5b9a\uff09\uff1b"))),(0,l.kt)("li",{parentName:"ol"},"Target expr\u548csrc expr\u7684\u7c7b\u578b\u5fc5\u987b\u76f8\u7b49\uff0c\u56e0\u4e3aBloom Filter\u57fa\u4e8ehash\uff0c\u82e5\u7c7b\u578b\u4e0d\u7b49\u5219\u4f1a\u5c1d\u8bd5\u5c06target expr\u7684\u7c7b\u578b\u8f6c\u6362\u4e3asrc expr\u7684\u7c7b\u578b\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301",(0,l.kt)("inlineCode",{parentName:"li"},"PlanNode.Conjuncts"),"\u751f\u6210\u7684Runtime Filter\u4e0b\u63a8\uff0c\u4e0eHashJoinNode\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"eqJoinConjuncts"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"otherJoinConjuncts"),"\u4e0d\u540c\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"PlanNode.Conjuncts"),"\u751f\u6210\u7684Runtime Filter\u5728\u6d4b\u8bd5\u4e2d\u53d1\u73b0\u53ef\u80fd\u4f1a\u5bfc\u81f4\u9519\u8bef\u7684\u7ed3\u679c\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"IN"),"\u5b50\u67e5\u8be2\u8f6c\u6362\u4e3ajoin\u65f6\uff0c\u81ea\u52a8\u751f\u6210\u7684join on clause\u5c06\u4fdd\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"PlanNode.Conjuncts"),"\u4e2d\uff0c\u6b64\u65f6\u5e94\u7528Runtime Filter\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7ed3\u679c\u7f3a\u5c11\u4e00\u4e9b\u884c\u3002")))}N.isMDXComponent=!0}}]);