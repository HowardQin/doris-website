"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[75e3],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(t),h=i,g=c["".concat(u,".").concat(h)]||c[h]||m[h]||r;return t?a.createElement(g,l(l({ref:n},s),{},{components:t})):a.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=h;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},77008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={title:"[Doris \u53d1\u7248\u901a\u544a] Apache Doris(Incubating) 1.0.0 Release",summary:"[Doris \u53d1\u7248\u901a\u544a] Apache Doris(Incubating) 1.0.0 Release",date:"2022-04-18",author:"Apache Doris",tags:["\u7248\u672c\u53d1\u5e03"]},l=void 0,o={permalink:"/zh-CN/blog/release-note-1.0.0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/release-note-1.0.0.md",title:"[Doris \u53d1\u7248\u901a\u544a] Apache Doris(Incubating) 1.0.0 Release",description:"\x3c!--",date:"2022-04-18T00:00:00.000Z",formattedDate:"2022\u5e744\u670818\u65e5",tags:[{label:"\u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/tags/\u7248\u672c\u53d1\u5e03"}],truncated:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"[Doris \u53d1\u7248\u901a\u544a] Apache Doris(Incubating) 1.0.0 Release",summary:"[Doris \u53d1\u7248\u901a\u544a] Apache Doris(Incubating) 1.0.0 Release",date:"2022-04-18",author:"Apache Doris",tags:["\u7248\u672c\u53d1\u5e03"]},prevItem:{title:"\u5f00\u6e90\u5b9e\u65f6\u5206\u6790\u578b\u6570\u636e\u5e93 Apache Doris \u6b63\u5f0f\u6210\u4e3a\u9876\u7ea7\u9879\u76ee",permalink:"/zh-CN/blog/Annoucing"},nextItem:{title:"[Doris \u53d1\u7248\u901a\u544a] Apache Doris(Incubating) 0.15.0 Release",permalink:"/zh-CN/blog/release-note-0.15.0"}},u={authorsImageUrls:[void 0]},p=[{value:"\u91cd\u8981\u66f4\u65b0",id:"\u91cd\u8981\u66f4\u65b0",level:2},{value:"\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce Experimental",id:"\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce-experimental",level:3},{value:"Lateral View \u8bed\u6cd5 Experimental",id:"lateral-view-\u8bed\u6cd5-experimental",level:3},{value:"Hive \u5916\u8868 Experimental",id:"hive-\u5916\u8868-experimental",level:3},{value:"\u652f\u6301 Z-Order \u6570\u636e\u6392\u5e8f\u683c\u5f0f",id:"\u652f\u6301-z-order-\u6570\u636e\u6392\u5e8f\u683c\u5f0f",level:3},{value:"\u652f\u6301 Apache SeaTunnel\uff08Incubating\uff09\u63d2\u4ef6",id:"\u652f\u6301-apache-seatunnelincubating\u63d2\u4ef6",level:3},{value:"\u65b0\u589e\u51fd\u6570",id:"\u65b0\u589e\u51fd\u6570",level:3},{value:"\u91cd\u8981\u4f18\u5316",id:"\u91cd\u8981\u4f18\u5316",level:3},{value:"\u529f\u80fd\u4f18\u5316",id:"\u529f\u80fd\u4f18\u5316",level:3},{value:"\u6613\u7528\u6027\u6539\u8fdb",id:"\u6613\u7528\u6027\u6539\u8fdb",level:3},{value:"\u91cd\u8981 Bug \u4fee\u590d",id:"\u91cd\u8981-bug-\u4fee\u590d",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"\u66f4\u65b0\u65e5\u5fd7",id:"\u66f4\u65b0\u65e5\u5fd7",level:2},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",level:2}],s={toc:p},c="wrapper";function m(e){let{components:n,...r}=e;return(0,i.kt)(c,(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"apache-dorisincubating-100-release"},"Apache Doris(Incubating) 1.0.0 Release"),(0,i.kt)("p",null,"\u4eb2\u7231\u7684\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\uff0c\u5386\u65f6\u6570\u6708\uff0c\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03\uff0cApache Doris (incubating) \u4e8e 2022 \u5e74 4 \u6708 18 \u65e5\u8fce\u6765\u4e86 1.0 Release \u7248\u672c\u7684\u6b63\u5f0f\u53d1\u5e03\uff01",(0,i.kt)("strong",{parentName:"p"},"\u8fd9\u662f Apache Doris \u5728\u8fdb\u5165 Apache \u57fa\u91d1\u4f1a\u5b75\u5316\u4ee5\u6765\u7684\u7b2c\u4e00\u4e2a 1 \u4f4d\u7248\u672c\uff0c\u4e5f\u662f\u8fc4\u4eca\u4e3a\u6b62\u5bf9 Apache Doris \u6838\u5fc3\u4ee3\u7801\u91cd\u6784\u5e45\u5ea6\u6700\u5927\u7684\u4e00\u4e2a\u7248\u672c","*","*"),"\uff01",(0,i.kt)("strong",{parentName:"p"},"\u6709 "),"114 \u4f4d Contributor",(0,i.kt)("strong",{parentName:"p"}," \u4e3a Apache Doris \u63d0\u4ea4\u4e86"),"\u8d85\u8fc7 660 \u9879\u4f18\u5316\u548c\u4fee\u590d","*","*","\uff0c\u611f\u8c22\u6bcf\u4e00\u4e2a\u8ba9 Apache Doris \u53d8\u5f97\u66f4\u597d\u7684\u4f60\uff01"),(0,i.kt)("p",null,"\u5728 1.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u3001Hive \u5916\u90e8\u8868\u3001Lateral View \u8bed\u6cd5\u53ca Table Function \u8868\u51fd\u6570\u3001Z-Order \u6570\u636e\u7d22\u5f15\u3001Apache SeaTunnel \u63d2\u4ef6\u7b49\u91cd\u8981\u529f\u80fd\uff0c\u589e\u52a0\u4e86\u5bf9 Flink CDC \u540c\u6b65\u66f4\u65b0\u548c\u5220\u9664\u6570\u636e\u7684\u652f\u6301\uff0c\u4f18\u5316\u4e86\u8bf8\u591a\u6570\u636e\u5bfc\u5165\u548c\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u7684\u95ee\u9898\uff0c\u5bf9 Apache Doris \u7684\u67e5\u8be2\u6027\u80fd\u3001\u6613\u7528\u6027\u3001\u7a33\u5b9a\u6027\u7b49\u591a\u65b9\u7279\u6548\u8fdb\u884c\u4e86\u5168\u9762\u52a0\u5f3a\uff0c\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f7f\u7528\uff01\u70b9\u51fb\u6587\u672b\u201c",(0,i.kt)("strong",{parentName:"p"},"\u9605\u8bfb\u539f\u6587"),"\u201d\u5373\u53ef\u76f4\u63a5\u524d\u5f80\u4e0b\u8f7d\u5730\u5740\u3002"),(0,i.kt)("p",null,"\u6bcf\u4e00\u4e2a\u4e0d\u66fe\u53d1\u7248\u7684\u65e5\u5b50\uff0c\u80cc\u540e\u90fd\u6709\u65e0\u6570\u8d21\u732e\u8005\u6795\u6208\u5f85\u65e6\uff0c\u4e0d\u6562\u505c\u6b47\u534a\u5206\u3002\u5728\u6b64\u6211\u4eec\u5c24\u5176\u8981\u611f\u8c22\u6765\u81ea",(0,i.kt)("strong",{parentName:"p"},"\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u3001\u67e5\u8be2\u4f18\u5316\u5668\u3001\u53ef\u89c6\u5316\u8fd0\u7ef4\u5e73\u53f0 \u7b49 SIG \uff08\u4e13\u9879\u5174\u8da3\u5c0f\u7ec4\uff09\u7684\u5c0f\u4f19\u4f34"),"\u3002\u81ea 2021 \u5e74 8 \u6708 Apache Doris \u793e\u533a SIG \u5c0f\u7ec4\u6210\u7acb\u4ee5\u6765\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u6765\u81ea\u767e\u5ea6\u3001\u7f8e\u56e2\u3001\u5c0f\u7c73\u3001\u4eac\u4e1c\u3001\u8700\u6d77\u3001\u5b57\u8282\u8df3\u52a8\u3001\u817e\u8baf\u3001\u7f51\u6613\u3001\u963f\u91cc\u5df4\u5df4\u3001PingCAP\u3001Nebula Graph \u7b49\u5341\u4f59\u5bb6\u516c\u53f8\u7684\u6570\u5341\u540d\u8d21\u732e\u8005"),"\u4f5c\u4e3a\u9996\u6279\u6210\u5458\u52a0\u5165\u5230 SIG \u4e2d\uff0c\u7b2c\u4e00\u6b21\u4ee5\u4e13\u9879\u5c0f\u7ec4\u7684\u5f00\u6e90\u534f\u4f5c\u5f62\u5f0f\u5b8c\u6210\u4e86\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u3001\u67e5\u8be2\u4f18\u5316\u5668\u3001 Doris Manager \u53ef\u89c6\u5316\u76d1\u63a7\u8fd0\u7ef4\u5e73\u53f0\u7b49\u5982\u6b64\u91cd\u5927\u529f\u80fd\u7684\u5f00\u53d1\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u5386\u65f6\u534a\u5e74\u4ee5\u4e0a\u3001\u5f00\u5c55\u6280\u672f\u8c03\u7814\u548c\u5206\u4eab\u6570\u5341\u6b21\u3001\u53ec\u5f00\u8fdc\u7a0b\u4f1a\u8bae\u8fd1\u767e\u6b21\u3001\u7d2f\u8ba1\u63d0\u4ea4 Commits \u591a\u8fbe\u6570\u767e\u4e2a\u3001\u6d89\u53ca\u4ee3\u7801\u884c\u6570\u9ad8\u8fbe\u5341\u4f59\u4e07\u884c"),"\uff0c\u6b63\u662f\u56e0\u4e3a\u6709\u4ed6\u4eec\u7684\u8d21\u732e\uff0c\u624d\u6709 1.0 \u7248\u672c\u7684\u95ee\u4e16\uff0c\u8ba9\u6211\u4eec\u518d\u6b21\u5bf9\u4ed6\u4eec\u7684\u8f9b\u52e4\u4ed8\u51fa\u8868\u793a\u6700\u771f\u8bda\u7684\u611f\u8c22\uff01"),(0,i.kt)("p",null,"\u4e0e\u6b64\u540c\u65f6\uff0cApache Doris \u7684\u8d21\u732e\u8005\u6570\u91cf\u5df2\u8d85\u8fc7 300 \u4eba\uff0c\u6bcf\u6708\u6d3b\u8dc3\u7684\u8d21\u732e\u8005\u6570\u91cf\u8d85\u8fc7\u4e86 60 \u4eba\uff0c\u8fd1\u51e0\u5468\u5e73\u5747\u6bcf\u5468\u63d0\u4ea4\u7684 Commits \u6570\u91cf\u4e5f\u8d85\u8fc7 80\uff0c\u793e\u533a\u805a\u96c6\u7684\u5f00\u53d1\u8005\u89c4\u6a21\u53ca\u6d3b\u8dc3\u5ea6\u5df2\u7ecf\u6709\u4e86\u6781\u5927\u7684\u63d0\u5347\u3002\u6211\u4eec\u5341\u5206\u671f\u5f85\u6709\u66f4\u591a\u7684\u5c0f\u4f19\u4f34\u53c2\u4e0e\u793e\u533a\u8d21\u732e\u4e2d\u6765\uff0c\u4e0e\u6211\u4eec\u4e00\u9053\u628a Apache Doris \u6253\u9020\u6210\u5168\u7403\u9876\u7ea7\u7684\u5206\u6790\u578b\u6570\u636e\u5e93\uff0c\u4e5f\u671f\u5f85\u6240\u6709\u5c0f\u4f19\u4f34\u53ef\u4ee5\u4e0e\u6211\u4eec\u4e00\u8d77\u6536\u83b7\u5b9d\u8d35\u7684\u6210\u957f\u3002\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u793e\u533a\uff0c\u6b22\u8fce\u901a\u8fc7\u5f00\u53d1\u8005\u90ae\u7bb1 ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@doris.apache.org"},"dev@doris.apache.org")," \u4e0e\u6211\u4eec\u53d6\u5f97\u8054\u7cfb\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u6b22\u8fce\u5927\u5bb6\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u6709\u4efb\u4f55\u95ee\u9898\u901a\u8fc7 GitHub Discussion \u6216\u8005 Dev \u90ae\u4ef6\u7ec4\u4e0e\u6211\u4eec\u53d6\u5f97\u8054\u7cfb\uff0c\u4e5f\u671f\u5f85\u5927\u5bb6\u53c2\u4e0e\u793e\u533a\u8ba8\u8bba\u548c\u5efa\u8bbe\u4e2d \u3002"),(0,i.kt)("h2",{id:"\u91cd\u8981\u66f4\u65b0"},"\u91cd\u8981\u66f4\u65b0"),(0,i.kt)("h3",{id:"\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce-experimental"},"\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce ","[Experimental]"),(0,i.kt)("p",null,"\u8fc7\u53bb Apache Doris \u7684 SQL \u6267\u884c\u5f15\u64ce\u662f\u57fa\u4e8e\u884c\u5f0f\u5185\u5b58\u683c\u5f0f\u4ee5\u53ca\u57fa\u4e8e\u4f20\u7edf\u7684\u706b\u5c71\u6a21\u578b\u8fdb\u884c\u8bbe\u8ba1\u7684\uff0c\u5728\u8fdb\u884c SQL \u7b97\u5b50\u4e0e\u51fd\u6570\u8fd0\u7b97\u65f6\u5b58\u5728\u975e\u5fc5\u8981\u7684\u5f00\u9500\uff0c\u5bfc\u81f4 Apache Doris \u6267\u884c\u5f15\u64ce\u7684\u6548\u7387\u53d7\u9650\uff0c\u5e76\u4e0d\u9002\u5e94\u73b0\u4ee3 CPU \u7684\u4f53\u7cfb\u7ed3\u6784\u3002\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u7684\u76ee\u6807\u662f\u66ff\u6362 Apache Doris \u5f53\u524d\u7684\u884c\u5f0f SQL \u6267\u884c\u5f15\u64ce\uff0c\u5145\u5206\u91ca\u653e\u73b0\u4ee3 CPU \u7684\u8ba1\u7b97\u80fd\u529b\uff0c\u7a81\u7834\u5728 SQL \u6267\u884c\u5f15\u64ce\u4e0a\u7684\u6027\u80fd\u9650\u5236\uff0c\u53d1\u6325\u51fa\u6781\u81f4\u7684\u6027\u80fd\u8868\u73b0\u3002"),(0,i.kt)("p",null,"\u57fa\u4e8e\u73b0\u4ee3 CPU \u7684\u7279\u70b9\u4e0e\u706b\u5c71\u6a21\u578b\u7684\u6267\u884c\u7279\u70b9\uff0c\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u91cd\u65b0\u8bbe\u8ba1\u4e86\u5728\u5217\u5f0f\u5b58\u50a8\u7cfb\u7edf\u7684 SQL \u6267\u884c\u5f15\u64ce\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u7ec4\u7ec7\u5185\u5b58\u7684\u6570\u636e\u7ed3\u6784\uff0c\u7528 Column \u66ff\u6362 Tuple\uff0c\u63d0\u9ad8\u4e86\u8ba1\u7b97\u65f6 Cache \u4eb2\u548c\u5ea6\uff0c\u5206\u652f\u9884\u6d4b\u4e0e\u9884\u53d6\u5185\u5b58\u7684\u53cb\u597d\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"\u5206\u6279\u8fdb\u884c\u7c7b\u578b\u5224\u65ad\uff0c\u5728\u672c\u6b21\u6279\u6b21\u4e2d\u90fd\u4f7f\u7528\u7c7b\u578b\u5224\u65ad\u65f6\u786e\u5b9a\u7684\u7c7b\u578b\uff0c\u5c06\u6bcf\u4e00\u884c\u7c7b\u578b\u5224\u65ad\u7684\u865a\u51fd\u6570\u5f00\u9500\u5206\u644a\u5230\u6279\u91cf\u7ea7\u522b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6279\u7ea7\u522b\u7684\u7c7b\u578b\u5224\u65ad\uff0c\u6d88\u9664\u4e86\u865a\u51fd\u6570\u7684\u8c03\u7528\uff0c\u8ba9\u7f16\u8bd1\u5668\u6709\u51fd\u6570\u5185\u8054\u4ee5\u53ca SIMD \u4f18\u5316\u7684\u673a\u4f1a")),(0,i.kt)("p",null,"\u4ece\u800c\u5927\u5927\u63d0\u9ad8\u4e86 CPU \u5728 SQL \u6267\u884c\u65f6\u7684\u6548\u7387\uff0c\u63d0\u5347\u4e86 SQL \u67e5\u8be2\u7684\u6027\u80fd\u3002"),(0,i.kt)("p",null,"\u5728 Apache Doris 1.0 \u7248\u672c\u4e2d\uff0c\u901a\u8fc7 set batch_size = 4096 \u548c set enable_vectorized_engine = true \u5f00\u542f\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\uff0c\u591a\u6570\u60c5\u51b5\u4e0b\u53ef\u663e\u8457\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u3002\u5728 SSB \u548c OnTime \u6807\u51c6\u6d4b\u8bd5\u6570\u636e\u96c6\u4e0b\uff0c\u591a\u8868\u5173\u8054\u548c\u5bbd\u5217\u67e5\u8be2\u4e24\u5927\u573a\u666f\u7684\u6574\u4f53\u6027\u80fd\u5206\u522b\u6709 3 \u500d\u548c 2.6 \u500d\u7684\u63d0\u5347\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(42399).Z,width:"1080",height:"697"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(36650).Z,width:"1080",height:"819"})),(0,i.kt)("h3",{id:"lateral-view-\u8bed\u6cd5-experimental"},"Lateral View \u8bed\u6cd5 ","[Experimental]"),(0,i.kt)("p",null,"\u901a\u8fc7 Lateral View \u8bed\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 explod_bitmap \u3001explode_split\u3001explode_jaon_array \u7b49 Table Function \u8868\u51fd\u6570\uff0c\u5c06 bitmap\u3001String \u6216 Json Array \u7531\u4e00\u5217\u5c55\u5f00\u6210\u591a\u884c\uff0c\u4ee5\u4fbf\u540e\u7eed\u53ef\u4ee5\u5bf9\u5c55\u5f00\u7684\u6570\u636e\u8fdb\u884c\u8fdb\u4e00\u6b65\u5904\u7406\uff08\u5982 Filter\u3001Join \u7b49\uff09\u3002"),(0,i.kt)("h3",{id:"hive-\u5916\u8868-experimental"},"Hive \u5916\u8868 ","[Experimental]"),(0,i.kt)("p",null,"Hive External Table \u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u901a\u8fc7 Doris \u76f4\u63a5\u8bbf\u95ee Hive \u8868\u7684\u80fd\u529b\uff0c\u5916\u90e8\u8868\u7701\u53bb\u4e86 \u7e41\u7410\u7684\u6570\u636e\u5bfc\u5165\u5de5\u4f5c\uff0c\u53ef\u4ee5\u501f\u52a9 Doris \u672c\u8eab OLAP \u7684\u80fd\u529b\u6765\u89e3\u51b3 Hive \u8868\u7684\u6570\u636e\u5206\u6790\u95ee\u9898\u3002\u5f53\u524d\u7248\u672c\u652f\u6301\u5c06 Hive \u6570\u636e\u6e90\u63a5\u5165 Doris\uff0c\u5e76\u652f\u6301\u901a\u8fc7 Doris \u4e0e Hive \u6570\u636e\u6e90\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u8054\u90a6\u67e5\u8be2\uff0c\u8fdb\u884c\u66f4\u52a0\u590d\u6742\u7684\u5206\u6790\u64cd\u4f5c\u3002"),(0,i.kt)("h3",{id:"\u652f\u6301-z-order-\u6570\u636e\u6392\u5e8f\u683c\u5f0f"},"\u652f\u6301 Z-Order \u6570\u636e\u6392\u5e8f\u683c\u5f0f"),(0,i.kt)("p",null,"Apache Doris \u6570\u636e\u662f\u6309\u7167\u524d\u7f00\u5217\u6392\u5e8f\u5b58\u50a8\u7684\uff0c\u56e0\u6b64\u5728\u5305\u542b\u524d\u7f00\u67e5\u8be2\u6761\u4ef6\u65f6\uff0c\u53ef\u4ee5\u5728\u6392\u5e8f\u6570\u636e\u4e0a\u8fdb\u884c\u5feb\u901f\u7684\u6570\u636e\u67e5\u627e\uff0c\u4f46\u5982\u679c\u67e5\u8be2\u6761\u4ef6\u4e0d\u662f\u524d\u7f00\u5217\uff0c\u5219\u65e0\u6cd5\u5229\u7528\u6570\u636e\u6392\u5e8f\u7684\u7279\u5f81\u8fdb\u884c\u5feb\u901f\u6570\u636e\u67e5\u627e\u3002\u901a\u8fc7 Z-Order Indexing \u53ef\u4ee5\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\uff0c\u5728 1.0 \u7248\u672c\u4e2d\u6211\u4eec\u589e\u52a0\u4e86 Z-Order \u6570\u636e\u6392\u5e8f\u683c\u5f0f\uff0c\u5728\u770b\u677f\u7c7b\u591a\u5217\u67e5\u8be2\u7684\u573a\u666f\u4e2d\u53ef\u4ee5\u8d77\u5230\u5f88\u597d\u8fc7\u6ee4\u6548\u679c\uff0c\u52a0\u901f\u5bf9\u975e\u524d\u7f00\u5217\u6761\u4ef6\u7684\u8fc7\u6ee4\u6027\u80fd\u3002"),(0,i.kt)("h3",{id:"\u652f\u6301-apache-seatunnelincubating\u63d2\u4ef6"},"\u652f\u6301 Apache SeaTunnel\uff08Incubating\uff09\u63d2\u4ef6"),(0,i.kt)("p",null,"Apache SeaTunnel \u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u5206\u5e03\u5f0f\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u67b6\u6784\u4e8e Apache Spark \u548c Apache Flink \u4e4b\u4e0a\u3002\u5728 Apache Doris 1.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u589e\u52a0\u4e86 SaeTunnel \u63d2\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u501f\u52a9 Apache SeaTunnel \u8fdb\u884c\u591a\u6570\u636e\u6e90\u4e4b\u95f4\u7684\u540c\u6b65\u548c ETL\u3002"),(0,i.kt)("h3",{id:"\u65b0\u589e\u51fd\u6570"},"\u65b0\u589e\u51fd\u6570"),(0,i.kt)("p",null,"\u652f\u6301\u66f4\u591a bitmap \u51fd\u6570\uff0c\u5177\u4f53\u53ef\u67e5\u770b\u51fd\u6570\u624b\u518c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bitmap_max"),(0,i.kt)("li",{parentName:"ul"},"bitmap_and_not"),(0,i.kt)("li",{parentName:"ul"},"bitmap_and_not_count"),(0,i.kt)("li",{parentName:"ul"},"bitmap_has_all"),(0,i.kt)("li",{parentName:"ul"},"bitmap_and_count"),(0,i.kt)("li",{parentName:"ul"},"bitmap_or_count"),(0,i.kt)("li",{parentName:"ul"},"bitmap_xor_count"),(0,i.kt)("li",{parentName:"ul"},"bitmap_subset_limit"),(0,i.kt)("li",{parentName:"ul"},"sub_bitmap")),(0,i.kt)("p",null,"\u652f\u6301\u56fd\u5bc6\u7b97\u6cd5 SM3/SM4\uff1b"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u4ee5\u4e0a\u6807\u8bb0 ","[Experimental]"," \u7684\u529f\u80fd\u4e3a\u5b9e\u9a8c\u6027\u529f\u80fd\uff0c\u6211\u4eec\u5c06\u4f1a\u5728\u540e\u7eed\u7248\u672c\u4e2d\u5bf9\u4ee5\u4e0a\u529f\u80fd\u8fdb\u884c\u6301\u7eed\u4f18\u5316\u548c\u8fed\u4ee3\uff0c\u5e76\u540e\u7eed\u7248\u672c\u4e2d\u8fdb\u4e00\u6b65\u5b8c\u5584\u3002\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u6709\u4efb\u4f55\u95ee\u9898\u6216\u610f\u89c1\uff0c\u6b22\u8fce\u968f\u65f6\u4e0e\u6211\u4eec\u8054\u7cfb")),(0,i.kt)("h3",{id:"\u91cd\u8981\u4f18\u5316"},"\u91cd\u8981\u4f18\u5316"),(0,i.kt)("h3",{id:"\u529f\u80fd\u4f18\u5316"},"\u529f\u80fd\u4f18\u5316"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u5927\u6279\u91cf\u5bfc\u5165\u65f6\uff0c\u751f\u6210\u7684 Segment \u6587\u4ef6\u6570\u91cf\uff0c\u4ee5\u964d\u4f4e Compaction \u538b\u529b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7 BRPC \u7684 attachment \u529f\u80fd\u4f20\u8f93\u6570\u636e\uff0c\u4ee5\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u7684\u964d\u4f4e\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u5f00\u9500\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u76f4\u63a5\u8fd4\u56de HLL/BITMAP \u7c7b\u578b\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u7528\u4e8e\u4e1a\u52a1\u5728\u5916\u4fa7\u89e3\u6790\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f18\u5316\u5e76\u964d\u4f4e BRPC \u51fa\u73b0 OVERCROWDED \u548c NOT_CONNECTED \u9519\u8bef\u7684\u6982\u7387\uff0c\u589e\u5f3a\u7cfb\u7edf\u7a33\u5b9a\u6027\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u589e\u5f3a\u5bfc\u5165\u7684\u5bb9\u9519\u6027\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7 Flink CDC \u540c\u6b65\u66f4\u65b0\u548c\u5220\u9664\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u9002\u5e94\u7684 Runtime Filter\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u663e\u8457\u964d\u4f4e insert into \u64cd\u4f5c\u7684\u5185\u5b58\u5360\u7528")),(0,i.kt)("h3",{id:"\u6613\u7528\u6027\u6539\u8fdb"},"\u6613\u7528\u6027\u6539\u8fdb"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Routine Load \u652f\u6301\u663e\u793a\u5f53\u524d offset \u5ef6\u8fdf\u6570\u91cf\u7b49\u72b6\u6001\u3002"),(0,i.kt)("li",{parentName:"ul"},"FE audit log \u4e2d\u589e\u52a0\u67e5\u8be2\u5cf0\u503c\u5185\u5b58\u4f7f\u7528\u91cf\u7684\u7edf\u8ba1\u3002"),(0,i.kt)("li",{parentName:"ul"},"Compaction URL \u7ed3\u679c\u4e2d\u589e\u52a0\u7f3a\u5931\u7248\u672c\u7684\u4fe1\u606f\uff0c\u65b9\u4fbf\u6392\u67e5\u95ee\u9898\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u5c06 BE \u6807\u8bb0\u4e3a\u4e0d\u53ef\u67e5\u8be2\u6216\u4e0d\u53ef\u5bfc\u5165\uff0c\u4ee5\u5feb\u901f\u5c4f\u853d\u95ee\u9898\u8282\u70b9\u3002")),(0,i.kt)("h3",{id:"\u91cd\u8981-bug-\u4fee\u590d"},"\u91cd\u8981 Bug \u4fee\u590d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4fee\u590d\u82e5\u5e72\u67e5\u8be2\u9519\u8bef\u95ee\u9898\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4fee\u590d Broker Load \u82e5\u5e72\u8c03\u5ea6\u903b\u8f91\u95ee\u9898\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4fee\u590d STREAM \u5173\u952e\u8bcd\u5bfc\u81f4\u5143\u6570\u636e\u65e0\u6cd5\u52a0\u8f7d\u7684\u95ee\u9898\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4fee\u590d Decommission \u65e0\u6cd5\u6b63\u786e\u6267\u884c\u7684\u95ee\u9898\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4fee\u590d\u90e8\u5206\u60c5\u51b5\u4e0b\u64cd\u4f5c Schema Change \u64cd\u4f5c\u53ef\u80fd\u51fa\u73b0 -102 \u9519\u8bef\u7684\u95ee\u9898\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4fee\u590d\u90e8\u5206\u60c5\u51b5\u4e0b\u4f7f\u7528 String \u7c7b\u578b\u53ef\u80fd\u5bfc\u81f4 BE \u5b95\u673a\u7684\u95ee\u9898\u3002")),(0,i.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u589e\u52a0 Minidump \u529f\u80fd\uff1b")),(0,i.kt)("h2",{id:"\u66f4\u65b0\u65e5\u5fd7"},"\u66f4\u65b0\u65e5\u5fd7"),(0,i.kt)("p",null,"\u8be6\u7ec6 Release Note \u8bf7\u67e5\u770b\u94fe\u63a5\uff1a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/issues/8549"},"https://github.com/apache/incubator-doris/issues/8549")),(0,i.kt)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,i.kt)("p",null,"Apache Doris(incubating) 1.0 Release \u7248\u672c\u7684\u53d1\u5e03\u79bb\u4e0d\u5f00\u6240\u6709\u793e\u533a\u7528\u6237\u7684\u652f\u6301\uff0c\u5728\u6b64\u5411\u6240\u6709\u53c2\u4e0e\u7248\u672c\u8bbe\u8ba1\u3001\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u8ba8\u8bba\u7684\u793e\u533a\u8d21\u732e\u8005\u4eec\u8868\u793a\u611f\u8c22\uff0c\u4ed6\u4eec\u5206\u522b\u662f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"@924060929\n@adonis0147\n@Aiden-Dong\n@aihai\n@airborne12\n@Alibaba-HZY\n@amosbird\n@arthuryangcs\n@awakeljw\n@bingzxy\n@BiteTheDDDDt\n@blackstar-baba\n@caiconghui\n@CalvinKirs\n@cambyzju\n@caoliang-web\n@ccoffline\n@chaplinthink\n@chovy-3012\n@ChPi\n@DarvenDuan\n@dataalive\n@dataroaring\n@dh-cloud\n@dohongdayi\n@dongweizhao\n@drgnchan\n@e0c9\n@EmmyMiao87\n@englefly\n@eyesmoons\n@freemandealer\n@Gabriel39\n@gaodayue\n@GoGoWen\n@Gongruixiao\n@gwdgithubnom\n@HappenLee\n@Henry2SS\n@hf200012\n@htyoung\n@jacktengg\n@jackwener\n@JNSimba\n@Keysluomo\n@kezhenxu94\n@killxdcj\n@lihuigang\n@littleeleventhwolf\n@liutang123\n@liuzhuang2017\n@lonre\n@lovingfeel\n@luozenglin\n@luzhijing\n@MeiontheTop\n@mh-boy\n@morningman\n@mrhhsg\n@Myasuka\n@nimuyuhan\n@obobj\n@pengxiangyu\n@qidaye\n@qzsee\n@renzhimin7\n@Royce33\n@SleepyBear96\n@smallhibiscus\n@sodamnsure\n@spaces-X\n@sparklezzz\n@stalary\n@steadyBoy\n@tarepanda1024\n@THUMarkLau\n@tianhui5\n@tinkerrrr\n@ucasfl\n@Userwhite\n@vinson0526\n@wangbo\n@wangshuo128\n@wangyf0555\n@weajun\n@weizuo93\n@whutpencil\n@WindyGao\n@wunan1210\n@xiaokang\n@xiaokangguo\n@xiedeyantu\n@xinghuayu007\n@xingtanzjr\n@xinyiZzz\n@xtr1993\n@xu20160924\n@xuliuzhe\n@xuzifu666\n@xy720\n@yangzhg\n@yiguolei\n@yinzhijian\n@yjant\n@zbtzbtzbt\n@zenoyang\n@zh0122\n@zhangstar333\n@zhannngchen\n@zhengshengjun\n@zhengshiJ\n@ZhikaiZuo\n@ztgoto\n@zuochunwei\n")))}m.isMDXComponent=!0},42399:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/1.0.0-1-e7888e124fefa8bd38215dd9d4be4794.png"},36650:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/1.0.0-2-d9e8be01f5ff99dd6e15fc33af4518fc.png"}}]);