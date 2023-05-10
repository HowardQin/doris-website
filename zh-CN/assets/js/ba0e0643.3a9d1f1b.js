"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[43654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,O=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(O,o(o({ref:t},s),{},{components:n})):r.createElement(O,o({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"PAUSE-ROUTINE-LOAD",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD",title:"PAUSE-ROUTINE-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"PAUSE-ROUTINE-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-CATALOG",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-CATALOG"},next:{title:"MULTI-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD"}},c={},p=[{value:"PAUSE-ROUTINE-LOAD",id:"pause-routine-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pause-routine-load"},"PAUSE-ROUTINE-LOAD"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"PAUSE ROUTINE LOAD "),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u7528\u4e8e\u6682\u505c\u4e00\u4e2a Routine Load \u4f5c\u4e1a\u3002\u88ab\u6682\u505c\u7684\u4f5c\u4e1a\u53ef\u4ee5\u901a\u8fc7 RESUME \u547d\u4ee4\u91cd\u65b0\u8fd0\u884c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"PAUSE [ALL] ROUTINE LOAD FOR job_name\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6682\u505c\u540d\u79f0\u4e3a test1 \u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"PAUSE ROUTINE LOAD FOR test1;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6682\u505c\u6240\u6709\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"PAUSE ALL ROUTINE LOAD;\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PAUSE, ROUTINE, LOAD\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);