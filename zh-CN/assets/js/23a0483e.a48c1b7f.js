"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u884c\u8f6c\u5217",language:"zh-CN"},o=void 0,l={unversionedId:"advanced/lateral-view",id:"advanced/lateral-view",title:"\u884c\u8f6c\u5217",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/lateral-view.md",sourceDirName:"advanced",slug:"/advanced/lateral-view",permalink:"/zh-CN/docs/dev/advanced/lateral-view",draft:!1,tags:[],version:"current",frontMatter:{title:"\u884c\u8f6c\u5217",language:"zh-CN"},sidebar:"docs",previous:{title:"\u8ba1\u7b97\u8282\u70b9",permalink:"/zh-CN/docs/dev/advanced/compute_node"},next:{title:"Pipeline \u6267\u884c\u5f15\u64ce",permalink:"/zh-CN/docs/dev/query-acceleration/pipeline-execution-engine"}},c={},p=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u884c\u8f6c\u5217"},"\u884c\u8f6c\u5217"),(0,a.kt)("p",null,"\u4e0e\u751f\u6210\u5668\u51fd\u6570\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"EXPLODE"),"\uff09\u7ed3\u5408\u4f7f\u7528\uff0c\u5c06\u751f\u6210\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a\u884c\u7684\u865a\u62df\u8868\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"LATERAL VIEW")," \u5c06\u884c\u5e94\u7528\u4e8e\u6bcf\u4e2a\u539f\u59cb\u8f93\u51fa\u884c\u3002"),(0,a.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"LATERAL VIEW generator_function ( expression [, ...] ) [ table_identifier ] AS column_identifier [, ...]\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"generator_function"),(0,a.kt)("p",{parentName:"li"},"\u751f\u6210\u5668\u51fd\u6570\uff08EXPLODE\u3001EXPLODE_SPLIT \u7b49\uff09\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"table_identifier"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"generator_function")," \u7684\u522b\u540d\uff0c\u5b83\u662f\u53ef\u9009\u9879\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"column_identifier"),(0,a.kt)("p",{parentName:"li"},"\u5217\u51fa\u5217\u522b\u540d ",(0,a.kt)("inlineCode",{parentName:"p"},"generator_function"),"\uff0c\u5b83\u53ef\u7528\u4e8e\u8f93\u51fa\u884c\u3002 \u5217\u6807\u8bc6\u7b26\u7684\u6570\u76ee\u5fc5\u987b\u4e0e generator \u51fd\u6570\u8fd4\u56de\u7684\u5217\u6570\u5339\u914d\u3002"))),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `person` (\n  `id` int(11) NULL,\n  `name` text NULL,\n  `age` int(11) NULL,\n  `class` int(11) NULL,\n  `address` text NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nCOMMENT 'OLAP'\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 1\",\n\"in_memory\" = \"false\",\n\"storage_format\" = \"V2\",\n\"disable_auto_compaction\" = \"false\"\n);\n\nINSERT INTO person VALUES\n    (100, 'John', 30, 1, 'Street 1'),\n    (200, 'Mary', NULL, 1, 'Street 2'),\n    (300, 'Mike', 80, 3, 'Street 3'),\n    (400, 'Dan', 50, 4, 'Street 4');\n\nmysql> SELECT * FROM person\n    ->     LATERAL VIEW EXPLODE(ARRAY(30, 60)) tableName AS c_age;\n+------+------+------+-------+----------+-------+\n| id   | name | age  | class | address  | c_age |\n+------+------+------+-------+----------+-------+\n|  100 | John |   30 |     1 | Street 1 |    30 |\n|  100 | John |   30 |     1 | Street 1 |    60 |\n|  200 | Mary | NULL |     1 | Street 2 |    30 |\n|  200 | Mary | NULL |     1 | Street 2 |    60 |\n|  300 | Mike |   80 |     3 | Street 3 |    30 |\n|  300 | Mike |   80 |     3 | Street 3 |    60 |\n|  400 | Dan  |   50 |     4 | Street 4 |    30 |\n|  400 | Dan  |   50 |     4 | Street 4 |    60 |\n+------+------+------+-------+----------+-------+\n8 rows in set (0.12 sec)\n\n")))}d.isMDXComponent=!0}}]);