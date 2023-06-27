"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[16278],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||s;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},24522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const s={title:"abs",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/math-functions/abs",id:"version-1.2/sql-manual/sql-functions/math-functions/abs",title:"abs",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/math-functions/abs.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/abs",permalink:"/docs/1.2/sql-manual/sql-functions/math-functions/abs",draft:!1,tags:[],version:"1.2",frontMatter:{title:"abs",language:"en"},sidebar:"docs",previous:{title:"truncate",permalink:"/docs/1.2/sql-manual/sql-functions/math-functions/truncate"},next:{title:"sqrt",permalink:"/docs/1.2/sql-manual/sql-functions/math-functions/sqrt"}},i={},c=[{value:"abs",id:"abs",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"abs"},"abs"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SMALLINT abs(TINYINT x)\nINT abs(SMALLINT x)\nBIGINT abs(INT x)\nLARGEINT abs(BIGINT x)\nLARGEINT abs(LARGEINT x)\nDOUBLE abs(DOUBLE x)\nFLOAT abs(FLOAT x)\nDECIMAL abs(DECIMAL x)` \n")),(0,a.kt)("p",null,"Returns the absolute value of ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select abs(-2);\n+---------+\n| abs(-2) |\n+---------+\n|       2 |\n+---------+\nmysql> select abs(3.254655654);\n+------------------+\n| abs(3.254655654) |\n+------------------+\n|      3.254655654 |\n+------------------+\nmysql> select abs(-3254654236547654354654767);\n+---------------------------------+\n| abs(-3254654236547654354654767) |\n+---------------------------------+\n| 3254654236547654354654767       |\n+---------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ABS\n")))}f.isMDXComponent=!0}}]);