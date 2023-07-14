"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[24034],{3905:(t,n,e)=>{e.d(n,{Zo:()=>m,kt:()=>b});var r=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var s=r.createContext({}),l=function(t){var n=r.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},m=function(t){var n=l(t.components);return r.createElement(s.Provider,{value:n},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=l(e),_=a,b=c["".concat(s,".").concat(_)]||c[_]||u[_]||i;return e?r.createElement(b,o(o({ref:n},m),{},{components:e})):r.createElement(b,o({ref:n},m))}));function b(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,o=new Array(i);o[0]=_;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=t,p[c]="string"==typeof t?t:a,o[1]=p;for(var l=2;l<i;l++)o[l]=e[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}_.displayName="MDXCreateElement"},63571:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=e(87462),a=(e(67294),e(3905));const i={title:"bitmap_and_not",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_and_not",id:"sql-manual/sql-functions/bitmap-functions/bitmap_and_not",title:"bitmap_and_not",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/bitmap_and_not.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_and_not",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_and_not",draft:!1,tags:[],version:"current",frontMatter:{title:"bitmap_and_not",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_not",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_not"},next:{title:"bitmap_subset_limit",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_subset_limit"}},s={},l=[{value:"bitmap_and_not",id:"bitmap_and_not",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:l},c="wrapper";function u(t){let{components:n,...e}=t;return(0,a.kt)(c,(0,r.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bitmap_and_not"},"bitmap_and_not"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_AND_NOT(BITMAP lhs, BITMAP rhs)")),(0,a.kt)("p",null,"\u5c06\u4e24\u4e2abitmap\u8fdb\u884c\u4e0e\u975e\u64cd\u4f5c\u5e76\u8fd4\u56de\u8ba1\u7b97\u7ed3\u679c\u3002"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select bitmap_count(bitmap_and_not(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'))) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n\nmysql> select bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5')));\n+--------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'))) |\n+--------------------------------------------------------------------------------------------+\n| 1,2                                                                                        |\n+--------------------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'),bitmap_empty())) ;\n+-------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'), bitmap_empty())) |\n+-------------------------------------------------------------------------------+\n| 1,2,3                                                                         |\n+-------------------------------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'),NULL));\n+---------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'), NULL)) |\n+---------------------------------------------------------------------+\n| NULL                                                                |\n+---------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BITMAP_AND_NOT,BITMAP\n")))}u.isMDXComponent=!0}}]);