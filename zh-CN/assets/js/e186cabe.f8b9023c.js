"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12920],{3905:(n,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>_});var o=e(67294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var u=o.createContext({}),c=function(n){var t=o.useContext(u),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},p=function(n){var t=c(n.components);return o.createElement(u.Provider,{value:t},n.children)},s="mdxType",m={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(n,t){var e=n.components,r=n.mdxType,a=n.originalType,u=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),s=c(e),f=r,_=s["".concat(u,".").concat(f)]||s[f]||m[f]||a;return e?o.createElement(_,i(i({ref:t},p),{},{components:e})):o.createElement(_,i({ref:t},p))}));function _(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var a=e.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=n,l[s]="string"==typeof n?n:r,i[1]=l;for(var c=2;c<a;c++)i[c]=e[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,e)}f.displayName="MDXCreateElement"},74411:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=e(87462),r=(e(67294),e(3905));const a={title:"orthogonal_bitmap_union_count",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_union_count",id:"sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_union_count",title:"orthogonal_bitmap_union_count",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_union_count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_union_count",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_union_count",draft:!1,tags:[],version:"current",frontMatter:{title:"orthogonal_bitmap_union_count",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_and_not_count",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count"},next:{title:"bitmap_xor_count",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count"}},u={},c=[{value:"orthogonal_bitmap_union_count",id:"orthogonal_bitmap_union_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},s="wrapper";function m(n){let{components:t,...e}=n;return(0,r.kt)(s,(0,o.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"orthogonal_bitmap_union_count"},"orthogonal_bitmap_union_count"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BITMAP ORTHOGONAL_BITMAP_UNION_COUNT(bitmap_column, column_to_filter, filter_values)"),"\n\u6c42bitmap\u5e76\u96c6\u5927\u5c0f\u7684\u51fd\u6570, \u53c2\u6570\u7c7b\u578b\u662fbitmap\uff0c\u662f\u5f85\u6c42\u5e76\u96c6count\u7684\u5217"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select orthogonal_bitmap_union_count(members) from tag_map where  tag_group in ( 1150000, 1150001, 390006);\n+------------------------------------------+\n| orthogonal_bitmap_union_count(`members`) |\n+------------------------------------------+\n|                                286957811 |\n+------------------------------------------+\n1 row in set (2.645 sec)\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ORTHOGONAL_BITMAP_UNION_COUNT,BITMAP\n")))}m.isMDXComponent=!0}}]);