"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"greatest",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/math-functions/greatest",id:"sql-manual/sql-functions/math-functions/greatest",title:"greatest",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/math-functions/greatest.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/greatest",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/greatest",draft:!1,tags:[],version:"current",frontMatter:{title:"greatest",language:"en"},sidebar:"docs",previous:{title:"negative",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/negative"},next:{title:"least",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/least"}},s={},p=[{value:"greatest",id:"greatest",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"greatest"},"greatest"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"greatest(col_a, col_b, \u2026, col_n)"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"column")," supports the following types: ",(0,a.kt)("inlineCode",{parentName:"p"},"TINYINT")," ",(0,a.kt)("inlineCode",{parentName:"p"},"SMALLINT")," ",(0,a.kt)("inlineCode",{parentName:"p"},"INT")," ",(0,a.kt)("inlineCode",{parentName:"p"},"BIGINT")," ",(0,a.kt)("inlineCode",{parentName:"p"},"LARGEINT")," ",(0,a.kt)("inlineCode",{parentName:"p"},"FLOAT")," ",(0,a.kt)("inlineCode",{parentName:"p"},"DOUBLE")," ",(0,a.kt)("inlineCode",{parentName:"p"},"STRING")," ",(0,a.kt)("inlineCode",{parentName:"p"},"DATETIME")," ",(0,a.kt)("inlineCode",{parentName:"p"},"DECIMAL")),(0,a.kt)("p",null,"Compares the size of ",(0,a.kt)("inlineCode",{parentName:"p"},"n columns")," and returns the largest among them. If there is ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"column"),", it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select greatest(-1, 0, 5, 8);\n+-----------------------+\n| greatest(-1, 0, 5, 8) |\n+-----------------------+\n|                     8 |\n+-----------------------+\nmysql> select greatest(-1, 0, 5, NULL);\n+--------------------------+\n| greatest(-1, 0, 5, NULL) |\n+--------------------------+\n| NULL                     |\n+--------------------------+\nmysql> select greatest(6.3, 4.29, 7.6876);\n+-----------------------------+\n| greatest(6.3, 4.29, 7.6876) |\n+-----------------------------+\n|                      7.6876 |\n+-----------------------------+\nmysql> select greatest(\"2022-02-26 20:02:11\",\"2020-01-23 20:02:11\",\"2020-06-22 20:02:11\");\n+-------------------------------------------------------------------------------+\n| greatest('2022-02-26 20:02:11', '2020-01-23 20:02:11', '2020-06-22 20:02:11') |\n+-------------------------------------------------------------------------------+\n| 2022-02-26 20:02:11                                                           |\n+-------------------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GREATEST\n")))}m.isMDXComponent=!0}}]);