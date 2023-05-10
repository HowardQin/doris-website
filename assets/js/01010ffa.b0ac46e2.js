"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[97411],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,f=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6280:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"HLL (HyperLogLog)",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/HLL",id:"sql-manual/sql-reference/Data-Types/HLL",title:"HLL (HyperLogLog)",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Types/HLL.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/HLL",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/HLL",draft:!1,tags:[],version:"current",frontMatter:{title:"HLL (HyperLogLog)",language:"en"},sidebar:"docs",previous:{title:"STRING",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/STRING"},next:{title:"BITMAP",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/BITMAP"}},c={},s=[{value:"HLL (HyperLogLog)",id:"hll-hyperloglog",level:2},{value:"Description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hll-hyperloglog"},"HLL (HyperLogLog)"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"HLL"),(0,a.kt)("p",null,"HLL cannot be used as a key column, and the aggregation type is HLL_UNION when create table.\nThe user does not need to specify the length and default value.\nThe length is controlled within the system according to the degree of data aggregation.\nAnd HLL columns can only be queried or used through the matching hll_union_agg, hll_raw_agg, hll_cardinality, and hll_hash."),(0,a.kt)("p",null,"HLL is approximate count of distinct elements, and its performance is better than Count Distinct when the amount of data is large.\nThe error of HLL is usually around 1%, sometimes up to 2%."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select hour, HLL_UNION_AGG(pv) over(order by hour) uv from(\n   select hour, HLL_RAW_AGG(device_id) as pv\n   from metric_table -- Query the accumulated UV per hour\n   where datekey=20200922\ngroup by hour order by 1\n) final;\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"HLL,HYPERLOGLOG"))}d.isMDXComponent=!0}}]);