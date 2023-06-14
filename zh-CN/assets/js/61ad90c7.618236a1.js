"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[61043],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",B={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,d=s["".concat(p,".").concat(m)]||s[m]||B[m]||i;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27197:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>B,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={title:"\u81ea\u52a8\u5206\u6876",language:"zh-CN"},l=void 0,o={unversionedId:"advanced/autobucket",id:"version-1.2/advanced/autobucket",title:"\u81ea\u52a8\u5206\u6876",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/advanced/autobucket.md",sourceDirName:"advanced",slug:"/advanced/autobucket",permalink:"/zh-CN/docs/1.2/advanced/autobucket",draft:!1,tags:[],version:"1.2",frontMatter:{title:"\u81ea\u52a8\u5206\u6876",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5206\u533a\u7f13\u5b58",permalink:"/zh-CN/docs/1.2/advanced/cache/partition-cache"},next:{title:"Broker",permalink:"/zh-CN/docs/1.2/advanced/broker"}},p={},c=[],u={toc:c},s="wrapper";function B(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("version",{since:"1.2.2"},(0,a.kt)("p",null,"DISTRIBUTED BY ... BUCKETS auto")),(0,a.kt)("p",null,"\u7528\u6237\u7ecf\u5e38\u8bbe\u7f6e\u4e0d\u5408\u9002\u7684bucket\uff0c\u5bfc\u81f4\u5404\u79cd\u95ee\u9898\uff0c\u8fd9\u91cc\u63d0\u4f9b\u4e00\u79cd\u65b9\u5f0f\uff0c\u6765\u81ea\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u3002\u6682\u65f6\u800c\u8a00\u53ea\u5bf9olap\u8868\u751f\u6548"),(0,a.kt)("h1",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,a.kt)("p",null,'\u4ee5\u5f80\u521b\u5efa\u5206\u6876\u65f6\u9700\u8981\u624b\u52a8\u8bbe\u5b9a\u5206\u6876\u6570\uff0c\u800c\u81ea\u52a8\u5206\u6876\u63a8\u7b97\u529f\u80fd\u662f Apache Doris \u53ef\u4ee5\u52a8\u6001\u5730\u63a8\u7b97\u5206\u6876\u4e2a\u6570\uff0c\u4f7f\u5f97\u5206\u6876\u6570\u59cb\u7ec8\u4fdd\u6301\u5728\u4e00\u4e2a\u5408\u9002\u8303\u56f4\u5185\uff0c\u8ba9\u7528\u6237\u4e0d\u518d\u64cd\u5fc3\u6876\u6570\u7684\u7ec6\u679d\u672b\u8282\u3002\n\u9996\u5148\u8bf4\u660e\u4e00\u70b9\uff0c\u4e3a\u4e86\u65b9\u4fbf\u9610\u8ff0\u8be5\u529f\u80fd\uff0c\u8be5\u90e8\u5206\u4f1a\u5c06\u6876\u62c6\u5206\u4e3a\u4e24\u4e2a\u65f6\u671f\u7684\u6876\uff0c\u5373\u521d\u59cb\u5206\u6876\u4ee5\u53ca\u540e\u7eed\u5206\u6876\uff1b\u8fd9\u91cc\u7684\u521d\u59cb\u548c\u540e\u7eed\u53ea\u662f\u672c\u6587\u4e3a\u4e86\u63cf\u8ff0\u6e05\u695a\u8be5\u529f\u80fd\u800c\u91c7\u7528\u7684\u672f\u8bed\uff0cApache Doris \u5206\u6876\u672c\u8eab\u6ca1\u6709\u521d\u59cb\u548c\u540e\u7eed\u4e4b\u5206\u3002\n\u4ece\u4e0a\u6587\u4e2d\u521b\u5efa\u5206\u6876\u4e00\u8282\u6211\u4eec\u77e5\u9053\uff0cBUCKET_DESC \u975e\u5e38\u7b80\u5355\uff0c\u4f46\u662f\u9700\u8981\u6307\u5b9a\u5206\u6876\u4e2a\u6570\uff1b\u800c\u5728\u81ea\u52a8\u5206\u6876\u63a8\u7b97\u529f\u80fd\u4e0a\uff0cBUCKET_DESC \u7684\u8bed\u6cd5\u76f4\u63a5\u5c06\u5206\u6876\u6570\u6539\u6210"Auto"\uff0c\u5e76\u65b0\u589e\u4e00\u4e2a Properties \u914d\u7f6e\u5373\u53ef\uff1a'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- \u65e7\u7248\u672c\u6307\u5b9a\u5206\u6876\u4e2a\u6570\u7684\u521b\u5efa\u8bed\u6cd5\nDISTRIBUTED BY HASH(site) BUCKETS 20\n\n-- \u65b0\u7248\u672c\u4f7f\u7528\u81ea\u52a8\u5206\u6876\u63a8\u7b97\u7684\u521b\u5efa\u8bed\u6cd5\nDISTRIBUTED BY HASH(site) BUCKETS AUTO\nproperties("estimate_partition_size" = "100G")\n')),(0,a.kt)("p",null,"\u65b0\u589e\u7684\u914d\u7f6e\u53c2\u6570 estimate_partition_size \u8868\u793a\u4e00\u4e2a\u5355\u5206\u533a\u7684\u6570\u636e\u91cf\u3002\u8be5\u53c2\u6570\u662f\u53ef\u9009\u7684\uff0c\u5982\u679c\u6ca1\u6709\u7ed9\u51fa\u5219 Doris \u4f1a\u5c06 estimate_partition_size \u7684\u9ed8\u8ba4\u503c\u53d6\u4e3a 10GB\u3002\n\u4ece\u4e0a\u6587\u4e2d\u5df2\u7ecf\u5f97\u77e5\uff0c\u4e00\u4e2a\u5206\u6876\u5728\u7269\u7406\u5c42\u9762\u5c31\u662f\u4e00\u4e2aTablet\uff0c\u4e3a\u4e86\u83b7\u5f97\u6700\u597d\u7684\u6027\u80fd\uff0c\u5efa\u8bae Tablet \u7684\u5927\u5c0f\u5728 1GB - 10GB \u7684\u8303\u56f4\u5185\u3002\u90a3\u4e48\u81ea\u52a8\u5206\u6876\u63a8\u7b97\u662f\u5982\u4f55\u4fdd\u8bc1 Tablet \u5927\u5c0f\u5904\u4e8e\u8fd9\u4e2a\u8303\u56f4\u5185\u7684\u5462\uff1f\u603b\u7ed3\u8d77\u6765\u4e0d\u5916\u4e4e\u51e0\u4e2a\u539f\u5219\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u82e5\u662f\u6574\u4f53\u6570\u636e\u91cf\u8f83\u5c0f\uff0c\u5219\u5206\u6876\u6570\u4e0d\u8981\u8bbe\u7f6e\u8fc7\u591a"),(0,a.kt)("li",{parentName:"ul"},"\u82e5\u662f\u6574\u4f53\u6570\u636e\u91cf\u8f83\u5927\uff0c\u5219\u5e94\u4f7f\u6876\u6570\u8ddf\u603b\u7684\u78c1\u76d8\u5757\u6570\u76f8\u5173\uff0c\u5145\u5206\u5229\u7528\u6bcf\u53f0 BE \u673a\u5668\u548c\u6bcf\u5757\u78c1\u76d8\u7684\u80fd\u529b\n\u521d\u59cb\u5206\u6876\u63a8\u7b97\n\u4ece\u539f\u5219\u51fa\u53d1\uff0c\u7406\u89e3\u81ea\u52a8\u5206\u6876\u63a8\u7b97\u529f\u80fd\u7684\u8be6\u7ec6\u903b\u8f91\u5c31\u53d8\u5f97\u7b80\u5355\u4e86\uff1a\n\u9996\u5148\u6765\u770b\u521d\u59cb\u5206\u6876")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5148\u6839\u636e\u6570\u636e\u91cf\u5f97\u51fa\u4e00\u4e2a\u6876\u6570 N\u3002\u9996\u5148\u4f7f\u7528 estimate_partition_size \u7684\u503c\u9664\u4ee5 5\uff08\u6309\u6587\u672c\u683c\u5f0f\u5b58\u5165 Doris \u4e2d\u6709 5 \u6bd4 1 \u7684\u6570\u636e\u538b\u7f29\u6bd4\u8ba1\u7b97\uff09\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u4e3a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(, 100MB)\uff0c\u5219\u53d6 N=1"),(0,a.kt)("li",{parentName:"ul"},"[100MB, 1GB)\uff0c\u5219\u53d6 N=2"),(0,a.kt)("li",{parentName:"ul"},"[1GB, )\uff0c\u5219\u6bcfGB \u4e00\u4e2a\u5206\u6876")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e BE \u8282\u70b9\u6570\u4ee5\u53ca\u6bcf\u4e2a BE \u8282\u70b9\u7684\u78c1\u76d8\u5bb9\u91cf\uff0c\u8ba1\u7b97\u51fa\u6876\u6570 M\u3002\u5176\u4e2d\u6bcf\u4e2a BE \u8282\u70b9\u7b97 1\uff0c\u6bcf 50G \u7684\u78c1\u76d8\u5bb9\u91cf\u7b97 1\uff0c\u90a3\u4e48 M \u7684\u8ba1\u7b97\u89c4\u5219\u4e3a\uff1a\nM = BE \u8282\u70b9\u6570 ",(0,a.kt)("em",{parentName:"li"},"( \u4e00\u5757\u78c1\u76d8\u5757\u5927\u5c0f / 50GB)")," \u78c1\u76d8\u5757\u6570\n\u4f8b\u5982\u6709 3 \u53f0 BE\uff0c\u6bcf\u53f0 BE \u90fd\u6709 4 \u5757 500GB \u7684\u78c1\u76d8\uff0c\u90a3\u4e48 M = 3 ",(0,a.kt)("em",{parentName:"li"},"(500GB / 50GB)")," 4 = 120"),(0,a.kt)("li",{parentName:"ol"},"\u5f97\u5230\u6700\u7ec8\u7684\u5206\u6876\u4e2a\u6570\u8ba1\u7b97\u903b\u8f91\uff1a\n\u5148\u8ba1\u7b97\u4e00\u4e2a\u4e2d\u95f4\u503c x = min(M, N, 128)\uff0c\n\u5982\u679c x < N\u5e76\u4e14x < BE\u8282\u70b9\u4e2a\u6570\uff0c\u5219\u6700\u7ec8\u5206\u6876\u4e3a y \u5373 BE \u8282\u70b9\u4e2a\u6570\uff1b\u5426\u5219\u6700\u7ec8\u5206\u6876\u6570\u4e3a x")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u8fc7\u7a0b\u4f2a\u4ee3\u7801\u8868\u73b0\u5f62\u5f0f\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int N = \u8ba1\u7b97N\u503c;\nint M = \u8ba1\u7b97M\u503c;\n\nint y = BE\u8282\u70b9\u4e2a\u6570;\nint x = min(M, N, 128);\n\nif (x < N && x < y) {\n  return y;\n}\nreturn x;\n")),(0,a.kt)("p",null,"\u6709\u4e86\u4e0a\u8ff0\u7b97\u6cd5\uff0c\u54b1\u4eec\u518d\u5f15\u5165\u4e00\u4e9b\u4f8b\u5b50\u6765\u66f4\u597d\u5730\u7406\u89e3\u8fd9\u90e8\u5206\u903b\u8f91\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"case1:\n\u6570\u636e\u91cf 100 MB\uff0c10 \u53f0 BE \u673a\u5668\uff0c2TB *3 \u5757\u76d8\n\u6570\u636e\u91cf N = 1\nBE \u78c1\u76d8 M = 10* (2TB/50GB) * 3 = 1230\nx = min(M, N, 128) =  1\n\u6700\u7ec8: 1\n\ncase2:\n\u6570\u636e\u91cf 1GB, 3 \u53f0 BE \u673a\u5668\uff0c500GB *2\u5757\u76d8\n\u6570\u636e\u91cf N = 2\nBE \u78c1\u76d8 M = 3* (500GB/50GB) * 2 = 60\nx = min(M, N, 128) =  2\n\u6700\u7ec8: 2\n\ncase3:\n\u6570\u636e\u91cf100GB\uff0c3\u53f0BE\u673a\u5668\uff0c500GB *2\u5757\u76d8\n\u6570\u636e\u91cfN = 20\nBE\u78c1\u76d8M = 3* (500GB/50GB) * 2 = 60\nx = min(M, N, 128) =  20\n\u6700\u7ec8: 20\n\ncase4:\n\u6570\u636e\u91cf500GB\uff0c3\u53f0BE\u673a\u5668\uff0c1TB *1\u5757\u76d8\n\u6570\u636e\u91cfN = 100\nBE\u78c1\u76d8M = 3* (1TB /50GB) * 1 = 60\nx = min(M, N, 128) =  63\n\u6700\u7ec8: 63\n\ncase5:\n\u6570\u636e\u91cf500GB\uff0c10\u53f0BE\u673a\u5668\uff0c2TB *3\u5757\u76d8\n\u6570\u636e\u91cf N =  100\nBE\u78c1\u76d8 M = 10* (2TB / 50GB) * 3 = 1230\nx = min(M, N, 128) =  100\n\u6700\u7ec8: 100\n\ncase 6:\n\u6570\u636e\u91cf1TB\uff0c10\u53f0BE\u673a\u5668\uff0c2TB *3\u5757\u76d8\n\u6570\u636e\u91cf N =  205\nBE\u78c1\u76d8M = 10* (2TB / 50GB) * 3 = 1230\nx = min(M, N, 128) =  128\n\u6700\u7ec8: 128\n\ncase 7:\n\u6570\u636e\u91cf500GB\uff0c1\u53f0BE\u673a\u5668\uff0c100TB *1\u5757\u76d8\n\u6570\u636e\u91cf N = 100\nBE\u78c1\u76d8M =  1* (100TB / 50GB) * 1 = 2048\nx = min(M, N, 128) =  100\n\u6700\u7ec8: 100\n\ncase 8:\n\u6570\u636e\u91cf1TB, 200\u53f0BE\u673a\u5668\uff0c4TB *7\u5757\u76d8\n\u6570\u636e\u91cf N = 205\nBE\u78c1\u76d8M = 200* (4TB / 50GB) * 7 = 114800\nx = min(M, N, 128) =  128\n\u6700\u7ec8: 200\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u8be6\u7ec6\u903b\u8f91\u4e0e\u539f\u5219\u662f\u5339\u914d\u7684\u3002\n\u540e\u7eed\u5206\u6876\u63a8\u7b97\n\u4e0a\u8ff0\u662f\u5173\u4e8e\u521d\u59cb\u5206\u6876\u7684\u8ba1\u7b97\u903b\u8f91\uff0c\u540e\u7eed\u5206\u6876\u6570\u56e0\u4e3a\u5df2\u7ecf\u6709\u4e86\u4e00\u5b9a\u7684\u5206\u533a\u6570\u636e\uff0c\u53ef\u4ee5\u6839\u636e\u5df2\u6709\u7684\u5206\u533a\u6570\u636e\u91cf\u6765\u8fdb\u884c\u8bc4\u4f30\u3002\u540e\u7eed\u5206\u6876\u6570\u4f1a\u6839\u636e\u6700\u591a\u524d 7 \u4e2a\u5206\u533a\u6570\u636e\u91cf\u7684 EMA","[1]","\uff08\u77ed\u671f\u6307\u6570\u79fb\u52a8\u5e73\u5747\u7ebf\uff09\u503c\uff0c\u4f5c\u4e3aestimate_partition_size \u8fdb\u884c\u8bc4\u4f30\u3002\u6b64\u65f6\u8ba1\u7b97\u5206\u6876\u6709\u4e24\u79cd\u8ba1\u7b97\u65b9\u5f0f\uff0c\u5047\u8bbe\u4ee5\u5929\u6765\u5206\u533a\uff0c\u5f80\u524d\u6570\u7b2c\u4e00\u5929\u5206\u533a\u5927\u5c0f\u4e3a S7\uff0c\u5f80\u524d\u6570\u7b2c\u4e8c\u5929\u5206\u533a\u5927\u5c0f\u4e3a S6\uff0c\u4f9d\u6b21\u7c7b\u63a8\u5230 S1\uff1b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c 7 \u5929\u5185\u7684\u5206\u533a\u6570\u636e\u6bcf\u65e5\u4e25\u683c\u9012\u589e\uff0c\u5219\u6b64\u65f6\u4f1a\u53d6\u8d8b\u52bf\u503c")),(0,a.kt)("p",null,"\u67096\u4e2adelta\u503c\uff0c\u5206\u522b\u662f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"S7 - S6 = delta1,\nS6 - S5 = delta2,\n...\nS2 - S1 = delta6\n")),(0,a.kt)("p",null,"\u7531\u6b64\u5f97\u5230ema(delta)\u503c\uff1a\n\u90a3\u4e48\uff0c\u4eca\u5929\u7684estimate_partition_size = S7 + ema(delta)"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u975e\u7b2c\u4e00\u79cd\u7684\u60c5\u51b5\uff0c\u6b64\u65f6\u76f4\u63a5\u53d6\u524d\u51e0\u5929\u7684EMA\u5e73\u5747\u503c")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4eca\u5929\u7684estimate_partition_size = EMA(S1, ..., S7)")),(0,a.kt)("p",null,"\u6839\u636e\u4e0a\u8ff0\u7b97\u6cd5\uff0c\u521d\u59cb\u5206\u6876\u4e2a\u6570\u4ee5\u53ca\u540e\u7eed\u5206\u6876\u4e2a\u6570\u90fd\u80fd\u88ab\u8ba1\u7b97\u51fa\u6765\u3002\u8ddf\u4e4b\u524d\u53ea\u80fd\u6307\u5b9a\u56fa\u5b9a\u5206\u6876\u6570\u4e0d\u540c\uff0c\u7531\u4e8e\u4e1a\u52a1\u6570\u636e\u7684\u53d8\u5316\uff0c\u6709\u53ef\u80fd\u524d\u9762\u5206\u533a\u7684\u5206\u6876\u6570\u548c\u540e\u9762\u5206\u533a\u7684\u5206\u6876\u6570\u4e0d\u4e00\u6837\uff0c\u8fd9\u5bf9\u7528\u6237\u662f\u900f\u660e\u7684\uff0c\u7528\u6237\u65e0\u9700\u5173\u5fc3\u6bcf\u4e00\u5206\u533a\u5177\u4f53\u7684\u5206\u6876\u6570\u662f\u591a\u5c11\uff0c\u800c\u8fd9\u4e00\u81ea\u52a8\u63a8\u7b97\u7684\u529f\u80fd\u4f1a\u8ba9\u5206\u6876\u6570\u66f4\u52a0\u5408\u7406\u3002"),(0,a.kt)("h1",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("p",null,"\u5f00\u542fautobucket\u4e4b\u540e\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"show create table"),"\u7684\u65f6\u5019\u770b\u5230\u7684schema\u4e5f\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"BUCKETS AUTO"),".\u5982\u679c\u60f3\u8981\u67e5\u770b\u786e\u5207\u7684bucket\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"show partitions from ${table};"),"\u6765\u67e5\u770b\u3002"))}B.isMDXComponent=!0}}]);