"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[68776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const r={title:"\u53d8\u91cf",language:"zh-CN"},i=void 0,o={unversionedId:"advanced/variables-template",id:"advanced/variables-template",title:"\u53d8\u91cf",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/variables-template.md",sourceDirName:"advanced",slug:"/advanced/variables-template",permalink:"/zh-CN/docs/dev/advanced/variables-template",draft:!1,tags:[],version:"current",frontMatter:{title:"\u53d8\u91cf",language:"zh-CN"}},p={},u=[{value:"\u53d8\u91cf\u8bbe\u7f6e\u4e0e\u67e5\u770b",id:"\u53d8\u91cf\u8bbe\u7f6e\u4e0e\u67e5\u770b",level:2},{value:"\u67e5\u770b",id:"\u67e5\u770b",level:3},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:3},{value:"\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u8bbe\u7f6e\u53d8\u91cf",id:"\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u8bbe\u7f6e\u53d8\u91cf",level:3},{value:"\u652f\u6301\u7684\u53d8\u91cf",id:"\u652f\u6301\u7684\u53d8\u91cf",level:2}],c={toc:u},m="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,l.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5f53\u524d\u652f\u6301\u7684\u53d8\u91cf\uff08variables\uff09\u3002"),(0,l.kt)("p",null,"Doris \u4e2d\u7684\u53d8\u91cf\u53c2\u8003 MySQL \u4e2d\u7684\u53d8\u91cf\u8bbe\u7f6e\u3002\u4f46\u90e8\u5206\u53d8\u91cf\u4ec5\u7528\u4e8e\u517c\u5bb9\u4e00\u4e9b MySQL \u5ba2\u6237\u7aef\u534f\u8bae\uff0c\u5e76\u4e0d\u4ea7\u751f\u5176\u5728 MySQL \u6570\u636e\u5e93\u4e2d\u7684\u5b9e\u9645\u610f\u4e49\u3002"),(0,l.kt)("h2",{id:"\u53d8\u91cf\u8bbe\u7f6e\u4e0e\u67e5\u770b"},"\u53d8\u91cf\u8bbe\u7f6e\u4e0e\u67e5\u770b"),(0,l.kt)("h3",{id:"\u67e5\u770b"},"\u67e5\u770b"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW VARIABLES [LIKE 'xxx'];")," \u67e5\u770b\u6240\u6709\u6216\u6307\u5b9a\u7684\u53d8\u91cf\u3002\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW VARIABLES;\nSHOW VARIABLES LIKE '%time_zone%';\n")),(0,l.kt)("h3",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),(0,l.kt)("p",null,"\u90e8\u5206\u53d8\u91cf\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40\u751f\u6548\u6216\u4ec5\u5f53\u524d\u4f1a\u8bdd\u751f\u6548\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u5728 1.1 \u7248\u672c\u4e4b\u524d\uff0c\u8bbe\u7f6e\u5168\u5c40\u751f\u6548\u540e\uff0c\u540e\u7eed\u65b0\u7684\u4f1a\u8bdd\u8fde\u63a5\u4e2d\u4f1a\u6cbf\u7528\u8bbe\u7f6e\u503c\uff0c\u4f46\u5f53\u524d\u4f1a\u8bdd\u4e2d\u7684\u503c\u4e0d\u53d8\u3002\n\u800c\u5728 1.1 \u7248\u672c\uff08\u542b\uff09\u4e4b\u540e\uff0c\u8bbe\u7f6e\u5168\u5c40\u751f\u6548\u540e\uff0c\u540e\u7eed\u65b0\u7684\u4f1a\u8bdd\u8fde\u63a5\u4e2d\u4f1a\u6cbf\u7528\u8bbe\u7f6e\u503c\uff0c\u5f53\u524d\u4f1a\u8bdd\u4e2d\u7684\u503c\u4e5f\u4f1a\u6539\u53d8\u3002"),(0,l.kt)("p",null,"\u4ec5\u5f53\u524d\u4f1a\u8bdd\u751f\u6548\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"SET var_name=xxx;")," \u8bed\u53e5\u6765\u8bbe\u7f6e\u3002\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SET exec_mem_limit = 137438953472;\nSET forward_to_master = true;\nSET time_zone = "Asia/Shanghai";\n')),(0,l.kt)("p",null,"\u5168\u5c40\u751f\u6548\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"SET GLOBAL var_name=xxx;")," \u8bbe\u7f6e\u3002\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET GLOBAL exec_mem_limit = 137438953472\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce81\uff1a\u53ea\u6709 ADMIN \u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u53d8\u91cf\u7684\u5168\u5c40\u751f\u6548\u3002")),(0,l.kt)("p",null,"\u65e2\u652f\u6301\u5f53\u524d\u4f1a\u8bdd\u751f\u6548\u53c8\u652f\u6301\u5168\u5c40\u751f\u6548\u7684\u53d8\u91cf\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"time_zone")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wait_timeout")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sql_mode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enable_profile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"query_timeout")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insert_timeout"),(0,l.kt)("version",{since:"dev"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exec_mem_limit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"batch_size")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allow_partition_column_nullable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insert_visible_timeout_ms")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enable_fold_constant_by_be"))),(0,l.kt)("p",null,"\u53ea\u652f\u6301\u5168\u5c40\u751f\u6548\u7684\u53d8\u91cf\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default_rowset_type")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default_password_lifetime")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"password_history")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"validate_password_policy"))),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u53d8\u91cf\u8bbe\u7f6e\u4e5f\u652f\u6301\u5e38\u91cf\u8868\u8fbe\u5f0f\u3002\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET exec_mem_limit = 10 * 1024 * 1024 * 1024;\nSET forward_to_master = concat('tr', 'u', 'e');\n")),(0,l.kt)("h3",{id:"\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u8bbe\u7f6e\u53d8\u91cf"},"\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u8bbe\u7f6e\u53d8\u91cf"),(0,l.kt)("p",null,"\u5728\u4e00\u4e9b\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u5bf9\u67d0\u4e9b\u67e5\u8be2\u6709\u9488\u5bf9\u6027\u7684\u8bbe\u7f6e\u53d8\u91cf\u3002 \u901a\u8fc7\u4f7f\u7528SET_VAR\u63d0\u793a\u53ef\u4ee5\u5728\u67e5\u8be2\u4e2d\u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf\uff08\u5728\u5355\u4e2a\u8bed\u53e5\u5185\u751f\u6548\uff09\u3002\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT /*+ SET_VAR(exec_mem_limit = 8589934592) */ name FROM people ORDER BY name;\nSELECT /*+ SET_VAR(query_timeout = 1, enable_partition_cache=true) */ sleep(3);\n")),(0,l.kt)("p",null,"\u6ce8\u610f\u6ce8\u91ca\u5fc5\u987b\u4ee5/*+ \u5f00\u5934\uff0c\u5e76\u4e14\u53ea\u80fd\u8ddf\u968f\u5728SELECT\u4e4b\u540e\u3002"),(0,l.kt)("h2",{id:"\u652f\u6301\u7684\u53d8\u91cf"},"\u652f\u6301\u7684\u53d8\u91cf"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a"),(0,l.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u5185\u5bb9\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"docs/generate-config-and-variable-doc.sh")," \u81ea\u52a8\u751f\u6210\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u9700\u4fee\u6539\uff0c\u8bf7\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"fe/fe-core/src/main/java/org/apache/doris/qe/SessionVariable.java")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"fe/fe-core/src/main/java/org/apache/doris/qe/GlobalVariable.java")," \u4e2d\u7684\u63cf\u8ff0\u4fe1\u606f\u3002")),(0,l.kt)("p",null,"<--DOC_PLACEHOLDER--\x3e"))}s.isMDXComponent=!0}}]);