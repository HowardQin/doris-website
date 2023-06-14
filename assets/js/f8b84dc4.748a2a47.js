"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[34246],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),k=a,d=p["".concat(i,".").concat(k)]||p[k]||y[k]||l;return r?t.createElement(d,o(o({ref:n},u),{},{components:r})):t.createElement(d,o({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}k.displayName="MDXCreateElement"},56117:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const l={title:"array_except",language:"en"},o=void 0,c={unversionedId:"sql-manual/sql-functions/array-functions/array_except",id:"version-1.2/sql-manual/sql-functions/array-functions/array_except",title:"array_except",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/array_except.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_except",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_except",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_except",language:"en"},sidebar:"docs",previous:{title:"array_contains",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_contains"},next:{title:"array_product",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_product"}},i={},s=[{value:"array_except",id:"array_except",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function y(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_except"},"array_except"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"array_except")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY<T> array_except(ARRAY<T> array1, ARRAY<T> array2)")),(0,a.kt)("p",null,"Returns an array of the elements in array1 but not in array2, without duplicates. If the input parameter is null, null is returned."),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table;\n+------+-----------------+--------------+--------------------------+\n| k1   | k2              | k3           | array_except(`k2`, `k3`) |\n+------+-----------------+--------------+--------------------------+\n|    1 | [1, 2, 3]       | [2, 4, 5]    | [1, 3]                   |\n|    2 | [2, 3]          | [1, 5]       | [2, 3]                   |\n|    3 | [1, 1, 1]       | [2, 2, 2]    | [1]                      |\n+------+-----------------+--------------+--------------------------+\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table_nullable;\n+------+-----------------+--------------+--------------------------+\n| k1   | k2              | k3           | array_except(`k2`, `k3`) |\n+------+-----------------+--------------+--------------------------+\n|    1 | [1, NULL, 3]    | [1, 3, 5]    | [NULL]                   |\n|    2 | [NULL, NULL, 2] | [2, NULL, 4] | []                       |\n|    3 | NULL            | [1, 2, 3]    | NULL                     |\n+------+-----------------+--------------+--------------------------+\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table_varchar;\n+------+----------------------------+----------------------------------+--------------------------+\n| k1   | k2                         | k3                               | array_except(`k2`, `k3`) |\n+------+----------------------------+----------------------------------+--------------------------+\n|    1 | ['hello', 'world', 'c++']  | ['I', 'am', 'c++']               | ['hello', 'world']       |\n|    2 | ['a1', 'equals', 'b1']     | ['a2', 'equals', 'b2']           | ['a1', 'b1']             |\n|    3 | ['hasnull', NULL, 'value'] | ['nohasnull', 'nonull', 'value'] | ['hasnull', NULL]        |\n|    3 | ['hasnull', NULL, 'value'] | ['hasnull', NULL, 'value']       | []                       |\n+------+----------------------------+----------------------------------+--------------------------+\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table_decimal;\n+------+------------------+-------------------+--------------------------+\n| k1   | k2               | k3                | array_except(`k2`, `k3`) |\n+------+------------------+-------------------+--------------------------+\n|    1 | [1.1, 2.1, 3.44] | [2.1, 3.4, 5.4]   | [1.1, 3.44]              |\n|    2 | [NULL, 2, 5]     | [NULL, NULL, 5.4] | [2, 5]                   |\n|    1 | [1, NULL, 2, 5]  | [1, 3.1, 5.4]     | [NULL, 2, 5]             |\n+------+------------------+-------------------+--------------------------+\n\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,EXCEPT,ARRAY_EXCEPT"))}y.isMDXComponent=!0}}]);