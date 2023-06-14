"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>_});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,_=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(_,i(i({ref:t},u),{},{components:n})):r.createElement(_,i({ref:t},u))}));function _(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"orthogonal_bitmap_intersect_count",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect_count",id:"sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect_count",title:"orthogonal_bitmap_intersect_count",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect_count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect_count",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect_count",draft:!1,tags:[],version:"current",frontMatter:{title:"orthogonal_bitmap_intersect_count",language:"en"},sidebar:"docs",previous:{title:"orthogonal_bitmap_intersect",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect"},next:{title:"orthogonal_bitmap_expr_calculate",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_expr_calculate"}},c={},s=[{value:"orthogonal_bitmap_intersect_count",id:"orthogonal_bitmap_intersect_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"orthogonal_bitmap_intersect_count"},"orthogonal_bitmap_intersect_count"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BITMAP ORTHOGONAL_BITMAP_INTERSECT_COUNT(bitmap_column, column_to_filter, filter_values)"),"\nThe bitmap intersection count function, the first parameter is the bitmap column, the second parameter is the dimension column for filtering, and the third parameter is the variable length parameter, which means different values of the filter dimension column"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select orthogonal_bitmap_intersect_count(members, tag_group, 1150000, 1150001, 390006) from tag_map where  tag_group in ( 1150000, 1150001, 390006);\n+-------------------------------------------------------------------------------------+\n| orthogonal_bitmap_intersect_count(`members`, `tag_group`, 1150000, 1150001, 390006) |\n+-------------------------------------------------------------------------------------+\n|                                                                                   0 |\n+-------------------------------------------------------------------------------------+\n1 row in set (3.382 sec)\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ORTHOGONAL_BITMAP_INTERSECT_COUNT,BITMAP\n")))}m.isMDXComponent=!0}}]);