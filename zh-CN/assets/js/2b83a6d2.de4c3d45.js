"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[35616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>D});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,D=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(D,i(i({ref:t},s),{},{components:n})):r.createElement(D,i({ref:t},s))}));function D(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={title:"DECIMALV3",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Types/DECIMALV3",id:"version-1.2/sql-manual/sql-reference/Data-Types/DECIMALV3",title:"DECIMALV3",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Types/DECIMALV3.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DECIMALV3",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DECIMALV3",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DECIMALV3",language:"zh-CN"},sidebar:"docs",previous:{title:"DECIMAL",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DECIMAL"},next:{title:"DATE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DATE"}},c={},p=[{value:"DECIMALV3",id:"decimalv3",level:2},{value:"description",id:"description",level:3},{value:"\u7cbe\u5ea6\u63a8\u6f14",id:"\u7cbe\u5ea6\u63a8\u6f14",level:3},{value:"\u56db\u5219\u8fd0\u7b97",id:"\u56db\u5219\u8fd0\u7b97",level:4},{value:"\u805a\u5408\u8fd0\u7b97",id:"\u805a\u5408\u8fd0\u7b97",level:4},{value:"\u9ed8\u8ba4\u89c4\u5219",id:"\u9ed8\u8ba4\u89c4\u5219",level:4},{value:"\u8c03\u6574\u7ed3\u679c\u7cbe\u5ea6",id:"\u8c03\u6574\u7ed3\u679c\u7cbe\u5ea6",level:4},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981DECIMALV3",id:"\u4e3a\u4ec0\u4e48\u9700\u8981decimalv3",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"decimalv3"},"DECIMALV3"),(0,l.kt)("version",{since:"1.2.1"},(0,l.kt)("p",null,"DECIMALV3")),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DECIMALV3(M[,D])\n\u9ad8\u7cbe\u5ea6\u5b9a\u70b9\u6570\uff0cM \u4ee3\u8868\u4e00\u5171\u6709\u591a\u5c11\u4e2a\u6709\u6548\u6570\u5b57(precision)\uff0cD \u4ee3\u8868\u5c0f\u6570\u4f4d\u6709\u591a\u5c11\u6570\u5b57(scale)\uff0c\n\u6709\u6548\u6570\u5b57 M \u7684\u8303\u56f4\u662f [1, 38]\uff0c\u5c0f\u6570\u4f4d\u6570\u5b57\u6570\u91cf D \u7684\u8303\u56f4\u662f [0, precision]\u3002\n\n\u9ed8\u8ba4\u503c\u4e3a DECIMALV3(9, 0)\u3002\n")),(0,l.kt)("h3",{id:"\u7cbe\u5ea6\u63a8\u6f14"},"\u7cbe\u5ea6\u63a8\u6f14"),(0,l.kt)("p",null,"DECIMALV3\u6709\u4e00\u5957\u5f88\u590d\u6742\u7684\u7c7b\u578b\u63a8\u6f14\u89c4\u5219\uff0c\u9488\u5bf9\u4e0d\u540c\u7684\u8868\u8fbe\u5f0f\uff0c\u4f1a\u5e94\u7528\u4e0d\u540c\u89c4\u5219\u8fdb\u884c\u7cbe\u5ea6\u63a8\u65ad\u3002"),(0,l.kt)("h4",{id:"\u56db\u5219\u8fd0\u7b97"},"\u56db\u5219\u8fd0\u7b97"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u52a0\u6cd5 / \u51cf\u6cd5\uff1aDECIMALV3(a, b) + DECIMALV3(x, y) -> DECIMALV3(max(a - b, x - y) + max(b, y) + 1, max(b, y))\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e58\u6cd5\uff1aDECIMALV3(a, b) + DECIMALV3(x, y) -> DECIMALV3(a + x, b + y)\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9664\u6cd5\uff1aDECIMALV3(a, b) + DECIMALV3(x, y) -> DECIMALV3(a + y, b)\u3002")),(0,l.kt)("h4",{id:"\u805a\u5408\u8fd0\u7b97"},"\u805a\u5408\u8fd0\u7b97"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SUM / MULTI_DISTINCT_SUM\uff1aSUM(DECIMALV3(a, b)) -> DECIMALV3(38, b)\u3002"),(0,l.kt)("li",{parentName:"ul"},"AVG\uff1aAVG(DECIMALV3(a, b)) -> DECIMALV3(38, max(b, 4))\u3002")),(0,l.kt)("h4",{id:"\u9ed8\u8ba4\u89c4\u5219"},"\u9ed8\u8ba4\u89c4\u5219"),(0,l.kt)("p",null,"\u9664\u4e0a\u8ff0\u63d0\u5230\u7684\u51fd\u6570\u5916\uff0c\u5176\u4f59\u8868\u8fbe\u5f0f\u90fd\u4f7f\u7528\u9ed8\u8ba4\u89c4\u5219\u8fdb\u884c\u7cbe\u5ea6\u63a8\u6f14\u3002\u5373\u5bf9\u4e8e\u8868\u8fbe\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"expr(DECIMALV3(a, b))"),"\uff0c\u7ed3\u679c\u7c7b\u578b\u540c\u6837\u4e5f\u662fDECIMALV3(a, b)\u3002"),(0,l.kt)("h4",{id:"\u8c03\u6574\u7ed3\u679c\u7cbe\u5ea6"},"\u8c03\u6574\u7ed3\u679c\u7cbe\u5ea6"),(0,l.kt)("p",null,"\u4e0d\u540c\u7528\u6237\u5bf9DECIMALV3\u7684\u7cbe\u5ea6\u8981\u6c42\u5404\u4e0d\u76f8\u540c\uff0c\u4e0a\u8ff0\u89c4\u5219\u4e3a\u5f53\u524dDoris\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u5982\u679c\u7528\u6237",(0,l.kt)("strong",{parentName:"p"},"\u6709\u4e0d\u540c\u7684\u7cbe\u5ea6\u9700\u6c42\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fdb\u884c\u7cbe\u5ea6\u8c03\u6574"),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u671f\u671b\u7684\u7ed3\u679c\u7cbe\u5ea6\u5927\u4e8e\u9ed8\u8ba4\u7cbe\u5ea6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u5165\u53c2\u7cbe\u5ea6\u6765\u8c03\u6574\u7ed3\u679c\u7cbe\u5ea6\u3002\u4f8b\u5982\u7528\u6237\u671f\u671b\u8ba1\u7b97",(0,l.kt)("inlineCode",{parentName:"li"},"AVG(col)"),"\u5f97\u5230DECIMALV3(x, y)\u4f5c\u4e3a\u7ed3\u679c\uff0c\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"col"),"\u7684\u7c7b\u578b\u4e3aDECIMALV3(a, b)\uff0c\u5219\u53ef\u4ee5\u6539\u5199\u8868\u8fbe\u5f0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"AVG(CAST(col as DECIMALV3(x, y)))"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u671f\u671b\u7684\u7ed3\u679c\u7cbe\u5ea6\u5c0f\u4e8e\u9ed8\u8ba4\u7cbe\u5ea6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5bf9\u8f93\u51fa\u7ed3\u679c\u6c42\u8fd1\u4f3c\u5f97\u5230\u60f3\u8981\u7684\u7cbe\u5ea6\u3002\u4f8b\u5982\u7528\u6237\u671f\u671b\u8ba1\u7b97",(0,l.kt)("inlineCode",{parentName:"li"},"AVG(col)"),"\u5f97\u5230DECIMALV3(x, y)\u4f5c\u4e3a\u7ed3\u679c\uff0c\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"col"),"\u7684\u7c7b\u578b\u4e3aDECIMALV3(a, b)\uff0c\u5219\u53ef\u4ee5\u6539\u5199\u8868\u8fbe\u5f0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"ROUND(AVG(col), y)"),"\u3002")),(0,l.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981decimalv3"},"\u4e3a\u4ec0\u4e48\u9700\u8981DECIMALV3"),(0,l.kt)("p",null,"Doris\u4e2d\u7684DECIMALV3\u662f\u771f\u6b63\u610f\u4e49\u4e0a\u7684\u9ad8\u7cbe\u5ea6\u5b9a\u70b9\u6570\uff0c\u76f8\u6bd4\u4e8e\u8001\u7248\u672c\u7684Decimal\uff0cDecimalV3\u6709\u4ee5\u4e0b\u6838\u5fc3\u4f18\u52bf\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u53ef\u8868\u793a\u8303\u56f4\u66f4\u5927\u3002DECIMALV3\u4e2dprecision\u548cscale\u7684\u53d6\u503c\u8303\u56f4\u90fd\u8fdb\u884c\u4e86\u660e\u663e\u6269\u5145\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6027\u80fd\u66f4\u9ad8\u3002\u8001\u7248\u672c\u7684DECIMAL\u5728\u5185\u5b58\u4e2d\u9700\u8981\u5360\u752816 bytes\uff0c\u5728\u5b58\u50a8\u4e2d\u5360\u752812 bytes\uff0c\u800cDECIMALV3\u8fdb\u884c\u4e86\u81ea\u9002\u5e94\u8c03\u6574\uff08\u5982\u4e0b\u8868\u683c\uff09\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+----------------------+-------------------+\n|     precision        | \u5360\u7528\u7a7a\u95f4\uff08\u5185\u5b58/\u78c1\u76d8\uff09|\n+----------------------+-------------------+\n| 0 < precision <= 8   |      4 bytes      |\n+----------------------+-------------------+\n| 8 < precision <= 18  |      8 bytes      |\n+----------------------+-------------------+\n| 18 < precision <= 38 |     16 bytes      |\n+----------------------+-------------------+\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u66f4\u5b8c\u5907\u7684\u7cbe\u5ea6\u63a8\u6f14\u3002\u5bf9\u4e8e\u4e0d\u540c\u7684\u8868\u8fbe\u5f0f\uff0c\u5e94\u7528\u4e0d\u540c\u7684\u7cbe\u5ea6\u63a8\u6f14\u89c4\u5219\u5bf9\u7ed3\u679c\u7684\u7cbe\u5ea6\u8fdb\u884c\u63a8\u6f14\u3002")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DECIMALV3\n")))}d.isMDXComponent=!0}}]);