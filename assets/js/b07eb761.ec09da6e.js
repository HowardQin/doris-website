"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[29190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"TOPN",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/topn",id:"sql-manual/sql-functions/aggregate-functions/topn",title:"TOPN",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/aggregate-functions/topn.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/topn",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/topn",draft:!1,tags:[],version:"current",frontMatter:{title:"TOPN",language:"en"},sidebar:"docs",previous:{title:"HLL_UNION_AGG",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/hll_union_agg"},next:{title:"TOPN_ARRAY",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/topn_array"}},c={},s=[{value:"TOPN",id:"topn",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"topn"},"TOPN"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"topn(expr, INT top_num[, INT space_expand_rate])")),(0,a.kt)("p",null,"The topn function uses the Space-Saving algorithm to calculate the top_num frequent items in expr, and the result is the\nfrequent items and their occurrence times, which is an approximation"),(0,a.kt)("p",null,"The space_expand_rate parameter is optional and is used to set the number of counters used in the Space-Saving algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"counter numbers = top_num * space_expand_rate\n")),(0,a.kt)("p",null,"The higher value of space_expand_rate, the more accurate result will be. The default value is 50"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MySQL [test]> select topn(keyword,10) from keyword_table where date>= '2020-06-01' and date <= '2020-06-19' ;\n+------------------------------------------------------------------------------------------------------------+\n| topn(`keyword`, 10)                                                                                        |\n+------------------------------------------------------------------------------------------------------------+\n| a:157, b:138, c:133, d:133, e:131, f:127, g:124, h:122, i:117, k:117                                       |\n+------------------------------------------------------------------------------------------------------------+\n\nMySQL [test]> select date,topn(keyword,10,100) from keyword_table where date>= '2020-06-17' and date <= '2020-06-19' group by date;\n+------------+-----------------------------------------------------------------------------------------------+\n| date       | topn(`keyword`, 10, 100)                                                                      |\n+------------+-----------------------------------------------------------------------------------------------+\n| 2020-06-19 | a:11, b:8, c:8, d:7, e:7, f:7, g:7, h:7, i:7, j:7                                             |\n| 2020-06-18 | a:10, b:8, c:7, f:7, g:7, i:7, k:7, l:7, m:6, d:6                                             |\n| 2020-06-17 | a:9, b:8, c:8, j:8, d:7, e:7, f:7, h:7, i:7, k:7                                              |\n+------------+-----------------------------------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"TOPN"))}d.isMDXComponent=!0}}]);