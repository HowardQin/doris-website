"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[9476],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,d=u["".concat(s,".").concat(y)]||u[y]||f[y]||l;return t?n.createElement(d,o(o({ref:r},p),{},{components:t})):n.createElement(d,o({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},28377:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const l={title:"arrays_overlap",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/arrays_overlap",id:"version-1.2/sql-manual/sql-functions/array-functions/arrays_overlap",title:"arrays_overlap",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/arrays_overlap.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/arrays_overlap",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/arrays_overlap",draft:!1,tags:[],version:"1.2",frontMatter:{title:"arrays_overlap",language:"zh-CN"},sidebar:"docs",previous:{title:"array_first_index",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_first_index"},next:{title:"countequal",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/countequal"}},s={},c=[{value:"arrays_overlap",id:"arrays_overlap",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"arrays_overlap"},"arrays_overlap"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"arrays_overlap")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BOOLEAN arrays_overlap(ARRAY<T> left, ARRAY<T> right)")),(0,a.kt)("p",null,"\u5224\u65adleft\u548cright\u6570\u7ec4\u4e2d\u662f\u5426\u5305\u542b\u516c\u5171\u5143\u7d20\u3002\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1    - left\u548cright\u6570\u7ec4\u5b58\u5728\u516c\u5171\u5143\u7d20\uff1b\n0    - left\u548cright\u6570\u7ec4\u4e0d\u5b58\u5728\u516c\u5171\u5143\u7d20\uff1b\nNULL - left\u6216\u8005right\u6570\u7ec4\u4e3aNULL\uff1b\u6216\u8005left\u548cright\u6570\u7ec4\u4e2d\uff0c\u4efb\u610f\u5143\u7d20\u4e3aNULL\uff1b\n")),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select c_left,c_right,arrays_overlap(c_left,c_right) from array_test;\n+--------------+-----------+-------------------------------------+\n| c_left       | c_right   | arrays_overlap(`c_left`, `c_right`) |\n+--------------+-----------+-------------------------------------+\n| [1, 2, 3]    | [3, 4, 5] |                                   1 |\n| [1, 2, 3]    | [5, 6]    |                                   0 |\n| [1, 2, NULL] | [1]       |                                NULL |\n| NULL         | [1, 2]    |                                NULL |\n| [1, 2, 3]    | [1, 2]    |                                   1 |\n+--------------+-----------+-------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,ARRAYS,OVERLAP,ARRAYS_OVERLAP"))}f.isMDXComponent=!0}}]);