"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[27321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),E=r,d=u["".concat(p,".").concat(E)]||u[E]||m[E]||l;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=E;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}E.displayName="MDXCreateElement"},89122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"CANCEL-EXPORT",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",title:"CANCEL-EXPORT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CANCEL-EXPORT",language:"zh-CN"},sidebar:"docs",previous:{title:"EXPORT",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT"},next:{title:"OUTFILE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE"}},p={},c=[{value:"CANCEL-EXPORT",id:"cancel-export",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cancel-export"},"CANCEL-EXPORT"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("version",{since:"1.2.2"}),(0,r.kt)("p",null,"CANCEL EXPORT"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u64a4\u9500\u6307\u5b9a label \u7684 EXPORT \u4f5c\u4e1a\uff0c\u6216\u8005\u901a\u8fc7\u6a21\u7cca\u5339\u914d\u6279\u91cf\u64a4\u9500 EXPORT \u4f5c\u4e1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\n[FROM db_name]\nWHERE [LABEL = "export_label" | LABEL like "label_pattern" | STATE = "PENDING/IN_QUEUE/EXPORTING"]\n')),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u64a4\u9500\u6570\u636e\u5e93 example_db \u4e0a\uff0c label \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"example_db_test_export_label")," \u7684 EXPORT \u4f5c\u4e1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\nFROM example_db\nWHERE LABEL = "example_db_test_export_label" and STATE = "EXPORTING";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u64a4\u9500\u6570\u636e\u5e93 example",(0,r.kt)("em",{parentName:"p"},"db \u4e0a\uff0c \u6240\u6709\u5305\u542b example")," \u7684 EXPORT \u4f5c\u4e1a\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\nFROM example_db\nWHERE LABEL like "%example%";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53d6\u6d88\u72b6\u6001\u4e3a PENDING \u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\nFROM example_db\nWHERE STATE = "PENDING";\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CANCEL, EXPORT\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53ea\u80fd\u53d6\u6d88\u5904\u4e8e PENDING\u3001IN_QUEUE\u3001EXPORTING \u72b6\u6001\u7684\u672a\u5b8c\u6210\u7684\u5bfc\u51fa\u4f5c\u4e1a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u6267\u884c\u6279\u91cf\u64a4\u9500\u65f6\uff0cDoris \u4e0d\u4f1a\u4fdd\u8bc1\u6240\u6709\u5bf9\u5e94\u7684 EXPORT \u4f5c\u4e1a\u539f\u5b50\u7684\u64a4\u9500\u3002\u5373\u6709\u53ef\u80fd\u4ec5\u6709\u90e8\u5206 EXPORT \u4f5c\u4e1a\u64a4\u9500\u6210\u529f\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 SHOW EXPORT \u8bed\u53e5\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001\uff0c\u5e76\u5c1d\u8bd5\u91cd\u590d\u6267\u884c CANCEL EXPORT \u8bed\u53e5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u64a4\u9500",(0,r.kt)("inlineCode",{parentName:"li"},"EXPORTING"),"\u72b6\u6001\u7684\u4f5c\u4e1a\u65f6\uff0c\u6709\u53ef\u80fd\u4f5c\u4e1a\u5df2\u7ecf\u5bfc\u51fa\u90e8\u5206\u6570\u636e\u5230\u5b58\u50a8\u7cfb\u7edf\u4e0a\uff0c\u7528\u6237\u9700\u8981\u81ea\u884c\u5904\u7406(\u5220\u9664)\u8be5\u90e8\u5206\u5bfc\u51fa\u6570\u636e\u3002")))}m.isMDXComponent=!0}}]);