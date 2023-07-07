"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[49416],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,d=c["".concat(i,".").concat(m)]||c[m]||k[m]||l;return t?r.createElement(d,s(s({ref:n},u),{},{components:t})):r.createElement(d,s({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const l={title:"SHOW-QUERY-STATS",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS",id:"sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS",title:"SHOW-QUERY-STATS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-QUERY-STATS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-CATALOG-RECYCLE-BIN",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN"},next:{title:"IN",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Operators/in"}},i={},p=[{value:"SHOW-QUERY-STATS",id:"show-query-stats",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:p},c="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-query-stats"},"SHOW-QUERY-STATS"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("version",{since:"dev"},"SHOW QUERY STATS"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u6570\u636e\u5e93\u4e2d\u5386\u53f2\u67e5\u8be2\u547d\u4e2d\u7684\u5e93\u8868\u5217\u7684\u60c5\u51b5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW QUERY STATS [[FOR db_name]|[FROM table_name]] [ALL] [VERBOSE]];\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301\u67e5\u8be2\u6570\u636e\u5e93\u548c\u8868\u7684\u5386\u53f2\u67e5\u8be2\u547d\u4e2d\u60c5\u51b5\uff0c\u91cd\u542ffe\u540e\u6570\u636e\u4f1a\u91cd\u7f6e\uff0c\u6bcf\u4e2afe\u5355\u72ec\u7edf\u8ba1"),(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7 FOR DATABASE \u548cFROM TABLE \u53ef\u4ee5\u6307\u5b9a\u67e5\u8be2\u6570\u636e\u5e93\u6216\u8005\u8868\u7684\u547d\u4e2d\u60c5\u51b5\uff0c\u540e\u9762\u5206\u522b\u63a5\u6570\u636e\u5e93\u540d\u6216\u8005\u8868\u540d"),(0,a.kt)("li",{parentName:"ol"},"ALL \u53ef\u4ee5\u6307\u5b9a\u662f\u5426\u5c55\u793a\u6240\u6709index\u7684\u67e5\u8be2\u547d\u4e2d\u60c5\u51b5\uff0cVERBOSE \u53ef\u4ee5\u5c55\u793a\u66f4\u8be6\u7ec6\u7684\u547d\u4e2d\u60c5\u51b5\uff0c \u8fd9\u4e24\u4e2a\u53c2\u6570\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\uff0c\n\u4e5f\u53ef\u4ee5\u4e00\u8d77\u4f7f\u7528\uff0c\u4f46\u662f\u5fc5\u987b\u653e\u5728\u6700\u540e \u800c\u4e14\u53ea\u80fd\u7528\u5728\u8868\u7684\u67e5\u8be2\u4e0a"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709 use \u4efb\u4f55\u6570\u636e\u5e93\u90a3\u4e48\u76f4\u63a5\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"SHOW QUERY STATS")," \u5c06\u5c55\u793a\u6240\u6709\u6570\u636e\u5e93\u7684\u547d\u4e2d\u60c5\u51b5"),(0,a.kt)("li",{parentName:"ol"},"\u547d\u4e2d\u7ed3\u679c\u4e2d\u53ef\u80fd\u6709\u4e24\u5217\uff1a\nQueryCount\uff1a\u8be5\u5217\u88ab\u67e5\u8be2\u6b21\u6570\nFilterCount: \u8be5\u5217\u4f5c\u4e3awhere \u6761\u4ef6\u88ab\u67e5\u8be2\u7684\u6b21\u6570")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u8868",(0,a.kt)("inlineCode",{parentName:"p"},"baseall")," \u7684\u67e5\u8be2\u547d\u4e2d\u60c5\u51b5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"}," MySQL [test_query_db]> show query stats from baseall;\n +-------+------------+-------------+\n | Field | QueryCount | FilterCount |\n +-------+------------+-------------+\n | k0    | 0          | 0           |\n | k1    | 0          | 0           |\n | k2    | 0          | 0           |\n | k3    | 0          | 0           |\n | k4    | 0          | 0           |\n | k5    | 0          | 0           |\n | k6    | 0          | 0           |\n | k10   | 0          | 0           |\n | k11   | 0          | 0           |\n | k7    | 0          | 0           |\n | k8    | 0          | 0           |\n | k9    | 0          | 0           |\n | k12   | 0          | 0           |\n | k13   | 0          | 0           |\n +-------+------------+-------------+\n 14 rows in set (0.002 sec)\n \n MySQL [test_query_db]> select k0, k1,k2, sum(k3) from baseall  where k9 > 1 group by k0,k1,k2;\n +------+------+--------+-------------+\n | k0   | k1   | k2     | sum(`k3`)   |\n +------+------+--------+-------------+\n |    0 |    6 |  32767 |        3021 |\n |    1 |   12 |  32767 | -2147483647 |\n |    0 |    3 |   1989 |        1002 |\n |    0 |    7 | -32767 |        1002 |\n |    1 |    8 |    255 |  2147483647 |\n |    1 |    9 |   1991 | -2147483647 |\n |    1 |   11 |   1989 |       25699 |\n |    1 |   13 | -32767 |  2147483647 |\n |    1 |   14 |    255 |         103 |\n |    0 |    1 |   1989 |        1001 |\n |    0 |    2 |   1986 |        1001 |\n |    1 |   15 |   1992 |        3021 |\n +------+------+--------+-------------+\n 12 rows in set (0.050 sec)\n \n MySQL [test_query_db]> show query stats from baseall;\n +-------+------------+-------------+\n | Field | QueryCount | FilterCount |\n +-------+------------+-------------+\n | k0    | 1          | 0           |\n | k1    | 1          | 0           |\n | k2    | 1          | 0           |\n | k3    | 1          | 0           |\n | k4    | 0          | 0           |\n | k5    | 0          | 0           |\n | k6    | 0          | 0           |\n | k10   | 0          | 0           |\n | k11   | 0          | 0           |\n | k7    | 0          | 0           |\n | k8    | 0          | 0           |\n | k9    | 1          | 1           |\n | k12   | 0          | 0           |\n | k13   | 0          | 0           |\n +-------+------------+-------------+\n 14 rows in set (0.001 sec)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u8868\u7684\u6240\u7269\u5316\u89c6\u56fe\u7684\u7684\u547d\u4e2d\u7684\u6c47\u603b\u60c5\u51b5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"MySQL [test_query_db]> show query stats from baseall all;\n +-----------+------------+\n | IndexName | QueryCount |\n +-----------+------------+\n | baseall   | 1          |\n +-----------+------------+\n 1 row in set (0.005 sec)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u8868\u7684\u6240\u7269\u5316\u89c6\u56fe\u7684\u7684\u547d\u4e2d\u7684\u8be6\u7ec6\u60c5\u51b5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"}," MySQL [test_query_db]> show query stats from baseall all verbose;\n +-----------+-------+------------+-------------+\n | IndexName | Field | QueryCount | FilterCount |\n +-----------+-------+------------+-------------+\n | baseall   | k0    | 1          | 0           |\n |           | k1    | 1          | 0           |\n |           | k2    | 1          | 0           |\n |           | k3    | 1          | 0           |\n |           | k4    | 0          | 0           |\n |           | k5    | 0          | 0           |\n |           | k6    | 0          | 0           |\n |           | k10   | 0          | 0           |\n |           | k11   | 0          | 0           |\n |           | k7    | 0          | 0           |\n |           | k8    | 0          | 0           |\n |           | k9    | 1          | 1           |\n |           | k12   | 0          | 0           |\n |           | k13   | 0          | 0           |\n +-----------+-------+------------+-------------+\n 14 rows in set (0.017 sec)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u6570\u636e\u5e93\u7684\u547d\u4e2d\u60c5\u51b5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"}," MySQL [test_query_db]> show query stats for test_query_db;\n +----------------------------+------------+\n | TableName                  | QueryCount |\n +----------------------------+------------+\n | compaction_tbl             | 0          |\n | bigtable                   | 0          |\n | empty                      | 0          |\n | tempbaseall                | 0          |\n | test                       | 0          |\n | test_data_type             | 0          |\n | test_string_function_field | 0          |\n | baseall                    | 1          |\n | nullable                   | 0          |\n +----------------------------+------------+\n 9 rows in set (0.005 sec)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u6240\u6709\u6570\u636e\u5e93\u7684\u547d\u4e2d\u60c5\u51b5\uff0c\u8fd9\u65f6\u4e0d\u80fduse \u4efb\u4f55\u6570\u636e\u5e93"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"}," MySQL [(none)]> show query stats;\n +-----------------+------------+\n | Database        | QueryCount |\n +-----------------+------------+\n | test_query_db   | 1          |\n +-----------------+------------+\n 1 rows in set (0.005 sec)\n")),(0,a.kt)("p",{parentName:"li"},"SHOW QUERY STATS;"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," SHOW\uff0c QUERY, STATS;\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}k.isMDXComponent=!0}}]);