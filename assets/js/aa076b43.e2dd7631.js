"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[14224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),_=a,f=u["".concat(i,".").concat(_)]||u[_]||m[_]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=_;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},29216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"orthogonal_bitmap_expr_calculate_count",language:"en"},l=void 0,c={unversionedId:"sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_expr_calculate_count",id:"version-1.2/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_expr_calculate_count",title:"orthogonal_bitmap_expr_calculate_count",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_expr_calculate_count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_expr_calculate_count",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_expr_calculate_count",draft:!1,tags:[],version:"1.2",frontMatter:{title:"orthogonal_bitmap_expr_calculate_count",language:"en"},sidebar:"docs",previous:{title:"orthogonal_bitmap_expr_calculate",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_expr_calculate"},next:{title:"bitmap_hash64",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_hash64"}},i={},s=[{value:"orthogonal_bitmap_expr_calculate_count",id:"orthogonal_bitmap_expr_calculate_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"orthogonal_bitmap_expr_calculate_count"},"orthogonal_bitmap_expr_calculate_count"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BITMAP ORTHOGONAL_BITMAP_EXPR_CALCULATE_COUNT(bitmap_column, column_to_filter, input_string)"),"\nCalculate the bitmap intersection, union and difference set of expressions to calculate the count function. The first parameter is the Bitmap column, the second parameter is the dimension column used for filtering, that is, the calculated key column, and the third parameter is the calculation expression string, meaning that the bitmap intersection, union and difference set expression is calculated according to the key column\nThe calculators supported by the expression:&represents intersection calculation, | represents union calculation, - represents difference calculation, ^ represents XOR calculation, and \\ represents escape characters"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select orthogonal_bitmap_expr_calculate_count(user_id, tag, '(833736|999777)&(1308083|231207)&(1000|20000-30000)') from user_tag_bitmap where tag in (833736,999777,130808,231207,1000,20000,30000);\nNote: 1000, 20000, 30000 plastic tags represent different labels of users\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select orthogonal_bitmap_expr_calculate_count(user_id, tag, '(A:a/b|B:2\\\\-4)&(C:1-D:12)&E:23') from user_str_tag_bitmap where tag in ('A:a/b', 'B:2-4', 'C:1', 'D:12', 'E:23');\nNote: 'A:a/b', 'B:2-4', etc. are string types tag, representing different labels of users, where 'B:2-4' needs to be escaped as'B:2\\\\-4'\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"   ORTHOGONAL_BITMAP_EXPR_CALCULATE_COUNT,BITMAP"))}m.isMDXComponent=!0}}]);