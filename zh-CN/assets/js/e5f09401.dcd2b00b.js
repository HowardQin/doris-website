"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66055],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var a=n.createContext({}),c=function(t){var e=n.useContext(a),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(a.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,s=t.originalType,a=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(r),d=i,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||s;return r?n.createElement(m,o(o({ref:e},u),{},{components:r})):n.createElement(m,o({ref:e},u))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var a in e)hasOwnProperty.call(e,a)&&(l[a]=e[a]);l.originalType=t,l[p]="string"==typeof t?t:i,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98802:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const s={title:"strright",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/strright",id:"version-1.2/sql-manual/sql-functions/string-functions/strright",title:"strright",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/strright.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/strright",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/strright",draft:!1,tags:[],version:"1.2",frontMatter:{title:"strright",language:"zh-CN"},sidebar:"docs",previous:{title:"strleft",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/strleft"},next:{title:"split_part",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/split_part"}},a={},c=[{value:"strright",id:"strright",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(t){let{components:e,...r}=t;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"strright"},"strright"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR strright(VARCHAR str, INT len)")),(0,i.kt)("p",null,"\u5b83\u8fd4\u56de\u5177\u6709\u6307\u5b9a\u957f\u5ea6\u7684\u5b57\u7b26\u4e32\u7684\u53f3\u8fb9\u90e8\u5206, \u957f\u5ea6\u7684\u5355\u4f4d\u4e3autf8\u5b57\u7b26\u3002\u6b64\u51fd\u6570\u7684\u53e6\u4e00\u4e2a\u522b\u540d\u4e3a",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/right"},"right"),"\u3002"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select strright(\"Hello doris\",5);\n+-------------------------+\n| strright('Hello doris', 5) |\n+-------------------------+\n| doris                   |\n+-------------------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"STRRIGHT\n")))}f.isMDXComponent=!0}}]);