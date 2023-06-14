"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[46671],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>p});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var d=r.createContext({}),o=function(n){var e=r.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=o(n.components);return r.createElement(d.Provider,{value:e},n.children)},f="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,d=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),f=o(t),m=i,p=f["".concat(d,".").concat(m)]||f[m]||s[m]||a;return t?r.createElement(p,l(l({ref:e},c),{},{components:t})):r.createElement(p,l({ref:e},c))}));function p(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,l=new Array(a);l[0]=m;var u={};for(var d in e)hasOwnProperty.call(e,d)&&(u[d]=e[d]);u.originalType=n,u[f]="string"==typeof n?n:i,l[1]=u;for(var o=2;o<a;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5631:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var r=t(87462),i=(t(67294),t(3905));const a={title:"running_difference",language:"zh-CN"},l=void 0,u={unversionedId:"sql-manual/sql-functions/math-functions/running_difference",id:"sql-manual/sql-functions/math-functions/running_difference",title:"running_difference",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/math-functions/running_difference.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/running_difference",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/math-functions/running_difference",draft:!1,tags:[],version:"current",frontMatter:{title:"running_difference",language:"zh-CN"}},d={},o=[{value:"running_difference",id:"running_difference",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:o},f="wrapper";function s(n){let{components:e,...t}=n;return(0,i.kt)(f,(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"running_difference"},"running_difference"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"T running_difference(T x)"),"\n\u8ba1\u7b97\u6570\u636e\u5757\u4e2d\u8fde\u7eed\u884c\u503c\u7684\u5dee\u503c\u3002\u8be5\u51fd\u6570\u7684\u7ed3\u679c\u53d6\u51b3\u4e8e\u53d7\u5f71\u54cd\u7684\u6570\u636e\u5757\u548c\u5757\u4e2d\u6570\u636e\u7684\u987a\u5e8f\u3002"),(0,i.kt)("p",null,"\u8ba1\u7b97 running_difference \u671f\u95f4\u4f7f\u7528\u7684\u884c\u987a\u5e8f\u53ef\u80fd\u4e0e\u8fd4\u56de\u7ed9\u7528\u6237\u7684\u884c\u987a\u5e8f\u4e0d\u540c\u3002\u6240\u4ee5\u7ed3\u679c\u662f\u4e0d\u7a33\u5b9a\u7684\u3002",(0,i.kt)("strong",{parentName:"p"},"\u6b64\u51fd\u6570\u4f1a\u5728\u540e\u7eed\u7248\u672c\u4e2d\u5e9f\u5f03"),"\u3002\n\u63a8\u8350\u4f7f\u7528\u7a97\u53e3\u51fd\u6570\u5b8c\u6210\u9884\u671f\u529f\u80fd\u3002\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- running difference(x)\nSELECT running_difference(x) FROM t ORDER BY k;\n\n-- \u7a97\u53e3\u51fd\u6570\nSELECT x - lag(x, 1, 0) OVER (ORDER BY k) FROM t;\n")),(0,i.kt)("h4",{id:"arguments"},"Arguments"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"x")," - \u4e00\u5217\u6570\u636e.\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u662fTINYINT,SMALLINT,INT,BIGINT,LARGEINT,FLOAT,DOUBLE,DATE,DATETIME,DECIMAL"),(0,i.kt)("h4",{id:"returned-value"},"Returned value"),(0,i.kt)("p",null,"\u7b2c\u4e00\u884c\u8fd4\u56de 0\uff0c\u968f\u540e\u7684\u6bcf\u4e00\u884c\u8fd4\u56de\u4e0e\u524d\u4e00\u884c\u7684\u5dee\u503c\u3002"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS running_difference_test;\n\nCREATE TABLE running_difference_test (\n    `id` int NOT NULL COMMENT 'id',\n    `day` date COMMENT 'day', \n    `time_val` datetime COMMENT 'time_val',\n    `doublenum` double NULL COMMENT 'doublenum'\n)\nDUPLICATE KEY(id) \nDISTRIBUTED BY HASH(id) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n                                                  \nINSERT into running_difference_test (id, day, time_val,doublenum) values ('1', '2022-10-28', '2022-03-12 10:41:00', null),\n                                                   ('2','2022-10-27', '2022-03-12 10:41:02', 2.6),\n                                                   ('3','2022-10-28', '2022-03-12 10:41:03', 2.5),\n                                                   ('4','2022-9-29', '2022-03-12 10:41:03', null),\n                                                   ('5','2022-10-31', '2022-03-12 10:42:01', 3.3),\n                                                   ('6', '2022-11-08', '2022-03-12 11:05:04', 4.7); \n\nSELECT * from running_difference_test ORDER BY id ASC;\n\n+------+------------+---------------------+-----------+\n| id   | day        | time_val            | doublenum |\n+------+------------+---------------------+-----------+\n|    1 | 2022-10-28 | 2022-03-12 10:41:00 |      NULL |\n|    2 | 2022-10-27 | 2022-03-12 10:41:02 |       2.6 |\n|    3 | 2022-10-28 | 2022-03-12 10:41:03 |       2.5 |\n|    4 | 2022-09-29 | 2022-03-12 10:41:03 |      NULL |\n|    5 | 2022-10-31 | 2022-03-12 10:42:01 |       3.3 |\n|    6 | 2022-11-08 | 2022-03-12 11:05:04 |       4.7 |\n+------+------------+---------------------+-----------+\n\nSELECT\n    id,\n    running_difference(id) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+------+-------+\n| id   | delta |\n+------+-------+\n|    1 |     0 |\n|    2 |     1 |\n|    3 |     1 |\n|    4 |     1 |\n|    5 |     1 |\n|    6 |     1 |\n+------+-------+\n\nSELECT\n    day,\n    running_difference(day) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+------------+-------+\n| day        | delta |\n+------------+-------+\n| 2022-10-28 |     0 |\n| 2022-10-27 |    -1 |\n| 2022-10-28 |     1 |\n| 2022-09-29 |   -29 |\n| 2022-10-31 |    32 |\n| 2022-11-08 |     8 |\n+------------+-------+\n\nSELECT\n    time_val,\n    running_difference(time_val) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+---------------------+-------+\n| time_val            | delta |\n+---------------------+-------+\n| 2022-03-12 10:41:00 |     0 |\n| 2022-03-12 10:41:02 |     2 |\n| 2022-03-12 10:41:03 |     1 |\n| 2022-03-12 10:41:03 |     0 |\n| 2022-03-12 10:42:01 |    58 |\n| 2022-03-12 11:05:04 |  1383 |\n+---------------------+-------+\n\nSELECT\n    doublenum,\n    running_difference(doublenum) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+-----------+----------------------+\n| doublenum | delta                |\n+-----------+----------------------+\n|      NULL |                 NULL |\n|       2.6 |                 NULL |\n|       2.5 | -0.10000000000000009 |\n|      NULL |                 NULL |\n|       3.3 |                 NULL |\n|       4.7 |   1.4000000000000004 |\n+-----------+----------------------+\n\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"running_difference"))}s.isMDXComponent=!0}}]);