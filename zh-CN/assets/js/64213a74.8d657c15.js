"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[90886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"MERGE",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/combinators/merge",id:"sql-manual/sql-functions/combinators/merge",title:"MERGE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/combinators/merge.md",sourceDirName:"sql-manual/sql-functions/combinators",slug:"/sql-manual/sql-functions/combinators/merge",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/merge",draft:!1,tags:[],version:"current",frontMatter:{title:"MERGE",language:"zh-CN"},sidebar:"docs",previous:{title:"STATE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/state"},next:{title:"UNION",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/union"}},s={},c=[{value:"MERGE",id:"merge",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"merge"},"MERGE"),(0,o.kt)("version",{since:"2.0.0"}),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AGGREGATE_FUNCTION_MERGE(agg_state)"),"\n\u5c06\u805a\u5408\u4e2d\u95f4\u7ed3\u679c\u8fdb\u884c\u805a\u5408\u5e76\u8ba1\u7b97\u83b7\u5f97\u5b9e\u9645\u7ed3\u679c\u3002\n\u7ed3\u679c\u7684\u7c7b\u578b\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"AGGREGATE_FUNCTION"),"\u4e00\u81f4\u3002"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql [test]>select avg_merge(avg_state(1)) from d_table;\n+-------------------------+\n| avg_merge(avg_state(1)) |\n+-------------------------+\n|                       1 |\n+-------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"AGG_STATE, MERGE"))}m.isMDXComponent=!0}}]);