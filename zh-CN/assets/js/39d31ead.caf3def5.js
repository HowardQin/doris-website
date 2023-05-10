"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[49847],{3905:(e,l,t)=>{t.d(l,{Zo:()=>i,kt:()=>N});var a=t(67294);function n(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){n(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function o(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),m=function(e){var l=a.useContext(u),t=l;return e&&(t="function"==typeof e?e(l):p(p({},l),e)),t},i=function(e){var l=m(e.components);return a.createElement(u.Provider,{value:l},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var l=e.children;return a.createElement(a.Fragment,{},l)}},k=a.forwardRef((function(e,l){var t=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=m(t),k=n,N=c["".concat(u,".").concat(k)]||c[k]||s[k]||r;return t?a.createElement(N,p(p({ref:l},i),{},{components:t})):a.createElement(N,p({ref:l},i))}));function N(e,l){var t=arguments,n=l&&l.mdxType;if("string"==typeof e||n){var r=t.length,p=new Array(r);p[0]=k;var o={};for(var u in l)hasOwnProperty.call(l,u)&&(o[u]=l[u]);o.originalType=e,o[c]="string"==typeof e?e:n,p[1]=o;for(var m=2;m<r;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},88257:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=t(87462),n=(t(67294),t(3905));const r={title:"ALTER-TABLE-COLUMN",language:"zh-CN"},p=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",id:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",title:"ALTER-TABLE-COLUMN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-TABLE-COLUMN",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-TABLE-PARTITION",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION"},next:{title:"ALTER-RESOURCE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE"}},u={},m=[{value:"ALTER-TABLE-COLUMN",id:"alter-table-column",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],i={toc:m},c="wrapper";function s(e){let{components:l,...t}=e;return(0,n.kt)(c,(0,a.Z)({},i,t,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"alter-table-column"},"ALTER-TABLE-COLUMN"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"ALTER TABLE COLUMN"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5bf9\u5df2\u6709 table \u8fdb\u884c Schema change \u64cd\u4f5c\u3002schema change \u662f\u5f02\u6b65\u7684\uff0c\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\u5219\u8fd4\u56de\uff0c\u4e4b\u540e\u53ef\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER"},"SHOW ALTER TABLE COLUMN")," \u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\u3002"),(0,n.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,n.kt)("p",null,"schema change \u7684 alter_clause \u652f\u6301\u5982\u4e0b\u51e0\u79cd\u4fee\u6539\u65b9\u5f0f\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5411\u6307\u5b9a index \u7684\u6307\u5b9a\u4f4d\u7f6e\u6dfb\u52a0\u4e00\u5217")),(0,n.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ADD COLUMN column_name column_type [KEY | agg_type] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,n.kt)("p",null," \u6ce8\u610f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u805a\u5408\u6a21\u578b\u5982\u679c\u589e\u52a0 value \u5217\uff0c\u9700\u8981\u6307\u5b9a agg_type"),(0,n.kt)("li",{parentName:"ul"},"\u975e\u805a\u5408\u6a21\u578b\uff08\u5982 DUPLICATE KEY\uff09\u5982\u679c\u589e\u52a0key\u5217\uff0c\u9700\u8981\u6307\u5b9aKEY\u5173\u952e\u5b57"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5728 rollup index \u4e2d\u589e\u52a0 base index \u4e2d\u5df2\u7ecf\u5b58\u5728\u7684\u5217\uff08\u5982\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u91cd\u65b0\u521b\u5efa\u4e00\u4e2a rollup index\uff09")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u5411\u6307\u5b9a index \u6dfb\u52a0\u591a\u5217")),(0,n.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ADD COLUMN (column_name1 column_type [KEY | agg_type] DEFAULT "default_value", ...)\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u805a\u5408\u6a21\u578b\u5982\u679c\u589e\u52a0 value \u5217\uff0c\u9700\u8981\u6307\u5b9aagg_type"),(0,n.kt)("li",{parentName:"ul"},"\u805a\u5408\u6a21\u578b\u5982\u679c\u589e\u52a0key\u5217\uff0c\u9700\u8981\u6307\u5b9aKEY\u5173\u952e\u5b57"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5728 rollup index \u4e2d\u589e\u52a0 base index \u4e2d\u5df2\u7ecf\u5b58\u5728\u7684\u5217\uff08\u5982\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u91cd\u65b0\u521b\u5efa\u4e00\u4e2a rollup index\uff09")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u4ece\u6307\u5b9a index \u4e2d\u5220\u9664\u4e00\u5217")),(0,n.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"DROP COLUMN column_name\n[FROM rollup_index_name]\n")),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5220\u9664\u5206\u533a\u5217"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u4ece base index \u4e2d\u5220\u9664\u5217\uff0c\u5219\u5982\u679c rollup index \u4e2d\u5305\u542b\u8be5\u5217\uff0c\u4e5f\u4f1a\u88ab\u5220\u9664")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u6539\u6307\u5b9a index \u7684\u5217\u7c7b\u578b\u4ee5\u53ca\u5217\u4f4d\u7f6e"),(0,n.kt)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'MODIFY COLUMN column_name column_type [KEY | agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u805a\u5408\u6a21\u578b\u5982\u679c\u4fee\u6539 value \u5217\uff0c\u9700\u8981\u6307\u5b9a agg_type"),(0,n.kt)("li",{parentName:"ul"},"\u975e\u805a\u5408\u7c7b\u578b\u5982\u679c\u4fee\u6539key\u5217\uff0c\u9700\u8981\u6307\u5b9aKEY\u5173\u952e\u5b57"),(0,n.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u4fee\u6539\u5217\u7684\u7c7b\u578b\uff0c\u5217\u7684\u5176\u4ed6\u5c5e\u6027\u7ef4\u6301\u539f\u6837\uff08\u5373\u5176\u4ed6\u5c5e\u6027\u9700\u5728\u8bed\u53e5\u4e2d\u6309\u7167\u539f\u5c5e\u6027\u663e\u5f0f\u7684\u5199\u51fa\uff0c\u53c2\u89c1 example 8\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u533a\u5217\u548c\u5206\u6876\u5217\u4e0d\u80fd\u505a\u4efb\u4f55\u4fee\u6539"),(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u7684\u8f6c\u6362\uff08\u7cbe\u5ea6\u635f\u5931\u7531\u7528\u6237\u4fdd\u8bc1\uff09",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TINYINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE \u7c7b\u578b\u5411\u8303\u56f4\u66f4\u5927\u7684\u6570\u5b57\u7c7b\u578b\u8f6c\u6362"),(0,n.kt)("li",{parentName:"ul"},"TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE/DECIMAL \u8f6c\u6362\u6210 VARCHAR"),(0,n.kt)("li",{parentName:"ul"},"VARCHAR \u652f\u6301\u4fee\u6539\u6700\u5927\u957f\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"VARCHAR/CHAR \u8f6c\u6362\u6210 TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE"),(0,n.kt)("li",{parentName:"ul"},'VARCHAR/CHAR \u8f6c\u6362\u6210 DATE (\u76ee\u524d\u652f\u6301"%Y-%m-%d", "%y-%m-%d", "%Y%m%d", "%y%m%d", "%Y/%m/%d, "%y/%m/%d"\u516d\u79cd\u683c\u5f0f\u5316\u683c\u5f0f)'),(0,n.kt)("li",{parentName:"ul"},"DATETIME \u8f6c\u6362\u6210 DATE(\u4ec5\u4fdd\u7559\u5e74-\u6708-\u65e5\u4fe1\u606f, \u4f8b\u5982: ",(0,n.kt)("inlineCode",{parentName:"li"},"2019-12-09 21:47:05")," <--\x3e ",(0,n.kt)("inlineCode",{parentName:"li"},"2019-12-09"),")"),(0,n.kt)("li",{parentName:"ul"},"DATE \u8f6c\u6362\u6210 DATETIME(\u65f6\u5206\u79d2\u81ea\u52a8\u8865\u96f6\uff0c \u4f8b\u5982: ",(0,n.kt)("inlineCode",{parentName:"li"},"2019-12-09")," <--\x3e ",(0,n.kt)("inlineCode",{parentName:"li"},"2019-12-09 00:00:00"),")"),(0,n.kt)("li",{parentName:"ul"},"FLOAT \u8f6c\u6362\u6210 DOUBLE"),(0,n.kt)("li",{parentName:"ul"},"INT \u8f6c\u6362\u6210 DATE (\u5982\u679cINT\u7c7b\u578b\u6570\u636e\u4e0d\u5408\u6cd5\u5219\u8f6c\u6362\u5931\u8d25\uff0c\u539f\u59cb\u6570\u636e\u4e0d\u53d8)"),(0,n.kt)("li",{parentName:"ul"},"\u9664DATE\u4e0eDATETIME\u4ee5\u5916\u90fd\u53ef\u4ee5\u8f6c\u6362\u6210STRING\uff0c\u4f46\u662fSTRING\u4e0d\u80fd\u8f6c\u6362\u4efb\u4f55\u5176\u4ed6\u7c7b\u578b")))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u5bf9\u6307\u5b9a index \u7684\u5217\u8fdb\u884c\u91cd\u65b0\u6392\u5e8f")),(0,n.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ORDER BY (column_name1, column_name2, ...)\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"index \u4e2d\u7684\u6240\u6709\u5217\u90fd\u8981\u5199\u51fa\u6765"),(0,n.kt)("li",{parentName:"ul"},"value \u5217\u5728 key \u5217\u4e4b\u540e")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5411 example_rollup_index \u7684 col1 \u540e\u6dfb\u52a0\u4e00\u4e2akey\u5217 new_col(\u975e\u805a\u5408\u6a21\u578b)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" AFTER col1\nTO example_rollup_index;\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u5411example_rollup_index\u7684col1\u540e\u6dfb\u52a0\u4e00\u4e2avalue\u5217new_col(\u975e\u805a\u5408\u6a21\u578b)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table   \nADD COLUMN new_col INT DEFAULT "0" AFTER col1    \nTO example_rollup_index;\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u5411example_rollup_index\u7684col1\u540e\u6dfb\u52a0\u4e00\u4e2akey\u5217new_col(\u805a\u5408\u6a21\u578b)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table   \nADD COLUMN new_col INT DEFAULT "0" AFTER col1    \nTO example_rollup_index;\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u5411example_rollup_index\u7684col1\u540e\u6dfb\u52a0\u4e00\u4e2avalue\u5217new_col SUM\u805a\u5408\u7c7b\u578b(\u805a\u5408\u6a21\u578b)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table   \nADD COLUMN new_col INT SUM DEFAULT "0" AFTER col1    \nTO example_rollup_index;\n')),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u5411 example_rollup_index \u6dfb\u52a0\u591a\u5217(\u805a\u5408\u6a21\u578b)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN (col1 INT DEFAULT "1", col2 FLOAT SUM DEFAULT "2.3")\nTO example_rollup_index;\n')),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"\u4ece example_rollup_index \u5220\u9664\u4e00\u5217")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP COLUMN col2\nFROM example_rollup_index;\n")),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"\u4fee\u6539 base index \u7684 key \u5217 col1 \u7684\u7c7b\u578b\u4e3a BIGINT\uff0c\u5e76\u79fb\u52a8\u5230 col2 \u5217\u540e\u9762\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table \nMODIFY COLUMN col1 BIGINT KEY DEFAULT "1" AFTER col2;\n')),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a\u65e0\u8bba\u662f\u4fee\u6539 key \u5217\u8fd8\u662f value \u5217\u90fd\u9700\u8981\u58f0\u660e\u5b8c\u6574\u7684 column \u4fe1\u606f"),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},'\u4fee\u6539 base index \u7684 val1 \u5217\u6700\u5927\u957f\u5ea6\u3002\u539f val1 \u4e3a (val1 VARCHAR(32) REPLACE DEFAULT "abc")')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table \nMODIFY COLUMN val1 VARCHAR(64) REPLACE DEFAULT "abc";\n')),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u6392\u5e8f example_rollup_index \u4e2d\u7684\u5217\uff08\u8bbe\u539f\u5217\u987a\u5e8f\u4e3a\uff1ak1,k2,k3,v1,v2\uff09")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nORDER BY (k3,k1,k2,v2,v1)\nFROM example_rollup_index;\n")),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"\u540c\u65f6\u6267\u884c\u4e24\u79cd\u64cd\u4f5c")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN v2 INT MAX DEFAULT "0" AFTER k2 TO example_rollup_index,\nORDER BY (k3,k1,k2,v2,v1) FROM example_rollup_index;\n')),(0,n.kt)("ol",{start:11},(0,n.kt)("li",{parentName:"ol"},"\u4fee\u6539Duplicate key \u8868 Key \u5217\u7684\u67d0\u4e2a\u5b57\u6bb5\u7684\u957f\u5ea6")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"alter table example_tbl modify column k3 varchar(50) key null comment 'to 50'\n")),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, COLUMN, ALTER TABLE\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}s.isMDXComponent=!0}}]);