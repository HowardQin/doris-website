"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[56325],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var l=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,l,r=function(e,t){if(null==e)return{};var i,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=l.createContext({}),u=function(e){var t=l.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(i),k=r,h=p["".concat(s,".").concat(k)]||p[k]||d[k]||a;return i?l.createElement(h,n(n({ref:t},c),{},{components:i})):l.createElement(h,n({ref:t},c))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,n=new Array(a);n[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,n[1]=o;for(var u=2;u<a;u++)n[u]=i[u];return l.createElement.apply(null,n)}return l.createElement.apply(null,i)}k.displayName="MDXCreateElement"},85215:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=i(87462),r=(i(67294),i(3905));const a={title:"Doris on Es\u5728\u5feb\u624b\u5546\u4e1a\u5316\u7684\u6700\u4f73\u5b9e\u8df5",'language": "zh':null,summary:"\u5feb\u624b\u5546\u4e1a\u5316\u62a5\u8868\u5f15\u64ce\u4e3a\u5916\u90e8\u5e7f\u544a\u4e3b\u63d0\u4f9b\u5e7f\u544a\u6295\u653e\u6548\u679c\u7684\u5b9e\u65f6\u591a\u7ef4\u5206\u6790\u62a5\u8868\u5728\u7ebf\u67e5\u8be2\u670d\u52a1\uff0c\u4ee5\u53ca\u4e3a\u5185\u90e8\u5404\u5546\u4e1a\u5316\u7cfb\u7edf\u63d0\u4f9b\u591a\u7ef4\u5206\u6790\u62a5\u8868\u67e5\u8be2\u670d\u52a1\uff0c\u81f4\u529b\u4e8e\u89e3\u51b3\u591a\u7ef4\u5206\u6790\u62a5\u8868\u573a\u666f\u7684\u9ad8\u6027\u80fd\u3001\u9ad8\u5e76\u53d1\u3001\u9ad8\u7a33\u5b9a\u7684\u67e5\u8be2\u95ee\u9898\u3002\u65e9\u671fDruid on Es\u7684\u67b6\u6784\u542b\u6709\u8bf8\u591a\u5f0a\u7aef\uff0c\u901a\u8fc7\u8c03\u7814\u6211\u4eec\u9009\u62e9\u4e86Doris on Es\u7684\u6570\u4ed3\u89e3\u51b3\u65b9\u6848\u3002\u4f7f\u7528Doris \u4e4b\u540e\uff0c\u67e5\u8be2\u53d8\u5f97\u7b80\u5355\u3002\u6211\u4eec\u4ec5\u9700\u8981\u6309\u5929\u540c\u6b65\u4e8b\u5b9e\u8868\u548c\u7ef4\u8868\uff0c\u5728\u67e5\u8be2\u7684\u540c\u65f6 Join\u5373\u53ef\u3002\u901a\u8fc7Doris\u66ff\u4ee3Druid\u3001Clickhouse\u7684\u65b9\u6848\uff0c\u57fa\u672c\u8986\u76d6\u4e86\u6211\u4eec\u4f7f\u7528Druid \u65f6\u7684\u6240\u6709\u573a\u666f\uff0c\u5927\u5927\u63d0\u9ad8\u4e86\u6d77\u91cf\u6570\u636e\u7684\u805a\u5408\u5206\u6790\u80fd\u529b\u3002\u5728Apache Doris\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u8fd8\u53d1\u73b0\u4e86\u4e00\u4e9b\u610f\u60f3\u4e0d\u5230\u7684\u6536\u76ca\uff1a\u4f8b\u5982\uff0cRoutine Load\u548c Broker Load\u7684\u5bfc\u5165\u65b9\u5f0f\u8f83\u4e3a\u7b80\u5355\uff0c\u63d0\u5347\u4e86\u67e5\u8be2\u901f\u5ea6\uff1b\u6570\u636e\u5360\u7528\u7a7a\u95f4\u5927\u5e45\u964d\u4f4e\uff1bDoris\u652f\u6301MySQL\u534f\u8bae\uff0c\u65b9\u4fbf\u4e86\u6570\u636e\u5206\u6790\u5e08\u81ea\u52a9\u53d6\u6570\u7ed8\u56fe\u7b49\u3002",date:"2022-12-14",author:"\u8d3a\u7965",tags:["\u6700\u4f73\u5b9e\u8df5"]},n=void 0,o={permalink:"/zh-CN/blog/BestPractice_Kwai",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/BestPractice_Kwai.md",title:"Doris on Es\u5728\u5feb\u624b\u5546\u4e1a\u5316\u7684\u6700\u4f73\u5b9e\u8df5",description:"\x3c!--",date:"2022-12-14T00:00:00.000Z",formattedDate:"2022\u5e7412\u670814\u65e5",tags:[{label:"\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/blog/tags/\u6700\u4f73\u5b9e\u8df5"}],truncated:!1,authors:[{name:"\u8d3a\u7965"}],frontMatter:{title:"Doris on Es\u5728\u5feb\u624b\u5546\u4e1a\u5316\u7684\u6700\u4f73\u5b9e\u8df5",'language": "zh':null,summary:"\u5feb\u624b\u5546\u4e1a\u5316\u62a5\u8868\u5f15\u64ce\u4e3a\u5916\u90e8\u5e7f\u544a\u4e3b\u63d0\u4f9b\u5e7f\u544a\u6295\u653e\u6548\u679c\u7684\u5b9e\u65f6\u591a\u7ef4\u5206\u6790\u62a5\u8868\u5728\u7ebf\u67e5\u8be2\u670d\u52a1\uff0c\u4ee5\u53ca\u4e3a\u5185\u90e8\u5404\u5546\u4e1a\u5316\u7cfb\u7edf\u63d0\u4f9b\u591a\u7ef4\u5206\u6790\u62a5\u8868\u67e5\u8be2\u670d\u52a1\uff0c\u81f4\u529b\u4e8e\u89e3\u51b3\u591a\u7ef4\u5206\u6790\u62a5\u8868\u573a\u666f\u7684\u9ad8\u6027\u80fd\u3001\u9ad8\u5e76\u53d1\u3001\u9ad8\u7a33\u5b9a\u7684\u67e5\u8be2\u95ee\u9898\u3002\u65e9\u671fDruid on Es\u7684\u67b6\u6784\u542b\u6709\u8bf8\u591a\u5f0a\u7aef\uff0c\u901a\u8fc7\u8c03\u7814\u6211\u4eec\u9009\u62e9\u4e86Doris on Es\u7684\u6570\u4ed3\u89e3\u51b3\u65b9\u6848\u3002\u4f7f\u7528Doris \u4e4b\u540e\uff0c\u67e5\u8be2\u53d8\u5f97\u7b80\u5355\u3002\u6211\u4eec\u4ec5\u9700\u8981\u6309\u5929\u540c\u6b65\u4e8b\u5b9e\u8868\u548c\u7ef4\u8868\uff0c\u5728\u67e5\u8be2\u7684\u540c\u65f6 Join\u5373\u53ef\u3002\u901a\u8fc7Doris\u66ff\u4ee3Druid\u3001Clickhouse\u7684\u65b9\u6848\uff0c\u57fa\u672c\u8986\u76d6\u4e86\u6211\u4eec\u4f7f\u7528Druid \u65f6\u7684\u6240\u6709\u573a\u666f\uff0c\u5927\u5927\u63d0\u9ad8\u4e86\u6d77\u91cf\u6570\u636e\u7684\u805a\u5408\u5206\u6790\u80fd\u529b\u3002\u5728Apache Doris\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u8fd8\u53d1\u73b0\u4e86\u4e00\u4e9b\u610f\u60f3\u4e0d\u5230\u7684\u6536\u76ca\uff1a\u4f8b\u5982\uff0cRoutine Load\u548c Broker Load\u7684\u5bfc\u5165\u65b9\u5f0f\u8f83\u4e3a\u7b80\u5355\uff0c\u63d0\u5347\u4e86\u67e5\u8be2\u901f\u5ea6\uff1b\u6570\u636e\u5360\u7528\u7a7a\u95f4\u5927\u5e45\u964d\u4f4e\uff1bDoris\u652f\u6301MySQL\u534f\u8bae\uff0c\u65b9\u4fbf\u4e86\u6570\u636e\u5206\u6790\u5e08\u81ea\u52a9\u53d6\u6570\u7ed8\u56fe\u7b49\u3002",date:"2022-12-14",author:"\u8d3a\u7965",tags:["\u6700\u4f73\u5b9e\u8df5"]},prevItem:{title:"[Doris \u53d1\u7248\u901a\u544a] Apache Doris 1.1.5 Release",permalink:"/zh-CN/blog/release-1.1.5"},nextItem:{title:"\u6700\u4f73\u5b9e\u8df5: Apache Doris \u5728\u5c0f\u7c73\u6570\u636e\u573a\u666f\u7684\u5e94\u7528\u5b9e\u8df5\u4e0e\u4f18\u5316",permalink:"/zh-CN/blog/xiaomi_vector"}},s={authorsImageUrls:[void 0]},u=[{value:"1.1 \u5feb\u624b",id:"11-\u5feb\u624b",level:2},{value:"1.2 \u5feb\u624b\u5546\u4e1a\u5316\u62a5\u8868\u5f15\u64ce",id:"12-\u5feb\u624b\u5546\u4e1a\u5316\u62a5\u8868\u5f15\u64ce",level:2},{value:"2.1 \u9700\u6c42\u80cc\u666f",id:"21-\u9700\u6c42\u80cc\u666f",level:2},{value:"2.2 \u4e1a\u52a1\u9700\u6c42",id:"22-\u4e1a\u52a1\u9700\u6c42",level:2},{value:"2.3 \u521d\u671f\u67b6\u6784\uff1a\u57fa\u4e8eApache Druid\u7684\u67b6\u6784",id:"23-\u521d\u671f\u67b6\u6784\u57fa\u4e8eapache-druid\u7684\u67b6\u6784",level:2},{value:"2.4 \u62a5\u8868\u5f15\u64ce",id:"24-\u62a5\u8868\u5f15\u64ce",level:2},{value:"3 \u57fa\u4e8eApache Doris\u7684\u67b6\u6784",id:"3-\u57fa\u4e8eapache-doris\u7684\u67b6\u6784",level:2},{value:"3.1 \u67b6\u6784\u9057\u7559\u7684\u95ee\u9898",id:"31-\u67b6\u6784\u9057\u7559\u7684\u95ee\u9898",level:2},{value:"3.2 \u9009\u578b\u8c03\u7814",id:"32-\u9009\u578b\u8c03\u7814",level:2},{value:"3.3 Doris+Doris on ES\u5b8c\u7f8e\u914d\u5408",id:"33-dorisdoris-on-es\u5b8c\u7f8e\u914d\u5408",level:2},{value:"3.4 \u57fa\u4e8eDoris on Elasticsearch\u7684\u67b6\u6784\u5b9e\u73b0",id:"34-\u57fa\u4e8edoris-on-elasticsearch\u7684\u67b6\u6784\u5b9e\u73b0",level:2},{value:"3.4.1 \u6570\u636e\u94fe\u8def\u5347\u7ea7",id:"341-\u6570\u636e\u94fe\u8def\u5347\u7ea7",level:3},{value:"3.4.2 \u62a5\u8868\u5f15\u64ce\u9002\u914d\u5347\u7ea7",id:"342-\u62a5\u8868\u5f15\u64ce\u9002\u914d\u5347\u7ea7",level:3},{value:"4.1 \u67e5\u8be2\u54cd\u5e94\u65f6\u95f4",id:"41-\u67e5\u8be2\u54cd\u5e94\u65f6\u95f4",level:2},{value:"4.1.1 \u4e8b\u5b9e\u8868\u67e5\u8be2\u8868\u73b0\u5bf9\u6bd4",id:"411-\u4e8b\u5b9e\u8868\u67e5\u8be2\u8868\u73b0\u5bf9\u6bd4",level:3},{value:"4.1.2 Join\u573a\u666f\u4e0bcube\u8868\u67e5\u8be2\u8868\u73b0\u5bf9\u6bd4",id:"412-join\u573a\u666f\u4e0bcube\u8868\u67e5\u8be2\u8868\u73b0\u5bf9\u6bd4",level:3},{value:"4.1.3 \u6536\u76ca\u603b\u7ed3",id:"413-\u6536\u76ca\u603b\u7ed3",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f5c\u8005\uff1a\u8d3a\u7965\uff0c\u6570\u636e\u67b6\u6784\u9ad8\u7ea7\u5de5\u7a0b\u5e08\uff0c\u5feb\u624b\u5546\u4e1a\u5316\u56e2\u961f")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kv",src:i(21507).Z,width:"900",height:"383"})),(0,r.kt)("h1",{id:"1-\u5173\u4e8e\u5feb\u624b"},"1 \u5173\u4e8e\u5feb\u624b"),(0,r.kt)("h2",{id:"11-\u5feb\u624b"},"1.1 \u5feb\u624b"),(0,r.kt)("p",null,"\u5feb\u624b\uff08HKG: 1024\uff09\u662f\u4e00\u4e2a\u77ed\u89c6\u9891\u548c\u6f6e\u6d41\u793e\u4ea4\u7f51\u7edc\u3002\u53d1\u73b0\u6709\u8da3\u7684\u77ed\u7247\uff0c\u901a\u8fc7\u751f\u6d3b\u4e2d\u7684\u5f55\u97f3\u3001\u89c6\u9891\u3001\u73a9\u65e5\u5e38\u6311\u6218\u6216\u559c\u6b22\u6700\u597d\u7684\u52a8\u6548\u6a21\u7248\u548c\u89c6\u9891\u6765\u4e3a\u865a\u62df\u793e\u533a\u505a\u51fa\u8d21\u732e\u3002\u7528\u77ed\u89c6\u9891\u5206\u4eab\u751f\u6d3b\uff0c\u5e76\u4ece\u6570\u5341\u79cd\u795e\u5947\u7684\u6548\u679c\u548c\u6ee4\u955c\u4e2d\u9009\u62e9\u559c\u6b22\u7684\u65b9\u5f0f\u3002"),(0,r.kt)("h2",{id:"12-\u5feb\u624b\u5546\u4e1a\u5316\u62a5\u8868\u5f15\u64ce"},"1.2 \u5feb\u624b\u5546\u4e1a\u5316\u62a5\u8868\u5f15\u64ce"),(0,r.kt)("p",null,"\u5feb\u624b\u5546\u4e1a\u5316\u62a5\u8868\u5f15\u64ce\u4e3a\u5916\u90e8\u5e7f\u544a\u4e3b\u63d0\u4f9b\u5e7f\u544a\u6295\u653e\u6548\u679c\u7684\u5b9e\u65f6\u591a\u7ef4\u5206\u6790\u62a5\u8868\u5728\u7ebf\u67e5\u8be2\u670d\u52a1\uff0c\u4ee5\u53ca\u4e3a\u5185\u90e8\u5404\u5546\u4e1a\u5316\u7cfb\u7edf\u63d0\u4f9b\u591a\u7ef4\u5206\u6790\u62a5\u8868\u67e5\u8be2\u670d\u52a1\uff0c\u81f4\u529b\u4e8e\u89e3\u51b3\u591a\u7ef4\u5206\u6790\u62a5\u8868\u573a\u666f\u7684\u9ad8\u6027\u80fd\u3001\u9ad8\u5e76\u53d1\u3001\u9ad8\u7a33\u5b9a\u7684\u67e5\u8be2\u95ee\u9898\u3002"),(0,r.kt)("h1",{id:"2-\u521d\u671f\u67b6\u6784"},"2 \u521d\u671f\u67b6\u6784"),(0,r.kt)("h2",{id:"21-\u9700\u6c42\u80cc\u666f"},"2.1 \u9700\u6c42\u80cc\u666f"),(0,r.kt)("p",null,"\u4f20\u7edf OLAP \u5f15\u64ce\u5e94\u5bf9\u591a\u7ef4\u5206\u6790\u65f6\u66f4\u591a\u662f\u4ee5\u9884\u5efa\u6a21\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7\u6784\u5efa\u6570\u636e\u7acb\u65b9\u4f53\uff08Cube\uff09\u5bf9\u4e8b\u5b9e\u6570\u636e\u8fdb\u884c\u4e0b\u94bb\u3001\u4e0a\u5377\u3001\u5207\u7247\u3001\u5207\u5757\u7b49\u64cd\u4f5c\u3002\u73b0\u4ee3 OLAP \u5206\u6790\u5f15\u5165\u4e86\u5173\u7cfb\u6a21\u578b\u7684\u7406\u5ff5\uff0c\u5728\u4e8c\u7ef4\u5173\u7cfb\u8868\u4e2d\u63cf\u7ed8\u6570\u636e\u3002\u800c\u5728\u5efa\u6a21\u8fc7\u7a0b\u4e2d\uff0c\u5f80\u5f80\u6709\u4e24\u79cd\u5efa\u6a21\u65b9\u5f0f\uff0c\u4e00\u662f\u91c7\u7528\u5bbd\u8868\u6a21\u578b\u3001\u5c06\u591a\u5f20\u8868\u7684\u6570\u636e\u901a\u8fc7 Join \u5199\u5165\u8fdb\u4e00\u5f20\u5bbd\u8868\u4e2d\uff0c\u53e6\u4e00\u79cd\u65b9\u5f0f\u662f\u91c7\u7528\u661f\u578b\u6a21\u578b\u3001\u5c06\u6570\u636e\u8868\u533a\u5206\u4e3a\u4e8b\u5b9e\u8868\u548c\u7ef4\u5ea6\u8868\u3001\u67e5\u8be2\u65f6\u5bf9\u4e8b\u5b9e\u8868\u4e0e\u7ef4\u5ea6\u8868\u8fdb\u884c Join \u3002\n\u4ee5\u4e0a\u4e24\u79cd\u65b9\u6848\u5404\u6709\u90e8\u5206\u4f18\u7f3a\u70b9\uff1a"),(0,r.kt)("p",null,"\u5bbd\u8868\u6a21\u578b\uff1a"),(0,r.kt)("p",null,"\u91c7\u53d6\u7a7a\u95f4\u6362\u65f6\u95f4\u7684\u601d\u8def\uff0c\u7406\u8bba\u4e0a\u90fd\u662f\u7ef4\u8868\u4e3b\u952e\u4e3a\u552f\u4e00 ID \u6765\u586b\u5145\u6240\u6709\u7ef4\u5ea6\uff0c\u5197\u4f59\u5b58\u50a8\u4e86\u591a\u6761\u7ef4\u5ea6\u6570\u636e\u3002\u5176\u4f18\u52bf\u5728\u4e8e\u67e5\u8be2\u65f6\u975e\u5e38\u65b9\u4fbf\uff0c\u65e0\u9700\u5173\u8054\u989d\u5916\u7ef4\u8868\uff0c\u6027\u80fd\u8868\u73b0\u66f4\u4f73\u3002\u5176\u5f0a\u7aef\u5728\u4e8e\u5982\u679c\u6709\u7ef4\u5ea6\u6570\u636e\u53d8\u5316\uff0c\u9700\u8981\u5bf9\u5168\u8868\u6570\u636e\u8fdb\u884c\u91cd\u5237\uff0c\u65e0\u6cd5\u652f\u6491\u9ad8\u9891\u7684 Update\u3002"),(0,r.kt)("p",null,"\u661f\u578b\u6a21\u578b\uff1a"),(0,r.kt)("p",null,"\u7ef4\u5ea6\u6570\u636e\u4e0e\u4e8b\u5b9e\u6570\u636e\u5b8c\u5168\u5206\u79bb\uff0c\u7ef4\u5ea6\u6570\u636e\u5f80\u5f80\u7528\u4e13\u95e8\u7684\u5f15\u64ce\u5b58\u50a8 (\u5982 MySQL\u3001Elasticsearch \u7b49)\uff0c\u67e5\u8be2\u65f6\u901a\u8fc7\u4e3b\u952e\u5173\u8054\u67e5\u8be2\u7ef4\u5ea6\u6570\u636e\uff0c\u5176\u4f18\u52bf\u5728\u4e8e\u7ef4\u5ea6\u6570\u636e\u53d8\u5316\u4e0d\u5f71\u54cd\u4e8b\u5b9e\u6570\u636e\u3001\u53ef\u652f\u6301\u9ad8\u9891 Update \u64cd\u4f5c\u3002\u5176\u5f0a\u7aef\u5728\u4e8e\u67e5\u8be2\u903b\u8f91\u76f8\u5bf9\u66f4\u590d\u6742\uff0c\u4e14\u591a\u8868 Join \u53ef\u80fd\u5bfc\u81f4\u6027\u80fd\u53d7\u635f\u3002"),(0,r.kt)("h2",{id:"22-\u4e1a\u52a1\u9700\u6c42"},"2.2 \u4e1a\u52a1\u9700\u6c42"),(0,r.kt)("p",null,"\u5728\u5feb\u624b\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u5546\u4e1a\u5316\u62a5\u8868\u5f15\u64ce\u627f\u8f7d\u4e86\u5916\u90e8\u5e7f\u544a\u4e3b\u5b9e\u65f6\u67e5\u8be2\u5e7f\u544a\u6295\u653e\u6548\u679c\u7684\u9700\u6c42\uff0c\u5728\u6784\u5efa\u62a5\u8868\u5f15\u64ce\u65f6\uff0c\u6211\u4eec\u671f\u671b\u53ef\u4ee5\u6ee1\u8db3\u5982\u4e0b\u8981\u6c42\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8d85\u5927\u6570\u636e\u91cf\uff1a\u5355\u8868\u539f\u59cb\u6570\u636e\u6bcf\u5929\u589e\u91cf\u767e\u4ebf"),(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u9ad8 QPS\uff1a\u5e73\u5747 QPS\u5343\u7ea7\u522b"),(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u7a33\u5b9a\u6027\u8981\u6c42\uff1a\u5728\u7ebf\u670d\u52a1\u8981\u6c42\u7a33\u5b9a\u60274\u4e2a9\n\u6700\u4e3a\u91cd\u8981\u7684\u662f\uff0c\u7531\u4e8e\u7ef4\u5ea6\u6570\u636e\u7ecf\u5e38\u53d1\u751f\u53d8\u66f4\uff0c\u7ef4\u5ea6\u8868\u9700\u8981\u652f\u6301\u9ad8\u8fbe\u4e0a\u5343 QPS \u7684 Update \u64cd\u4f5c\uff0c\u540c\u65f6\u8fd8\u8981\u8fdb\u4e00\u6b65\u652f\u6301\u6a21\u7cca\u5339\u914d\u3001\u5206\u8bcd\u68c0\u7d22\u7b49\u9700\u6c42\u3002\n\u57fa\u4e8e\u4ee5\u4e0a\u9700\u6c42\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u661f\u578b\u6a21\u578b\u6765\u5efa\u6a21\uff0c\u5e76\u4ee5 Apache Druid \u548c Elasticsearch \u4e3a\u6838\u5fc3\u6784\u5efa\u4e86\u65e9\u671f\u7684\u62a5\u8868\u5f15\u64ce\u67b6\u6784\u3002")),(0,r.kt)("h2",{id:"23-\u521d\u671f\u67b6\u6784\u57fa\u4e8eapache-druid\u7684\u67b6\u6784"},"2.3 \u521d\u671f\u67b6\u6784\uff1a\u57fa\u4e8eApache Druid\u7684\u67b6\u6784"),(0,r.kt)("p",null,"\u6211\u4eec\u9009\u62e9\u4e86\u5f15\u64ce\u7ed3\u5408\u7684\u65b9\u5f0f\uff0c\u7528Elasticsearch\u9002\u914dDruid\u5f15\u64ce\u6765\u5b9e\u73b0\u3002\u5728\u6570\u636e\u5199\u5165\u9636\u6bb5\uff0c\u6211\u4eec\u901a\u8fc7Flink\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u949f\u7ea7\u9884\u805a\u5408\uff0c\u5229\u7528Kafka\u5bf9\u6570\u636e\u8fdb\u884c\u5c0f\u65f6\u7ea7\u522b\u7684\u6570\u636e\u9884\u805a\u5408\u3002\u5728\u6570\u636e\u67e5\u8be2\u4e2d\uff0cApp\u7aef\u53d1\u8d77\u67e5\u8be2\u9700\u6c42\uff0c\u5bf9RE Front\u7edf\u4e00\u63a5\u53e3\u8fdb\u884c\u67e5\u8be2\uff0cRe Query\u6839\u636e\u5f15\u64ce\u9002\u914d\uff0c\u5411\u7ef4\u8868\u5f15\u64ce\uff08Elasticsearch\u548cMySQL\uff09\u53ca\u6269\u5c55\u5f15\u64ce\u5206\u522b\u53d1\u8d77\u67e5\u8be2\u3002"),(0,r.kt)("p",null,"Druid\u5219\u662f\u4e00\u6b3e\u57fa\u4e8e\u65f6\u5e8f\u7684\u67e5\u8be2\u5f15\u64ce\uff0c\u652f\u6301\u6570\u636e\u5b9e\u65f6\u6444\u5165\uff0c\u7528\u6765\u5b58\u50a8\u548c\u67e5\u8be2\u5927\u91cf\u7684\u4e8b\u5b9e\u6570\u636e\u3002\u800c\u9009\u7528Elasticsearch\u4f5c\u4e3a\u7ef4\u5ea6\u6570\u636e\u5b58\u50a8\u5f15\u64ce\uff0c\u4e3b\u8981\u662f\u56e0\u4e3a\u5982\u4e0b\u539f\u56e0\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u9ad8\u9891\u5b9e\u65f6\u66f4\u65b0\uff0c\u53ef\u4ee5\u652f\u6491\u4e0a\u5343 QPS\u7684 Update\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5206\u8bcd\u6a21\u7cca\u68c0\u7d22\uff0c\u9002\u7528\u4e8e\u5feb\u624b\u7684\u4e1a\u52a1"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u91cf\u7ea7\u8f83\u9ad8\u7684\u7ef4\u8868\u6570\u636e\uff0c\u4e0d\u7528\u50cfMySQL\u6570\u636e\u5e93\u4e00\u6837\u505a\u5206\u5e93\u5206\u8868\u624d\u80fd\u6ee1\u8db3"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u540c\u6b65\u76d1\u63a7\uff0c\u540c\u65f6\u62e5\u6709\u68c0\u67e5\u548c\u6062\u590d\u7684\u670d\u52a1")),(0,r.kt)("h2",{id:"24-\u62a5\u8868\u5f15\u64ce"},"2.4 \u62a5\u8868\u5f15\u64ce"),(0,r.kt)("p",null,"\u62a5\u8868\u5f15\u64ce\u67b6\u6784\u6574\u4f53\u5206\u4e3aREFront \u548c REQuery\u4e24\u5c42\uff0cREMeta\u4e3a\u72ec\u7acb\u7684\u5143\u6570\u636e\u7ba1\u7406\u6a21\u5757\u3002\u62a5\u8868\u5f15\u64ce\u5728REQuery\u5185\u90e8\u5b9e\u73b0MEM Join\u3002\u652f\u6301Druid\u5f15\u64ce\u4e2d\u7684\u4e8b\u5b9e\u6570\u636e\u4e0eES\u5f15\u64ce\u4e2d\u7684\u7ef4\u5ea6\u6570\u636e\u505a\u5173\u8054\u67e5\u8be2\u3002\u4e3a\u4e0a\u5c42\u4e1a\u52a1\u63d0\u4f9b\u865a\u62df\u7684cube\u8868\u67e5\u8be2\u3002\u5c4f\u853d\u590d\u6742\u7684\u8de8\u5f15\u64ce\u7ba1\u7406\u67e5\u8be2\u903b\u8f91\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1",src:i(21337).Z,width:"864",height:"885"})),(0,r.kt)("h2",{id:"3-\u57fa\u4e8eapache-doris\u7684\u67b6\u6784"},"3 \u57fa\u4e8eApache Doris\u7684\u67b6\u6784"),(0,r.kt)("h2",{id:"31-\u67b6\u6784\u9057\u7559\u7684\u95ee\u9898"},"3.1 \u67b6\u6784\u9057\u7559\u7684\u95ee\u9898"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5728\u4f7f\u7528\u62a5\u8868\u5f15\u64ce\u65f6\uff0c\u53d1\u73b0\u4e86\u8fd9\u6837\u7684\u4e00\u4e2a\u95ee\u9898\u3002Mem Join\u662f\u5355\u673a\u5b9e\u73b0\u4e0e\u4e32\u884c\u6267\u884c\uff0c\u5230\u5355\u6b21\u4eceES\u4e2d\u62c9\u53d6\u7684\u6570\u636e\u91cf\u8d85\u8fc710W\u65f6\uff0c\u54cd\u5e94\u65f6\u95f4\u5df2\u7ecf\u63a5\u8fd110s\uff0c\u7528\u6237\u4f53\u9a8c\u5dee\u3002\u800c\u4e14\u5355\u8282\u70b9\u5b9e\u73b0\u5927\u89c4\u6a21\u6570\u636eJoin\u5904\u7406\uff0c\u5185\u5b58\u6d88\u8017\u5927\uff0c\u6709Full GC\u98ce\u9669\u3002"),(0,r.kt)("p",null,"\u5176\u6b21\uff0cDruid\u7684Lookup Join\u4e86\u529f\u80fd\u4e0d\u591f\u5b8c\u5584\u662f\u4e00\u4e2a\u8f83\u5927\u7684\u95ee\u9898\uff0c\u4e0d\u80fd\u5b8c\u5168\u6ee1\u8db3\u771f\u5b9e\u4e1a\u52a1\u9700\u6c42\u3002"),(0,r.kt)("h2",{id:"32-\u9009\u578b\u8c03\u7814"},"3.2 \u9009\u578b\u8c03\u7814"),(0,r.kt)("p",null,"\u4e8e\u662f\u6211\u4eec\u5bf9\u4e1a\u754c\u5e38\u89c1\u7684 OLAP \u6570\u636e\u5e93\u8fdb\u884c\u4e86\u8c03\u7814\uff0c\u5176\u4e2d\u6700\u5177\u4ee3\u8868\u6027\u7684\u4e3a Apache Doris\u548c Clickhouse\u3002\u5728\u8fdb\u4e00\u6b65\u7684\u8c03\u7814\u4e2d\u6211\u4eec\u53d1\u73b0\uff0cApache Doris\u5728\u5927\u5bbd\u8868Join\u7684\u80fd\u529b\u66f4\u5f3a\u3002ClickHouse\u80fd\u591f\u652f\u6301 Broadcast \u57fa\u4e8e\u5185\u5b58\u7684Join\uff0c\u4f46\u662f\u5bf9\u4e8e\u5927\u6570\u636e\u91cf\u5343\u4e07\u7ea7\u4ee5\u4e0a\u5927\u5bbd\u8868\u7684Join\uff0cClickHouse \u7684\u6027\u80fd\u8868\u73b0\u4e0d\u597d\u3002Doris \u548c Clickhouse \u90fd\u652f\u6301\u660e\u7ec6\u6570\u636e\u5b58\u50a8\uff0c\u4f46Clickhouse\u652f\u6301\u7684\u5e76\u53d1\u5ea6\u8f83\u4f4e\uff0c\u76f8\u53cdDoris\u652f\u6301\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u65f6\u7684\u67e5\u8be2\u670d\u52a1\uff0c\u5355\u673a\u6700\u9ad8\u652f\u6301\u4e0a\u5343QPS\u3002\u5728\u5e76\u53d1\u589e\u52a0\u65f6\uff0c\u7ebf\u6027\u6269\u5145FE\u548cBE\u5373\u53ef\u652f\u6301\u3002\u800cClickhouse\u7684\u6570\u636e\u5bfc\u5165\u6ca1\u6709\u4e8b\u52a1\u652f\u6301\u529f\u80fd\uff0c\u65e0\u6cd5\u5b9e\u73b0exactly once\u8bed\u4e49\uff0c\u5bf9\u6807\u51c6sql\u7684\u652f\u6301\u4e5f\u662f\u6709\u9650\u7684\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0cDoris\u63d0\u4f9b\u4e86\u6570\u636e\u5bfc\u5165\u7684\u4e8b\u52a1\u652f\u6301\u548c\u539f\u5b50\u6027\uff0cDoris \u81ea\u8eab\u80fd\u591f\u4fdd\u8bc1\u4e0d\u4e22\u4e0d\u91cd\u7684\u8ba2\u9605 Kafka \u4e2d\u7684\u6d88\u606f\uff0c\u5373 Exactly-Once \u6d88\u8d39\u8bed\u4e49\u3002ClickHouse\u4f7f\u7528\u95e8\u69db\u9ad8\u3001\u8fd0\u7ef4\u6210\u672c\u9ad8\u548c\u5206\u5e03\u5f0f\u80fd\u529b\u5f31\uff0c\u9700\u8981\u8f83\u591a\u7684\u5b9a\u5236\u5316\u548c\u8f83\u6df1\u7684\u6280\u672f\u5b9e\u529b\u4e5f\u662f\u53e6\u4e00\u4e2a\u96be\u9898\uff0cDoris\u5219\u4e0d\u540c\uff0c\u53ea\u6709FE\u3001BE\u4e24\u4e2a\u6838\u5fc3\u7ec4\u4ef6\uff0c\u5916\u90e8\u4f9d\u8d56\u4e5f\u6bd4\u8f83\u5c11\uff0c\u8fd0\u7ef4\u5feb\u6377\u7b80\u5355\u3002\u6211\u4eec\u8fd8\u53d1\u73b0\uff0c\u7531\u4e8eDoris \u66f4\u52a0\u63a5\u8fd1 MySQL\u534f\u8bae\uff0c\u6bd4\u8d77Clickhouse\u66f4\u52a0\u4fbf\u6377\uff0c\u5728\u8fc1\u79fb\u65f6\u7684\u6210\u672c\u5e76\u4e0d\u5927\u3002\u5728\u6a2a\u5411\u6269\u5bb9\u65b9\u9762\uff0cDoris \u7684\u6269\u7f29\u5bb9\u4e5f\u80fd\u591f\u505a\u5230\u81ea\u5e73\u8861\uff0c\u5927\u5927\u4f18\u4e8eClickhouse\u3002"),(0,r.kt)("p",null,"\u7531\u6b64\u770b\u6765Doris\u53ef\u4ee5\u6bd4\u8f83\u597d\u7684\u63d0\u5347Join\u7684\u6027\u80fd\uff0c\u5728\u8fc1\u79fb\u6210\u672c\u3001\u6a2a\u5411\u6269\u5bb9\u3001\u5e76\u53d1\u7a0b\u5ea6\u7b49\u5176\u4ed6\u65b9\u9762\u4e5f\u6bd4\u8f83\u4f18\u79c0\u3002\u4e0d\u8fc7\u5728\u9ad8\u9891Update\u4e0a\uff0cElasticsearch\u5177\u6709\u5148\u5929\u7684\u4f18\u52bf\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7 Doris \u521b\u5efa ES \u5916\u8868\u7684\u65b9\u5f0f\u6765\u540c\u65f6\u5e94\u5bf9\u9ad8\u9891Upate\u548cJoin\u6027\u80fd\u95ee\u9898\uff0c\u4f1a\u662f\u6bd4\u8f83\u7406\u60f3\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("h2",{id:"33-dorisdoris-on-es\u5b8c\u7f8e\u914d\u5408"},"3.3 Doris+Doris on ES\u5b8c\u7f8e\u914d\u5408"),(0,r.kt)("p",null,"Doris on ES \u7684\u67e5\u8be2\u6027\u80fd\u7a76\u7adf\u5982\u4f55\u5462\uff1f"),(0,r.kt)("p",null,"\u9996\u5148\uff0cApache Doris \u662f\u4e00\u4e2a\u57fa\u4e8eMPP \u67b6\u6784\u7684\u5b9e\u65f6\u5206\u6790\u578b\u6570\u636e\u5e93\uff0c\u6027\u80fd\u5f3a\u52b2\u3001\u6a2a\u5411\u6269\u5c55\u80fd\u529b\u80fd\u529b\u5f3a\u3002Doris on ES\u6784\u5efa\u5728\u8fd9\u4e2a\u80fd\u529b\u4e4b\u4e0a\uff0c\u5e76\u4e14\u5bf9\u67e5\u8be2\u505a\u4e86\u5927\u91cf\u7684\u4f18\u5316\u3002\u5176\u6b21\uff0c\u5728\u8fd9\u4e9b\u4e4b\u4e0a\uff0c\u878d\u5408Elasticsearch\u7684\u80fd\u529b\u4e4b\u540e\uff0c\u6211\u4eec\u8fd8\u5bf9\u67e5\u8be2\u529f\u80fd\u505a\u51fa\u4e86\u5927\u91cf\u7684\u4f18\u5316\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shard\u7ea7\u522b\u5e76\u53d1"),(0,r.kt)("li",{parentName:"ul"},"\u884c\u5217\u626b\u63cf\u81ea\u52a8\u9002\u914d\uff0c\u4f18\u5148\u5217\u5f0f\u626b\u63cf"),(0,r.kt)("li",{parentName:"ul"},"\u987a\u5e8f\u8bfb\u53d6\uff0c\u63d0\u524d\u7ec8\u6b62"),(0,r.kt)("li",{parentName:"ul"},"\u4e24\u9636\u6bb5\u67e5\u8be2\u53d8\u4e3a\u4e00\u9636\u6bb5\u67e5\u8be2"),(0,r.kt)("li",{parentName:"ul"},"Join\u573a\u666f\u4f7f\u7528Broadcast Join\uff0c\u5bf9\u4e8e\u5c0f\u6279\u91cf\u6570\u636eJoin\u7279\u522b\u53cb\u597d")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2",src:i(54882).Z,width:"864",height:"800"})),(0,r.kt)("h2",{id:"34-\u57fa\u4e8edoris-on-elasticsearch\u7684\u67b6\u6784\u5b9e\u73b0"},"3.4 \u57fa\u4e8eDoris on Elasticsearch\u7684\u67b6\u6784\u5b9e\u73b0"),(0,r.kt)("h3",{id:"341-\u6570\u636e\u94fe\u8def\u5347\u7ea7"},"3.4.1 \u6570\u636e\u94fe\u8def\u5347\u7ea7"),(0,r.kt)("p",null,"\u6570\u636e\u94fe\u8def\u7684\u5347\u7ea7\u9002\u914d\u6bd4\u8f83\u7b80\u5355\u3002\u7b2c\u4e00\u6b65\uff0c\u7531Doris\u6784\u5efa\u65b0\u7684Olap\u8868\uff0c\u914d\u7f6e\u597d\u7269\u5316\u89c6\u56fe\u3002\u7b2c\u4e8c\u6b65\uff0c\u57fa\u4e8e\u4e4b\u524d\u4e8b\u5b9e\u6570\u636e\u7684kafka topic\u542f\u52a8routine load\uff0c\u5bfc\u5165\u5b9e\u65f6\u6570\u636e\u3002\u7b2c\u4e09\u6b65\uff0c\u4eceHive\u4e2d\u901abroker load\u5bfc\u5165\u79bb\u7ebf\u6570\u636e\u3002\u6700\u540e\u4e00\u6b65\uff0c\u901a\u8fc7Doris\u521b\u5efaEs\u5916\u8868\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3",src:i(62890).Z,width:"864",height:"629"})),(0,r.kt)("h3",{id:"342-\u62a5\u8868\u5f15\u64ce\u9002\u914d\u5347\u7ea7"},"3.4.2 \u62a5\u8868\u5f15\u64ce\u9002\u914d\u5347\u7ea7"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"4",src:i(73944).Z,width:"864",height:"722"})),(0,r.kt)("p",null,"\u6ce8\uff1a\u4e0a\u56fe\u5173\u8054\u7684mysql\u7ef4\u8868\u662f\u57fa\u4e8e\u672a\u6765\u89c4\u5212\uff0c\u76ee\u524d\u4e3b\u8981\u662fES\u505a\u7ef4\u8868\u5f15\u64ce"),(0,r.kt)("p",null,"\u62a5\u8868\u5f15\u64ce\u9002\u914d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u57fa\u4e8eDoris\u7684\u661f\u578b\u6a21\u578b\u865a\u62dfcube\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u914dcube\u8868\u67e5\u8be2\u89e3\u6790\uff0c\u667a\u80fd\u4e0b\u63a8"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u7070\u5ea6\u4e0a\u7ebf")),(0,r.kt)("h1",{id:"4--\u7ebf\u4e0a\u8868\u73b0"},"4  \u7ebf\u4e0a\u8868\u73b0"),(0,r.kt)("h2",{id:"41-\u67e5\u8be2\u54cd\u5e94\u65f6\u95f4"},"4.1 \u67e5\u8be2\u54cd\u5e94\u65f6\u95f4"),(0,r.kt)("h3",{id:"411-\u4e8b\u5b9e\u8868\u67e5\u8be2\u8868\u73b0\u5bf9\u6bd4"},"4.1.1 \u4e8b\u5b9e\u8868\u67e5\u8be2\u8868\u73b0\u5bf9\u6bd4"),(0,r.kt)("p",null,"Druid"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"5",src:i(8082).Z,width:"864",height:"200"})),(0,r.kt)("p",null,"Doris"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"6",src:i(79862).Z,width:"864",height:"195"})),(0,r.kt)("p",null,"99\u5206\u4f4d\u8017\u65f6Druid\u5927\u6982\u4e3a270ms\uff0cDoris\u4e3a150ms\uff0c\u5ef6\u65f6\u4e0b\u964d45%"),(0,r.kt)("h3",{id:"412-join\u573a\u666f\u4e0bcube\u8868\u67e5\u8be2\u8868\u73b0\u5bf9\u6bd4"},"4.1.2 Join\u573a\u666f\u4e0bcube\u8868\u67e5\u8be2\u8868\u73b0\u5bf9\u6bd4"),(0,r.kt)("p",null,"Druid"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"7",src:i(83942).Z,width:"864",height:"197"})),(0,r.kt)("p",null,"Doris"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"8",src:i(18751).Z,width:"864",height:"193"})),(0,r.kt)("p",null,"99\u5206\u4f4d\u8017\u65f6Druid\u5927\u6982\u4e3a660ms\uff0cDoris\u4e3a440ms\uff0c\u5ef6\u65f6\u4e0b\u964d33%"),(0,r.kt)("h3",{id:"413-\u6536\u76ca\u603b\u7ed3"},"4.1.3 \u6536\u76ca\u603b\u7ed3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"P99\u6574\u4f53\u8017\u65f6\u4e0b\u964d35%\u5de6\u53f3"),(0,r.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u8282\u770150%\u5de6\u53f3"),(0,r.kt)("li",{parentName:"ul"},"\u53bb\u9664\u62a5\u8868\u5f15\u64ce\u5185\u90e8Mem Join\u7684\u590d\u6742\u903b\u8f91\uff0c\u4e0b\u6c89\u81f3Doris\u901a\u8fc7DOE\u5b9e\u73b0\uff0c\u5728\u5927\u67e5\u8be2\u573a\u666f\u4e0b(\u7ef4\u8868\u7ed3\u679c\u8d85\u8fc710W\uff0c\u6027\u80fd\u63d0\u5347\u8d85\u8fc710\u500d\uff0c10s->1s)"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u4e30\u5bcc\u7684\u67e5\u8be2\u8bed\u4e49(\u539f\u672cMem Join\u5b9e\u73b0\u6bd4\u8f83\u7b80\u5355\uff0c\u4e0d\u652f\u6301\u590d\u6742\u7684\u67e5\u8be2)")),(0,r.kt)("h1",{id:"5--\u603b\u7ed3\u4e0e\u672a\u6765\u89c4\u5212"},"5  \u603b\u7ed3\u4e0e\u672a\u6765\u89c4\u5212"),(0,r.kt)("p",null,"\u5728\u5feb\u624b\u5546\u4e1a\u5316\u4e1a\u52a1\u91cc\u9762\uff0c\u7ef4\u5ea6\u6570\u636e\u4e0e\u4e8b\u5b9e\u6570\u636eJoin\u67e5\u8be2\u662f\u975e\u5e38\u666e\u904d\u7684\u3002\u4f7f\u7528Doris \u4e4b\u540e\uff0c\u67e5\u8be2\u53d8\u5f97\u7b80\u5355\u3002\u6211\u4eec\u4ec5\u9700\u8981\u6309\u5929\u540c\u6b65\u4e8b\u5b9e\u8868\u548c\u7ef4\u8868\uff0c\u5728\u67e5\u8be2\u7684\u540c\u65f6 Join\u5373\u53ef\u3002\u901a\u8fc7Doris\u66ff\u4ee3Druid\u3001Clickhouse\u7684\u65b9\u6848\uff0c\u57fa\u672c\u8986\u76d6\u4e86\u6211\u4eec\u4f7f\u7528Druid \u65f6\u7684\u6240\u6709\u573a\u666f\uff0c\u5927\u5927\u63d0\u9ad8\u4e86\u6d77\u91cf\u6570\u636e\u7684\u805a\u5408\u5206\u6790\u80fd\u529b\u3002\u5728Apache Doris\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u8fd8\u53d1\u73b0\u4e86\u4e00\u4e9b\u610f\u60f3\u4e0d\u5230\u7684\u6536\u76ca\uff1a\u4f8b\u5982\uff0cRoutine Load\u548c Broker Load\u7684\u5bfc\u5165\u65b9\u5f0f\u8f83\u4e3a\u7b80\u5355\uff0c\u63d0\u5347\u4e86\u67e5\u8be2\u901f\u5ea6\uff1b\u6570\u636e\u5360\u7528\u7a7a\u95f4\u5927\u5e45\u964d\u4f4e\uff1bDoris\u652f\u6301MySQL\u534f\u8bae\uff0c\u65b9\u4fbf\u4e86\u6570\u636e\u5206\u6790\u5e08\u81ea\u52a9\u53d6\u6570\u7ed8\u56fe\u7b49\u3002"),(0,r.kt)("p",null,"\u5c3d\u7ba1Doris on ES\u7684\u89e3\u51b3\u65b9\u6848\u6bd4\u8f83\u6210\u529f\u7684\u6ee1\u8db3\u4e86\u6211\u4eec\u7684\u62a5\u8868\u4e1a\u52a1\uff0cES\u5916\u8868\u6620\u5c04\u4ecd\u7136\u9700\u8981\u624b\u5de5\u5efa\u8868\u3002\u4f46Apache Doris\u4e8e\u8fd1\u65e5\u5b8c\u6210\u4e86\u6700\u65b0\u7248\u672cV1.2.0\u7684\u53d1\u5e03\uff0c\u65b0\u7248\u672c\u529f\u80fd\u65b0\u589e\u4e86Multi-Catlog\uff0c\u63d0\u4f9b\u4e86\u65e0\u7f1d\u63a5\u5165Hive\u3001ES\u3001Hudi\u3001Iceberg \u7b49\u5916\u90e8\u6570\u636e\u6e90\u7684\u80fd\u529b\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 CREATE CATALOG \u547d\u4ee4\u8fde\u63a5\u5230\u5916\u90e8\u6570\u636e\u6e90\uff0cDoris \u4f1a\u81ea\u52a8\u6620\u5c04\u5916\u90e8\u6570\u636e\u6e90\u7684\u5e93\u3001\u8868\u4fe1\u606f\u3002\u5982\u6b64\u4e00\u6765\uff0c\u4ee5\u540e\u6211\u4eec\u5c31\u4e0d\u9700\u8981\u518d\u624b\u52a8\u521b\u5efaEs\u5916\u8868\u5b8c\u6210\u6620\u5c04\uff0c\u5927\u5927\u8282\u7701\u4e86\u5f00\u53d1\u7684\u65f6\u95f4\u6210\u672c\uff0c\u63d0\u5347\u4e86\u7814\u53d1\u6548\u7387\u3002\u800c\u5168\u9762\u5411\u91cf\u5316\u3001Ligt Schema Change\u3001Merge-on-Write\u3001Java UDF\u7b49\u5176\u4ed6\u65b0\u529f\u80fd\u7684\u5b9e\u73b0\uff0c\u4e5f\u8ba9\u6211\u4eec\u5bf9Apache Doris\u6709\u4e86\u5168\u65b0\u7684\u671f\u5f85\u3002\u795d\u798fApache Doris\uff01"),(0,r.kt)("h1",{id:"\u8054\u7cfb\u6211\u4eec"},"\u8054\u7cfb\u6211\u4eec"),(0,r.kt)("p",null,"\u5b98\u7f51\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://doris.apache.org"},"http://doris.apache.org")),(0,r.kt)("p",null,"Github\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris"},"https://github.com/apache/doris")),(0,r.kt)("p",null,"dev\u90ae\u4ef6\u7ec4\uff1a",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@doris.apache.org"},"dev@doris.apache.org")))}d.isMDXComponent=!0},21337:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/1-ca39b5dcdd3d69d8fee822dc1b74a2e5.png"},54882:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/2-b0e578721df866bb977d80072c559f32.png"},62890:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/3-1c0a381d13453a0e975d97ffab096981.png"},73944:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/4-3fca61e78e95bd16fad48de37ee7124f.png"},8082:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/5-4ce2b0396e8e14ac9e536befcf11cfd0.png"},79862:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/6-80fe6a32cf89065b0323afca7038f0ba.png"},83942:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/7-30f72edbee75326a65e006652a846e63.png"},18751:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/8-b9485387d33cb96f36fdcaf09999ce2a.png"},21507:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/kv-846e4e39fd88e1e34d2474b23690d9b2.png"}}]);