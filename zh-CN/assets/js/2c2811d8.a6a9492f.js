"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[4762],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>S});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(a),u=n,S=c["".concat(i,".").concat(u)]||c[u]||d[u]||l;return a?r.createElement(S,o(o({ref:t},s),{},{components:a})):r.createElement(S,o({ref:t},s))}));function S(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:n,o[1]=p;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33933:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={title:"SHOW-STREAM-LOAD",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-STREAM-LOAD",id:"sql-manual/sql-reference/Show-Statements/SHOW-STREAM-LOAD",title:"SHOW-STREAM-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-STREAM-LOAD.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-STREAM-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-STREAM-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-STREAM-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-TRANSACTION",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION"},next:{title:"SHOW-STATUS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-STATUS"}},i={},m=[{value:"SHOW-STREAM-LOAD",id:"show-stream-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:m},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"show-stream-load"},"SHOW-STREAM-LOAD"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"SHOW STREAM LOAD"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u6307\u5b9a\u7684Stream Load\u4efb\u52a1\u7684\u6267\u884c\u60c5\u51b5"),(0,n.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW STREAM LOAD\n[FROM db_name]\n[\n  WHERE\n  [LABEL [ = "your_label" | LIKE "label_matcher"]]\n  [STATUS = ["SUCCESS"|"FAIL"]]\n]\n[ORDER BY ...]\n[LIMIT limit][OFFSET offset];\n')),(0,n.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9ed8\u8ba4 BE \u662f\u4e0d\u8bb0\u5f55 Stream Load \u7684\u8bb0\u5f55\uff0c\u5982\u679c\u4f60\u8981\u67e5\u770b\u9700\u8981\u5728 BE \u4e0a\u542f\u7528\u8bb0\u5f55\uff0c\u914d\u7f6e\u53c2\u6570\u662f\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"enable_stream_load_record=true")," \uff0c\u5177\u4f53\u600e\u4e48\u914d\u7f6e\u8bf7\u53c2\u7167 ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/config/be-config"},"BE \u914d\u7f6e\u9879"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u6307\u5b9a db_name\uff0c\u4f7f\u7528\u5f53\u524d\u9ed8\u8ba4db")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528 LABEL LIKE\uff0c\u5219\u4f1a\u5339\u914dStream Load\u4efb\u52a1\u7684 label \u5305\u542b label_matcher \u7684\u4efb\u52a1")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528 LABEL = \uff0c\u5219\u7cbe\u786e\u5339\u914d\u6307\u5b9a\u7684 label")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u6307\u5b9a\u4e86 STATUS\uff0c\u5219\u5339\u914d STREAM LOAD \u72b6\u6001")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ORDER BY \u5bf9\u4efb\u610f\u5217\u7ec4\u5408\u8fdb\u884c\u6392\u5e8f")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u6307\u5b9a\u4e86 LIMIT\uff0c\u5219\u663e\u793a limit \u6761\u5339\u914d\u8bb0\u5f55\u3002\u5426\u5219\u5168\u90e8\u663e\u793a")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u6307\u5b9a\u4e86 OFFSET\uff0c\u5219\u4ece\u504f\u79fb\u91cfoffset\u5f00\u59cb\u663e\u793a\u67e5\u8be2\u7ed3\u679c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u504f\u79fb\u91cf\u4e3a0\u3002"))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c55\u793a\u9ed8\u8ba4 db \u7684\u6240\u6709Stream Load\u4efb\u52a1"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"  SHOW STREAM LOAD;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'\u5c55\u793a\u6307\u5b9a db \u7684Stream Load\u4efb\u52a1\uff0clabel \u4e2d\u5305\u542b\u5b57\u7b26\u4e32 "2014_01_02"\uff0c\u5c55\u793a\u6700\u8001\u768410\u4e2a'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW STREAM LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'\u5c55\u793a\u6307\u5b9a db \u7684Stream Load\u4efb\u52a1\uff0c\u6307\u5b9a label \u4e3a "load_example_db_20140102"'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW STREAM LOAD FROM example_db WHERE LABEL = "load_example_db_20140102";\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'\u5c55\u793a\u6307\u5b9a db \u7684Stream Load\u4efb\u52a1\uff0c\u6307\u5b9a status \u4e3a "success", \u5e76\u6309 StartTime \u964d\u5e8f\u6392\u5e8f'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW STREAM LOAD FROM example_db WHERE STATUS = "success" ORDER BY StartTime DESC;\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1 \u5e76\u6309 StartTime \u964d\u5e8f\u6392\u5e8f,\u5e76\u4ece\u504f\u79fb\u91cf5\u5f00\u59cb\u663e\u793a10\u6761\u67e5\u8be2\u7ed3\u679c"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW STREAM LOAD FROM example_db ORDER BY StartTime DESC limit 5,10;\nSHOW STREAM LOAD FROM example_db ORDER BY StartTime DESC limit 10 offset 5;\n")))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SHOW, STREAM, LOAD\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);