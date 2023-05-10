"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[66852],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=l.createContext({}),c=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return l.createElement(u.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=c(t),d=r,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return t?l.createElement(m,o(o({ref:n},s),{},{components:t})):l.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[f]="string"==typeof e?e:r,o[1]=a;for(var c=2;c<i;c++)o[c]=t[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21162:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var l=t(87462),r=(t(67294),t(3905));const i={title:"ifnull",language:"en"},o=void 0,a={unversionedId:"sql-manual/sql-functions/conditional-functions/ifnull",id:"sql-manual/sql-functions/conditional-functions/ifnull",title:"ifnull",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/conditional-functions/ifnull.md",sourceDirName:"sql-manual/sql-functions/conditional-functions",slug:"/sql-manual/sql-functions/conditional-functions/ifnull",permalink:"/docs/dev/sql-manual/sql-functions/conditional-functions/ifnull",draft:!1,tags:[],version:"current",frontMatter:{title:"ifnull",language:"en"},sidebar:"docs",previous:{title:"if",permalink:"/docs/dev/sql-manual/sql-functions/conditional-functions/if"},next:{title:"nvl",permalink:"/docs/dev/sql-manual/sql-functions/conditional-functions/nvl"}},u={},c=[{value:"ifnull",id:"ifnull",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c},f="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(f,(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ifnull"},"ifnull"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ifnull(expr1, expr2)")),(0,r.kt)("p",null,"If the value of expr1 is not null, expr1 is returned, otherwise expr2 is returned"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select ifnull(1,0);\n+--------------+\n| ifnull(1, 0) |\n+--------------+\n|            1 |\n+--------------+\n\nmysql> select ifnull(null,10);\n+------------------+\n| ifnull(NULL, 10) |\n+------------------+\n|               10 |\n+------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("p",null,"IFNULL"))}p.isMDXComponent=!0}}]);