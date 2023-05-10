"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[22972],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),d=l,g=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(87462),l=(t(67294),t(3905));const o={title:"length",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/length",id:"sql-manual/sql-functions/string-functions/length",title:"length",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/length.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/length",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/length",draft:!1,tags:[],version:"current",frontMatter:{title:"length",language:"en"},sidebar:"docs",previous:{title:"ascii",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/ascii"},next:{title:"bit_length",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/bit_length"}},s={},c=[{value:"length",id:"length",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"length"},"length"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"INT length (VARCHAR str)")),(0,l.kt)("p",null,"Returns the length of the string in byte size."),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select length(\"abc\");\n+---------------+\n| length('abc') |\n+---------------+\n|             3 |\n+---------------+\n\nmysql> select length(\"\u4e2d\u56fd\");\n+------------------+\n| length('\u4e2d\u56fd')   |\n+------------------+\n|                6 |\n+------------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"LENGTH\n")))}f.isMDXComponent=!0}}]);