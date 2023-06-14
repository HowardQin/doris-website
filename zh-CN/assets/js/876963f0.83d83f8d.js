"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42504],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>o});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=n.createContext({}),s=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(k.Provider,{value:t},e.children)},u="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,o=u["".concat(k,".").concat(c)]||u[c]||N[c]||l;return a?n.createElement(o,i(i({ref:t},m),{},{components:a})):n.createElement(o,i({ref:t},m))}));function o(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var k in t)hasOwnProperty.call(t,k)&&(p[k]=t[k]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},11142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"CREATE-MATERIALIZED-VIEW",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW",title:"CREATE-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-MATERIALIZED-VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-TABLE-LIKE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-LIKE"},next:{title:"CREATE-EXTERNAL-TABLE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-EXTERNAL-TABLE"}},k={},s=[{value:"CREATE-MATERIALIZED-VIEW",id:"create-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:s},u="wrapper";function N(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-materialized-view"},"CREATE-MATERIALIZED-VIEW"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CREATE MATERIALIZED VIEW"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u7269\u5316\u89c6\u56fe\u3002"),(0,r.kt)("p",null,"\u8be5\u64cd\u4f5c\u4e3a\u5f02\u6b65\u64cd\u4f5c\uff0c\u63d0\u4ea4\u6210\u529f\u540e\uff0c\u9700\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW"},"SHOW ALTER TABLE MATERIALIZED VIEW")," \u67e5\u770b\u4f5c\u4e1a\u8fdb\u5ea6\u3002\u5728\u663e\u793a FINISHED \u540e\u65e2\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"desc [table_name] all")," \u547d\u4ee4\u6765\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684 schema \u4e86\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW [MV name] as [query]\n[PROPERTIES ("key" = "value")]\n')),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"MV name"),"\uff1a\u7269\u5316\u89c6\u56fe\u7684\u540d\u79f0\uff0c\u5fc5\u586b\u9879\u3002\u76f8\u540c\u8868\u7684\u7269\u5316\u89c6\u56fe\u540d\u79f0\u4e0d\u53ef\u91cd\u590d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"query"),"\uff1a\u7528\u4e8e\u6784\u5efa\u7269\u5316\u89c6\u56fe\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u67e5\u8be2\u8bed\u53e5\u7684\u7ed3\u679c\u65e2\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u3002\u76ee\u524d\u652f\u6301\u7684 query \u683c\u5f0f\u4e3a:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT select_expr[, select_expr ...]\nFROM [Base view name]\nGROUP BY column_name[, column_name ...]\nORDER BY column_name[, column_name ...]\n")),(0,r.kt)("p",{parentName:"li"},"\u8bed\u6cd5\u548c\u67e5\u8be2\u8bed\u53e5\u8bed\u6cd5\u4e00\u81f4\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"select_expr"),"\uff1a\u7269\u5316\u89c6\u56fe\u7684 schema \u4e2d\u6240\u6709\u7684\u5217\u3002  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u81f3\u5c11\u5305\u542b\u4e00\u4e2a\u5355\u5217\u3002 "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"base view name"),"\uff1a\u7269\u5316\u89c6\u56fe\u7684\u539f\u59cb\u8868\u540d\uff0c\u5fc5\u586b\u9879\u3002  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u662f\u5355\u8868\uff0c\u4e14\u975e\u5b50\u67e5\u8be2"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"group by"),"\uff1a\u7269\u5316\u89c6\u56fe\u7684\u5206\u7ec4\u5217\uff0c\u9009\u586b\u9879\u3002 ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u586b\u5219\u6570\u636e\u4e0d\u8fdb\u884c\u5206\u7ec4\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"order by"),"\uff1a\u7269\u5316\u89c6\u56fe\u7684\u6392\u5e8f\u5217\uff0c\u9009\u586b\u9879\u3002  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6392\u5e8f\u5217\u7684\u58f0\u660e\u987a\u5e8f\u5fc5\u987b\u548c select_expr \u4e2d\u5217\u58f0\u660e\u987a\u5e8f\u4e00\u81f4\u3002  "),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u58f0\u660e order by\uff0c\u5219\u6839\u636e\u89c4\u5219\u81ea\u52a8\u8865\u5145\u6392\u5e8f\u5217\u3002 \u5982\u679c\u7269\u5316\u89c6\u56fe\u662f\u805a\u5408\u7c7b\u578b\uff0c\u5219\u6240\u6709\u7684\u5206\u7ec4\u5217\u81ea\u52a8\u8865\u5145\u4e3a\u6392\u5e8f\u5217\u3002 \u5982\u679c\u7269\u5316\u89c6\u56fe\u662f\u975e\u805a\u5408\u7c7b\u578b\uff0c\u5219\u524d 36 \u4e2a\u5b57\u8282\u81ea\u52a8\u8865\u5145\u4e3a\u6392\u5e8f\u5217\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u81ea\u52a8\u8865\u5145\u7684\u6392\u5e8f\u4e2a\u6570\u5c0f\u4e8e3\u4e2a\uff0c\u5219\u524d\u4e09\u4e2a\u4f5c\u4e3a\u6392\u5e8f\u5217\u3002 \u5982\u679c query \u4e2d\u5305\u542b\u5206\u7ec4\u5217\u7684\u8bdd\uff0c\u5219\u6392\u5e8f\u5217\u5fc5\u987b\u548c\u5206\u7ec4\u5217\u4e00\u81f4\u3002"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"properties"),(0,r.kt)("p",{parentName:"li"},"\u58f0\u660e\u7269\u5316\u89c6\u56fe\u7684\u4e00\u4e9b\u914d\u7f6e\uff0c\u9009\u586b\u9879\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'PROPERTIES ("key" = "value", "key" = "value" ...)\n')),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u51e0\u4e2a\u914d\u7f6e\uff0c\u5747\u53ef\u58f0\u660e\u5728\u6b64\u5904\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"}," short_key: \u6392\u5e8f\u5217\u7684\u4e2a\u6570\u3002\n timeout: \u7269\u5316\u89c6\u56fe\u6784\u5efa\u7684\u8d85\u65f6\u65f6\u95f4\u3002\n")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Base \u8868\u7ed3\u6784\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> desc duplicate_table;\n+-------+--------+------+------+---------+-------+\n| Field | Type   | Null | Key  | Default | Extra |\n+-------+--------+------+------+---------+-------+\n| k1    | INT    | Yes  | true | N/A     |       |\n| k2    | INT    | Yes  | true | N/A     |       |\n| k3    | BIGINT | Yes  | true | N/A     |       |\n| k4    | BIGINT | Yes  | true | N/A     |       |\n+-------+--------+------+------+---------+-------+\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'create table duplicate_table(\n    k1 int null,\n    k2 int null,\n    k3 bigint null,\n    k4 bigint null\n)\nduplicate key (k1,k2,k3,k4)\ndistributed BY hash(k4) buckets 3\nproperties("replication_num" = "1");\n')),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u7269\u5316\u89c6\u56fe\u5305\u542b\u4e86base\u8868\u7684\u5206\u533a\u5217\u548c\u5206\u6876\u5217,\u90a3\u4e48\u8fd9\u4e9b\u5217\u5fc5\u987b\u4f5c\u4e3a\u7269\u5316\u89c6\u56fe\u4e2d\u7684key\u5217"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u4ec5\u5305\u542b\u539f\u59cb\u8868 \uff08k1, k2\uff09\u5217\u7684\u7269\u5316\u89c6\u56fe"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create materialized view k1_k2 as\nselect k2, k1 from duplicate_table;\n")),(0,r.kt)("p",{parentName:"li"},"\u7269\u5316\u89c6\u56fe\u7684 schema \u5982\u4e0b\u56fe\uff0c\u7269\u5316\u89c6\u56fe\u4ec5\u5305\u542b\u4e24\u5217 k1, k2 \u4e14\u4e0d\u5e26\u4efb\u4f55\u805a\u5408"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+-----------------+-------+--------+------+------+---------+-------+\n| IndexName       | Field | Type   | Null | Key  | Default | Extra |\n+-----------------+-------+--------+------+------+---------+-------+\n| k2_k1           | k2    | INT    | Yes  | true | N/A     |       |\n|                 | k1    | INT    | Yes  | true | N/A     |       |\n+-----------------+-------+--------+------+------+---------+-------+\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u4ee5 k2 \u4e3a\u6392\u5e8f\u5217\u7684\u7269\u5316\u89c6\u56fe"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create materialized view k2_order as\nselect k2, k1 from duplicate_table order by k2;\n")),(0,r.kt)("p",{parentName:"li"},"\u7269\u5316\u89c6\u56fe\u7684 schema \u5982\u4e0b\u56fe\uff0c\u7269\u5316\u89c6\u56fe\u4ec5\u5305\u542b\u4e24\u5217 k2, k1\uff0c\u5176\u4e2d k2 \u5217\u4e3a\u6392\u5e8f\u5217\uff0c\u4e0d\u5e26\u4efb\u4f55\u805a\u5408\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| k2_order        | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k1    | INT    | Yes  | false | N/A     | NONE  |\n+-----------------+-------+--------+------+-------+---------+-------+\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u4ee5 k1, k2 \u5206\u7ec4\uff0ck3 \u5217\u4e3a SUM \u805a\u5408\u7684\u7269\u5316\u89c6\u56fe"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create materialized view k1_k2_sumk3 as\nselect k1, k2, sum(k3) from duplicate_table group by k1, k2;\n")),(0,r.kt)("p",{parentName:"li"},"\u7269\u5316\u89c6\u56fe\u7684 schema \u5982\u4e0b\u56fe\uff0c\u7269\u5316\u89c6\u56fe\u5305\u542b\u4e24\u5217 k1, k2\uff0csum(k3) \u5176\u4e2d k1, k2 \u4e3a\u5206\u7ec4\u5217\uff0csum(k3) \u4e3a\u6839\u636e k1, k2 \u5206\u7ec4\u540e\u7684 k3 \u5217\u7684\u6c42\u548c\u503c\u3002"),(0,r.kt)("p",{parentName:"li"},"\u7531\u4e8e\u7269\u5316\u89c6\u56fe\u6ca1\u6709\u58f0\u660e\u6392\u5e8f\u5217\uff0c\u4e14\u7269\u5316\u89c6\u56fe\u5e26\u805a\u5408\u6570\u636e\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u8865\u5145\u5206\u7ec4\u5217 k1, k2 \u4e3a\u6392\u5e8f\u5217\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| k1_k2_sumk3     | k1    | INT    | Yes  | true  | N/A     |       |\n|                 | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k3    | BIGINT | Yes  | false | N/A     | SUM   |\n+-----------------+-------+--------+------+-------+---------+-------+\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u53bb\u9664\u91cd\u590d\u884c\u7684\u7269\u5316\u89c6\u56fe"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create materialized view deduplicate as\nselect k1, k2, k3, k4 from duplicate_table group by k1, k2, k3, k4;\n")),(0,r.kt)("p",{parentName:"li"},"\u7269\u5316\u89c6\u56fe schema \u5982\u4e0b\u56fe\uff0c\u7269\u5316\u89c6\u56fe\u5305\u542b k1, k2, k3, k4\u5217\uff0c\u4e14\u4e0d\u5b58\u5728\u91cd\u590d\u884c\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| deduplicate     | k1    | INT    | Yes  | true  | N/A     |       |\n|                 | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k3    | BIGINT | Yes  | true  | N/A     |       |\n|                 | k4    | BIGINT | Yes  | true  | N/A     |       |\n+-----------------+-------+--------+------+-------+---------+-------+\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u4e0d\u58f0\u660e\u6392\u5e8f\u5217\u7684\u975e\u805a\u5408\u578b\u7269\u5316\u89c6\u56fe"),(0,r.kt)("p",{parentName:"li"},"all_type_table \u7684 schema \u5982\u4e0b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"+-------+--------------+------+-------+---------+-------+\n| Field | Type         | Null | Key   | Default | Extra |\n+-------+--------------+------+-------+---------+-------+\n| k1    | TINYINT      | Yes  | true  | N/A     |       |\n| k2    | SMALLINT     | Yes  | true  | N/A     |       |\n| k3    | INT          | Yes  | true  | N/A     |       |\n| k4    | BIGINT       | Yes  | true  | N/A     |       |\n| k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n| k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n| k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n+-------+--------------+------+-------+---------+-------+\n")),(0,r.kt)("p",{parentName:"li"},"\u7269\u5316\u89c6\u56fe\u5305\u542b k3, k4, k5, k6, k7 \u5217\uff0c\u4e14\u4e0d\u58f0\u660e\u6392\u5e8f\u5217\uff0c\u5219\u521b\u5efa\u8bed\u53e5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create materialized view mv_1 as\nselect k3, k4, k5, k6, k7 from all_type_table;\n")),(0,r.kt)("p",{parentName:"li"},"\u7cfb\u7edf\u9ed8\u8ba4\u8865\u5145\u7684\u6392\u5e8f\u5217\u4e3a k3, k4, k5 \u4e09\u5217\u3002\u8fd9\u4e09\u5217\u7c7b\u578b\u7684\u5b57\u8282\u6570\u4e4b\u548c\u4e3a 4(INT) + 8(BIGINT) + 16(DECIMAL) = 28 < 36\u3002\u6240\u4ee5\u8865\u5145\u7684\u662f\u8fd9\u4e09\u5217\u4f5c\u4e3a\u6392\u5e8f\u5217\u3002 \u7269\u5316\u89c6\u56fe\u7684 schema \u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u5176\u4e2d k3, k4, k5 \u5217\u7684 key \u5b57\u6bb5\u4e3a true\uff0c\u4e5f\u5c31\u662f\u6392\u5e8f\u5217\u3002k6, k7 \u5217\u7684 key \u5b57\u6bb5\u4e3a false\uff0c\u4e5f\u5c31\u662f\u975e\u6392\u5e8f\u5217\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"+----------------+-------+--------------+------+-------+---------+-------+\n| IndexName      | Field | Type         | Null | Key   | Default | Extra |\n+----------------+-------+--------------+------+-------+---------+-------+\n| mv_1           | k3    | INT          | Yes  | true  | N/A     |       |\n|                | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|                | k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n|                | k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n|                | k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n+----------------+-------+--------------+------+-------+---------+-------+\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE, MATERIALIZED, VIEW\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}N.isMDXComponent=!0}}]);