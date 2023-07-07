"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[19777],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),u=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(o.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),y=a,f=m["".concat(o,".").concat(y)]||m[y]||p[y]||l;return n?t.createElement(f,s(s({ref:r},c),{},{components:n})):t.createElement(f,s({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=y;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},36413:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=n(87462),a=(n(67294),n(3905));const l={title:"array_cum_sum",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array_cum_sum",id:"version-1.2/sql-manual/sql-functions/array-functions/array_cum_sum",title:"array_cum_sum",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/array_cum_sum.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_cum_sum",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_cum_sum",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_cum_sum",language:"zh-CN"},sidebar:"docs",previous:{title:"array_shuffle",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_shuffle"},next:{title:"array_exists",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_exists"}},o={},u=[{value:"array_cum_sum",id:"array_cum_sum",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},m="wrapper";function p(e){let{components:r,...n}=e;return(0,a.kt)(m,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_cum_sum"},"array_cum_sum"),(0,a.kt)("version",{since:"1.2.3"},(0,a.kt)("p",null,"array_cum_sum")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u8fd4\u56de\u6570\u7ec4\u7684\u7d2f\u8ba1\u548c\u3002\u6570\u7ec4\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u4f1a\u88ab\u8df3\u8fc7\uff0c\u5e76\u5728\u7ed3\u679c\u6570\u7ec4\u7684\u76f8\u540c\u4f4d\u7f6e\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u3002"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"Array<T> array_cum_sum(Array<T>)\n")),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1) distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3, 4]), (3, [1, NULL, 3, NULL, 5]);\nmysql> set enable_vectorized_engine = true;    # enable vectorized engine\nmysql> select k2, array_cum_sum(k2) from array_type_table;\n+-----------------------+-----------------------+\n| k2                    | array_cum_sum(`k2`)   |\n+-----------------------+-----------------------+\n| []                    | []                    |\n| [NULL]                | [NULL]                |\n| [1, 2, 3, 4]          | [1, 3, 6, 10]         |\n| [1, NULL, 3, NULL, 5] | [1, NULL, 4, NULL, 9] |\n+-----------------------+-----------------------+\n\n4 rows in set\nTime: 0.122s\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,CUM_SUM,ARRAY_CUM_SUM"))}p.isMDXComponent=!0}}]);