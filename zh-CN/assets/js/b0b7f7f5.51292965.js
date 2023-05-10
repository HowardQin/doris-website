"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[37346],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(a),c=l,k=s["".concat(i,".").concat(c)]||s[c]||m[c]||r;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:l,o[1]=p;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},25048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={title:"\u6279\u91cf\u5220\u9664",language:"zh-CN"},o=void 0,p={unversionedId:"data-operate/update-delete/batch-delete-manual",id:"data-operate/update-delete/batch-delete-manual",title:"\u6279\u91cf\u5220\u9664",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/update-delete/batch-delete-manual.md",sourceDirName:"data-operate/update-delete",slug:"/data-operate/update-delete/batch-delete-manual",permalink:"/zh-CN/docs/dev/data-operate/update-delete/batch-delete-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6279\u91cf\u5220\u9664",language:"zh-CN"},sidebar:"docs",previous:{title:"Mysqldump\u5bfc\u51fa\u8868\u7ed3\u6784\u6216\u6570\u636e",permalink:"/zh-CN/docs/dev/data-operate/export/export_with_mysql_dump"},next:{title:"\u6570\u636e\u66f4\u65b0",permalink:"/zh-CN/docs/dev/data-operate/update-delete/update"}},i={},u=[{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:2},{value:"\u5bfc\u5165",id:"\u5bfc\u5165",level:3},{value:"\u8bfb\u53d6",id:"\u8bfb\u53d6",level:3},{value:"Cumulative Compaction",id:"cumulative-compaction",level:3},{value:"Base Compaction",id:"base-compaction",level:3},{value:"\u542f\u7528\u6279\u91cf\u5220\u9664\u652f\u6301",id:"\u542f\u7528\u6279\u91cf\u5220\u9664\u652f\u6301",level:2},{value:"\u8bed\u6cd5\u8bf4\u660e",id:"\u8bed\u6cd5\u8bf4\u660e",level:2},{value:"Stream Load",id:"stream-load",level:3},{value:"Broker Load",id:"broker-load",level:3},{value:"Routine Load",id:"routine-load",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u67e5\u770b\u662f\u5426\u542f\u7528\u6279\u91cf\u5220\u9664\u652f\u6301",id:"\u67e5\u770b\u662f\u5426\u542f\u7528\u6279\u91cf\u5220\u9664\u652f\u6301",level:3},{value:"Stream Load\u4f7f\u7528\u793a\u4f8b",id:"stream-load\u4f7f\u7528\u793a\u4f8b",level:3}],d={toc:u},s="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6279\u91cf\u5220\u9664"},"\u6279\u91cf\u5220\u9664"),(0,l.kt)("p",null,"\u76ee\u524dDoris \u652f\u6301 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/import/import-way/broker-load-manual"},"Broker Load"),"\uff0c",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/import/import-way/routine-load-manual"},"Routine Load"),"\uff0c ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/import/import-way/stream-load-manual"},"Stream Load")," \u7b49\u591a\u79cd\u5bfc\u5165\u65b9\u5f0f\uff0c\u5bf9\u4e8e\u6570\u636e\u7684\u5220\u9664\u76ee\u524d\u53ea\u80fd\u901a\u8fc7delete\u8bed\u53e5\u8fdb\u884c\u5220\u9664\uff0c\u4f7f\u7528delete \u8bed\u53e5\u7684\u65b9\u5f0f\u5220\u9664\u65f6\uff0c\u6bcf\u6267\u884c\u4e00\u6b21delete \u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u7248\u672c\uff0c\u5982\u679c\u9891\u7e41\u5220\u9664\u4f1a\u4e25\u91cd\u5f71\u54cd\u67e5\u8be2\u6027\u80fd\uff0c\u5e76\u4e14\u5728\u4f7f\u7528delete\u65b9\u5f0f\u5220\u9664\u65f6\uff0c\u662f\u901a\u8fc7\u751f\u6210\u4e00\u4e2a\u7a7a\u7684rowset\u6765\u8bb0\u5f55\u5220\u9664\u6761\u4ef6\u5b9e\u73b0\uff0c\u6bcf\u6b21\u8bfb\u53d6\u90fd\u8981\u5bf9\u5220\u9664\u6761\u4ef6\u8fdb\u884c\u8fc7\u6ee4\uff0c\u540c\u6837\u5728\u6761\u4ef6\u8f83\u591a\u65f6\u4f1a\u5bf9\u6027\u80fd\u9020\u6210\u5f71\u54cd\u3002\u5bf9\u6bd4\u5176\u4ed6\u7684\u7cfb\u7edf\uff0cgreenplum \u7684\u5b9e\u73b0\u65b9\u5f0f\u66f4\u50cf\u662f\u4f20\u7edf\u6570\u636e\u5e93\u4ea7\u54c1\uff0csnowflake \u901a\u8fc7merge \u8bed\u6cd5\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u7c7b\u4f3c\u4e8ecdc\u6570\u636e\u5bfc\u5165\u7684\u573a\u666f\uff0c\u6570\u636e\u4e2dinsert\u548cdelete\u4e00\u822c\u662f\u7a7f\u63d2\u51fa\u73b0\u7684\uff0c\u9762\u5bf9\u8fd9\u79cd\u573a\u666f\u6211\u4eec\u76ee\u524d\u7684\u5bfc\u5165\u65b9\u5f0f\u4e5f\u65e0\u6cd5\u6ee1\u8db3\uff0c\u5373\u4f7f\u6211\u4eec\u80fd\u591f\u5206\u79bb\u51fainsert\u548cdelete\u867d\u7136\u53ef\u4ee5\u89e3\u51b3\u5bfc\u5165\u7684\u95ee\u9898\uff0c\u4f46\u662f\u4ecd\u7136\u89e3\u51b3\u4e0d\u4e86\u5220\u9664\u7684\u95ee\u9898\u3002\u4f7f\u7528\u6279\u91cf\u5220\u9664\u529f\u80fd\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e9b\u4e2a\u522b\u573a\u666f\u7684\u9700\u6c42\u3002\u6570\u636e\u5bfc\u5165\u6709\u4e09\u79cd\u5408\u5e76\u65b9\u5f0f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"APPEND: \u6570\u636e\u5168\u90e8\u8ffd\u52a0\u5230\u73b0\u6709\u6570\u636e\u4e2d\uff1b"),(0,l.kt)("li",{parentName:"ol"},"DELETE: \u5220\u9664\u6240\u6709\u4e0e\u5bfc\u5165\u6570\u636ekey \u5217\u503c\u76f8\u540c\u7684\u884c(\u5f53\u8868\u5b58\u5728",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/data-operate/update-delete/sequence-column-manual"},(0,l.kt)("inlineCode",{parentName:"a"},"sequence")),"\u5217\u65f6\uff0c\u9700\u8981\u540c\u65f6\u6ee1\u8db3\u4e3b\u952e\u76f8\u540c\u4ee5\u53casequence\u5217\u7684\u5927\u5c0f\u903b\u8f91\u624d\u80fd\u6b63\u786e\u5220\u9664\uff0c\u8be6\u89c1\u4e0b\u8fb9\u7528\u4f8b4)\uff1b"),(0,l.kt)("li",{parentName:"ol"},"MERGE: \u6839\u636e DELETE ON \u7684\u51b3\u5b9a APPEND \u8fd8\u662f DELETE\u3002")),(0,l.kt)("h2",{id:"\u57fa\u672c\u539f\u7406"},"\u57fa\u672c\u539f\u7406"),(0,l.kt)("p",null,"\u901a\u8fc7\u589e\u52a0\u4e00\u4e2a\u9690\u85cf\u5217",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_DELETE_SIGN__"),"\u5b9e\u73b0\uff0c\u56e0\u4e3a\u6211\u4eec\u53ea\u662f\u5728unique \u6a21\u578b\u4e0a\u505a\u6279\u91cf\u5220\u9664\uff0c\u56e0\u6b64\u53ea\u9700\u8981\u589e\u52a0\u4e00\u4e2a\u7c7b\u578b\u4e3abool \u805a\u5408\u51fd\u6570\u4e3areplace \u7684\u9690\u85cf\u5217\u5373\u53ef\u3002\u5728be \u5404\u79cd\u805a\u5408\u5199\u5165\u6d41\u7a0b\u90fd\u548c\u6b63\u5e38\u5217\u4e00\u6837\uff0c\u8bfb\u53d6\u65b9\u6848\u6709\u4e24\u4e2a\uff1a"),(0,l.kt)("p",null,"\u5728fe\u9047\u5230 * \u7b49\u6269\u5c55\u65f6\u53bb\u6389",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_DELETE_SIGN__"),"\uff0c\u5e76\u4e14\u9ed8\u8ba4\u52a0\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_DELETE_SIGN__ != true")," \u7684\u6761\u4ef6\uff0c be \u8bfb\u53d6\u65f6\u90fd\u4f1a\u52a0\u4e0a\u4e00\u5217\u8fdb\u884c\u5224\u65ad\uff0c\u901a\u8fc7\u6761\u4ef6\u786e\u5b9a\u662f\u5426\u5220\u9664\u3002"),(0,l.kt)("h3",{id:"\u5bfc\u5165"},"\u5bfc\u5165"),(0,l.kt)("p",null,"\u5bfc\u5165\u65f6\u5728fe \u89e3\u6790\u65f6\u5c06\u9690\u85cf\u5217\u7684\u503c\u8bbe\u7f6e\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE ON")," \u8868\u8fbe\u5f0f\u7684\u503c\uff0c\u5176\u4ed6\u7684\u805a\u5408\u884c\u4e3a\u548creplace\u7684\u805a\u5408\u5217\u76f8\u540c\u3002"),(0,l.kt)("h3",{id:"\u8bfb\u53d6"},"\u8bfb\u53d6"),(0,l.kt)("p",null,"\u8bfb\u53d6\u65f6\u5728\u6240\u6709\u5b58\u5728\u9690\u85cf\u5217\u7684olapScanNode\u4e0a\u589e\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_DELETE_SIGN__ != true")," \u7684\u6761\u4ef6\uff0cbe \u4e0d\u611f\u77e5\u8fd9\u4e00\u8fc7\u7a0b\uff0c\u6b63\u5e38\u6267\u884c\u3002"),(0,l.kt)("h3",{id:"cumulative-compaction"},"Cumulative Compaction"),(0,l.kt)("p",null,"Cumulative Compaction \u65f6\u5c06\u9690\u85cf\u5217\u770b\u4f5c\u6b63\u5e38\u7684\u5217\u5904\u7406\uff0cCompaction\u903b\u8f91\u6ca1\u6709\u53d8\u5316\u3002"),(0,l.kt)("h3",{id:"base-compaction"},"Base Compaction"),(0,l.kt)("p",null,"Base Compaction \u65f6\u8981\u5c06\u6807\u8bb0\u4e3a\u5220\u9664\u7684\u884c\u7684\u5220\u6389\uff0c\u4ee5\u51cf\u5c11\u6570\u636e\u5360\u7528\u7684\u7a7a\u95f4\u3002"),(0,l.kt)("h2",{id:"\u542f\u7528\u6279\u91cf\u5220\u9664\u652f\u6301"},"\u542f\u7528\u6279\u91cf\u5220\u9664\u652f\u6301"),(0,l.kt)("p",null,"\u542f\u7528\u6279\u91cf\u5220\u9664\u652f\u6301\u6709\u4e00\u4e0b\u4e24\u79cd\u5f62\u5f0f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u5728fe \u914d\u7f6e\u6587\u4ef6\u4e2d\u589e\u52a0",(0,l.kt)("inlineCode",{parentName:"li"},"enable_batch_delete_by_default=true")," \u91cd\u542ffe \u540e\u65b0\u5efa\u8868\u7684\u90fd\u652f\u6301\u6279\u91cf\u5220\u9664\uff0c\u6b64\u9009\u9879\u9ed8\u8ba4\u4e3afalse\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u6ca1\u6709\u66f4\u6539\u4e0a\u8ff0fe \u914d\u7f6e\u6216\u5bf9\u4e8e\u4ee5\u5b58\u5728\u7684\u4e0d\u652f\u6301\u6279\u91cf\u5220\u9664\u529f\u80fd\u7684\u8868\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u8bed\u53e5\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},'ALTER TABLE tablename ENABLE FEATURE "BATCH_DELETE"')," \u6765\u542f\u7528\u6279\u91cf\u5220\u9664\u3002\u672c\u64cd\u4f5c\u672c\u8d28\u4e0a\u662f\u4e00\u4e2aschema change \u64cd\u4f5c\uff0c\u64cd\u4f5c\u7acb\u5373\u8fd4\u56de\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"show alter table column")," \u6765\u786e\u8ba4\u64cd\u4f5c\u662f\u5426\u5b8c\u6210\u3002")),(0,l.kt)("p",null,"\u90a3\u4e48\u5982\u4f55\u786e\u5b9a\u4e00\u4e2a\u8868\u662f\u5426\u652f\u6301\u6279\u91cf\u5220\u9664\uff0c\u53ef\u4ee5\u901a\u8fc7 \u8bbe\u7f6e\u4e00\u4e2asession variable \u6765\u663e\u793a\u9690\u85cf\u5217 ",(0,l.kt)("inlineCode",{parentName:"p"},"SET show_hidden_columns=true")," \uff0c\u4e4b\u540e\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"desc tablename"),"\uff0c\u5982\u679c\u8f93\u51fa\u4e2d\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_DELETE_SIGN__")," \u5217\u5219\u652f\u6301\uff0c\u5982\u679c\u6ca1\u6709\u5219\u4e0d\u652f\u6301\u3002"),(0,l.kt)("h2",{id:"\u8bed\u6cd5\u8bf4\u660e"},"\u8bed\u6cd5\u8bf4\u660e"),(0,l.kt)("p",null,"\u5bfc\u5165\u7684\u8bed\u6cd5\u8bbe\u8ba1\u65b9\u9762\u4e3b\u8981\u662f\u589e\u52a0\u4e00\u4e2a\u6307\u5b9a\u5220\u9664\u6807\u8bb0\u5217\u7684\u5b57\u6bb5\u7684colum\u6620\u5c04\uff0c\u5e76\u4e14\u9700\u8981\u5728\u5bfc\u5165\u7684\u6570\u636e\u4e2d\u589e\u52a0\u4e00\u5217\uff0c\u5404\u79cd\u5bfc\u5165\u65b9\u5f0f\u8bbe\u7f6e\u7684\u8bed\u6cd5\u5982\u4e0b"),(0,l.kt)("h3",{id:"stream-load"},"Stream Load"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Stream Load")," \u7684\u5199\u6cd5\u5728header \u4e2d\u7684 columns \u5b57\u6bb5\u589e\u52a0\u4e00\u4e2a\u8bbe\u7f6e\u5220\u9664\u6807\u8bb0\u5217\u7684\u5b57\u6bb5\uff0c \u793a\u4f8b ",(0,l.kt)("inlineCode",{parentName:"p"},'-H "columns: k1, k2, label_c3" -H "merge_type: [MERGE|APPEND|DELETE]" -H "delete: label_c3=1"'),"\u3002"),(0,l.kt)("h3",{id:"broker-load"},"Broker Load"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Broker Load")," \u7684\u5199\u6cd5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"PROPERTIES")," \u5904\u8bbe\u7f6e\u5220\u9664\u6807\u8bb0\u5217\u7684\u5b57\u6bb5\uff0c\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL db1.label1\n(\n    [MERGE|APPEND|DELETE] DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file1")\n    INTO TABLE tbl1\n    COLUMNS TERMINATED BY ","\n    (tmp_c1,tmp_c2, label_c3)\n    SET\n    (\n        id=tmp_c2,\n        name=tmp_c1,\n    )\n    [DELETE ON label_c3=true]\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n')),(0,l.kt)("h3",{id:"routine-load"},"Routine Load"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Routine Load"),"\u7684\u5199\u6cd5\u5728  ",(0,l.kt)("inlineCode",{parentName:"p"},"columns"),"\u5b57\u6bb5\u589e\u52a0\u6620\u5c04\uff0c\u6620\u5c04\u65b9\u5f0f\u540c\u4e0a\uff0c\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test1 ON example_tbl \n [WITH MERGE|APPEND|DELETE]\n COLUMNS(k1, k2, k3, v1, v2, label),\n WHERE k1 > 100 and k2 like "%doris%"\n [DELETE ON label=true]\n PROPERTIES\n (\n     "desired_concurrent_number"="3",\n     "max_batch_interval" = "20",\n     "max_batch_rows" = "300000",\n     "max_batch_size" = "209715200",\n     "strict_mode" = "false"\n )\n FROM KAFKA\n (\n     "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n     "kafka_topic" = "my_topic",\n     "kafka_partitions" = "0,1,2,3",\n     "kafka_offsets" = "101,0,0,200"\n );\n')),(0,l.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u9664",(0,l.kt)("inlineCode",{parentName:"li"},"Stream Load")," \u5916\u7684\u5bfc\u5165\u64cd\u4f5c\u5728doris \u5185\u90e8\u6709\u53ef\u80fd\u4e71\u5e8f\u6267\u884c\uff0c\u56e0\u6b64\u5728\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"MERGE")," \u65b9\u5f0f\u5bfc\u5165\u65f6\u5982\u679c\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"Stream Load"),"\uff0c\u9700\u8981\u4e0e load sequence \u4e00\u8d77\u4f7f\u7528\uff0c\u5177\u4f53\u7684 \u8bed\u6cd5\u53ef\u4ee5\u53c2\u7167",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/data-operate/update-delete/sequence-column-manual"},(0,l.kt)("inlineCode",{parentName:"a"},"sequence")),"\u5217 \u76f8\u5173\u7684\u6587\u6863\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"DELETE ON")," \u6761\u4ef6\u53ea\u80fd\u4e0e MERGE \u4e00\u8d77\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u5728\u6267\u884c\u5bfc\u5165\u4f5c\u4e1a\u524d\u6309\u4e0a\u6587\u6240\u8ff0\u5f00\u542f\u4e86",(0,l.kt)("inlineCode",{parentName:"li"},"SET show_hidden_columns = true"),"\u7684session variable\u6765\u67e5\u770b\u8868\u662f\u5426\u652f\u6301\u6279\u91cf\u5220\u9664, \u6309\u793a\u4f8b\u5b8c\u6210DELETE/MERGE\u7684\u5bfc\u5165\u4f5c\u4e1a\u540e, \u5982\u679c\u5728\u540c\u4e00\u4e2asession\u4e2d\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"select count(*) from xxx"),"\u7b49\u8bed\u53e5\u65f6, \u9700\u8981\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"SET show_hidden_columns = false"),"\u6216\u8005\u5f00\u542f\u65b0\u7684session, \u907f\u514d\u67e5\u8be2\u7ed3\u679c\u4e2d\u5305\u542b\u90a3\u4e9b\u88ab\u6279\u91cf\u5220\u9664\u7684\u8bb0\u5f55, \u5bfc\u81f4\u7ed3\u679c\u4e0e\u9884\u671f\u4e0d\u7b26.")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u67e5\u770b\u662f\u5426\u542f\u7528\u6279\u91cf\u5220\u9664\u652f\u6301"},"\u67e5\u770b\u662f\u5426\u542f\u7528\u6279\u91cf\u5220\u9664\u652f\u6301"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SET show_hidden_columns=true;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> DESC test;\n+-----------------------+--------------+------+-------+---------+---------+\n| Field                 | Type         | Null | Key   | Default | Extra   |\n+-----------------------+--------------+------+-------+---------+---------+\n| name                  | VARCHAR(100) | No   | true  | NULL    |         |\n| gender                | VARCHAR(10)  | Yes  | false | NULL    | REPLACE |\n| age                   | INT          | Yes  | false | NULL    | REPLACE |\n| __DORIS_DELETE_SIGN__ | TINYINT      | No   | false | 0       | REPLACE |\n+-----------------------+--------------+------+-------+---------+---------+\n4 rows in set (0.00 sec)\n")),(0,l.kt)("h3",{id:"stream-load\u4f7f\u7528\u793a\u4f8b"},"Stream Load\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6b63\u5e38\u5bfc\u5165\u6570\u636e\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: APPEND"  -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n')),(0,l.kt)("p",null,"\u5176\u4e2d\u7684APPEND \u6761\u4ef6\u53ef\u4ee5\u7701\u7565\uff0c\u4e0e\u4e0b\u9762\u7684\u8bed\u53e5\u6548\u679c\u76f8\u540c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5c06\u4e0e\u5bfc\u5165\u6570\u636ekey \u76f8\u540c\u7684\u6570\u636e\u5168\u90e8\u5220\u9664")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: DELETE"  -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n')),(0,l.kt)("p",null,"\u5047\u8bbe\u5bfc\u5165\u8868\u4e2d\u539f\u6709\u6570\u636e\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      3 |        2 | tom      |    2 |\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")),(0,l.kt)("p",null,"\u5bfc\u5165\u6570\u636e\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"3,2,tom,0\n")),(0,l.kt)("p",null,"\u5bfc\u5165\u540e\u6570\u636e\u53d8\u6210:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5c06\u5bfc\u5165\u6570\u636e\u4e2d\u4e0e",(0,l.kt)("inlineCode",{parentName:"li"},"site_id=1")," \u7684\u884c\u7684key\u5217\u76f8\u540c\u7684\u884c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: MERGE" -H "delete: siteid=1"  -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n')),(0,l.kt)("p",null,"\u5047\u8bbe\u5bfc\u5165\u524d\u6570\u636e\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n|      1 |        1 | jim      |    2 |\n+--------+----------+----------+------+\n")),(0,l.kt)("p",null,"\u5bfc\u5165\u6570\u636e\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"2,1,grace,2\n3,2,tom,2\n1,1,jim,2\n")),(0,l.kt)("p",null,"\u5bfc\u5165\u540e\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      2 |        1 | grace    |    2 |\n|      3 |        2 | tom      |    2 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u5f53\u5b58\u5728sequence\u5217\u65f6\uff0c\u5c06\u4e0e\u5bfc\u5165\u6570\u636ekey \u76f8\u540c\u7684\u6570\u636e\u5168\u90e8\u5220\u9664")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: name, gender, age" -H "function_column.sequence_col: age" -H "merge_type: DELETE"  -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n')),(0,l.kt)("p",null,"\u5f53unique\u8868\u8bbe\u7f6e\u4e86sequence\u5217\u65f6\uff0c\u5728\u76f8\u540ckey\u5217\u4e0b\uff0csequence\u5217\u7684\u503c\u4f1a\u4f5c\u4e3aREPLACE\u805a\u5408\u51fd\u6570\u66ff\u6362\u987a\u5e8f\u7684\u4f9d\u636e\uff0c\u8f83\u5927\u503c\u53ef\u4ee5\u66ff\u6362\u8f83\u5c0f\u503c\u3002\n\u5f53\u5bf9\u8fd9\u79cd\u8868\u57fa\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_DELETE_SIGN__"),"\u8fdb\u884c\u5220\u9664\u6807\u8bb0\u65f6\uff0c\u9700\u8981\u4fdd\u8bc1key\u76f8\u540c\u548csequence\u5217\u503c\u8981\u5927\u4e8e\u7b49\u4e8e\u5f53\u524d\u503c\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u6709\u8868\uff0c\u7ed3\u6784\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SET show_hidden_columns=true;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> DESC table1;\n+------------------------+--------------+------+-------+---------+---------+\n| Field                  | Type         | Null | Key   | Default | Extra   |\n+------------------------+--------------+------+-------+---------+---------+\n| name                   | VARCHAR(100) | No   | true  | NULL    |         |\n| gender                 | VARCHAR(10)  | Yes  | false | NULL    | REPLACE |\n| age                    | INT          | Yes  | false | NULL    | REPLACE |\n| __DORIS_DELETE_SIGN__  | TINYINT      | No   | false | 0       | REPLACE |\n| __DORIS_SEQUENCE_COL__ | INT          | Yes  | false | NULL    | REPLACE |\n+------------------------+--------------+------+-------+---------+---------+\n4 rows in set (0.00 sec)\n")),(0,l.kt)("p",null,"\u5047\u8bbe\u5bfc\u5165\u8868\u4e2d\u539f\u6709\u6570\u636e\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+-------+--------+------+\n| name  | gender | age  |\n+-------+--------+------+\n| li    | male   |   10 |\n| wang  | male   |   14 |\n| zhang | male   |   12 |\n+-------+--------+------+\n")),(0,l.kt)("p",null,"\u5f53\u5bfc\u5165\u6570\u636e\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"li,male,10\n")),(0,l.kt)("p",null,"\u5bfc\u5165\u540e\u6570\u636e\u540e\u4f1a\u53d8\u6210:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+-------+--------+------+\n| name  | gender | age  |\n+-------+--------+------+\n| wang  | male   |   14 |\n| zhang | male   |   12 |\n+-------+--------+------+\n")),(0,l.kt)("p",null,"\u4f1a\u53d1\u73b0\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"li,male,10\n")),(0,l.kt)("p",null,"\u88ab\u5220\u9664\u6210\u529f\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\u5047\u5982\u5bfc\u5165\u6570\u636e\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"li,male,9\n")),(0,l.kt)("p",null,"\u5bfc\u5165\u540e\u6570\u636e\u4f1a\u53d8\u6210:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+-------+--------+------+\n| name  | gender | age  |\n+-------+--------+------+\n| li    | male   |   10 |\n| wang  | male   |   14 |\n| zhang | male   |   12 |\n+-------+--------+------+\n")),(0,l.kt)("p",null,"\u4f1a\u770b\u5230\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"li,male,10\n")),(0,l.kt)("p",null,"\u5e76\u6ca1\u6709\u88ab\u5220\u9664\uff0c\u8fd9\u662f\u56e0\u4e3a\u5728\u5e95\u5c42\u7684\u4f9d\u8d56\u5173\u7cfb\u4e0a\uff0c\u4f1a\u5148\u5224\u65adkey\u76f8\u540c\u7684\u60c5\u51b5\uff0c\u5bf9\u5916\u5c55\u793asequence\u5217\u7684\u503c\u5927\u7684\u884c\u6570\u636e\uff0c\u7136\u540e\u5728\u770b\u8be5\u884c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_DELETE_SIGN__"),"\u503c\u662f\u5426\u4e3a1\uff0c\u5982\u679c\u4e3a1\u5219\u4e0d\u4f1a\u5bf9\u5916\u5c55\u793a\uff0c\u5982\u679c\u4e3a0\uff0c\u5219\u4ecd\u4f1a\u8bfb\u51fa\u6765\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f53\u5bfc\u5165\u6570\u636e\u4e2d\u540c\u65f6\u5b58\u5728\u6570\u636e\u5199\u5165\u548c\u5220\u9664\u65f6\uff08\u4f8b\u5982Flink CDC\u573a\u666f\u4e2d\uff09\uff0c\u4f7f\u7528seq\u5217\u53ef\u4ee5\u6709\u6548\u7684\u4fdd\u8bc1\u5f53\u6570\u636e\u4e71\u5e8f\u5230\u8fbe\u65f6\u7684\u4e00\u81f4\u6027\uff0c\u907f\u514d\u540e\u5230\u8fbe\u7684\u4e00\u4e2a\u65e7\u7248\u672c\u7684\u5220\u9664\u64cd\u4f5c\uff0c\u8bef\u5220\u6389\u4e86\u5148\u5230\u8fbe\u7684\u65b0\u7248\u672c\u7684\u6570\u636e\u3002")))}m.isMDXComponent=!0}}]);