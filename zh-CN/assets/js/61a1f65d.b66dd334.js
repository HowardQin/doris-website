"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70498],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>L});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,L=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(L,o(o({ref:t},c),{},{components:a})):n.createElement(L,o({ref:t},c))}));function L(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52660:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"CANCEL-LOAD",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD",title:"CANCEL-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CANCEL-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-ROUTINE-LOAD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD"},next:{title:"RESUME-ROUTINE-LOAD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-ROUTINE-LOAD"}},p={},s=[{value:"CANCEL-LOAD",id:"cancel-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cancel-load"},"CANCEL-LOAD"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CANCEL LOAD"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u64a4\u9500\u6307\u5b9a label \u7684\u5bfc\u5165\u4f5c\u4e1a\u3002\u6216\u8005\u901a\u8fc7\u6a21\u7cca\u5339\u914d\u6279\u91cf\u64a4\u9500\u5bfc\u5165\u4f5c\u4e1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\n[FROM db_name]\nWHERE [LABEL = "load_label" | LABEL like "label_pattern" | STATE = "PENDING/ETL/LOADING"]\n')),(0,r.kt)("p",null,"\u6ce8\uff1a1.2.0 \u7248\u672c\u4e4b\u540e\u652f\u6301\u6839\u636e State \u53d6\u6d88\u4f5c\u4e1a\u3002"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u64a4\u9500\u6570\u636e\u5e93 example_db \u4e0a\uff0c label \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"example_db_test_load_label")," \u7684\u5bfc\u5165\u4f5c\u4e1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\nFROM example_db\nWHERE LABEL = "example_db_test_load_label";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u64a4\u9500\u6570\u636e\u5e93 example",(0,r.kt)("em",{parentName:"p"},"db \u4e0a\uff0c \u6240\u6709\u5305\u542b example")," \u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\nFROM example_db\nWHERE LABEL like "example_";\n')))),(0,r.kt)("version",{since:"1.2.0"},(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53d6\u6d88\u72b6\u6001\u4e3a LOADING \u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\nFROM example_db\nWHERE STATE = "loading";\n'))))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CANCEL, LOAD\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53ea\u80fd\u53d6\u6d88\u5904\u4e8e PENDING\u3001ETL\u3001LOADING \u72b6\u6001\u7684\u672a\u5b8c\u6210\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u6267\u884c\u6279\u91cf\u64a4\u9500\u65f6\uff0cDoris \u4e0d\u4f1a\u4fdd\u8bc1\u6240\u6709\u5bf9\u5e94\u7684\u5bfc\u5165\u4f5c\u4e1a\u539f\u5b50\u7684\u64a4\u9500\u3002\u5373\u6709\u53ef\u80fd\u4ec5\u6709\u90e8\u5206\u5bfc\u5165\u4f5c\u4e1a\u64a4\u9500\u6210\u529f\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 SHOW LOAD \u8bed\u53e5\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001\uff0c\u5e76\u5c1d\u8bd5\u91cd\u590d\u6267\u884c CANCEL LOAD \u8bed\u53e5\u3002")))}u.isMDXComponent=!0}}]);