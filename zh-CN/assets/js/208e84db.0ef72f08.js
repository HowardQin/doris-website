"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[40045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"STATE",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/combinators/state",id:"sql-manual/sql-functions/combinators/state",title:"STATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/combinators/state.md",sourceDirName:"sql-manual/sql-functions/combinators",slug:"/sql-manual/sql-functions/combinators/state",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/state",draft:!1,tags:[],version:"current",frontMatter:{title:"STATE",language:"zh-CN"},sidebar:"docs",previous:{title:"struct_element",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/struct-functions/struct_element"},next:{title:"MERGE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/merge"}},i={},c=[{value:"STATE",id:"state",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"state"},"STATE"),(0,a.kt)("version",{since:"2.0.0"}),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AGGREGATE_FUNCTION_STATE(arg...)"),"\n\u8fd4\u56de\u805a\u5408\u51fd\u6570\u7684\u4e2d\u95f4\u7ed3\u679c\uff0c\u53ef\u4ee5\u7528\u4e8e\u540e\u7eed\u7684\u805a\u5408\u6216\u8005\u901a\u8fc7merge\u7ec4\u5408\u5668\u83b7\u5f97\u5b9e\u9645\u8ba1\u7b97\u7ed3\u679c\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5199\u5165agg_state\u7c7b\u578b\u7684\u8868\u4fdd\u5b58\u4e0b\u6765\u3002\n\u7ed3\u679c\u7684\u7c7b\u578b\u4e3aagg_state\uff0cagg_state\u4e2d\u7684\u51fd\u6570\u7b7e\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"AGGREGATE_FUNCTION(arg...)"),"\u3002"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql [test]>select avg_merge(t) from (select avg_union(avg_state(1)) as t from d_table group by k1)p;\n+----------------+\n| avg_merge(`t`) |\n+----------------+\n|              1 |\n+----------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"AGG_STATE,STATE"))}m.isMDXComponent=!0}}]);