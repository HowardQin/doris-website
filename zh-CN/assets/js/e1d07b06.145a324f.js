"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"time_to_sec",language:"zh-CN"},a=void 0,c={unversionedId:"sql-manual/sql-functions/date-time-functions/time_to_sec",id:"sql-manual/sql-functions/date-time-functions/time_to_sec",title:"time_to_sec",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/time_to_sec.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/time_to_sec",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/time_to_sec",draft:!1,tags:[],version:"current",frontMatter:{title:"time_to_sec",language:"zh-CN"},sidebar:"docs",previous:{title:"to_days",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/to_days"},next:{title:"extract",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/extract"}},s={},l=[{value:"time_to_sec",id:"time_to_sec",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"time_to_sec"},"time_to_sec"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"INT time_to_sec(TIME datetime)")),(0,o.kt)("p",null,"\u53c2\u6570\u4e3aDatetime\u7c7b\u578b\n\u5c06\u6307\u5b9a\u7684\u65f6\u95f4\u503c\u8f6c\u4e3a\u79d2\u6570\uff0c\u5373\u8fd4\u56de\u7ed3\u679c\u4e3a\uff1a\u5c0f\u65f6\xd73600 + \u5206\u949f\xd760 + \u79d2\u3002"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql >select current_time(),time_to_sec(current_time());\n+----------------+-----------------------------+\n| current_time() | time_to_sec(current_time()) |\n+----------------+-----------------------------+\n| 16:32:18       |                       59538 |\n+----------------+-----------------------------+\n1 row in set (0.01 sec)\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TIME_TO_SEC\n")))}p.isMDXComponent=!0}}]);