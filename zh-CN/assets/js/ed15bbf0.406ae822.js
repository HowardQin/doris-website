"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[14602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||s;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var i=2;i<s;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const s={title:"hours_sub",language:"zh-CN"},a=void 0,u={unversionedId:"sql-manual/sql-functions/date-time-functions/hours_sub",id:"sql-manual/sql-functions/date-time-functions/hours_sub",title:"hours_sub",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/hours_sub.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/hours_sub",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/hours_sub",draft:!1,tags:[],version:"current",frontMatter:{title:"hours_sub",language:"zh-CN"},sidebar:"docs",previous:{title:"hours_diff",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/hours_diff"},next:{title:"days_add",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/days_add"}},l={},i=[{value:"hours_sub",id:"hours_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hours_sub"},"hours_sub"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DATETIME HOURS_SUB(DATETIME date, INT hours)")),(0,o.kt)("p",null,"\u4ece\u65e5\u671f\u65f6\u95f4\u6216\u65e5\u671f\u51cf\u53bb\u6307\u5b9a\u5c0f\u65f6\u6570"),(0,o.kt)("p",null,"\u53c2\u6570 date \u53ef\u4ee5\u662f DATETIME \u6216\u8005 DATE \u7c7b\u578b\uff0c\u8fd4\u56de\u7c7b\u578b\u4e3a DATETIME\u3002"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select hours_sub(\"2020-02-02 02:02:02\", 1);\n+-------------------------------------+\n| hours_sub('2020-02-02 02:02:02', 1) |\n+-------------------------------------+\n| 2020-02-02 01:02:02                 |\n+-------------------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HOURS_SUB\n")))}d.isMDXComponent=!0}}]);