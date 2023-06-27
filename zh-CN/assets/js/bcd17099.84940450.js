"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[57960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"element_at",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/element_at",id:"sql-manual/sql-functions/array-functions/element_at",title:"element_at",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/element_at.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/element_at",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/element_at",draft:!1,tags:[],version:"current",frontMatter:{title:"element_at",language:"zh-CN"},sidebar:"docs",previous:{title:"countequal",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/countequal"},next:{title:"convert_tz",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/convert_tz"}},c={},s=[{value:"element_at",id:"element_at",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"element_at"},"element_at"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"element_at")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"T element_at(ARRAY<T> arr, BIGINT position)\nT arr[position]\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u6570\u7ec4\u4e2d\u4f4d\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"position")," \u7684\u5143\u7d20\u3002\u5982\u679c\u8be5\u4f4d\u7f6e\u4e0a\u5143\u7d20\u4e0d\u5b58\u5728\uff0c\u8fd4\u56deNULL\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"position")," \u4ece1\u5f00\u59cb\uff0c\u5e76\u4e14\u652f\u6301\u8d1f\u6570\u3002"),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"position")," \u4e3a\u6b63\u6570\u4f7f\u7528\u8303\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,element_at(c_array, 5) FROM `array_test`;\n+------+-----------------+--------------------------+\n| id   | c_array         | element_at(`c_array`, 5) |\n+------+-----------------+--------------------------+\n|    1 | [1, 2, 3, 4, 5] |                        5 |\n|    2 | [6, 7, 8]       |                     NULL |\n|    3 | []              |                     NULL |\n|    4 | NULL            |                     NULL |\n+------+-----------------+--------------------------+\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"position")," \u4e3a\u8d1f\u6570\u4f7f\u7528\u8303\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,c_array[-2] FROM `array_test`;\n+------+-----------------+----------------------------------+\n| id   | c_array         | %element_extract%(`c_array`, -2) |\n+------+-----------------+----------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                                4 |\n|    2 | [6, 7, 8]       |                                7 |\n|    3 | []              |                             NULL |\n|    4 | NULL            |                             NULL |\n+------+-----------------+----------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ELEMENT_AT, SUBSCRIPT"))}m.isMDXComponent=!0}}]);