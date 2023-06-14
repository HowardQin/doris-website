"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"element_at",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/element_at",id:"version-1.2/sql-manual/sql-functions/array-functions/element_at",title:"element_at",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/element_at.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/element_at",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/element_at",draft:!1,tags:[],version:"1.2",frontMatter:{title:"element_at",language:"en"},sidebar:"docs",previous:{title:"countequal",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/countequal"},next:{title:"convert_tz",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/convert_tz"}},s={},c=[{value:"element_at",id:"element_at",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"element_at"},"element_at"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"element_at")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"T element_at(ARRAY<T> arr, BIGINT position)\nT arr[position]\n")),(0,a.kt)("p",null,"Returns an element of an array located at the input position. If there is no element at the position, return NULL."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"position")," is 1-based and support negative number."),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("p",null,"positive ",(0,a.kt)("inlineCode",{parentName:"p"},"position")," example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,element_at(c_array, 5) FROM `array_test`;\n+------+-----------------+--------------------------+\n| id   | c_array         | element_at(`c_array`, 5) |\n+------+-----------------+--------------------------+\n|    1 | [1, 2, 3, 4, 5] |                        5 |\n|    2 | [6, 7, 8]       |                     NULL |\n|    3 | []              |                     NULL |\n|    4 | NULL            |                     NULL |\n+------+-----------------+--------------------------+\n")),(0,a.kt)("p",null,"negative ",(0,a.kt)("inlineCode",{parentName:"p"},"position")," example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,c_array[-2] FROM `array_test`;\n+------+-----------------+----------------------------------+\n| id   | c_array         | %element_extract%(`c_array`, -2) |\n+------+-----------------+----------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                                4 |\n|    2 | [6, 7, 8]       |                                7 |\n|    3 | []              |                             NULL |\n|    4 | NULL            |                             NULL |\n+------+-----------------+----------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ELEMENT_AT, SUBSCRIPT"))}m.isMDXComponent=!0}}]);