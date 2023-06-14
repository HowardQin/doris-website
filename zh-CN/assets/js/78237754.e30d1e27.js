"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71273],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),s=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return l.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return t?l.createElement(k,o(o({ref:n},u),{},{components:t})):l.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=t(87462),a=(t(67294),t(3905));const r={title:"\u4f7f\u7528HLL\u8fd1\u4f3c\u53bb\u91cd",language:"zh-CN"},o=void 0,i={unversionedId:"advanced/using-hll",id:"advanced/using-hll",title:"\u4f7f\u7528HLL\u8fd1\u4f3c\u53bb\u91cd",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/using-hll.md",sourceDirName:"advanced",slug:"/advanced/using-hll",permalink:"/zh-CN/docs/dev/advanced/using-hll",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528HLL\u8fd1\u4f3c\u53bb\u91cd",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP\u7cbe\u51c6\u53bb\u91cd",permalink:"/zh-CN/docs/dev/advanced/orthogonal-bitmap-manual"},next:{title:"\u53d8\u91cf",permalink:"/zh-CN/docs/dev/advanced/variables"}},p={},s=[{value:"HLL \u8fd1\u4f3c\u53bb\u91cd",id:"hll-\u8fd1\u4f3c\u53bb\u91cd",level:2},{value:"\u4ec0\u4e48\u662f HyperLogLog",id:"\u4ec0\u4e48\u662f-hyperloglog",level:2},{value:"Doris HLL \u51fd\u6570",id:"doris-hll-\u51fd\u6570",level:2},{value:"\u5982\u4f55\u4f7f\u7528 Doris HLL",id:"\u5982\u4f55\u4f7f\u7528-doris-hll",level:2},{value:"\u521b\u5efa\u4e00\u5f20\u542b\u6709 hll \u5217\u7684\u8868",id:"\u521b\u5efa\u4e00\u5f20\u542b\u6709-hll-\u5217\u7684\u8868",level:3},{value:"\u5bfc\u5165\u6570\u636e",id:"\u5bfc\u5165\u6570\u636e",level:3},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",level:2}],u={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hll-\u8fd1\u4f3c\u53bb\u91cd"},"HLL \u8fd1\u4f3c\u53bb\u91cd"),(0,a.kt)("p",null,"\u5728\u5b9e\u9645\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u968f\u7740\u4e1a\u52a1\u6570\u636e\u91cf\u8d8a\u6765\u8d8a\u5927\uff0c\u5bf9\u6570\u636e\u53bb\u91cd\u7684\u538b\u529b\u4e5f\u8d8a\u6765\u8d8a\u5927\uff0c\u5f53\u6570\u636e\u8fbe\u5230\u4e00\u5b9a\u89c4\u6a21\u4e4b\u540e\uff0c\u4f7f\u7528\u7cbe\u51c6\u53bb\u91cd\u7684\u6210\u672c\u4e5f\u8d8a\u6765\u8d8a\u9ad8\uff0c\u5728\u4e1a\u52a1\u53ef\u4ee5\u63a5\u53d7\u7684\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7\u8fd1\u4f3c\u7b97\u6cd5\u6765\u5b9e\u73b0\u5feb\u901f\u53bb\u91cd\u964d\u4f4e\u8ba1\u7b97\u538b\u529b\u662f\u4e00\u4e2a\u975e\u5e38\u597d\u7684\u65b9\u5f0f\uff0c\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd Doris \u63d0\u4f9b\u7684 HyperLogLog\uff08\u7b80\u79f0 HLL\uff09\u662f\u4e00\u79cd\u8fd1\u4f3c\u53bb\u91cd\u7b97\u6cd5\u3002"),(0,a.kt)("p",null,"HLL \u7684\u7279\u70b9\u662f\u5177\u6709\u975e\u5e38\u4f18\u5f02\u7684\u7a7a\u95f4\u590d\u6742\u5ea6 O(mloglogn) , \u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(n),  \u5e76\u4e14\u8ba1\u7b97\u7ed3\u679c\u7684\u8bef\u5dee\u53ef\u63a7\u5236\u5728 1%\u20142% \u5de6\u53f3\uff0c\u8bef\u5dee\u4e0e\u6570\u636e\u96c6\u5927\u5c0f\u4ee5\u53ca\u6240\u91c7\u7528\u7684\u54c8\u5e0c\u51fd\u6570\u6709\u5173\u3002"),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f-hyperloglog"},"\u4ec0\u4e48\u662f HyperLogLog"),(0,a.kt)("p",null,"\u5b83\u662f LogLog \u7b97\u6cd5\u7684\u5347\u7ea7\u7248\uff0c\u4f5c\u7528\u662f\u80fd\u591f\u63d0\u4f9b\u4e0d\u7cbe\u786e\u7684\u53bb\u91cd\u8ba1\u6570\u3002\u5176\u6570\u5b66\u57fa\u7840\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u4f2f\u52aa\u5229\u8bd5\u9a8c"),"\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u786c\u5e01\u62e5\u6709\u6b63\u53cd\u4e24\u9762\uff0c\u4e00\u6b21\u7684\u4e0a\u629b\u81f3\u843d\u4e0b\uff0c\u6700\u7ec8\u51fa\u73b0\u6b63\u53cd\u9762\u7684\u6982\u7387\u90fd\u662f50%\u3002\u4e00\u76f4\u629b\u786c\u5e01\uff0c\u76f4\u5230\u5b83\u51fa\u73b0\u6b63\u9762\u4e3a\u6b62\uff0c\u6211\u4eec\u8bb0\u5f55\u4e3a\u4e00\u6b21\u5b8c\u6574\u7684\u8bd5\u9a8c\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u5bf9\u4e8e\u591a\u6b21\u7684\u4f2f\u52aa\u5229\u8bd5\u9a8c\uff0c\u5047\u8bbe\u8fd9\u4e2a\u591a\u6b21\u4e3an\u6b21\u3002\u5c31\u610f\u5473\u7740\u51fa\u73b0\u4e86n\u6b21\u7684\u6b63\u9762\u3002\u5047\u8bbe\u6bcf\u6b21\u4f2f\u52aa\u5229\u8bd5\u9a8c\u6240\u7ecf\u5386\u4e86\u7684\u629b\u63b7\u6b21\u6570\u4e3ak\u3002\u7b2c\u4e00\u6b21\u4f2f\u52aa\u5229\u8bd5\u9a8c\uff0c\u6b21\u6570\u8bbe\u4e3ak1\uff0c\u4ee5\u6b64\u7c7b\u63a8\uff0c\u7b2cn\u6b21\u5bf9\u5e94\u7684\u662fkn\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d\uff0c\u5bf9\u4e8e\u8fd9n\u6b21\u4f2f\u52aa\u5229\u8bd5\u9a8c\u4e2d\uff0c\u5fc5\u7136\u4f1a\u6709\u4e00\u4e2a\u6700\u5927\u7684\u629b\u63b7\u6b21\u6570k\uff0c\u4f8b\u5982\u629b\u4e8612\u6b21\u624d\u51fa\u73b0\u6b63\u9762\uff0c\u90a3\u4e48\u79f0\u8fd9\u4e2a\u4e3ak_max\uff0c\u4ee3\u8868\u629b\u4e86\u6700\u591a\u7684\u6b21\u6570\u3002"),(0,a.kt)("p",null,"\u4f2f\u52aa\u5229\u8bd5\u9a8c\u5bb9\u6613\u5f97\u51fa\u6709\u4ee5\u4e0b\u7ed3\u8bba\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"n \u6b21\u4f2f\u52aa\u5229\u8fc7\u7a0b\u7684\u6295\u63b7\u6b21\u6570\u90fd\u4e0d\u5927\u4e8e k_max\u3002"),(0,a.kt)("li",{parentName:"ul"},"n \u6b21\u4f2f\u52aa\u5229\u8fc7\u7a0b\uff0c\u81f3\u5c11\u6709\u4e00\u6b21\u6295\u63b7\u6b21\u6570\u7b49\u4e8e k_max")),(0,a.kt)("p",null,"\u6700\u7ec8\u7ed3\u5408\u6781\u5927\u4f3c\u7136\u4f30\u7b97\u7684\u65b9\u6cd5\uff0c\u53d1\u73b0\u5728n\u548ck_max\u4e2d\u5b58\u5728\u4f30\u7b97\u5173\u8054\uff1an = 2 ^ k_max\u3002",(0,a.kt)("strong",{parentName:"p"},"\u5f53\u6211\u4eec\u53ea\u8bb0\u5f55\u4e86k_max\u65f6\uff0c\u5373\u53ef\u4f30\u7b97\u603b\u5171\u6709\u591a\u5c11\u6761\u6570\u636e\uff0c\u4e5f\u5c31\u662f\u57fa\u6570\u3002")),(0,a.kt)("p",null,"\u5047\u8bbe\u8bd5\u9a8c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c1\u6b21\u8bd5\u9a8c: \u629b\u4e863\u6b21\u624d\u51fa\u73b0\u6b63\u9762\uff0c\u6b64\u65f6 k=3\uff0cn=1"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c2\u6b21\u8bd5\u9a8c: \u629b\u4e862\u6b21\u624d\u51fa\u73b0\u6b63\u9762\uff0c\u6b64\u65f6 k=2\uff0cn=2"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c3\u6b21\u8bd5\u9a8c: \u629b\u4e866\u6b21\u624d\u51fa\u73b0\u6b63\u9762\uff0c\u6b64\u65f6 k=6\uff0cn=3"),(0,a.kt)("li",{parentName:"ul"},"\u7b2cn\u6b21\u8bd5\u9a8c\uff1a\u629b\u4e8612\u6b21\u624d\u51fa\u73b0\u6b63\u9762\uff0c\u6b64\u65f6\u6211\u4eec\u4f30\u7b97\uff0c n = 2^12")),(0,a.kt)("p",null,"\u53d6\u4e0a\u9762\u4f8b\u5b50\u4e2d\u524d\u4e09\u7ec4\u8bd5\u9a8c\uff0c\u90a3\u4e48 k_max = 6\uff0c\u6700\u7ec8 n=3\uff0c\u6211\u4eec\u653e\u8fdb\u4f30\u7b97\u516c\u5f0f\u4e2d\u53bb\uff0c\u660e\u663e\uff1a 3 \u2260 2^6 \u3002\u4e5f\u5373\u662f\u8bf4\uff0c\u5f53\u8bd5\u9a8c\u6b21\u6570\u5f88\u5c0f\u7684\u65f6\u5019\uff0c\u8fd9\u79cd\u4f30\u7b97\u65b9\u6cd5\u7684\u8bef\u5dee\u662f\u5f88\u5927\u7684\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e09\u7ec4\u8bd5\u9a8c\uff0c\u6211\u4eec\u79f0\u4e3a\u4e00\u8f6e\u7684\u4f30\u7b97\u3002\u5982\u679c\u53ea\u662f\u8fdb\u884c\u4e00\u8f6e\u7684\u8bdd\uff0c\u5f53 n \u8db3\u591f\u5927\u7684\u65f6\u5019\uff0c\u4f30\u7b97\u7684\u8bef\u5dee\u7387\u4f1a\u76f8\u5bf9\u51cf\u5c11\uff0c\u4f46\u4ecd\u7136\u4e0d\u591f\u5c0f\u3002"),(0,a.kt)("h2",{id:"doris-hll-\u51fd\u6570"},"Doris HLL \u51fd\u6570"),(0,a.kt)("p",null,"HLL \u662f\u57fa\u4e8e HyperLogLog \u7b97\u6cd5\u7684\u5de5\u7a0b\u5b9e\u73b0\uff0c\u7528\u4e8e\u4fdd\u5b58 HyperLogLog \u8ba1\u7b97\u8fc7\u7a0b\u7684\u4e2d\u95f4\u7ed3\u679c\uff0c\u5b83\u53ea\u80fd\u4f5c\u4e3a\u8868\u7684 value \u5217\u7c7b\u578b\u3001\u901a\u8fc7\u805a\u5408\u6765\u4e0d\u65ad\u7684\u51cf\u5c11\u6570\u636e\u91cf\uff0c\u4ee5\u6b64"),(0,a.kt)("p",null,"\u6765\u5b9e\u73b0\u52a0\u5feb\u67e5\u8be2\u7684\u76ee\u7684\uff0c\u57fa\u4e8e\u5b83\u5f97\u5230\u7684\u662f\u4e00\u4e2a\u4f30\u7b97\u7ed3\u679c\uff0c\u8bef\u5dee\u5927\u6982\u57281%\u5de6\u53f3\uff0chll \u5217\u662f\u901a\u8fc7\u5176\u5b83\u5217\u6216\u8005\u5bfc\u5165\u6570\u636e\u91cc\u9762\u7684\u6570\u636e\u751f\u6210\u7684\uff0c\u5bfc\u5165\u7684\u65f6\u5019\u901a\u8fc7 hll_hash \u51fd\u6570"),(0,a.kt)("p",null,"\u6765\u6307\u5b9a\u6570\u636e\u4e2d\u54ea\u4e00\u5217\u7528\u4e8e\u751f\u6210 hll \u5217\uff0c\u5b83\u5e38\u7528\u4e8e\u66ff\u4ee3 count distinct\uff0c\u901a\u8fc7\u7ed3\u5408 rollup \u5728\u4e1a\u52a1\u4e0a\u7528\u4e8e\u5feb\u901f\u8ba1\u7b97uv\u7b49"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HLL_UNION_AGG(hll)")),(0,a.kt)("p",null,"\u6b64\u51fd\u6570\u4e3a\u805a\u5408\u51fd\u6570\uff0c\u7528\u4e8e\u8ba1\u7b97\u6ee1\u8db3\u6761\u4ef6\u7684\u6240\u6709\u6570\u636e\u7684\u57fa\u6570\u4f30\u7b97\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HLL_CARDINALITY(hll)")),(0,a.kt)("p",null,"\u6b64\u51fd\u6570\u7528\u4e8e\u8ba1\u7b97\u5355\u6761hll\u5217\u7684\u57fa\u6570\u4f30\u7b97"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HLL_HASH(column_name)")),(0,a.kt)("p",null,"\u751f\u6210HLL\u5217\u7c7b\u578b\uff0c\u7528\u4e8einsert\u6216\u5bfc\u5165\u7684\u65f6\u5019\uff0c\u5bfc\u5165\u7684\u4f7f\u7528\u89c1\u76f8\u5173\u8bf4\u660e"),(0,a.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528-doris-hll"},"\u5982\u4f55\u4f7f\u7528 Doris HLL"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 HLL \u53bb\u91cd\u7684\u65f6\u5019\uff0c\u9700\u8981\u5728\u5efa\u8868\u8bed\u53e5\u4e2d\u5c06\u76ee\u6807\u5217\u7c7b\u578b\u8bbe\u7f6e\u6210HLL\uff0c\u805a\u5408\u51fd\u6570\u8bbe\u7f6e\u6210HLL_UNION"),(0,a.kt)("li",{parentName:"ol"},"HLL\u7c7b\u578b\u7684\u5217\u4e0d\u80fd\u4f5c\u4e3a Key \u5217\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ol"},"\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u53ca\u9ed8\u8ba4\u503c\uff0c\u957f\u5ea6\u6839\u636e\u6570\u636e\u805a\u5408\u7a0b\u5ea6\u7cfb\u7edf\u5185\u63a7\u5236")),(0,a.kt)("h3",{id:"\u521b\u5efa\u4e00\u5f20\u542b\u6709-hll-\u5217\u7684\u8868"},"\u521b\u5efa\u4e00\u5f20\u542b\u6709 hll \u5217\u7684\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'create table test_hll(\n    dt date,\n    id int,\n    name char(10),\n    province char(10),\n    os char(10),\n    pv hll hll_union\n)\nAggregate KEY (dt,id,name,province,os)\ndistributed by hash(id) buckets 10\nPROPERTIES(\n    "replication_num" = "1",\n    "in_memory"="false"\n);\n')),(0,a.kt)("h3",{id:"\u5bfc\u5165\u6570\u636e"},"\u5bfc\u5165\u6570\u636e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Stream load \u5bfc\u5165"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -H "label:label_test_hll_load" \\\n    -H "column_separator:," \\\n    -H "columns:dt,id,name,province,os, pv=hll_hash(id)" -T test_hll.csv http://fe_IP:8030/api/demo/test_hll/_stream_load\n')),(0,a.kt)("p",{parentName:"li"},"\u793a\u4f8b\u6570\u636e\u5982\u4e0b\uff08test_hll.csv\uff09\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"2022-05-05,10001,\u6d4b\u8bd501,\u5317\u4eac,windows\n2022-05-05,10002,\u6d4b\u8bd501,\u5317\u4eac,linux\n2022-05-05,10003,\u6d4b\u8bd501,\u5317\u4eac,macos\n2022-05-05,10004,\u6d4b\u8bd501,\u6cb3\u5317,windows\n2022-05-06,10001,\u6d4b\u8bd501,\u4e0a\u6d77,windows\n2022-05-06,10002,\u6d4b\u8bd501,\u4e0a\u6d77,linux\n2022-05-06,10003,\u6d4b\u8bd501,\u6c5f\u82cf,macos\n2022-05-06,10004,\u6d4b\u8bd501,\u9655\u897f,windows\n")),(0,a.kt)("p",{parentName:"li"},"\u5bfc\u5165\u7ed3\u679c\u5982\u4e0b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'# curl --location-trusted -u root: -H "label:label_test_hll_load"     -H "column_separator:,"     -H "columns:dt,id,name,province,os, pv=hll_hash(id)" -T test_hll.csv http://127.0.0.1:8030/api/demo/test_hll/_stream_load\n\n{\n    "TxnId": 693,\n    "Label": "label_test_hll_load",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 8,\n    "NumberLoadedRows": 8,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 320,\n    "LoadTimeMs": 23,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 1,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 9,\n    "CommitAndPublishTimeMs": 11\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Broker Load"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'LOAD LABEL demo.test_hlllabel\n (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/doris_test_hll/data/input/file")\n    INTO TABLE `test_hll`\n    COLUMNS TERMINATED BY ","\n    (dt,id,name,province,os)\n    SET (\n      pv = HLL_HASH(id)\n    )\n );\n')),(0,a.kt)("h2",{id:"\u67e5\u8be2\u6570\u636e"},"\u67e5\u8be2\u6570\u636e"),(0,a.kt)("p",null,"HLL \u5217\u4e0d\u5141\u8bb8\u76f4\u63a5\u67e5\u8be2\u539f\u59cb\u503c\uff0c\u53ea\u80fd\u901a\u8fc7 HLL \u7684\u805a\u5408\u51fd\u6570\u8fdb\u884c\u67e5\u8be2\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6c42\u603b\u7684PV"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select HLL_UNION_AGG(pv) from test_hll;\n+---------------------+\n| hll_union_agg(`pv`) |\n+---------------------+\n|                   4 |\n+---------------------+\n1 row in set (0.00 sec)\n")),(0,a.kt)("p",{parentName:"li"},"\u7b49\u4ef7\u4e8e\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT COUNT(DISTINCT pv) FROM test_hll;\n+----------------------+\n| count(DISTINCT `pv`) |\n+----------------------+\n|                    4 |\n+----------------------+\n1 row in set (0.01 sec)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6c42\u6bcf\u4e00\u5929\u7684PV"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select HLL_UNION_AGG(pv) from test_hll group by dt;\n+---------------------+\n| hll_union_agg(`pv`) |\n+---------------------+\n|                   4 |\n|                   4 |\n+---------------------+\n2 rows in set (0.01 sec)\n")))))}d.isMDXComponent=!0}}]);