"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[7765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={title:"microseconds_add",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/microseconds_add",id:"version-1.2/sql-manual/sql-functions/date-time-functions/microseconds_add",title:"microseconds_add",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/date-time-functions/microseconds_add.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/microseconds_add",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/microseconds_add",draft:!1,tags:[],version:"1.2",frontMatter:{title:"microseconds_add",language:"en"},sidebar:"docs",previous:{title:"datediff",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/datediff"},next:{title:"minutes_add",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/minutes_add"}},c={},d=[{value:"microseconds_add",id:"microseconds_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],l={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"microseconds_add"},"microseconds_add"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DATETIMEV2 microseconds_add(DATETIMEV2 basetime, INT delta)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"basetime: Base time whose type is DATETIMEV2"),(0,o.kt)("li",{parentName:"ul"},"delta: Microseconds to add to basetime"),(0,o.kt)("li",{parentName:"ul"},"Return type of this function is DATETIMEV2")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select now(3), microseconds_add(now(3), 100000);\n+-------------------------+----------------------------------+\n| now(3)                  | microseconds_add(now(3), 100000) |\n+-------------------------+----------------------------------+\n| 2023-02-21 11:35:56.556 | 2023-02-21 11:35:56.656          |\n+-------------------------+----------------------------------+\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"now(3)")," returns current time as type DATETIMEV2 with precision 3d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"microseconds_add(now(3), 100000)")," means 100000 microseconds after current time"),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"microseconds_add\n")))}m.isMDXComponent=!0}}]);