"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51220],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>c});var n=t(67294);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,p=function(e,a){if(null==e)return{};var t,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var m=n.createContext({}),o=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=o(e.components);return n.createElement(m.Provider,{value:a},e.children)},N="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,p=e.mdxType,r=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),N=o(t),d=p,c=N["".concat(m,".").concat(d)]||N[d]||k[d]||r;return t?n.createElement(c,l(l({ref:a},s),{},{components:t})):n.createElement(c,l({ref:a},s))}));function c(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i[N]="string"==typeof e?e:p,l[1]=i;for(var o=2;o<r;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2492:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=t(87462),p=(t(67294),t(3905));const r={title:"BROKER-LOAD",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD",title:"BROKER-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD",draft:!1,tags:[],version:"1.2",frontMatter:{title:"BROKER-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"PAUSE-SYNC-JOB",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB"},next:{title:"CREATE-SYNC-JOB",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB"}},m={},o=[{value:"BROKER-LOAD",id:"broker-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:o},N="wrapper";function k(e){let{components:a,...t}=e;return(0,p.kt)(N,(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"broker-load"},"BROKER-LOAD"),(0,p.kt)("h3",{id:"name"},"Name"),(0,p.kt)("p",null,"BROKER LOAD"),(0,p.kt)("h3",{id:"description"},"Description"),(0,p.kt)("p",null,"\u8be5\u547d\u4ee4\u4e3b\u8981\u7528\u4e8e\u901a\u8fc7 Broker \u670d\u52a1\u8fdb\u7a0b\u8bfb\u53d6\u8fdc\u7aef\u5b58\u50a8\uff08\u5982S3\u3001HDFS\uff09\u4e0a\u7684\u6570\u636e\u5bfc\u5165\u5230 Doris \u8868\u91cc\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL load_label\n(\ndata_desc1[, data_desc2, ...]\n)\nWITH BROKER broker_name\n[broker_properties]\n[load_properties]\n[COMMENT "comments"];\n')),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"load_label")),(0,p.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u5bfc\u5165\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u552f\u4e00\u7684 Label\u3002\u540e\u7eed\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a label \u6765\u67e5\u770b\u4f5c\u4e1a\u8fdb\u5ea6\u3002"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"[database.]label_name"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"data_desc1")),(0,p.kt)("p",{parentName:"li"},"\u7528\u4e8e\u63cf\u8ff0\u4e00\u7ec4\u9700\u8981\u5bfc\u5165\u7684\u6587\u4ef6\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},'[MERGE|APPEND|DELETE]\nDATA INFILE\n(\n"file_path1"[, file_path2, ...]\n)\n[NEGATIVE]\nINTO TABLE `table_name`\n[PARTITION (p1, p2, ...)]\n[COLUMNS TERMINATED BY "column_separator"]\n[FORMAT AS "file_type"]\n[(column_list)]\n[COLUMNS FROM PATH AS (c1, c2, ...)]\n[SET (column_mapping)]\n[PRECEDING FILTER predicate]\n[WHERE predicate]\n[DELETE ON expr]\n[ORDER BY source_sequence]\n[PROPERTIES ("key1"="value1", ...)]\n')),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"[MERGE|APPEND|DELETE]")),(0,p.kt)("p",{parentName:"li"},"\u6570\u636e\u5408\u5e76\u7c7b\u578b\u3002\u9ed8\u8ba4\u4e3a APPEND\uff0c\u8868\u793a\u672c\u6b21\u5bfc\u5165\u662f\u666e\u901a\u7684\u8ffd\u52a0\u5199\u64cd\u4f5c\u3002MERGE \u548c DELETE \u7c7b\u578b\u4ec5\u9002\u7528\u4e8e Unique Key \u6a21\u578b\u8868\u3002\u5176\u4e2d MERGE \u7c7b\u578b\u9700\u8981\u914d\u5408 ",(0,p.kt)("inlineCode",{parentName:"p"},"[DELETE ON]")," \u8bed\u53e5\u4f7f\u7528\uff0c\u4ee5\u6807\u6ce8 Delete Flag \u5217\u3002\u800c DELETE \u7c7b\u578b\u5219\u8868\u793a\u672c\u6b21\u5bfc\u5165\u7684\u6240\u6709\u6570\u636e\u7686\u4e3a\u5220\u9664\u6570\u636e\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"DATA INFILE")),(0,p.kt)("p",{parentName:"li"},"\u6307\u5b9a\u9700\u8981\u5bfc\u5165\u7684\u6587\u4ef6\u8def\u5f84\u3002\u53ef\u4ee5\u662f\u591a\u4e2a\u3002\u53ef\u4ee5\u4f7f\u7528\u901a\u914d\u7b26\u3002\u8def\u5f84\u6700\u7ec8\u5fc5\u987b\u5339\u914d\u5230\u6587\u4ef6\uff0c\u5982\u679c\u53ea\u5339\u914d\u5230\u76ee\u5f55\u5219\u5bfc\u5165\u4f1a\u5931\u8d25\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"NEGATIVE")),(0,p.kt)("p",{parentName:"li"},"\u8be5\u5173\u952e\u8bcd\u7528\u4e8e\u8868\u793a\u672c\u6b21\u5bfc\u5165\u4e3a\u4e00\u6279\u201d\u8d1f\u201c\u5bfc\u5165\u3002\u8fd9\u79cd\u65b9\u5f0f\u4ec5\u9488\u5bf9\u5177\u6709\u6574\u578b SUM \u805a\u5408\u7c7b\u578b\u7684\u805a\u5408\u6570\u636e\u8868\u3002\u8be5\u65b9\u5f0f\u4f1a\u5c06\u5bfc\u5165\u6570\u636e\u4e2d\uff0cSUM \u805a\u5408\u5217\u5bf9\u5e94\u7684\u6574\u578b\u6570\u503c\u53d6\u53cd\u3002\u4e3b\u8981\u7528\u4e8e\u51b2\u62b5\u4e4b\u524d\u5bfc\u5165\u9519\u8bef\u7684\u6570\u636e\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"PARTITION(p1, p2, ...)")),(0,p.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u6307\u5b9a\u4ec5\u5bfc\u5165\u8868\u7684\u67d0\u4e9b\u5206\u533a\u3002\u4e0d\u518d\u5206\u533a\u8303\u56f4\u5185\u7684\u6570\u636e\u5c06\u88ab\u5ffd\u7565\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"COLUMNS TERMINATED BY")),(0,p.kt)("p",{parentName:"li"},"\u6307\u5b9a\u5217\u5206\u9694\u7b26\u3002\u4ec5\u5728 CSV \u683c\u5f0f\u4e0b\u6709\u6548\u3002\u4ec5\u80fd\u6307\u5b9a\u5355\u5b57\u8282\u5206\u9694\u7b26\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"FORMAT AS")),(0,p.kt)("p",{parentName:"li"},"\u6307\u5b9a\u6587\u4ef6\u7c7b\u578b\uff0c\u652f\u6301 CSV\u3001PARQUET \u548c ORC \u683c\u5f0f\u3002\u9ed8\u8ba4\u4e3a CSV\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"column list")),(0,p.kt)("p",{parentName:"li"},"\u7528\u4e8e\u6307\u5b9a\u539f\u59cb\u6587\u4ef6\u4e2d\u7684\u5217\u987a\u5e8f\u3002\u5173\u4e8e\u8fd9\u90e8\u5206\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u9605 ",(0,p.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/data-operate/import/import-scenes/load-data-convert"},"\u5217\u7684\u6620\u5c04\uff0c\u8f6c\u6362\u4e0e\u8fc7\u6ee4")," \u6587\u6863\u3002"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"(k1, k2, tmpk1)"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"COLUMNS FROM PATH AS")),(0,p.kt)("p",{parentName:"li"},"\u6307\u5b9a\u4ece\u5bfc\u5165\u6587\u4ef6\u8def\u5f84\u4e2d\u62bd\u53d6\u7684\u5217\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"SET (column_mapping)")),(0,p.kt)("p",{parentName:"li"},"\u6307\u5b9a\u5217\u7684\u8f6c\u6362\u51fd\u6570\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"PRECEDING FILTER predicate")),(0,p.kt)("p",{parentName:"li"},"\u524d\u7f6e\u8fc7\u6ee4\u6761\u4ef6\u3002\u6570\u636e\u9996\u5148\u6839\u636e ",(0,p.kt)("inlineCode",{parentName:"p"},"column list")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"COLUMNS FROM PATH AS")," \u6309\u987a\u5e8f\u62fc\u63a5\u6210\u539f\u59cb\u6570\u636e\u884c\u3002\u7136\u540e\u6309\u7167\u524d\u7f6e\u8fc7\u6ee4\u6761\u4ef6\u8fdb\u884c\u8fc7\u6ee4\u3002\u5173\u4e8e\u8fd9\u90e8\u5206\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u9605 ",(0,p.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/data-operate/import/import-scenes/load-data-convert"},"\u5217\u7684\u6620\u5c04\uff0c\u8f6c\u6362\u4e0e\u8fc7\u6ee4")," \u6587\u6863\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"WHERE predicate")),(0,p.kt)("p",{parentName:"li"},"\u6839\u636e\u6761\u4ef6\u5bf9\u5bfc\u5165\u7684\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4\u3002\u5173\u4e8e\u8fd9\u90e8\u5206\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u9605 ",(0,p.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/data-operate/import/import-scenes/load-data-convert"},"\u5217\u7684\u6620\u5c04\uff0c\u8f6c\u6362\u4e0e\u8fc7\u6ee4")," \u6587\u6863\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"DELETE ON expr")),(0,p.kt)("p",{parentName:"li"},"\u9700\u914d\u5408 MEREGE \u5bfc\u5165\u6a21\u5f0f\u4e00\u8d77\u4f7f\u7528\uff0c\u4ec5\u9488\u5bf9 Unique Key \u6a21\u578b\u7684\u8868\u3002\u7528\u4e8e\u6307\u5b9a\u5bfc\u5165\u6570\u636e\u4e2d\u8868\u793a Delete Flag \u7684\u5217\u548c\u8ba1\u7b97\u5173\u7cfb\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"ORDER BY")),(0,p.kt)("p",{parentName:"li"},"\u4ec5\u9488\u5bf9 Unique Key \u6a21\u578b\u7684\u8868\u3002\u7528\u4e8e\u6307\u5b9a\u5bfc\u5165\u6570\u636e\u4e2d\u8868\u793a Sequence Col \u7684\u5217\u3002\u4e3b\u8981\u7528\u4e8e\u5bfc\u5165\u65f6\u4fdd\u8bc1\u6570\u636e\u987a\u5e8f\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},'PROPERTIES ("key1"="value1", ...)')),(0,p.kt)("p",{parentName:"li"},"\u6307\u5b9a\u5bfc\u5165\u7684format\u7684\u4e00\u4e9b\u53c2\u6570\u3002\u5982\u5bfc\u5165\u7684\u6587\u4ef6\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"json"),"\u683c\u5f0f\uff0c\u5219\u53ef\u4ee5\u5728\u8fd9\u91cc\u6307\u5b9a",(0,p.kt)("inlineCode",{parentName:"p"},"json_root"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"jsonpaths"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"fuzzy_parse"),"\u7b49\u53c2\u6570\u3002")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"WITH BROKER broker_name")),(0,p.kt)("p",{parentName:"li"},"\u6307\u5b9a\u9700\u8981\u4f7f\u7528\u7684 Broker \u670d\u52a1\u540d\u79f0\u3002\u5728\u516c\u6709\u4e91 Doris \u4e2d\u3002Broker \u670d\u52a1\u540d\u79f0\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"bos"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"broker_properties")),(0,p.kt)("p",{parentName:"li"},"\u6307\u5b9a broker \u6240\u9700\u7684\u4fe1\u606f\u3002\u8fd9\u4e9b\u4fe1\u606f\u901a\u5e38\u88ab\u7528\u4e8e Broker \u80fd\u591f\u8bbf\u95ee\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u3002\u5982 BOS \u6216 HDFS\u3002\u5173\u4e8e\u5177\u4f53\u4fe1\u606f\uff0c\u53ef\u53c2\u9605 ",(0,p.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/advanced/broker"},"Broker")," \u6587\u6863\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},'(\n    "key1" = "val1",\n    "key2" = "val2",\n    ...\n)\n')),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"load_properties")),(0,p.kt)("p",{parentName:"li"},"\u6307\u5b9a\u5bfc\u5165\u7684\u76f8\u5173\u53c2\u6570\u3002\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"timeout")),(0,p.kt)("p",{parentName:"li"},"\u5bfc\u5165\u8d85\u65f6\u65f6\u95f4\u3002\u9ed8\u8ba4\u4e3a 4 \u5c0f\u65f6\u3002\u5355\u4f4d\u79d2\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"max_filter_ratio")),(0,p.kt)("p",{parentName:"li"},"\u6700\u5927\u5bb9\u5fcd\u53ef\u8fc7\u6ee4\uff08\u6570\u636e\u4e0d\u89c4\u8303\u7b49\u539f\u56e0\uff09\u7684\u6570\u636e\u6bd4\u4f8b\u3002\u9ed8\u8ba4\u96f6\u5bb9\u5fcd\u3002\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 1\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"exec_mem_limit")),(0,p.kt)("p",{parentName:"li"},"\u5bfc\u5165\u5185\u5b58\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a 2GB\u3002\u5355\u4f4d\u4e3a\u5b57\u8282\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"strict_mode")),(0,p.kt)("p",{parentName:"li"},"\u662f\u5426\u5bf9\u6570\u636e\u8fdb\u884c\u4e25\u683c\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a false\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"timezone")),(0,p.kt)("p",{parentName:"li"},"\u6307\u5b9a\u67d0\u4e9b\u53d7\u65f6\u533a\u5f71\u54cd\u7684\u51fd\u6570\u7684\u65f6\u533a\uff0c\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"strftime/alignment_timestamp/from_unixtime")," \u7b49\u7b49\uff0c\u5177\u4f53\u8bf7\u67e5\u9605 ",(0,p.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/advanced/time-zone"},"\u65f6\u533a"),' \u6587\u6863\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f7f\u7528 "Asia/Shanghai" \u65f6\u533a')),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"load_parallelism")),(0,p.kt)("p",{parentName:"li"},"\u5bfc\u5165\u5e76\u53d1\u5ea6\uff0c\u9ed8\u8ba4\u4e3a1\u3002\u8c03\u5927\u5bfc\u5165\u5e76\u53d1\u5ea6\u4f1a\u542f\u52a8\u591a\u4e2a\u6267\u884c\u8ba1\u5212\u540c\u65f6\u6267\u884c\u5bfc\u5165\u4efb\u52a1\uff0c\u52a0\u5feb\u5bfc\u5165\u901f\u5ea6\u3002 ")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"send_batch_parallelism")),(0,p.kt)("p",{parentName:"li"},"\u7528\u4e8e\u8bbe\u7f6e\u53d1\u9001\u6279\u5904\u7406\u6570\u636e\u7684\u5e76\u884c\u5ea6\uff0c\u5982\u679c\u5e76\u884c\u5ea6\u7684\u503c\u8d85\u8fc7 BE \u914d\u7f6e\u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"max_send_batch_parallelism_per_job"),"\uff0c\u90a3\u4e48\u4f5c\u4e3a\u534f\u8c03\u70b9\u7684 BE \u5c06\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"max_send_batch_parallelism_per_job")," \u7684\u503c\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"load_to_single_tablet")),(0,p.kt)("p",{parentName:"li"},"\u5e03\u5c14\u7c7b\u578b\uff0c\u4e3atrue\u8868\u793a\u652f\u6301\u4e00\u4e2a\u4efb\u52a1\u53ea\u5bfc\u5165\u6570\u636e\u5230\u5bf9\u5e94\u5206\u533a\u7684\u4e00\u4e2atablet\uff0c\u9ed8\u8ba4\u503c\u4e3afalse\uff0c\u4f5c\u4e1a\u7684\u4efb\u52a1\u6570\u53d6\u51b3\u4e8e\u6574\u4f53\u5e76\u53d1\u5ea6\u3002\u8be5\u53c2\u6570\u53ea\u5141\u8bb8\u5728\u5bf9\u5e26\u6709random\u5206\u533a\u7684olap\u8868\u5bfc\u6570\u7684\u65f6\u5019\u8bbe\u7f6e\u3002")))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("version",{since:"1.2.3",type:"inline"}," comment ")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u6307\u5b9a\u5bfc\u5165\u4efb\u52a1\u7684\u5907\u6ce8\u4fe1\u606f\u3002\u53ef\u9009\u53c2\u6570\u3002"))),(0,p.kt)("h3",{id:"example"},"Example"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4ece HDFS \u5bfc\u5165\u4e00\u6279\u6570\u636e"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label1\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file.txt")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY ","\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n')),(0,p.kt)("p",{parentName:"li"},"\u5bfc\u5165\u6587\u4ef6 ",(0,p.kt)("inlineCode",{parentName:"p"},"file.txt"),"\uff0c\u6309\u9017\u53f7\u5206\u9694\uff0c\u5bfc\u5165\u5230\u8868 ",(0,p.kt)("inlineCode",{parentName:"p"},"my_table"),"\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4ece HDFS \u5bfc\u5165\u6570\u636e\uff0c\u4f7f\u7528\u901a\u914d\u7b26\u5339\u914d\u4e24\u6279\u4e24\u6279\u6587\u4ef6\u3002\u5206\u522b\u5bfc\u5165\u5230\u4e24\u4e2a\u8868\u4e2d\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label2\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-10*")\n    INTO TABLE `my_table1`\n    PARTITION (p1)\n    COLUMNS TERMINATED BY ","\n    (k1, tmp_k2, tmp_k3)\n    SET (\n        k2 = tmp_k2 + 1,\n        k3 = tmp_k3 + 1\n    )\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-20*")\n    INTO TABLE `my_table2`\n    COLUMNS TERMINATED BY ","\n    (k1, k2, k3)\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n')),(0,p.kt)("p",{parentName:"li"},"\u4f7f\u7528\u901a\u914d\u7b26\u5339\u914d\u5bfc\u5165\u4e24\u6279\u6587\u4ef6 ",(0,p.kt)("inlineCode",{parentName:"p"},"file-10*")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"file-20*"),"\u3002\u5206\u522b\u5bfc\u5165\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"my_table1")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"my_table2")," \u4e24\u5f20\u8868\u4e2d\u3002\u5176\u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"my_table1")," \u6307\u5b9a\u5bfc\u5165\u5230\u5206\u533a ",(0,p.kt)("inlineCode",{parentName:"p"},"p1")," \u4e2d\uff0c\u5e76\u4e14\u5c06\u5bfc\u5165\u6e90\u6587\u4ef6\u4e2d\u7b2c\u4e8c\u5217\u548c\u7b2c\u4e09\u5217\u7684\u503c +1 \u540e\u5bfc\u5165\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4ece HDFS \u5bfc\u5165\u4e00\u6279\u6570\u636e\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label3\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/doris/data/*/*")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY "\\\\x01"\n)\nWITH BROKER my_hdfs_broker\n(\n    "username" = "",\n    "password" = "",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')),(0,p.kt)("p",{parentName:"li"},"\u6307\u5b9a\u5206\u9694\u7b26\u4e3a Hive \u7684\u9ed8\u8ba4\u5206\u9694\u7b26 ",(0,p.kt)("inlineCode",{parentName:"p"},"\\\\x01"),"\uff0c\u5e76\u4f7f\u7528\u901a\u914d\u7b26 * \u6307\u5b9a ",(0,p.kt)("inlineCode",{parentName:"p"},"data")," \u76ee\u5f55\u4e0b\u6240\u6709\u76ee\u5f55\u7684\u6240\u6709\u6587\u4ef6\u3002\u4f7f\u7528\u7b80\u5355\u8ba4\u8bc1\uff0c\u540c\u65f6\u914d\u7f6e namenode HA\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5bfc\u5165 Parquet \u683c\u5f0f\u6570\u636e\uff0c\u6307\u5b9a FORMAT \u4e3a parquet\u3002\u9ed8\u8ba4\u662f\u901a\u8fc7\u6587\u4ef6\u540e\u7f00\u5224\u65ad"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label4\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file")\n    INTO TABLE `my_table`\n    FORMAT AS "parquet"\n    (k1, k2, k3)\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n'))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5bfc\u5165\u6570\u636e\uff0c\u5e76\u63d0\u53d6\u6587\u4ef6\u8def\u5f84\u4e2d\u7684\u5206\u533a\u5b57\u6bb5"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label10\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/city=beijing/*/*")\n    INTO TABLE `my_table`\n    FORMAT AS "csv"\n    (k1, k2, k3)\n    COLUMNS FROM PATH AS (city, utc_date)\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n')),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"my_table")," \u8868\u4e2d\u7684\u5217\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"k1, k2, k3, city, utc_date"),"\u3002"),(0,p.kt)("p",{parentName:"li"},"\u5176\u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"hdfs://hdfs_host:hdfs_port/user/doris/data/input/dir/city=beijing")," \u76ee\u5f55\u4e0b\u5305\u62ec\u5982\u4e0b\u6587\u4ef6\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"hdfs://hdfs_host:hdfs_port/input/city=beijing/utc_date=2020-10-01/0000.csv\nhdfs://hdfs_host:hdfs_port/input/city=beijing/utc_date=2020-10-02/0000.csv\nhdfs://hdfs_host:hdfs_port/input/city=tianji/utc_date=2020-10-03/0000.csv\nhdfs://hdfs_host:hdfs_port/input/city=tianji/utc_date=2020-10-04/0000.csv\n")),(0,p.kt)("p",{parentName:"li"},"\u6587\u4ef6\u4e2d\u53ea\u5305\u542b ",(0,p.kt)("inlineCode",{parentName:"p"},"k1, k2, k3")," \u4e09\u5217\u6570\u636e\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"city, utc_date")," \u8fd9\u4e24\u5217\u6570\u636e\u4f1a\u4ece\u6587\u4ef6\u8def\u5f84\u4e2d\u63d0\u53d6\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5bf9\u5f85\u5bfc\u5165\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label6\n(\n    DATA INFILE("hdfs://host:port/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, k3)\n    SET (\n        k2 = k2 + 1\n    )\n    PRECEDING FILTER k1 = 1\n    WHERE k1 > k2\n)\nWITH BROKER hdfs\n(\n    "username"="user",\n    "password"="pass"\n);\n')),(0,p.kt)("p",{parentName:"li"},"\u53ea\u6709\u539f\u59cb\u6570\u636e\u4e2d\uff0ck1 = 1\uff0c\u5e76\u4e14\u8f6c\u6362\u540e\uff0ck1 > k2 \u7684\u884c\u624d\u4f1a\u88ab\u5bfc\u5165\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5bfc\u5165\u6570\u636e\uff0c\u63d0\u53d6\u6587\u4ef6\u8def\u5f84\u4e2d\u7684\u65f6\u95f4\u5206\u533a\u5b57\u6bb5\uff0c\u5e76\u4e14\u65f6\u95f4\u5305\u542b %3A (\u5728 hdfs \u8def\u5f84\u4e2d\uff0c\u4e0d\u5141\u8bb8\u6709 ':'\uff0c\u6240\u6709 ':' \u4f1a\u7531 %3A \u66ff\u6362)"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label7\n(\n    DATA INFILE("hdfs://host:port/user/data/*/test.txt") \n    INTO TABLE `tbl12`\n    COLUMNS TERMINATED BY ","\n    (k2,k3)\n    COLUMNS FROM PATH AS (data_time)\n    SET (\n        data_time=str_to_date(data_time, \'%Y-%m-%d %H%%3A%i%%3A%s\')\n    )\n)\nWITH BROKER hdfs\n(\n    "username"="user",\n    "password"="pass"\n);\n')),(0,p.kt)("p",{parentName:"li"},"\u8def\u5f84\u4e0b\u6709\u5982\u4e0b\u6587\u4ef6\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"/user/data/data_time=2020-02-17 00%3A00%3A00/test.txt\n/user/data/data_time=2020-02-18 00%3A00%3A00/test.txt\n")),(0,p.kt)("p",{parentName:"li"},"\u8868\u7ed3\u6784\u4e3a\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"data_time DATETIME,\nk2        INT,\nk3        INT\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4ece HDFS \u5bfc\u5165\u4e00\u6279\u6570\u636e\uff0c\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\u548c\u8fc7\u6ee4\u6bd4\u4f8b\u3002\u4f7f\u7528\u660e\u6587 my_hdfs_broker \u7684 broker\u3002\u7b80\u5355\u8ba4\u8bc1\u3002\u5e76\u4e14\u5c06\u539f\u6709\u6570\u636e\u4e2d\u4e0e \u5bfc\u5165\u6570\u636e\u4e2dv2 \u5927\u4e8e100 \u7684\u5217\u76f8\u5339\u914d\u7684\u5217\u5220\u9664\uff0c\u5176\u4ed6\u5217\u6b63\u5e38\u5bfc\u5165"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label8\n(\n    MERGE DATA INFILE("HDFS://test:802/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, k3, v2, v1)\n    DELETE ON v2 > 100\n)\nWITH HDFS\n(\n    "hadoop.username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600",\n    "max_filter_ratio" = "0.1"\n);\n')),(0,p.kt)("p",{parentName:"li"},"\u4f7f\u7528 MERGE \u65b9\u5f0f\u5bfc\u5165\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"my_table")," \u5fc5\u987b\u662f\u4e00\u5f20 Unique Key \u7684\u8868\u3002\u5f53\u5bfc\u5165\u6570\u636e\u4e2d\u7684 v2 \u5217\u7684\u503c\u5927\u4e8e 100 \u65f6\uff0c\u8be5\u884c\u4f1a\u88ab\u8ba4\u4e3a\u662f\u4e00\u4e2a\u5220\u9664\u884c\u3002"),(0,p.kt)("p",{parentName:"li"},"\u5bfc\u5165\u4efb\u52a1\u7684\u8d85\u65f6\u65f6\u95f4\u662f 3600 \u79d2\uff0c\u5e76\u4e14\u5141\u8bb8\u9519\u8bef\u7387\u5728 10% \u4ee5\u5185\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5bfc\u5165\u65f6\u6307\u5b9asource_sequence\u5217\uff0c\u4fdd\u8bc1UNIQUE_KEYS\u8868\u4e2d\u7684\u66ff\u6362\u987a\u5e8f\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label9\n(\n    DATA INFILE("HDFS://test:802/input/file")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY ","\n    (k1,k2,source_sequence,v1,v2)\n    ORDER BY source_sequence\n) \nWITH HDFS\n(\n    "hadoop.username"="user",\n    "password"="pass"\n)\n')),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"my_table")," \u5fc5\u987b\u662f Unqiue Key \u6a21\u578b\u8868\uff0c\u5e76\u4e14\u6307\u5b9a\u4e86 Sequcence Col\u3002\u6570\u636e\u4f1a\u6309\u7167\u6e90\u6570\u636e\u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"source_sequence")," \u5217\u7684\u503c\u6765\u4fdd\u8bc1\u987a\u5e8f\u6027\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4ece HDFS \u5bfc\u5165\u4e00\u6279\u6570\u636e\uff0c\u6307\u5b9a\u6587\u4ef6\u683c\u5f0f\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"json")," \u5e76\u6307\u5b9a ",(0,p.kt)("inlineCode",{parentName:"p"},"json_root"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"jsonpaths")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label10\n(\n    DATA INFILE("HDFS://test:port/input/file.json")\n    INTO TABLE `my_table`\n    FORMAT AS "json"\n    PROPERTIES(\n      "json_root" = "$.item",\n      "jsonpaths" = "[$.id, $.city, $.code]"\n    )       \n)\nwith HDFS (\n"hadoop.username" = "user"\n"password" = ""\n)\nPROPERTIES\n(\n"timeout"="1200",\n"max_filter_ratio"="0.1"\n);\n')),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"jsonpaths")," \u53ef\u4e0e ",(0,p.kt)("inlineCode",{parentName:"p"},"column list")," \u53ca ",(0,p.kt)("inlineCode",{parentName:"p"},"SET (column_mapping)"),"\u914d\u5408\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label10\n(\n    DATA INFILE("HDFS://test:port/input/file.json")\n    INTO TABLE `my_table`\n    FORMAT AS "json"\n    (id, code, city)\n    SET (id = id * 10)\n    PROPERTIES(\n      "json_root" = "$.item",\n      "jsonpaths" = "[$.id, $.code, $.city]"\n    )       \n)\nwith HDFS (\n"hadoop.username" = "user"\n"password" = ""\n)\nPROPERTIES\n(\n"timeout"="1200",\n"max_filter_ratio"="0.1"\n);\n\n'))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4ece\u817e\u8baf\u4e91cos\u4e2d\u4ee5csv\u683c\u5f0f\u5bfc\u5165\u6570\u636e\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-SQL"},'LOAD LABEL example_db.label10\n(\nDATA INFILE("cosn://my_bucket/input/file.csv")\nINTO TABLE `my_table`\n(k1, k2, k3)\n)\nWITH BROKER "broker_name"\n(\n    "fs.cosn.userinfo.secretId" = "xxx",\n    "fs.cosn.userinfo.secretKey" = "xxxx",\n    "fs.cosn.bucket.endpoint_suffix" = "cos.xxxxxxxxx.myqcloud.com"\n)\n'))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5bfc\u5165CSV\u6570\u636e\u65f6\u53bb\u6389\u53cc\u5f15\u53f7, \u5e76\u8df3\u8fc7\u524d5\u884c\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-SQL"},'LOAD LABEL example_db.label12\n(\nDATA INFILE("cosn://my_bucket/input/file.csv")\nINTO TABLE `my_table`\n(k1, k2, k3)\nPROPERTIES("trim_double_quotes" = "true", "skip_lines" = "5")\n)\nWITH BROKER "broker_name"\n(\n    "fs.cosn.userinfo.secretId" = "xxx",\n    "fs.cosn.userinfo.secretKey" = "xxxx",\n    "fs.cosn.bucket.endpoint_suffix" = "cos.xxxxxxxxx.myqcloud.com"\n)\n')))),(0,p.kt)("h3",{id:"keywords"},"Keywords"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"BROKER, LOAD\n")),(0,p.kt)("h3",{id:"best-practice"},"Best Practice"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u67e5\u770b\u5bfc\u5165\u4efb\u52a1\u72b6\u6001"),(0,p.kt)("p",{parentName:"li"},"Broker Load \u662f\u4e00\u4e2a\u5f02\u6b65\u5bfc\u5165\u8fc7\u7a0b\uff0c\u8bed\u53e5\u6267\u884c\u6210\u529f\u4ec5\u4ee3\u8868\u5bfc\u5165\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\uff0c\u5e76\u4e0d\u4ee3\u8868\u6570\u636e\u5bfc\u5165\u6210\u529f\u3002\u5bfc\u5165\u72b6\u6001\u9700\u8981\u901a\u8fc7 ",(0,p.kt)("a",{parentName:"p",href:"../../Show-Statements/SHOW-LOAD.md"},"SHOW LOAD")," \u547d\u4ee4\u67e5\u770b\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u53d6\u6d88\u5bfc\u5165\u4efb\u52a1"),(0,p.kt)("p",{parentName:"li"},"\u5df2\u63d0\u4ea4\u5207\u5c1a\u672a\u7ed3\u675f\u7684\u5bfc\u5165\u4efb\u52a1\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("a",{parentName:"p",href:"./CANCEL-LOAD.md"},"CANCEL LOAD")," \u547d\u4ee4\u53d6\u6d88\u3002\u53d6\u6d88\u540e\uff0c\u5df2\u5199\u5165\u7684\u6570\u636e\u4e5f\u4f1a\u56de\u6eda\uff0c\u4e0d\u4f1a\u751f\u6548\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Label\u3001\u5bfc\u5165\u4e8b\u52a1\u3001\u591a\u8868\u539f\u5b50\u6027"),(0,p.kt)("p",{parentName:"li"},"Doris \u4e2d\u6240\u6709\u5bfc\u5165\u4efb\u52a1\u90fd\u662f\u539f\u5b50\u751f\u6548\u7684\u3002\u5e76\u4e14\u5728\u540c\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\u4e2d\u5bf9\u591a\u5f20\u8868\u7684\u5bfc\u5165\u4e5f\u80fd\u591f\u4fdd\u8bc1\u539f\u5b50\u6027\u3002\u540c\u65f6\uff0cDoris \u8fd8\u53ef\u4ee5\u901a\u8fc7 Label \u7684\u673a\u5236\u6765\u4fdd\u8bc1\u6570\u636e\u5bfc\u5165\u7684\u4e0d\u4e22\u4e0d\u91cd\u3002\u5177\u4f53\u8bf4\u660e\u53ef\u4ee5\u53c2\u9605 ",(0,p.kt)("a",{parentName:"p",href:"../../../../data-operate/import/import-scenes/load-atomicity.md"},"\u5bfc\u5165\u4e8b\u52a1\u548c\u539f\u5b50\u6027")," \u6587\u6863\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5217\u6620\u5c04\u3001\u884d\u751f\u5217\u548c\u8fc7\u6ee4"),(0,p.kt)("p",{parentName:"li"},"Doris \u53ef\u4ee5\u5728\u5bfc\u5165\u8bed\u53e5\u4e2d\u652f\u6301\u975e\u5e38\u4e30\u5bcc\u7684\u5217\u8f6c\u6362\u548c\u8fc7\u6ee4\u64cd\u4f5c\u3002\u652f\u6301\u7edd\u5927\u591a\u6570\u5185\u7f6e\u51fd\u6570\u548c UDF\u3002\u5173\u4e8e\u5982\u4f55\u6b63\u786e\u7684\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\uff0c\u53ef\u53c2\u9605 ",(0,p.kt)("a",{parentName:"p",href:"../../../../data-operate/import/import-scenes/load-data-convert.md"},"\u5217\u7684\u6620\u5c04\uff0c\u8f6c\u6362\u4e0e\u8fc7\u6ee4")," \u6587\u6863\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u9519\u8bef\u6570\u636e\u8fc7\u6ee4"),(0,p.kt)("p",{parentName:"li"},"Doris \u7684\u5bfc\u5165\u4efb\u52a1\u53ef\u4ee5\u5bb9\u5fcd\u4e00\u90e8\u5206\u683c\u5f0f\u9519\u8bef\u7684\u6570\u636e\u3002\u5bb9\u5fcd\u4e86\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"max_filter_ratio")," \u8bbe\u7f6e\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u5373\u8868\u793a\u5f53\u6709\u4e00\u6761\u9519\u8bef\u6570\u636e\u65f6\uff0c\u6574\u4e2a\u5bfc\u5165\u4efb\u52a1\u5c06\u4f1a\u5931\u8d25\u3002\u5982\u679c\u7528\u6237\u5e0c\u671b\u5ffd\u7565\u90e8\u5206\u6709\u95ee\u9898\u7684\u6570\u636e\u884c\uff0c\u53ef\u4ee5\u5c06\u6b21\u53c2\u6570\u8bbe\u7f6e\u4e3a 0~1 \u4e4b\u95f4\u7684\u6570\u503c\uff0cDoris \u4f1a\u81ea\u52a8\u8df3\u8fc7\u54ea\u4e9b\u6570\u636e\u683c\u5f0f\u4e0d\u6b63\u786e\u7684\u884c\u3002"),(0,p.kt)("p",{parentName:"li"},"\u5173\u4e8e\u5bb9\u5fcd\u7387\u7684\u4e00\u4e9b\u8ba1\u7b97\u65b9\u5f0f\uff0c\u53ef\u4ee5\u53c2\u9605 ",(0,p.kt)("a",{parentName:"p",href:"../../../../data-operate/import/import-scenes/load-data-convert.md"},"\u5217\u7684\u6620\u5c04\uff0c\u8f6c\u6362\u4e0e\u8fc7\u6ee4")," \u6587\u6863\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4e25\u683c\u6a21\u5f0f"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"strict_mode")," \u5c5e\u6027\u7528\u4e8e\u8bbe\u7f6e\u5bfc\u5165\u4efb\u52a1\u662f\u5426\u8fd0\u884c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u3002\u8be5\u683c\u5f0f\u4f1a\u5bf9\u5217\u6620\u5c04\u3001\u8f6c\u6362\u548c\u8fc7\u6ee4\u7684\u7ed3\u679c\u4ea7\u751f\u5f71\u54cd\u3002\u5173\u4e8e\u4e25\u683c\u6a21\u5f0f\u7684\u5177\u4f53\u8bf4\u660e\uff0c\u53ef\u53c2\u9605 ",(0,p.kt)("a",{parentName:"p",href:"../../../../data-operate/import/import-scenes/load-strict-mode.md"},"\u4e25\u683c\u6a21\u5f0f")," \u6587\u6863\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u8d85\u65f6\u65f6\u95f4"),(0,p.kt)("p",{parentName:"li"},"Broker Load \u7684\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u4e3a 4 \u5c0f\u65f6\u3002\u4ece\u4efb\u52a1\u63d0\u4ea4\u5f00\u59cb\u7b97\u8d77\u3002\u5982\u679c\u5728\u8d85\u65f6\u65f6\u95f4\u5185\u6ca1\u6709\u5b8c\u6210\uff0c\u5219\u4efb\u52a1\u4f1a\u5931\u8d25\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u6570\u636e\u91cf\u548c\u4efb\u52a1\u6570\u9650\u5236"),(0,p.kt)("p",{parentName:"li"},"Broker Load \u9002\u5408\u5728\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\u4e2d\u5bfc\u5165100GB\u4ee5\u5185\u7684\u6570\u636e\u3002\u867d\u7136\u7406\u8bba\u4e0a\u5728\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\u4e2d\u5bfc\u5165\u7684\u6570\u636e\u91cf\u6ca1\u6709\u4e0a\u9650\u3002\u4f46\u662f\u63d0\u4ea4\u8fc7\u5927\u7684\u5bfc\u5165\u4f1a\u5bfc\u81f4\u8fd0\u884c\u65f6\u95f4\u8f83\u957f\uff0c\u5e76\u4e14\u5931\u8d25\u540e\u91cd\u8bd5\u7684\u4ee3\u4ef7\u4e5f\u4f1a\u589e\u52a0\u3002"),(0,p.kt)("p",{parentName:"li"},"\u540c\u65f6\u53d7\u9650\u4e8e\u96c6\u7fa4\u89c4\u6a21\uff0c\u6211\u4eec\u9650\u5236\u4e86\u5bfc\u5165\u7684\u6700\u5927\u6570\u636e\u91cf\u4e3a ComputeNode \u8282\u70b9\u6570 * 3GB\u3002\u4ee5\u4fdd\u8bc1\u7cfb\u7edf\u8d44\u6e90\u7684\u5408\u7406\u5229\u7528\u3002\u5982\u679c\u6709\u5927\u6570\u636e\u91cf\u9700\u8981\u5bfc\u5165\uff0c\u5efa\u8bae\u5206\u6210\u591a\u4e2a\u5bfc\u5165\u4efb\u52a1\u63d0\u4ea4\u3002"),(0,p.kt)("p",{parentName:"li"},"Doris \u540c\u65f6\u4f1a\u9650\u5236\u96c6\u7fa4\u5185\u540c\u65f6\u8fd0\u884c\u7684\u5bfc\u5165\u4efb\u52a1\u6570\u91cf\uff0c\u901a\u5e38\u5728 3-10 \u4e2a\u4e0d\u7b49\u3002\u4e4b\u540e\u63d0\u4ea4\u7684\u5bfc\u5165\u4f5c\u4e1a\u4f1a\u6392\u961f\u7b49\u5f85\u3002\u961f\u5217\u6700\u5927\u957f\u5ea6\u4e3a 100\u3002\u4e4b\u540e\u7684\u63d0\u4ea4\u4f1a\u76f4\u63a5\u62d2\u7edd\u3002\u6ce8\u610f\u6392\u961f\u65f6\u95f4\u4e5f\u88ab\u8ba1\u7b97\u5230\u4e86\u4f5c\u4e1a\u603b\u65f6\u95f4\u4e2d\u3002\u5982\u679c\u8d85\u65f6\uff0c\u5219\u4f5c\u4e1a\u4f1a\u88ab\u53d6\u6d88\u3002\u6240\u4ee5\u5efa\u8bae\u901a\u8fc7\u76d1\u63a7\u4f5c\u4e1a\u8fd0\u884c\u72b6\u6001\u6765\u5408\u7406\u63a7\u5236\u4f5c\u4e1a\u63d0\u4ea4\u9891\u7387\u3002"))))}k.isMDXComponent=!0}}]);