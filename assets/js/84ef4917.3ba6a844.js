"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[69144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"TOPN_WEIGHTED",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/topn_weighted",id:"sql-manual/sql-functions/aggregate-functions/topn_weighted",title:"TOPN_WEIGHTED",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/aggregate-functions/topn_weighted.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/topn_weighted",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/topn_weighted",draft:!1,tags:[],version:"current",frontMatter:{title:"TOPN_WEIGHTED",language:"en"},sidebar:"docs",previous:{title:"TOPN_ARRAY",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/topn_array"},next:{title:"COUNT",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/count"}},s={},c=[{value:"TOPN_WEIGHTED",id:"topn_weighted",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"topn_weighted"},"TOPN_WEIGHTED"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY<T> topn_weighted(expr, BigInt weight, INT top_num[, INT space_expand_rate])")),(0,a.kt)("p",null,"The topn_weighted function is calculated using the Space-Saving algorithm, and the sum of the weights in expr is the result of the top n numbers, which is an approximate value"),(0,a.kt)("p",null,"The space_expand_rate parameter is optional and is used to set the number of counters used in the Space-Saving algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"counter numbers = top_num * space_expand_rate\n")),(0,a.kt)("p",null,"The higher value of space_expand_rate, the more accurate result will be. The default value is 50"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select topn_weighted(k5,k1,3) from baseall;\n+------------------------------+\n| topn_weighted(`k5`, `k1`, 3) |\n+------------------------------+\n| [0, 243.325, 100.001]        |\n+------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select topn_weighted(k5,k1,3,100) from baseall;\n+-----------------------------------+\n| topn_weighted(`k5`, `k1`, 3, 100) |\n+-----------------------------------+\n| [0, 243.325, 100.001]             |\n+-----------------------------------+\n1 row in set (0.02 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"TOPN, TOPN_WEIGHTED"))}d.isMDXComponent=!0}}]);