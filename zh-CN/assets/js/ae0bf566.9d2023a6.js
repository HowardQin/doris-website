"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"ARRAY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/ARRAY",id:"version-1.2/sql-manual/sql-reference/Data-Types/ARRAY",title:"ARRAY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Types/ARRAY.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/ARRAY",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/ARRAY",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ARRAY",language:"zh-CN"},sidebar:"docs",previous:{title:"QUANTILE_STATE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/QUANTILE_STATE"},next:{title:"JSONB",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/JSONB"}},p={},s=[{value:"ARRAY",id:"array",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array"},"ARRAY"),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"ARRAY")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY<T>")),(0,a.kt)("p",null,"\u7531T\u7c7b\u578b\u5143\u7d20\u7ec4\u6210\u7684\u6570\u7ec4\uff0c\u4e0d\u80fd\u4f5c\u4e3akey\u5217\u4f7f\u7528\u3002\u76ee\u524d\u652f\u6301\u5728Duplicate\u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"T\u652f\u6301\u7684\u7c7b\u578b\u6709\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("p",null,"\u5efa\u8868\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mysql> CREATE TABLE `array_test` (\n  `id` int(11) NULL COMMENT "",\n  `c_array` ARRAY<int(11)> NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2"\n);\n')),(0,a.kt)("p",null,"\u63d2\u5165\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> INSERT INTO `array_test` VALUES (1, [1,2,3,4,5]);\nmysql> INSERT INTO `array_test` VALUES (2, [6,7,8]), (3, []), (4, null);\n")),(0,a.kt)("p",null,"\u67e5\u8be2\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> SELECT * FROM `array_test`;\n+------+-----------------+\n| id   | c_array         |\n+------+-----------------+\n|    1 | [1, 2, 3, 4, 5] |\n|    2 | [6, 7, 8]       |\n|    3 | []              |\n|    4 | NULL            |\n+------+-----------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ARRAY\n")))}d.isMDXComponent=!0}}]);