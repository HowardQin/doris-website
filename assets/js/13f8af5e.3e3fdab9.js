"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[15222],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=s(t),d=l,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[f]="string"==typeof e?e:l,o[1]=a;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=t(87462),l=(t(67294),t(3905));const i={title:"ifnull",language:"en"},o=void 0,a={unversionedId:"sql-manual/sql-functions/conditional-functions/ifnull",id:"version-1.2/sql-manual/sql-functions/conditional-functions/ifnull",title:"ifnull",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/conditional-functions/ifnull.md",sourceDirName:"sql-manual/sql-functions/conditional-functions",slug:"/sql-manual/sql-functions/conditional-functions/ifnull",permalink:"/docs/1.2/sql-manual/sql-functions/conditional-functions/ifnull",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ifnull",language:"en"},sidebar:"docs",previous:{title:"if",permalink:"/docs/1.2/sql-manual/sql-functions/conditional-functions/if"},next:{title:"nvl",permalink:"/docs/1.2/sql-manual/sql-functions/conditional-functions/nvl"}},u={},s=[{value:"ifnull",id:"ifnull",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},f="wrapper";function p(e){let{components:n,...t}=e;return(0,l.kt)(f,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ifnull"},"ifnull"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ifnull(expr1, expr2)")),(0,l.kt)("p",null,"If the value of expr1 is not null, expr1 is returned, otherwise expr2 is returned"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select ifnull(1,0);\n+--------------+\n| ifnull(1, 0) |\n+--------------+\n|            1 |\n+--------------+\n\nmysql> select ifnull(null,10);\n+------------------+\n| ifnull(NULL, 10) |\n+------------------+\n|               10 |\n+------------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("p",null,"IFNULL"))}p.isMDXComponent=!0}}]);