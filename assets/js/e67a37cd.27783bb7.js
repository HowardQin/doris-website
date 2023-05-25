"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[47705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?l.createElement(f,o(o({ref:t},m),{},{components:n})):l.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const a={title:"localtime,localtimestamp",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/localtime",id:"sql-manual/sql-functions/date-time-functions/localtime",title:"localtime,localtimestamp",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/localtime.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/localtime",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/localtime",draft:!1,tags:[],version:"current",frontMatter:{title:"localtime,localtimestamp",language:"en"},sidebar:"docs",previous:{title:"current_timestamp",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/current_timestamp"},next:{title:"now",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/now"}},c={},s=[{value:"localtime,localtimestamp",id:"localtimelocaltimestamp",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"localtimelocaltimestamp"},"localtime,localtimestamp"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DATETIME localtime()"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"DATETIME localtimestamp()")),(0,r.kt)("p",null,"Get the current time and return it in Datetime type."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select localtime();\n+---------------------+\n| localtime()         |\n+---------------------+\n| 2022-09-22 17:30:23 |\n+---------------------+\n\nmysql> select localtimestamp();\n+---------------------+\n| localtimestamp()    |\n+---------------------+\n| 2022-09-22 17:30:29 |\n+---------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"localtime,localtimestamp\n")))}u.isMDXComponent=!0}}]);