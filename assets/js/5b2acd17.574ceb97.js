"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[36159],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,m=s["".concat(p,".").concat(d)]||s[d]||y[d]||l;return r?t.createElement(m,i(i({ref:n},c),{},{components:r})):t.createElement(m,i({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98376:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=r(87462),a=(r(67294),r(3905));const l={title:"array_apply",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_apply",id:"version-1.2/sql-manual/sql-functions/array-functions/array_apply",title:"array_apply",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/array_apply.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_apply",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_apply",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_apply",language:"en"}},p={},u=[{value:"array_apply",id:"array_apply",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},s="wrapper";function y(e){let{components:n,...r}=e;return(0,a.kt)(s,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_apply"},"array_apply"),(0,a.kt)("version",{since:"1.2.3"},(0,a.kt)("p",null,"array_apply")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"Filter array to match specific binary condition"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"array_apply(arr, op, val)\n")),(0,a.kt)("h4",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"arr")," \u2014 The array to inspect. If it null, null will be returned.\n",(0,a.kt)("inlineCode",{parentName:"p"},"op")," \u2014 The compare operation, op includes ",(0,a.kt)("inlineCode",{parentName:"p"},"="),", ",(0,a.kt)("inlineCode",{parentName:"p"},">="),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,a.kt)("inlineCode",{parentName:"p"},">"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"!="),". Support const value only.\n",(0,a.kt)("inlineCode",{parentName:"p"},"val")," \u2014 The compared value.If it null, null will be returned. Support const value only."),(0,a.kt)("h4",{id:"returned-value"},"Returned value"),(0,a.kt)("p",null,"The filtered array matched with condition."),(0,a.kt)("p",null,"Type: Array."),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mysql> select array_apply([1, 2, 3, 4, 5], ">=", 2);\n+--------------------------------------------+\n| array_apply(ARRAY(1, 2, 3, 4, 5), \'>=\', 2) |\n+--------------------------------------------+\n| [2, 3, 4, 5]                               |\n+--------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_apply([1000000, 1000001, 1000002], "=", "1000002");\n+-------------------------------------------------------------+\n| array_apply(ARRAY(1000000, 1000001, 1000002), \'=\', 1000002) |\n+-------------------------------------------------------------+\n| [1000002]                                                   |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n')),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,APPLY,ARRAY_APPLY"))}y.isMDXComponent=!0}}]);