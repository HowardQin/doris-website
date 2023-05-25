"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[83465],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(s,".").concat(d)]||p[d]||y[d]||i;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43533:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={title:"array_zip",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array_zip",id:"version-1.2/sql-manual/sql-functions/array-functions/array_zip",title:"array_zip",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/array_zip.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_zip",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_zip",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_zip",language:"en"},sidebar:"docs",previous:{title:"array_concat",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_concat"},next:{title:"array_shuffle",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_shuffle"}},s={},c=[{value:"array_zip",id:"array_zip",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_zip"},"array_zip"),(0,a.kt)("version",{since:"1.2.3"},(0,a.kt)("p",null,"array_zip")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"Combines all all arrays into a single array. The resulting array contains the corresponding elements of the source arrays grouped into structs in the listed order of arguments."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Array<Struct<T1, T2,...>> array_zip(Array<T1>, Array<T2>, ...)")),(0,a.kt)("h4",{id:"returned-value"},"Returned value"),(0,a.kt)("p",null,"Array with elements from the source arrays grouped into tuples. Data types in the tuple are the same as types of the input arrays and in the same order as arrays are passed."),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select array_zip(['a', 'b', 'c'], [1, 2, 3]);\n+-------------------------------------------------+\n| array_zip(ARRAY('a', 'b', 'c'), ARRAY(1, 2, 3)) |\n+-------------------------------------------------+\n| [{'a', 1}, {'b', 2}, {'c', 3}]                  |\n+-------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,ZIP,ARRAY_ZIP"))}y.isMDXComponent=!0}}]);