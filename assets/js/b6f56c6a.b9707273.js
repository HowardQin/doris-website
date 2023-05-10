"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[35422],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=l(n),p=a,y=f["".concat(d,".").concat(p)]||f[p]||u[p]||i;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[f]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"days_diff",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/days_diff",id:"sql-manual/sql-functions/date-time-functions/days_diff",title:"days_diff",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/days_diff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/days_diff",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/days_diff",draft:!1,tags:[],version:"current",frontMatter:{title:"days_diff",language:"en"},sidebar:"docs",previous:{title:"days_add",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/days_add"},next:{title:"days_sub",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/days_sub"}},d={},l=[{value:"days_diff",id:"days_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:l},f="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"days_diff"},"days_diff"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INT days_diff(DATETIME enddate, DATETIME startdate)")),(0,a.kt)("p",null,'The difference between the start time and the end time is a few days, the date judgment is accurate to seconds and rounded down to an integer. This is different from date_diff function, which only provides accuracy up to days."'),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select days_diff('2020-12-25 22:00:00','2020-12-24 22:00:00');\n+---------------------------------------------------------+\n| days_diff('2020-12-25 22:00:00', '2020-12-24 22:00:00') |\n+---------------------------------------------------------+\n|                                                       1 |\n+---------------------------------------------------------+\n\nmysql> select days_diff('2020-12-25 22:00:00','2020-12-24 22:00:01');\n+---------------------------------------------------------+\n| days_diff('2020-12-24 22:00:01', '2020-12-25 22:00:00') |\n+---------------------------------------------------------+\n|                                                       0 |\n+---------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"days_diff\n")))}u.isMDXComponent=!0}}]);