"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[96549],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),i=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},s=function(e){var r=i(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=i(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||g[f]||l;return n?t.createElement(d,p(p({ref:r},s),{},{components:n})):t.createElement(d,p({ref:r},s))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=f;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var i=2;i<l;i++)p[i]=n[i];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94810:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var t=n(87462),a=(n(67294),n(3905));const l={title:"regexp_replace",language:"en"},p=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/regexp/regexp_replace",id:"version-1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace",title:"regexp_replace",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/regexp_replace",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace",draft:!1,tags:[],version:"1.2",frontMatter:{title:"regexp_replace",language:"en"},sidebar:"docs",previous:{title:"regexp_extract_all",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_extract_all"},next:{title:"regexp_replace_one",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace_one"}},c={},i=[{value:"regexp_replace",id:"regexp_replace",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:i},u="wrapper";function g(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"regexp_replace"},"regexp_replace"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR regexp_replace(VARCHAR str, VARCHAR pattern, VARCHAR repl)")),(0,a.kt)("p",null,"Regular matching of STR strings, replacing the part hitting pattern with repl"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> SELECT regexp_replace('a b c', \" \", \"-\");\n+-----------------------------------+\n| regexp_replace('a b c', ' ', '-') |\n+-----------------------------------+\n| a-b-c                             |\n+-----------------------------------+\n\nmysql> SELECT regexp_replace('a b c','(b)','<\\\\1>');\n+----------------------------------------+\n| regexp_replace('a b c', '(b)', '<\\1>') |\n+----------------------------------------+\n| a <b> c                                |\n+----------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"REGEXP_REPLACE,REGEXP,REPLACE\n")))}g.isMDXComponent=!0}}]);