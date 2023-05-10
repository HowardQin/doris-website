"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[10770],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),c=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(o.Provider,{value:r},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=c(n),d=a,f=y["".concat(o,".").concat(d)]||y[d]||p[d]||i;return n?t.createElement(f,l(l({ref:r},u),{},{components:n})):t.createElement(f,l({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s[y]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96924:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const i={title:"array_size",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/array-functions/array_size",id:"version-1.2/sql-manual/sql-functions/array-functions/array_size",title:"array_size",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/array_size.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_size",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_size",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_size",language:"zh-CN"},sidebar:"docs",previous:{title:"array_sum",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_sum"},next:{title:"array_remove",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_remove"}},o={},c=[{value:"array_size (size, cardinality)",id:"array_size-size-cardinality",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:r,...n}=e;return(0,a.kt)(y,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_size-size-cardinality"},"array_size (size, cardinality)"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"array_size (size, cardinality)")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"BIGINT size(ARRAY<T> arr)\nBIGINT array_size(ARRAY<T> arr) \nBIGINT cardinality(ARRAY<T> arr)\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u6570\u7ec4\u4e2d\u5143\u7d20\u6570\u91cf\uff0c\u5982\u679c\u8f93\u5165\u6570\u7ec4\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL"),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select k1,k2,size(k2) from array_test;\n+------+-----------+------------+\n| k1   | k2        | size(`k2`) |\n+------+-----------+------------+\n|    1 | [1, 2, 3] |          3 |\n|    2 | []        |          0 |\n|    3 | NULL      |       NULL |\n+------+-----------+------------+\n\nmysql> select k1,k2,array_size(k2) from array_test;\n+------+-----------+------------------+\n| k1   | k2        | array_size(`k2`) |\n+------+-----------+------------------+\n|    1 | [1, 2, 3] |                3 |\n|    2 | []        |                0 |\n|    3 | NULL      |             NULL |\n+------+-----------+------------------+\n\nmysql> select k1,k2,cardinality(k2) from array_test;\n+------+-----------+-------------------+\n| k1   | k2        | cardinality(`k2`) |\n+------+-----------+-------------------+\n|    1 | [1, 2, 3] |                 3 |\n|    2 | []        |                 0 |\n|    3 | NULL      |              NULL |\n+------+-----------+-------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY_SIZE, SIZE, CARDINALITY"))}p.isMDXComponent=!0}}]);