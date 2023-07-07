"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[79913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"right",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/right",id:"sql-manual/sql-functions/string-functions/right",title:"right",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/right.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/right",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/right",draft:!1,tags:[],version:"current",frontMatter:{title:"right",language:"zh-CN"},sidebar:"docs",previous:{title:"left",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/left"},next:{title:"strleft",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/strleft"}},a={},c=[{value:"right",id:"right",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"right"},"right"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR right(VARCHAR str, INT len)")),(0,i.kt)("p",null,"\u5b83\u8fd4\u56de\u5177\u6709\u6307\u5b9a\u957f\u5ea6\u7684\u5b57\u7b26\u4e32\u7684\u53f3\u8fb9\u90e8\u5206, \u957f\u5ea6\u7684\u5355\u4f4d\u4e3autf8\u5b57\u7b26\u3002\u6b64\u51fd\u6570\u7684\u53e6\u4e00\u4e2a\u522b\u540d\u4e3a",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/strright"},"strright"),"\u3002"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select right(\"Hello doris\",5);\n+-------------------------+\n| right('Hello doris', 5) |\n+-------------------------+\n| doris                   |\n+-------------------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RIGHT\n")))}f.isMDXComponent=!0}}]);